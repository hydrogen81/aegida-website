# Bonifica Comunicazione AEGIDA — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Riallineare la comunicazione italiana del sito aegida-systems.com alla gerarchia prodotti decisa (AEGIDA brand di H4R, Privacy Phone flagship 2026, Framework piattaforma 2027-2028, Connect/Inspector come capability del Privacy Phone) e al registro editoriale giornalistico-sobrio.

**Architecture:** Static export Next.js 14 con i18n in file TypeScript (`lib/i18n/locales/*.ts`). Pagine sono componenti React che consumano il dizionario via hook `useTranslations`. La bonifica tocca principalmente il dizionario italiano e i componenti di pagina; le stringhe EN e DE restano invariate in questa fase.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion. Deploy: FTP su Aruba via `bash deploy.sh`.

**Scope check:** Questa spec riguarda SOLO il Progetto 1 (comunicazione). I Progetti 2 (Redesign visivo) e 3 (White paper) hanno spec e piani separati e non sono toccati qui.

**Spec di riferimento:** `docs/superpowers/specs/2026-04-20-bonifica-comunicazione-design.md`

---

## File Structure

### File che vengono MODIFICATI
- `lib/i18n/locales/it.ts` — riscrittura sostanziale delle sezioni nav/home/privacyPhone/framework/footer/contact; aggiunta nuova sezione `about`
- `components/Navigation.tsx` — nuovo ordine menu, aggiunta voce "Chi siamo", rimozione voci "Prodotti" "Settori" "Conformità" dal menu primario (Conformità resta accessibile da footer)
- `components/HomeContent.tsx` — restruttura sezioni (rimuove doppioni, introduce linea prodotti asimmetrica)
- `components/PrivacyPhoneContent.tsx` — consolida Connect e Inspector come capability inline (sezione unica "Cosa include")
- `components/FrameworkContent.tsx` — riduzione drastica a one-pager (da ~700 righe a ~100)
- `components/Footer.tsx` — aggiunta micro-testo istituzionale H4R, sposta link Conformità nel footer
- `components/ContactForm.tsx` — revisione micro-copy labels (Oggetto→Motivo, aggiunta Ruolo professionale)

### File CREATI (nuovi)
- `components/AboutContent.tsx` — componente pagina Chi siamo
- `app/[locale]/chi-siamo/page.tsx` — route Next.js per la nuova pagina
- `app/[locale]/chi-siamo/layout.tsx` — layout pagina se serve per metadata
- `docs/framework-archive-2026-04/README.md` — indice archivio Framework

