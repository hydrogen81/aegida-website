#!/bin/bash
# ─────────────────────────────────────────────────────────────
# AEGIDA — Security Check Periodico
# ─────────────────────────────────────────────────────────────
# Esegue una serie di controlli di sicurezza sul progetto e
# sul sito live, salvando un report markdown in security-reports/.
#
# Uso: bash scripts/security-check.sh
# Schedulazione consigliata: ogni 7 giorni (Task Scheduler / cron)
# ─────────────────────────────────────────────────────────────

PROGETTO="C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
SITE="https://www.aegida-systems.com"
DOMAIN="aegida-systems.com"

cd "$PROGETTO" || { echo "ERRORE: cartella progetto non trovata"; exit 1; }

mkdir -p security-reports

DATE=$(date +%Y-%m-%d)
TIME=$(date +%H:%M:%S)
REPORT="security-reports/${DATE}.md"

# Counters
ISSUES_CRITICAL=0
ISSUES_HIGH=0
ISSUES_MEDIUM=0
ISSUES_LOW=0
CHECKS_OK=0

# Helpers
log() {
  echo "$1" | tee -a "$REPORT"
}

check_ok() {
  log "- ✅ $1"
  CHECKS_OK=$((CHECKS_OK + 1))
}

check_critical() {
  log "- 🔴 **CRITICO**: $1"
  ISSUES_CRITICAL=$((ISSUES_CRITICAL + 1))
}

check_high() {
  log "- 🟠 **HIGH**: $1"
  ISSUES_HIGH=$((ISSUES_HIGH + 1))
}

check_medium() {
  log "- 🟡 **MEDIUM**: $1"
  ISSUES_MEDIUM=$((ISSUES_MEDIUM + 1))
}

check_low() {
  log "- 🔵 LOW: $1"
  ISSUES_LOW=$((ISSUES_LOW + 1))
}

# ─── Header report ───────────────────────────────────────────
cat > "$REPORT" <<EOF
# AEGIDA — Security Report ${DATE}

**Generato**: ${DATE} ${TIME}
**Sito**: ${SITE}
**Dominio**: ${DOMAIN}

---

EOF

log "## 1. Dipendenze npm"
log ""

# ─── 1. npm audit ────────────────────────────────────────────
if [ -f package.json ]; then
  AUDIT_JSON=$(npm audit --json 2>/dev/null)
  CRIT=$(echo "$AUDIT_JSON" | grep -o '"critical":[0-9]*' | head -1 | cut -d: -f2)
  HIGH=$(echo "$AUDIT_JSON" | grep -o '"high":[0-9]*' | head -1 | cut -d: -f2)
  MOD=$(echo "$AUDIT_JSON" | grep -o '"moderate":[0-9]*' | head -1 | cut -d: -f2)
  LOW=$(echo "$AUDIT_JSON" | grep -o '"low":[0-9]*' | head -1 | cut -d: -f2)

  CRIT=${CRIT:-0}
  HIGH=${HIGH:-0}
  MOD=${MOD:-0}
  LOW=${LOW:-0}

  if [ "$CRIT" -gt 0 ]; then
    check_critical "${CRIT} vulnerabilità critiche nelle dipendenze npm"
  fi
  if [ "$HIGH" -gt 0 ]; then
    check_high "${HIGH} vulnerabilità high nelle dipendenze npm"
  fi
  if [ "$MOD" -gt 0 ]; then
    check_medium "${MOD} vulnerabilità moderate nelle dipendenze npm"
  fi
  if [ "$LOW" -gt 0 ]; then
    check_low "${LOW} vulnerabilità low nelle dipendenze npm"
  fi
  if [ "$CRIT" -eq 0 ] && [ "$HIGH" -eq 0 ] && [ "$MOD" -eq 0 ] && [ "$LOW" -eq 0 ]; then
    check_ok "Nessuna vulnerabilità nelle dipendenze npm"
  fi
  log ""
  log "**Note**: il sito è static export — vulnerabilità di runtime Next.js non sono applicabili al deploy Aruba."
else
  check_medium "package.json non trovato"
fi

log ""
log "## 2. HTTP Security Headers"
log ""

