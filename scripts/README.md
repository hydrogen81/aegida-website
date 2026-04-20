# scripts/ — generatori e utilità

## Generatori PDF

Due script producono i PDF distribuiti via sito:

- `generate-dossier-pdf.py` → `public/downloads/aegida-privacy-phone-dossier.pdf`
- `generate-white-paper-ufed.py` → `public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf`

Entrambi importano il modulo condiviso `pdf_common.py` (palette, styles,
cover, footer) e usano il font `fonts/JetBrainsMono-Regular.ttf`.

### Prerequisiti

```bash
pip install reportlab
```

Python 3.10+. Windows/macOS/Linux indifferente.

### Rigenerazione

```bash
python scripts/generate-dossier-pdf.py
python scripts/generate-white-paper-ufed.py
```

Output nelle cartelle corrispondenti. Sovrascrive i file esistenti.

### Quando rigenerare

Quando cambia:
- Il copy del sito in modo sostanziale (claim UFED, pricing, descrizioni dei
  prodotti). I PDF hanno testi propri in `scripts/generate-*.py`, non
  leggono da `lib/i18n/locales/it.ts`.
- La palette del brand (nuove direzioni visive).
- La struttura delle sezioni (aggiunta/rimozione di pagine).
- Il pricing nel pacchetto primo anno o rinnovo.

### Convenzione di versione

In testa a ogni generatore c'è `VERSION = "vX.Y"`. Aggiornare manualmente:
- Major (v1.0 → v2.0): cambiamento struttura sezioni o palette
- Minor (v1.0 → v1.1): aggiornamento testi o pricing

Data di pubblicazione `DATE` va aggiornata a ogni rigenerazione rilevante.

## Altri script

- `fetch-threats.js` — prebuild CISA KEV
- `generate-sitemap.js` — generatore sitemap
- `generate-llms-txt.js` — generatore llms.txt
- `indexnow-ping.js` — ping a IndexNow dopo deploy
- `security-check.sh` — audit periodico
- `deploy-marimo-article.sh` — deploy singolo articolo blog
