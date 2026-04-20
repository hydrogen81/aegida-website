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
