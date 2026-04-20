#!/bin/bash
# ─────────────────────────────────────────────────
# AEGIDA — Upload FTP (solo upload, senza build)
# Uso: bash ftp-upload.sh
# ─────────────────────────────────────────────────

PROGETTO="C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"

cd "$PROGETTO" || { echo "ERRORE: cartella progetto non trovata"; exit 1; }

source .ftp-credentials

if [ ! -d "out" ]; then
  echo "ERRORE: cartella out/ non trovata. Esegui prima 'npm run build'."
  exit 1
fi

echo ""
echo "Upload FTP in corso su $FTP_HOST$FTP_DIR ..."
echo ""

ERRORS=0
TOTAL=0

while IFS= read -r -d '' file; do
  relative_path="${file#$PROGETTO/out/}"
  remote_path="$FTP_DIR/$relative_path"

  curl -s --globoff --ftp-create-dirs \
    -T "$file" \
    "ftp://$FTP_HOST/$remote_path" \
    --user "$FTP_USER:$FTP_PASS" \
    --connect-timeout 10 \
    --max-time 60

  if [ $? -eq 0 ]; then
    echo "  ✓ $relative_path"
  else
    echo "  ✗ $relative_path (ERRORE)"
    ERRORS=$((ERRORS + 1))
  fi
  TOTAL=$((TOTAL + 1))
done < <(find "$PROGETTO/out" -type f -print0)

echo ""
echo "Completato: $TOTAL file, $ERRORS errori."
echo ""

# Ping IndexNow (Bing, Yandex, Seznam, Naver)
echo "Notifica motori di ricerca (IndexNow)..."
node "$PROGETTO/scripts/indexnow-ping.js"
echo ""
