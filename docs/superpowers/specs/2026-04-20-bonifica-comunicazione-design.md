# Bonifica comunicazione sito AEGIDA — Design

**Data:** 2026-04-20
**Progetto:** 1 di 3 (seguono: Redesign visivo, Riscrittura white paper UFED)
**Locale scope:** italiano in Fase 1; EN/DE in Fase 2 successiva

---

## Contesto

Dopo il pivot commerciale 2026 su AEGIDA Privacy Phone (deciso il 2026-04-19) e l'integrazione della sezione Proof UFED (2026-04-20), la comunicazione del sito è diventata incoerente. L'audit ha identificato tre problemi gravi:

1. **Identità confusa** — AEGIDA è usato contemporaneamente come nome dell'azienda, della suite di prodotti e del singolo telefono. Il visitatore non capisce la gerarchia.
2. **Conflitto di posizionamento** — Privacy Phone e Framework sono presentati con pari peso, nonostante il pivot 80/20 abbia eletto Privacy Phone come flagship 2026.
3. **Registro linguistico incoerente** — Home è giornalistico-sobria, Privacy Phone è un datasheet, Framework è propagandistico.

Più problemi di media gravità: anglicismi non uniformi, claim sovra-venduti vietati dalle convenzioni, doppioni letterali, terminologia UFED non uniformata.

## Obiettivo

Riallineare tutta la comunicazione italiana del sito a una gerarchia prodotti chiara e a un registro editoriale unico, in modo che un visitatore target (giornalista investigativo, avvocato penalista, dirigente esposto, HNWI post-Equalize) trovi un sito credibile, fattuale e coerente con le pubblicazioni giornalistiche di riferimento (Il Post, Internazionale, Domani).

---

## Decisioni strategiche

### 1. Gerarchia e naming

- **AEGIDA** = brand di sicurezza di **H4R (Human for Research Srl)**.
- **Prodotti** (tutti prefissati "AEGIDA"):
  - **AEGIDA Privacy Phone** — smartphone rafforzato, flagship commerciale 2026
  - **AEGIDA Framework** — piattaforma per infrastrutture critiche, strategico 2027-2028
- **Capability incluse nel Privacy Phone** (non prodotti separati):
  - **AEGIDA Connect** — messaggistica cifrata post-quantum
  - **AEGIDA Inspector** — attestazione integrità hardware

Un visitatore che arriva sul sito deve poter rispondere in 10 secondi a tre domande:
- Chi siete? H4R Srl, un'azienda italiana.
- Cosa vendete? AEGIDA Privacy Phone (flagship). Il Framework arriva nel 2027.
- Cosa fa? Resiste a UFED. Include messaggistica cifrata e attestazione integrità.

### 2. Ruolo del Framework

Ridotto a **one-pager sobria** (`/framework`): 4 paragrafi, stato 2026→2028, CTA pilot. Il contenuto tecnico attuale viene archiviato in `docs/framework-archive-2026-04/` per riutilizzo quando il prodotto si avvicinerà al lancio commerciale.

### 3. Voce editoriale unica

Giornalistico-saggistico alto su tutto il sito. Riferimenti di registro: Il Post, Internazionale, Domani.

Convenzioni:

- **Maiuscole**: italiano standard. Solo iniziale di frase e nomi propri. Vietato il title-case anglosassone.
- **Anglicismi da tradurre sistematicamente**:
  - `bundle` → **pacchetto**
  - `passcode` → **codice di sblocco**
  - `hardware hardened` → **hardware rafforzato** (o «smartphone rafforzato»)
  - `end-to-end encryption` → **cifratura punto-a-punto**
  - `peer-to-peer` → **comunicazione diretta tra dispositivi**
  - `air-gapped` → **isolato fisicamente dalla rete**
