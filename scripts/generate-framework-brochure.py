"""
AEGIDA Framework — Brochure pre-lancio (8-10 pagine)
Output: public/downloads/aegida-framework-brochure.pdf

Prodotto in preparazione per lancio commerciale 2027-2028.
Pilot aperti a operatori selezionati.
"""

import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
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
SUBTITLE = "Piattaforma di sicurezza per reti di comunicazione di infrastrutture critiche."
KICKER = "BROCHURE \u00b7 PRE-LANCIO 2027-2028"
DATE = "aprile 2026"
VERSION = "v2.0"
LOCALE = "IT"


# ---------------------------------------------------------------------------
# Testi editoriali
# ---------------------------------------------------------------------------

SOMMARIO_INTRO = (
    "Questo documento descrive AEGIDA Framework: la sua architettura, i segmenti "
    "a cui \u00e8 destinato, lo stato attuale del progetto e il percorso previsto "
    "verso il lancio commerciale nel biennio 2027-2028. \u00c8 un documento "
    "informativo pre-lancio. Le informazioni qui contenute sono soggette a "
    "modifiche prima della commercializzazione."
)

SOMMARIO_NOTA = (
    "Documento soggetto a modifiche prima del lancio commerciale. "
    "Nessun impegno commerciale \u00e8 assunto con questo documento."
)

SOMMARIO_VOCI = [
    ("Il problema", "Contesto regolamentare e operativo"),
    ("Cosa \u00e8 il Framework", "Piattaforma e perimetro"),
    ("Architettura a 3 layer", "Trasporto, Chiave, Stealth"),
    ("A chi serve", "Segmenti di riferimento"),
    ("Stato 2026", "Qualificazione, pilot, integrator"),
    ("Roadmap 2027-2028", "Condizioni di rilascio"),
    ("Processo pilot", "Candidatura, scoping, deploy, feedback"),
    ("Contatti e disclaimer", "H4R, PEC, note legali"),
]

PROBLEMA_P1 = (
    "Due strumenti normativi europei hanno ridisegnato gli obblighi di sicurezza "
    "informatica per le organizzazioni che gestiscono infrastrutture critiche. "
    "La Direttiva UE 2022/2555 (NIS2), recepita in Italia con il D.Lgs. 138/2024, "
    "estende significativamente la platea dei soggetti obbligati rispetto alla "
    "precedente NIS1: oggi sono inclusi operatori di energia, sanit\u00e0, trasporti, "
    "acqua, infrastrutture digitali, pubblica amministrazione centrale. L\u2019obbligo "
    "non \u00e8 solo notificare gli incidenti: \u00e8 dimostrare misure di gestione del "
    "rischio proporzionate, inclusa la sicurezza delle reti e dei sistemi "
    "informativi."
)

PROBLEMA_P2 = (
    "Il Regolamento UE 2022/2554 (DORA) \u00e8 un atto direttamente applicabile "
    "negli ordinamenti nazionali \u2014 non una direttiva da recepire \u2014 ed \u00e8 entrato in "
    "vigore il 17 gennaio 2025 per banche, assicurazioni, infrastrutture di "
    "mercato finanziario e fornitori ICT critici. DORA impone requisiti di "
    "resilienza operativa digitale che includono la gestione della sicurezza delle "
    "reti, test di penetrazione periodici e sorveglianza sui fornitori terzi. Per "
    "gli enti finanziari, la catena di sicurezza si estende agli integratori e ai "
    "fornitori di infrastruttura comunicativa."
)

PROBLEMA_P3 = (
    "In Italia, l\u2019Agenzia per la Cybersicurezza Nazionale \u2014 istituita con "
    "D.L. 82/2021 e operativa dal 2022 \u2014 governa il processo di qualificazione "
    "per i fornitori di tecnologia destinati a soggetti critici. La qualificazione "
    "ACN non \u00e8 una certificazione di prodotto generica: \u00e8 un atto amministrativo "
    "nazionale che abilita un fornitore a operare in ambienti sottoposti a "
    "vigilanza dell\u2019Agenzia. Senza qualificazione, un prodotto non pu\u00f2 essere "
    "venduto a operatori di servizi essenziali soggetti alla normativa italiana."
)

