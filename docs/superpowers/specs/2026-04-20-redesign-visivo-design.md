# Redesign visivo AEGIDA — Design (Progetto 2)

**Data:** 2026-04-20
**Progetto:** 2 di 3 (precede: bonifica comunicazione completata; segue: riscrittura white paper UFED)
**Direzione scelta:** Istituzionale scuro (B) — navy profondo, sans-serif geometrico, nessun orpello caldo

---

## Contesto

Audit tecnico ha diagnosticato il design attuale come "startup cybersecurity americana moderna (2021-2022)" invece di "istituzione italiana di fiducia rivolta a professionisti esposti e HNWI". Sintomi principali:

- Palette multicolore con gold saturo (`#b8960c`) usato ovunque
- Animazioni Framer Motion su oltre 170 elementi (ScrollReveal + micro-animazioni)
- Tipografia con `font-extrabold` + UPPERCASE + tight leading su h1
- Effetti radiali glow, backdrop-blur, animate-ping sui ThreatTicker
- ThreatTicker con estetica matrix-cyberpunk (pulsing dot verde, scroll infinito)

Il target reale (giornalisti investigativi, avvocati penalisti, dirigenti esposti post-Equalize, HNWI) non risponde a codici tech-startup: risponde a codici editoriali-istituzionali europei (Il Post per l'autorevolezza giornalistica, Siemens/Deutsche Telekom per l'autorevolezza enterprise, NYT Corporate per la gravitas).

Dopo il completamento del Progetto 1 (bonifica comunicazione) il copy è coerente e sobrio. Il design deve ora allinearsi allo stesso registro.

## Obiettivo

Un visitatore target deve percepire al primo colpo un'istituzione europea seria, non una startup cyber americana. Il sito deve trasmettere autorità, sobrietà, competenza tecnica, trasparenza forense — non energia, crescita, conversione rapida.

---

## Decisioni di direzione

### Palette (token Tailwind finali)

Rimpiazzare intera `theme.extend.colors` con:

```ts
colors: {
  navy: {
    ink: '#0B1220',    // background pagina
    card: '#16202F',   // surface card
    line: '#1F2C3F',   // border sottili
    deep: '#07101C',   // footer + sezioni alternate
  },
  ink: {
    100: '#E8ECF2',    // testo primario
    200: '#C7D0DE',    // testo secondario
    300: '#8C9AB3',    // testo terziario
    400: '#5E6B82',    // disabilitato
  },
  steel: {
    DEFAULT: '#4A6583', // accento unico (label, kicker)
    hi: '#6B84A0',      // hover accento
  },
},
```

Rimosso: `gold-*` completo, `accent-cyan`, `accent-red` (tranne inline semantic su disclaimer legale), `accent-green`, `accent-purple`. `deep-analysis` badge viola viene uniformato allo steel.

### Tipografia

- **Display + body:** Inter (Google Fonts), pesi 400 / 500 / 600. Mai 700 o superiori.
- **Mono funzionale:** JetBrains Mono per kicker, label, timestamp, metadati numerici (versioni, date, identificativi).
- **Regole titoli:**
  - H1: Inter 500, `letter-spacing: -0.015em`, 48px desktop / 32px mobile, mai UPPERCASE, leading 1.1
  - H2: Inter 500, `letter-spacing: -0.01em`, 28-32px, mai UPPERCASE
  - H3: Inter 500, 18-22px, mai UPPERCASE
  - Kicker/label: JetBrains Mono 500, UPPERCASE, tracking 0.18-0.2em, 11-12px
- Italiano con `<em>` reso con tono tipografico leggero (può essere `color: var(--ink-200)` + `font-weight: 400` al posto di italic calligrafico) per enfasi senza teatralità.

### Animazioni

- **Rimosse:**
  - `ScrollReveal` component e tutti i suoi 170+ utilizzi
  - `animate-ping`, `animate-pulse` sui dot indicatori
  - Rotazione orbitale in `ShieldSVG`
  - Tutti i `motion.*` di Framer Motion fuori da `ContactForm` (dove servono per success/error state)
  - Fade-in cascading al page load