### File ARCHIVIATI (spostati, non cancellati)
- `components/AegidaConnectContent.tsx` → `lib/archived/AegidaConnectContent.tsx` (con commento che spiega perché)
- `app/[locale]/aegida-connect/` → rimosso (404 su quell'URL, resta accettabile: la voce era già commentata nel menu)
- Contenuto attuale `FrameworkContent.tsx` (versione completa pre-bonifica) → `docs/framework-archive-2026-04/FrameworkContent-original.tsx`

### File INVARIATI
- `lib/i18n/locales/en.ts`, `lib/i18n/locales/de.ts` — Fase 2
- Tutti i componenti blog
- `components/PolicyContent.tsx` (cookie/privacy policy)
- `components/ContactForm.tsx` logica invio — solo micro-copy cambia

---

## Convenzioni di commit

Ogni task termina con un commit. Usare prefissi:
- `copy:` — solo modifiche ai testi (it.ts)
- `refactor:` — ristrutturazione componenti senza modifiche semantiche
- `feat:` — nuove pagine/componenti (chi-siamo)
- `chore:` — archiviazione file

Tutti i commit con trailer `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.

---

## Test & verification strategy

Per un sito content-heavy la TDD tradizionale non si applica al copy. Usare questi verificatori al posto dei test unit:

1. **Build check**: `npm run build` deve completare senza errori TypeScript
2. **Grep asserzioni negative**: dopo ogni task di copy, assicurarsi che claim vietati NON siano presenti
3. **Grep asserzioni positive**: verificare che le stringhe chiave nuove siano presenti
4. **Visual check finale**: `npm run dev` e ispezione manuale delle pagine toccate
5. **Accent check**: script `grep -n "e'\|piu'\|gia'\|perche'"` non deve trovare nulla in IT

---

### Task 1: Setup branch e survey iniziale

**Scopo:** Creare branch dedicato, documentare lo stato di partenza, identificare i riferimenti incrociati che potrebbero spezzarsi durante la bonifica.

**Files:**
- Nessuna modifica; solo git + lettura

- [ ] **Step 1: Verificare stato git pulito**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
git status
```
Expected: working tree clean (o note cosa c'è di unstaged prima di procedere)

- [ ] **Step 2: Creare branch feature**

```bash
git checkout -b feature/bonifica-comunicazione-ita
```

- [ ] **Step 3: Grep per riferimenti ad aegida-connect nel codice**

Eseguire:
```bash
grep -rn "aegida-connect\|AegidaConnect\|aegidaConnect" --include="*.tsx" --include="*.ts" .
```

Annotare i file che contengono riferimenti. Verranno toccati nei task successivi per ripulire gli import.

- [ ] **Step 4: Grep per riferimenti ai claim vietati**

Eseguire baseline che servirà a confrontare a fine progetto:
```bash
grep -rn "non puoi permetterti\|soluzione completa\|leader\|rivoluzionario\|game-changer\|best-in-class\|unleash\|empower" lib/i18n/locales/it.ts components/ | wc -l
```

Annotare il numero come baseline. A fine progetto deve essere `0`.

- [ ] **Step 5: Commit vuoto di bookmark (opzionale)**

```bash
git commit --allow-empty -m "chore: start bonifica comunicazione IT

Baseline survey complete. See docs/superpowers/specs/2026-04-20-bonifica-comunicazione-design.md

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Archiviare il componente AegidaConnect e la sua route

**Scopo:** Rimuovere la presenza di Connect come prodotto standalone dal sito, spostando il codice in `lib/archived/` (non cancellato, riutilizzabile in futuro).

**Files:**
- Move: `components/AegidaConnectContent.tsx` → `lib/archived/AegidaConnectContent.tsx`
- Delete: `app/[locale]/aegida-connect/` (intera cartella)
- Create: `lib/archived/README.md`

- [ ] **Step 1: Creare la directory archived**

```bash
mkdir -p lib/archived
```

- [ ] **Step 2: Creare README dell'archivio**

Scrivere `lib/archived/README.md`:

```markdown
# Componenti archiviati

Questa cartella contiene componenti rimossi dal sito pubblico ma conservati
per eventuale riutilizzo futuro.

## AegidaConnectContent.tsx

Rimosso il 2026-04-20 durante la bonifica della comunicazione.
Motivo: Connect è stato riposizionato come capability inclusa nel Privacy Phone
invece che come prodotto standalone.
Riutilizzare solo se/quando Connect diventerà un prodotto venduto a sé,
e in ogni caso dopo aggiornamento del copy alle convenzioni editoriali 2026.

Vedi: docs/superpowers/specs/2026-04-20-bonifica-comunicazione-design.md
```

- [ ] **Step 3: Spostare il componente**

```bash
git mv components/AegidaConnectContent.tsx lib/archived/AegidaConnectContent.tsx
```

- [ ] **Step 4: Rimuovere la route**

```bash
git rm -r "app/[locale]/aegida-connect/"
```

- [ ] **Step 5: Verificare che nessun import attivo rimanga**

```bash
grep -rn "AegidaConnectContent" --include="*.tsx" --include="*.ts" . | grep -v "lib/archived/"
```
Expected: nessuna occorrenza (se ne trovi, vanno rimosse prima di continuare)

- [ ] **Step 6: Verificare build**

```bash
npm run build
```
Expected: build success. Se fallisce per un import rotto, rimuovere l'import dal file segnalato.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: archive aegida-connect component and route

Connect becomes a capability of Privacy Phone, not a standalone product.
Component preserved in lib/archived/ for future reuse.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Archiviare contenuto tecnico completo del Framework

**Scopo:** Preservare la versione ricca attuale del FrameworkContent per rilancio commerciale 2027-2028, prima di ridurla a one-pager.

**Files:**
- Create: `docs/framework-archive-2026-04/README.md`
- Create: `docs/framework-archive-2026-04/FrameworkContent-original.tsx` (copia della versione attuale)
- Create: `docs/framework-archive-2026-04/it-framework-strings-original.md` (copia sezione framework da it.ts)

- [ ] **Step 1: Creare directory archivio**

```bash
mkdir -p docs/framework-archive-2026-04
```

- [ ] **Step 2: Copiare il componente attuale**

```bash
cp components/FrameworkContent.tsx docs/framework-archive-2026-04/FrameworkContent-original.tsx
```

- [ ] **Step 3: Estrarre la sezione `framework` da it.ts**

Aprire `lib/i18n/locales/it.ts`, individuare l'oggetto `framework: { ... }` e copiarne tutto il contenuto (include tutte le sottosezioni) in:

`docs/framework-archive-2026-04/it-framework-strings-original.md`

Formato del file:

```markdown
# Stringhe framework — versione pre-bonifica 2026-04-20

Copia letterale della sezione `framework` di `lib/i18n/locales/it.ts` prima
della riduzione a one-pager. Conservata per rilancio commerciale 2027-2028.

\`\`\`typescript
framework: {
  // ... contenuto completo copiato qui
}
\`\`\`
```

- [ ] **Step 4: Scrivere README dell'archivio**

Creare `docs/framework-archive-2026-04/README.md`:

```markdown
# Archivio AEGIDA Framework — versione 2026-04

## Cosa contiene

Versione completa del componente e del copy della pagina `/framework`
al 2026-04-20, prima della riduzione a one-pager sobria decisa nel
pivot strategico 2026.

File:
- `FrameworkContent-original.tsx` — componente completo (10 sezioni)
- `it-framework-strings-original.md` — stringhe italiane complete

## Quando riutilizzare

Nel 2027-2028, quando il Framework si avvicinerà al lancio commerciale e
saranno disponibili certificazioni ACN e reference clienti. A quel punto:

1. Rivedere il copy alla luce delle convenzioni editoriali vigenti
2. Reintegrare le sezioni dentro `components/FrameworkContent.tsx`
3. Aggiornare la pagina `/framework` da one-pager a pagina prodotto completa

## Motivazione dell'archiviazione

Vedi: `docs/superpowers/specs/2026-04-20-bonifica-comunicazione-design.md`
```

- [ ] **Step 5: Commit**

```bash
git add docs/framework-archive-2026-04/
git commit -m "chore: archive Framework original content for 2027 relaunch

Preserves pre-bonifica version of FrameworkContent component and IT copy
strings before simplification to one-pager. To be reused in 2027-2028
when Framework approaches commercial launch.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Riscrittura stringhe `nav` in it.ts

**Scopo:** Aggiornare il menu header con il nuovo ordine e le etichette coerenti.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — sezione `nav`

- [ ] **Step 1: Leggere la sezione `nav` attuale**

Aprire `lib/i18n/locales/it.ts` e trovare l'oggetto `nav: { ... }`. Annotare tutte le chiavi esistenti.

- [ ] **Step 2: Sostituire la sezione `nav` con questa versione definitiva**

Nuovo contenuto (sostituire l'oggetto `nav` esistente preservandone la posizione e la sintassi TypeScript):

```typescript
nav: {
  privacyPhone: 'Privacy Phone',
  framework: 'Framework',
  blog: 'Blog',
  chiSiamo: 'Chi siamo',
  contatti: 'Contatti',
  richiedi: 'Richiedi un colloquio',
  // Voci deprecate (tenute per compatibilità transitoria, rimuovibili dopo Task 16):
  prodotti: 'Prodotti',
  settori: 'Settori',
  conformita: 'Conformità',
  aegidaConnect: 'Connect',
},
```

- [ ] **Step 3: Verificare TypeScript**

```bash
npm run build
```
Expected: build success (potrebbe fallire se en.ts/de.ts sono tipizzati strettamente; in quel caso vedi Step 4).

- [ ] **Step 4: Se build fallisce per missing keys in en/de**

Aggiungere stringhe equivalenti in `lib/i18n/locales/en.ts` e `lib/i18n/locales/de.ts` con valori identici a IT (saranno adattati in Fase 2). Solo se necessario.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n/locales/
git commit -m "copy: update nav labels for new site structure (IT)

New primary menu: Privacy Phone · Framework · Blog · Chi siamo · Contatti.
Keeps legacy keys temporarily for compatibility until Navigation.tsx is updated.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Riscrittura sezione `home` in it.ts

**Scopo:** Sostituire tutto il copy della home con le stringhe sobrie concordate.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — sezione `home`

- [ ] **Step 1: Sostituire la sezione `home` con questa versione definitiva**

```typescript
home: {
  hero: {
    title: 'Cellebrite UFED, 17 aprile 2026: nessun dato utente estratto.',
    subtitle: 'AEGIDA è il brand di sicurezza di H4R. Progetta e produce strumenti per chi opera con informazioni sensibili.',
    ctaPrimary: 'Richiedi un colloquio',
    ctaSecondary: 'Scarica il white paper UFED',
  },
  istituzionale: {
    body: 'AEGIDA è il brand di sicurezza di H4R (Human for Research Srl). Progetta e produce strumenti per chi opera con informazioni sensibili: giornalisti, avvocati, dirigenti, figure pubbliche esposte. I prodotti sono testati con metodologia documentata e costruiti in Italia.',
  },
  prodotti: {
    label: 'Cosa produciamo',
    privacyPhone: {
      name: 'AEGIDA Privacy Phone',
      claim: 'Smartphone rafforzato su base Pixel 10a. Testato con Cellebrite UFED il 17 aprile 2026: 0 dati utente estratti.',
      cta: 'Scopri Privacy Phone',
    },
    framework: {
      name: 'AEGIDA Framework',
      claim: 'Piattaforma di sicurezza per infrastrutture critiche. In preparazione per il lancio commerciale 2027-2028.',
      cta: 'Stato del progetto',
    },
  },
  proofPreview: {
    label: 'Test forense',
    title: 'Il test UFED del 17 aprile 2026',
    body: 'Una società italiana di analisi forense ha tentato l\'estrazione dati da un AEGIDA Privacy Phone con Cellebrite UFED 10.8.0.322 e modulo Turbo Link. Il test è stato condotto sia in modalità Locked (BFU — Before First Unlock) sia in modalità Unlocked (AFU — After First Unlock) con codice di sblocco fornito. Esito: 0 dati utente estratti.',
    cta: 'Leggi il test completo',
  },
  ctaFinale: {
    title: 'Parla con chi ha progettato AEGIDA.',
    subtitle: 'Le decisioni importanti sulla sicurezza del tuo lavoro non si prendono tramite un modulo di contatto generico. Richiedi un colloquio.',
    cta: 'Richiedi un colloquio',
  },
},
```

- [ ] **Step 2: Grep per claim vietati**

```bash
grep -n "non puoi permetterti\|soluzione completa\|leader\|rivoluzionario\|game-changer\|best-in-class" lib/i18n/locales/it.ts
```
Expected: nessuna occorrenza nella sezione `home` (altri punti verranno ripuliti nei task dedicati).

- [ ] **Step 3: Verifica accenti**

```bash
grep -n "e'\|piu'\|gia'\|perche'\|cio'\|puo'" lib/i18n/locales/it.ts | head -20
```
Expected: nessuna occorrenza nelle nuove stringhe appena introdotte. Se trova qualcosa, correggere con gli accenti tipografici corretti (è, più, già, perché, ciò, può).

- [ ] **Step 4: Verifica build**

```bash
npm run build
```
Expected: success.

- [ ] **Step 5: Commit**

```bash
git add lib/i18n/locales/it.ts
git commit -m "copy: rewrite home section with sobre journalistic register (IT)

Removes oversold claims, unifies hierarchy (AEGIDA brand of H4R,
Privacy Phone as flagship 2026, Framework in preparation).
Single primary CTA: 'Richiedi un colloquio'.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Riscrittura sezione `privacyPhone` in it.ts

**Scopo:** Consolidare Connect e Inspector come capability inline, riscrivere il resto con registro sobrio, mantenere Proof UFED e Pricing già buoni.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — sezione `privacyPhone`

- [ ] **Step 1: Leggere la sezione `privacyPhone` attuale**

Scorrere tutto `privacyPhone: { ... }` per capire quali chiavi esistono già. Le sottosezioni "proof" (test UFED) e "pricing" contengono copy già approvato e vanno mantenute il più possibile, solo con correzioni terminologiche puntuali.

- [ ] **Step 2: Sostituire la sezione `privacyPhone` con questa versione**

```typescript
privacyPhone: {
  hero: {
    title: 'AEGIDA Privacy Phone',
    tagline: 'Smartphone rafforzato su base Pixel 10a, con sistema operativo derivato e indurito da AEGIDA.',
    claim: 'Cellebrite UFED 10.8.0.322, 17 aprile 2026: nessun dato utente estratto.',
    ctaPrimary: 'Richiedi un colloquio',
    ctaSecondary: 'Scarica il white paper UFED',
  },
  cosaE: {
    label: 'Cos\'è',
    body: 'Il Privacy Phone è pensato per chi lavora con informazioni sensibili e non può accettare che il dispositivo sia un punto debole: giornalisti investigativi, avvocati che trattano dossier delicati, dirigenti che viaggiano in contesti ostili, figure pubbliche esposte, dirigenti di ONG. Non è un «telefono sicuro» generico: è uno strumento operativo, con metodologia di test documentata e supporto dedicato.',
  },
  cosaInclude: {
    label: 'Cosa include',
    title: 'Il pacchetto AEGIDA Privacy Phone',
    items: [
      {
        key: 'hardware',
        title: 'Hardware rafforzato',
        body: 'Base Pixel 10a (Google Tensor G4, 8 GB RAM). Firmware originale rimosso; installato sistema operativo derivato, indurito da AEGIDA, con verified boot e chiavi proprietarie. Il dispositivo arriva al cliente già configurato e sigillato.',
      },
      {
        key: 'connect',
        title: 'Connect — messaggistica cifrata',
        body: 'Comunicazione diretta tra dispositivi AEGIDA con cifratura post-quantum (ML-KEM FIPS 203). Nessun server centrale di instradamento: i messaggi passano solo tra i dispositivi coinvolti.',
      },
      {
        key: 'inspector',
        title: 'Inspector — attestazione integrità',
        body: 'App di verifica dell\'integrità hardware, basata su fork di GrapheneOS Auditor. Permette di confermare crittograficamente che il dispositivo non sia stato manomesso dall\'ultima verifica. Un secondo dispositivo di fiducia funge da verificatore.',
      },
      {
        key: 'supporto',
        title: 'Supporto e formazione',
        body: '12 mesi di supporto via canale cifrato con tempi di risposta definiti. Formazione utente remota (in sede per ordini multi-dispositivo). Re-hardening annuale nel pacchetto di rinnovo.',
      },
    ],
  },
  proof: {
    // MANTENERE il contenuto esistente della sezione proof.
    // Modifiche puntuali da applicare al copy esistente:
    // 1. Ogni occorrenza di "bundle" → "pacchetto"
    // 2. Ogni occorrenza isolata di "0 dati" → "0 dati utente"
    // 3. Alla prima occorrenza di BFU nel testo, assicurarsi di avere la glossa
    //    "BFU — Before First Unlock" (stessa cosa per AFU).
    // Non toccare i titoli di sezione già giornalistici.
    // [MANTENERE LE CHIAVI ESISTENTI]
  },
  pricing: {
    label: 'Prezzi',
    title: 'Pacchetto primo anno e rinnovi',
    packages: [
      {
        name: 'Pacchetto primo anno',
        price: '3.900 €',
        description: 'Hardware + configurazione AEGIDA Connect + Inspector + 12 mesi supporto + formazione utente',
        highlighted: true,
      },
      {
        name: 'Rinnovo annuale',
        price: '690 € / anno',
        description: 'Aggiornamenti sicurezza, supporto cifrato continuato, re-hardening annuale, incident response entry-level',
        highlighted: false,
      },
    ],
    business: {
      title: 'Ordini multi-dispositivo',
      body: 'Per studi legali, redazioni, ONG e team aziendali con 5 o più dispositivi sono disponibili condizioni dedicate. Il preventivo è personalizzato in base al numero di dispositivi, alle esigenze di MDM e alla formazione richiesta.',
      cta: 'Richiedi preventivo',
    },
  },
  metodologia: {
    label: 'Metodologia',
    title: 'Come testiamo ciò che dichiariamo',
    body: 'Il test del 17 aprile 2026 è stato condotto da una società italiana di analisi forense certificata con un operatore con certificazione International Master Counter Surveillance Technical. Lo strumento utilizzato è Cellebrite Inseyets UFED 10.8.0.322 con modulo Turbo Link. Il dispositivo è stato testato sia in modalità Locked (BFU — Before First Unlock) sia in modalità Unlocked (AFU — After First Unlock) con codice di sblocco fornito. Il test non ha estratto dati utente in nessuna delle due modalità. La metodologia completa, gli screenshot del software e la timeline sono nel white paper PDF in download.',
  },
  disclaimer: {
    // MANTENERE il disclaimer esistente (D.Lgs. 145/2007, art. 70 L. 633/1941, legal@aegida-systems.com)
  },
  ctaFinale: {
    title: 'Richiedi un colloquio',
    body: 'Per scegliere un AEGIDA Privacy Phone non serve un carrello. Serve un colloquio in cui capire se è lo strumento giusto per il tuo caso, in che configurazione, con quale formazione. Scriviamoci.',
    cta: 'Richiedi un colloquio',
  },
},
```

**NOTA IMPORTANTE per l'esecutore:** le sottosezioni `proof` e `disclaimer` hanno contenuto già approvato nella versione attuale. NON sovrascriverle con oggetti vuoti. Copiare l'oggetto esistente e applicare solo le correzioni puntuali indicate nei commenti.

- [ ] **Step 3: Applicare le correzioni puntuali su `proof`**

Sulla sottosezione `privacyPhone.proof` esistente:

```bash
# Da eseguire solo dentro l'oggetto proof, non su tutto il file:
# Sostituire "bundle" → "pacchetto" (manuale, cerca nel blocco proof)
# Sostituire "0 dati" isolato (senza "utente") → "0 dati utente"
```

Aprire il file e fare sostituzioni manuali cercando nel blocco `proof: { ... }` letteralmente:
- `"bundle"` → `"pacchetto"`
- `"Bundle"` → `"Pacchetto"`
- Ogni `0 dati` che non sia seguito da `utente` → `0 dati utente`

- [ ] **Step 4: Grep per claim vietati nella sezione**

```bash
grep -n "non puoi permetterti\|soluzione completa\|leader\|rivoluzionario\|game-changer\|best-in-class" lib/i18n/locales/it.ts
```
Expected: nessuna occorrenza.

- [ ] **Step 5: Verifica accenti**

```bash
grep -n "e'\|piu'\|gia'\|perche'\|cio'\|puo'" lib/i18n/locales/it.ts
```
Expected: nessuna occorrenza.

- [ ] **Step 6: Verifica build**

```bash
npm run build
```
Expected: success.

- [ ] **Step 7: Commit**

```bash
git add lib/i18n/locales/it.ts
git commit -m "copy: consolidate Connect/Inspector as Privacy Phone capabilities (IT)

Single 'Cosa include' section with 4 capabilities instead of standalone
product positioning. Preserves proof/disclaimer content with punctual
terminology fixes (bundle→pacchetto, 0 dati→0 dati utente, BFU/AFU gloss).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Riscrittura sezione `framework` in it.ts (riduzione a one-pager)

**Scopo:** Sostituire la sezione `framework` ricca con il copy della one-pager sobria.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — sezione `framework`

- [ ] **Step 1: Sostituire l'intera sezione `framework` con questa versione**

```typescript
framework: {
  hero: {
    title: 'AEGIDA Framework',
    tagline: 'Piattaforma di sicurezza per le reti di comunicazione di infrastrutture critiche.',
  },
  cosaE: {
    title: 'Cos\'è',
    body: 'AEGIDA Framework è una piattaforma pensata per le reti di comunicazione di infrastrutture critiche: energia, sanità, trasporti, pubblica amministrazione. Implementa cifratura post-quantum (ML-KEM FIPS 203), stratificazione con AES-256-GCM e un livello di stealth delle comunicazioni.',
  },
  perChi: {
    title: 'A chi serve',
    body: 'Agli operatori di servizi essenziali che devono rispondere a NIS2, DORA o normative equivalenti e gestiscono reti con requisiti di continuità e riservatezza su scala nazionale. Non è un prodotto orizzontale: ogni implementazione richiede analisi di contesto, integrazione con l\'infrastruttura esistente e governance dedicata.',
  },
  stato: {
    title: 'Stato 2026',
    body: 'Il Framework è in fase di qualificazione presso l\'Agenzia per la Cybersicurezza Nazionale ed è in dialogo con integrator di riferimento per il mercato italiano. Sono aperti pilot non paganti con operatori selezionati, in cambio di feedback strutturato sull\'integrazione.',
  },
  roadmap: {
    title: 'Roadmap 2027-2028',
    body: 'Il lancio commerciale è previsto nel biennio 2027-2028, quando saranno completate le certificazioni necessarie e saranno disponibili reference clienti tratti dai pilot in corso. Nel frattempo il nostro prodotto commerciale è AEGIDA Privacy Phone.',
  },
  ctaFinale: {
    title: 'Interessato a un pilot?',
    body: 'Se la tua organizzazione rientra fra gli operatori di servizi essenziali e ha un caso d\'uso concreto per il Framework, possiamo valutarlo insieme. I pilot sono limitati nel numero e selezionati su base tecnica.',
    cta: 'Richiedi contatto per un pilot',
  },
},
```

- [ ] **Step 2: Grep per claim vietati**

```bash
grep -n "non puoi permetterti\|soluzione completa\|leader\|rivoluzionario\|game-changer\|best-in-class" lib/i18n/locales/it.ts
```
Expected: nessuna occorrenza.

- [ ] **Step 3: Verifica accenti + build**

```bash
grep -n "e'\|piu'\|gia'\|perche'\|cio'\|puo'" lib/i18n/locales/it.ts
npm run build
```
Expected: zero accenti sbagliati, build success.

- [ ] **Step 4: Commit**

```bash
git add lib/i18n/locales/it.ts
git commit -m "copy: reduce Framework to one-pager with 2026-2028 roadmap (IT)

Framework content consolidated into 5 sections (cos'e, per chi, stato,
roadmap, CTA pilot). Full technical content archived in
docs/framework-archive-2026-04/ for 2027 relaunch.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Aggiungere nuova sezione `about` in it.ts

**Scopo:** Creare le stringhe della nuova pagina Chi Siamo.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — aggiunta sezione `about`

**NOTA:** L'anno di fondazione di H4R e i nomi/ruoli del team sono dati reali che l'esecutore NON deve inventare. Se non sono disponibili nel repo o nei memoria di progetto, lasciare i placeholder `[DA CONFERMARE: anno fondazione H4R]` e `[DA CONFERMARE: team]` e segnalarlo all'utente prima di commit. Il copy attorno a questi dati è già finalizzato.

- [ ] **Step 1: Verificare presenza di informazioni team e anno fondazione nel repo**

```bash
grep -rn "H4R\|Human for Research\|founded\|fondat" components/ lib/
```

Annotare cosa emerge. Se c'è qualcosa, usarlo nello step 2. Altrimenti usare placeholder.

- [ ] **Step 2: Aggiungere la sezione `about` in it.ts**

Inserire, dentro l'oggetto root del dizionario `it` (posizionata dopo `privacyPhone` e prima di `framework` in ordine alfabetico logico, ma qualunque posizione coerente va bene):

```typescript
about: {
  hero: {
    title: 'Chi siamo',
    subtitle: 'AEGIDA è il brand di sicurezza di H4R. Progetta e produce strumenti per chi opera con informazioni sensibili.',
  },
  societa: {
    title: 'La società',
    body: 'H4R (Human for Research Srl) è una società italiana con sede a Roma, fondata nel [DA CONFERMARE: anno fondazione H4R]. Opera nei settori della sicurezza informatica e della ricerca applicata. AEGIDA è il brand con cui H4R sviluppa e commercializza strumenti dedicati alla protezione delle comunicazioni.',
  },
  missione: {
    title: 'La missione',
    body: 'Gli strumenti di comunicazione di uso comune non sono progettati per chi lavora con informazioni sensibili. Messaggistica sincronizzata in chiaro, backup cloud automatici, estrazione forense consentita. La nostra missione è colmare quella distanza con prodotti testati, documentati e costruiti in Italia, a un prezzo accessibile a professionisti che non sono enti di Stato.',
  },
  cosaProduciamo: {
    title: 'Cosa produciamo',
    items: [
      {
        name: 'AEGIDA Privacy Phone',
        status: 'Prodotto commerciale 2026',
        body: 'Smartphone rafforzato su base Pixel 10a. Testato con Cellebrite UFED il 17 aprile 2026: 0 dati utente estratti.',
      },
      {
        name: 'AEGIDA Framework',
        status: 'Piattaforma infrastrutture critiche — lancio 2027-2028',
        body: 'Piattaforma di sicurezza per operatori di servizi essenziali sottoposti a NIS2, DORA o normative equivalenti.',
      },
    ],
  },
  team: {
    title: 'Il team',
    body: '[DA CONFERMARE: nomi e ruoli del team H4R/AEGIDA. Mantenere registro sobrio: niente claim motivazionali, solo nome, ruolo e, se utile, una riga di background professionale rilevante.]',
  },
  ctaFinale: {
    title: 'Parliamone',
    body: 'Se stai valutando AEGIDA per il tuo lavoro, la prima cosa da fare è un colloquio. Capiamo se siamo lo strumento giusto per il tuo caso.',
    cta: 'Richiedi un colloquio',
  },
},
```

- [ ] **Step 3: Verifica build**

```bash
npm run build
```
Expected: success.

- [ ] **Step 4: Commit**

```bash
git add lib/i18n/locales/it.ts
git commit -m "copy: add about section strings for new Chi Siamo page (IT)

Placeholder DA CONFERMARE for H4R founding year and team composition.
To be filled by user before final deploy.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: Riscrittura sezione `footer` in it.ts

**Scopo:** Micro-testo istituzionale che risolve l'identità AEGIDA/H4R.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — sezione `footer`

- [ ] **Step 1: Sostituire la sezione `footer` con questa versione**

```typescript
footer: {
  istituzionale: 'AEGIDA è il brand di sicurezza di H4R (Human for Research Srl). Roma, Italia.',
  payoff: 'PROGETTATO IN ITALIA.',
  nav: {
    privacyPhone: 'Privacy Phone',
    framework: 'Framework',
    chiSiamo: 'Chi siamo',
    blog: 'Blog',
    contatti: 'Contatti',
  },
  legale: {
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    conformita: 'Conformità normativa',
  },
  copyright: '© {year} H4R — Human for Research Srl. Tutti i diritti riservati.',
},
```

- [ ] **Step 2: Verifica build + accenti**

```bash
npm run build
grep -n "e'\|piu'\|gia'\|perche'" lib/i18n/locales/it.ts
```

- [ ] **Step 3: Commit**

```bash
git add lib/i18n/locales/it.ts
git commit -m "copy: rewrite footer with institutional micro-text H4R+AEGIDA (IT)

Resolves identity confusion by stating the brand-company relationship
at the bottom of every page.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: Revisione micro-copy `contact` in it.ts

**Scopo:** Trasformare il form da "Contattaci" generico a "Richiedi un colloquio" orientato alla vendita consulenziale.

**Files:**
- Modify: `lib/i18n/locales/it.ts` — sezione `contact` (o `contatti` / `contactForm` a seconda di come è chiamata)

- [ ] **Step 1: Identificare la chiave esistente**

Cercare nel file `it.ts` quale oggetto gestisce il form di contatto. Possibili nomi: `contact`, `contatti`, `contactForm`, `form`.

- [ ] **Step 2: Sostituire con questa versione definitiva**

Sostituire o integrare l'oggetto esistente con queste chiavi (adattare il nome della chiave radice a quello già presente):

```typescript
contact: {
  page: {
    title: 'Richiedi un colloquio',
    subtitle: 'Le decisioni sulla sicurezza del tuo lavoro non si prendono tramite un modulo generico. Raccontaci brevemente il tuo caso e fissiamo un colloquio.',
  },
  form: {
    labels: {
      nome: 'Nome e cognome',
      email: 'Email',
      ruolo: 'Ruolo professionale',
      motivo: 'Motivo del contatto',
    },
    placeholders: {
      nome: 'Mario Rossi',
      email: 'nome@dominio.it',
      ruolo: 'giornalista, avvocato, dirigente, altro',
      motivo: 'Descrivi sinteticamente la tua situazione.',
    },
    submit: 'Invia richiesta',
    consenso: 'Ho letto la Privacy Policy e acconsento al trattamento dei dati per essere ricontattato.',
    success: {
      title: 'Richiesta ricevuta',
      body: 'Ti risponderemo entro 2 giorni lavorativi all\'indirizzo che hai indicato.',
    },
    error: {
      generic: 'Non è stato possibile inviare la richiesta. Riprova tra qualche minuto o scrivi a info@aegida-systems.com.',
    },
  },
  diretti: {
    title: 'Oppure in modo diretto',
    email: 'info@aegida-systems.com',
    pec: '[DA CONFERMARE: PEC H4R se esiste]',
    legal: 'legal@aegida-systems.com (per esercizio del diritto di replica)',
  },
},
```

Se l'oggetto esistente ha già chiavi diverse per integrazione server (es. `recipientEmail`), NON toccarle.

- [ ] **Step 3: Verifica build + accenti + grep claim vietati**

```bash
npm run build
grep -n "e'\|piu'\|gia'\|perche'\|cio'\|puo'" lib/i18n/locales/it.ts
grep -n "contattaci\|contact us\|clicca qui\|scopri di più" lib/i18n/locales/it.ts
```
Expected: build success; nessun accento sbagliato; nessuna CTA generica residua (le occorrenze rimaste vanno ripulite manualmente).

- [ ] **Step 4: Commit**

```bash
git add lib/i18n/locales/it.ts
git commit -m "copy: rewrite contact form micro-copy for consulting sale (IT)

Shifts tone from generic 'Contattaci' to 'Richiedi un colloquio'.
Adds 'Ruolo professionale' field, renames 'Oggetto' to 'Motivo del contatto'.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: Refactor di `HomeContent.tsx`

**Scopo:** Adeguare la struttura a 5 sezioni del nuovo design (Hero, Istituzionale, Prodotti asimmetrica, Proof preview, CTA finale) consumando le nuove chiavi.

**Files:**
- Modify: `components/HomeContent.tsx`

- [ ] **Step 1: Leggere il file attuale**

Aprire `components/HomeContent.tsx` per vedere struttura esistente: probabilmente ha molte sezioni che non corrispondono alle nuove 5. Prendere nota delle sezioni JSX per decidere quali cancellare e quali riutilizzare come scheletro.

- [ ] **Step 2: Identificare import da rimuovere**

Se il file importa componenti che erano parte di sezioni ora soppresse (es. `ShieldSVG`, `ComparisonTable`, blocchi ripetuti), annotare per la rimozione. Se sono usati altrove, non importare in HomeContent ma non cancellare i file.

- [ ] **Step 3: Ristrutturare il componente in 5 sezioni**

Sostituire il corpo JSX del componente con questa struttura (adattando i nomi dei componenti visivi esistenti — il cambio stilistico vero è nel Progetto 2):

```tsx
export default function HomeContent() {
  const t = useTranslations() // adattare al pattern di hook esistente
  return (
    <>
      {/* 1. HERO */}
      <section id="hero" className="...">
        <h1>{t.home.hero.title}</h1>
        <p>{t.home.hero.subtitle}</p>
        <div className="flex gap-4">
          <a href={`/${locale}/contatti/`} className="...primary...">
            {t.home.hero.ctaPrimary}
          </a>
          <a href="/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf" className="...secondary...">
            {t.home.hero.ctaSecondary}
          </a>
        </div>
      </section>

      {/* 2. ISTITUZIONALE (2 righe) */}
      <section id="istituzionale" className="...">
        <p>{t.home.istituzionale.body}</p>
      </section>

      {/* 3. LINEA PRODOTTI (asimmetrica: Privacy Phone grande, Framework piccolo) */}
      <section id="prodotti" className="...">
        <h2>{t.home.prodotti.label}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Privacy Phone occupa 2/3 */}
          <a href={`/${locale}/privacy-phone/`} className="md:col-span-2 ...">
            <h3>{t.home.prodotti.privacyPhone.name}</h3>
            <p>{t.home.prodotti.privacyPhone.claim}</p>
            <span>{t.home.prodotti.privacyPhone.cta}</span>
          </a>
          {/* Framework occupa 1/3 */}
          <a href={`/${locale}/framework/`} className="...">
            <h3>{t.home.prodotti.framework.name}</h3>
            <p>{t.home.prodotti.framework.claim}</p>
            <span>{t.home.prodotti.framework.cta}</span>
          </a>
        </div>
      </section>

      {/* 4. PROOF UFED PREVIEW */}
      <section id="proof" className="...">
        <span className="label">{t.home.proofPreview.label}</span>
        <h2>{t.home.proofPreview.title}</h2>
        <p>{t.home.proofPreview.body}</p>
        <a href={`/${locale}/privacy-phone/#proof`}>
          {t.home.proofPreview.cta}
        </a>
      </section>

      {/* 5. CTA FINALE */}
      <section id="cta-finale" className="...">
        <h2>{t.home.ctaFinale.title}</h2>
        <p>{t.home.ctaFinale.subtitle}</p>
        <a href={`/${locale}/contatti/`} className="...primary...">
          {t.home.ctaFinale.cta}
        </a>
      </section>
    </>
  )
}
```

Classi Tailwind: riutilizzare quelle esistenti nel progetto (vedere `HomeContent.tsx` pre-refactor per pattern di spacing, container, typography). NON introdurre nuovo design system — quello arriva nel Progetto 2.

- [ ] **Step 4: Verifica TypeScript e build**

```bash
npm run build
```
Expected: success. Se fallisce per chiavi mancanti (es. `t.home.istituzionale.body`), verificare che Task 5 sia stato applicato correttamente.

- [ ] **Step 5: Verifica visiva in dev**

```bash
npm run dev
```

Aprire `http://localhost:3000/it/` e verificare:
- 5 sezioni presenti in ordine
- Nessun link rotto
- Nessun claim vietato visibile
- Le due CTA hero funzionano

- [ ] **Step 6: Commit**

```bash
git add components/HomeContent.tsx
git commit -m "refactor: restructure HomeContent into 5 sober sections

Hero + Istituzionale + Prodotti (asymmetric) + Proof preview + CTA finale.
Removes legacy sections (redundant product blocks, oversold claims).
Visual styling unchanged; Progetto 2 will address design system.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 12: Refactor di `PrivacyPhoneContent.tsx`

**Scopo:** Consolidare Connect e Inspector come elementi della sezione unificata "Cosa include"; preservare Proof e Pricing.

**Files:**
- Modify: `components/PrivacyPhoneContent.tsx`

- [ ] **Step 1: Leggere il file attuale**

Aprire `components/PrivacyPhoneContent.tsx`. Identificare:
- Sezione hero (riscrivere)
- Eventuali sezioni separate per Connect o Inspector (consolidare)
- Sezione Proof UFED (preservare + correzioni)
- Sezione Pricing (preservare + correzioni)
- Sezione Metodologia (riscrivere)
- Sezione CTA finale (riscrivere)

- [ ] **Step 2: Sostituire hero e cosa-è**

Sezione hero nel JSX — sostituire con:

```tsx
<section id="hero" className="...">
  <h1>{t.privacyPhone.hero.title}</h1>
  <p className="tagline">{t.privacyPhone.hero.tagline}</p>
  <p className="claim">{t.privacyPhone.hero.claim}</p>
  <div className="flex gap-4">
    <a href={`/${locale}/contatti/`} className="...primary...">
      {t.privacyPhone.hero.ctaPrimary}
    </a>
    <a href="/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf" className="...secondary...">
      {t.privacyPhone.hero.ctaSecondary}
    </a>
  </div>
</section>

<section id="cosa-e" className="...">
  <span className="label">{t.privacyPhone.cosaE.label}</span>
  <p>{t.privacyPhone.cosaE.body}</p>
</section>
```

- [ ] **Step 3: Sostituire sezioni legacy Connect/Inspector con "Cosa include" unificata**

Cercare nel JSX eventuali sezioni separate intitolate "Connect", "Inspector", "Messaggistica", "Attestazione". Sostituirle con una sezione unica:

```tsx
<section id="cosa-include" className="...">
  <span className="label">{t.privacyPhone.cosaInclude.label}</span>
  <h2>{t.privacyPhone.cosaInclude.title}</h2>
  <div className="grid md:grid-cols-2 gap-6">
    {t.privacyPhone.cosaInclude.items.map((item) => (
      <div key={item.key} className="card">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 4: Preservare sezione Proof**

La sezione Proof nel JSX attuale va mantenuta AS-IS (contenuto + componente test-card + timeline + screenshot). Solo verificare che le stringhe che consuma siano state aggiornate nel Task 6 (bundle→pacchetto, 0 dati→0 dati utente).

- [ ] **Step 5: Preservare/aggiornare Pricing**

Sostituire solo il titolo e l'etichetta `bundle` dove compare. Il JSX strutturale resta. Se la sezione Pricing itera su `t.privacyPhone.pricing.packages`, verificare che l'array aggiornato in Task 6 abbia `name`, `price`, `description`, `highlighted` — se il JSX si aspetta altre chiavi, adattare.

- [ ] **Step 6: Sostituire sezione Metodologia**

```tsx
<section id="metodologia" className="...">
  <span className="label">{t.privacyPhone.metodologia.label}</span>
  <h2>{t.privacyPhone.metodologia.title}</h2>
  <p>{t.privacyPhone.metodologia.body}</p>
</section>
```

- [ ] **Step 7: Sostituire CTA finale**

```tsx
<section id="cta-finale" className="...">
  <h2>{t.privacyPhone.ctaFinale.title}</h2>
  <p>{t.privacyPhone.ctaFinale.body}</p>
  <a href={`/${locale}/contatti/`} className="...primary...">
    {t.privacyPhone.ctaFinale.cta}
  </a>
</section>
```

- [ ] **Step 8: Verifica build e preview**

```bash
npm run build
npm run dev
```

Aprire `http://localhost:3000/it/privacy-phone/`. Verificare:
- Hero, Cos'è, Cosa include (4 card), Proof UFED, Pricing, Metodologia, Disclaimer, CTA finale
- Nessuna sezione duplicata o orfana
- Link download white paper funziona

- [ ] **Step 9: Commit**

```bash
git add components/PrivacyPhoneContent.tsx
git commit -m "refactor: consolidate Connect/Inspector into 'Cosa include' section

Single unified capability section replaces separate Connect and Inspector
blocks. Preserves proof UFED and pricing sections with terminology fixes.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 13: Riscrittura completa di `FrameworkContent.tsx` come one-pager

**Scopo:** Sostituire le ~10 sezioni dense con 5 blocchi brevi.

**Files:**
- Modify: `components/FrameworkContent.tsx`

- [ ] **Step 1: Verificare backup esistente**

Confermare che `docs/framework-archive-2026-04/FrameworkContent-original.tsx` esista (creato in Task 3). Se manca, rifare Task 3 Step 2 prima di procedere.

- [ ] **Step 2: Riscrivere il componente da zero**

Sostituire il contenuto di `components/FrameworkContent.tsx` con:

```tsx
'use client'

import { useTranslations } from '@/lib/i18n/useTranslations' // adattare al pattern esistente
import { useParams } from 'next/navigation'

export default function FrameworkContent() {
  const t = useTranslations()
  const { locale } = useParams() as { locale: string }

  return (
    <main>
      {/* HERO */}
      <section id="hero" className="...">
        <h1>{t.framework.hero.title}</h1>
        <p className="tagline">{t.framework.hero.tagline}</p>
      </section>

      {/* 4 PARAGRAFI */}
      <section className="...">
        <div className="prose">
          <h2>{t.framework.cosaE.title}</h2>
          <p>{t.framework.cosaE.body}</p>

          <h2>{t.framework.perChi.title}</h2>
          <p>{t.framework.perChi.body}</p>

          <h2>{t.framework.stato.title}</h2>
          <p>{t.framework.stato.body}</p>

          <h2>{t.framework.roadmap.title}</h2>
          <p>{t.framework.roadmap.body}</p>
        </div>
      </section>

      {/* CTA PILOT */}
      <section id="cta-pilot" className="...">
        <h2>{t.framework.ctaFinale.title}</h2>
        <p>{t.framework.ctaFinale.body}</p>
        <a href={`/${locale}/contatti/?motivo=framework-pilot`} className="...primary...">
          {t.framework.ctaFinale.cta}
        </a>
      </section>
    </main>
  )
}
```

- [ ] **Step 3: Rimuovere import non più usati**

Il vecchio `FrameworkContent.tsx` probabilmente importava `ComparisonTable`, `LayerDiagram`, `PacketInspector`, `SpecsTable`, etc. Rimuovere gli import non più referenziati. Non cancellare i file — restano utili per altre pagine o per il rilancio 2027.

- [ ] **Step 4: Verifica build**

```bash
npm run build
npm run dev
```

Aprire `http://localhost:3000/it/framework/`. Verificare:
- Pagina è visibilmente una one-pager (scroll breve)
- 4 paragrafi presenti
- CTA finale porta a contatti

- [ ] **Step 5: Commit**

```bash
git add components/FrameworkContent.tsx
git commit -m "refactor: reduce FrameworkContent to one-pager (5 sections)

Consolidates from ~700 to ~60 lines. Full tech content preserved in
docs/framework-archive-2026-04/ for 2027 commercial relaunch.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 14: Creare `AboutContent.tsx`

**Scopo:** Componente React della nuova pagina Chi Siamo.

**Files:**
- Create: `components/AboutContent.tsx`

- [ ] **Step 1: Scrivere il nuovo componente**

Creare `components/AboutContent.tsx`:

```tsx
'use client'

import { useTranslations } from '@/lib/i18n/useTranslations' // adattare al pattern esistente
import { useParams } from 'next/navigation'

export default function AboutContent() {
  const t = useTranslations()
  const { locale } = useParams() as { locale: string }

  return (
    <main>
      {/* HERO */}
      <section id="hero" className="...">
        <h1>{t.about.hero.title}</h1>
        <p className="subtitle">{t.about.hero.subtitle}</p>
      </section>

      {/* SOCIETÀ */}
      <section id="societa" className="...">
        <h2>{t.about.societa.title}</h2>
        <p>{t.about.societa.body}</p>
      </section>

      {/* MISSIONE */}
      <section id="missione" className="...">
        <h2>{t.about.missione.title}</h2>
        <p>{t.about.missione.body}</p>
      </section>

      {/* COSA PRODUCIAMO */}
      <section id="cosa-produciamo" className="...">
        <h2>{t.about.cosaProduciamo.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.about.cosaProduciamo.items.map((item) => (
            <div key={item.name} className="card">
              <h3>{item.name}</h3>
              <p className="status">{item.status}</p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="...">
        <h2>{t.about.team.title}</h2>
        <p>{t.about.team.body}</p>
      </section>

      {/* CTA FINALE */}
      <section id="cta-finale" className="...">
        <h2>{t.about.ctaFinale.title}</h2>
        <p>{t.about.ctaFinale.body}</p>
        <a href={`/${locale}/contatti/`} className="...primary...">
          {t.about.ctaFinale.cta}
        </a>
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Verificare pattern import**

Controllare come gli altri componenti (es. `PrivacyPhoneContent.tsx`) accedono a `t` e `locale`. Replicare esattamente lo stesso pattern (potrebbe essere via context provider o hook custom invece di `useParams`).

- [ ] **Step 3: Verifica build**

```bash
npm run build
```
Expected: success. Se fallisce per chiavi mancanti, verificare che Task 8 sia stato applicato.

- [ ] **Step 4: Commit**

```bash
git add components/AboutContent.tsx
git commit -m "feat: add AboutContent component for new Chi Siamo page

6 sections: hero, societa, missione, cosa produciamo, team, CTA.
Consumes t.about strings defined in Task 8.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 15: Creare route `app/[locale]/chi-siamo/page.tsx`

**Scopo:** Route Next.js per la nuova pagina.

**Files:**
- Create: `app/[locale]/chi-siamo/page.tsx`
- Create (se il pattern del progetto lo richiede): `app/[locale]/chi-siamo/layout.tsx` per metadata

- [ ] **Step 1: Studiare il pattern esistente**

Aprire `app/[locale]/privacy-phone/page.tsx` per vedere esattamente come la route consuma il componente di contenuto. Replicare identica struttura.

- [ ] **Step 2: Scrivere `app/[locale]/chi-siamo/page.tsx`**

Adattare al pattern esistente. Esempio se privacy-phone usa questo pattern:

```tsx
import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'
import { getTranslations } from '@/lib/i18n/getTranslations' // adattare

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Chi siamo — AEGIDA',
    description: 'AEGIDA è il brand di sicurezza di H4R. Progetta e produce strumenti per chi opera con informazioni sensibili.',
    alternates: {
      canonical: `/${locale}/chi-siamo/`,
    },
  }
}

export default function Page() {
  return <AboutContent />
}
```

**IMPORTANTE:** usare esattamente lo stesso pattern di `privacy-phone/page.tsx` — se usa `generateMetadata` sincrono, se importa il componente con `'use client'` o meno, se ha un `layout.tsx` dedicato.

- [ ] **Step 3: Verifica build**

```bash
npm run build
```

Verificare che la route sia stata generata nella out/ directory. Se build usa `output: 'export'`, cercare `out/it/chi-siamo/index.html`.

- [ ] **Step 4: Verifica in dev**

```bash
npm run dev
```

Aprire `http://localhost:3000/it/chi-siamo/`. Verificare che tutte e 6 le sezioni siano visibili e che il placeholder `[DA CONFERMARE]` sia ancora presente nei punti previsti (ricordarsi di notificare all'utente).

- [ ] **Step 5: Commit**

```bash
git add "app/[locale]/chi-siamo/"
git commit -m "feat: add /chi-siamo route with AboutContent

New institutional page resolving AEGIDA/H4R/products hierarchy.
Contains [DA CONFERMARE] placeholders for founding year and team.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 16: Aggiornare `Navigation.tsx`

**Scopo:** Nuovo ordine menu, aggiunta "Chi siamo", rimozione voci "Prodotti"/"Settori"/"Conformità" dal menu primario.

**Files:**
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: Leggere navLinks attuali**

Aprire `components/Navigation.tsx`, trovare l'array `navLinks` (vicino linea 20).

- [ ] **Step 2: Sostituire navLinks**

Sostituire l'array con:

```tsx
const navLinks = [
  { label: t.nav.privacyPhone, href: `/${locale}/privacy-phone/` },
  { label: t.nav.framework, href: `/${locale}/framework/` },
  { label: t.nav.blog, href: `/${locale}/blog/`, highlight: true },
  { label: t.nav.chiSiamo, href: `/${locale}/chi-siamo/` },
  { label: t.nav.contatti, href: `/${locale}/contatti/` },
]
```

- [ ] **Step 3: Verificare bottone CTA "Richiedi"**

Nel file dovrebbe essere presente già un elemento CTA che usa `t.nav.richiedi`. Verificare che:
- Il testo sia «Richiedi un colloquio» (chiave `richiedi`)
- Il link porti a `/${locale}/contatti/` e non a `#contatti` (che era un anchor in home)

Se punta ancora a `/${locale}/#contatti`, sostituire con `/${locale}/contatti/`.

- [ ] **Step 4: Rimuovere logica per link disabilitati**

Cercare nel file eventuali commenti/riferimenti a `aegida-connect` e rimuoverli (la riga 24 era già commentata — ora va rimossa completamente, non lasciata come commento).

- [ ] **Step 5: Verifica build**

```bash
npm run build
```

- [ ] **Step 6: Verifica navigazione in dev**

```bash
npm run dev
```

- Aprire home, clicare ogni voce del menu: tutte devono portare a pagine reali (Privacy Phone, Framework, Blog, Chi siamo, Contatti)
- CTA «Richiedi un colloquio» → porta a /contatti/
- Nessun link 404

- [ ] **Step 7: Commit**

```bash
git add components/Navigation.tsx
git commit -m "refactor: simplify Navigation to 5 primary menu items

New order: Privacy Phone · Framework · Blog · Chi siamo · Contatti.
Removes Prodotti/Settori anchors and Conformità link from primary menu.
Conformità remains accessible via Footer.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 17: Aggiornare `Footer.tsx`

**Scopo:** Aggiungere micro-testo istituzionale, spostare link Conformità nella colonna Legale del footer.

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Leggere struttura attuale**

Aprire `components/Footer.tsx`. Capire se ha colonne (tipo: brand | nav | legal | social) o è più semplice.

- [ ] **Step 2: Assicurare presenza del testo istituzionale**

Vicino al logo o nella prima colonna del footer, aggiungere/aggiornare:

```tsx
<p className="text-sm text-slate-400 max-w-xs">
  {t.footer.istituzionale}
</p>
```

Questo produce: «AEGIDA è il brand di sicurezza di H4R (Human for Research Srl). Roma, Italia.»

- [ ] **Step 3: Aggiornare la colonna Navigazione**

Usare le chiavi aggiornate in Task 9:

```tsx
<ul>
  <li><a href={`/${locale}/privacy-phone/`}>{t.footer.nav.privacyPhone}</a></li>
  <li><a href={`/${locale}/framework/`}>{t.footer.nav.framework}</a></li>
  <li><a href={`/${locale}/chi-siamo/`}>{t.footer.nav.chiSiamo}</a></li>
  <li><a href={`/${locale}/blog/`}>{t.footer.nav.blog}</a></li>
  <li><a href={`/${locale}/contatti/`}>{t.footer.nav.contatti}</a></li>
</ul>
```

- [ ] **Step 4: Aggiornare la colonna Legale**

```tsx
<ul>
  <li><a href={`/${locale}/privacy-policy/`}>{t.footer.legale.privacyPolicy}</a></li>
  <li><a href={`/${locale}/cookie-policy/`}>{t.footer.legale.cookiePolicy}</a></li>
  <li><a href={`/${locale}/conformita/`}>{t.footer.legale.conformita}</a></li>
</ul>
```

- [ ] **Step 5: Aggiornare il copyright con year dinamico**

```tsx
<p className="copyright">
  {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
</p>
```

- [ ] **Step 6: Verifica payoff**

Verificare che «PROGETTATO IN ITALIA.» resti presente dove già era, consumando `t.footer.payoff`.

- [ ] **Step 7: Verifica build e preview**

```bash
npm run build
npm run dev
```

- [ ] **Step 8: Commit**

```bash
git add components/Footer.tsx
git commit -m "refactor: add institutional micro-text to Footer

Resolves AEGIDA/H4R identity at the bottom of every page.
Moves Conformità link into Legale column.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 18: Aggiornare micro-copy di `ContactForm.tsx`

**Scopo:** Riflettere le nuove etichette del form (Motivo del contatto, Ruolo professionale) e titoli coerenti.

**Files:**
- Modify: `components/ContactForm.tsx`

- [ ] **Step 1: Leggere il file attuale**

Aprire `components/ContactForm.tsx` e identificare:
- Titolo pagina/sezione
- Campi del form attuali (nome, email, oggetto/messaggio, etc)
- Handler di submit (NON toccare)

- [ ] **Step 2: Aggiornare titolo e sottotitolo**

Dove il componente renderizza titoli:

```tsx
<h1>{t.contact.page.title}</h1>
<p>{t.contact.page.subtitle}</p>
```

- [ ] **Step 3: Aggiornare labels dei campi**

Per ogni campo input:

```tsx
<label htmlFor="nome">{t.contact.form.labels.nome}</label>
<input id="nome" name="nome" placeholder={t.contact.form.placeholders.nome} ... />

<label htmlFor="email">{t.contact.form.labels.email}</label>
<input id="email" name="email" type="email" placeholder={t.contact.form.placeholders.email} ... />

<label htmlFor="ruolo">{t.contact.form.labels.ruolo}</label>
<input id="ruolo" name="ruolo" placeholder={t.contact.form.placeholders.ruolo} ... />

<label htmlFor="motivo">{t.contact.form.labels.motivo}</label>
<textarea id="motivo" name="motivo" placeholder={t.contact.form.placeholders.motivo} rows={6} ... />
```

Se il form originale aveva un campo `oggetto` o `subject`, rinominare in `motivo` (attenzione: il backend PHP `/api/contact.php` si aspetta nomi di campi specifici — verificare prima).

- [ ] **Step 4: Verificare compatibilità backend**

Aprire `public/api/contact.php` e vedere quali `$_POST` campi vengono letti. Se PHP si aspetta `subject` o `oggetto`, mantenere l'`name=` del campo HTML compatibile con il backend, cambiando solo la label visibile:

```tsx
// Se PHP legge $_POST['oggetto']:
<label htmlFor="motivo">{t.contact.form.labels.motivo}</label>
<textarea id="motivo" name="oggetto" ... />
```

- [ ] **Step 5: Aggiornare testo submit e success/error**

```tsx
<button type="submit">{t.contact.form.submit}</button>

// Dopo invio:
<h2>{t.contact.form.success.title}</h2>
<p>{t.contact.form.success.body}</p>

// Errore:
<p>{t.contact.form.error.generic}</p>
```

- [ ] **Step 6: Aggiornare consenso privacy**

```tsx
<label>
  <input type="checkbox" required />
  {t.contact.form.consenso}
</label>
```

- [ ] **Step 7: Test funzionale del form**

```bash
npm run dev
```

- Aprire `/it/contatti/`
- Compilare il form con valori di test
- Verificare che l'invio funzioni (se PHP non è in dev locale, verificare solo rendering e validazione client-side)
- Verificare che l'email di test arrivi o che l'errore di rete sia gestito

- [ ] **Step 8: Commit**

```bash
git add components/ContactForm.tsx
git commit -m "copy: update ContactForm labels and microcopy

Renames 'Oggetto' to 'Motivo del contatto', adds 'Ruolo professionale' field.
Shifts submit copy toward consulting sale language.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 19: Avviso language switcher EN/DE

**Scopo:** Trasparenza verso visitatori internazionali mentre EN/DE sono disallineati.

**Files:**
- Modify: `components/Navigation.tsx` (dove c'è il dropdown locale)
- Modify: `lib/i18n/locales/it.ts` — chiave stringa avviso (solo IT: il label è visto solo quando si è su IT)

- [ ] **Step 1: Aggiungere stringa avviso in it.ts**

Nella sezione `nav` di `it.ts`:

```typescript
nav: {
  // ... chiavi già presenti
  langWarning: 'EN/DE aggiornamento in corso',
},
```

- [ ] **Step 2: Aggiungere il micro-avviso nel dropdown lingue**

Nel blocco JSX del dropdown locale (vicino alla linea 167 in Navigation.tsx), aggiungere sotto la lista:

```tsx
<div className="px-3 py-2 border-t border-navy-700 text-xs text-slate-500">
  {t.nav.langWarning}
</div>
```

- [ ] **Step 3: Verifica**

```bash
npm run dev
```

Aprire la home in IT, cliccare il dropdown lingue: in fondo deve comparire il micro-testo «EN/DE aggiornamento in corso». Passare a EN: il dropdown mostra ancora le 3 lingue ma NON il testo italiano (OK: il testo è consumato solo se locale=it).

- [ ] **Step 4: Commit**

```bash
git add components/Navigation.tsx lib/i18n/locales/it.ts
git commit -m "feat: add temporary EN/DE out-of-date warning in language switcher

Transparency for international visitors while Fase 2 translations are pending.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 20: Sweep finale claim vietati + check accenti

**Scopo:** Garantire che il copy IT rispetti tutte le convenzioni decise.

**Files:**
- Solo verifica / eventuali correzioni puntuali

- [ ] **Step 1: Grep completo claim vietati**

```bash
grep -rni "non puoi permetterti\|soluzione completa\|leader italiano\|rivoluzionario\|innovativo\|all'avanguardia\|game-changer\|best-in-class\|unleash\|empower\|next-generation\|clicca qui\|scopri di più\|contattaci" lib/i18n/locales/it.ts components/
```

Expected: **zero occorrenze**. Se ci sono occorrenze, correggerle manualmente con frasi equivalenti fattuali.

Eccezioni tollerate:
- «innovativo» è vietato; «ricerca applicata» è OK
- «leader» è vietato; «unica azienda italiana a pubblicare test UFED indipendenti» è OK (specifico, verificabile)

- [ ] **Step 2: Grep completo accenti scorretti**

```bash
grep -n "e'\|piu'\|gia'\|perche'\|cio'\|puo'\|ne' \|se' " lib/i18n/locales/it.ts
```

Expected: zero occorrenze. Correggere ogni match con l'accento tipografico corretto: è, più, già, perché, ciò, può, né, sé.

- [ ] **Step 3: Grep "bundle" e "0 dati"**

```bash
grep -n '"bundle"\|"Bundle"' lib/i18n/locales/it.ts
grep -n "0 dati[^ u]" lib/i18n/locales/it.ts  # 0 dati non seguito da "utente"
```

Expected: zero occorrenze di «bundle» (tutti tradotti in «pacchetto»); zero occorrenze di «0 dati» isolato.

- [ ] **Step 4: Verifica finale claim UFED uniforme**

```bash
grep -rn "UFED\|Cellebrite" lib/i18n/locales/it.ts
```

Ogni menzione del claim UFED deve avere:
- La data completa: «17 aprile 2026»
- La versione: «Cellebrite UFED 10.8» (o 10.8.0.322 nella metodologia)
- Il soggetto: «0 dati utente»

Correggere eventuali menzioni parziali.

- [ ] **Step 5: Commit correzioni**

Se sono state fatte correzioni negli step precedenti:

```bash
git add lib/i18n/locales/it.ts components/
git commit -m "copy: final sweep — forbidden claims, accents, UFED claim uniformity

Zero occurrences of: non puoi permetterti, soluzione completa, leader,
rivoluzionario, clicca qui, scopri di più, contattaci.
All Italian accents typographically correct (è, più, già, perché, ciò, può).
All UFED mentions include date, version, 0 dati utente.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

Se non sono state fatte correzioni, saltare il commit.

---

### Task 21: Verifica finale end-to-end

**Scopo:** Preview completo del sito in italiano, confronto contro i criteri di successo della spec.

**Files:**
- Solo verifica manuale

- [ ] **Step 1: Build di produzione**

```bash
npm run build
```
Expected: build success senza errori TypeScript, output generato in `out/`.

- [ ] **Step 2: Preview locale**

```bash
npm run dev
```

- [ ] **Step 3: Checklist visita manuale (ITALIANO)**

Aprire nel browser, verificare ciascuno:

- [ ] `http://localhost:3000/it/` — Home ha 5 sezioni sobrie (Hero, Istituzionale, Prodotti asimmetrica, Proof preview, CTA finale)
- [ ] Menu header: `Privacy Phone · Framework · Blog · Chi siamo · Contatti` + CTA «Richiedi un colloquio»
- [ ] Logo/brand nel header: «AEGIDA»
- [ ] Footer: micro-testo istituzionale H4R presente, payoff «PROGETTATO IN ITALIA.» presente, link Conformità nella colonna Legale
- [ ] `http://localhost:3000/it/privacy-phone/` — Hero, Cos'è, Cosa include (4 capability), Proof UFED, Pricing (pacchetto non bundle), Metodologia, Disclaimer, CTA
- [ ] `http://localhost:3000/it/framework/` — pagina corta (~5 sezioni), CTA finale «Richiedi contatto per un pilot»
- [ ] `http://localhost:3000/it/chi-siamo/` — nuova pagina con 6 sezioni, `[DA CONFERMARE]` visibile nei placeholder
- [ ] `http://localhost:3000/it/contatti/` — form con titolo «Richiedi un colloquio», campi (Nome, Email, Ruolo professionale, Motivo del contatto)
- [ ] `http://localhost:3000/it/blog/` — pagina blog esistente intatta, nessun errore
- [ ] `http://localhost:3000/it/aegida-connect/` — **404** (route rimossa)
- [ ] Dropdown lingue mostra l'avviso «EN/DE aggiornamento in corso» quando si è su IT

- [ ] **Step 4: Checklist criteri di successo dalla spec**

Confrontare contro `docs/superpowers/specs/2026-04-20-bonifica-comunicazione-design.md` sezione «Criteri di successo»:

- [ ] Criterio 1 — Gerarchia: leggendo la home per 60s si distingue AEGIDA / H4R / Privacy Phone
- [ ] Criterio 2 — Coerenza registro: tutte le pagine sobrie
- [ ] Criterio 3 — Focalizzazione: Privacy Phone visibilmente flagship, Framework in preparazione
- [ ] Criterio 4 — CTA uniche: «Richiedi un colloquio» su tutte le pagine
- [ ] Criterio 5 — Nessun claim vietato: grep del Task 20 Step 1 deve essere vuoto
- [ ] Criterio 6 — Accenti corretti: grep del Task 20 Step 2 deve essere vuoto
- [ ] Criterio 7 — EN/DE non toccati, avviso presente

- [ ] **Step 5: Segnalare i placeholder all'utente**

Prima di suggerire il deploy, ricordare all'utente i punti `[DA CONFERMARE]`:

- Anno fondazione H4R (sezione about.societa)
- Nomi e ruoli del team (sezione about.team)
- PEC H4R (contact.diretti.pec)

Questi possono essere risolti nella stessa sessione (se l'utente fornisce i dati) o in una successiva, ma non restare in produzione indefinitamente.

- [ ] **Step 6: Merge o PR**

A scelta dell'utente:

Opzione A — Merge diretto (se è la pratica del repo):
```bash
git checkout main
git merge --no-ff feature/bonifica-comunicazione-ita
git push origin main
```

Opzione B — Pull Request:
```bash
git push -u origin feature/bonifica-comunicazione-ita
# poi aprire PR via gh CLI o browser
```

- [ ] **Step 7: Deploy**

Dopo merge/approvazione:

```bash
bash deploy.sh
```

Questo esegue build + FTP upload + IndexNow (workflow standard del progetto).

- [ ] **Step 8: Smoke test produzione**

Aprire `https://aegida-systems.com/it/` e verificare i 3 criteri più visibili:
- Home nuova struttura
- Pagina /chi-siamo raggiungibile
- Pagina /aegida-connect → 404

---

## Note di chiusura progetto

Alla fine di questo piano:

1. **Fase 2** — Adattamento EN e DE. Spec e piano separati, dopo approvazione dell'IT in produzione.
2. **Progetto 2 (Redesign visivo)** — Parte dal copy stabilizzato qui.
3. **Progetto 3 (White paper)** — Parte dopo Progetto 2.

I memory file da aggiornare dopo il completamento:
- `session_handoff_ufed_pivot.md` — aggiornare con riferimento alla bonifica 2026-04-20
- `project_aegida.md` — aggiornare con nuova sitemap e struttura componenti