PROBLEMA_PULLQUOTE = (
    "\u00abLa sicurezza di una rete di trasmissione elettrica o di una rete di "
    "telemetria ospedaliera non \u00e8 un esercizio di compliance: \u00e8 continuit\u00e0 "
    "operativa. Una compromissione non produce solo una sanzione; produce un "
    "blackout, un\u2019interruzione di cura, un blocco di infrastruttura.\u00bb"
)

COSAE_P1 = (
    "AEGIDA Framework \u00e8 una piattaforma software per la sicurezza delle reti di "
    "comunicazione di infrastrutture critiche. Non \u00e8 un prodotto orizzontale di "
    "cybersicurezza aziendale: il suo perimetro \u00e8 deliberatamente ristretto alle "
    "reti di controllo, telemetria e comunicazione operativa di operatori che "
    "gestiscono servizi essenziali \u2014 reti su scala nazionale, con requisiti di "
    "disponibilit\u00e0 e integrit\u00e0 pi\u00f9 severi rispetto a un\u2019infrastruttura IT "
    "convenzionale. Il Framework non sostituisce i sistemi esistenti: si affianca "
    "a essi, aggiungendo strati di protezione senza richiedere la sostituzione "
    "dell\u2019infrastruttura produttiva."
)

COSAE_P2 = (
    "Ogni implementazione \u00e8 trattata come un pilot: la piattaforma viene adattata "
    "al modello di minaccia specifico dell\u2019operatore, al profilo delle sue reti e "
    "ai requisiti di integrazione con i sistemi di supervisione esistenti. Non "
    "esiste un\u2019installazione \u201cstandard\u201d: la parametrizzazione dei tre strati "
    "architetturali \u00e8 parte integrante del processo di deployment. Questo approccio "
    "consente di rispondere a requisiti tecnici eterogenei mantenendo un nucleo "
    "tecnologico comune, qualificabile e documentabile nei confronti delle "
    "autorit\u00e0 competenti."
)

ARCH_INTRO = (
    "Il Framework opera su tre strati indipendenti e componibili. Ogni strato "
    "risolve una classe distinta di vulnerabilit\u00e0: la compromissione del canale, "
    "la decrittazione differita del traffico intercettato, l\u2019analisi del "
    "comportamento di rete. I tre strati possono essere attivati singolarmente o "
    "in combinazione, in funzione del profilo di rischio dell\u2019operatore e dei "
    "requisiti normativi applicabili."
)

LAYER1_BODY = (
    "Il primo strato cifra il traffico a livello di trasporto con AES-256-GCM, "
    "algoritmo simmetrico a chiave a 256 bit con modalit\u00e0 GCM (Galois/Counter "
    "Mode). \u00c8 lo strato sempre attivo: fornisce riservatezza e integrit\u00e0 di ogni "
    "pacchetto trasmesso sulla rete. AES-256-GCM \u00e8 lo standard di cifratura "
    "simmetrica riconosciuto da NIST, NSA e dai principali framework normativi "
    "europei come adeguato per la protezione di dati classificati e infrastrutture "
    "critiche."
)

LAYER1_PROPS = [
    "Algoritmo: AES-256-GCM (NIST SP 800-38D)",
    "Autenticazione integrata del pacchetto: protezione da manomissione in transito",
    "Overhead computazionale: compatibile con reti di controllo industriale a bassa latenza",
]