- **Conservate:**
  - Transizioni CSS 200ms su `border-color`, `background-color`, `opacity`, `color`
  - Focus ring accessibile `outline-offset` su tutti gli interattivi
  - Micro-animazione di invio del form (già in ContactForm via Framer Motion AnimatePresence) — mantenere
- **Nuova regola:** nessuna animazione al primo paint. Il sito appare istantaneamente.

### Iconografia

- Zero icone decorative nei testi di prodotto.
- Ammesse solo icone funzionali: hamburger mobile, chevron nav dropdown, close (×).
- Liste di capability: numerazione `01` `02` `03` `04` in JetBrains Mono come unico indicatore visivo.

### Layout & griglia

- Container: `max-w-[1100px]` per prose-heavy (hero, testi istituzionali), `max-w-[1320px]` per griglie wide (product showcases).
- Base spacing: 8px grid, scale 4/8/12/16/20/24/32/48/64/80.
- Prose `max-w-[65ch]` per paragrafi lunghi.
- Padding sezioni: 64-80px desktop, 48px tablet, 32-40px mobile.
- Radius: bottoni `2px`, card e contenitori `4px`. Mai `> 6px`. No shadow. No gradient. Card bordo 1px `navy-line`.

### Interazioni

- **Bottoni primari:** `bg-ink-100` (bianco crema), `text-navy-ink`, border 1px `ink-100`, padding 13×22, radius 2px. Hover → `bg-ink-200`.
- **Bottoni secondari:** `bg-transparent`, border 1px `ink-400`, `text-ink-100`. Hover → border `ink-200`.
- **Link in-line:** underline sottile (`border-bottom: 1px solid currentColor; padding-bottom: 2px`), mai colore accent.
- **Card hover:** cambio `border-color` da `navy-line` a `ink-400`. No elevation, no traslazione, no glow.

---

## Componenti da modificare

### Nuovi

- **`components/BlogStrip.tsx`** — strip statica che mostra i 3 articoli blog più recenti con data mono + titolo. Sostituisce `ThreatTicker` nella home. Accetta `articles` come prop (3 latest), senza logica di rotazione/animazione.

### Da rifattorizzare (stesso file, rewrite del body)

