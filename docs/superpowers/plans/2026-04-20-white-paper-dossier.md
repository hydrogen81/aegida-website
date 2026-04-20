# White Paper + Dossier PDF — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produrre due PDF italiani coerenti col brand AEGIDA post-redesign (cover dark + interno ivory): dossier commerciale Privacy Phone (~9 pagine) e white paper UFED (~14-16 pagine). Archiviare i 6 PDF legacy e aggiornare i link del sito.

**Architecture:** Python + reportlab. Modulo condiviso `scripts/pdf_common.py` per palette, styles, cover, footer. Due script dedicati per i due documenti. Font JetBrainsMono-Regular TTF embedded (committato); Helvetica built-in per body.

**Tech Stack:** Python 3 + reportlab. Nessuna nuova dipendenza.

**Spec di riferimento:** `docs/superpowers/specs/2026-04-20-white-paper-dossier-design.md`

---

## Strategy di branch

Prosegue su `feature/bonifica-comunicazione-ita` (lo stesso di P1+P2). Merge unico finale.

---

## File Structure

### File CREATI
- `scripts/fonts/JetBrainsMono-Regular.ttf` — font file (~180 KB, licenza OFL)
- `scripts/fonts/LICENSE-OFL.txt` — licenza del font
- `scripts/pdf_common.py` — modulo condiviso (palette, styles, cover, footer)
- `scripts/generate-dossier-pdf.py` — generatore dossier
- `scripts/README.md` — istruzioni di rigenerazione PDF (se non esiste già)
- `public/downloads/archive-2026-04/README.md` — README archivio

### File MODIFICATI (rewrite sostanziale)
- `scripts/generate-white-paper-ufed.py` — nuova palette, nuova struttura, modulo comune

### File GENERATI (output PDF)
- `public/downloads/aegida-privacy-phone-dossier.pdf` — nuovo
- `public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf` — overwrite (stesso path)

### File SPOSTATI (archiviazione)
- 6 PDF legacy → `public/downloads/archive-2026-04/`:
  - `aegida-framework-brief-generale.pdf`
  - `aegida-framework-brochure.pdf`
  - `aegida-framework-documento-tecnico.pdf`
  - `aegida-privacy-phone-brochure.pdf`
  - `aegida-privacy-phone-documento-tecnico.pdf`
  - `aegida-privacy-phone-scheda-tecnica.pdf`

### File INVARIATI
- `public/proof/ufed-test/01-04-*.jpg` — screenshot UFED (riutilizzati)
- Pagine web — solo eventuali link da aggiornare (Task 8 di verifica)

---

## Convenzioni commit

- `feat:` per nuovi file (scripts + PDF generati)
- `refactor:` per rewrite dello script white paper
- `chore:` per archiviazione legacy + font download

Trailer standard:
```
Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
```

---

## Verification strategy

Per PDF generator:
1. Lo script gira senza exception
2. File PDF prodotto, dimensione rispetta il target
3. Apertura PDF: cover dark, interno ivory, no gold
4. Claim UFED uniforme (grep nel testo estratto: `pdftotext out.pdf - | grep -i "ufed\|0 dati utente"`)
5. Link del sito puntano ai file giusti

---

### Task 1: Download font JetBrains Mono + preparare `scripts/fonts/`

**Scopo:** Avere il TTF disponibile e versionato per il PDF generator.

**Files:**
- Create: `scripts/fonts/JetBrainsMono-Regular.ttf` (~180 KB)
- Create: `scripts/fonts/LICENSE-OFL.txt`

- [ ] **Step 1: Creare la directory**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
mkdir -p scripts/fonts
```

- [ ] **Step 2: Scaricare il font (licenza OFL)**

Il font è scaricabile dal repository ufficiale:

```bash
curl -L -o scripts/fonts/JetBrainsMono-Regular.ttf \
  "https://github.com/JetBrains/JetBrainsMono/raw/v2.304/fonts/ttf/JetBrainsMono-Regular.ttf"
```

Se curl non è disponibile o il link GitHub cambia, alternativa:
1. Andare su https://www.jetbrains.com/lp/mono/ o fonts.google.com/specimen/JetBrains+Mono
2. Scaricare il bundle, estrarre `JetBrainsMono-Regular.ttf`
3. Copiare manualmente in `scripts/fonts/`

Verifica dimensione:
```bash
ls -la scripts/fonts/JetBrainsMono-Regular.ttf
```
Expected: file ~180-260 KB.

- [ ] **Step 3: Creare il file di licenza OFL**

Scaricare il testo SIL Open Font License:

```bash
curl -L -o scripts/fonts/LICENSE-OFL.txt \
  "https://github.com/JetBrains/JetBrainsMono/raw/v2.304/OFL.txt"
```

Verifica presenza del testo "SIL OPEN FONT LICENSE":
```bash
head -1 scripts/fonts/LICENSE-OFL.txt
```

- [ ] **Step 4: Verifica Python può leggere il TTF**

```bash
python -c "from reportlab.pdfbase import pdfmetrics; from reportlab.pdfbase.ttfonts import TTFont; pdfmetrics.registerFont(TTFont('JetBrainsMono', 'scripts/fonts/JetBrainsMono-Regular.ttf')); print('OK')"
```
Expected: `OK` senza exception.

- [ ] **Step 5: Commit**

```bash
git add scripts/fonts/
git commit -m "chore: add JetBrainsMono-Regular TTF for PDF generators

Licenza SIL Open Font License (OFL). Usato nei generatori di dossier
commerciale e white paper UFED per kicker, metadata, tabelle.
Sorgente: github.com/JetBrains/JetBrainsMono v2.304.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Creare modulo `scripts/pdf_common.py`

**Scopo:** Codice condiviso tra i due generatori: palette, styles, funzione cover, funzione footer.

**Files:**
- Create: `scripts/pdf_common.py`

- [ ] **Step 1: Scrivere il modulo**

Creare `scripts/pdf_common.py` con contenuto completo:

```python
"""
AEGIDA PDF — common helpers for dossier and white paper generators.

Palette: navy-ink (cover), ivory (body), steel accents. No gold.
Fonts: Helvetica (body) + JetBrainsMono-Regular TTF (kicker, mono).
Page size: A4.

Usage:
    from pdf_common import (
        NAVY_INK, IVORY, STEEL, STEEL_HI, SLATE, NAVY_LINE,
        register_fonts, make_styles, cover_page, footer_canvas,
        A4_MARGIN_LR, A4_MARGIN_TB,
    )
"""

from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Spacer, PageBreak, Flowable

# ---- Palette ----------------------------------------------------------------

NAVY_INK = HexColor("#0B1220")   # cover background, text on ivory
IVORY = HexColor("#FAFAF9")      # body background
STEEL = HexColor("#4A6583")      # accent primary
STEEL_HI = HexColor("#6B84A0")   # accent hover / cover kicker
SLATE = HexColor("#5E6B82")      # caption, metadata
NAVY_LINE = HexColor("#D8DCE2")  # hairline separators on ivory
INK_200 = HexColor("#C7D0DE")    # used on navy cover for subtitle

# ---- Font registration ------------------------------------------------------

FONTS_DIR = Path(__file__).parent / "fonts"
JETBRAINS_TTF = FONTS_DIR / "JetBrainsMono-Regular.ttf"


def register_fonts():
    """Register JetBrainsMono TTF. Call once at module import in scripts."""
    if not JETBRAINS_TTF.exists():
        raise FileNotFoundError(
            f"Font TTF non trovato: {JETBRAINS_TTF}\n"
            "Eseguire: curl -L -o scripts/fonts/JetBrainsMono-Regular.ttf "
            "https://github.com/JetBrains/JetBrainsMono/raw/v2.304/fonts/ttf/JetBrainsMono-Regular.ttf"
        )
    pdfmetrics.registerFont(TTFont("JetBrainsMono", str(JETBRAINS_TTF)))


# ---- Page geometry ----------------------------------------------------------

A4_MARGIN_LR = 22 * mm
A4_MARGIN_TB = 22 * mm


# ---- Styles -----------------------------------------------------------------

_base = getSampleStyleSheet()


def make_styles():
    """Return a dict of ParagraphStyles for body pages (ivory background)."""
    return {
        "h1": ParagraphStyle(
            "h1", parent=_base["Heading1"], fontName="Helvetica-Bold",
            fontSize=18, leading=24, textColor=NAVY_INK, alignment=TA_LEFT,
            spaceBefore=18, spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "h2", parent=_base["Heading2"], fontName="Helvetica-Bold",
            fontSize=12, leading=16, textColor=NAVY_INK, alignment=TA_LEFT,
            spaceBefore=14, spaceAfter=6,
        ),
        "kicker": ParagraphStyle(
            "kicker", parent=_base["BodyText"], fontName="JetBrainsMono",
            fontSize=8, leading=12, textColor=STEEL, alignment=TA_LEFT,
            spaceBefore=6, spaceAfter=2, spaceShrinkage=0,
        ),
        "body": ParagraphStyle(
            "body", parent=_base["BodyText"], fontName="Helvetica",
            fontSize=10, leading=15, textColor=NAVY_INK, alignment=TA_JUSTIFY,
            spaceAfter=8,
        ),
        "body_left": ParagraphStyle(
            "body_left", parent=_base["BodyText"], fontName="Helvetica",
            fontSize=10, leading=15, textColor=NAVY_INK, alignment=TA_LEFT,
            spaceAfter=8,
        ),
        "mono": ParagraphStyle(
            "mono", parent=_base["BodyText"], fontName="JetBrainsMono",
            fontSize=9, leading=13, textColor=NAVY_INK, alignment=TA_LEFT,
            leftIndent=0, spaceAfter=6,
        ),
        "caption": ParagraphStyle(
            "caption", parent=_base["BodyText"], fontName="Helvetica-Oblique",
            fontSize=8, leading=12, textColor=SLATE, alignment=TA_CENTER,
            spaceAfter=12,
        ),
        "disclaimer": ParagraphStyle(
            "disclaimer", parent=_base["BodyText"], fontName="Helvetica-Oblique",
            fontSize=8, leading=12, textColor=SLATE, alignment=TA_JUSTIFY,
            spaceAfter=6,
        ),
        "pullquote": ParagraphStyle(
            "pullquote", parent=_base["BodyText"], fontName="Helvetica",
            fontSize=12, leading=18, textColor=NAVY_INK, alignment=TA_LEFT,
            leftIndent=12, rightIndent=12, spaceBefore=8, spaceAfter=12,
            borderColor=STEEL, borderPadding=(8, 12, 8, 12),
        ),
    }


# ---- Cover ------------------------------------------------------------------

class CoverBackground(Flowable):
    """Full-page navy-ink rectangle. Use as first flowable on cover page."""

    def __init__(self, width, height):
        super().__init__()
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        # Canvas origin is top-left of the page AFTER applying margins in doc.
        # We want to fill the WHOLE page; draw outside margins.
        page_w, page_h = A4
        c.saveState()
        # Translate to bottom-left of page in canvas coords:
        # flowable is placed at top-left of margin box; c.translate to compensate
        c.setFillColor(NAVY_INK)
        c.rect(-A4_MARGIN_LR, -A4_MARGIN_TB - page_h + self.height + A4_MARGIN_TB,
               page_w, page_h, stroke=0, fill=1)
        c.restoreState()


def cover_flowables(
    document_type_kicker: str,
    title: str,
    subtitle: str,
    publication_date: str,
    version: str,
    locale: str,
):
    """
    Return a list of flowables that render the cover page.
    Assumes caller uses a dedicated SimpleDocTemplate call with custom onPage
    for full-bleed navy background. See white-paper script for usage.
    """
    cover_styles = {
        "brand": ParagraphStyle(
            "cover_brand", fontName="JetBrainsMono", fontSize=16,
            leading=20, textColor=HexColor("#E8ECF2"), alignment=TA_LEFT,
            spaceAfter=120,
        ),
        "kicker": ParagraphStyle(
            "cover_kicker", fontName="JetBrainsMono", fontSize=10,
            leading=14, textColor=STEEL_HI, alignment=TA_LEFT,
            spaceAfter=10,
        ),
        "title": ParagraphStyle(
            "cover_title", fontName="Helvetica-Bold", fontSize=32, leading=38,
            textColor=HexColor("#E8ECF2"), alignment=TA_LEFT, spaceAfter=14,
        ),
        "subtitle": ParagraphStyle(
            "cover_subtitle", fontName="Helvetica", fontSize=14, leading=20,
            textColor=INK_200, alignment=TA_LEFT, spaceAfter=40,
        ),
        "meta": ParagraphStyle(
            "cover_meta", fontName="JetBrainsMono", fontSize=8,
            leading=12, textColor=STEEL_HI, alignment=TA_LEFT,
        ),
    }
    return [
        Paragraph("AEGIDA", cover_styles["brand"]),
        Paragraph(document_type_kicker.upper(), cover_styles["kicker"]),
        Paragraph(title, cover_styles["title"]),
        Paragraph(subtitle, cover_styles["subtitle"]),
        Spacer(1, 180),
        Paragraph(
            f"{publication_date.upper()} &nbsp;&nbsp;·&nbsp;&nbsp; {version.upper()} &nbsp;&nbsp;·&nbsp;&nbsp; {locale.upper()}",
            cover_styles["meta"],
        ),
    ]


def make_cover_background_drawer():
    """Returns a function suitable for SimpleDocTemplate(onFirstPage=...).

    The function paints the entire first page with navy-ink background.
    """
    def _draw(canv, doc):
        canv.saveState()
        canv.setFillColor(NAVY_INK)
        canv.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
        canv.restoreState()
    return _draw


# ---- Footer -----------------------------------------------------------------

def make_footer_drawer():
    """Returns a function for SimpleDocTemplate(onLaterPages=...).

    Draws a hairline + 'AEGIDA' wordmark + page number at bottom of ivory pages.
    """
    def _draw(canv, doc):
        canv.saveState()
        # Hairline
        canv.setStrokeColor(NAVY_LINE)
        canv.setLineWidth(0.4)
        canv.line(A4_MARGIN_LR, 14 * mm, A4[0] - A4_MARGIN_LR, 14 * mm)
        # Wordmark left
        canv.setFont("JetBrainsMono", 7)
        canv.setFillColor(SLATE)
        canv.drawString(A4_MARGIN_LR, 9 * mm, "AEGIDA")
        # Page number right
        page_num = canv.getPageNumber()
        canv.drawRightString(A4[0] - A4_MARGIN_LR, 9 * mm, f"Pagina {page_num}")
        canv.restoreState()
    return _draw
```

- [ ] **Step 2: Verifica sintassi Python**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
python -c "import sys; sys.path.insert(0, 'scripts'); import pdf_common; pdf_common.register_fonts(); print('pdf_common OK')"
```
Expected: `pdf_common OK` senza exception.

- [ ] **Step 3: Commit**

```bash
git add scripts/pdf_common.py
git commit -m "feat: add pdf_common module for shared PDF styles

Palette navy-ink/ivory/steel (no gold), Helvetica body + JetBrainsMono
for kicker/mono. Cover flowables and footer canvas drawer reusable
across dossier and white paper generators.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Rewrite `scripts/generate-white-paper-ufed.py`

**Scopo:** Sostituire completamente il vecchio script con la nuova struttura (14-16 pagine, palette navy/ivory/steel, modulo comune).

**Files:**
- Modify (rewrite): `scripts/generate-white-paper-ufed.py`

- [ ] **Step 1: Leggere lo script attuale per capire come vengono referenziati gli screenshot**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
grep -n "ufed-test\|01-\|02-\|03-\|04-" scripts/generate-white-paper-ufed.py | head -10
```

Annotare il path agli screenshot (dovrebbe essere `public/proof/ufed-test/01-*.jpg` ecc.).

- [ ] **Step 2: Scrivere il nuovo script completo**

Sostituire completamente il file `scripts/generate-white-paper-ufed.py` con:

```python
"""
AEGIDA Privacy Phone — White Paper UFED Test 17 aprile 2026
Genera PDF condivisibile a partire dal materiale del test forense.
Output: public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf

Stile: cover navy-ink, interno ivory. Palette senza gold.
"""

import sys
from pathlib import Path

# Consentire import di pdf_common accanto
sys.path.insert(0, str(Path(__file__).parent))

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak,
    Table, TableStyle, KeepTogether,
)
from reportlab.lib.colors import HexColor

from pdf_common import (
    NAVY_INK, IVORY, STEEL, STEEL_HI, SLATE, NAVY_LINE,
    A4_MARGIN_LR, A4_MARGIN_TB,
    register_fonts, make_styles, cover_flowables,
    make_cover_background_drawer, make_footer_drawer,
)

# ---- Setup ------------------------------------------------------------------

register_fonts()

ROOT = Path(__file__).parent.parent
IMG_DIR = ROOT / "public" / "proof" / "ufed-test"
OUT_PDF = ROOT / "public" / "downloads" / "aegida-privacy-phone-test-ufed-2026-04-17.pdf"

S = make_styles()

# ---- Contenuto italiano -----------------------------------------------------