LAYER2_BODY = (
    "Il secondo strato gestisce lo scambio delle chiavi crittografiche con "
    "ML-KEM (Module-Lattice-Based Key Encapsulation Mechanism), lo standard FIPS 203 "
    "pubblicato dal NIST nell\u2019agosto 2024. La minaccia che questo strato affronta "
    "\u00e8 nota come \u201charvest-now-decrypt-later\u201d: un avversario che intercetti oggi "
    "il traffico cifrato pu\u00f2 conservarlo e decrittografarlo non appena disporr\u00e0 di "
    "un computer quantistico sufficientemente potente. Sebbene i computer "
    "quantistici di quella scala non esistano ancora, la finestra di protezione "
    "necessaria per le infrastrutture critiche si misura in decenni: il traffico "
    "cifrato oggi deve rimanere riservato anche nel 2040 o nel 2050. ML-KEM "
    "utilizza problemi matematici basati su reticoli che i computer quantistici "
    "non sono in grado di risolvere efficientemente."
)

LAYER2_PROPS = [
    "Standard: ML-KEM FIPS 203 (NIST, agosto 2024)",
    "Protezione: harvest-now-decrypt-later su orizzonte decennale",
    "Compatibilit\u00e0: ibrido con scambio di chiavi classico (transizione graduale)",
]

LAYER3_BODY = (
    "Il terzo strato \u00e8 opzionale e si attiva in contesti dove la visibilit\u00e0 "
    "stessa della comunicazione costituisce una vulnerabilit\u00e0 operativa. In reti "
    "di controllo critiche, la sola osservazione dei pattern di traffico \u2014 chi "
    "comunica con chi, con quale frequenza, in quali orari \u2014 pu\u00f2 fornire a un "
    "avversario informazioni preziose sullo stato dell\u2019infrastruttura: guasti "
    "imminenti, manovre operative, finestre di manutenzione. Il layer stealth "
    "occulta questi metadati di rete, rendendo il traffico indistinguibile da "
    "flusso di rete convenzionale."
)

LAYER3_PROPS = [
    "Attivazione: opzionale, su valutazione del modello di minaccia",
    "Oggetto: occultamento dei metadati di rete (pattern, frequenza, endpoint)",
    "Caso d\u2019uso tipico: reti di controllo ad alta criticit\u00e0 con avversari sofisticati",
]

SEGMENTI = [
    (
        "Operatori di servizi essenziali (NIS2)",
        "Gestori di reti elettriche di trasmissione e distribuzione, operatori "
        "idrici, gestori di infrastrutture di trasporto ferroviario e aereo, "
        "strutture ospedaliere di rilievo nazionale. Soggetti obbligati ai sensi "
        "della Direttiva UE 2022/2555 con obbligo di misure di gestione del "
        "rischio proporzionate alla criticit\u00e0 dei servizi gestiti."
    ),
    (
        "Operatori finanziari (DORA)",
        "Banche, infrastrutture di mercato finanziario, compagnie assicurative e "
        "fornitori ICT critici soggetti al Regolamento UE 2022/2554. Per questi "
        "operatori, la catena di sicurezza delle comunicazioni interne \u00e8 parte "
        "integrante dei requisiti di resilienza operativa digitale verificati "
        "dalle autorit\u00e0 di vigilanza (BCE, Banca d\u2019Italia, IVASS)."
    ),
    (
        "Pubblica amministrazione centrale",
        "Ministeri e agenzie nazionali con reti di comunicazione interne su scala "
        "geografica ampia. Soggetti alle linee guida ACN e, per alcune categorie, "
        "obbligati alla qualificazione dei fornitori di tecnologia ai sensi della "
        "normativa italiana di attuazione della Direttiva NIS2."
    ),
    (
        "Infrastrutture critiche nazionali",
        "Operatori di reti di telecomunicazioni designate critiche, gestori di "
        "infrastrutture di controllo industriale (SCADA/ICS) con connettivit\u00e0 WAN, "
        "operatori di infrastrutture spaziali e di telerilevamento. Contesti "
        "caratterizzati da reti eterogenee, latenza vincolata e requisiti di "
        "disponibilit\u00e0 prossimi al 100%."
    ),
]