# ─── 2. HTTP security headers ────────────────────────────────
# Cache-buster: Aruba-proxy ha cache aggressiva, forziamo bypass
NOCACHE=$(date +%s%N 2>/dev/null || date +%s)
HEADERS=$(curl -sI -H "Cache-Control: no-cache" -H "Pragma: no-cache" "${SITE}/?_nc=${NOCACHE}" 2>/dev/null)

check_header() {
  local name="$1"
  local severity="$2"
  if echo "$HEADERS" | grep -qi "^${name}:"; then
    check_ok "Header presente: ${name}"
  else
    case "$severity" in
      critical) check_critical "Header mancante: ${name}" ;;
      high)     check_high "Header mancante: ${name}" ;;
      medium)   check_medium "Header mancante: ${name}" ;;
      low)      check_low "Header mancante: ${name}" ;;
    esac
  fi
}

check_header "Strict-Transport-Security" "high"
check_header "Content-Security-Policy" "high"
check_header "X-Content-Type-Options" "medium"
check_header "X-Frame-Options" "medium"
check_header "Referrer-Policy" "medium"
check_header "Permissions-Policy" "medium"
check_header "Cross-Origin-Opener-Policy" "low"

# X-XSS-Protection è deprecato — se presente è negativo
if echo "$HEADERS" | grep -qi "^X-XSS-Protection:"; then
  check_medium "X-XSS-Protection presente (deprecato, dovrebbe essere rimosso)"
else
  check_ok "X-XSS-Protection assente (corretto)"
fi

# X-Powered-By non dovrebbe essere presente
if echo "$HEADERS" | grep -qi "^X-Powered-By:"; then
  check_low "X-Powered-By presente (espone info server)"
else
  check_ok "X-Powered-By assente"
fi

log ""
log "## 3. TLS / Certificato SSL"
log ""

# ─── 3. TLS certificate ──────────────────────────────────────
CERT_INFO=$(echo | openssl s_client -connect "${DOMAIN}:443" -servername "www.${DOMAIN}" 2>/dev/null | openssl x509 -noout -subject -issuer -dates 2>/dev/null)

if [ -n "$CERT_INFO" ]; then
  NOTAFTER=$(echo "$CERT_INFO" | grep "notAfter" | cut -d= -f2)
  NOTAFTER_EPOCH=$(date -d "$NOTAFTER" +%s 2>/dev/null || date -j -f "%b %d %H:%M:%S %Y %Z" "$NOTAFTER" +%s 2>/dev/null)
  NOW_EPOCH=$(date +%s)
  DAYS_LEFT=$(( (NOTAFTER_EPOCH - NOW_EPOCH) / 86400 ))

  if [ "$DAYS_LEFT" -lt 0 ]; then
    check_critical "Certificato TLS SCADUTO da $((-DAYS_LEFT)) giorni"
  elif [ "$DAYS_LEFT" -lt 7 ]; then
    check_critical "Certificato TLS scade tra ${DAYS_LEFT} giorni"
  elif [ "$DAYS_LEFT" -lt 30 ]; then
    check_high "Certificato TLS scade tra ${DAYS_LEFT} giorni"
  elif [ "$DAYS_LEFT" -lt 60 ]; then
    check_medium "Certificato TLS scade tra ${DAYS_LEFT} giorni"
  else
    check_ok "Certificato TLS valido per altri ${DAYS_LEFT} giorni"
  fi

  ISSUER=$(echo "$CERT_INFO" | grep "issuer" | cut -d= -f2-)
  log ""
  log "  Issuer: ${ISSUER}"
  log "  Scadenza: ${NOTAFTER}"
else
  check_high "Impossibile verificare certificato TLS"
fi

log ""
log "## 4. DNS — Email Authentication"
log ""

# ─── 4. SPF / DKIM / DMARC ───────────────────────────────────
# Forziamo Google DNS perché su Windows il default può essere il router IPv6 link-local
# che non risolve correttamente alcuni record (es. CNAME chain di DKIM Brevo).
dns_txt() {
  nslookup -type=TXT "$1" 8.8.8.8 2>/dev/null | tr '\n' ' ' | tr -d '\r'
}

# SPF
SPF_OUTPUT=$(dns_txt "$DOMAIN")
if echo "$SPF_OUTPUT" | grep -qi "v=spf1"; then
  check_ok "Record SPF presente"