- **Restano in inglese** solo termini tecnici internazionali senza equivalente consolidato: BFU/AFU (sempre con glossa italiana alla prima occorrenza di ogni pagina), UFED, ML-KEM, FIPS, ADB, fastboot.
- **Claim UFED**: sempre «0 dati utente» (mai «0 dati»), versione + data sempre indicate.
- **Vietato**: «non puoi permetterti», «leader», «soluzione completa», «rivoluzionario», «innovativo», «best-in-class», «game-changer», «unleash», «empower», «next-generation».
- **Accenti italiani corretti sempre**: è, più, già, perché (mai apostrofi al posto degli accenti).

### 4. Call to action

- **Primaria su tutte le pagine**: `Richiedi un colloquio` — identica, stesso pulsante, visibile hero + fine pagina.
- **Secondaria (solo Home e Privacy Phone)**: `Scarica il white paper UFED (PDF)`.
- Eliminate tutte le altre CTA generiche: «scopri di più», «leggi tutto», «clicca qui», «contattaci».

---

## Architettura del sito

### Sitemap pubblica

| Percorso | Contenuto | Stato |
|----------|-----------|-------|
| `/` | Home | Riscrittura |
| `/privacy-phone` | Pagina prodotto flagship | Consolidamento |
| `/framework` | One-pager sobria | Riduzione drastica |
| `/chi-siamo` | Istituzionale | **Nuova pagina** |
| `/blog` | Blog | Invariato (per ora) |
| `/contatti` | Form colloquio | Revisione micro-copy |

### Navigation (header)

Nuovo ordine: `Privacy Phone · Framework · Blog · Chi siamo · Contatti`.

Privacy Phone è il primo elemento, a segnalare il flagship.

### Rimossi dal menu pubblico

- Voce "AEGIDA Connect" (se presente) — contenuto trasferito come sezione "Cosa include" nella pagina Privacy Phone
- Voce "Inspector" (se presente) — stessa sorte

### Pagine archiviate (non cancellate)

- Componenti standalone di Connect/Inspector (se esistono) → spostati in `lib/archived/` con commento sul motivo
- Contenuti tecnici del Framework → archiviati in `docs/framework-archive-2026-04/`

---

## Copy plan pagina per pagina

### Home (`/`)

