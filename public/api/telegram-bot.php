<?php
/**
 * AEGIDA Telegram Bot — Webhook handler
 * Comandi:
 *   /pubblica  — Merge della PR aperta più recente
 *   /modifica [testo] — Aggiunge un commento alla PR con le modifiche richieste
 *   /stato — Mostra lo stato delle PR aperte
 *
 * Sicurezza:
 * - Secret token Telegram verificato (X-Telegram-Bot-Api-Secret-Token)
 * - Chat ID whitelist
 * - Secrets in config.local.php (esterno al VCS)
 *
 * IMPORTANTE: dopo aver impostato TELEGRAM_WEBHOOK_SECRET in config.local.php,
 * registrare il webhook con il secret:
 *   curl "https://api.telegram.org/bot<TOKEN>/setWebhook" \
 *     -d "url=https://www.aegida-systems.com/api/telegram-bot.php" \
 *     -d "secret_token=<SECRET>"
 */

// ─── Config secrets ───────────────────────────────────────
$configFile = __DIR__ . '/config.local.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    exit;
}
require_once $configFile;

// ─── Verifica secret token del webhook ───────────────────
// Telegram invia l'header X-Telegram-Bot-Api-Secret-Token se configurato
// via setWebhook con parametro secret_token.
$providedSecret = $_SERVER['HTTP_X_TELEGRAM_BOT_API_SECRET_TOKEN'] ?? '';
if (!defined('TELEGRAM_WEBHOOK_SECRET') || TELEGRAM_WEBHOOK_SECRET === '') {
    // Senza secret configurato, rifiuta tutto
    http_response_code(403);
    exit;
}
if (!hash_equals(TELEGRAM_WEBHOOK_SECRET, $providedSecret)) {
    http_response_code(403);
    exit;
}

// ─── Limite payload ───────────────────────────────────────
$raw = file_get_contents('php://input');
if (strlen($raw) > 20000) {
    http_response_code(413);
    exit;
}

$input = json_decode($raw, true);
if (!$input || !isset($input['message'])) {
    exit;
}

$chatId = $input['message']['chat']['id'] ?? 0;
$text = trim($input['message']['text'] ?? '');

// ─── Whitelist chat ID ───────────────────────────────────
if ((int)$chatId !== (int)TELEGRAM_CHAT_ID) {
    sendTelegram('Non sei autorizzato.');
    exit;
}

// ─── Comandi ──────────────────────────────────────────────

if ($text === '/pubblica') {
    handlePubblica();
} elseif (strpos($text, '/modifica') === 0) {
    $comment = trim(substr($text, 9));
    if ($comment === '') {
        sendTelegram("Scrivi cosa vuoi modificare.\nEsempio: /modifica Cambia il titolo del primo articolo");
    } else {
        handleModifica($comment);
    }
} elseif ($text === '/stato') {
    handleStato();
} elseif ($text === '/start' || $text === '/help') {
    sendTelegram("*AEGIDA Content Bot*\n\nComandi disponibili:\n\n/stato — Vedi le PR aperte\n/pubblica — Approva e merge della PR\n/modifica [testo] — Richiedi modifiche");
}

// ─── Handlers ─────────────────────────────────────────────

function handleStato() {
    $prs = githubAPI('GET', '/repos/' . GITHUB_REPO . '/pulls?state=open&sort=created&direction=desc&per_page=5');

    if (empty($prs)) {
        sendTelegram("Nessuna PR aperta al momento.");
        return;
    }

    $msg = "*PR aperte:*\n\n";
    foreach ($prs as $i => $pr) {
        $num = $pr['number'];
        $title = $pr['title'];
        $url = $pr['html_url'];
        $msg .= ($i + 1) . ". *#{$num}* {$title}\n   {$url}\n\n";
    }
    sendTelegram($msg);
}

function handlePubblica() {
    $prs = githubAPI('GET', '/repos/' . GITHUB_REPO . '/pulls?state=open&sort=created&direction=desc&per_page=10');

    $contentPr = null;
    foreach ($prs as $pr) {
        if (stripos($pr['title'], 'Content:') === 0 || stripos($pr['title'], 'content/') !== false) {
            $contentPr = $pr;
            break;
        }
    }

    if (!$contentPr && !empty($prs)) {
        $contentPr = $prs[0];
    }

    if (!$contentPr) {
        sendTelegram("Nessuna PR aperta da pubblicare.");
        return;
    }

    $prNumber = $contentPr['number'];
    $prTitle = $contentPr['title'];

    $result = githubAPI('PUT', '/repos/' . GITHUB_REPO . '/pulls/' . $prNumber . '/merge', [
        'merge_method' => 'squash',
        'commit_title' => $prTitle,
    ]);

    if (isset($result['merged']) && $result['merged'] === true) {
        sendTelegram("*Pubblicato!*\n\nPR #{$prNumber} mergiata con successo.\n\n_{$prTitle}_\n\nOra lancia `deploy.sh` per buildare e caricare sul sito.");
    } else {
        $error = $result['message'] ?? 'Errore sconosciuto';
        sendTelegram("Errore durante il merge della PR #{$prNumber}:\n{$error}");
    }
}

function handleModifica($comment) {
    $prs = githubAPI('GET', '/repos/' . GITHUB_REPO . '/pulls?state=open&sort=created&direction=desc&per_page=5');

    $contentPr = null;
    foreach ($prs as $pr) {
        if (stripos($pr['title'], 'Content:') === 0 || stripos($pr['title'], 'content/') !== false) {
            $contentPr = $pr;
            break;
        }
    }

    if (!$contentPr && !empty($prs)) {
        $contentPr = $prs[0];
    }

    if (!$contentPr) {
        sendTelegram("Nessuna PR aperta su cui richiedere modifiche.");
        return;
    }

    $prNumber = $contentPr['number'];

    $result = githubAPI('POST', '/repos/' . GITHUB_REPO . '/issues/' . $prNumber . '/comments', [
        'body' => "**Richiesta modifica da Telegram:**\n\n" . $comment,
    ]);

    if (isset($result['id'])) {
        sendTelegram("Richiesta di modifica inviata sulla PR #{$prNumber}.\n\n_\"{$comment}\"_\n\nL'agente la prenderà in carico alla prossima esecuzione.");
    } else {
        sendTelegram("Errore nell'invio del commento.");
    }
}

// ─── Utility ──────────────────────────────────────────────

function sendTelegram($text) {
    $url = 'https://api.telegram.org/bot' . TELEGRAM_BOT_TOKEN . '/sendMessage';
    $payload = json_encode([
        'chat_id' => TELEGRAM_CHAT_ID,
        'text' => $text,
        'parse_mode' => 'Markdown',
    ]);

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_TIMEOUT => 10,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
    ]);
    curl_exec($ch);
    curl_close($ch);
}

function githubAPI($method, $endpoint, $data = null) {
    $url = 'https://api.github.com' . $endpoint;

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . GITHUB_TOKEN,
            'Accept: application/vnd.github.v3+json',
            'Content-Type: application/json',
            'User-Agent: AEGIDA-Bot',
        ],
        CURLOPT_TIMEOUT => 15,
        CURLOPT_SSL_VERIFYPEER => true,
        CURLOPT_SSL_VERIFYHOST => 2,
    ]);

    if ($method === 'POST') {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    } elseif ($method === 'PUT') {
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    }

    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true) ?: [];
}
