# White paper UFED + Dossier commerciale AEGIDA Privacy Phone — Design (Progetto 3)

**Data:** 2026-04-20
**Progetto:** 3 di 3 (segue: bonifica comunicazione + redesign visivo, entrambi completati)
**Deliverables:** due PDF A4 — dossier commerciale + white paper forense UFED

---

## Contesto

Dopo il pivot strategico sul Privacy Phone (2026-04-19) e la bonifica della comunicazione + redesign visivo del sito (Progetti 1 e 2, 2026-04-20), la cartella `public/downloads/` contiene 7 PDF disallineati dal nuovo brand:

- 3 PDF Framework (brief, brochure, documento tecnico) — Framework è ora in background strategico 2027-2028
- 3 PDF Privacy Phone (brochure, scheda tecnica, documento tecnico) — creati con palette gold+navy obsoleta
- 1 PDF white paper UFED del 2026-04-17 — creato con palette gold+navy

Il sito web è stato ripulito e riorientato; i materiali scaricabili sono rimasti indietro. Il visitatore che scarica un PDF vede un oggetto che non comunica lo stesso brand del sito, con tono non allineato alle convenzioni editoriali decise nel Progetto 1.

## Obiettivo

Produrre due PDF in italiano, visivamente e testualmente coerenti con il sito post-redesign, che coprano i due casi d'uso reali del target AEGIDA:

1. **Dossier commerciale** — lead magnet per prospect (giornalisti, avvocati, dirigenti) che vogliono capire cosa offre il prodotto senza dover leggere un'analisi forense. Destinato al download dal sito.
2. **White paper UFED** — approfondimento tecnico-giornalistico del test forense, destinato al press kit per redazioni investigative e al download dal sito come proof di credibilità.

I 6 PDF legacy vengono archiviati ma non cancellati, e i link del sito sono ripuntati ai due nuovi documenti.

---

## Decisioni strategiche

### 1. Due documenti separati (non uno consolidato)

Dossier commerciale e white paper UFED hanno funzioni, registri e lettori diversi:

- **Dossier:** sintetico, comprensibile in 10 minuti, contiene specifiche + pricing + processo d'acquisto. Tono più vicino a una scheda prodotto sobria.
- **White paper:** approfondito, comprensibile in 30+ minuti, contiene metodologia + risultati + implicazioni + disclaimer legali estesi. Tono di report forense pubblicato da testata seria.

Forzarli in un unico documento diluisce entrambe le funzioni.

### 2. Copertina dark, interno light

Convenzione seguita da report forensi e pubblicazioni accademiche premium: la cover firma il brand con impatto visivo (navy profondo come il sito), il contenuto interno è su carta digitale per leggibilità prolungata e stampabilità.

- Cover: `#0B1220` (identico al sito) + wordmark AEGIDA mono
- Interno: `#FAFAF9` (avorio chiaro, non bianco puro per ridurre glare)

### 3. Solo italiano in Fase 1

Coerente con il Progetto 1. EN e DE restano scope di Fase 2, quando il copy italiano sarà in produzione da qualche settimana e sedimentato.

### 4. Tipografia: Helvetica + JetBrains Mono

- **Helvetica / Helvetica-Bold**: built-in in reportlab, zero overhead di TTF, molto vicina visivamente a Inter per una resa PDF. Compromesso pragmatico tra coerenza con sito (Inter) e affidabilità del generatore PDF.
- **JetBrains Mono Regular**: registrato come TTF embedded (~180 KB nel repo in `scripts/fonts/`), usato per kicker, label, tabelle, timestamp, versioni. Stessa scelta del sito.

### 5. Generatore Python + reportlab

Continua la linea già adottata per il white paper UFED esistente. Due script separati in `scripts/`:

- `generate-dossier-pdf.py` (nuovo)
- `generate-white-paper-ufed.py` (riscritto, stesso nome filename PDF per non rompere link esistenti a `aegida-privacy-phone-test-ufed-2026-04-17.pdf`)

Entrambi rieseguibili manualmente. Nessuna integrazione nel build di Next.js.

### 6. Copy non sincronizzato con i18n (debito accettato)

Il copy dei PDF vive in stringhe Python dentro gli script. Non è sincronizzato automaticamente con `lib/i18n/locales/it.ts`. Debito accettato perché:

- Gli script non girano in ambiente Node
- Il copy del PDF ha lunghezze/ritmi diversi da quello del sito
- La frequenza di aggiornamento è bassa (non giornaliera come il blog)

Convenzione: quando il copy del sito cambia in modo sostanziale sui claim UFED o sulla descrizione del prodotto, i PDF vanno rigenerati manualmente per riflettere il cambiamento. Promemoria nella sezione "Manutenzione" alla fine del piano.

### 7. Archiviazione PDF legacy