STATO_INTRO = (
    "Nel 2026 AEGIDA Framework \u00e8 un prodotto in fase di sviluppo avanzato e "
    "qualificazione istituzionale. Nessuna commercializzazione \u00e8 in corso; "
    "nessun listino prezzi \u00e8 pubblicato. Ci\u00f2 che esiste oggi \u00e8 una piattaforma "
    "tecnicamente operativa, un processo di qualificazione formalmente avviato "
    "presso l\u2019ACN, e un numero limitato di pilot non paganti con operatori "
    "selezionati."
)

STATO_VOCI = [
    (
        "Qualificazione ACN",
        "Il processo di qualificazione presso l\u2019Agenzia per la Cybersicurezza "
        "Nazionale \u00e8 formalmente avviato. La qualificazione \u00e8 l\u2019atto amministrativo "
        "che abilita AEGIDA Framework a essere proposto a operatori di servizi "
        "essenziali soggetti alla normativa italiana. Il processo richiede "
        "documentazione tecnica dettagliata, verifica dei requisiti di sicurezza "
        "e valutazione da parte dell\u2019Agenzia. I tempi sono definiti dall\u2019ACN, "
        "non da H4R."
    ),
    (
        "Dialogo con system integrator",
        "Sono in corso interlocuzioni con integrator di riferimento del mercato "
        "italiano delle infrastrutture critiche. Gli integrator sono il canale "
        "naturale per la distribuzione di tecnologia di questa complessit\u00e0: "
        "conoscono l\u2019infrastruttura del cliente, gestiscono i contratti di "
        "manutenzione, garantiscono il supporto locale. Nessun accordo commerciale "
        "\u00e8 stato formalizzato."
    ),
    (
        "Pilot aperti",
        "Sono disponibili un numero limitato di pilot non paganti riservati a "
        "operatori selezionati su base tecnica. Il pilot non ha costo per "
        "l\u2019operatore; in cambio, H4R raccoglie feedback strutturato sull\u2019uso "
        "della piattaforma in un contesto reale. L\u2019accesso al pilot \u00e8 condizionato "
        "alla valutazione tecnica del caso d\u2019uso."
    ),
]

STATO_PULLQUOTE = (
    "\u00abNon si vende nulla oggi. Si costruisce la base per un lancio commerciale "
    "solido: certificazioni, reference, documentazione. Il prodotto sar\u00e0 "
    "disponibile quando sar\u00e0 pronto.\u00bb"
)

ROADMAP_INTRO = (
    "Il lancio commerciale di AEGIDA Framework \u00e8 previsto nel biennio 2027-2028. "
    "La data precisa non \u00e8 fissa: \u00e8 vincolata al completamento di un insieme di "
    "condizioni che H4R considera non negoziabili prima di proporre il prodotto "
    "al mercato."
)

ROADMAP_CONDIZIONI = [
    (
        "Completamento certificazioni ACN",
        "La qualificazione dell\u2019Agenzia per la Cybersicurezza Nazionale \u00e8 "
        "condizione necessaria per la commercializzazione in Italia a operatori "
        "di servizi essenziali. Il processo \u00e8 avviato; il completamento dipende "
        "dai tempi dell\u2019Agenzia."
    ),
    (
        "Almeno due reference clienti",
        "H4R richiede l\u2019esperienza di almeno due pilot completati con esito "
        "positivo e reference pubblica (ove consentita dal cliente) prima di "
        "proporre il prodotto sul mercato aperto. Le reference servono a "
        "documentare casi d\u2019uso reali e a costruire la fiducia necessaria in "
        "un mercato dove la reputazione del fornitore \u00e8 determinante."
    ),
    (
        "Documentazione tecnica completa",
        "L\u2019integrazione del Framework in infrastrutture critiche richiede "
        "documentazione tecnica di qualit\u00e0 professionale: manuali di installazione, "
        "guide di configurazione, procedure di aggiornamento sicuro, scenari di "
        "troubleshooting. La documentazione \u00e8 in produzione parallela alla "
        "piattaforma."
    ),
    (
        "Piano di supporto post-vendita",
        "Un prodotto di questa complessit\u00e0 richiede un modello di supporto "
        "strutturato: SLA definiti, canale di escalation tecnica, gestione delle "
        "vulnerabilit\u00e0 e degli aggiornamenti di sicurezza. Il modello di supporto "
        "sar\u00e0 definito prima del lancio commerciale, non dopo."
    ),
]