else
  check_critical "Record SPF MANCANTE — chiunque può spoofare email da @${DOMAIN}"
fi

# DMARC
DMARC_OUTPUT=$(dns_txt "_dmarc.$DOMAIN")
if echo "$DMARC_OUTPUT" | grep -qi "v=DMARC1"; then
  if echo "$DMARC_OUTPUT" | grep -qi "p=reject"; then
    check_ok "DMARC presente e in modalità reject (massima protezione)"
  elif echo "$DMARC_OUTPUT" | grep -qi "p=quarantine"; then
    check_medium "DMARC in modalità quarantine (passare a reject quando possibile)"
  elif echo "$DMARC_OUTPUT" | grep -qi "p=none"; then
    check_high "DMARC in modalità none (solo monitor, non blocca spoofing)"
  else
    check_medium "DMARC presente ma policy sconosciuta"
  fi
else
  check_critical "DMARC MANCANTE"
fi

# DKIM (Brevo)
DKIM_OUTPUT=$(dns_txt "brevo1._domainkey.$DOMAIN")
if echo "$DKIM_OUTPUT" | grep -qiE "k=rsa|p=[A-Za-z0-9+/]"; then
  check_ok "DKIM Brevo configurato"
else
  check_high "DKIM Brevo non trovato"
fi

log ""
log "## 5. Esposizione File Sensibili"
log ""

# ─── 5. File exposure ────────────────────────────────────────
check_not_exposed() {
  local path="$1"
  local code=$(curl -s -o /dev/null -w "%{http_code}" "${SITE}${path}" 2>/dev/null)
  if [ "$code" = "200" ]; then
    check_critical "File esposto pubblicamente: ${path} (HTTP 200)"
  else
    check_ok "${path} non esposto (HTTP ${code})"
  fi
}

check_not_exposed "/.git/config"
check_not_exposed "/.env"
check_not_exposed "/.ftp-credentials"
check_not_exposed "/package.json"
check_not_exposed "/deploy.sh"
check_not_exposed "/api/config.local.php"
check_not_exposed "/api/contact.php.bak"
check_not_exposed "/wp-config.php"
check_not_exposed "/.htaccess"

log ""
log "## 6. CORS Configuration"
log ""

# ─── 6. CORS check ───────────────────────────────────────────
CORS_TEST=$(curl -sI -H "Origin: https://evil.example.com" "${SITE}/api/contact.php" -X OPTIONS 2>/dev/null | grep -i "access-control-allow-origin")
if echo "$CORS_TEST" | grep -qi "evil.example.com"; then
  check_critical "CORS accetta origini arbitrarie su /api/contact.php"
elif echo "$CORS_TEST" | grep -qi "\\*"; then
  check_high "CORS wildcard '*' su /api/contact.php"
else
  check_ok "CORS correttamente ristretto su /api/contact.php"
fi

log ""
log "## 7. CISA KEV — Vulnerabilità Note Sfruttate"
log ""

# ─── 7. Check CISA KEV ───────────────────────────────────────
KEV_FILE="lib/threats-live.json"
if [ -f "$KEV_FILE" ]; then
  KEV_COUNT=$(grep -o '"cveID"' "$KEV_FILE" | wc -l)
  check_ok "Catalogo CISA KEV scaricato: ${KEV_COUNT} CVE recenti tracciate"
  log ""
  log "  Le 3 CVE più recenti:"
  grep -A 3 '"cveID"' "$KEV_FILE" | head -20 | sed 's/^/  /' | tee -a "$REPORT" >/dev/null
else
  check_low "lib/threats-live.json non trovato (eseguire 'npm run build')"
fi

log ""
log "## 8. Mozilla Observatory (HTTP Headers Score)"
log ""

# ─── 8. Mozilla Observatory ──────────────────────────────────
# API v2 Mozilla Observatory — analizza header HTTP e config sicurezza
HOST="www.${DOMAIN}"
OBS_URL="https://observatory-api.mdn.mozilla.net/api/v2/scan?host=${HOST}"

# Trigger nuovo scan (POST richiede Content-Length anche se body vuoto)
OBS_RESULT=$(curl -s -X POST -H "Content-Length: 0" -d "" "$OBS_URL" --max-time 60 2>/dev/null)