I 6 PDF obsoleti sono spostati in `public/downloads/archive-2026-04/` (cartella nuova). Non sono cancellati: restano accessibili via link diretto se qualcuno ha già in mano un URL. Il sito non li linka più.

---

## Identità visiva comune

### Palette

- Navy-ink `#0B1220` — cover background, wordmark bottom rule, section separators scuri
- Ivory `#FAFAF9` — background interno
- Text dark `#0B1220` — corpo testo principale
- Steel `#4A6583` — accenti (kicker, linea separatori sottili)
- Ink-ochre `#6B5D3F` — DISUSO (nessun accento warm)
- Slate `#5E6B82` — didascalie, metadati secondari

Nessun gold. Nessun ciano. Nessun rosso (solo per disclaimer legale inline, se serve).

### Tipografia in reportlab

```python
# Cover
COVER_TITLE = ParagraphStyle(fontName='Helvetica-Bold', fontSize=32, leading=38,
                              textColor=IVORY, leftIndent=0)
COVER_KICKER = ParagraphStyle(fontName='JetBrainsMono-Regular', fontSize=9,
                               leading=14, textColor=STEEL_HI, uppercase=True)

# Interno
H1 = ParagraphStyle(fontName='Helvetica-Bold', fontSize=18, leading=24,
                    textColor=NAVY_INK, spaceBefore=18, spaceAfter=8)
H2 = ParagraphStyle(fontName='Helvetica-Bold', fontSize=12, leading=16,
                    textColor=NAVY_INK, spaceBefore=14, spaceAfter=6)
KICKER = ParagraphStyle(fontName='JetBrainsMono-Regular', fontSize=8, leading=12,
                        textColor=STEEL, uppercase=True, letterSpacing=2)
BODY = ParagraphStyle(fontName='Helvetica', fontSize=10, leading=15,
                      textColor=NAVY_INK, alignment=TA_JUSTIFY, spaceAfter=8)
MONO = ParagraphStyle(fontName='JetBrainsMono-Regular', fontSize=9, leading=13,
                      textColor=NAVY_INK, leftIndent=12)
CAPTION = ParagraphStyle(fontName='Helvetica-Oblique', fontSize=8, leading=12,
                         textColor=SLATE, alignment=TA_CENTER)
DISCLAIMER = ParagraphStyle(fontName='Helvetica-Oblique', fontSize=8, leading=12,
                            textColor=SLATE, alignment=TA_JUSTIFY)
```

### Footer pagina (comune)

- Riga sottile navy-line 0.5pt in cima al footer
- A sinistra: wordmark `AEGIDA` in JetBrainsMono 7pt UPPERCASE tracked
- A destra: `Pagina N di M` in JetBrainsMono 7pt
- Colore: `#5E6B82`

### Cover (comune pattern)

- Background pieno `#0B1220`
- Wordmark `AEGIDA` in JetBrainsMono 16pt tracked 0.12em, bianco-crema, top-left
- Kicker mono in alto sopra il titolo: il tipo di documento
- Titolo principale in Helvetica-Bold 32pt, ivory
- Sotto-titolo in steel-hi
- Bottom-left: data pubblicazione mono
- Bottom-right: versione + locale

---

## Dossier commerciale — struttura pagine

**File output:** `public/downloads/aegida-privacy-phone-dossier.pdf`

**Target pagine:** 8-10

**Dimensione target:** < 500 KB

| # | Sezione | Contenuto chiave |
|---|---------|------------------|
| 1 | Cover | Kicker `DOCUMENTO · 2026`; titolo `AEGIDA Privacy Phone`; sub `Smartphone rafforzato. Documento informativo.` |
| 2 | Manifesto | 3 paragrafi brand: cos'è AEGIDA, a chi serve, perché esiste. Quote UFED in box mono. |
| 3 | Cosa risolve | Paragrafo + lista fatti. Chi è esposto (giornalisti, avvocati, dirigenti, ONG, figure pubbliche) + quali rischi (estrazione forense, compromissione OS, backup cloud non consensuali). |
| 4 | Cosa include | 4 blocchi (Hardware rafforzato, Connect, Inspector, Supporto). Stesso copy della home/privacy-phone del sito, adattato in paragrafi compatti. |
| 5 | Specifiche hardware | Tabella mono 2 colonne: modello, CPU, RAM, storage, connettività, biometria, sensori, batteria. |
| 6 | Specifiche software | Tabella mono: OS base, fork, crypto PQ, attestation, update policy, BFU/AFU lock modes. |
| 7 | Pricing | Tabella cards: Pacchetto primo anno 3.900€ | Rinnovo 690€/anno | Ordini multi-device (contatto). Note su cosa è incluso. |
| 8 | Processo d'acquisto | 4 step: colloquio → configurazione → consegna (bonifico anticipato; consegna tramite corriere tracciato) → formazione. |
| 9 | Contatti | Email info@, email legal@, payoff PROGETTATO IN ITALIA. Footer con disclaimer breve. |