ROADMAP_NOTA = (
    "Le condizioni commerciali \u2014 prezzi, licenze, modalit\u00e0 contrattuali \u2014 saranno "
    "definite al momento del lancio. Nessuna indicazione di prezzo \u00e8 comunicata "
    "in questo documento. Nel frattempo, il prodotto commerciale disponibile di "
    "H4R \u00e8 AEGIDA Privacy Phone."
)

PILOT_INTRO = (
    "Il processo di accesso al pilot \u00e8 strutturato in quattro fasi sequenziali. "
    "Non \u00e8 un processo burocratico: \u00e8 un percorso tecnico che serve a verificare "
    "la compatibilit\u00e0 tra il Framework e il caso d\u2019uso specifico dell\u2019operatore "
    "prima di avviare qualsiasi attivit\u00e0 di deployment. I pilot sono limitati "
    "per numero e selezionati su criteri tecnici."
)

PILOT_STEPS = [
    (
        "01 \u2014 Candidatura",
        (
            "L\u2019operatore invia una candidatura tramite il modulo di contatto sul "
            "sito aegida-systems.com (oggetto: Framework pilot) descrivendo il "
            "contesto tecnico: tipologia di rete, dimensione, requisiti normativi "
            "applicabili, motivazione dell\u2019interesse. Segue una videoconferenza "
            "tecnica di 60 minuti con il team H4R per valutare il caso d\u2019uso e "
            "verificare la coerenza con il perimetro del Framework."
        )
    ),
    (
        "02 \u2014 Scoping tecnico",
        (
            "Analisi congiunta dell\u2019infrastruttura esistente, del modello di "
            "minaccia specifico e dei requisiti di integrazione con i sistemi di "
            "supervisione dell\u2019operatore. Al termine dello scoping viene definito "
            "il perimetro del pilot: quali segmenti di rete, quali strati "
            "architetturali, quali metriche di valutazione. Il perimetro \u00e8 "
            "approvato da entrambe le parti prima di procedere."
        )
    ),
    (
        "03 \u2014 Deploy affiancato",
        (
            "Installazione della piattaforma nell\u2019ambiente pilot in modalit\u00e0 "
            "affiancata all\u2019infrastruttura produttiva esistente. Nessun sistema "
            "live viene sostituito o interrotto durante il pilot. Il team H4R "
            "affianca il personale tecnico dell\u2019operatore nelle fasi di "
            "configurazione e avvio. Il periodo di uso attivo \u00e8 tipicamente "
            "compreso tra tre e sei mesi."
        )
    ),
    (
        "04 \u2014 Feedback e reference",
        (
            "Raccolta strutturata di feedback tecnico e operativo durante e al "
            "termine del pilot. Il feedback sar\u00e0 usato da H4R per migliorare la "
            "piattaforma e la documentazione. La pubblicazione di una reference "
            "pubblica \u00e8 condizionale: avviene solo se il pilot lo consente e se "
            "il cliente concorda esplicitamente. Non \u00e8 un requisito del pilot."
        )
    ),
]

CONTATTI_BLOCKS = [
    (
        "Candidature pilot",
        "info@aegida-systems.com",
        "Oggetto email: \u201cFramework pilot\u201d. Risposta entro cinque giorni lavorativi.",
    ),
    (
        "Informazioni commerciali",
        "info@aegida-systems.com",
        "Per interlocuzioni con system integrator e domande sul processo di qualificazione.",
    ),
    (
        "Richieste legali",
        "legal@aegida-systems.com",
        "Per richieste di rettifica, replica o questioni relative alla propriet\u00e0 intellettuale.",
    ),
    (
        "PEC",
        "h4-researchsrl@legalmail.it",
        "Posta elettronica certificata di H4R \u2014 Human for Research Srl.",
    ),
    (
        "Sede legale",
        "H4R \u2014 Human for Research Srl",
        "Costituita a Roma nel 2018. Partita IVA e ragione sociale nelle comunicazioni ufficiali.",
    ),
]

