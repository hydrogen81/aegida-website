<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito.']);
    exit;
}

// ─── Configurazione ───────────────────────────────────────
// Inserisci qui la tua API Key di Brevo
define('BREVO_API_KEY', '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');

define('RECIPIENTS', [
    ['email' => 'info@aegida-systems.com', 'name' => 'AEGIDA Info'],
    ['email' => 'daniele.fabro@aegida-systems.com', 'name' => 'Daniele Fabro'],
]);
// ──────────────────────────────────────────────────────────

$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Dati non validi.']);
    exit;
}

$nome           = htmlspecialchars(trim($input['nome'] ?? ''), ENT_QUOTES, 'UTF-8');
$organizzazione = htmlspecialchars(trim($input['organizzazione'] ?? ''), ENT_QUOTES, 'UTF-8');
$email          = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$ruolo          = htmlspecialchars(trim($input['ruolo'] ?? ''), ENT_QUOTES, 'UTF-8');
$prodotto       = htmlspecialchars(trim($input['prodotto'] ?? ''), ENT_QUOTES, 'UTF-8');
$settore        = htmlspecialchars(trim($input['settore'] ?? ''), ENT_QUOTES, 'UTF-8');
$messaggio      = htmlspecialchars(trim($input['messaggio'] ?? ''), ENT_QUOTES, 'UTF-8');

if (!$nome || !$email || !$prodotto || !$settore) {
    http_response_code(400);
    echo json_encode(['error' => 'Campi obbligatori mancanti.']);
    exit;
}

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
        <td style="padding: 8px 12px; color: #555;"><a href="mailto:' . $email . '">' . $email . '</a></td>
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
    'to'      => RECIPIENTS,
    'replyTo' => ['email' => $email, 'name' => $nome],
    'subject' => "Richiesta Briefing — {$nome} ({$organizzazione}) — {$prodotto}",
    'htmlContent' => $htmlContent,
]);

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
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'Errore di connessione. Riprova più tardi.']);
    exit;
}

if ($httpCode >= 400) {
    http_response_code(500);
    echo json_encode(['error' => 'Brevo HTTP ' . $httpCode . ': ' . $response]);
    exit;
}

echo json_encode(['success' => true]);