---

## White paper UFED — struttura pagine

**File output:** `public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf` (preserva URL esistente)

**Target pagine:** 14-16

**Dimensione target:** ~1 MB (include 4 screenshot)

| # | Sezione | Contenuto chiave |
|---|---------|------------------|
| 1 | Cover | Kicker `WHITE PAPER · UFED`; titolo `Cellebrite UFED 10.8 vs AEGIDA Privacy Phone`; sub `17 aprile 2026. Metodologia e risultati.` |
| 2 | Executive summary | 1 pagina, 4 fatti chiave in box mono + 3 paragrafi narrativi. Numeri: versione UFED, data, "0 dati utente", BFU+AFU testati. |
| 3 | Contesto | Perché il test: strumenti Cellebrite nel panorama italiano post-Equalize, necessità di produrre evidence forense, differenza tra claim di marketing e claim verificato. |
| 4 | Scope del test | Cosa è stato tentato (estrazione dati utente con UFED 10.8.0.322 + modulo Turbo Link, modalità BFU e AFU con codice di sblocco fornito) e cosa NON è stato tentato (0-day rilevanti non pubblicamente noti, side-channel attacks, hardware implants). Onestà di scope. |
| 5 | Metodologia | Operatore, strumento, ambiente. Menzione operatore con certificazione International Master Counter Surveillance Technical, società italiana terza (nome oscurato se necessario). Attrezzatura. Procedure standard. |
| 6-7 | Procedura BFU | Screenshot 01 (locked, no method found) + commento tecnico. Screenshot 02 (metadata-only extraction) + commento. |
| 8-9 | Procedura AFU | Screenshot 03 (unlocked, passcode failed) + commento. Descrizione operativa estesa. |
| 10 | Risultati | Tabella mono: Modalità | Azione UFED | Risultato. Riepilogo "0 dati utente" in tutti i casi. Screenshot 04 (setup fisico operatore). |
| 11 | Implicazioni per il modello di minaccia | Cosa significa questo per un giornalista sotto sorveglianza, per un avvocato con clienti sensibili, per un dirigente in contesto ostile. Concreto, non generico. |
| 12 | Limitazioni | Test singolo in data singola; non test continuativo; non garanzia contro attaccanti futuri; il Privacy Phone resiste a Cellebrite UFED 10.8 del 17 aprile 2026, non necessariamente a versioni future. |
| 13 | Confronto iPhone/Samsung/Pixel stock | Tabella sobria che riporta fatti pubblici (es. Cellebrite documentation pubbliche, Project Zero, GrapheneOS bulletins). Niente claim di superiorità assoluta — solo confronto onesto. |
| 14 | Disclaimer legale esteso | D.Lgs. 145/2007 (pubblicità ingannevole), art. 70 L. 633/1941 (diritto di citazione), email legal@aegida-systems.com per diritto di replica. |
| 15-16 | (Opzionali) Appendice metodologica | Se serve spazio, dettagli tecnici di BFU/AFU, glossario Cellebrite/UFED/EDL, certificazioni dell'operatore. |

---

## Implementazione tecnica

### File creati / modificati

- **Create:** `scripts/generate-dossier-pdf.py` — generatore nuovo
- **Create:** `scripts/fonts/JetBrainsMono-Regular.ttf` — font file (dominio pubblico OFL)
- **Modify (rewrite sostanziale):** `scripts/generate-white-paper-ufed.py`
- **Move:** 6 PDF legacy in `public/downloads/archive-2026-04/`
  - `aegida-framework-brief-generale.pdf`
  - `aegida-framework-brochure.pdf`
  - `aegida-framework-documento-tecnico.pdf`
  - `aegida-privacy-phone-brochure.pdf`
  - `aegida-privacy-phone-documento-tecnico.pdf`
  - `aegida-privacy-phone-scheda-tecnica.pdf`
- **Create:** `public/downloads/archive-2026-04/README.md` — spiega il motivo dell'archivio
- **Modify:** eventuali link nel sito che puntavano ai PDF legacy (Task di verifica nel piano)
- **Create:** nuovo `public/downloads/aegida-privacy-phone-dossier.pdf`
- **Replace:** `public/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf`

### Struttura Python (template comune)

Entrambi gli script condividono:

- Imports reportlab standard
- Registrazione font JetBrains Mono
- Costanti palette (navy-ink, ivory, steel, slate)
- Funzioni factory per styles (H1, H2, KICKER, BODY, MONO, CAPTION, DISCLAIMER)
- Funzione `cover_page(title, kicker, subtitle, date, version)` riutilizzabile
- Funzione `footer_canvas(canvas, doc)` comune per numerazione pagina + wordmark