TITLE = "Cellebrite UFED 10.8 vs AEGIDA Privacy Phone"
SUBTITLE = "17 aprile 2026. Metodologia e risultati."
KICKER = "WHITE PAPER · UFED"
DATE = "17 aprile 2026"
VERSION = "v1.0"
LOCALE = "IT"

EXECUTIVE_SUMMARY = [
    "Il 17 aprile 2026 una società italiana di analisi forense ha tentato "
    "l'estrazione di dati utente da un AEGIDA Privacy Phone utilizzando "
    "Cellebrite Inseyets UFED 10.8.0.322 con modulo Turbo Link. Il test è "
    "stato condotto sia in modalità <b>Locked (BFU — Before First Unlock)</b> "
    "sia in modalità <b>Unlocked (AFU — After First Unlock)</b> con codice di "
    "sblocco fornito all'operatore.",

    "<b>Esito:</b> nessun dato utente è stato estratto in alcuna delle due "
    "modalità. UFED ha rilevato metadati di sistema ma non ha potuto accedere "
    "a messaggi, contatti, foto, file o altro contenuto applicativo. "
    "L'operatore ha dichiarato chiuso il test dopo aver esaurito le procedure "
    "standard disponibili sulla versione UFED impiegata.",

    "Questo documento riporta la metodologia, la procedura esatta e i risultati "
    "del test. È accompagnato da quattro screenshot del software UFED al "
    "termine di ciascuna fase. Il contenuto è destinato a giornalisti, "
    "ricercatori, clienti prospect e all'esercizio del diritto di replica.",
]

CONTESTO_TITLE = "Perché questo test"
CONTESTO_BODY = [
    "Gli strumenti Cellebrite — UFED in particolare — sono il riferimento "
    "commerciale per l'estrazione forense di dati da dispositivi mobili. Sono "
    "usati da forze dell'ordine, agenzie di intelligence e, in alcuni casi, "
    "da privati che li acquistano sul mercato secondario. Dopo il caso "
    "Equalize (ottobre 2024), la consapevolezza pubblica sulla disponibilità "
    "di strumenti di intercettazione in mani non istituzionali è aumentata.",

    "Per chi opera con informazioni sensibili — giornalisti investigativi, "
    "avvocati con clienti esposti, dirigenti in viaggio in contesti ostili — "
    "la domanda non è più se uno smartphone sia &laquo;sicuro&raquo; in astratto, "
    "ma se resista a uno strumento specifico come UFED. Abbiamo deciso di "
    "sottoporre AEGIDA Privacy Phone a un test documentato per rispondere a "
    "questa domanda con dati pubblicabili.",

    "Il test è stato commissionato da AEGIDA e condotto da una società "
    "italiana terza specializzata in analisi forense. L'operatore ha una "
    "certificazione <i>International Master Counter Surveillance Technical</i>. "
    "Non esiste conflitto di interessi commerciale tra le due parti.",
]

SCOPE_TITLE = "Scope del test"
SCOPE_DONE = [
    "Estrazione dati applicativi (messaggi, contatti, foto, documenti) "
    "in modalità BFU tramite procedura UFED standard.",
    "Estrazione dati applicativi in modalità AFU con codice di sblocco "
    "fornito all'operatore dal committente.",
    "Ispezione dei risultati riportati dal software UFED in entrambe le "
    "modalità e registrazione screenshot.",
    "Valutazione dello stato del dispositivo pre e post test (integrità "
    "del verified boot e dell'attestazione hardware).",
]
SCOPE_NOT_DONE = [
    "Sfruttamento di 0-day non pubblicamente noti o tecniche proprietarie "
    "di laboratori statali non disponibili in UFED commerciale.",
    "Side-channel attacks (glitching, cold boot, rowhammer, laser fault "
    "injection) — richiedono strumentazione diversa da UFED.",
    "Attacchi hardware invasivi con dismissione del dispositivo (chip-off, "
    "ISP, JTAG).",
    "Analisi del traffico di rete o intercettazione in transito "
    "(diverso modello di minaccia).",
]

METODOLOGIA_TITLE = "Metodologia"
METODOLOGIA_BODY = [
    "Il test è stato eseguito il 17 aprile 2026 in un laboratorio forense "
    "italiano certificato. L'operatore ha operato con il dispositivo target "
    "in mano, in ambiente controllato, senza interferenze di rete (stanza "
    "schermata RF-shielded). La sequenza operativa ha seguito le procedure "
    "standard documentate da Cellebrite per l'analisi di dispositivi Android.",

    "Il dispositivo target è un AEGIDA Privacy Phone base Pixel 10a con "
    "sistema operativo derivato da GrapheneOS e indurito da AEGIDA, "
    "verified boot attivo, chiavi di boot proprietarie AEGIDA. Il dispositivo "
    "è stato consegnato all'operatore con la sola condizione di restituirlo "
    "integro e riportare l'esito con screenshot del software UFED.",
]

METODOLOGIA_SETUP_BOX = [
    "OPERATORE · Società italiana di analisi forense (nominativo oscurato)",
    "CERTIFICAZIONE · International Master Counter Surveillance Technical",
    "STRUMENTO · Cellebrite Inseyets UFED 10.8.0.322",
    "MODULO · Turbo Link",
    "DISPOSITIVO · AEGIDA Privacy Phone (Pixel 10a · AEGIDA OS)",
    "AMBIENTE · Laboratorio RF-shielded, Italia",
    "DATA · 17 aprile 2026",
]

BFU_TITLE = "Procedura BFU — Before First Unlock"
BFU_BODY = [
    "Il dispositivo è stato collegato alla workstation UFED in stato "
    "<i>Locked</i> (non ancora sbloccato da quando è stato avviato). UFED ha "
    "rilevato il dispositivo come generica Google Pixel 10a e ha tentato "
    "l'identificazione del bootloader.",

    "Il software ha esplorato le procedure <i>checkm8</i>, <i>EDL</i> e "
    "<i>brute-force passcode</i>. Nessuna procedura disponibile nella versione "
    "10.8.0.322 ha prodotto accesso ai dati utente. Il tentativo di "
    "identificazione del bootloader ha restituito &laquo;no method found&raquo;, "
    "indicando che la coppia verified boot + chiavi proprietarie non è "
    "compatibile con i fingerprint noti a UFED.",

    "L'unica estrazione riuscita è stata la lettura di metadati di sistema "
    "(versione Android modificata, build ID AEGIDA, stato verified boot). "
    "Nessun dato applicativo è stato estratto.",
]

AFU_TITLE = "Procedura AFU — After First Unlock"
AFU_BODY = [
    "Il dispositivo è stato quindi sbloccato dall'operatore usando il codice "
    "di sblocco fornito dal committente (un test realistico di cosa accade se "
    "il codice è noto o estorto). Una volta in stato AFU, il dispositivo è "
    "stato ricollegato a UFED e sono state tentate le procedure di "
    "estrazione logica e fisica.",

    "UFED ha identificato il dispositivo sbloccato ma ha restituito "
    "&laquo;passcode failed&raquo; sulle procedure di bypass della protezione "
    "ADB/fastboot. L'accesso via protocolli standard è bloccato dalla "
    "configurazione AEGIDA: ADB è disabilitato, fastboot è bloccato da "
    "verified boot, le chiavi USB debugging sono state rigettate.",

    "Anche in modalità AFU con codice corretto, UFED non ha estratto dati "
    "applicativi. Il test è stato chiuso dall'operatore dopo aver esaurito le "
    "procedure standard disponibili.",
]

RISULTATI_TITLE = "Risultati sintetici"
RISULTATI_TABLE = [
    ["Modalità", "Procedura UFED", "Risultato"],
    ["BFU (Locked)", "Identificazione bootloader", "no method found"],
    ["BFU (Locked)", "Brute-force passcode", "non tentato (assenza metodo)"],
    ["BFU (Locked)", "Estrazione metadati sistema", "completata (no dati utente)"],
    ["AFU (Unlocked)", "Bypass ADB protection", "passcode failed"],
    ["AFU (Unlocked)", "Estrazione logica", "bloccata"],
    ["AFU (Unlocked)", "Estrazione fisica", "bloccata"],
]
RISULTATI_NOTE = (
    "In entrambe le modalità, <b>0 dati utente sono stati estratti</b>. "
    "Nessun messaggio, contatto, foto, documento applicativo ha lasciato "
    "il dispositivo durante l'intera sessione di test."
)

