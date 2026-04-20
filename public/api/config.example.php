<?php
/**
 * AEGIDA — Template di configurazione secrets
 *
 * Copiare questo file in `config.local.php` (nella stessa cartella) e
 * compilare i valori reali. Il file `config.local.php` è in .gitignore
 * e NON deve essere committato.
 *
 * Su Aruba, .htaccess blocca l'accesso HTTP diretto a config.local.php.
 */

// Brevo API key (dashboard Brevo → SMTP & API → API Keys)
define('BREVO_API_KEY', 'xkeysib-REPLACE-WITH-REAL-KEY');

// Telegram bot (da @BotFather)
define('TELEGRAM_BOT_TOKEN', 'REPLACE-WITH-REAL-TOKEN');
define('TELEGRAM_CHAT_ID', 0); // il tuo chat ID

// Secret token per webhook Telegram
// IMPORTANTE: deve corrispondere al secret_token impostato con setWebhook.
// Generare con: php -r "echo bin2hex(random_bytes(32));"
define('TELEGRAM_WEBHOOK_SECRET', 'REPLACE-WITH-RANDOM-64-HEX-CHARS');

// GitHub Personal Access Token (Settings → Developer → Tokens)
define('GITHUB_TOKEN', 'github_pat_REPLACE');
define('GITHUB_REPO', 'hydrogen81/aegida-website');
