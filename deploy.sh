#!/bin/bash
# ─────────────────────────────────────────────────
# AEGIDA Website — Build & Deploy Script
# Uso: doppio click o da terminale: bash deploy.sh
# ─────────────────────────────────────────────────

PROGETTO="C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
UPLOAD="C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website-upload"
ZIP="C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website-upload.zip"

cd "$PROGETTO" || { echo "ERRORE: cartella progetto non trovata"; exit 1; }

echo ""
echo "========================================="
echo "  AEGIDA Website — Build & Deploy"
echo "========================================="
echo ""

# Step 1: Pull ultimi cambiamenti
echo "[1/4] Scaricando ultimi aggiornamenti da GitHub..."
git pull origin main
echo ""

# Step 2: Installa dipendenze (se serve)
if [ ! -d "node_modules" ]; then
  echo "[2/4] Installando dipendenze..."
  npm install
else
  echo "[2/4] Dipendenze OK"
fi
echo ""

# Step 3: Build (include prebuild che aggiorna le minacce CISA)
echo "[3/4] Build in corso (+ aggiornamento minacce CISA)..."
npm run build
if [ $? -ne 0 ]; then
  echo "ERRORE: build fallita!"
  exit 1
fi
echo ""

# Step 4: Prepara cartella upload + zip
echo "[4/4] Preparando file per il caricamento..."
rm -rf "$UPLOAD"
cp -r "$PROGETTO/out" "$UPLOAD"

# Genera zip con PowerShell
powershell.exe -Command "
  Remove-Item '$ZIP' -ErrorAction SilentlyContinue
  Compress-Archive -Path '$UPLOAD\*' -DestinationPath '$ZIP' -Force
"

echo ""
echo "========================================="
echo "  BUILD COMPLETATA!"
echo "========================================="
echo ""
echo "  Cartella: $UPLOAD"
echo "  ZIP:      $ZIP"
echo ""
echo "  Carica lo ZIP sul file manager di Aruba."
echo "========================================="
echo ""