DISCLAIMER_FULL = (
    "AEGIDA Framework \u00e8 un prodotto in preparazione. Le informazioni contenute "
    "in questo documento sono soggette a modifiche senza preavviso prima del "
    "lancio commerciale. Nessun impegno commerciale, contrattuale o di fornitura "
    "\u00e8 assunto con questo documento. Le condizioni commerciali \u2014 prezzi, licenze, "
    "modalit\u00e0 contrattuali \u2014 saranno definite al momento del lancio e comunicate "
    "separatamente.\n\n"
    "Documento redatto ai sensi del D.Lgs. 145/2007 (pratiche commerciali "
    "scorrette) e dell\u2019art. 70 della Legge 633/1941 (diritto d\u2019autore). "
    "I marchi NIS2, DORA, NIST, AES, ML-KEM, FIPS e ACN sono citati a scopo "
    "descrittivo e informativo; appartengono ai rispettivi titolari. "
    "AEGIDA e H4R non vantano affiliazioni ufficiali con le organizzazioni "
    "citate. Qualsiasi richiesta di rettifica o replica pu\u00f2 essere inviata a "
    "legal@aegida-systems.com. \u00a9 2026 H4R \u2014 Human for Research Srl. "
    "Tutti i diritti riservati."
)


# ---------------------------------------------------------------------------
# Rendering helpers
# ---------------------------------------------------------------------------

def rule_spacer():
    """Thin horizontal spacer before a new section within a page."""
    return Spacer(1, 14)


def section_header(kicker_text, h1_text):
    return [
        Paragraph(kicker_text, S["kicker"]),
        Paragraph(h1_text, S["h1"]),
    ]


def pullquote_block(text):
    return [
        Spacer(1, 6),
        Paragraph(text, S["pullquote"]),
        Spacer(1, 6),
    ]