if echo "$OBS_RESULT" | grep -q '"grade"'; then
  GRADE=$(echo "$OBS_RESULT" | grep -oE '"grade":"[^"]*"' | head -1 | cut -d'"' -f4)
  SCORE_OBS=$(echo "$OBS_RESULT" | grep -oE '"score":-?[0-9]+' | head -1 | cut -d: -f2)
  TESTS_PASSED=$(echo "$OBS_RESULT" | grep -oE '"tests_passed":[0-9]+' | head -1 | cut -d: -f2)
  TESTS_FAILED=$(echo "$OBS_RESULT" | grep -oE '"tests_failed":[0-9]+' | head -1 | cut -d: -f2)

  case "$GRADE" in
    A+|A) check_ok "Mozilla Observatory: ${GRADE} (score ${SCORE_OBS}, passed ${TESTS_PASSED:-?}, failed ${TESTS_FAILED:-?})" ;;
    A-|B+|B) check_low "Mozilla Observatory: ${GRADE} (score ${SCORE_OBS}, passed ${TESTS_PASSED:-?}, failed ${TESTS_FAILED:-?})" ;;
    B-|C+|C) check_medium "Mozilla Observatory: ${GRADE} (score ${SCORE_OBS}) — migliorabile" ;;
    C-|D+|D|D-) check_high "Mozilla Observatory: ${GRADE} (score ${SCORE_OBS})" ;;
    F) check_critical "Mozilla Observatory: F (score ${SCORE_OBS})" ;;
    *) check_low "Mozilla Observatory: grade ${GRADE} (score ${SCORE_OBS})" ;;
  esac
  log ""
  log "  Dettagli: https://developer.mozilla.org/en-US/observatory/analyze?host=${HOST}"
else
  check_low "Mozilla Observatory: API non raggiungibile o scan fallito"
fi

log ""
log "## 9. SSL Labs (TLS Configuration Grade)"
log ""

# ─── 9. SSL Labs ─────────────────────────────────────────────
# API SSL Labs — analizza configurazione TLS/cipher/cert
# Strategia: prima tentiamo cache, poi scan nuovo se serve
SSLLABS_URL="https://api.ssllabs.com/api/v3/analyze?host=${HOST}&fromCache=on&maxAge=24&all=done"

SSLLABS_RESULT=$(curl -s "$SSLLABS_URL" --max-time 20 2>/dev/null)

# Gestione "Running at full capacity"
if echo "$SSLLABS_RESULT" | grep -q "full capacity\|errors"; then
  check_low "SSL Labs: API temporaneamente non disponibile (full capacity) — riprovare più tardi"
elif echo "$SSLLABS_RESULT" | grep -q '"status":"DNS"\|"status":"IN_PROGRESS"'; then
  log "  SSL Labs scan in corso, attendo (max 3 minuti)..."
  for i in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18; do
    sleep 10
    SSLLABS_RESULT=$(curl -s "$SSLLABS_URL" --max-time 20 2>/dev/null)
    if echo "$SSLLABS_RESULT" | grep -q '"status":"READY"\|"status":"ERROR"'; then
      break
    fi
  done
fi

if echo "$SSLLABS_RESULT" | grep -q '"status":"READY"'; then
  SSL_GRADE=$(echo "$SSLLABS_RESULT" | grep -oE '"grade":"[^"]*"' | head -1 | cut -d'"' -f4)
  case "$SSL_GRADE" in
    A+) check_ok "SSL Labs: ${SSL_GRADE} (configurazione TLS eccellente)" ;;
    A) check_ok "SSL Labs: ${SSL_GRADE} (configurazione TLS molto buona)" ;;
    A-) check_low "SSL Labs: ${SSL_GRADE} (buona, piccoli miglioramenti possibili)" ;;
    B) check_medium "SSL Labs: ${SSL_GRADE} (configurazione migliorabile)" ;;
    C) check_high "SSL Labs: ${SSL_GRADE} (configurazione debole)" ;;
    D|E|F|T|M) check_critical "SSL Labs: ${SSL_GRADE} (configurazione TLS insicura)" ;;
    *) check_low "SSL Labs: grade ${SSL_GRADE}" ;;
  esac
  log ""
  log "  Dettagli: https://www.ssllabs.com/ssltest/analyze.html?d=${HOST}"
