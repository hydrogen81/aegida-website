"""
AEGIDA Framework — Brochure pre-lancio (7 pagine)
Output: public/downloads/aegida-framework-brochure.pdf

Prodotto in preparazione per lancio commerciale 2027-2028.
Pilot aperti a operatori selezionati.
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
OUT_PDF = ROOT / "public" / "downloads" / "aegida-framework-brochure.pdf"
S = make_styles()

TITLE = "AEGIDA Framework"
SUBTITLE = "Piattaforma di sicurezza per infrastrutture critiche. Documento informativo pre-lancio."
KICKER = "BROCHURE \u00b7 PRE-LANCIO 2027-2028"
DATE = "aprile 2026"
VERSION = "v1.0"
LOCALE = "IT"

MANIFESTO = [
    "AEGIDA Framework \u00e8 una piattaforma di sicurezza pensata per le reti di "
    "comunicazione di infrastrutture critiche: energia, sanit\u00e0, trasporti, "
    "pubblica amministrazione. \u00c8 il prodotto strategico 2027-2028 di H4R.",
    "La piattaforma implementa crittografia post-quantum (ML-KEM FIPS 203), "
    "stratificazione con AES-256-GCM e un livello di stealth delle "
    "comunicazioni. \u00c8 pensata per operatori che devono rispondere a NIS2, "
    "DORA o normative equivalenti e gestiscono reti su scala nazionale.",
    "Nel 2026 il Framework \u00e8 in fase di qualificazione presso l\u2019Agenzia per la "
    "Cybersicurezza Nazionale. Sono aperti pilot non paganti a operatori "
    "selezionati in cambio di feedback strutturato.",
]

PER_CHI = [
    ("Operatori di servizi essenziali",
     "Soggetti sottoposti alla Direttiva NIS2 per la sicurezza delle reti e dei "
     "sistemi informativi."),
    ("Operatori finanziari",
     "Soggetti sottoposti al regolamento DORA per la resilienza operativa "
     "digitale."),
    ("Pubblica amministrazione centrale",
     "Amministrazioni con requisiti di cybersicurezza ACN e con reti di "
     "comunicazione interne su scala nazionale."),
    ("Infrastrutture critiche",
     "Energia, sanit\u00e0, trasporti, telecomunicazioni con reti WAN di controllo "
     "e telemetria da proteggere da compromissione remota."),
]

ARCHITETTURA = [
    ("Layer 1 \u2014 Trasporto",
     "Cifratura a livello di trasporto con AES-256-GCM classico, sempre attivo."),
    ("Layer 2 \u2014 Chiave",
     "Scambio di chiavi post-quantum con ML-KEM FIPS 203 (NIST). Protegge le "
     "comunicazioni da attacchi harvest-now-decrypt-later."),
    ("Layer 3 \u2014 Stealth",
     "Livello opzionale di occultamento del traffico. Rilevante per scenari "
     "dove la visibilit\u00e0 stessa della comunicazione \u00e8 una vulnerabilit\u00e0."),
]

STATO_2026 = [
    "Qualificazione in corso presso l\u2019Agenzia per la Cybersicurezza Nazionale.",
    "Dialogo aperto con integrator di riferimento del mercato italiano.",
    "Pilot non paganti attivabili con operatori selezionati (limitati per numero "
    "e selezionati su base tecnica).",
    "Nessuna commercializzazione prima del completamento delle certificazioni e "
    "della disponibilit\u00e0 di reference clienti.",
]

ROADMAP_2027_2028 = [
    "Lancio commerciale previsto nel biennio 2027-2028.",
    "Condizioni di rilascio: completamento certificazioni ACN, disponibilit\u00e0 di "
    "almeno due reference clienti tratti dai pilot attualmente in corso, "
    "documentazione tecnica completa, piano di supporto post-vendita.",
    "Nel frattempo il prodotto commerciale di H4R \u00e8 AEGIDA Privacy Phone.",
]

PROCESSO_PILOT = [
    ("01", "Colloquio iniziale",
     "Candidatura tramite il modulo di contatto del sito con motivazione "
     "tecnica. Videoconferenza di 60 minuti per valutare il caso d\u2019uso."),
    ("02", "Scoping tecnico",
     "Analisi dell\u2019infrastruttura esistente, del modello di minaccia, dei "
     "requisiti di integrazione. Definizione del perimetro del pilot."),
    ("03", "Installazione",
     "Deploy della piattaforma nell\u2019ambiente pilot, in modalit\u00e0 affiancata "
     "all\u2019infrastruttura produttiva. Nessuna sostituzione di sistemi live."),
    ("04", "Feedback strutturato",
     "Periodo di uso di 3-6 mesi con raccolta strutturata di feedback. "
     "Pubblicazione congiunta (se il pilot lo consente) di reference pubblica."),
]

CONTATTI = (
    "<b>Candidature pilot:</b> info@aegida-systems.com (oggetto: Framework pilot)<br/>"
    "<b>Sede legale:</b> H4R \u2014 Human for Research Srl, Roma, Italia<br/>"
    "<b>Richieste legali:</b> legal@aegida-systems.com"
)

DISCLAIMER = (
    "Documento redatto ai sensi del D.Lgs. 145/2007 e dell\u2019art. 70 L. 633/1941. "
    "AEGIDA Framework \u00e8 prodotto in preparazione: le informazioni qui contenute "
    "sono soggette a modifiche prima del lancio commerciale. Nessun impegno "
    "commerciale \u00e8 assunto con questo documento."
)

# ---- Rendering helpers ------------------------------------------------------

def titled_block(h2, body_text_or_list):
    story = [Paragraph(h2, S["h2"])]
    if isinstance(body_text_or_list, str):
        story.append(Paragraph(body_text_or_list, S["body"]))
    else:
        for item in body_text_or_list:
            if isinstance(item, str):
                story.append(Paragraph(f"\u2022\u00a0\u00a0{item}", S["body"]))
            else:
                subtitle, body = item
                story.append(Paragraph(f"<b>{subtitle}.</b> {body}", S["body"]))
    story.append(Spacer(1, 6))
    return story


def build_story():
    story = []

    # Page 1: Cover
    story.extend(cover_flowables(KICKER, TITLE, SUBTITLE, DATE, VERSION, LOCALE))
    story.append(PageBreak())

    # Page 2: Manifesto
    story.append(Paragraph("MANIFESTO", S["kicker"]))
    story.append(Paragraph("AEGIDA Framework in sintesi", S["h1"]))
    for p in MANIFESTO:
        story.append(Paragraph(p, S["body"]))
    story.append(PageBreak())

    # Page 3: Per chi serve
    story.append(Paragraph("TARGET", S["kicker"]))
    story.append(Paragraph("A chi serve", S["h1"]))
    story.extend(titled_block("Soggetti obiettivo", PER_CHI))
    story.append(PageBreak())

    # Page 4: Architettura
    story.append(Paragraph("ARCHITETTURA", S["kicker"]))
    story.append(Paragraph("Architettura sintetica", S["h1"]))
    story.append(Paragraph(
        "Il Framework opera su tre strati concettuali. Ogni strato \u00e8 indipendente "
        "dagli altri e pu\u00f2 essere attivato o disattivato in base al profilo di "
        "rischio dell\u2019operatore.", S["body"]))
    story.extend(titled_block("I tre strati", ARCHITETTURA))
    story.append(PageBreak())

    # Page 5: Stato 2026 + Roadmap 2027-2028
    story.append(Paragraph("STATO 2026", S["kicker"]))
    story.append(Paragraph("Dove siamo oggi", S["h1"]))
    story.extend(titled_block("Fase attuale", STATO_2026))
    story.append(Spacer(1, 12))
    story.append(Paragraph("ROADMAP", S["kicker"]))
    story.append(Paragraph("2027-2028", S["h2"]))
    story.extend(titled_block("Piano commerciale", ROADMAP_2027_2028))
    story.append(PageBreak())

    # Page 6: Processo pilot
    story.append(Paragraph("PILOT", S["kicker"]))
    story.append(Paragraph("Come si candida un pilot", S["h1"]))
    for num, title, body in PROCESSO_PILOT:
        story.append(Paragraph(num, S["kicker"]))
        story.append(Paragraph(title, S["h2"]))
        story.append(Paragraph(body, S["body"]))
        story.append(Spacer(1, 6))
    story.append(PageBreak())

    # Page 7: Contatti + Disclaimer
    story.append(Paragraph("CONTATTI", S["kicker"]))
    story.append(Paragraph("Candidature e informazioni", S["h1"]))
    story.append(Paragraph(CONTATTI, S["body"]))
    story.append(Spacer(1, 18))
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
