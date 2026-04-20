#!/bin/bash
# Deploy automatico programmato per articolo Marimo CVE-2026-39987
# Pianificato per: 2026-04-11 16:07 (T+5h dalla creazione)
# Approccio bulletproof: copy del registry pre-staged + build + deploy

set -e

PROJECT_DIR="/c/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
LOG_FILE="$PROJECT_DIR/scripts/deploy-marimo-$(date +%Y%m%d-%H%M%S).log"
REGISTRY="$PROJECT_DIR/lib/blog/registry.ts"
STAGED_REGISTRY="$PROJECT_DIR/lib/blog/registry-with-marimo.ts.staged"

cd "$PROJECT_DIR"

echo "=========================================" | tee -a "$LOG_FILE"
echo "  DEPLOY AUTOMATICO ARTICOLO MARIMO" | tee -a "$LOG_FILE"
echo "  Avviato: $(date)" | tee -a "$LOG_FILE"
echo "=========================================" | tee -a "$LOG_FILE"

# Step 1: backup del registry corrente e attivazione di quello con Marimo
echo "[1/4] Attivazione registry con articolo Marimo..." | tee -a "$LOG_FILE"

if [ ! -f "$STAGED_REGISTRY" ]; then
    echo "ERRORE: file staged non trovato: $STAGED_REGISTRY" | tee -a "$LOG_FILE"
    exit 1
fi

cp "$REGISTRY" "$REGISTRY.backup-$(date +%Y%m%d-%H%M%S)"
cp "$STAGED_REGISTRY" "$REGISTRY"
echo "    Registry aggiornato" | tee -a "$LOG_FILE"

# Step 2: build
echo "[2/4] Build Next.js..." | tee -a "$LOG_FILE"
npm run build >> "$LOG_FILE" 2>&1
echo "    Build completata" | tee -a "$LOG_FILE"

# Step 3: deploy via FTP + IndexNow
echo "[3/4] Deploy FTP + IndexNow..." | tee -a "$LOG_FILE"
bash deploy.sh >> "$LOG_FILE" 2>&1
echo "    Deploy completato" | tee -a "$LOG_FILE"

# Step 4: cleanup del file staged (job one-shot)
echo "[4/4] Cleanup file staged..." | tee -a "$LOG_FILE"
mv "$STAGED_REGISTRY" "$STAGED_REGISTRY.deployed"
echo "    Cleanup completato" | tee -a "$LOG_FILE"

echo "=========================================" | tee -a "$LOG_FILE"
echo "  DEPLOY MARIMO COMPLETATO CON SUCCESSO" | tee -a "$LOG_FILE"
echo "  URL: https://aegida-systems.com/it/blog/2026-04-11-threat-marimo-rce-exploit-9-ore" | tee -a "$LOG_FILE"
echo "=========================================" | tee -a "$LOG_FILE"

exit 0