elif ! echo "$SSLLABS_RESULT" | grep -q "full capacity\|errors"; then
  check_low "SSL Labs: scan non completato (riprovare manualmente)"
fi

log ""
log "## 10. crt.sh — Certificate Transparency Log"
log ""

# ─── 10. crt.sh ──────────────────────────────────────────────
# Verifica certificati emessi recentemente per il dominio.
# Un nuovo cert emesso da un'autorità sospetta o senza autorizzazione = potenziale phishing/MitM.
CRT_RESULT=$(curl -s "https://crt.sh/?q=${DOMAIN}&output=json" --max-time 30 2>/dev/null)

if [ -n "$CRT_RESULT" ] && echo "$CRT_RESULT" | grep -q '"id"'; then
  CRT_COUNT=$(echo "$CRT_RESULT" | grep -o '"id"' | wc -l)
  check_ok "crt.sh: ${CRT_COUNT} certificati storici tracciati per ${DOMAIN}"

  # Estrai i 3 issuer più recenti
  RECENT_ISSUERS=$(echo "$CRT_RESULT" | grep -oE '"issuer_name":"[^"]*"' | head -3 | sed 's/"issuer_name":"//;s/"$//')

  # Verifica issuer atteso (Actalis è il CA attuale del cert TLS)
  EXPECTED_ISSUER="Actalis"
  UNEXPECTED=$(echo "$RECENT_ISSUERS" | grep -v "$EXPECTED_ISSUER" | grep -v "Let's Encrypt" | head -3)

  if [ -n "$UNEXPECTED" ]; then
    check_medium "crt.sh: rilevati certificati da CA non previste — verifica manuale consigliata"
    log ""
    log "  CA inattese trovate:"
    echo "$UNEXPECTED" | sed 's/^/    - /' | tee -a "$REPORT" >/dev/null
  else
    check_ok "crt.sh: tutti i certificati recenti emessi da CA attese (Actalis/Let's Encrypt)"
  fi

  log ""
  log "  Dettagli: https://crt.sh/?q=${DOMAIN}"
else
  check_low "crt.sh: nessun dato disponibile o API non raggiungibile"
fi

log ""
log "## Sommario"
log ""
log "| Severità | Conteggio |"
log "|----------|-----------|"
log "| 🔴 Critici | ${ISSUES_CRITICAL} |"
log "| 🟠 High    | ${ISSUES_HIGH} |"
log "| 🟡 Medium  | ${ISSUES_MEDIUM} |"
log "| 🔵 Low     | ${ISSUES_LOW} |"
log "| ✅ OK      | ${CHECKS_OK} |"
log ""

# Score
TOTAL_ISSUES=$((ISSUES_CRITICAL + ISSUES_HIGH + ISSUES_MEDIUM + ISSUES_LOW))
TOTAL_CHECKS=$((TOTAL_ISSUES + CHECKS_OK))
if [ "$TOTAL_CHECKS" -gt 0 ]; then
  SCORE=$(( (CHECKS_OK * 100) / TOTAL_CHECKS ))
  log "**Security Score: ${SCORE}/100** (${CHECKS_OK}/${TOTAL_CHECKS} controlli OK)"
fi

log ""
log "---"
log ""
log "_Report generato da \`scripts/security-check.sh\` — eseguire periodicamente._"

# ─── Output a console ────────────────────────────────────────
echo ""
echo "============================================="
echo "  AEGIDA — Security Check completato"
echo "============================================="
echo "  Critici: ${ISSUES_CRITICAL}"
echo "  High:    ${ISSUES_HIGH}"
echo "  Medium:  ${ISSUES_MEDIUM}"
echo "  Low:     ${ISSUES_LOW}"
echo "  OK:      ${CHECKS_OK}"
echo "============================================="
echo "  Report: ${REPORT}"
echo "============================================="

# Exit code: 1 se ci sono issue critici o high, 0 altrimenti
if [ "$ISSUES_CRITICAL" -gt 0 ] || [ "$ISSUES_HIGH" -gt 0 ]; then
  exit 1
fi
exit 0
