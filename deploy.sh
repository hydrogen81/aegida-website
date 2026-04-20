#!/bin/bash
# ─────────────────────────────────────────────────
# AEGIDA Website — Build & Deploy via FTP
# Uso: doppio click o da terminale: bash deploy.sh
# ─────────────────────────────────────────────────

PROGETTO="C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"

cd "$PROGETTO" || { echo "ERRORE: cartella progetto non trovata"; exit 1; }

# Carica credenziali FTP
if [ ! -f ".ftp-credentials" ]; then
  echo "ERRORE: file .ftp-credentials non trovato!"
  exit 1
fi
source .ftp-credentials

echo ""
echo "========================================="
echo "  AEGIDA Website — Build & Deploy"
echo "========================================="
echo ""

# Step 1: Installa dipendenze (se serve)
if [ ! -d "node_modules" ]; then
  echo "[1/3] Installando dipendenze..."
  npm install
else
  echo "[1/3] Dipendenze OK"
fi
echo ""

# Step 2: Build
echo "[2/3] Build in corso..."
npm run build
if [ $? -ne 0 ]; then
  echo "ERRORE: build fallita!"
  exit 1
fi
echo ""

# Step 3: Upload via FTP
echo "[3/3] Upload via FTP su $FTP_HOST..."
echo ""

upload_file() {
  local local_file="$1"
  local relative_path="${local_file#$PROGETTO/out/}"
  local remote_path="$FTP_DIR/$relative_path"

  curl -s --globoff --ftp-create-dirs \
    -T "$local_file" \
    "ftp://$FTP_HOST/$remote_path" \
    --user "$FTP_USER:$FTP_PASS" \
    --connect-timeout 10 \
    --max-time 60

  if [ $? -eq 0 ]; then
    echo "  ✓ $relative_path"
  else
    echo "  ✗ $relative_path (ERRORE)"
    return 1
  fi
}

export -f upload_file
export PROGETTO FTP_HOST FTP_USER FTP_PASS FTP_DIR

ERRORS=0
TOTAL=0

while IFS= read -r -d '' file; do
  upload_file "$file" || ERRORS=$((ERRORS + 1))
  TOTAL=$((TOTAL + 1))
done < <(find "$PROGETTO/out" -type f -print0)

echo ""
echo "========================================="
echo "  DEPLOY COMPLETATO!"
echo "========================================="
echo ""
echo "  File caricati: $TOTAL"
echo "  Errori: $ERRORS"
echo "  Server: $FTP_HOST"
echo "  Cartella: $FTP_DIR"
echo "========================================="
echo ""

# Ping IndexNow (Bing, Yandex, Seznam, Naver)
echo "[4/4] Notifica motori di ricerca (IndexNow)..."
node "$PROGETTO/scripts/indexnow-ping.js"
echo ""
