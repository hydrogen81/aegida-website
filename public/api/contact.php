<?php
/**
 * AEGIDA — Contact form handler
 * Endpoint per il form di contatto. Invia email via Brevo API.
 *
 * Sicurezza:
 * - CORS ristretto a aegida-systems.com
 * - Rate limiting: 5 richieste per IP ogni 10 minuti
 * - Honeypot anti-bot (campo "website")
 * - Limiti di lunghezza su tutti gli input
 * - Input sanitization + validazione email
 * - Secrets in config.local.php (esterno al VCS)
 */

// ─── Config secrets ───────────────────────────────────────
$configFile = __DIR__ . '/config.local.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['error' => 'Configurazione mancante.']);
    exit;
}
require_once $configFile;

// ─── CORS ─────────────────────────────────────────────────
$allowedOrigins = [
    'https://www.aegida-systems.com',
    'https://aegida-systems.com',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400');
header('Content-Type: application/json; charset=utf-8');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito.']);
    exit;
}

// ─── Rate limiting (file-based) ───────────────────────────
$rateLimitDir = sys_get_temp_dir() . '/aegida-ratelimit';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0700, true);
}
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$clientIp = explode(',', $clientIp)[0];
$ipHash = hash('sha256', $clientIp);
$rateLimitFile = $rateLimitDir . '/' . $ipHash;
$now = time();
$window = 600;   // 10 minuti
$maxRequests = 5;

$requests = [];
if (file_exists($rateLimitFile)) {
    $data = @file_get_contents($rateLimitFile);
    if ($data) {
        $requests = array_filter(
            json_decode($data, true) ?: [],
            fn($ts) => ($now - $ts) < $window
        );
    }
}

if (count($requests) >= $maxRequests) {
    http_response_code(429);
    header('Retry-After: ' . $window);
    echo json_encode(['error' => 'Troppe richieste. Riprova tra qualche minuto.']);
    exit;
}

$requests[] = $now;
@file_put_contents($rateLimitFile, json_encode(array_values($requests)), LOCK_EX);

// ─── Input parsing ────────────────────────────────────────
$raw = file_get_contents('php://input');
if (strlen($raw) > 10000) {
    http_response_code(413);
    echo json_encode(['error' => 'Payload troppo grande.']);
    exit;
}
$input = json_decode($raw, true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Dati non validi.']);
    exit;
}

// ─── Honeypot anti-bot ────────────────────────────────────
// Il campo "website" deve essere vuoto. I bot automatici lo compilano.
// Se compilato, rispondiamo 200 OK ma non inviamo nulla (niente tip-off al bot).
if (!empty($input['website'] ?? '')) {
    echo json_encode(['success' => true]);
    exit;
}

// ─── Sanitization + validation ────────────────────────────
function sanitize(string $v, int $maxLen): string {
    $v = trim($v);
    if (mb_strlen($v) > $maxLen) {
        $v = mb_substr($v, 0, $maxLen);
    }
    return htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
}

$nome           = sanitize($input['nome'] ?? '', 100);
$organizzazione = sanitize($input['organizzazione'] ?? '', 150);
$emailRaw       = trim($input['email'] ?? '');
$email          = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
$ruolo          = sanitize($input['ruolo'] ?? '', 100);
$prodotto       = sanitize($input['prodotto'] ?? '', 100);
$settore        = sanitize($input['settore'] ?? '', 100);
$messaggio      = sanitize($input['messaggio'] ?? '', 5000);

if (!$nome || !$email || !$prodotto || !$settore) {
    http_response_code(400);
    echo json_encode(['error' => 'Campi obbligatori mancanti.']);
    exit;
}

// Blocco header injection nel campo email (doppio check oltre a FILTER_VALIDATE_EMAIL)
if (preg_match('/[\r\n]/', $emailRaw) || mb_strlen($email) > 254) {
    http_response_code(400);
    echo json_encode(['error' => 'Email non valida.']);
    exit;
}

// ─── Costruzione email ────────────────────────────────────
$recipients = [
    ['email' => 'info@aegida-systems.com', 'name' => 'AEGIDA Info'],
    ['email' => 'daniele.fabro@aegida-systems.com', 'name' => 'Daniele Fabro'],
];

$htmlContent = '
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #0a0e1a; padding: 24px; border-bottom: 2px solid #b8960c;">
    <h1 style="color: #b8960c; font-size: 20px; margin: 0;">AEGIDA — Nuova Richiesta di Briefing</h1>
  </div>
  <div style="padding: 24px; background: #f8f9fa;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 12px; font-weight: bold; color: #333; width: 160px;">Nome</td>
        <td style="padding: 8px 12px; color: #555;">' . $nome . '</td>
      </tr>
      <tr style="background: #fff;">
        <td style="padding: 8px 12px; font-weight: bold; color: #333;">Organizzazione</td>
        <td style="padding: 8px 12px; color: #555;">' . ($organizzazione ?: '—') . '</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-weight: bold; color: #333;">Email</td>
        <td style="padding: 8px 12px; color: #555;">' . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . '</td>
      </tr>
      <tr style="background: #fff;">
        <td style="padding: 8px 12px; font-weight: bold; color: #333;">Ruolo</td>
        <td style="padding: 8px 12px; color: #555;">' . ($ruolo ?: '—') . '</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-weight: bold; color: #333;">Prodotto</td>
        <td style="padding: 8px 12px; color: #555;">' . $prodotto . '</td>
      </tr>
      <tr style="background: #fff;">
        <td style="padding: 8px 12px; font-weight: bold; color: #333;">Settore</td>
        <td style="padding: 8px 12px; color: #555;">' . $settore . '</td>
      </tr>
    </table>'
    . ($messaggio ? '
    <div style="margin-top: 16px; padding: 16px; background: #fff; border-left: 3px solid #b8960c;">
      <p style="font-weight: bold; color: #333; margin: 0 0 8px;">Messaggio</p>
      <p style="color: #555; margin: 0; white-space: pre-wrap;">' . $messaggio . '</p>
    </div>' : '') . '
  </div>
  <div style="padding: 16px 24px; background: #0a0e1a; text-align: center;">
    <p style="color: #64748b; font-size: 12px; margin: 0;">Inviato dal form di contatto di aegida-systems.com</p>
  </div>
</div>';

$payload = json_encode([
    'sender'  => ['name' => 'AEGIDA Website', 'email' => 'noreply@aegida-systems.com'],
    'to'      => $recipients,
    'replyTo' => ['email' => $email, 'name' => $nome],
    'subject' => "Richiesta Briefing — {$nome} ({$organizzazione}) — {$prodotto}",
    'htmlContent' => $htmlContent,
]);

// ─── Invio via Brevo API ──────────────────────────────────
$ch = curl_init('https://api.brevo.com/v3/smtp/email');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        'api-key: ' . BREVO_API_KEY,
        'Content-Type: application/json',
        'Accept: application/json',
    ],
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError || $httpCode >= 400) {
    // Log interno ma messaggio generico all'utente
    error_log("[AEGIDA contact.php] Brevo error: HTTP={$httpCode} curl={$curlError}");
    http_response_code(502);
    echo json_encode(['error' => 'Impossibile inviare il messaggio. Riprova più tardi.']);
    exit;
}

echo json_encode(['success' => true]);
