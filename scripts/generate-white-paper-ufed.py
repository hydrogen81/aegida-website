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
VERSION = "v1.1"
LOCALE = "IT"

EXECUTIVE_SUMMARY = [
    "Il 17 aprile 2026 un laboratorio italiano di digital forensics certificato "
    "ha tentato l'estrazione di dati utente da un AEGIDA Privacy Phone utilizzando "
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

    "Il test è stato commissionato da AEGIDA e condotto da un laboratorio "
    "italiano di digital forensics certificato, specializzato in mobile "
    "forensic acquisition. L'operatore tecnico è certificato ASIS IMCST "
    "(<i>International Master Counter Surveillance Technical</i>). Non esiste "
    "conflitto di interessi commerciale tra le due parti.",
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

    "Il software ha tentato le procedure UFED 10.8 disponibili per Google "
    "Tensor: identificazione del bootloader, ingresso in modalità Recovery, "
    "estrazione logica via protocolli standard. Tutte le procedure hanno "
    "restituito &laquo;no method found&raquo;, indicando che la coppia verified boot + "
    "chiavi proprietarie AEGIDA non è compatibile con i fingerprint noti a "
    "questa versione di UFED.",

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
    "&laquo;passcode failed&raquo; sulle procedure di bypass. Il motivo tecnico: la "
    "configurazione AEGIDA disabilita ADB di default, fastboot è inibito da "
    "verified boot con chiavi proprietarie, e le richieste di USB debugging "
    "sono rigettate a livello di sistema operativo. Nessuno dei vettori di "
    "ingresso standard disponibili a UFED 10.8 è applicabile.",

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
    "In entrambe le modalità, <b>0 dati utente estratti</b>: nessun "
    "messaggio, contatto, foto, documento applicativo ha lasciato il "
    "dispositivo durante l'intera sessione di test. I metadati di "
    "sistema (build ID, versione OS, stato verified boot) sono risultati "
    "accessibili come accade per qualsiasi dispositivo Android; non "
    "contengono informazioni dell'utente e non costituiscono dati "
    "applicativi in senso forense."
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

    "Il test impiega solo UFED commerciale 10.8.0.322. Non sono state tentate "
    "tecniche di laboratorio statale quali: analisi di emissioni "
    "elettromagnetiche e acustiche compromettenti (metodologia TEMPEST / "
    "SDIP-27), glitching hardware (voltage, electromagnetic, laser fault "
    "injection), cold boot, chip-off, ISP, o exploit 0-day non pubblici. Un "
    "attaccante con accesso fisico prolungato e risorse di laboratorio "
    "avanzate potrebbe applicare metodi diversi da quelli inclusi in UFED. "
    "Nota: AEGIDA ha eseguito separatamente test TEMPEST sul dispositivo "
    "(descritti in documentazione separata); non sono oggetto di questo "
    "white paper.",

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
    "iOS, Samsung, Galaxy, Pixel, Tensor, Android, GrapheneOS appartengono ai "
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
