"""
AEGIDA Privacy Phone - White Paper UFED Test 17 aprile 2026
Genera PDF condivisibile a partire dal materiale del test forense.
Output: public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak,
    Table, TableStyle, KeepTogether
)
from reportlab.pdfgen import canvas
from pathlib import Path

ROOT = Path(r"C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website")
IMG_DIR = ROOT / "public/proof/ufed-test"
OUT_PDF = ROOT / "public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf"

NAVY = HexColor("#0a1430")
NAVY_LIGHT = HexColor("#1a2540")
GOLD = HexColor("#b8960c")
GOLD_LIGHT = HexColor("#d4ae3c")
SLATE = HexColor("#334155")
SLATE_LIGHT = HexColor("#94a3b8")
WHITE = HexColor("#ffffff")
LIGHTBG = HexColor("#f5f5f4")

styles = getSampleStyleSheet()

s_body = ParagraphStyle(
    "body", parent=styles["BodyText"], fontName="Helvetica",
    fontSize=10, leading=15, textColor=SLATE, alignment=TA_JUSTIFY,
    spaceAfter=8,
)
s_body_left = ParagraphStyle("body_l", parent=s_body, alignment=TA_LEFT)
s_h1 = ParagraphStyle(
    "h1", parent=styles["Heading1"], fontName="Helvetica-Bold",
    fontSize=18, leading=22, textColor=NAVY, alignment=TA_LEFT,
    spaceBefore=16, spaceAfter=10, textTransform="uppercase",
)
s_h2 = ParagraphStyle(
    "h2", parent=styles["Heading2"], fontName="Helvetica-Bold",
    fontSize=12, leading=16, textColor=NAVY, alignment=TA_LEFT,
    spaceBefore=12, spaceAfter=6,
)
s_h3 = ParagraphStyle(
    "h3", parent=styles["Heading3"], fontName="Helvetica-Bold",
    fontSize=10, leading=14, textColor=GOLD, alignment=TA_LEFT,
    spaceBefore=8, spaceAfter=4,
)
s_caption = ParagraphStyle(
    "caption", parent=styles["BodyText"], fontName="Helvetica-Oblique",
    fontSize=8, leading=12, textColor=SLATE_LIGHT, alignment=TA_CENTER,
    spaceAfter=12,
)
s_mono = ParagraphStyle(
    "mono", parent=styles["BodyText"], fontName="Courier",
    fontSize=9, leading=13, textColor=NAVY, alignment=TA_LEFT,
    leftIndent=12, spaceAfter=6,
)
s_disclaimer = ParagraphStyle(
    "disc", parent=styles["BodyText"], fontName="Helvetica-Oblique",
    fontSize=8, leading=12, textColor=SLATE_LIGHT, alignment=TA_JUSTIFY,
    spaceAfter=6,
)
s_label = ParagraphStyle(
    "label", parent=styles["BodyText"], fontName="Helvetica-Bold",
    fontSize=8, leading=10, textColor=GOLD, alignment=TA_LEFT,
    spaceAfter=2,
)
s_cover_title = ParagraphStyle(
    "cover_t", parent=styles["Title"], fontName="Helvetica-Bold",
    fontSize=28, leading=34, textColor=NAVY, alignment=TA_LEFT,
    spaceAfter=12,
)
s_cover_subtitle = ParagraphStyle(
    "cover_s", parent=styles["Title"], fontName="Helvetica",
    fontSize=14, leading=18, textColor=SLATE, alignment=TA_LEFT,
    spaceAfter=24,
)


def draw_page_chrome(canv, doc):
    """Header e footer su tutte le pagine tranne la cover."""
    page_num = canv.getPageNumber()
    if page_num == 1:
        return  # cover, niente chrome

    # Header: linea oro sottile + brand
    canv.setStrokeColor(GOLD)
    canv.setLineWidth(0.5)
    canv.line(20 * mm, 282 * mm, 190 * mm, 282 * mm)

    canv.setFont("Helvetica-Bold", 8)
    canv.setFillColor(NAVY)
    canv.drawString(20 * mm, 285 * mm, "AEGIDA")
    canv.setFont("Helvetica", 8)
    canv.setFillColor(SLATE)
    canv.drawString(36 * mm, 285 * mm, "Privacy Phone \u00b7 Riscontri forensi UFED \u00b7 17 aprile 2026")

    # Footer
    canv.setStrokeColor(SLATE_LIGHT)
    canv.setLineWidth(0.3)
    canv.line(20 * mm, 18 * mm, 190 * mm, 18 * mm)

    canv.setFont("Helvetica", 8)
    canv.setFillColor(SLATE_LIGHT)
    canv.drawString(20 * mm, 13 * mm, "H4RESEARCH SRL \u00b7 Roma \u00b7 aegida-systems.com")
    canv.drawRightString(190 * mm, 13 * mm, f"Pag. {page_num}")


def draw_cover(canv, doc):
    """Disegnata via callback: la cover \u00e8 la prima pagina."""
    pass  # cover content \u00e8 nei flowables


def make_pdf():
    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=25 * mm,
        bottomMargin=22 * mm,
        title="AEGIDA Privacy Phone \u2014 Test Cellebrite UFED 17 aprile 2026",
        author="H4RESEARCH SRL",
        subject="Riscontri forensi del test Cellebrite Inseyets UFED 10.8.0.322 su AEGIDA Privacy Phone",
    )

    flow = []

    # ============== COVER PAGE ==============
    flow.append(Spacer(1, 30 * mm))

    # Brand mark
    brand_table = Table(
        [[Paragraph("<b>AEGIDA</b>", ParagraphStyle("brand", fontSize=20, textColor=NAVY, fontName="Helvetica-Bold"))]],
        colWidths=[170 * mm],
    )
    brand_table.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 1, GOLD),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    flow.append(brand_table)
    flow.append(Spacer(1, 6 * mm))

    flow.append(Paragraph(
        "H4RESEARCH SRL \u00b7 Roma \u00b7 Documento tecnico riservato a riscontri forensi",
        ParagraphStyle("brandsub", fontSize=8, textColor=SLATE_LIGHT, fontName="Helvetica"),
    ))
    flow.append(Spacer(1, 70 * mm))

    flow.append(Paragraph(
        "Test Cellebrite UFED<br/>su AEGIDA Privacy Phone",
        s_cover_title,
    ))
    flow.append(Paragraph(
        "Esito dell\u2019estrazione forense condotta da terza parte indipendente"
        " certificata, su Cellebrite Inseyets UFED 10.8.0.322 con modulo Turbo Link.",
        s_cover_subtitle,
    ))

    # Card data
    cover_data = [
        ["Data del test", "17 aprile 2026"],
        ["Operatore", "Societ\u00e0 italiana indipendente certificata in bonifica\nelettronica e contro-sorveglianza"],
        ["Software forense", "Cellebrite Inseyets UFED 10.8.0.322 + Turbo Link"],
        ["Dispositivo", "AEGIDA Privacy Phone (Pixel 10a, Aegida OS, Android 16, FBE)"],
        ["Esito sintetico", "Nessun dato utente estratto, n\u00e9 in BFU n\u00e9 in AFU\ncon codice di sblocco fornito"],
    ]
    cover_table = Table(cover_data, colWidths=[40 * mm, 130 * mm])
    cover_table.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (0, -1), GOLD),
        ("TEXTCOLOR", (1, 0), (1, -1), NAVY),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, SLATE_LIGHT),
    ]))
    flow.append(cover_table)
    flow.append(Spacer(1, 20 * mm))

    flow.append(Paragraph(
        "Documento pubblicato dal team AEGIDA \u2014 H4RESEARCH SRL.<br/>"
        "Versione 1.0 \u2014 18 aprile 2026 \u2014 aegida-systems.com",
        ParagraphStyle("footer_cov", fontSize=8, textColor=SLATE_LIGHT, fontName="Helvetica", alignment=TA_LEFT),
    ))

    flow.append(PageBreak())

    # ============== EXECUTIVE SUMMARY ==============
    flow.append(Paragraph("Sintesi", s_h1))
    flow.append(Paragraph(
        "Il 17 aprile 2026 una societ\u00e0 italiana indipendente, specializzata in bonifica tecnica elettronica e contro-sorveglianza, "
        "ha condotto un test di estrazione forense su un esemplare di AEGIDA Privacy Phone utilizzando "
        "Cellebrite Inseyets UFED versione 10.8.0.322 con modulo Turbo Link. Cellebrite UFED \u00e8 lo strumento "
        "di riferimento internazionale per l\u2019analisi forense di dispositivi mobili sequestrati o consegnati a procedimenti penali e amministrativi.",
        s_body,
    ))
    flow.append(Paragraph(
        "Il test \u00e8 stato condotto in due modalit\u00e0 successive: in stato Locked (Before First Unlock, BFU) "
        "e successivamente in stato Unlocked (After First Unlock, AFU) con il codice di sblocco "
        "del dispositivo noto e fornito direttamente allo strumento. In nessuno dei due scenari UFED ha estratto "
        "messaggi, foto, contatti, file o credenziali utente. Gli unici dati letti sono stati gli identificatori "
        "di dispositivo (vendor, modello, chipset, OS, kernel, livello patch, tipo di cifratura, batteria), "
        "campi accessibili tramite ADB e fastboot e non riconducibili a contenuto utente.",
        s_body,
    ))
    flow.append(Paragraph(
        "Il presente documento descrive metodologia, configurazione, sequenza operativa, screenshot di log e "
        "interpretazione dei risultati. Include un capitolo esplicito sui limiti del test e sulle condizioni di "
        "validit\u00e0 dell\u2019esito, oltre a un disclaimer legale completo e ai riferimenti normativi italiani applicabili.",
        s_body,
    ))

    # ============== CONTESTO ==============
    flow.append(Paragraph("Contesto", s_h1))
    flow.append(Paragraph(
        "Negli ultimi anni il dibattito pubblico italiano \u00e8 stato attraversato da casi che hanno reso evidente "
        "quanto il telefono personale di figure professionali esposte sia diventato la principale superficie di compromissione "
        "della loro riservatezza. La vicenda di <b>Exodus</b> (lo spyware sviluppato da eSurv e distribuito sul Play Store ufficiale, "
        "scoperto da Security Without Borders nel 2019) ha rivelato come strumenti di sorveglianza pensati per scopi giudiziari "
        "siano stati installati anche su dispositivi di soggetti non sotto indagine. La diffusione internazionale di "
        "<b>Pegasus</b> di NSO Group, documentata anche su giornalisti e attivisti italiani da Citizen Lab, ha mostrato come "
        "exploit zero-click possano colpire dispositivi mainstream senza alcuna interazione dell\u2019utente. Pi\u00f9 recentemente, "
        "lo scandalo <b>Equalize</b> emerso a Milano nel 2024 ha fotografato un mercato sotterraneo di accessi a banche dati "
        "pubbliche, con clienti che includevano studi privati, agenzie investigative e ambienti politici.",
        s_body,
    ))
    flow.append(Paragraph(
        "In questo scenario, le forze dell\u2019ordine italiane utilizzano da tempo strumenti di estrazione forense come "
        "Cellebrite UFED per leggere il contenuto di dispositivi sequestrati nel corso di indagini. Lo stesso strumento "
        "\u00e8 utilizzato da numerose autorit\u00e0 estere e, con licenza, da operatori privati certificati. La domanda che "
        "AEGIDA ha voluto rispondere con questo test \u00e8: <i>cosa estrae Cellebrite UFED \u2014 nella sua versione pi\u00f9 recente "
        "alla data del test \u2014 da un AEGIDA Privacy Phone, sia quando il telefono \u00e8 bloccato sia quando il telefono "
        "\u00e8 sbloccato e il codice di sblocco \u00e8 fornito allo strumento?</i>",
        s_body,
    ))
    flow.append(Paragraph(
        "La risposta documentata in queste pagine non \u00e8 una promessa commerciale: \u00e8 il log di un test condotto da "
        "un soggetto terzo, riproducibile nelle condizioni indicate. AEGIDA pubblica deliberatamente sia il risultato "
        "favorevole sia i limiti dell\u2019esperimento, perch\u00e9 ritiene che la trasparenza forense sia la sola forma di "
        "comunicazione accettabile in questo settore.",
        s_body,
    ))

    flow.append(PageBreak())

    # ============== METODOLOGIA ==============
    flow.append(Paragraph("Metodologia", s_h1))

    flow.append(Paragraph("Operatore", s_h2))
    flow.append(Paragraph(
        "Il test \u00e8 stato condotto da una societ\u00e0 italiana indipendente specializzata in bonifica tecnica elettronica "
        "(Technical Surveillance Counter-Measures) e contro-sorveglianza. L\u2019operatore certificato in possesso della "
        "qualifica International Master Counter Surveillance Technical ha utilizzato strumentazione e licenza propria. "
        "Nessun rapporto di committenza occulto: la societ\u00e0 ha eseguito il test su mandato di AEGIDA con compenso "
        "contrattualizzato, senza alcun vincolo a esiti predeterminati.",
        s_body,
    ))

    flow.append(Paragraph("Configurazione del dispositivo", s_h2))
    flow.append(Paragraph(
        "L\u2019esemplare di AEGIDA Privacy Phone sottoposto al test \u00e8 stato consegnato in configurazione di fabbrica, "
        "con le seguenti caratteristiche dichiarate:",
        s_body,
    ))
    device_specs = [
        ["Hardware", "Google Pixel 10a (modello commerciale)"],
        ["Sistema operativo", "Aegida OS, basato su GrapheneOS"],
        ["Versione Android", "16"],
        ["Kernel", "6.1.166-android14-11"],
        ["Livello patch di sicurezza", "5 aprile 2026"],
        ["Cifratura", "File-Based Encryption (FBE), schema standard Android"],
        ["Stato bootloader", "Verified Boot con catena di firma AEGIDA"],
        ["App preinstallate", "Aegida Connect (messaggistica P2P post-quantum), AEGIDA Inspector (attestazione integrit\u00e0 hardware)"],
    ]
    t_specs = Table(device_specs, colWidths=[55 * mm, 115 * mm])
    t_specs.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (0, -1), NAVY),
        ("TEXTCOLOR", (1, 0), (1, -1), SLATE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, SLATE_LIGHT),
    ]))
    flow.append(t_specs)
    flow.append(Spacer(1, 6))

    flow.append(Paragraph("Configurazione dello strumento forense", s_h2))
    forensic_specs = [
        ["Software", "Cellebrite Inseyets UFED versione 10.8.0.322"],
        ["Modulo accessorio", "Turbo Link (PN: A0683-00-042; SN visibile in postazione)"],
        ["Risorse caricate", "framework_v1.6.14, AccessUtils_v1.6, Android_Locked_v7.76.6.2"],
        ["Licenza", "Operatore terzo, attiva alla data del test"],
        ["Modalit\u00e0 di estrazione tentate", "BFU (Locked) e AFU (Unlocked) con codice fornito"],
        ["Spazio di estrazione disponibile", "1,43 TB liberi su 1,85 TB"],
        ["Sistema host", "Notebook Dell con sistema operativo Microsoft Windows"],
    ]
    t_forensic = Table(forensic_specs, colWidths=[55 * mm, 115 * mm])
    t_forensic.setStyle(t_specs._argW and TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (0, -1), NAVY),
        ("TEXTCOLOR", (1, 0), (1, -1), SLATE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, SLATE_LIGHT),
    ]))
    flow.append(t_forensic)
    flow.append(Spacer(1, 6))

    flow.append(Paragraph("Definizione degli stati BFU e AFU", s_h2))
    flow.append(Paragraph(
        "Nello standard di letteratura forense mobile (cfr. NIST SP 800-101 Rev. 1, <i>Guidelines on Mobile Device Forensics</i>) "
        "lo stato di un dispositivo Android crittografato si distingue in due categorie operative:",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>BFU (Before First Unlock)</b>: il telefono \u00e8 stato avviato ma non \u00e8 mai stato sbloccato dopo l\u2019accensione. "
        "Le chiavi di cifratura derivate dal codice utente non sono in memoria. \u00c8 lo stato di massima resistenza alla "
        "estrazione: anche un attaccante con accesso fisico al dispositivo deve forzare l\u2019autenticazione (brute force "
        "del codice o exploit del bootloader).",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>AFU (After First Unlock)</b>: il telefono \u00e8 stato sbloccato almeno una volta dopo l\u2019accensione. Le chiavi "
        "di cifratura sono parzialmente in memoria. \u00c8 lo stato in cui Cellebrite ha storicamente i tassi di successo pi\u00f9 alti: "
        "su Android stock (Samsung, Google Pixel non hardened, Xiaomi) UFED in AFU con codice fornito ottiene tipicamente "
        "Full File System Extraction in pochi minuti.",
        s_body,
    ))
    flow.append(Paragraph(
        "Il test \u00e8 stato condotto in entrambi gli stati per verificare il comportamento dello strumento sia nello scenario "
        "ostile sia nello scenario di massima cooperazione del proprietario.",
        s_body,
    ))

    flow.append(PageBreak())

    # ============== RISULTATI - SESSIONE 1 ==============
    flow.append(Paragraph("Risultati \u2014 Sessione 1: BFU (Locked)", s_h1))
    flow.append(Paragraph(
        "La sessione iniziale, registrata dai timestamp del software a partire dalle ore 15:53 UTC del 17 aprile 2026, "
        "ha visto UFED caricare il framework operativo (framework_v1.6.14, AccessUtils_v1.6, Android_Locked_v7.76.6.2) "
        "e tentare l\u2019identificazione del dispositivo collegato tramite Turbo Link. Lo strumento ha riconosciuto la "
        "presenza di un dispositivo Android in stato Locked alle 15:54 UTC. Il dispositivo \u00e8 stato identificato come "
        "Pixel 10a successivamente, durante la fase di Initial Access.",
        s_body,
    ))
    flow.append(Paragraph(
        "Tra le 15:59 e le 16:00 UTC lo strumento ha tentato la procedura di Initial Access in modalit\u00e0 BFU. Il flusso "
        "ha incluso il guess automatico del vendor (UFED ha proposto inizialmente la procedura Samsung Initial Access, "
        "errore evidente di classificazione) e successivamente il fallimento esplicito riportato nel log:",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Access attempt failed</b><br/>"
        "<b>17/04/2026 16:00 \u2014 No suitable method found.</b>",
        s_mono,
    ))
    flow.append(Paragraph(
        "L\u2019unica via residua proposta dallo strumento \u00e8 stata la procedura di Recovery, che avrebbe per\u00f2 causato la "
        "perdita dello stato AFU del dispositivo, compromettendo qualunque tentativo di estrazione successivo. La "
        "procedura \u00e8 stata declinata e il flusso \u00e8 stato chiuso. Nessun dato utente n\u00e9 metadato di sistema sono stati "
        "letti durante questa sessione.",
        s_body,
    ))

    # screenshot 01
    img1 = Image(str(IMG_DIR / "01-locked-no-method-found.jpg"), width=160 * mm, height=90 * mm)
    flow.append(KeepTogether([img1, Paragraph(
        "Figura 1 \u2014 Schermata UFED al termine della Sessione 1: stato Locked, conclusione "
        "<i>\u201cAccess attempt failed \u2014 No suitable method found\u201d</i>.",
        s_caption,
    )]))

    flow.append(PageBreak())

    # ============== RISULTATI - SESSIONE 2 ==============
    flow.append(Paragraph("Risultati \u2014 Sessione 2: AFU (Unlocked) con codice fornito", s_h1))
    flow.append(Paragraph(
        "Alle 16:01 UTC il flusso \u00e8 stato riavviato selezionando esplicitamente la modalit\u00e0 Unlocked, dopo aver "
        "sbloccato manualmente il telefono. Lo strumento ha guidato la fase di preparazione del dispositivo "
        "(rimozione SIM, abilitazione modalit\u00e0 aereo, attivazione opzioni sviluppatore, abilitazione USB debugging, "
        "selezione modalit\u00e0 USB \u201cFile transfer\u201d, attivazione \u201cStay Awake\u201d).",
        s_body,
    ))
    flow.append(Paragraph(
        "Alle 16:03 UTC UFED ha completato il riconoscimento del dispositivo come Pixel 10a e ha richiesto "
        "l\u2019inserimento del codice di sblocco. Il codice \u00e8 stato fornito direttamente nello strumento (visibile "
        "nei log come \u2022\u2022\u2022\u2022\u2022). Lo strumento ha quindi mostrato un avviso di tipo \u201cStatistical initial "
        "access\u201d, indicando un rischio del 15% di perdita dello stato AFU se il dispositivo si fosse trovato in "
        "particolari condizioni; con codice fornito, il rischio era dichiarato dallo strumento come minimo. La procedura \u00e8 stata confermata.",
        s_body,
    ))
    flow.append(Paragraph(
        "Nei minuti successivi UFED ha popolato la scheda Quick view con gli identificatori di dispositivo:",
        s_body,
    ))
    identifiers = [
        ["Vendor", "Google"],
        ["Modello commerciale", "Pixel 10a"],
        ["Chipset", "zumapro"],
        ["Sistema operativo", "Android 16"],
        ["Versione kernel", "6.1.166-android14-11"],
        ["Livello patch sicurezza", "2026-04-05"],
        ["Tipo di cifratura", "FBE (File-Based Encryption)"],
        ["Livello batteria al momento del test", "2%"],
    ]
    t_id = Table(identifiers, colWidths=[55 * mm, 115 * mm])
    t_id.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Courier"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (0, -1), NAVY),
        ("TEXTCOLOR", (1, 0), (1, -1), SLATE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, SLATE_LIGHT),
    ]))
    flow.append(t_id)
    flow.append(Spacer(1, 6))

    flow.append(Paragraph(
        "Questi campi sono accessibili a qualunque host che si colleghi al dispositivo via ADB (Android Debug Bridge) "
        "o fastboot in stato AFU. Non costituiscono <i>contenuto utente</i> nel senso forense del termine: non includono "
        "messaggi, contatti, foto, file, credenziali, chiavi crittografiche, app data, contenuti di applicazioni di "
        "messaggistica, e-mail, calendario o documenti. Sono identificatori del dispositivo come oggetto fisico, non come archivio personale.",
        s_body,
    ))

    img2 = Image(str(IMG_DIR / "02-metadata-only.jpg"), width=160 * mm, height=90 * mm)
    flow.append(KeepTogether([img2, Paragraph(
        "Figura 2 \u2014 Scheda Quick view di UFED in stato AFU con codice fornito: visibili gli identificatori di "
        "dispositivo, nessun contenuto utente.",
        s_caption,
    )]))

    flow.append(PageBreak())

    # ============== RISULTATI - SESSIONE 2 - ESITO FINALE ==============
    flow.append(Paragraph("Risultati \u2014 Sessione 2: esito finale dell\u2019estrazione utente", s_h1))
    flow.append(Paragraph(
        "Tra le 16:04 e le 16:07 UTC lo strumento ha eseguito tre fasi successive registrate nel Progress Console:",
        s_body,
    ))
    flow.append(Paragraph(
        "16:04 \u2014 <i>Preparing device, this might take up to a few minutes...</i><br/>"
        "16:05 \u2014 <i>Preparing device, this might take up to a few minutes...</i><br/>"
        "16:07 \u2014 <i>Method failed, starting next attempt...</i><br/>"
        "16:07 \u2014 <b>No suitable method found.</b>",
        s_mono,
    ))
    flow.append(Paragraph(
        "Lo strumento ha mostrato infine il messaggio <b>\u201cAccess attempt failed for Google Pixel 10a \u2014 Access attempt "
        "failed. For most devices, rerunning the flow an additional time will increase chances of success\u201d</b>. "
        "L\u2019operatore ha confermato la chiusura del flusso. Nessun messaggio, nessun contatto, nessuna foto, nessun "
        "file utente, nessuna credenziale e nessun contenuto applicativo \u00e8 stato estratto.",
        s_body,
    ))

    img3 = Image(str(IMG_DIR / "03-unlocked-passcode-failed.jpg"), width=160 * mm, height=90 * mm)
    flow.append(KeepTogether([img3, Paragraph(
        "Figura 3 \u2014 Schermata di conclusione della Sessione 2: stato AFU con codice fornito, esito "
        "<i>\u201cAccess attempt failed for Google Pixel 10a \u2014 No suitable method found\u201d</i>.",
        s_caption,
    )]))

    flow.append(Paragraph("Riepilogo cronologico (tutti gli orari in UTC)", s_h2))
    timeline_data = [
        ["15:53", "UFED carica framework e risorse di estrazione"],
        ["15:54", "Dispositivo collegato e rilevato in stato Locked"],
        ["15:57", "Inizio fase di Identifying"],
        ["15:59", "UFED tenta procedura Samsung Initial Access (vendor errato)"],
        ["16:00", "Sessione 1 BFU: \u201cNo suitable method found\u201d"],
        ["16:01", "Riavvio del flusso in modalit\u00e0 Unlocked"],
        ["16:03", "Dispositivo identificato: Pixel 10a"],
        ["16:03", "Inserimento del codice di sblocco \u2014 fornito a UFED"],
        ["16:04", "Statistical initial access confermato \u2014 inizio estrazione"],
        ["16:04\u201316:07", "Tentativi multipli di estrazione \u2014 falliti uno a uno"],
        ["16:07", "Sessione 2 AFU+codice: \u201cNo suitable method found\u201d"],
    ]
    t_time = Table(timeline_data, colWidths=[25 * mm, 145 * mm])
    t_time.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), "Courier-Bold"),
        ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TEXTCOLOR", (0, 0), (0, -1), GOLD),
        ("TEXTCOLOR", (1, 0), (1, -1), SLATE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, SLATE_LIGHT),
    ]))
    flow.append(t_time)

    flow.append(PageBreak())

    # ============== POSTAZIONE FISICA ==============
    flow.append(Paragraph("Postazione fisica del test", s_h1))
    flow.append(Paragraph(
        "Per consentire la verifica della sussistenza fisica della strumentazione utilizzata, il test \u00e8 stato "
        "documentato anche con fotografie della postazione di lavoro. La postazione comprende: notebook host con "
        "Cellebrite Inseyets UFED in esecuzione; modulo Cellebrite Turbo Link collegato al notebook tramite cavo "
        "proprietario e al dispositivo target tramite cavo Cellebrite ID 102; AEGIDA Privacy Phone con app Aegida "
        "Connect e AEGIDA Inspector visibili nella schermata principale. Sulla postazione \u00e8 visibile il distintivo "
        "International Master Counter Surveillance Technical dell\u2019operatore certificato.",
        s_body,
    ))

    img4 = Image(str(IMG_DIR / "04-setup-fisico.jpg"), width=120 * mm, height=160 * mm)
    flow.append(KeepTogether([img4, Paragraph(
        "Figura 4 \u2014 Postazione del test: notebook host con UFED, modulo Turbo Link Cellebrite, AEGIDA Privacy Phone collegato.",
        s_caption,
    )]))

    flow.append(PageBreak())

    # ============== COSA SIGNIFICA "0 DATI UTENTE" ==============
    flow.append(Paragraph("Cosa significa \u201c0 dati utente estratti\u201d", s_h1))
    flow.append(Paragraph(
        "Il claim sintetico utilizzato da AEGIDA \u2014 <i>\u201c0 dati utente estratti\u201d</i> \u2014 richiede una precisazione tecnica "
        "che questo white paper esplicita per evitare ambiguit\u00e0.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Sono stati letti dallo strumento:</b> identificatori di dispositivo (vendor, modello commerciale, chipset, "
        "sistema operativo, versione kernel, livello patch di sicurezza, tipo di cifratura attiva, livello di carica "
        "della batteria). Si tratta di campi accessibili tramite Android Debug Bridge (ADB) e fastboot quando il "
        "dispositivo si trova in stato AFU; non sono contenuti riconducibili al proprietario del dispositivo.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Non sono stati estratti:</b> messaggi di alcun tipo (SMS, RCS, app di messaggistica come Signal, WhatsApp, "
        "Telegram, Aegida Connect); contatti della rubrica; cronologia chiamate; foto e video della galleria; "
        "documenti, file e archivi salvati nello storage interno; credenziali memorizzate in keystore o keychain; "
        "cronologia di navigazione web; account configurati nel dispositivo; dati di applicazioni; e-mail; allegati; "
        "appunti; calendario; localizzazioni storiche; chiavi crittografiche; dati biometrici; impronte digitali "
        "registrate; codici di sblocco alternativi; dati di applicazioni governative o bancarie.",
        s_body,
    ))
    flow.append(Paragraph(
        "Questa distinzione \u00e8 fondamentale: nel lessico forense, l\u2019accesso ai metadati identificativi del dispositivo "
        "non costituisce estrazione di prova utilizzabile in giudizio quando l\u2019obiettivo \u00e8 la lettura del contenuto. "
        "L\u2019esito documentato significa, in termini pratici, che dal dispositivo testato non sono ricavabili informazioni "
        "personali del proprietario tramite la strumentazione e la versione utilizzate alla data del test.",
        s_body,
    ))

    # ============== LIMITI ==============
    flow.append(Paragraph("Limiti del test e cosa NON dimostra", s_h1))
    flow.append(Paragraph(
        "Il test documentato in questo white paper presenta limiti che AEGIDA dichiara espressamente per garantire "
        "trasparenza scientifica e per evitare interpretazioni eccessive del risultato.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Versione e firmware specifici.</b> Il risultato si riferisce a Cellebrite Inseyets UFED versione 10.8.0.322 "
        "con modulo Turbo Link, nello stato di aggiornamento risorse alla data del 17 aprile 2026. Cellebrite rilascia "
        "regolarmente nuove versioni che possono includere capacit\u00e0 di estrazione aggiuntive. AEGIDA non garantisce "
        "che release future producano lo stesso esito e si impegna a pubblicare re-test periodici.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Configurazione testata.</b> Il dispositivo \u00e8 stato testato in configurazione di fabbrica AEGIDA. "
        "Configurazioni modificate dall\u2019utente (ad esempio installazione di app esterne, modifica delle policy "
        "di sicurezza, abilitazione di servizi non documentati) possono alterare il risultato.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Vettori non testati.</b> Il test riguarda esclusivamente l\u2019estrazione forense via Cellebrite UFED in BFU "
        "e AFU. Non riguarda: spyware mirato installato sul dispositivo (Pegasus, Predator, simili); compromissione "
        "della baseband; attacchi side-channel; coercizione fisica del proprietario; chain attack su servizi cloud "
        "di backup; intercettazione di rete; attacchi alla supply chain hardware. Per ciascuno di questi vettori "
        "valgono altre considerazioni di sicurezza, alcune delle quali AEGIDA documenta in altre pubblicazioni.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Strumenti forensi alternativi.</b> Esistono altri strumenti forensi commerciali (Magnet AXIOM, MSAB XRY, "
        "Oxygen Forensic Detective) e capacit\u00e0 di laboratori statali avanzati che non sono stati testati in questa "
        "occasione. AEGIDA non rivendica l\u2019esito di questo test come universalmente valido contro qualunque "
        "strumento forense esistente.",
        s_body,
    ))
    flow.append(Paragraph(
        "<b>Test di laboratorio, non scenario operativo reale.</b> Il test \u00e8 stato condotto in condizioni controllate "
        "su un singolo esemplare di dispositivo, da un singolo operatore. Variazioni nelle condizioni operative possono "
        "produrre esiti diversi. Per validazione statistica sarebbe necessario un protocollo multi-dispositivo, "
        "multi-operatore, multi-versione \u2014 progetto a cui AEGIDA \u00e8 disponibile a partecipare.",
        s_body,
    ))

    flow.append(PageBreak())

    # ============== CONCLUSIONE ==============
    flow.append(Paragraph("Conclusione", s_h1))
    flow.append(Paragraph(
        "Nel test condotto il 17 aprile 2026 da una societ\u00e0 italiana indipendente certificata in bonifica tecnica "
        "elettronica, Cellebrite Inseyets UFED versione 10.8.0.322 con modulo Turbo Link non ha estratto alcun dato "
        "utente da AEGIDA Privacy Phone, n\u00e9 in modalit\u00e0 BFU (Locked) n\u00e9 in modalit\u00e0 AFU (Unlocked) con codice "
        "di sblocco noto e fornito direttamente allo strumento. Sono stati letti unicamente identificatori di "
        "dispositivo accessibili via ADB e fastboot, non riconducibili a contenuto del proprietario.",
        s_body,
    ))
    flow.append(Paragraph(
        "Il risultato \u00e8 documentato dai log dello strumento, da quattro fotografie della postazione operativa e dai "
        "metadati di sessione qui riprodotti. AEGIDA si impegna a rendere disponibili al lettore qualificato \u2014 "
        "previa firma di accordo di riservatezza \u2014 il file di esportazione completo della sessione UFED, comprensivo "
        "degli hash SHA-256 dei singoli passi del flusso, per verifica di integrit\u00e0 indipendente.",
        s_body,
    ))
    flow.append(Paragraph(
        "Il presente documento non costituisce promessa di sicurezza universale n\u00e9 garanzia commerciale. Costituisce "
        "il rendiconto trasparente di un esperimento riproducibile nelle condizioni indicate, e ha l\u2019unico scopo di "
        "consentire a giornalisti, avvocati, dirigenti e altri professionisti esposti di valutare AEGIDA Privacy Phone "
        "sulla base di prove e non di affermazioni.",
        s_body,
    ))

    # ============== APPENDICE GLOSSARIO ==============
    flow.append(Paragraph("Appendice A \u2014 Glossario tecnico", s_h1))
    glossary = [
        ("ADB \u2014 Android Debug Bridge", "Strumento standard di Android per comunicazione tra host e dispositivo. Quando abilitato, espone identificatori e (in determinati stati) consente comandi sul device."),
        ("AFU \u2014 After First Unlock", "Stato del telefono successivo al primo sblocco dopo l\u2019accensione. Le chiavi di cifratura derivate dal codice utente sono parzialmente in memoria."),
        ("BFU \u2014 Before First Unlock", "Stato del telefono successivo all\u2019accensione ma precedente al primo sblocco. Stato di massima resistenza all\u2019estrazione forense."),
        ("Cellebrite Inseyets UFED", "Universal Forensic Extraction Device di Cellebrite DI Ltd., software di riferimento per estrazione forense da dispositivi mobili in uso a forze dell\u2019ordine internazionali."),
        ("FBE \u2014 File-Based Encryption", "Schema standard di cifratura su Android dove file diversi sono cifrati con chiavi diverse, derivate (in parte) dal codice utente."),
        ("Fastboot", "Protocollo Android per comunicazione con il bootloader del dispositivo, normalmente disponibile prima del caricamento del sistema operativo."),
        ("ML-KEM \u2014 FIPS 203", "Module-Lattice-based Key Encapsulation Mechanism, standard NIST 2024 per scambio di chiavi resistente al calcolo quantistico. Implementato da AEGIDA in Aegida Connect."),
        ("Turbo Link", "Modulo hardware Cellebrite di interfacciamento con dispositivi target, distribuito agli operatori UFED licenziati."),
        ("Verified Boot", "Catena di verifica crittografica del boot Android dal bootloader fino al sistema operativo, basata su firme digitali."),
    ]
    for term, defi in glossary:
        flow.append(Paragraph(f"<b>{term}</b>", s_h3))
        flow.append(Paragraph(defi, s_body))

    flow.append(PageBreak())

    # ============== APPENDICE NORMATIVA ==============
    flow.append(Paragraph("Appendice B \u2014 Riferimenti normativi e disclaimer legale", s_h1))

    flow.append(Paragraph("Riferimenti normativi italiani applicabili", s_h2))
    flow.append(Paragraph(
        "<b>D.Lgs. 145/2007</b> \u2014 Attuazione della direttiva 2006/114/CE sulla pubblicit\u00e0 ingannevole e comparativa. "
        "L\u2019art. 4 disciplina i requisiti di liceit\u00e0 della comunicazione comparativa: confronto oggettivo, "
        "verificabile, riferito a caratteristiche essenziali e rappresentative, non denigratorio.",
        s_disclaimer,
    ))
    flow.append(Paragraph(
        "<b>L. 633/1941, art. 70</b> \u2014 Eccezione di citazione: \u00e8 lecita la riproduzione di parti di opere protette "
        "a fini di critica, discussione e ricerca scientifica, nei limiti del necessario e con indicazione della fonte.",
        s_disclaimer,
    ))
    flow.append(Paragraph(
        "<b>D.Lgs. 206/2005 (Codice del Consumo), art. 21</b> \u2014 Disciplina della pubblicit\u00e0 non ingannevole sotto "
        "il profilo della corretta informazione al consumatore.",
        s_disclaimer,
    ))
    flow.append(Paragraph(
        "<b>Reg. UE 2016/679 (GDPR), artt. 6 e 7</b> \u2014 Disciplina del trattamento dei dati personali, ivi inclusi "
        "quelli di soggetti identificabili in fotografie pubblicate. Le immagini riprodotte in questo documento sono "
        "state acquisite con il consenso scritto dei soggetti identificabili.",
        s_disclaimer,
    ))

    flow.append(Paragraph("Disclaimer legale", s_h2))
    flow.append(Paragraph(
        "Cellebrite, Inseyets, UFED e Turbo Link sono marchi registrati di Cellebrite DI Ltd. AEGIDA \u2014 H4RESEARCH SRL "
        "non \u00e8 affiliata, sponsorizzata o collegata a Cellebrite DI Ltd; i riferimenti nominativi e le riproduzioni "
        "delle interfacce dello strumento hanno finalit\u00e0 esclusivamente di documentazione tecnica comparativa ai "
        "sensi del D.Lgs. 145/2007 e di citazione scientifica ai sensi dell\u2019art. 70 della Legge 633/1941.",
        s_disclaimer,
    ))
    flow.append(Paragraph(
        "I risultati documentati si riferiscono esclusivamente alla versione software e firmware indicata, in vigore "
        "alla data del test del 17 aprile 2026, e alla configurazione hardware AEGIDA Privacy Phone descritta in "
        "questo documento. AEGIDA non garantisce che release future degli strumenti forensi citati o configurazioni "
        "diverse del proprio dispositivo producano lo stesso esito. AEGIDA si impegna a pubblicare aggiornamenti e "
        "re-test periodici a seguito di nuove release rilevanti del software forense citato.",
        s_disclaimer,
    ))
    flow.append(Paragraph(
        "Il test misura l\u2019interoperabilit\u00e0 di AEGIDA Privacy Phone con una specifica configurazione di Cellebrite "
        "Inseyets UFED. Non esprime giudizio complessivo sulla qualit\u00e0 dei prodotti Cellebrite n\u00e9 sulla loro "
        "efficacia in scenari diversi da quello documentato. AEGIDA riconosce a Cellebrite DI Ltd. il diritto di "
        "replica, esercitabile scrivendo all\u2019indirizzo legal@aegida-systems.com.",
        s_disclaimer,
    ))
    flow.append(Paragraph(
        "Il presente documento non costituisce consulenza legale, di sicurezza o di alcun altro tipo. AEGIDA declina "
        "ogni responsabilit\u00e0 per interpretazioni dei risultati diverse da quelle documentate e per decisioni assunte "
        "sulla base esclusiva di questo documento senza una valutazione di sicurezza personalizzata.",
        s_disclaimer,
    ))

    flow.append(Paragraph("Contatti", s_h2))
    flow.append(Paragraph(
        "<b>AEGIDA \u2014 H4RESEARCH SRL</b><br/>"
        "Roma, Italia \u2014 P.IVA IT14765811006<br/>"
        "Sito: aegida-systems.com<br/>"
        "Riservato istituzionale: legal@aegida-systems.com<br/>"
        "Riservato commerciale: info@aegida-systems.com",
        s_body,
    ))

    # Build
    doc.build(flow, onFirstPage=draw_page_chrome, onLaterPages=draw_page_chrome)
    print(f"PDF generato: {OUT_PDF}")
    print(f"Dimensione: {OUT_PDF.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    make_pdf()
