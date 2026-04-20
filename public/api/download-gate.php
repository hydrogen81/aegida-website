<?php
/**
 * AEGIDA — Download gate handler
 * Endpoint per gated downloads (brochure, dossier, white paper).
 * Flusso: registra contatto su Brevo → ritorna pdfUrl + success → frontend triggera download.
 *
 * Sicurezza: stessa pattern di contact.php (CORS, rate limit, honeypot, validation, secrets).
 */

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
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Metodo non consentito.']);
    exit;
}

// ─── Rate limiting ────────────────────────────────────────
$rateLimitDir = sys_get_temp_dir() . '/aegida-ratelimit';
if (!is_dir($rateLimitDir)) {
    @mkdir($rateLimitDir, 0700, true);
}
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$clientIp = explode(',', $clientIp)[0];
$ipHash = hash('sha256', $clientIp);
$rateLimitFile = $rateLimitDir . '/gate-' . $ipHash;
$now = time();
$window = 600;
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

// ─── Parse JSON body ─────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Payload non valido.']);
    exit;
}

// ─── Honeypot ────────────────────────────────────────────
if (!empty($input['website'])) {
    // Silent success (bot)
    echo json_encode(['success' => true, 'pdfUrl' => '']);
    exit;
}

// ─── Validation ──────────────────────────────────────────
$name = trim($input['name'] ?? '');
$email = trim($input['email'] ?? '');
$role = trim($input['role'] ?? '');
$documentSlug = trim($input['documentSlug'] ?? '');
$consent = !empty($input['consent']);

if (strlen($name) < 1 || strlen($name) > 80) {
    http_response_code(400);
    echo json_encode(['error' => 'Nome non valido.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 120) {
    http_response_code(400);
    echo json_encode(['error' => 'Email non valida.']);
    exit;
}

$allowedRoles = ['giornalista', 'avvocato', 'dirigente', 'responsabile-it', 'altro'];
if (!in_array($role, $allowedRoles, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ruolo non valido.']);
    exit;
}

$documents = [
    'privacy-phone-brochure' => '/downloads/aegida-privacy-phone-brochure.pdf',
    'privacy-phone-dossier'  => '/downloads/aegida-privacy-phone-dossier.pdf',
    'framework-brochure'     => '/downloads/aegida-framework-brochure.pdf',
    'white-paper-ufed'       => '/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf',
];
if (!isset($documents[$documentSlug])) {
    http_response_code(400);
    echo json_encode(['error' => 'Documento non valido.']);
    exit;
}
if (!$consent) {
    http_response_code(400);
    echo json_encode(['error' => 'È richiesto il consenso al trattamento dei dati.']);
    exit;
}

// ─── Brevo: add contact ──────────────────────────────────
$brevoPayload = [
    'email'      => $email,
    'attributes' => [
        'NOME'             => $name,
        'RUOLO'            => $role,
        'ULTIMO_DOCUMENTO' => $documentSlug,
    ],
    'updateEnabled' => true,  // se già esiste, aggiorna invece di errore
    'listIds'       => [defined('BREVO_LEAD_LIST_ID') ? (int) BREVO_LEAD_LIST_ID : 0],
];

$ch = curl_init('https://api.brevo.com/v3/contacts');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($brevoPayload),
    CURLOPT_HTTPHEADER     => [
        'accept: application/json',
        'content-type: application/json',
        'api-key: ' . BREVO_API_KEY,
    ],
    CURLOPT_TIMEOUT        => 10,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
]);
$brevoResp = curl_exec($ch);
$brevoCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Brevo returns 201 (created) o 204 (updated).
// Tolleriamo 400 con "Contact already exist" come success (updateEnabled dovrebbe prevenire ma just in case).
$brevoOk = in_array($brevoCode, [200, 201, 204], true);

// ─── Update rate limit ───────────────────────────────────
$requests[] = $now;
@file_put_contents($rateLimitFile, json_encode(array_values($requests)), LOCK_EX);

if (!$brevoOk) {
    error_log("Brevo download-gate error $brevoCode: $brevoResp");
    // Non bloccare l'utente se Brevo fallisce — triggera download comunque ma logga
}

// ─── Success ─────────────────────────────────────────────
echo json_encode([
    'success' => true,
    'pdfUrl'  => $documents[$documentSlug],
]);
