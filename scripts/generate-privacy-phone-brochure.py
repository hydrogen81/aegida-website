"""
AEGIDA Privacy Phone — Brochure sintetica (3 pagine)
Output: public/downloads/aegida-privacy-phone-brochure.pdf

Versione commerciale snella. Per visione completa tecnica vedi dossier.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle
from reportlab.lib.colors import HexColor

from pdf_common import (
    NAVY_INK, IVORY, STEEL, STEEL_HI, SLATE, NAVY_LINE,
    A4_MARGIN_LR, A4_MARGIN_TB,
    register_fonts, make_styles, cover_flowables,
    make_cover_background_drawer, make_footer_drawer,
)

register_fonts()
ROOT = Path(__file__).parent.parent
OUT_PDF = ROOT / "public" / "downloads" / "aegida-privacy-phone-brochure.pdf"
S = make_styles()

TITLE = "AEGIDA Privacy Phone"
SUBTITLE = "Smartphone rafforzato. Documento sintetico."
KICKER = "BROCHURE · 2026"
DATE = "aprile 2026"
VERSION = "v1.1"
LOCALE = "IT"

MANIFESTO = [
    "AEGIDA è il brand di sicurezza di H4R (Human for Research Srl). Progetta e "
    "produce strumenti per chi opera con informazioni sensibili: giornalisti "
    "investigativi, avvocati penalisti, dirigenti in contesti ostili, figure "
    "pubbliche esposte.",
    "Il Privacy Phone è il prodotto di punta 2026. Smartphone rafforzato su base "
    "Pixel 10a con sistema operativo derivato e indurito. Testato forensicamente: "
    "Cellebrite UFED 10.8 non ha estratto alcun dato utente.",
]

CLAIM_PULL = (
    "&laquo;Cellebrite UFED 10.8, verifica forense indipendente: 0 dati utente estratti. "
    "Nessun contenuto applicativo (messaggi, foto, contatti, file). Solo metadati di "
    "sistema accessibili. Metodologia completa nel white paper.&raquo;"
)

COSA_INCLUDE = [
    ("01", "Hardware rafforzato",
     "Base Pixel 10a. Firmware originale rimosso; sistema operativo derivato "
     "da GrapheneOS, indurito da AEGIDA, verified boot con chiavi proprietarie."),
    ("02", "Connect — messaggistica",
     "Scambio di chiavi post-quantum (ML-KEM FIPS 203) con cifratura dati "
     "ChaCha20-Poly1305. Nessun server centrale di instradamento."),
    ("03", "Inspector — integrit\u00e0",
     "Attestazione hardware-backed via fork di GrapheneOS Auditor (GPLv3). "
     "Verifica crittografica che il dispositivo non sia stato manomesso."),
    ("04", "Supporto e formazione",
     "12 mesi di supporto via canale cifrato. Formazione utente remota. "
     "Re-hardening annuale nel rinnovo."),
]

TEMPEST_NOTE = (
    "Il dispositivo \u00e8 stato sottoposto a test secondo metodologia TEMPEST per la "
    "resistenza a compromissioni tramite intercettazione di emissioni "
    "elettromagnetiche non intenzionali. Test condotti da societ\u00e0 italiana "
    "indipendente secondo protocolli documentati (non costituiscono certificazione "
    "SDIP-27 n\u00e9 accreditamento da ente terzo)."
)

PRICING = [
    ["Pacchetto primo anno", "3.900 \u20ac"],
    ["Rinnovo annuale", "690 \u20ac / anno"],
    ["Ordini multi-dispositivo (5+)", "Preventivo dedicato"],
]

CONTATTI = (
    "<b>Richieste commerciali:</b> info@aegida-systems.com<br/>"
    "<b>Sito:</b> aegida-systems.com<br/>"
    "<b>Sede legale:</b> H4R \u2014 Human for Research Srl, Roma, Italia<br/>"
    "<b>Richieste legali / diritto di replica:</b> legal@aegida-systems.com"
)

DISCLAIMER = (
    "Documento redatto ai sensi del D.Lgs. 145/2007 e dell\u2019art. 70 L. 633/1941. "
    "Google, Pixel, Tensor, Cellebrite, UFED, Turbo Link, GrapheneOS sono marchi "
    "dei rispettivi proprietari. AEGIDA non ha rapporti commerciali con queste "
    "entit\u00e0. Per approfondimenti tecnici sul test UFED: white paper disponibile "
    "sul sito. Per specifiche hardware/software complete: dossier tecnico."
)

# ---- Rendering --------------------------------------------------------------

def capability_row(num, title, body):
    return [
        Paragraph(num, S["kicker"]),
        Paragraph(title, S["h2"]),
        Paragraph(body, S["body"]),
        Spacer(1, 8),
    ]

def pullquote_box(text):
    t = Table(
        [[Paragraph(text, S["pullquote"])]],
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

def pricing_table():
    t = Table(PRICING, colWidths=[106 * mm, 60 * mm])
    t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (0, -1), 10),
        ("TEXTCOLOR", (0, 0), (0, -1), NAVY_INK),
        ("FONTNAME", (1, 0), (1, -1), "JetBrainsMono"),
        ("FONTSIZE", (1, 0), (1, -1), 11),
        ("TEXTCOLOR", (1, 0), (1, -1), NAVY_INK),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("ALIGN", (1, 0), (1, -1), "RIGHT"),
    ]))
    return t

def build_story():
    story = []
    # Cover
    story.extend(cover_flowables(KICKER, TITLE, SUBTITLE, DATE, VERSION, LOCALE))
    story.append(PageBreak())

    # Page 2: Manifesto + Claim + Cosa include
    story.append(Paragraph("MANIFESTO", S["kicker"]))
    story.append(Paragraph("AEGIDA Privacy Phone in sintesi", S["h1"]))
    for p in MANIFESTO:
        story.append(Paragraph(p, S["body"]))
    story.append(Spacer(1, 6))
    story.append(pullquote_box(CLAIM_PULL))
    story.append(Spacer(1, 14))
    story.append(Paragraph("COSA INCLUDE", S["kicker"]))
    story.append(Paragraph("Il pacchetto", S["h2"]))
    for num, title, body in COSA_INCLUDE:
        story.extend(capability_row(num, title, body))
    story.append(PageBreak())

    # Page 3: TEMPEST + Pricing + Contatti + Disclaimer
    story.append(Paragraph("METODOLOGIA COMPLEMENTARE", S["kicker"]))
    story.append(Paragraph("Resistenza alle emissioni compromettenti", S["h2"]))
    story.append(Paragraph(TEMPEST_NOTE, S["body"]))
    story.append(Spacer(1, 14))
    story.append(Paragraph("PRICING", S["kicker"]))
    story.append(Paragraph("Pacchetto e rinnovo", S["h2"]))
    story.append(pricing_table())
    story.append(Spacer(1, 18))
    story.append(Paragraph("CONTATTI", S["kicker"]))
    story.append(Paragraph(CONTATTI, S["body"]))
    story.append(Spacer(1, 14))
    story.append(Paragraph("DISCLAIMER", S["kicker"]))
    story.append(Paragraph(DISCLAIMER, S["disclaimer"]))
    return story

def main():
    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT_PDF), pagesize=A4,
        leftMargin=A4_MARGIN_LR, rightMargin=A4_MARGIN_LR,
        topMargin=A4_MARGIN_TB, bottomMargin=A4_MARGIN_TB + 6 * mm,
        title=TITLE, author="AEGIDA \u2014 H4R Srl", subject=SUBTITLE,
    )
    doc.build(build_story(),
              onFirstPage=make_cover_background_drawer(),
              onLaterPages=make_footer_drawer())
    kb = OUT_PDF.stat().st_size / 1024
    print(f"OK \u2014 generated {OUT_PDF.relative_to(ROOT)} ({kb:.0f} KB)")

if __name__ == "__main__":
    main()