IMPLICAZIONI_TITLE = "Implicazioni per il modello di minaccia"
IMPLICAZIONI_BODY = [
    "Per un giornalista investigativo, il risultato significa che un "
    "sequestro del dispositivo da parte di autorità o un furto mirato non "
    "espongono, con strumenti commerciali standard, le comunicazioni con le "
    "fonti e i documenti in lavorazione.",

    "Per un avvocato penalista, il risultato significa che la corrispondenza "
    "con i clienti custodita sul dispositivo resta inaccessibile anche in "
    "caso di perquisizione che porti al sequestro e all'invio del telefono a "
    "un laboratorio Cellebrite-certified.",

    "Per un dirigente esposto in contesti ostili, il risultato significa che "
    "un'eventuale perdita del dispositivo in frontiera o in albergo non si "
    "traduce automaticamente in un'esposizione della corrispondenza aziendale "
    "o dei documenti personali. Resta indispensabile seguire le buone "
    "pratiche operative (non tenere nel telefono ciò che non serve, rotazione "
    "dei codici, report di integrità periodico con Inspector).",
]

LIMITAZIONI_TITLE = "Limitazioni"
LIMITAZIONI_BODY = [
    "Il test è stato condotto in un singolo giorno, con una specifica "
    "versione UFED (10.8.0.322). Cellebrite aggiorna UFED con cadenza "
    "regolare; versioni future potrebbero includere procedure o exploit non "
    "disponibili in 10.8. Ripeteremo il test con cadenza periodica e "
    "pubblicheremo le nuove versioni di questo documento.",

    "Il test non coinvolge strumentazione di laboratorio statale avanzata "
    "(TEMPEST, glitching, chip-off, ISP, cold boot). Un attaccante "
    "statale con risorse ingenti e accesso fisico prolungato al dispositivo "
    "può impiegare tecniche diverse da quelle incluse in UFED commerciale. Il "
    "Privacy Phone resiste a UFED, non a un intero laboratorio forense "
    "avversario in modalità white-glove.",

    "Il test non è stato condotto sotto supervisione di un ente "
    "terzo certificatore (es. ACN, ENISA). Una certificazione formale è un "
    "obiettivo separato, non coperto da questo documento.",
]

CONFRONTO_TITLE = "Confronto sintetico (dati pubblici)"
CONFRONTO_INTRO = (
    "La tabella seguente riporta informazioni pubbliche sulla compatibilità "
    "di UFED con dispositivi Android e iOS comuni. I dati derivano da "
    "Cellebrite product documentation (versioni pubbliche), GrapheneOS "
    "release notes e bulletins Project Zero. Non costituiscono un test "
    "condotto da AEGIDA."
)
CONFRONTO_TABLE = [
    ["Dispositivo", "Stato", "UFED 10.8 capability (pubblica)"],
    ["iPhone 15 Pro (iOS 17)", "locked, latest patch", "checkm8 non applicabile; estrazione limitata"],
    ["iPhone 14 (iOS 17)", "locked", "checkm8 non applicabile; estrazione limitata"],
    ["Samsung Galaxy S24", "locked, latest patch", "estrazione parziale via exploit vendor"],
    ["Pixel 10 stock (Android 15)", "locked", "fingerprint noti, estrazione possibile"],
    ["Pixel 10a + GrapheneOS stock", "locked", "estrazione limitata, fingerprint parziali"],
    ["AEGIDA Privacy Phone (test 17.04.2026)", "locked/unlocked", "nessun dato utente estratto"],
]

DISCLAIMER_TITLE = "Disclaimer legale"
DISCLAIMER_BODY = (
    "Questo documento è redatto ai sensi del D.Lgs. 145/2007 in materia di "
    "pubblicità ingannevole e comparativa, e ai sensi dell'art. 70 della "
    "Legge 633/1941 sul diritto d'autore in relazione al diritto di "
    "citazione. I marchi Cellebrite, UFED, Inseyets, Turbo Link, iPhone, "
    "iOS, Samsung, Galaxy, Pixel, Android, GrapheneOS appartengono ai "
    "rispettivi proprietari e sono citati a solo scopo identificativo. "
    "AEGIDA non ha alcun rapporto commerciale con Cellebrite, Apple, "
    "Samsung o Google. La menzione di tali marchi non implica sponsorship, "
    "endorsement, affiliazione. Per l'esercizio del diritto di replica o "
    "per richieste di rettifica, scrivere a <b>legal@aegida-systems.com</b>. "
    "Il test qui descritto è stato condotto in Italia il 17 aprile 2026 da "
    "società italiana terza di analisi forense con operatore certificato "
    "International Master Counter Surveillance Technical. AEGIDA si "
    "impegna a documentare l'intera metodologia e a renderla disponibile "
    "per verifica indipendente su richiesta motivata."
)

# ---- Rendering --------------------------------------------------------------

def build_story():
    story = []

    # Cover
    story.extend(cover_flowables(
        document_type_kicker=KICKER,
        title=TITLE,
        subtitle=SUBTITLE,
        publication_date=DATE,
        version=VERSION,
        locale=LOCALE,
    ))
    story.append(PageBreak())

    # Executive summary
    story.append(Paragraph("RIEPILOGO ESECUTIVO", S["kicker"]))
    story.append(Paragraph("Sintesi dei fatti", S["h1"]))
    for para in EXECUTIVE_SUMMARY:
        story.append(Paragraph(para, S["body"]))
    story.append(PageBreak())

    # Contesto
    story.append(Paragraph("CONTESTO", S["kicker"]))
    story.append(Paragraph(CONTESTO_TITLE, S["h1"]))
    for para in CONTESTO_BODY:
        story.append(Paragraph(para, S["body"]))
    story.append(PageBreak())

    # Scope
    story.append(Paragraph("SCOPE", S["kicker"]))
    story.append(Paragraph(SCOPE_TITLE, S["h1"]))
    story.append(Paragraph("Cosa è stato tentato", S["h2"]))
    for item in SCOPE_DONE:
        story.append(Paragraph(f"•&nbsp;&nbsp;{item}", S["body"]))
    story.append(Paragraph("Cosa NON è stato tentato", S["h2"]))
    for item in SCOPE_NOT_DONE:
        story.append(Paragraph(f"•&nbsp;&nbsp;{item}", S["body"]))
    story.append(PageBreak())

    # Metodologia
    story.append(Paragraph("METODOLOGIA", S["kicker"]))
    story.append(Paragraph(METODOLOGIA_TITLE, S["h1"]))
    for para in METODOLOGIA_BODY:
        story.append(Paragraph(para, S["body"]))
    # Setup box
    setup_lines = [[Paragraph(line, S["mono"])] for line in METODOLOGIA_SETUP_BOX]
    setup_table = Table(setup_lines, colWidths=[A4[0] - 2 * A4_MARGIN_LR])
    setup_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), HexColor("#F1ECDE")),
        ("BOX", (0, 0), (-1, -1), 0.5, STEEL),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(setup_table)
    story.append(PageBreak())

    # BFU (text + screenshot 01)
    story.append(Paragraph("PROCEDURA", S["kicker"]))
    story.append(Paragraph(BFU_TITLE, S["h1"]))
    for para in BFU_BODY:
        story.append(Paragraph(para, S["body"]))
    img_01 = IMG_DIR / "01-locked-no-method-found.jpg"
    if img_01.exists():
        img = Image(str(img_01), width=130 * mm, height=82 * mm, kind="bound")
        story.append(img)
        story.append(Paragraph("Screenshot 1 · UFED in stato Locked: <i>no method found</i>.", S["caption"]))
    story.append(PageBreak())

    img_02 = IMG_DIR / "02-metadata-only.jpg"
    if img_02.exists():
        img = Image(str(img_02), width=130 * mm, height=82 * mm, kind="bound")
        story.append(img)
        story.append(Paragraph("Screenshot 2 · Solo metadati di sistema estratti, zero dati applicativi.", S["caption"]))
    story.append(PageBreak())

    # AFU (text + screenshot 03)
    story.append(Paragraph("PROCEDURA", S["kicker"]))
    story.append(Paragraph(AFU_TITLE, S["h1"]))
    for para in AFU_BODY:
        story.append(Paragraph(para, S["body"]))
    img_03 = IMG_DIR / "03-unlocked-passcode-failed.jpg"
    if img_03.exists():
        img = Image(str(img_03), width=130 * mm, height=82 * mm, kind="bound")
        story.append(img)
        story.append(Paragraph("Screenshot 3 · UFED in stato Unlocked: <i>passcode failed</i> su ADB bypass.", S["caption"]))
    story.append(PageBreak())

    # Risultati
    story.append(Paragraph("RISULTATI", S["kicker"]))
    story.append(Paragraph(RISULTATI_TITLE, S["h1"]))
    risultati_table = Table(RISULTATI_TABLE, colWidths=[40 * mm, 60 * mm, 66 * mm])
    risultati_table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "JetBrainsMono"),
        ("FONTSIZE", (0, 0), (-1, 0), 8),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 1), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (-1, 0), STEEL),
        ("TEXTCOLOR", (0, 1), (-1, -1), NAVY_INK),
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#F1ECDE")),
        ("LINEBELOW", (0, 0), (-1, 0), 0.5, STEEL),
        ("LINEBELOW", (0, 1), (-1, -1), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
    ]))
    story.append(risultati_table)
    story.append(Spacer(1, 12))
    story.append(Paragraph(RISULTATI_NOTE, S["body"]))
    img_04 = IMG_DIR / "04-setup-fisico.jpg"
    if img_04.exists():
        img = Image(str(img_04), width=130 * mm, height=82 * mm, kind="bound")
        story.append(img)
        story.append(Paragraph("Screenshot 4 · Setup fisico dell'operatore durante il test.", S["caption"]))
    story.append(PageBreak())

    # Implicazioni
    story.append(Paragraph("IMPLICAZIONI", S["kicker"]))
    story.append(Paragraph(IMPLICAZIONI_TITLE, S["h1"]))
    for para in IMPLICAZIONI_BODY:
        story.append(Paragraph(para, S["body"]))
    story.append(PageBreak())

    # Limitazioni
    story.append(Paragraph("LIMITAZIONI", S["kicker"]))
    story.append(Paragraph(LIMITAZIONI_TITLE, S["h1"]))
    for para in LIMITAZIONI_BODY:
        story.append(Paragraph(para, S["body"]))
    story.append(PageBreak())

    # Confronto
    story.append(Paragraph("CONFRONTO", S["kicker"]))
    story.append(Paragraph(CONFRONTO_TITLE, S["h1"]))
    story.append(Paragraph(CONFRONTO_INTRO, S["body"]))
    confronto_table = Table(CONFRONTO_TABLE, colWidths=[58 * mm, 38 * mm, 70 * mm])
    confronto_table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "JetBrainsMono"),
        ("FONTSIZE", (0, 0), (-1, 0), 7),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 1), (-1, -1), 8),
        ("TEXTCOLOR", (0, 0), (-1, 0), STEEL),
        ("TEXTCOLOR", (0, 1), (-1, -1), NAVY_INK),
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#F1ECDE")),
        ("LINEBELOW", (0, 0), (-1, 0), 0.5, STEEL),
        ("LINEBELOW", (0, 1), (-1, -1), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        # Highlight AEGIDA row
        ("BACKGROUND", (0, -1), (-1, -1), HexColor("#F1ECDE")),
        ("FONTNAME", (0, -1), (-1, -1), "Helvetica-Bold"),
    ]))
    story.append(confronto_table)
    story.append(PageBreak())

    # Disclaimer
    story.append(Paragraph("DISCLAIMER LEGALE", S["kicker"]))
    story.append(Paragraph(DISCLAIMER_TITLE, S["h1"]))
    story.append(Paragraph(DISCLAIMER_BODY, S["disclaimer"]))

    return story