def build_story():
    story = []

    # -----------------------------------------------------------------------
    # Page 1: Cover
    # -----------------------------------------------------------------------
    story.extend(cover_flowables(KICKER, TITLE, SUBTITLE, DATE, VERSION, LOCALE))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 2: Sommario
    # -----------------------------------------------------------------------
    story.extend(section_header("SOMMARIO", "Indice del documento"))
    story.append(Paragraph(SOMMARIO_INTRO, S["body"]))
    story.append(Spacer(1, 8))
    for titolo, descrizione in SOMMARIO_VOCI:
        story.append(Paragraph(
            f"<b>{titolo}</b> \u2014 <i>{descrizione}</i>",
            S["body_left"]
        ))
    story.append(Spacer(1, 14))
    story.append(Paragraph(SOMMARIO_NOTA, S["disclaimer"]))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 3: Il problema
    # -----------------------------------------------------------------------
    story.extend(section_header("CONTESTO", "Il problema"))
    story.append(Paragraph(PROBLEMA_P1, S["body"]))
    story.append(Paragraph(PROBLEMA_P2, S["body"]))
    story.append(Paragraph(PROBLEMA_P3, S["body"]))
    story.extend(pullquote_block(PROBLEMA_PULLQUOTE))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 4: Cosa \u00e8 il Framework
    # -----------------------------------------------------------------------
    story.extend(section_header("IL PRODOTTO", "Cosa \u00e8 AEGIDA Framework"))
    story.append(Paragraph(COSAE_P1, S["body"]))
    story.append(Spacer(1, 6))
    story.append(Paragraph(COSAE_P2, S["body"]))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 5-6: Architettura a 3 layer
    # -----------------------------------------------------------------------
    story.extend(section_header("ARCHITETTURA", "I tre strati di protezione"))
    story.append(Paragraph(ARCH_INTRO, S["body"]))
    story.append(Spacer(1, 8))

    story.append(Paragraph("Layer 1 \u2014 Trasporto", S["h2"]))
    story.append(Paragraph(LAYER1_BODY, S["body"]))
    for prop in LAYER1_PROPS:
        story.append(Paragraph(f"\u2192\u00a0 {prop}", S["mono"]))
    story.append(Spacer(1, 8))

    story.append(Paragraph("Layer 2 \u2014 Chiave post-quantum", S["h2"]))
    story.append(Paragraph(LAYER2_BODY, S["body"]))
    for prop in LAYER2_PROPS:
        story.append(Paragraph(f"\u2192\u00a0 {prop}", S["mono"]))
    story.append(Spacer(1, 8))

    story.append(Paragraph("Layer 3 \u2014 Stealth", S["h2"]))
    story.append(Paragraph(LAYER3_BODY, S["body"]))
    for prop in LAYER3_PROPS:
        story.append(Paragraph(f"\u2192\u00a0 {prop}", S["mono"]))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 7: A chi serve
    # -----------------------------------------------------------------------
    story.extend(section_header("SEGMENTI", "A chi serve"))
    for titolo, testo in SEGMENTI:
        story.append(Paragraph(titolo, S["h2"]))
        story.append(Paragraph(testo, S["body"]))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 8: Stato 2026
    # -----------------------------------------------------------------------
    story.extend(section_header("STATO 2026", "Dove siamo oggi"))
    story.append(Paragraph(STATO_INTRO, S["body"]))
    story.append(Spacer(1, 6))
    for titolo, testo in STATO_VOCI:
        story.append(Paragraph(titolo, S["h2"]))
        story.append(Paragraph(testo, S["body"]))
    story.extend(pullquote_block(STATO_PULLQUOTE))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 9: Roadmap 2027-2028
    # -----------------------------------------------------------------------
    story.extend(section_header("ROADMAP", "2027-2028"))
    story.append(Paragraph(ROADMAP_INTRO, S["body"]))
    story.append(Spacer(1, 6))
    for titolo, testo in ROADMAP_CONDIZIONI:
        story.append(Paragraph(titolo, S["h2"]))
        story.append(Paragraph(testo, S["body"]))
    story.append(Spacer(1, 8))
    story.append(Paragraph(ROADMAP_NOTA, S["disclaimer"]))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 10: Processo pilot
    # -----------------------------------------------------------------------
    story.extend(section_header("PILOT", "Come si candida un pilot"))
    story.append(Paragraph(PILOT_INTRO, S["body"]))
    story.append(Spacer(1, 8))
    for titolo, testo in PILOT_STEPS:
        story.append(Paragraph(titolo, S["h2"]))
        story.append(Paragraph(testo, S["body"]))
    story.append(PageBreak())

    # -----------------------------------------------------------------------
    # Page 11: Contatti + Disclaimer
    # -----------------------------------------------------------------------
    story.extend(section_header("CONTATTI", "Candidature e informazioni"))
    for label, valore, nota in CONTATTI_BLOCKS:
        story.append(Paragraph(
            f"<b>{label}:</b> {valore}",
            S["body_left"]
        ))
        story.append(Paragraph(nota, S["caption"]))
    story.append(Spacer(1, 14))
    story.append(Paragraph("DISCLAIMER", S["kicker"]))
    story.append(Paragraph(DISCLAIMER_FULL, S["disclaimer"]))

    return story


def main():
    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT_PDF), pagesize=A4,
        leftMargin=A4_MARGIN_LR, rightMargin=A4_MARGIN_LR,
        topMargin=A4_MARGIN_TB, bottomMargin=A4_MARGIN_TB + 6 * mm,
        title=TITLE, author="AEGIDA \u2014 H4R Srl", subject=SUBTITLE,
    )
    doc.build(
        build_story(),
        onFirstPage=make_cover_background_drawer(),
        onLaterPages=make_footer_drawer(),
    )
    kb = OUT_PDF.stat().st_size / 1024
    print(f"OK \u2014 {OUT_PDF.relative_to(ROOT)} ({kb:.0f} KB)")


if __name__ == "__main__":
    main()
