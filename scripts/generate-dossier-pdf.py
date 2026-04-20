"""
AEGIDA Privacy Phone — Dossier commerciale v2.0
Output: public/downloads/aegida-privacy-phone-dossier.pdf

Redesign editoriale completo: struttura narrative-first, tipografia curata,
pull-quote sobri, tabelle ivory hairline, pricing con contesto.
Registro giornalistico-saggistico. Zero claim assoluti.
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
OUT_PDF = ROOT / "public" / "downloads" / "aegida-privacy-phone-dossier.pdf"

S = make_styles()

# Stile aggiuntivo per sommario e toc
_toc_entry = ParagraphStyle(
    "toc_entry", fontName="Helvetica", fontSize=10, leading=18,
    textColor=NAVY_INK, alignment=TA_LEFT, leftIndent=0, spaceAfter=2,
)
_toc_num = ParagraphStyle(
    "toc_num", fontName="JetBrainsMono", fontSize=8, leading=18,
    textColor=STEEL, alignment=TA_LEFT, spaceAfter=2,
)
_section_intro = ParagraphStyle(
    "section_intro", fontName="Helvetica", fontSize=10.5, leading=16,
    textColor=NAVY_INK, alignment=TA_JUSTIFY, spaceAfter=10, spaceBefore=4,
)
_bullet = ParagraphStyle(
    "bullet", fontName="Helvetica", fontSize=10, leading=15,
    textColor=NAVY_INK, alignment=TA_JUSTIFY, leftIndent=14,
    firstLineIndent=-14, spaceAfter=7,
)
_step_num = ParagraphStyle(
    "step_num", fontName="JetBrainsMono", fontSize=22, leading=26,
    textColor=STEEL, alignment=TA_LEFT, spaceAfter=2,
)
_step_title = ParagraphStyle(
    "step_title", fontName="Helvetica-Bold", fontSize=12, leading=16,
    textColor=NAVY_INK, alignment=TA_LEFT, spaceAfter=5,
)

# ---- Metadati documento ------------------------------------------------------

TITLE = "AEGIDA Privacy Phone"
SUBTITLE = "Dossier commerciale per professionisti esposti. Documento informativo riservato."
KICKER = "DOSSIER · 2026"
DATE = "aprile 2026"
VERSION = "v2.0"
LOCALE = "IT"

# Larghezza utile del corpo testo
BODY_W = A4[0] - 2 * A4_MARGIN_LR


# ---- Helper: pull-quote box --------------------------------------------------

def pullquote_box(text):
    t = Table(
        [[Paragraph(text, S["pullquote"])]],
        colWidths=[BODY_W],
    )
    t.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.5, STEEL),
        ("BACKGROUND", (0, 0), (-1, -1), IVORY),
        ("LEFTPADDING", (0, 0), (-1, -1), 20),
        ("RIGHTPADDING", (0, 0), (-1, -1), 20),
        ("TOPPADDING", (0, 0), (-1, -1), 16),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 16),
    ]))
    return t


# ---- Helper: tabella specs (singola colonna) ---------------------------------

def specs_table_single(rows):
    t = Table(rows, colWidths=[58 * mm, 108 * mm])
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
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


# ---- Helper: tabella a 2 colonne affiancate (specs hw + sw) ------------------

def specs_table_2col(rows_left, rows_right, col_label_w=46 * mm, col_val_w=50 * mm):
    """Affianca hardware e software in due blocchi colonna."""
    gap = 10 * mm
    col_label_w2 = 44 * mm
    col_val_w2 = 50 * mm
    combined = []
    max_len = max(len(rows_left), len(rows_right))
    for i in range(max_len):
        left = rows_left[i] if i < len(rows_left) else ["", ""]
        right = rows_right[i] if i < len(rows_right) else ["", ""]
        combined.append([left[0], left[1], "", right[0], right[1]])
    t = Table(
        combined,
        colWidths=[col_label_w, col_val_w, gap, col_label_w2, col_val_w2],
    )
    t.setStyle(TableStyle([
        # Colonna sinistra etichette
        ("FONTNAME", (0, 0), (0, -1), "JetBrainsMono"),
        ("FONTSIZE", (0, 0), (0, -1), 7.5),
        ("TEXTCOLOR", (0, 0), (0, -1), STEEL),
        # Colonna sinistra valori
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (1, 0), (1, -1), 8.5),
        ("TEXTCOLOR", (1, 0), (1, -1), NAVY_INK),
        # Colonna destra etichette
        ("FONTNAME", (3, 0), (3, -1), "JetBrainsMono"),
        ("FONTSIZE", (3, 0), (3, -1), 7.5),
        ("TEXTCOLOR", (3, 0), (3, -1), STEEL),
        # Colonna destra valori
        ("FONTNAME", (4, 0), (4, -1), "Helvetica"),
        ("FONTSIZE", (4, 0), (4, -1), 8.5),
        ("TEXTCOLOR", (4, 0), (4, -1), NAVY_INK),
        # Separatori orizzontali leggeri
        ("LINEBELOW", (0, 0), (1, -1), 0.25, NAVY_LINE),
        ("LINEBELOW", (3, 0), (4, -1), 0.25, NAVY_LINE),
        # Padding uniforme
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        # La colonna gap è vuota, nessun bordo
        ("FONTNAME", (2, 0), (2, -1), "Helvetica"),
        ("FONTSIZE", (2, 0), (2, -1), 1),
    ]))
    return t


# ---- Helper: pricing card ----------------------------------------------------

def pricing_card(label, price, description, note, highlight=False):
    border_color = STEEL if highlight else NAVY_LINE
    border_w = 0.8 if highlight else 0.4
    rows = [
        [
            Paragraph(f"<b>{label}</b>", S["mono"]),
            Paragraph(f"<b>{price}</b>", S["mono"]),
        ],
        [
            Paragraph(description, S["body_left"]),
            Paragraph(note, S["caption"]),
        ],
    ]
    t = Table(rows, colWidths=[BODY_W * 0.65, BODY_W * 0.35])
    t.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), border_w, border_color),
        ("LINEBELOW", (0, 0), (-1, 0), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 16),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


# ---- Helper: capability block ------------------------------------------------

def capability_block(number, title, body):
    return [
        Paragraph(number, _toc_num),
        Paragraph(title, S["h2"]),
        Paragraph(body, S["body"]),
        Spacer(1, 8),
    ]


# ---- Helper: step block ------------------------------------------------------

def step_block(number, title, body):
    return [
        Paragraph(number, _step_num),
        Paragraph(title, _step_title),
        Paragraph(body, S["body"]),
        Spacer(1, 14),
    ]


# ---- Helper: sezione header --------------------------------------------------

def section_header(kicker, title):
    return [
        Paragraph(kicker, S["kicker"]),
        Paragraph(title, S["h1"]),
    ]


# ---- Helper: hairline orizzontale -------------------------------------------

def hairline():
    return HRFlowable(
        width="100%", thickness=0.3, color=NAVY_LINE,
        spaceAfter=10, spaceBefore=4,
    )


# ==============================================================================
# CONTENUTI EDITORIALI
# ==============================================================================

# ---- 2. SOMMARIO -------------------------------------------------------------

TOC_ITEMS = [
    ("01", "Il problema", "Perché gli strumenti di uso comune non bastano"),
    ("02", "La risposta", "Cos'è AEGIDA Privacy Phone"),
    ("03", "Cosa include", "Le quattro capability del pacchetto"),
    ("04", "Specifiche", "Hardware e software in dettaglio"),
    ("05", "Evidenze", "Test UFED e metodologia TEMPEST"),
    ("06", "Investimento", "Pricing e logica di acquisto"),
    ("07", "Processo", "Dall'interesse alla consegna in quattro step"),
    ("08", "Chi siamo", "H4R Srl - Human for Research e il team"),
]

SOMMARIO_NOTE = (
    "Questo documento è destinato a uso riservato. Contiene informazioni "
    "commerciali e tecniche su AEGIDA Privacy Phone, prodotto di punta di "
    "H4R Srl - Human for Research (Roma, Italia). Non è un contratto né "
    "un'offerta vincolante. Il white paper tecnico correlato è disponibile "
    "su richiesta a info@aegida-systems.com."
)

# ---- 3. IL PROBLEMA ----------------------------------------------------------

PROBLEMA_INTRO = (
    "L'ottobre 2024 ha segnato uno spartiacque. Il caso Equalize — la rete "
    "italiana di accesso abusivo a banche dati riservate — ha reso evidente "
    "qualcosa che gli addetti ai lavori sospettavano da anni: le minacce alla "
    "riservatezza professionale non vengono soltanto dall'esterno, e i "
    "dispositivi consumer non sono progettati per resistere a chi è "
    "determinato e ben attrezzato."
)

PROBLEMA_P2 = (
    "Per un avvocato penalista, un giornalista investigativo o un dirigente "
    "coinvolto in negoziazioni sensibili, lo smartphone è il nodo più esposto "
    "dell'intera infrastruttura di comunicazione. Contiene fonti, strategie "
    "legali, corrispondenza riservata. I modelli di minaccia rilevanti — "
    "sequestro fisico con estrazione forense, accesso coercitivo, sorveglianza "
    "passiva di emissioni — non sono scenari astratti. Sono le stesse "
    "categorie che i laboratori forensi documentano ogni anno."
)

PROBLEMA_P3 = (
    "I dispositivi mainstream offrono cifratura del disco, ma la cedono con "
    "strumenti come Cellebrite UFED una volta superato il codice di sblocco, "
    "o talvolta anche prima. I backup cloud sincronizzano in automatico. Le "
    "app di messaggistica popolari lasciano tracce sui server. Nessuno di "
    "questi prodotti è stato progettato per resistere a un avversario "
    "tecnicamente capace e legalmente autorizzato a procedere."
)

# ---- 4. LA RISPOSTA ----------------------------------------------------------

RISPOSTA_INTRO = (
    "AEGIDA Privacy Phone è uno smartphone sigillato costruito in Italia a "
    "partire da hardware di fascia alta (Google Pixel 10a, processore "
    "Tensor G4), con il firmware originale completamente rimosso e "
    "sostituito da un sistema operativo con hardening AEGIDA, verified boot "
    "a chiavi proprietarie. Il dispositivo arriva al cliente già "
    "configurato e sigillato: nessun account Google, nessun servizio cloud "
    "consumer, nessuna telemetria attiva. È oggi l'unico smartphone "
    "commerciale al mondo a integrare cifratura post-quantum (ML-KEM "
    "FIPS 203) nel sistema di messaggistica sicura."
)

RISPOSTA_P2 = (
    "Non è uno smartphone anonimizzato né un telefono usa-e-getta. È un "
    "prodotto progettato per essere usato nel lavoro quotidiano, con una "
    "messaggistica cifrata punto-a-punto integrata, un sistema di attestazione "
    "dell'integrità hardware e un supporto continuativo da parte del team "
    "tecnico. Il punto di partenza è una domanda precisa: cosa succede se "
    "questo dispositivo viene sequestrato o perso? AEGIDA Privacy Phone è "
    "la risposta operativa a quella domanda."
)

RISPOSTA_PULL = (
    "&laquo;Test forense indipendente, 17 aprile 2026 — Cellebrite UFED 10.8.0.322 "
    "in modalità BFU e AFU: zero dati utente estratti. Nessun contenuto "
    "applicativo recuperato (messaggi, foto, contatti, file). Solo metadati "
    "di sistema accessibili. Test condotto da laboratorio italiano di digital "
    "forensics certificato, operatore ASIS IMCST. Metodologia completa nel "
    "white paper correlato.&raquo;"
)

# ---- 5. COSA INCLUDE ---------------------------------------------------------

INCLUDE_INTRO = (
    "Il pacchetto è composto da quattro componenti integrate. Non si tratta "
    "di applicazioni scaricabili su un telefono qualsiasi: hardware, software "
    "di base, comunicazione e attestazione sono progettati come un sistema "
    "unitario. La configurazione è realizzata da AEGIDA prima della consegna; "
    "il cliente non deve intervenire sul sistema operativo."
)

INCLUDE_ITEMS = [
    ("01", "Hardware sigillato — base Pixel 10a con hardening AEGIDA",
     "Il dispositivo fisico è un Google Pixel 10a (processore Tensor G4, "
     "8 GB RAM, 128 GB di storage) con firmware originale rimosso. "
     "Viene installato un sistema operativo derivato da GrapheneOS, con "
     "hardening AEGIDA, verified boot attivo e chiavi crittografiche "
     "proprietarie. ADB disabilitato, fastboot bloccato, accesso root non "
     "disponibile. Il dispositivo arriva sigillato."),

    ("02", "AEGIDA Connect — messaggistica post-quantum (primato tecnico)",
     "AEGIDA Privacy Phone è oggi l'unico smartphone commerciale al mondo a "
     "integrare ML-KEM FIPS 203 — lo standard NIST per la cifratura post-quantum "
     "ratificato nell'agosto 2024 — nel proprio sistema di messaggistica. "
     "Scambio di chiavi post-quantum (ML-KEM) e cifratura simmetrica "
     "ChaCha20-Poly1305. Nessun server centrale di instradamento: i messaggi "
     "transitano solo tra i dispositivi coinvolti. Resistente anche ad attacchi "
     "«harvest-now-decrypt-later», in cui un avversario archivia oggi traffico "
     "cifrato per decifrarlo con futuri computer quantistici."),

    ("03", "AEGIDA Inspector — attestazione dell'integrit\u00e0",
     "Applicazione di verifica crittografica dell'integrit\u00e0 del dispositivo, "
     "realizzata come fork di GrapheneOS Auditor (licenza GPLv3). Tramite un "
     "secondo dispositivo di fiducia, Inspector attesta: l'integrit\u00e0 del "
     "boot (verified boot chain), l'impronta del sistema operativo installato "
     "(OS fingerprint verificabile), e l'assenza di manomissione hardware "
     "rilevabile a livello di attestazione. L'attestazione \u00e8 hardware-backed: "
     "la verifica non \u00e8 falsificabile via software."),

    ("04", "Supporto e formazione — 12 mesi inclusi",
     "Supporto continuativo via canale cifrato con SLA definito nel contratto. "
     "Formazione utente in remoto alla consegna (in sede per ordini "
     "multi-dispositivo): uso di Connect e Inspector, gestione dei codici di "
     "sblocco, procedure di recovery in caso di perdita o sequestro. "
     "Il pacchetto di rinnovo annuale include un ciclo di re-hardening del "
     "sistema operativo."),
]

# ---- 6. SPECIFICHE -----------------------------------------------------------

SPECS_INTRO = (
    "Le specifiche riportate si riferiscono al dispositivo nella configurazione "
    "AEGIDA standard. Alcune caratteristiche hardware del Pixel 10a — in "
    "particolare la gestione della biometria e della connettivit\u00e0 — sono "
    "configurabili via policy in fase di hardening, in accordo con il cliente."
)

SPECS_HW_ROWS = [
    ["Modello base", "Google Pixel 10a"],
    ["Processore", "Google Tensor G4"],
    ["RAM", "8 GB"],
    ["Storage", "128 GB"],
    ["Display", "6,1\" OLED 1080p"],
    ["Batteria", "4400 mAh, USB-C"],
    ["Biometria", "Impronta laterale (disabilitabile)"],
    ["Connettivit\u00e0", "5G, Wi-Fi 6, Bluetooth LE 5.3"],
    ["Porta USB", "USB-C — ADB off, fastboot bloccato"],
    ["Dimensioni", "152 \u00d7 73 \u00d7 8,9 mm · 188 g"],
    ["Sensori", "Disabilitabili via policy AEGIDA"],
]

SPECS_SW_ROWS = [
    ["OS base", "Derivato GrapheneOS"],
    ["Hardening", "AEGIDA verified boot"],
    ["Cifratura disco", "AES-256-GCM"],
    ["Messaggistica", "ML-KEM FIPS 203 + ChaCha20"],
    ["Attestazione", "Hardware-backed Inspector"],
    ["Lock states", "BFU + AFU protetti"],
    ["Store app", "Non fornito (no Play Store)"],
    ["Account Google", "Non richiesto n\u00e9 configurato"],
    ["Telemetria", "Disabilitata"],
    ["Root", "Non disponibile al cliente"],
]

SPECS_HW_LABEL = "HARDWARE"
SPECS_SW_LABEL = "SOFTWARE"

# ---- 7. EVIDENZE -------------------------------------------------------------

EVIDENZE_INTRO = (
    "AEGIDA Privacy Phone \u00e8 stato sottoposto a due categorie di verifica "
    "indipendente: un test forense su estrazione dati condotto da una societ\u00e0 "
    "italiana con operatore certificato, e una serie di misurazioni "
    "sull'emissione elettromagnetica del dispositivo. Entrambi i risultati "
    "sono documentati nel white paper tecnico, disponibile a richiesta."
)

EVIDENZE_UFED_TITLE = "Test forense — Cellebrite UFED"
EVIDENZE_UFED_BODY = (
    "Il test \u00e8 stato condotto da una societ\u00e0 italiana terza con operatore "
    "IMCST certificato, utilizzando Cellebrite UFED 10.8.0.322. Il dispositivo "
    "\u00e8 stato testato sia in stato BFU (Before First Unlock) sia in stato "
    "AFU (After First Unlock). Esito: zero dati utente estratti in entrambe "
    "le condizioni. Accessibili solo metadati di sistema (numero di modello, "
    "identificatori hardware). Nessun contenuto applicativo \u2014 messaggi, "
    "fotografie, contatti, file \u2014 \u00e8 stato recuperato. Il protocollo "
    "completo, i log della procedura e la documentazione dell'operatore sono "
    "inclusi nel white paper tecnico."
)

EVIDENZE_TEMPEST_TITLE = "Test emissioni — metodologia TEMPEST"
EVIDENZE_TEMPEST_BODY = (
    "Il dispositivo \u00e8 stato misurato secondo metodologia TEMPEST per la "
    "resistenza a intercettazione di emissioni elettromagnetiche, acustiche "
    "e ottiche non intenzionali. I test sono stati condotti da una societ\u00e0 "
    "italiana indipendente secondo protocolli documentati. \u00c8 importante "
    "precisare che questa attivit\u00e0 non costituisce una certificazione SDIP-27 "
    "n\u00e9 equivale a un accreditamento da parte di un ente terzo riconosciuto. "
    "Rappresenta una misurazione tecnica comparativa, utile come indicatore "
    "di progettazione. I risultati dettagliati sono nel white paper."
)

EVIDENZE_WP_NOTE = (
    "Per ricevere il white paper tecnico completo "
    "<i>AEGIDA Privacy Phone — Test UFED 17 aprile 2026</i>, scrivere a "
    "info@aegida-systems.com specificando il proprio ruolo professionale."
)

# ---- 8. INVESTIMENTO ---------------------------------------------------------

INVEST_INTRO = (
    "Il prezzo riflette la natura del prodotto: uno smartphone configurato "
    "individualmente, verificato prima della consegna e supportato da un "
    "team tecnico per dodici mesi. Per orientare la valutazione: le "
    "soluzioni MDM enterprise di fascia alta per un singolo dispositivo "
    "partono da cifre comparabili, senza l'hardening del sistema operativo "
    "n\u00e9 il test forense indipendente. Il pacchetto AEGIDA include hardware, "
    "configurazione, comunicazione cifrata, attestazione e supporto in "
    "un'unica fornitura."
)

INVEST_P2 = (
    "La struttura è pensata per ridurre l'attrito iniziale: il primo anno "
    "copre l'intero ciclo (hardware + setup + 12 mesi di operatività). "
    "Il rinnovo annuale garantisce la continuità del supporto cifrato, il "
    "re-hardening del sistema e l'incident response di primo livello. Le "
    "nuove generazioni del dispositivo sono proposte in sostituzione quando "
    "rilasciate."
)

INVEST_MULTI = (
    "<b>Ordini multi-dispositivo (da 5 unit\u00e0).</b> Per studi legali, "
    "redazioni, ONG e team aziendali sono disponibili configurazioni dedicate "
    "con gestione centralizzata (MDM), onboarding in sede e SLA di supporto "
    "personalizzati. Il preventivo \u00e8 definito in base al numero di "
    "dispositivi e alle esigenze specifiche. Scrivere a info@aegida-systems.com."
)

# ---- 9. PROCESSO -------------------------------------------------------------

PROCESSO_INTRO = (
    "Tre passaggi, dal primo contatto alla consegna. Nessuna registrazione, "
    "nessun account, nessun impegno economico prima del preventivo."
)

PROCESSO_STEPS = [
    ("01", "Colloquio",
     "Una videoconferenza di 30-45 minuti per capire il caso d'uso, concordare "
     "la configurazione ed emettere il preventivo. Si scrive a "
     "info@aegida-systems.com o dal modulo del sito."),

    ("02", "Consegna",
     "Dispositivo configurato e sigillato a Roma. Spedizione con corriere "
     "tracciato e assicurato previo bonifico, oppure ritiro in sede con firma "
     "di presa in carico."),

    ("03", "Formazione",
     "Sessione di 1-2 ore in remoto (in sede per ordini multi-dispositivo): "
     "uso di Connect e Inspector, gestione dei codici, procedure in caso di "
     "perdita o sequestro."),
]

# ---- 10. CHI SIAMO + CONTATTI + DISCLAIMER -----------------------------------

CHISIAMO_INTRO = (
    "H4R Srl - Human for Research \u00e8 una societ\u00e0 italiana con sede a Roma, "
    "fondata nel 2018. Si occupa di sicurezza delle informazioni per "
    "organizzazioni e professionisti che operano in contesti ad alta "
    "esposizione. AEGIDA \u00e8 il brand di prodotto di H4R, dedicato agli "
    "strumenti di protezione digitale personale."
)

CHISIAMO_TEAM = [
    ("Giuseppe Savio", "CEO"),
    ("Daniele Fabro", "CTO"),
    ("Fabrizio Mariani", "COO"),
]

CONTATTI_ROWS = [
    ["Commerciale e colloqui", "info@aegida-systems.com"],
    ["Legale e diritto di replica", "legal@aegida-systems.com"],
    ["Sito web", "aegida-systems.com"],
    ["Sede legale", "H4R Srl - Human for Research, Roma, Italia"],
    ["PEC", "h4r@pec.it"],
]

DISCLAIMER_BODY = (
    "Questo documento \u00e8 redatto ai sensi del D.Lgs. 145/2007 in materia di "
    "pubblicit\u00e0 ingannevole e comparativa, e ai sensi dell'art. 70 della "
    "Legge 633/1941 sul diritto d'autore. I marchi Google, Pixel, Tensor, "
    "Cellebrite, UFED, Turbo Link, GrapheneOS appartengono ai rispettivi "
    "proprietari e sono citati a solo scopo identificativo. AEGIDA e H4R non "
    "hanno alcun rapporto commerciale con Google LLC, Cellebrite DI Ltd. o "
    "con la Fondazione GrapheneOS. La menzione di tali marchi non implica "
    "sponsorship, endorsement n\u00e9 affiliazione di alcun tipo. I risultati "
    "del test forense citati in questo documento si riferiscono a condizioni "
    "controllate e documentate nel white paper tecnico correlato. I risultati "
    "possono variare in funzione della configurazione del dispositivo e delle "
    "versioni software al momento del test. Per l'esercizio del diritto di "
    "replica, scrivere a legal@aegida-systems.com."
)


# ==============================================================================
# BUILD STORY
# ==============================================================================

def build_story():
    story = []

    # -------------------------------------------------------------------------
    # 1. COVER
    # -------------------------------------------------------------------------
    story.extend(cover_flowables(KICKER, TITLE, SUBTITLE, DATE, VERSION, LOCALE))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 2. SOMMARIO
    # -------------------------------------------------------------------------
    story.extend(section_header("SOMMARIO", "Indice del documento"))
    story.append(Spacer(1, 8))

    for num, title, subtitle_toc in TOC_ITEMS:
        row = Table(
            [[
                Paragraph(num, _toc_num),
                Paragraph(f"<b>{title}</b><br/><font size='9' color='#5E6B82'>{subtitle_toc}</font>", _toc_entry),
            ]],
            colWidths=[18 * mm, BODY_W - 18 * mm],
        )
        row.setStyle(TableStyle([
            ("LINEBELOW", (0, 0), (-1, -1), 0.2, NAVY_LINE),
            ("TOPPADDING", (0, 0), (-1, -1), 5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ]))
        story.append(row)

    story.append(Spacer(1, 20))
    story.append(hairline())
    story.append(Paragraph(SOMMARIO_NOTE, S["disclaimer"]))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 3. IL PROBLEMA
    # -------------------------------------------------------------------------
    story.extend(section_header("01 — IL PROBLEMA", "Perch\u00e9 gli strumenti di uso comune non bastano"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(PROBLEMA_INTRO, _section_intro))
    story.append(Spacer(1, 8))
    story.append(Paragraph(PROBLEMA_P2, S["body"]))
    story.append(Spacer(1, 8))
    story.append(Paragraph(PROBLEMA_P3, S["body"]))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 4. LA RISPOSTA
    # -------------------------------------------------------------------------
    story.extend(section_header("02 — LA RISPOSTA", "Cos'\u00e8 AEGIDA Privacy Phone"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(RISPOSTA_INTRO, _section_intro))
    story.append(Spacer(1, 8))
    story.append(Paragraph(RISPOSTA_P2, S["body"]))
    story.append(Spacer(1, 14))
    story.append(pullquote_box(RISPOSTA_PULL))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 5. COSA INCLUDE
    # -------------------------------------------------------------------------
    story.extend(section_header("03 — COSA INCLUDE", "Le quattro capability del pacchetto"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(INCLUDE_INTRO, _section_intro))
    story.append(Spacer(1, 14))
    for num, title, body in INCLUDE_ITEMS:
        story.extend(capability_block(num, title, body))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 6. SPECIFICHE — 2 colonne
    # -------------------------------------------------------------------------
    story.extend(section_header("04 — SPECIFICHE", "Hardware e software in dettaglio"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(SPECS_INTRO, _section_intro))
    story.append(Spacer(1, 14))

    # Header di colonna
    header_row = Table(
        [[
            Paragraph(SPECS_HW_LABEL, S["kicker"]),
            Paragraph("", S["kicker"]),
            Paragraph(SPECS_SW_LABEL, S["kicker"]),
            Paragraph("", S["kicker"]),
            Paragraph("", S["kicker"]),
        ]],
        colWidths=[46 * mm, 50 * mm, 10 * mm, 44 * mm, 50 * mm],
    )
    header_row.setStyle(TableStyle([
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (0, 0), (1, 0), 0.5, STEEL),
        ("LINEBELOW", (3, 0), (4, 0), 0.5, STEEL),
    ]))
    story.append(header_row)
    story.append(Spacer(1, 4))
    story.append(specs_table_2col(SPECS_HW_ROWS, SPECS_SW_ROWS))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 7. EVIDENZE
    # -------------------------------------------------------------------------
    story.extend(section_header("05 — EVIDENZE", "Test UFED e metodologia TEMPEST"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(EVIDENZE_INTRO, _section_intro))
    story.append(Spacer(1, 14))

    story.append(Paragraph(EVIDENZE_UFED_TITLE, S["h2"]))
    story.append(Paragraph(EVIDENZE_UFED_BODY, S["body"]))
    story.append(Spacer(1, 8))

    story.append(Paragraph(EVIDENZE_TEMPEST_TITLE, S["h2"]))
    story.append(Paragraph(EVIDENZE_TEMPEST_BODY, S["body"]))
    story.append(Spacer(1, 14))
    story.append(hairline())
    story.append(Paragraph(EVIDENZE_WP_NOTE, S["disclaimer"]))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 8. INVESTIMENTO
    # -------------------------------------------------------------------------
    story.extend(section_header("06 — INVESTIMENTO", "Pricing e logica di acquisto"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(INVEST_INTRO, _section_intro))
    story.append(Spacer(1, 8))
    story.append(Paragraph(INVEST_P2, S["body"]))
    story.append(Spacer(1, 14))

    story.append(pricing_card(
        "Pacchetto primo anno",
        "3.900 \u20ac",
        "Hardware Pixel 10a configurato + AEGIDA Connect + AEGIDA Inspector "
        "+ 12 mesi supporto cifrato + formazione utente.",
        "IVA inclusa",
        highlight=True,
    ))
    story.append(Spacer(1, 10))
    story.append(pricing_card(
        "Rinnovo annuale",
        "690 \u20ac / anno",
        "Aggiornamenti di sicurezza validati, supporto cifrato continuato, "
        "re-hardening annuale del sistema operativo, incident response entry-level.",
        "IVA inclusa",
        highlight=False,
    ))
    story.append(Spacer(1, 16))
    story.append(Paragraph(INVEST_MULTI, S["body"]))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 9. PROCESSO
    # -------------------------------------------------------------------------
    story.extend(section_header("07 — PROCESSO", "Dall'interesse alla consegna in quattro step"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(PROCESSO_INTRO, _section_intro))
    story.append(Spacer(1, 14))
    for num, title, body in PROCESSO_STEPS:
        story.extend(step_block(num, title, body))
    story.append(PageBreak())

    # -------------------------------------------------------------------------
    # 10. CHI SIAMO + CONTATTI + DISCLAIMER
    # -------------------------------------------------------------------------
    story.extend(section_header("08 — CHI SIAMO", "H4R Srl - Human for Research"))
    story.append(Spacer(1, 6))
    story.append(Paragraph(CHISIAMO_INTRO, _section_intro))
    story.append(Spacer(1, 10))

    # Team table
    team_rows = [["RUOLO", "NOME"]] + [[r, n] for n, r in CHISIAMO_TEAM]
    team_t = Table(team_rows, colWidths=[50 * mm, BODY_W - 50 * mm])
    team_t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), "JetBrainsMono"),
        ("FONTSIZE", (0, 0), (-1, 0), 7.5),
        ("TEXTCOLOR", (0, 0), (-1, 0), STEEL),
        ("FONTNAME", (0, 1), (0, -1), "JetBrainsMono"),
        ("FONTSIZE", (0, 1), (0, -1), 8),
        ("TEXTCOLOR", (0, 1), (0, -1), STEEL),
        ("FONTNAME", (1, 1), (1, -1), "Helvetica-Bold"),
        ("FONTSIZE", (1, 1), (1, -1), 10),
        ("TEXTCOLOR", (1, 1), (1, -1), NAVY_INK),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(team_t)
    story.append(Spacer(1, 18))

    # Contatti
    story.append(Paragraph("CONTATTI", S["kicker"]))
    story.append(Spacer(1, 4))
    contacts_t = Table(CONTATTI_ROWS, colWidths=[55 * mm, BODY_W - 55 * mm])
    contacts_t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "JetBrainsMono"),
        ("FONTSIZE", (0, 0), (0, -1), 7.5),
        ("TEXTCOLOR", (0, 0), (0, -1), STEEL),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (1, 0), (1, -1), 9),
        ("TEXTCOLOR", (1, 0), (1, -1), NAVY_INK),
        ("LINEBELOW", (0, 0), (-1, -1), 0.25, NAVY_LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    story.append(contacts_t)
    story.append(Spacer(1, 20))
    story.append(hairline())

    # Disclaimer
    story.append(Paragraph("DISCLAIMER LEGALE", S["kicker"]))
    story.append(Spacer(1, 4))
    story.append(Paragraph(DISCLAIMER_BODY, S["disclaimer"]))

    return story


# ==============================================================================
# MAIN
# ==============================================================================

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
    print(f"OK — {OUT_PDF.relative_to(ROOT)}  ({size_kb:.0f} KB)")


if __name__ == "__main__":
    main()