- `components/Navigation.tsx` — nuovo skin (wordmark mono, nav Inter 14, CTA outline)
- `components/Footer.tsx` — 3 colonne + bottom-line mono, background `navy-deep`
- `components/HomeContent.tsx` — hero sobrio, proof strip, prodotti asimmetrica 2:1
- `components/PrivacyPhoneContent.tsx` — cosa-include in grid 2×2 con numerazione mono, proof-section ri-skinned
- `components/FrameworkContent.tsx` — one-pager con prose tipografica (la struttura è già corretta dal Progetto 1)
- `components/AboutContent.tsx` — già esiste ma con classi del vecchio design — ri-skin
- `components/ContattiContent.tsx` — ri-skin
- `components/ContactForm.tsx` — solo classi input/button, logica invariata
- `components/SectionLabel.tsx` — semplificato (solo kicker mono, niente linea d'oro)
- `components/FeatureGrid.tsx` — re-skin
- `components/ComparisonTable.tsx`, `components/SpecsTable.tsx` — re-skin
- `components/blog/*` — article card + category badge uniformati

### Da rimuovere (spostare in `lib/archived/`)

- `components/ThreatTicker.tsx` — sostituito da BlogStrip
- `components/ScrollReveal.tsx` — tutte le occorrenze rimosse, componente archiviato
- `components/ShieldSVG.tsx` — se usato solo decorativamente. Da verificare in esecuzione: se serve per OG image, conservarlo in variante statica senza rotazione.

### Configurazione

- `tailwind.config.ts` — rimpiazzo palette, font family, estensioni
- `app/globals.css` — rimozione glow/gradient ambient, impostazione dark by default, font loading Inter + JetBrains Mono
- `app/[locale]/layout.tsx` — import Google Fonts Inter + JetBrains Mono (via `next/font/google`)

---

## Aspetti invariati

- **Struttura informativa (IA):** sitemap, nav, anchor sezioni. Il Progetto 1 le ha chiuse, il redesign le veste.
- **Copy italiano:** nessuna modifica testuale. Se il redesign scopre che un testo non sta bene in un layout, si segnala ma non si riscrive in questo progetto.
- **i18n:** nessuna modifica alle chiavi di traduzione. EN/DE restano disallineati (Fase 2 del Progetto 1).
- **Backend:** `/api/contact.php`, `/api/telegram-bot.php`, IndexNow, invariati.
- **Blog content:** articoli invariati, solo le card che li listano vengono ri-skinned.
- **White paper PDF (`/downloads/...pdf`):** invariato in questo progetto. Viene rifatto nel Progetto 3 con il nuovo branding coerente.
- **Proof UFED screenshot:** immagini invariate, solo wrapper restilizzato.

---

## Criteri di successo

1. **Gold zero:** `grep -r "gold-" --include="*.tsx" --include="*.ts" --include="*.css" .` ritorna 0 match.
2. **Animazioni zero su page load:** il sito renderizza il primo paint statico. `grep -r "ScrollReveal\|animate-ping\|animate-pulse" components/` ritorna 0.
3. **Font loading:** Inter e JetBrains Mono caricati via `next/font/google`, visibili su production.
4. **Build + Lighthouse:** build verde; Lighthouse performance non peggiora (target: migliore del baseline per JS ridotto).
5. **Render manuale su 5 pagine:** Home / Privacy Phone / Framework / Chi siamo / Contatti mostrano coerenza totale — nessun componente residuo dallo skin vecchio.
6. **Mobile:** hero leggibile, nav collassabile, spacing ridotto ma ordinato. Test 360px, 768px, 1024px.
7. **Percezione:** se mostrata a 3 persone del target (giornalista, avvocato, dirigente), devono descriverla con aggettivi tipo "serio", "istituzionale", "credibile" — non "startup", "tech", "moderno".

---

## Fuori scope di questo progetto

- **Nuovo copy o ristrutturazione informativa** — chiuso nel Progetto 1.
- **Traduzioni EN/DE** — Fase 2 del Progetto 1.
- **White paper PDF redesign** — Progetto 3.
- **SEO/meta structural changes** — post-stabilizzazione.
- **Nuovi componenti business** (es. quiz di autovalutazione, configuratore) — fuori scope del redesign.
- **Dark/light toggle** — consapevolmente omesso. Dark unica per coerenza.
- **Illustrazioni o asset grafici custom** — il linguaggio visivo è tipografico. Se servono immagini, si usa fotografia documentaristica (proof UFED è l'unica "immagine" sul sito).

---

## Dipendenze

- **Input:** Progetto 1 completato e in stato `feature/bonifica-comunicazione-ita`.
- **Branch strategy:** il Progetto 2 continua sullo stesso branch `feature/bonifica-comunicazione-ita` (o se preferibile, si crea `feature/redesign-visivo` a partire dal suo HEAD). Decisione in fase di piano implementativo.
- **Output del Progetto 2 alimenta Progetto 3:** il white paper PDF del Progetto 3 riutilizza palette, tipografia e tono visivo definiti qui per la coerenza cross-canale.

---

## Decisioni rinviate (da prendere in fase di piano)

1. Branch: proseguire su `feature/bonifica-comunicazione-ita` o aprire `feature/redesign-visivo`.
2. Ordine di refactor: partire dai token (tailwind/globals/fonts) poi risalire ai componenti, oppure pagina-per-pagina. Il piano sceglierà.
3. Se `ShieldSVG` venga completamente rimosso o conservato come asset statico per OG image.
4. Se le card prodotto in home usino link diretti o hover-to-reveal CTA.