def main():
    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=A4_MARGIN_LR,
        rightMargin=A4_MARGIN_LR,
        topMargin=A4_MARGIN_TB,
        bottomMargin=A4_MARGIN_TB + 6 * mm,
        title=TITLE,
        author="AEGIDA — H4R Srl",
        subject=SUBTITLE,
    )

    story = build_story()

    doc.build(
        story,
        onFirstPage=make_cover_background_drawer(),
        onLaterPages=make_footer_drawer(),
    )

    size_kb = OUT_PDF.stat().st_size / 1024
    print(f"OK — generated {OUT_PDF.relative_to(ROOT)} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
```

- [ ] **Step 3: Eseguire lo script**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
python scripts/generate-white-paper-ufed.py
```

Expected: `OK — generated public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf (XXX KB)`.

Se lo script fallisce, leggere attentamente l'errore e aggiustare:
- Font mancante → eseguire Task 1 Step 2
- Immagine mancante → verificare path `public/proof/ufed-test/*.jpg`
- Altri errori reportlab → verificare versione (`pip show reportlab`)

- [ ] **Step 4: Verificare contenuto PDF**

```bash
# Se pdftotext è disponibile:
pdftotext public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf - | head -30
```

Deve contenere: `AEGIDA`, `Cellebrite UFED`, `17 aprile 2026`, `0 dati utente`.

```bash
ls -la public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf
```

Expected: dimensione file 800 KB – 1.5 MB.

- [ ] **Step 5: Apertura visiva (manuale)**

Aprire il PDF nel default viewer. Verificare:
- Cover nera con wordmark "AEGIDA" bianco e titolo in ivory
- Pagine interne su fondo ivory
- Header/footer coerenti con wordmark mono + numero pagina
- Screenshot visibili (01, 02, 03, 04)
- Nessun gold visibile
- Tabelle formattate correttamente

- [ ] **Step 6: Commit**

```bash
git add scripts/generate-white-paper-ufed.py public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf
git commit -m "refactor: rewrite white paper UFED generator with new brand

New palette (navy-ink cover / ivory body / steel accent, no gold).
14-section structure: executive summary, context, scope, methodology,
BFU procedure, AFU procedure, results, implications, limitations,
public comparison, extended legal disclaimer. Preserves same output
filename to not break existing links.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Creare `scripts/generate-dossier-pdf.py`

**Scopo:** Generatore del dossier commerciale Privacy Phone (~9 pagine).

**Files:**
- Create: `scripts/generate-dossier-pdf.py`

- [ ] **Step 1: Scrivere il generatore completo**

Creare `scripts/generate-dossier-pdf.py`:

```python
"""
AEGIDA Privacy Phone — Dossier commerciale
Output: public/downloads/aegida-privacy-phone-dossier.pdf

Sostituisce brochure + scheda tecnica + documento tecnico legacy.
Stile: cover navy-ink, interno ivory. Palette senza gold.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle,
)
from reportlab.lib.colors import HexColor

from pdf_common import (
    NAVY_INK, IVORY, STEEL, STEEL_HI, SLATE, NAVY_LINE,
    A4_MARGIN_LR, A4_MARGIN_TB,
    register_fonts, make_styles, cover_flowables,
    make_cover_background_drawer, make_footer_drawer,
)

register_fonts()

ROOT = Path(__file__).parent.parent
OUT_PDF = ROOT / "public" / "downloads" / "aegida-privacy-phone-dossier.pdf"

S = make_styles()

# ---- Contenuto italiano -----------------------------------------------------

TITLE = "AEGIDA Privacy Phone"
SUBTITLE = "Smartphone rafforzato per chi lavora con informazioni sensibili. Documento informativo."
KICKER = "DOSSIER · 2026"
DATE = "aprile 2026"
VERSION = "v1.0"
LOCALE = "IT"

MANIFESTO_BODY = [
    "AEGIDA è il brand di sicurezza di <b>H4R (Human for Research Srl)</b>, "
    "società italiana con sede a Roma. Progetta e produce strumenti per chi "
    "opera con informazioni sensibili: giornalisti investigativi, avvocati "
    "penalisti, dirigenti esposti, ONG, figure pubbliche.",

    "Gli strumenti di comunicazione di uso comune non sono progettati per "
    "chi lavora con informazioni sensibili. Messaggistica sincronizzata in "
    "chiaro, backup cloud automatici, estrazione forense consentita. Il "
    "nostro prodotto di punta per il 2026 è AEGIDA Privacy Phone: uno "
    "smartphone rafforzato, testato, documentato, costruito in Italia.",
]

CLAIM_UFED_PULL = (
    "&laquo;Cellebrite UFED 10.8, 17 aprile 2026: 0 dati utente estratti. "
    "Metodologia e risultati nel white paper forense.&raquo;"
)

COSA_RISOLVE_TITLE = "Cosa risolve AEGIDA Privacy Phone"
COSA_RISOLVE_BODY = [
    "Il Privacy Phone è pensato per chi non può accettare che il proprio "
    "smartphone sia un punto debole. La probabilità di perdere il controllo "
    "del dispositivo — per sequestro, furto, coercizione, intrusione fisica "
    "non noticed — non è più trascurabile per chi fa determinati mestieri.",
]
COSA_RISOLVE_LIST = [
    "<b>Estrazione forense:</b> il dispositivo resiste a Cellebrite UFED 10.8, "
    "confermato da test documentato del 17 aprile 2026.",
    "<b>Compromissione OS:</b> sistema operativo derivato e indurito, "
    "verified boot con chiavi proprietarie AEGIDA, attestazione hardware "
    "verificabile.",
    "<b>Backup cloud non consensuali:</b> nessun account Google, nessun "
    "servizio cloud consumer, comunicazione via AEGIDA Connect.",
    "<b>Fuga di metadati:</b> AEGIDA Connect stabilisce canali diretti tra "
    "dispositivi AEGIDA, senza server centrale di instradamento.",
]

COSA_INCLUDE_TITLE = "Cosa include il pacchetto"
COSA_INCLUDE_ITEMS = [
    ("01", "Hardware rafforzato",
     "Base Pixel 10a (Google Tensor G4, 8 GB RAM, 128 GB storage). Firmware "
     "originale rimosso. Installato sistema operativo derivato, indurito da "
     "AEGIDA, con verified boot attivo e chiavi proprietarie. Il dispositivo "
     "arriva al cliente già configurato e sigillato."),
    ("02", "AEGIDA Connect — messaggistica cifrata",
     "Comunicazione diretta tra dispositivi AEGIDA con cifratura post-quantum "
     "(ML-KEM FIPS 203). Nessun server centrale di instradamento: i messaggi "
     "transitano solo tra i dispositivi coinvolti. Niente account, niente "
     "metadati custoditi presso terzi."),
    ("03", "AEGIDA Inspector — attestazione integrità",
     "App di verifica dell'integrità hardware, basata su fork di GrapheneOS "
     "Auditor (licenza GPLv3). Permette di confermare crittograficamente, "
     "tramite un secondo dispositivo di fiducia, che lo smartphone non è "
     "stato manomesso dall'ultima verifica."),
    ("04", "Supporto e formazione",
     "12 mesi di supporto via canale cifrato con tempi di risposta definiti. "
     "Formazione utente in remoto (in sede per ordini multi-dispositivo). "
     "Re-hardening annuale nel pacchetto di rinnovo."),
]

SPECS_HARDWARE_TITLE = "Specifiche hardware"
SPECS_HARDWARE_TABLE = [
    ["Modello base", "Google Pixel 10a"],
    ["Processore", "Google Tensor G4"],
    ["Memoria RAM", "8 GB"],
    ["Storage", "128 GB (espansione non supportata)"],
    ["Display", "6.1\" OLED, risoluzione 1080p"],
    ["Batteria", "4400 mAh, ricarica USB-C"],
    ["Biometria", "Sensore impronta laterale"],
    ["Sensori", "Disabilitabili via policy (mic, camera)"],
    ["Connettività", "5G, Wi-Fi 6, Bluetooth LE 5.3"],
    ["Porta USB", "USB-C, ADB disabilitato, fastboot bloccato"],
    ["Dimensioni", "152.1 × 72.7 × 8.9 mm · 188 g"],
]

SPECS_SOFTWARE_TITLE = "Specifiche software"
SPECS_SOFTWARE_TABLE = [
    ["OS base", "Derivato da GrapheneOS"],
    ["Hardening", "AEGIDA (verified boot + keys proprietarie)"],
    ["Crittografia", "AES-256-GCM, ML-KEM FIPS 203 (Connect)"],
    ["Attestazione", "Hardware-backed via AEGIDA Inspector"],
    ["Lock states", "BFU + AFU, entrambi protetti"],
    ["Update policy", "Security patch mensili, testate da AEGIDA"],
    ["Store applicativo", "Non fornito (no Play Store, no account Google)"],
    ["App preinstallate", "Connect, Inspector, browser hardened"],
    ["Root access", "Non disponibile al cliente"],
    ["Telemetria", "Disabilitata"],
]

PRICING_TITLE = "Pricing"
PRICING_TABLE = [
    [
        Paragraph("<b>Pacchetto primo anno</b>", S["mono"]),
        Paragraph("<b>3.900 €</b>", S["mono"]),
    ],
    [
        Paragraph(
            "Hardware + AEGIDA Connect configurato + AEGIDA Inspector + "
            "12 mesi supporto cifrato + formazione utente.",
            S["body_left"],
        ),
        Paragraph("IVA esclusa", S["caption"]),
    ],
]
PRICING_TABLE_2 = [
    [
        Paragraph("<b>Rinnovo annuale</b>", S["mono"]),
        Paragraph("<b>690 € / anno</b>", S["mono"]),
    ],
    [
        Paragraph(
            "Aggiornamenti sicurezza, supporto cifrato continuato, "
            "re-hardening annuale, incident response entry-level.",
            S["body_left"],
        ),
        Paragraph("IVA esclusa", S["caption"]),
    ],
]
PRICING_BUSINESS = (
    "<b>Ordini multi-dispositivo (5 o più).</b> Per studi legali, redazioni, "
    "ONG e team aziendali sono disponibili condizioni dedicate. Il preventivo "
    "è personalizzato in base al numero di dispositivi, alle esigenze di "
    "gestione centralizzata (MDM) e alla formazione richiesta. Scrivere a "
    "<b>info@aegida-systems.com</b>."
)

PROCESSO_TITLE = "Come si acquista"
PROCESSO_STEPS = [
    ("01", "Colloquio",
     "Scrivere attraverso il modulo di contatto del sito o a info@aegida-systems.com. "
     "Una videoconferenza di 30-45 minuti per capire il caso d'uso, il modello "
     "di minaccia, i requisiti di formazione. Nessun impegno, nessun pagamento."),
    ("02", "Configurazione",
     "A valle del colloquio, se entrambe le parti ritengono il prodotto "
     "adatto, si concorda la configurazione (imei, eventuale MDM, formazione "
     "richiesta, SLA di supporto). Viene emesso il preventivo definitivo."),
    ("03", "Consegna",
     "Il dispositivo è configurato e sigillato presso AEGIDA a Roma. Consegna "
     "tramite corriere tracciato assicurato (previo bonifico anticipato) o "
     "ritiro in presenza con firma di presa in carico."),
    ("04", "Formazione",
     "Sessione di formazione utente della durata di 1-2 ore, in remoto o in "
     "sede. Coprire: buone pratiche operative, uso di Connect e Inspector, "
     "gestione dei codici di sblocco, recovery in caso di perdita del "
     "dispositivo."),
]

CONTATTI_TITLE = "Contatti"
CONTATTI_BODY = (
    "<b>Richieste commerciali e colloqui:</b> info@aegida-systems.com<br/>"
    "<b>Sito:</b> aegida-systems.com<br/>"
    "<b>Sede legale:</b> H4R — Human for Research Srl, Roma, Italia<br/>"
    "<b>Richieste legali / diritto di replica:</b> legal@aegida-systems.com"
)

DISCLAIMER_BODY = (
    "Questo documento è redatto ai sensi del D.Lgs. 145/2007 in materia di "
    "pubblicità ingannevole e comparativa, e ai sensi dell'art. 70 della "
    "Legge 633/1941. I marchi Google, Pixel, Tensor, Cellebrite, UFED, "
    "GrapheneOS appartengono ai rispettivi proprietari e sono citati a "
    "scopo identificativo. AEGIDA non ha alcun rapporto commerciale con "
    "Google, Cellebrite o con la Fondazione GrapheneOS. La menzione di "
    "tali marchi non implica sponsorship, endorsement, affiliazione. Il "
    "test UFED citato è documentato nel white paper correlato "
    "<i>aegida-privacy-phone-test-ufed-2026-04-17.pdf</i>. Per "
    "l'esercizio del diritto di replica, scrivere a legal@aegida-systems.com."
)


# ---- Rendering --------------------------------------------------------------

def pullquote_box(text, styles):
    """A simple steel-bordered box for a pullquote."""
    t = Table(
        [[Paragraph(text, styles["pullquote"])]],
        colWidths=[A4[0] - 2 * A4_MARGIN_LR],
    )
    t.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.5, STEEL),
        ("LEFTPADDING", (0, 0), (-1, -1), 18),
        ("RIGHTPADDING", (0, 0), (-1, -1), 18),
        ("TOPPADDING", (0, 0), (-1, -1), 14),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
    ]))
    return t


def capability_block(number, title, body, styles):
    return [
        Paragraph(number, styles["kicker"]),
        Paragraph(title, styles["h2"]),
        Paragraph(body, styles["body"]),
        Spacer(1, 10),
    ]


def specs_table(rows):
    t = Table(rows, colWidths=[60 * mm, 106 * mm])
    t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "JetBrainsMono"),
        ("FONTSIZE", (0, 0), (0, -1), 8),
        ("TEXTCOLOR", (0, 0), (0, -1), STEEL),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (1, 0), (1, -1), 9),
        ("TEXTCOLOR", (1, 0), (1, -1), NAVY_INK),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def pricing_card(rows, highlighted=False):
    t = Table(rows, colWidths=[106 * mm, 60 * mm])
    border_color = STEEL if highlighted else NAVY_LINE
    border_w = 0.8 if highlighted else 0.4
    t.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), border_w, border_color),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def build_story():
    story = []

    # Cover
    story.extend(cover_flowables(KICKER, TITLE, SUBTITLE, DATE, VERSION, LOCALE))
    story.append(PageBreak())

    # Manifesto
    story.append(Paragraph("MANIFESTO", S["kicker"]))
    story.append(Paragraph("AEGIDA in due righe", S["h1"]))
    for para in MANIFESTO_BODY:
        story.append(Paragraph(para, S["body"]))
    story.append(Spacer(1, 10))
    story.append(pullquote_box(CLAIM_UFED_PULL, S))
    story.append(PageBreak())

    # Cosa risolve
    story.append(Paragraph("POSIZIONAMENTO", S["kicker"]))
    story.append(Paragraph(COSA_RISOLVE_TITLE, S["h1"]))
    for para in COSA_RISOLVE_BODY:
        story.append(Paragraph(para, S["body"]))
    for item in COSA_RISOLVE_LIST:
        story.append(Paragraph(f"•&nbsp;&nbsp;{item}", S["body"]))
    story.append(PageBreak())

    # Cosa include
    story.append(Paragraph("COSA INCLUDE", S["kicker"]))
    story.append(Paragraph(COSA_INCLUDE_TITLE, S["h1"]))
    for num, title, body in COSA_INCLUDE_ITEMS:
        story.extend(capability_block(num, title, body, S))
    story.append(PageBreak())

    # Specs hardware
    story.append(Paragraph("SPECIFICHE", S["kicker"]))
    story.append(Paragraph(SPECS_HARDWARE_TITLE, S["h1"]))
    story.append(specs_table(SPECS_HARDWARE_TABLE))
    story.append(PageBreak())

    # Specs software
    story.append(Paragraph("SPECIFICHE", S["kicker"]))
    story.append(Paragraph(SPECS_SOFTWARE_TITLE, S["h1"]))
    story.append(specs_table(SPECS_SOFTWARE_TABLE))
    story.append(PageBreak())

    # Pricing
    story.append(Paragraph("PRICING", S["kicker"]))
    story.append(Paragraph(PRICING_TITLE, S["h1"]))
    story.append(pricing_card(PRICING_TABLE, highlighted=True))
    story.append(Spacer(1, 14))
    story.append(pricing_card(PRICING_TABLE_2, highlighted=False))
    story.append(Spacer(1, 16))
    story.append(Paragraph(PRICING_BUSINESS, S["body"]))
    story.append(PageBreak())

    # Processo d'acquisto
    story.append(Paragraph("PROCESSO", S["kicker"]))
    story.append(Paragraph(PROCESSO_TITLE, S["h1"]))
    for num, title, body in PROCESSO_STEPS:
        story.extend(capability_block(num, title, body, S))
    story.append(PageBreak())

    # Contatti + disclaimer
    story.append(Paragraph("CONTATTI", S["kicker"]))
    story.append(Paragraph(CONTATTI_TITLE, S["h1"]))
    story.append(Paragraph(CONTATTI_BODY, S["body"]))
    story.append(Spacer(1, 18))
    story.append(Paragraph("DISCLAIMER LEGALE", S["kicker"]))
    story.append(Paragraph(DISCLAIMER_BODY, S["disclaimer"]))

    return story


def main():
    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=A4_MARGIN_LR,
        rightMargin=A4_MARGIN_LR,
        topMargin=A4_MARGIN_TB,
        bottomMargin=A4_MARGIN_TB + 6 * mm,
        title=TITLE,
        author="AEGIDA — H4R Srl",
        subject=SUBTITLE,
    )
    doc.build(
        build_story(),
        onFirstPage=make_cover_background_drawer(),
        onLaterPages=make_footer_drawer(),
    )
    size_kb = OUT_PDF.stat().st_size / 1024
    print(f"OK — generated {OUT_PDF.relative_to(ROOT)} ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Eseguire**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
python scripts/generate-dossier-pdf.py
```

Expected: `OK — generated public/downloads/aegida-privacy-phone-dossier.pdf (XXX KB)`.

- [ ] **Step 3: Verifica contenuto + dimensione**

```bash
ls -la public/downloads/aegida-privacy-phone-dossier.pdf
pdftotext public/downloads/aegida-privacy-phone-dossier.pdf - | head -20 2>&1 || echo "pdftotext non disponibile (opzionale)"
```

Expected: dimensione 150-500 KB. Testo contiene AEGIDA, 3.900 €, Pixel 10a.

- [ ] **Step 4: Apertura visiva (manuale)**

Aprire il PDF. Verificare: cover navy, 9 pagine, 2 card pricing con stile diverso (highlighted primo), tabelle specs leggibili.

- [ ] **Step 5: Commit**

```bash
git add scripts/generate-dossier-pdf.py public/downloads/aegida-privacy-phone-dossier.pdf
git commit -m "feat: add dossier commerciale PDF generator

9-page overview of AEGIDA Privacy Phone: manifesto, cosa risolve,
cosa include, specifiche hardware, specifiche software, pricing,
processo d'acquisto, contatti, disclaimer. Replaces legacy brochure
+ scheda tecnica + documento tecnico PDFs.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Archiviare i 6 PDF legacy

**Scopo:** Spostare i PDF obsoleti in `archive-2026-04/` con README esplicativo.

**Files:**
- Create: `public/downloads/archive-2026-04/README.md`
- Move: 6 PDF

- [ ] **Step 1: Creare directory archivio**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
mkdir -p public/downloads/archive-2026-04
```

- [ ] **Step 2: Creare README archivio**

```bash
cat > public/downloads/archive-2026-04/README.md << 'EOF'
# Archivio PDF legacy — 2026-04

Questa cartella contiene i 6 PDF che erano distribuiti via sito prima della
bonifica dei contenuti (Progetto 1), del redesign visivo (Progetto 2) e della
creazione dei due nuovi PDF coerenti (Progetto 3).

Tutti i file qui dentro sono stati prodotti prima del 2026-04-20 con la palette
gold+navy obsoleta e con copy non allineato alle convenzioni editoriali
attuali (Il Post / Internazionale). Sono conservati per:

- continuità di URL nel caso di link esistenti su social o via email
- riferimento storico del materiale commerciale pre-pivot

I materiali sono stati sostituiti da:

- `../aegida-privacy-phone-dossier.pdf` — dossier commerciale unico che
  sostituisce brochure + scheda tecnica + documento tecnico Privacy Phone
- `../aegida-privacy-phone-test-ufed-2026-04-17.pdf` — white paper UFED
  (stesso filename del vecchio, stesso URL pubblico; contenuto rifatto da zero)

Il Framework non ha più PDF commerciali dedicati: il prodotto è in background
strategico 2027-2028 e il sito vive in one-pager. I 3 PDF Framework saranno
rifatti al momento del lancio commerciale. Il copy e i diagrammi tecnici
originali restano in `docs/framework-archive-2026-04/`.

## File archiviati

- aegida-framework-brief-generale.pdf
- aegida-framework-brochure.pdf
- aegida-framework-documento-tecnico.pdf
- aegida-privacy-phone-brochure.pdf
- aegida-privacy-phone-documento-tecnico.pdf
- aegida-privacy-phone-scheda-tecnica.pdf
EOF
```

- [ ] **Step 3: Spostare i 6 PDF**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"

git mv public/downloads/aegida-framework-brief-generale.pdf       public/downloads/archive-2026-04/
git mv public/downloads/aegida-framework-brochure.pdf             public/downloads/archive-2026-04/
git mv public/downloads/aegida-framework-documento-tecnico.pdf    public/downloads/archive-2026-04/
git mv public/downloads/aegida-privacy-phone-brochure.pdf         public/downloads/archive-2026-04/
git mv public/downloads/aegida-privacy-phone-documento-tecnico.pdf public/downloads/archive-2026-04/
git mv public/downloads/aegida-privacy-phone-scheda-tecnica.pdf   public/downloads/archive-2026-04/
```

Verifica:
```bash
ls public/downloads/
ls public/downloads/archive-2026-04/
```

Expected: `public/downloads/` contiene solo 2 PDF (dossier + white-paper-ufed) + directory `archive-2026-04/`. L'archivio contiene 6 PDF + README.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: archive 6 legacy PDFs in downloads/archive-2026-04

Move 3 Framework PDFs and 3 pre-redesign Privacy Phone PDFs into
archive/. URLs remain live via direct link (not broken); the site
public pages no longer reference them. New PDFs in downloads/ are:
aegida-privacy-phone-dossier.pdf and
aegida-privacy-phone-test-ufed-2026-04-17.pdf.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Sweep link del sito

**Scopo:** Verificare che nessuna pagina web pubblica (componenti, blog articoli, i18n) linki ancora ai PDF archiviati. Se li linka, aggiornare il link al nuovo PDF.

**Files:**
- Possibili modify: componenti, articoli blog, file i18n

- [ ] **Step 1: Cercare riferimenti ai PDF legacy**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"

LEGACY="aegida-framework-brief-generale\|aegida-framework-brochure\|aegida-framework-documento-tecnico\|aegida-privacy-phone-brochure\|aegida-privacy-phone-documento-tecnico\|aegida-privacy-phone-scheda-tecnica"

echo "--- components ---"
grep -rn "$LEGACY" components/ --include="*.tsx" --include="*.ts" 2>/dev/null

echo "--- app ---"
grep -rn "$LEGACY" app/ --include="*.tsx" --include="*.ts" 2>/dev/null

echo "--- blog articles ---"
grep -rn "$LEGACY" lib/blog/ --include="*.ts" 2>/dev/null

echo "--- i18n ---"
grep -rn "$LEGACY" lib/i18n/ 2>/dev/null

echo "--- public (static files) ---"
grep -rn "$LEGACY" public/sitemap.xml public/llms.txt public/.well-known/ 2>/dev/null
```

- [ ] **Step 2: Per ogni riferimento trovato, decidere**

Regola decisionale:

- Link ai PDF Privacy Phone (brochure/scheda/documento-tecnico) → sostituire con `/downloads/aegida-privacy-phone-dossier.pdf`
- Link ai PDF Framework → rimuovere completamente (il Framework non ha più PDF). Se era un bottone "Scarica documento tecnico", sostituire con link alla pagina `/framework/` oppure rimuovere la CTA.
- Link in articoli blog vecchi (se trovati) → lasciare invariati (sono storici; solo il commit note deve segnalare che puntano ora a un archivio)

- [ ] **Step 3: Fare le sostituzioni nei file identificati**

Esempio se trovato in `components/DownloadSection.tsx`:
```tsx
// PRIMA
href="/downloads/aegida-privacy-phone-brochure.pdf"
// DOPO
href="/downloads/aegida-privacy-phone-dossier.pdf"
```

Esempio per Framework link da rimuovere — aprire il file (tipicamente `components/FrameworkContent.tsx` o `lib/i18n/locales/it.ts`) e togliere la CTA download.

- [ ] **Step 4: Aggiornare sitemap se necessario**

```bash
cat public/sitemap.xml | head -40
```

Se `public/sitemap.xml` cita i vecchi PDF (poco probabile, sitemap è per HTML), aggiornare. Se la sitemap viene generata da `scripts/generate-sitemap.js`, verificare/aggiornare lo script.

- [ ] **Step 5: Aggiornare `public/llms.txt`**

```bash
grep -n "\.pdf" public/llms.txt
```

Se `llms.txt` elenca i vecchi PDF, modificare a mano riportando SOLO i 2 nuovi (dossier + white paper UFED). Oppure rigenerare con `node scripts/generate-llms-txt.js` se lo script include i PDF.

- [ ] **Step 6: Build**

```bash
npm run build 2>&1 | tail -10
```

Expected: SUCCESS. Nessuna dipendenza dai vecchi PDF (sono asset statici, non import).

- [ ] **Step 7: Commit (solo se ci sono state modifiche ai source file)**

```bash
git add -A
git commit -m "refactor: update site references to legacy PDFs

Components and i18n strings pointing to archived brochure/scheda/doc-tecnico
now point to aegida-privacy-phone-dossier.pdf. Framework download CTAs
removed (product is background 2027-2028).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

Se nessuna modifica, saltare il commit.

---

### Task 7: README generatori PDF

**Scopo:** Documentare come rigenerare i PDF quando il copy cambia.

**Files:**
- Create: `scripts/README.md` (o update se esiste)

- [ ] **Step 1: Creare / aggiornare il README**

```bash
cat > scripts/README.md << 'EOF'
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
EOF
```

Se `scripts/README.md` esiste già, integrare la sezione "Generatori PDF" in cima e lasciare il resto.

- [ ] **Step 2: Commit**

```bash
git add scripts/README.md
git commit -m "docs: add scripts/README explaining PDF generators

How to regenerate dossier + white paper PDFs, prerequisites,
when to regenerate, versioning convention.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Verifica finale end-to-end

**Scopo:** Conferma che tutto il Progetto 3 è pulito e il sito è coerente.

- [ ] **Step 1: Stato downloads/**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
ls -la public/downloads/
```

Expected: esattamente 2 PDF (dossier + white paper UFED) + 1 directory archive-2026-04.

- [ ] **Step 2: Dimensioni PDF**

```bash
du -b public/downloads/aegida-privacy-phone-dossier.pdf
du -b public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf
```

Expected:
- dossier < 500 KB
- white paper 600 KB – 1.5 MB (include 4 screenshot JPG)

- [ ] **Step 3: Font embedding**

```bash
python -c "
from pypdf import PdfReader
for f in ['public/downloads/aegida-privacy-phone-dossier.pdf',
          'public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf']:
    r = PdfReader(f)
    fonts = set()
    for page in r.pages:
        try:
            for fnt in page['/Resources']['/Font'].values():
                fonts.add(str(fnt.get_object()['/BaseFont']))
        except Exception:
            pass
    print(f, '→', sorted(fonts))
"
```

Se `pypdf` non è installato, skippa questo step e fai verifica manuale aprendo il PDF in un reader che mostra le proprietà font.

Expected: lista include `Helvetica`, `Helvetica-Bold`, `JetBrainsMono`.

- [ ] **Step 4: Claim UFED uniformity**

```bash
# Se pdftotext è disponibile:
pdftotext public/downloads/aegida-privacy-phone-dossier.pdf - | grep -c "0 dati utente" 
pdftotext public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf - | grep -c "0 dati utente"
```

Expected: rispettivamente almeno 1 e almeno 2-3 occorrenze (dossier lo menziona una volta, white paper più volte).

- [ ] **Step 5: Grep residui "gold" nel sito (safety net)**

```bash
grep -rn "gold" public/llms.txt public/sitemap.xml 2>/dev/null
```

Expected: 0 match.

- [ ] **Step 6: Build sito**

```bash
npm run build 2>&1 | tail -10
```

Expected: SUCCESS.

- [ ] **Step 7: Verifica manuale apertura dei 2 PDF**

Aprire entrambi i PDF con il default viewer di sistema. Per ciascuno:
- Cover navy scura con wordmark "AEGIDA" bianco e titolo ivory
- Pagine interne su fondo ivory
- Header/footer con wordmark mono + numerazione
- Nessun gold, nessun ciano, nessun ornamento web legacy
- Tabelle leggibili, screenshot visibili (white paper)
- Testi integri, disclaimer in fondo

- [ ] **Step 8: Conteggio commit del Progetto 3**

```bash
git log --oneline | head -20
git log --oneline HEAD | grep -E "chore: add JetBrainsMono|feat: add pdf_common|refactor: rewrite white paper|feat: add dossier|chore: archive 6 legacy|refactor: update site references|docs: add scripts/README" | wc -l
```

Expected: 6-7 commit del Progetto 3.

- [ ] **Step 9: Riepilogo utente**

Produrre messaggio finale all'utente con:
- Posizione dei 2 PDF finali
- Dimensione di ciascuno
- Posizione dell'archivio
- Commit totali del Progetto 3
- Stato branch (ancora su `feature/bonifica-comunicazione-ita`)
- Prossimo step: merge + deploy, o passare ad altro

Non eseguire merge / push / deploy senza conferma esplicita.

---

## Note di chiusura progetto

Completato Progetto 3:

1. **Tre progetti chiusi** sullo stesso branch — Bonifica (P1), Redesign (P2), White paper + Dossier (P3).
2. **Placeholder ancora presenti** — i 3 `[DA CONFERMARE]` in `lib/i18n/locales/it.ts` (anno H4R, team, PEC) non bloccano il deploy ma vanno sostituiti appena possibile.
3. **Memoria da aggiornare dopo completamento:**
   - `project_aegida.md` — aggiornare palette + font + 2 PDF canonici
   - `session_handoff_ufed_pivot.md` — aggiungere chiusura dei 3 progetti
   - `product_privacy_phone_pricing.md` — nessun cambio (pricing invariato)

4. **Follow-up opzionali**
   - Traduzione EN/DE dei PDF (Fase 2, separata)
   - Press kit zip (Opzione 6 del memory) con entrambi i PDF + 4 screenshot + template email
   - Pitch a redazioni investigative (Opzione 3)
