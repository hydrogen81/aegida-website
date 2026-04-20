"""
AEGIDA Privacy Phone — Flyer commerciale (2 pagine)
Output: materiali-offline/aegida-privacy-phone-flyer.pdf

Documento compatto per distribuzione offline (eventi, stampa fisica,
allegato email rapido). Deriva dai contenuti del dossier v2.0 in
forma condensata. NON pubblicato sul sito.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, HRFlowable,
)
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY

from pdf_common import (
    NAVY_INK, IVORY, STEEL, STEEL_HI, SLATE, NAVY_LINE,
    A4_MARGIN_LR, A4_MARGIN_TB,
    register_fonts, make_styles, cover_flowables,
    make_cover_background_drawer, make_footer_drawer,
)

register_fonts()

ROOT = Path(__file__).parent.parent
OUT_PDF = ROOT / "materiali-offline" / "aegida-privacy-phone-flyer.pdf"

S = make_styles()

# ---- Stili specifici flyer --------------------------------------------------

_hero_claim = ParagraphStyle(
    "hero_claim", fontName="Helvetica-Bold", fontSize=14, leading=20,
    textColor=NAVY_INK, alignment=TA_LEFT, spaceAfter=12,
)
_primato_box = ParagraphStyle(
    "primato", fontName="Helvetica", fontSize=10.5, leading=16,
    textColor=NAVY_INK, alignment=TA_LEFT, leftIndent=14,
    rightIndent=14, spaceAfter=0,
)
_cap_num = ParagraphStyle(
    "cap_num", fontName="JetBrainsMono", fontSize=10, leading=14,
    textColor=STEEL, alignment=TA_LEFT, spaceAfter=2,
)
_cap_title = ParagraphStyle(
    "cap_title", fontName="Helvetica-Bold", fontSize=11, leading=14,
    textColor=NAVY_INK, alignment=TA_LEFT, spaceAfter=3,
)
_cap_body = ParagraphStyle(
    "cap_body", fontName="Helvetica", fontSize=9.5, leading=13,
    textColor=NAVY_INK, alignment=TA_LEFT, spaceAfter=0,
)
_price_label = ParagraphStyle(
    "price_label", fontName="Helvetica", fontSize=10, leading=14,
    textColor=NAVY_INK, alignment=TA_LEFT,
)
_price_value = ParagraphStyle(
    "price_value", fontName="JetBrainsMono", fontSize=14, leading=18,
    textColor=NAVY_INK, alignment=TA_LEFT,
)


# ---- CONTENUTO --------------------------------------------------------------

TITLE = "AEGIDA Privacy Phone"
SUBTITLE = "Smartphone sigillato. Zero dati estratti in test forense."
KICKER = "FLYER · 2026"
DATE = "aprile 2026"
VERSION = "v1.0"
LOCALE = "IT"

HERO_CLAIM = (
    "Il 17 aprile 2026 un laboratorio italiano di digital forensics "
    "certificato non ha estratto dati utente da un AEGIDA Privacy Phone "
    "con Cellebrite UFED 10.8. Operatore ASIS IMCST. Metodologia "
    "documentata nel white paper."
)

PRIMATO = (
    "<b>Primato tecnico.</b> AEGIDA Privacy Phone è l'unico smartphone "
    "commerciale al mondo a integrare cifratura post-quantum "
    "(ML-KEM FIPS 203) nel sistema di comunicazione. Resistente ad "
    "attacchi «harvest-now-decrypt-later»."
)

CAPABILITY = [
    ("01", "Hardware sigillato",
     "Base Pixel 10a. Firmware originale rimosso; OS derivato da GrapheneOS "
     "con hardening AEGIDA, verified boot a chiavi proprietarie, ADB e "
     "fastboot bloccati. Dispositivo consegnato sigillato."),

    ("02", "Connect — messaggistica post-quantum",
     "Scambio di chiavi ML-KEM FIPS 203 + cifratura ChaCha20-Poly1305. "
     "Comunicazione diretta fra dispositivi AEGIDA: nessun server centrale, "
     "nessun account, nessun metadato presso terzi."),

    ("03", "Inspector — attestazione integrità",
     "Fork di GrapheneOS Auditor (GPLv3). Verifica crittografica, "
     "hardware-backed, che il dispositivo non sia stato manomesso. Secondo "
     "dispositivo di fiducia come verificatore."),

    ("04", "Supporto e formazione",
     "12 mesi di supporto via canale cifrato. Formazione utente remota "
     "(in sede per ordini multi-dispositivo). Re-hardening annuale nel "
     "rinnovo."),
]

PRICING = [
    ["Pacchetto primo anno",
     "Hardware + configurazione + Connect + Inspector + 12 mesi supporto + formazione",
     "3.900 €",
     "IVA inclusa"],
    ["Rinnovo annuale",
     "Supporto cifrato continuato, re-hardening annuale, incident response",
     "690 € / anno",
     "IVA inclusa"],
    ["Ordini multi-dispositivo (5+)",
     "Studi legali, redazioni, ONG, team aziendali — condizioni dedicate",
     "Preventivo",
     "su richiesta"],
]

ACQUISTO = [
    ("01", "Colloquio",
     "Videoconferenza 30-45 min. Si capisce il caso d'uso, si concorda "
     "la configurazione, si emette il preventivo."),
    ("02", "Consegna",
     "Dispositivo configurato e sigillato a Roma. Corriere tracciato "
     "e assicurato o ritiro in sede."),
    ("03", "Formazione",
     "1-2 ore in remoto: uso di Connect e Inspector, gestione codici, "
     "procedure in caso di perdita o sequestro."),
]

CONTATTI_BLOCK = (
    "<b>info@aegida-systems.com</b><br/>"
    "aegida-systems.com<br/><br/>"
    "<b>H4R Srl - Human for Research</b><br/>"
    "Roma, Italia · PEC: h4-researchsrl@legalmail.it · "
    "Diritto di replica: legal@aegida-systems.com"
)

DISCLAIMER = (
    "Documento redatto ai sensi del D.Lgs. 145/2007 e dell'art. 70 L. 633/1941. "
    "Google, Pixel, Tensor, Cellebrite, UFED, Turbo Link, GrapheneOS sono marchi "
    "dei rispettivi proprietari; AEGIDA non ha rapporti commerciali con queste "
    "entità. Per approfondimenti tecnici: white paper UFED e dossier disponibili "
    "su aegida-systems.com."
)


# ---- RENDERING HELPERS ------------------------------------------------------

def primato_box():
    t = Table(
        [[Paragraph(PRIMATO, _primato_box)]],
        colWidths=[A4[0] - 2 * A4_MARGIN_LR],
    )
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), HexColor("#F1ECDE")),
        ("BOX", (0, 0), (-1, -1), 0.6, STEEL),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
    ]))
    return t


def capability_grid():
    """2x2 grid capability."""
    cells = []
    for num, title, body in CAPABILITY:
        cell_flow = [
            Paragraph(num, _cap_num),
            Paragraph(title, _cap_title),
            Paragraph(body, _cap_body),
        ]
        cells.append(cell_flow)

    rows = [[cells[0], cells[1]], [cells[2], cells[3]]]
    col_w = (A4[0] - 2 * A4_MARGIN_LR - 8) / 2
    t = Table(rows, colWidths=[col_w, col_w])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), IVORY),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEABOVE", (0, 0), (-1, 0), 0.4, NAVY_LINE),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, NAVY_LINE),
        ("LINEBEFORE", (0, 0), (0, -1), 0.4, NAVY_LINE),
        ("LINEAFTER", (1, 0), (1, -1), 0.4, NAVY_LINE),
        ("LINEAFTER", (0, 0), (0, -1), 0.4, NAVY_LINE),
    ]))
    return t


def pricing_table():
    rows = []
    for name, desc, price, iva in PRICING:
        rows.append([
            Paragraph(f"<b>{name}</b>", _price_label),
            Paragraph(desc, _cap_body),
            Paragraph(f"<b>{price}</b>", _price_label),
            Paragraph(iva, _cap_body),
        ])
    t = Table(rows, colWidths=[44 * mm, 66 * mm, 28 * mm, 28 * mm])
    t.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, NAVY_LINE),
        ("LINEABOVE", (0, 0), (-1, 0), 0.6, STEEL),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (2, 0), (2, -1), "RIGHT"),
    ]))
    return t


def acquisto_row():
    """3 step orizzontali."""
    cells = []
    for num, title, body in ACQUISTO:
        cells.append([
            Paragraph(num, _cap_num),
            Paragraph(title, _cap_title),
            Paragraph(body, _cap_body),
        ])
    col_w = (A4[0] - 2 * A4_MARGIN_LR - 8) / 3
    t = Table([cells], colWidths=[col_w] * 3)
    t.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LINEAFTER", (0, 0), (1, -1), 0.4, NAVY_LINE),
    ]))
    return t


def section_header(kicker, title):
    return [
        Paragraph(kicker, S["kicker"]),
        Paragraph(title, S["h2"]),
        Spacer(1, 6),
    ]


# ---- BUILD ------------------------------------------------------------------

def build_story():
    story = []

    # PAGINA 1: COVER
    story.extend(cover_flowables(KICKER, TITLE, SUBTITLE, DATE, VERSION, LOCALE))
    story.append(PageBreak())

    # PAGINA 2: Proof + Primato + Capability
    story.extend(section_header("IL TEST", "Cellebrite UFED · 17 aprile 2026"))
    story.append(Paragraph(HERO_CLAIM, S["body"]))
    story.append(Spacer(1, 10))
    story.append(primato_box())
    story.append(Spacer(1, 20))

    story.extend(section_header("COSA INCLUDE", "Il pacchetto AEGIDA Privacy Phone"))
    story.append(capability_grid())
    story.append(PageBreak())

    # PAGINA 3: Pricing + Acquisto + Contatti + Disclaimer
    story.extend(section_header("INVESTIMENTO", "Pacchetto, rinnovo, ordini multi-dispositivo"))
    story.append(pricing_table())
    story.append(Spacer(1, 22))

    story.extend(section_header("COME ORDINARE", "Tre passaggi"))
    story.append(acquisto_row())
    story.append(Spacer(1, 22))

    story.extend(section_header("CONTATTI", ""))
    story.append(Paragraph(CONTATTI_BLOCK, S["body_left"]))
    story.append(Spacer(1, 16))

    story.append(HRFlowable(width="100%", thickness=0.3, color=NAVY_LINE))
    story.append(Spacer(1, 8))
    story.append(Paragraph(DISCLAIMER, S["disclaimer"]))

    return story


def main():
    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT_PDF), pagesize=A4,
        leftMargin=A4_MARGIN_LR, rightMargin=A4_MARGIN_LR,
        topMargin=A4_MARGIN_TB, bottomMargin=A4_MARGIN_TB + 6 * mm,
        title=f"{TITLE} — Flyer", author="AEGIDA — H4R Srl - Human for Research",
        subject="Flyer commerciale AEGIDA Privacy Phone",
    )
    doc.build(
        build_story(),
        onFirstPage=make_cover_background_drawer(),
        onLaterPages=make_footer_drawer(),
    )
    kb = OUT_PDF.stat().st_size / 1024
    print(f"OK — generato {OUT_PDF.relative_to(ROOT)} ({kb:.0f} KB, non pubblicato sul sito)")


if __name__ == "__main__":
    main()