**Struttura** (dall'alto):

1. **Hero**
   - Claim principale: variazione della frase UFED, sobria, una riga
   - Sottotitolo: posizionamento istituzionale (AEGIDA è il brand di sicurezza di H4R)
   - CTA primaria: "Richiedi un colloquio"
   - CTA secondaria: "Scarica il white paper UFED"
2. **Istituzionale (2 righe)**
   - «AEGIDA è il brand di sicurezza di H4R. Progetta e produce strumenti per chi opera con informazioni sensibili.»
3. **Linea prodotti — due card asimmetriche**
   - Privacy Phone (grande, con claim UFED sintetico + link)
   - Framework (piccola, «linea B2B per infrastrutture critiche — 2027-2028»)
4. **Proof UFED (anteprima)**
   - 3-4 righe: data, strumento, metodologia sintetica, esito «0 dati utente»
   - Link: «Leggi il test completo»
5. **CTA finale**: "Richiedi un colloquio"

**Rimossi dalla Home attuale**:

- Tutte le sezioni ridondanti sui prodotti Connect e Inspector
- Blocchi emozionali tipo «non puoi permetterti una fuga di dati»
- Threat Ticker *se* il redesign visivo (Progetto 2) lo identificherà come «cyberpunk». Decisione definitiva nel Progetto 2.

### Privacy Phone (`/privacy-phone`)

**Struttura** (dall'alto):

1. **Hero**
   - Claim UFED (variazione dalla Home, non identica letterale)
   - Una riga di cosa è: «Smartphone rafforzato su base Pixel 10a, con sistema operativo derivato e indurito da AEGIDA.»
2. **Cos'è (3-4 righe sobrie)**
   - Per chi è pensato, come si differenzia
3. **Cosa include** — sezione unica con 4 voci (testi 2-3 righe ciascuno):
   - Hardware rafforzato (Pixel 10a base, hardening AEGIDA)
   - **Connect** — messaggistica cifrata punto-a-punto (ML-KEM FIPS 203)
   - **Inspector** — attestazione integrità hardware (fork di GrapheneOS Auditor)
   - 12 mesi di supporto via canale cifrato + formazione utente
4. **Proof UFED** — sezione esistente (già buona), correzione solo di «bundle» → «pacchetto» e coerenza «0 dati utente»
5. **Pricing** — sezione esistente (già buona), correzione «Bundle primo anno» → «Pacchetto primo anno»
6. **Metodologia e disclaimer legale** — mantenere esistente; aggiungere glossa BFU/AFU alla prima occorrenza della pagina
7. **CTA finale**: "Richiedi un colloquio"

### Framework (`/framework`) — **one-pager**

Quattro paragrafi brevi, in questo ordine:

1. **Cos'è** — «AEGIDA Framework è una piattaforma di sicurezza pensata per le reti di comunicazione di infrastrutture critiche: energia, sanità, trasporti, pubblica amministrazione.»
2. **A chi serve** — operatori che devono rispondere a NIS2, DORA o equivalenti, e hanno reti da proteggere su base nazionale.
3. **Stato attuale (2026)** — in qualificazione presso ACN, in dialogo con integrator di riferimento. Pilot non paganti aperti a operatori selezionati.
4. **Roadmap 2027-2028** — lancio commerciale previsto con certificazioni complete e reference clienti.

CTA: "Richiedi contatto per un pilot" (unica variante ammessa rispetto alla CTA standard — questo pubblico non cerca un colloquio commerciale ma una valutazione tecnica).

### Chi siamo (`/chi-siamo`) — **nuova pagina**

Sezioni:

1. **H4R** — chi è la società legale, sede (Roma), anno di fondazione
2. **AEGIDA** — cos'è il brand, mission editoriale sobria (una breve dichiarazione di 3-4 righe)
3. **Cosa produciamo** — elenco fattuale: 2 prodotti (Privacy Phone, Framework) + 2 capability (Connect, Inspector)
4. **Team** — nomi + ruoli. Niente foto stile "About us Silicon Valley", niente claim emozionali.
5. **CTA finale**: "Richiedi un colloquio"

### Contatti (`/contatti`)

Form esistente. Revisione micro-copy:

- Titolo pagina: «Richiedi un colloquio» (non «Contattaci»)
- Campo «Oggetto» → «Motivo del contatto» (placeholder: «descrivi sinteticamente la tua situazione»)
- Aggiungere campo «Ruolo professionale» (placeholder: «giornalista, avvocato, dirigente, altro»)
- Eliminare CTA in fondo al form (il form *è* già la CTA)

### Blog

Nessuna revisione di massa degli articoli esistenti in Progetto 1. La categoria "deep-analysis" (viola) verrà riallineata cromaticamente nel Progetto 2.

### Header

- Ordine menu aggiornato: `Privacy Phone · Framework · Blog · Chi siamo · Contatti`
- Etichetta del logo: «AEGIDA» (senza tagline testuale accanto; eventuali scelte grafiche del logo restano di competenza del Progetto 2)
- CTA desktop: «Richiedi un colloquio» (uniformare su tutte le viewport)

### Footer

- Testo istituzionale sotto il logo: «AEGIDA è il brand di sicurezza di H4R (Human for Research Srl). Roma, Italia.»
- Payoff esistente «PROGETTATO IN ITALIA.» mantenuto
- Link legali mantenuti

---

## Scope di esecuzione

### Fase 1 (questo progetto)

Riscrittura completa dei seguenti asset in italiano:

- `lib/i18n/locales/it.ts` — riscrittura quasi totale delle stringhe home, privacyPhone, framework, header, footer, contact
- **Nuova chiave i18n**: `about` (tutto il contenuto Chi siamo)
- `components/HomeContent.tsx` — restruttura sezioni (riduzione, non aggiunta)
- `components/PrivacyPhoneContent.tsx` — consolidamento (Connect/Inspector come capability inline)
- `components/FrameworkContent.tsx` — riduzione drastica a one-pager
- **Nuovo**: `components/AboutContent.tsx` + `app/chi-siamo/page.tsx`
- `components/Header.tsx` — nuovo ordine menu + aggiunta "Chi siamo"
- `components/Footer.tsx` — micro-testo istituzionale
- Eventuali componenti Connect/Inspector standalone: archiviati in `lib/archived/`

### Fase 2 (dopo approvazione dei risultati italiani)

Adattamento EN e DE delle stesse sezioni — come adattamento al registro della lingua di arrivo, non traduzione letterale.

### Durante la Fase 1

Language switcher: piccolo avviso «EN/DE aggiornamento in corso» accanto alle voci non italiane, per trasparenza verso visitatori internazionali.

---

## Elenco specifico dei claim da rimuovere

Da cercare e sostituire in tutto il copy italiano:

- Qualsiasi uso di «soluzione completa», «soluzione end-to-end» (come claim)
- «Non puoi permetterti una fuga di dati» e varianti
- «Leader», «leader italiano», «primo in Italia»
- «Rivoluzionario», «innovativo», «all'avanguardia», «di nuova generazione»
- «Best-in-class», «game-changer»
- Verbi da pitch anglosassone: «unleash», «empower», «accelerate»

Sostituzioni con frasi fattuali (esempi):

- «Soluzione completa» → descrivere cosa include, senza qualificarlo
- «Non puoi permetterti» → «Chi lavora con informazioni sensibili ha esigenze specifiche»
- «Leader» → rimuovere e basta, o specificare dato («Unica azienda italiana a pubblicare test UFED indipendenti»)

---

## Criteri di successo

Il progetto è da considerarsi riuscito quando:

1. **Gerarchia**: un visitatore che legge la Home per 60 secondi sa distinguere AEGIDA (brand), H4R (azienda) e Privacy Phone (prodotto).
2. **Coerenza**: tutte le pagine italiane rispettano le convenzioni di registro, maiuscole, anglicismi e claim proibiti.
3. **Focalizzazione**: Privacy Phone è visibilmente il flagship; Framework è chiaramente in preparazione.
4. **CTA uniche**: tutte le pagine hanno la stessa CTA primaria «Richiedi un colloquio».
5. **Nessun claim proibito** nel testo IT finale (verificabile con grep).
6. **Accenti corretti** in tutte le stringhe IT (è, più, già, perché — mai apostrofi).
7. **EN e DE** non vengono toccati in Fase 1: restano nel loro stato precedente. Il language switcher mostra l'avviso «EN/DE aggiornamento in corso». L'internalizzazione temporanea di EN/DE con testi disallineati dall'italiano aggiornato è accettata come debito esplicito, da sanare in Fase 2.

---

## Fuori scope di questo progetto

- Redesign visivo (Progetto 2): palette, tipografia, animazioni, layout
- Riscrittura white paper UFED (Progetto 3)
- Traduzione EN/DE (Fase 2 di questo stesso progetto, dopo approvazione IT)
- Revisione editoriale degli articoli di blog esistenti
- Modifiche SEO (meta tags, schema markup, sitemap.xml) — rivalutare dopo che i contenuti sono stabili

---

## Dipendenze tra progetti

- **Progetto 2 (Redesign visivo)** parte quando il copy IT di questo progetto è approvato e in produzione. La palette, la tipografia e il layout del Progetto 2 si applicheranno al copy stabilizzato qui.
- **Progetto 3 (White paper)** parte dopo il Progetto 2 così da riflettere sia il registro aggiornato che il design system.