Queste funzioni comuni vanno in un modulo `scripts/pdf_common.py` (nuovo) importato da entrambi gli script. Separazione di responsabilità.

### Esecuzione

- `python scripts/generate-dossier-pdf.py` → output in downloads
- `python scripts/generate-white-paper-ufed.py` → output in downloads
- Nessun argomento CLI necessario; percorsi hardcoded

### Verifica manuale post-generazione

- Apertura PDF e ispezione cover (dark + wordmark)
- Ispezione pagina interna (ivory, font Helvetica + JetBrainsMono visibili)
- Verifica numero pagine rispetto al target
- Verifica dimensione file
- Opzionale: stampa test di 1 pagina interna in B/N per verificare leggibilità (solo se si prevede distribuzione cartacea)

---

## Criteri di successo

1. **Due PDF generano senza errori** dai rispettivi script.
2. **Palette rispetta lo spec:** cover navy-ink, interno ivory, steel come unico accento. Zero gold in entrambi.
3. **Font embedding:** JetBrains Mono embedded (verificabile con `pdffonts` o visualmente uniforme cross-platform).
4. **Claim UFED uniforme** in entrambi i documenti: sempre "Cellebrite UFED 10.8.0.322" + "17 aprile 2026" + "0 dati utente".
5. **Dimensioni:** dossier < 500 KB, white paper ~1 MB (± 200 KB per compressione immagini).
6. **Link sito puntano ai 2 PDF nuovi**; i 6 PDF legacy non linkati da pagine web pubbliche, componenti, blog live del sito (grep su `components/`, `app/`, `lib/blog/` di verifica nel piano). Link interni in articoli blog già pubblicati vengono aggiornati al nuovo target se puntavano a PDF obsoleti.
7. **Archiviazione completa:** cartella `archive-2026-04/` esiste con README esplicativo, 6 file moved, tutti comunque accessibili via URL diretto se qualcuno ha il link preesistente.
8. **Stampabilità:** una pagina interna stampata in B/N resta leggibile; testo non si perde, separatori hairline restano visibili.
9. **Disclaimer legale presente** in entrambi i PDF (versione sintetica nel dossier, estesa nel white paper).
10. **Rigenerazione documentata:** README in `scripts/` spiega come rigenerare i PDF quando il copy del sito cambia.

---

## Fuori scope

- **Traduzione EN/DE** — Fase 2, dopo validazione dei PDF italiani.
- **Versioning formale** (v1.0, v1.1, ecc.) — debito accettato; la data in cover e in footer funge da versioning.
- **Firma digitale PDF** — possibile futuro se serve per legal/press release, ma non in questa iterazione.
- **Integrazione PDF nel build Next.js** (generazione automatica al deploy) — i PDF sono asset manuali, rigenerati su cambiamenti sostanziali.
- **PDF nuovi per il Framework** — il prodotto è in background 2027-2028; nessun nuovo materiale commerciale per ora.

---

## Dipendenze

- **Input:** Progetti 1 e 2 completati (copy + design system stabilizzati).
- **Branch:** prosegue su `feature/bonifica-comunicazione-ita`. Il piano può decidere diversamente se emergono buone ragioni.
- **Assets riutilizzati:** i 4 screenshot `public/proof/ufed-test/01-04-*.jpg` (già committati in Progetto 1 snapshot).
- **Dipendenze Python:** reportlab (già in uso). Nessuna nuova libreria.
- **Font TTF:** JetBrainsMono-Regular.ttf da scaricare e committare (licenza OFL, sorgente: fonts.google.com/specimen/JetBrains+Mono).

---

## Rischi

1. **Font Helvetica come fallback di Inter** — differenza visuale minima in PDF ma non identica al sito. Accettato.
2. **Copy non sincronizzato** tra sito e PDF — rischio di divergere nel tempo. Mitigazione: promemoria di rigenerazione al termine di ogni cambiamento sostanziale al copy i18n.
3. **Dimensione delle immagini UFED** — se i 4 screenshot sono troppo pesanti, il PDF supera 1 MB. Il piano include verifica + eventuale down-scale a 1200px larghezza.
4. **Link rotti sul sito** se un link pubblicato (LinkedIn, email) punta a un PDF legacy — mitigazione: `aegida-privacy-phone-test-ufed-2026-04-17.pdf` mantiene lo stesso path URL, solo gli altri 6 vengono spostati. Il post LinkedIn già pubblicato (memoria) resta valido.
5. **Regressione dati estetici** — se qualcuno rigenera il PDF in futuro senza il font JetBrains Mono installato, il generatore deve fallire con errore chiaro (non produrre PDF con font mancante). Il piano include controllo esplicito.
