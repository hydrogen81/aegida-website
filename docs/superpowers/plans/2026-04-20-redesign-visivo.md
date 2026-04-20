# Redesign Visivo AEGIDA — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trasformare l'aspetto visivo del sito aegida-systems.com dalla direzione "startup cybersecurity americana" a "istituzione italiana di fiducia" (direzione B — istituzionale scuro): palette navy + grigi, tipografia Inter + JetBrains Mono, eliminazione di tutte le animazioni cascade, rimpiazzo del ThreatTicker con BlogStrip statico.

**Architecture:** Static export Next.js 14 con token Tailwind. Il refactor procede top-down: prima i token (palette, fonts, globals), poi i componenti condivisi (Navigation, Footer, SectionLabel), poi i componenti di pagina (HomeContent, PrivacyPhoneContent, FrameworkContent, AboutContent, ContattiContent, ContactForm), infine i componenti blog. Ogni commit mantiene il build verde; `@ts-nocheck` residui vengono progressivamente rimossi man mano che i componenti dipendenti vengono refattorizzati.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, `next/font/google` (Inter + JetBrains Mono). Deploy: FTP su Aruba via `bash deploy.sh`.

**Scope check:** Questo piano riguarda SOLO il Progetto 2 (redesign visivo). Progetto 1 (comunicazione) è completato. Progetto 3 (white paper) è separato.

**Spec di riferimento:** `docs/superpowers/specs/2026-04-20-redesign-visivo-design.md`

---

## Strategy di branch

Il piano continua sullo stesso branch `feature/bonifica-comunicazione-ita` del Progetto 1 (il branch non è ancora mergiato su main). Questo accumula tutto il lavoro strategico in un'unica pull request finale. Se in futuro servirà separare, un cherry-pick selettivo è sempre possibile.

---

## File Structure

### File MODIFICATI (token + globali)

- `tailwind.config.ts` — palette completamente rimpiazzata, font families, estensioni
- `app/globals.css` — rimozione glow/gradient ambient, dark background default, reset tipografia
- `app/[locale]/layout.tsx` — load Inter + JetBrains Mono via `next/font/google`, applicazione CSS variables

### File MODIFICATI (componenti condivisi)

- `components/Navigation.tsx` — skin completo, wordmark mono
- `components/Footer.tsx` — 3 colonne, background `navy-deep`, bottom-line mono
- `components/SectionLabel.tsx` — semplificato (solo kicker mono)
- `components/FeatureGrid.tsx` — re-skin
- `components/ComparisonTable.tsx` — re-skin
- `components/SpecsTable.tsx` — re-skin
- `components/ContactForm.tsx` — solo classi input/button
- `components/blog/*` — re-skin article card + category badge

### File MODIFICATI (componenti di pagina)

- `components/HomeContent.tsx` — hero + proof strip + prodotti asimmetrica + BlogStrip + CTA finale
- `components/PrivacyPhoneContent.tsx` — cosa-include in grid 2×2 numerata, proof re-skin, pricing re-skin
- `components/FrameworkContent.tsx` — one-pager tipografica con prose stile editoriale
- `components/AboutContent.tsx` — re-skin
- `components/ContattiContent.tsx` — re-skin

### File CREATI

- `components/BlogStrip.tsx` — strip statica "Dal Blog" con 3 articoli recenti

### File ARCHIVIATI (spostati in `lib/archived/`)

- `components/ThreatTicker.tsx` → `lib/archived/ThreatTicker.tsx`
- `components/ScrollReveal.tsx` → `lib/archived/ScrollReveal.tsx`
- `components/ShieldSVG.tsx` → decisione in Task 4 (archivio se decorativo, conservato statico se usato per OG image)

### File INVARIATI

- `lib/i18n/locales/*.ts` — copy stabile dal Progetto 1
- `app/[locale]/*/page.tsx` — route già strutturate
- `public/api/*.php` — backend intatto
- `public/downloads/*.pdf` — white paper del Progetto 3
- `public/proof/ufed-test/*.jpg` — screenshot UFED
- `lib/blog/articles/*` — contenuto blog
- `lib/blog/registry.ts` — registry blog (usato per BlogStrip, si legge)

---

## Convenzioni di commit

- `design:` — modifiche ai token (palette, fonts, spacing)
- `refactor:` — rewrite componenti (classi + struttura)
- `feat:` — nuovi componenti (BlogStrip)
- `chore:` — archiviazione

Tutti i commit con trailer `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.

---

## Verification strategy

Per modifiche visuali la TDD tradizionale non si applica. Verificatori:

1. **Build:** `npm run build` sempre verde
2. **Grep asserzioni negative:** `grep -r "gold-" ...` = 0 a fine progetto; `grep -r "ScrollReveal\|animate-ping" ...` = 0
3. **Grep asserzioni positive:** font Inter importato; token `navy.ink` usato; `BlogStrip` presente in HomeContent
4. **Render manuale per pagina:** al commit di ogni pagina, `npm run dev` e ispezione manuale desktop + mobile

---

### Task 1: Survey stato iniziale + rimozione mockup dir dal repo

**Scopo:** Fotografare il baseline, assicurare che `.redesign-mockups/` non sia committato accidentalmente.

**Files:**
- Modify: `.gitignore` (solo se necessario)

- [ ] **Step 1: Verifica stato git**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
git status
git log --oneline -3
```
Expected: branch `feature/bonifica-comunicazione-ita`, HEAD al `5d41b06 feat: add /contatti route`, working tree clean.

- [ ] **Step 2: Baseline count di gold-* usage**

```bash
grep -rn "gold-" --include="*.tsx" --include="*.ts" --include="*.css" components/ app/ lib/ | wc -l
```
Annotare il numero come baseline. A fine progetto deve essere 0.

- [ ] **Step 3: Baseline count di ScrollReveal e animate**

```bash
grep -rn "ScrollReveal" components/ app/ | wc -l
grep -rn "animate-ping\|animate-pulse\|animate-spin" components/ app/ | wc -l
```
Annotare.

- [ ] **Step 4: Aggiungere `.redesign-mockups/` a gitignore se assente**

```bash
grep -q "redesign-mockups" .gitignore || echo ".redesign-mockups/" >> .gitignore
```

- [ ] **Step 5: Commit bookmark**

```bash
git add .gitignore 2>/dev/null
git commit -m "chore: start Progetto 2 — redesign visivo

Baseline pre-redesign: gold-* count, ScrollReveal count annotated.
See docs/superpowers/specs/2026-04-20-redesign-visivo-design.md

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>" --allow-empty
```

---

### Task 2: Palette + radius + spacing in tailwind.config.ts

**Scopo:** Sostituire completamente i token colore. Dopo questo task TUTTI i componenti che usano `gold-*` romperanno visualmente — verranno risolti uno per uno nei task successivi. Il build rimane verde perché Tailwind con classi mancanti produce semplicemente assenza di stile, non errore.

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Leggere lo stato attuale**

Aprire `tailwind.config.ts` e identificare `theme.extend.colors`.

- [ ] **Step 2: Sostituire `theme.extend.colors`**

Sostituire TUTTO il blocco `colors` con:

```ts
colors: {
  navy: {
    ink: '#0B1220',
    card: '#16202F',
    line: '#1F2C3F',
    deep: '#07101C',
  },
  ink: {
    100: '#E8ECF2',
    200: '#C7D0DE',
    300: '#8C9AB3',
    400: '#5E6B82',
  },
  steel: {
    DEFAULT: '#4A6583',
    hi: '#6B84A0',
  },
  // Colori semantici inline (solo per disclaimer/errori, non per UI regolare)
  semantic: {
    error: '#B8574F',
  },
},
```

Rimosso: `gold.*`, `accent-cyan`, `accent-red`, `accent-green`, `accent-purple` se presenti. Il vecchio `navy` si mantiene ma con chiavi diverse (`ink`, `card`, `line`, `deep`) — le vecchie chiavi (`navy-950`, `navy-900`, ...) vanno rimosse.

- [ ] **Step 3: Aggiornare `fontFamily`**

```ts
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
},
```

Se `var(--font-barlow)` era la chiave precedente, sostituirla con `var(--font-inter)`. Il caricamento font avviene in Task 3.

- [ ] **Step 4: Aggiornare `borderRadius` (opzionale ma consigliato)**

Se `tailwind.config.ts` ha un'override di radius, assicurare che:
```ts
borderRadius: {
  none: '0',
  sm: '2px',
  DEFAULT: '4px',
  md: '4px',
  lg: '6px',
}
```

Se non c'è override, lasciare il default Tailwind — useremo classi dirette.

- [ ] **Step 5: Build e verifica**

```bash
npm run build 2>&1 | tail -15
```
Expected: build SUCCESS. Il sito sarà visivamente rotto (classi `gold-*` non più valide), ma TypeScript non si lamenta.

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts
git commit -m "design: replace palette with navy/ink/steel tokens

New palette for institutional-dark direction. All gold-* classes across
components are now style-less and will be re-skinned in subsequent tasks.
Build still passes; visual regressions expected until Task 20.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Load fonts Inter + JetBrains Mono via next/font

**Scopo:** Importare le due famiglie e renderle disponibili come CSS variables.

**Files:**
- Modify: `app/[locale]/layout.tsx` (o `app/layout.tsx` se root)

- [ ] **Step 1: Identificare il layout attivo**

```bash
ls app/layout.tsx app/[locale]/layout.tsx 2>/dev/null
```

Aprire quello che contiene l'import attuale dei font (`Barlow` o simili).

- [ ] **Step 2: Sostituire gli import font**

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
  display: 'swap',
})
```

Rimuovere gli import di Barlow / Inter esistenti se presenti con altre configurazioni.

- [ ] **Step 3: Applicare le CSS variables al body**

Nel JSX del layout, il tag radice (body o html) deve avere:

```tsx
<body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-navy-ink text-ink-100`}>
```

Le classi `bg-navy-ink` e `text-ink-100` applicano il fondale scuro come default globale.

- [ ] **Step 4: Build e test**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 5: Test visivo in dev**

```bash
npm run dev
```
Aprire `http://localhost:3000/it/`. Verificare: background è navy scuro (non più bianco o navy vecchio). Testi sono bianco-crema. La tipografia potrebbe essere parzialmente Inter (se il sito usa `font-sans` di default).

- [ ] **Step 6: Commit**

```bash
git add "app/[locale]/layout.tsx"
git commit -m "design: load Inter + JetBrains Mono via next/font

Inter (weights 400/500/600) for display + body, JetBrains Mono (400/500)
for labels and metadata. CSS vars --font-inter and --font-jetbrains-mono
exposed to Tailwind config.

Body applies bg-navy-ink and text-ink-100 as global defaults.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Pulizia `app/globals.css`

**Scopo:** Rimuovere gradienti/glow/filter ambient e impostare le regole base del nuovo design.

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Leggere file attuale**

Aprire `app/globals.css`. Identificare tutti i blocchi con `radial-gradient`, `backdrop-filter`, `filter: blur`, `box-shadow: 0 0 *` (glow).

- [ ] **Step 2: Sostituire il contenuto con la versione pulita**

Mantenere l'`@tailwind` preamble e le sezioni veramente necessarie (scroll behavior, selection color). Il file finale dovrebbe somigliare a:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    font-feature-settings: 'ss01', 'cv01', 'cv11'; /* Inter tabular + stylistic sets */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::selection {
    background-color: #4A6583;
    color: #E8ECF2;
  }
}

@layer utilities {
  .prose-aegida p {
    line-height: 1.65;
    max-width: 65ch;
  }
}
```

Se il file originale ha regole specifiche (es. per cookie banner, custom scrollbar) che non sono ornamentali, conservarle.

- [ ] **Step 3: Build + verifica**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add app/globals.css
git commit -m "design: strip ornamental CSS (gradient, glow, blur)

Removes radial-gradient hero ambient, backdrop-filter blur effects,
glow shadows. Adds Inter font-feature-settings, steel selection color,
prose-aegida utility for readable paragraphs.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Archiviare ThreatTicker

**Scopo:** Rimuovere completamente il componente Threat Ticker che verrà sostituito da BlogStrip.

**Files:**
- Move: `components/ThreatTicker.tsx` → `lib/archived/ThreatTicker.tsx`

- [ ] **Step 1: Identificare gli usi attuali**

```bash
grep -rn "ThreatTicker\|threat-ticker" components/ app/ --include="*.tsx" --include="*.ts"
```

Annotare i file che lo importano/usano — andranno puliti.

- [ ] **Step 2: Rimuovere gli import da componenti di pagina**

Per ogni file identificato in Step 1 (es. `HomeContent.tsx`):
- Rimuovere l'import `import ThreatTicker from ...`
- Rimuovere il JSX `<ThreatTicker ... />`

Non preoccuparsi del "buco" lasciato: verrà riempito con `BlogStrip` in Task 7.

- [ ] **Step 3: Spostare il file**

```bash
git mv components/ThreatTicker.tsx lib/archived/ThreatTicker.tsx
```

- [ ] **Step 4: Aggiornare `lib/archived/README.md`**

Aggiungere sezione:

```markdown
## ThreatTicker.tsx

Rimosso il 2026-04-20 durante il redesign visivo (Progetto 2).
Motivo: estetica matrix-cyberpunk (pulsing dot verde, scroll infinito, badge LIVE)
incompatibile con la nuova direzione istituzionale-sobria. Sostituito da
`components/BlogStrip.tsx` che mostra gli ultimi 3 articoli del blog in forma
statica.

Rimane funzionante il prebuild `scripts/fetch-threats.js` che popola
`lib/threats-live.json` — il dato può essere riutilizzato se in futuro
si volesse reintrodurre una surface (es. sezione sulla pagina blog).
```

- [ ] **Step 5: Build**

```bash
npm run build
```
Expected: SUCCESS. Il buco visivo in home è tollerato fino a Task 7.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: archive ThreatTicker, remove from pages

Replaced by BlogStrip in upcoming Task 7. Component preserved in
lib/archived/ — prebuild script fetch-threats.js is NOT removed
(may be reused later on blog page).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Archiviare ScrollReveal + rimuovere tutti gli utilizzi

**Scopo:** Eliminare il sistema di animazioni cascade su scroll. Tutti i `<ScrollReveal>` devono diventare `<div>` normali (o essere rimossi se aggiungono solo un wrapper inutile).

**Files:**
- Modify: TUTTI i componenti che importano `ScrollReveal` (elenco in Step 1)
- Move: `components/ScrollReveal.tsx` → `lib/archived/ScrollReveal.tsx`

- [ ] **Step 1: Identificare tutti gli utilizzi**

```bash
grep -rln "ScrollReveal" components/ app/ --include="*.tsx" | tee /tmp/scrollreveal-files.txt
```

Conservare la lista — ogni file è da toccare.

- [ ] **Step 2: Per ogni file, rimuovere l'import**

Rimuovere la riga `import ScrollReveal from ...` da ogni file identificato.

- [ ] **Step 3: Per ogni file, sostituire `<ScrollReveal>` con `<div>` o rimuovere wrapper**

Regola:
- Se `<ScrollReveal>` avvolge UN solo figlio significativo (es. `<section>`), RIMUOVERE il wrapper completamente — il figlio esiste già.
- Se `<ScrollReveal>` ha `className` sue o `style`, sostituire con `<div className="...">` conservando le classi.
- Se ha props tipo `delay={0.2}` `duration={0.5}`, ignorarle (non più applicabili senza Framer).

Esempio prima:
```tsx
<ScrollReveal delay={0.3}>
  <section id="proof" className="py-20">
    ...
  </section>
</ScrollReveal>
```

Esempio dopo:
```tsx
<section id="proof" className="py-20">
  ...
</section>
```

- [ ] **Step 4: Spostare il componente**

```bash
git mv components/ScrollReveal.tsx lib/archived/ScrollReveal.tsx
```

- [ ] **Step 5: Aggiornare `lib/archived/README.md`** con una sezione per ScrollReveal analoga a ThreatTicker (motivo: eliminazione cascade animations, usa Framer Motion, non compatibile con animazioni-zero on load).

- [ ] **Step 6: Verifica zero occorrenze**

```bash
grep -rn "ScrollReveal" components/ app/ --include="*.tsx" | grep -v "lib/archived/"
```
Expected: 0 match.

- [ ] **Step 7: Build**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: archive ScrollReveal and remove all uses

All ScrollReveal wrappers across components replaced with plain
<div> or removed. Cascade fade-in on scroll eliminated per redesign
spec (animations-zero on page load).

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Creare `components/BlogStrip.tsx`

**Scopo:** Nuovo componente che sostituisce ThreatTicker in home. Mostra 3 articoli blog recenti in forma statica.

**Files:**
- Create: `components/BlogStrip.tsx`

- [ ] **Step 1: Studiare il blog registry**

Leggere `lib/blog/registry.ts` per capire come sono esportati gli articoli. Possibili shape:

```ts
export const articles = [
  { slug: '2026-04-17-threat-apt28-frostarmada-dns-hijacking-router', date: '2026-04-17', title: '...', category: 'threat' },
  ...
]
```

Trovare come ottenere "i 3 più recenti" (probabilmente sort per data desc + slice 0-3).

- [ ] **Step 2: Scrivere il componente**

Creare `components/BlogStrip.tsx`:

```tsx
'use client'

import { useParams } from 'next/navigation'
import { articles } from '@/lib/blog/registry' // adattare al nome reale

interface BlogStripArticle {
  slug: string
  date: string
  title: string
  titleIt?: string
}

function getLatestArticles(locale: string, n: number = 3): BlogStripArticle[] {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1))
  return sorted.slice(0, n).map((a) => ({
    slug: a.slug,
    date: a.date,
    title: a.titleIt || a.title, // adattare al campo reale per locale
  }))
}

function formatDate(iso: string, locale: string): string {
  const d = new Date(iso)
  const months: Record<string, string[]> = {
    it: ['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC'],
    en: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
    de: ['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'],
  }
  const m = months[locale] || months.en
  return `${d.getDate()} ${m[d.getMonth()]}`
}

export default function BlogStrip() {
  const { locale } = useParams() as { locale: string }
  const items = getLatestArticles(locale)

  return (
    <div className="bg-navy-deep border-t border-navy-line py-7">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-wrap items-center gap-x-8 gap-y-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-ink-300">DAL BLOG</span>
        {items.map((a) => (
          <a
            key={a.slug}
            href={`/${locale}/blog/${a.slug}/`}
            className="text-sm text-ink-200 hover:text-ink-100 transition-colors"
          >
            <span className="font-mono text-[12px] text-ink-400 mr-2">{formatDate(a.date, locale)}</span>
            {a.title}
          </a>
        ))}
      </div>
    </div>
  )
}
```

Adattare nomi esatti di campi e import a quelli del progetto (verificare `lib/blog/registry.ts`).

- [ ] **Step 3: Build**

```bash
npm run build
```

Se fallisce per shape dei campi registry, sistemare fino a passare.

- [ ] **Step 4: Inserire il componente in HomeContent.tsx (provvisorio)**

Nel file `components/HomeContent.tsx`, appena sotto la sezione "Prodotti" (o dove era il ThreatTicker), importare e renderizzare `<BlogStrip />`:

```tsx
import BlogStrip from '@/components/BlogStrip'
// ...
<BlogStrip />
```

NOTA: questo è inserimento provvisorio. HomeContent sarà completamente refattorizzato in Task 9, a quel punto BlogStrip farà parte della struttura definitiva.

- [ ] **Step 5: Build + dev preview**

```bash
npm run build
npm run dev
```
Aprire `http://localhost:3000/it/` — verificare che la strip appaia con 3 articoli.

- [ ] **Step 6: Commit**

```bash
git add components/BlogStrip.tsx components/HomeContent.tsx
git commit -m "feat: add BlogStrip component replacing ThreatTicker

Static strip showing 3 most recent blog articles (date mono + title).
No animation, no pulsing indicators. Inserted provisionally into
HomeContent; full restyle follows in subsequent task.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: Refactor `components/Navigation.tsx`

**Scopo:** Restilizzare la nav nel nuovo design (wordmark mono, link sans medium, CTA outline).

**Files:**
- Modify: `components/Navigation.tsx`

- [ ] **Step 1: Aprire e leggere il file**

Il file è stato già toccato nel Progetto 1 (Task 16) per l'ordine menu. Ora vanno cambiate SOLO le classi CSS.

- [ ] **Step 2: Sostituire le classi del wrapper**

Cambiare il wrapper `<nav>` esistente da classi che usano `gold-*`, `navy-950`, etc. in:

```tsx
<nav className="sticky top-0 z-50 bg-navy-ink/95 backdrop-blur-none border-b border-navy-line">
  <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
    {/* Logo */}
    <Link href={`/${locale}/`} className="font-mono font-semibold text-[16px] tracking-[0.12em] text-ink-100">
      AEGIDA
    </Link>

    {/* Nav links desktop */}
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm text-ink-200 hover:text-ink-100 transition-colors ${
            isActive(link.href) ? 'text-ink-100' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* CTA desktop + locale switcher */}
    <div className="hidden md:flex items-center gap-4">
      {/* ... locale dropdown re-skin with navy-card bg ... */}
      <Link
        href={`/${locale}/contatti/`}
        className="text-sm text-ink-100 border border-ink-300 rounded-sm px-4 py-2 hover:border-ink-100 hover:bg-navy-line transition-colors"
      >
        {t.nav.richiedi}
      </Link>
    </div>

    {/* Mobile hamburger ... */}
  </div>
</nav>
```

IMPORTANTE: il locale dropdown deve essere riskinnato con:
- background `bg-navy-card`
- border `border-navy-line`
- hover item `bg-navy-line`
- testo `text-ink-200`

- [ ] **Step 3: Rimuovere `backdrop-blur` visibili e `bg-gold-*`**

Cercare nel file qualsiasi:
- `bg-gold-*` → rimuovere/sostituire con `bg-ink-100` per CTA
- `text-gold-*` → sostituire con `text-ink-100` o `text-ink-200`
- `border-gold-*` → sostituire con `border-ink-300` o `border-navy-line`
- `backdrop-blur-*` su wrapper → rimuovere (non serve con solid bg)
- `animate-*` → rimuovere

- [ ] **Step 4: Build**

```bash
npm run build
```

- [ ] **Step 5: Test in dev**

```bash
npm run dev
```
Navigazione visibile, link navigabili, mobile hamburger funzionante. Dropdown lingue si apre sopra fondo `navy-card`.

- [ ] **Step 6: Commit**

```bash
git add components/Navigation.tsx
git commit -m "refactor: reskin Navigation with mono wordmark and outline CTA

AEGIDA wordmark in JetBrains Mono, nav links Inter 14, locale dropdown
on navy-card surface, CTA with ink-300 border (hover ink-100).
Removes all gold-*, backdrop-blur ornamental, animate-* classes.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 9: Refactor `components/HomeContent.tsx`

**Scopo:** Rimpiazzare il JSX con la struttura finale: Hero + Proof strip + Istituzionale + Prodotti asimmetrica + BlogStrip + CTA finale. Tutte le classi nuove.

**Files:**
- Modify: `components/HomeContent.tsx`

- [ ] **Step 1: Aprire il file attuale (post-Progetto 1)**

Il file ha 5 sezioni già dal Progetto 1 Task 11 (Hero, Istituzionale, Prodotti, ProofPreview, CTA Finale) ma con classi vecchie. Ora si riscrive il JSX con classi del nuovo design + si aggiunge Proof strip + si inserisce `<BlogStrip />` al posto giusto.

- [ ] **Step 2: Rimuovere `@ts-nocheck` se presente**

Se la prima riga è `// @ts-nocheck`, rimuoverla.

- [ ] **Step 3: Sostituire il body JSX**

```tsx
'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'
import BlogStrip from '@/components/BlogStrip'

export default function HomeContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const home = t.home

  return (
    <main>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[12px] tracking-[0.18em] text-steel-hi mb-6">
            TEST FORENSE · 17 APRILE 2026
          </div>
          <h1 className="text-[32px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6 max-w-[900px]">
            {home.hero.title}
          </h1>
          <p className="text-[15px] md:text-[17px] text-ink-300 leading-relaxed max-w-[640px] mb-9">
            {home.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contatti/`}
              className="bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 hover:border-ink-200 transition-colors"
            >
              {home.hero.ctaPrimary}
            </Link>
            <a
              href="/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf"
              className="text-ink-100 text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-400 hover:border-ink-200 transition-colors"
            >
              {home.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-navy-line">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-5 flex flex-wrap gap-x-12 gap-y-2 font-mono text-[11px] md:text-[12px] tracking-wide text-ink-300">
          <span><b className="text-ink-100 font-medium">Strumento</b> · Cellebrite UFED 10.8.0.322 + Turbo Link</span>
          <span><b className="text-ink-100 font-medium">Modalità</b> · BFU + AFU</span>
          <span><b className="text-ink-100 font-medium">Esito</b> · 0 dati utente estratti</span>
          <span><b className="text-ink-100 font-medium">Operatore</b> · IMCST certificato · società terza</span>
        </div>
      </section>

      {/* ISTITUZIONALE */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">CHI SIAMO</div>
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-ink-200 max-w-[720px]">
            {home.istituzionale.body}
          </p>
        </div>
      </section>

      {/* LINEA PRODOTTI (asimmetrica 2:1) */}
      <section className="px-6 md:px-10 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[22px] md:text-[24px] font-display font-medium text-ink-100 mb-6 tracking-[-0.01em]">
            {home.prodotti.label}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Privacy Phone (2/3) */}
            <Link
              href={`/${locale}/privacy-phone/`}
              className="md:col-span-2 bg-navy-card border border-navy-line rounded p-8 hover:border-ink-400 transition-colors flex flex-col justify-between min-h-[220px] group"
            >
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-3">
                  FLAGSHIP · 2026
                </div>
                <h3 className="text-[22px] font-display font-medium text-ink-100 mb-2.5 tracking-[-0.01em]">
                  {home.prodotti.privacyPhone.name}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed max-w-[460px]">
                  {home.prodotti.privacyPhone.claim}
                </p>
              </div>
              <span className="text-[13px] text-ink-100 mt-5 border-b border-current pb-0.5 self-start">
                {home.prodotti.privacyPhone.cta}
              </span>
            </Link>

            {/* Framework (1/3) */}
            <Link
              href={`/${locale}/framework/`}
              className="bg-navy-card border border-navy-line rounded p-8 hover:border-ink-400 transition-colors flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-3">
                  IN PREPARAZIONE · 2027–2028
                </div>
                <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2.5 tracking-[-0.01em]">
                  {home.prodotti.framework.name}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">
                  {home.prodotti.framework.claim}
                </p>
              </div>
              <span className="text-[13px] text-ink-100 mt-5 border-b border-current pb-0.5 self-start">
                {home.prodotti.framework.cta}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG STRIP */}
      <BlogStrip />

      {/* PROOF PREVIEW */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
            {home.proofPreview.label}
          </div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-5 tracking-[-0.01em]">
            {home.proofPreview.title}
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink-200 max-w-[720px] mb-6">
            {home.proofPreview.body}
          </p>
          <Link
            href={`/${locale}/privacy-phone/#proof`}
            className="text-[14px] text-ink-100 border-b border-current pb-0.5"
          >
            {home.proofPreview.cta}
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {home.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed max-w-[640px] mb-8">
            {home.ctaFinale.subtitle}
          </p>
          <Link
            href={`/${locale}/contatti/`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {home.ctaFinale.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 4: Build + test visivo**

```bash
npm run build
npm run dev
```

Aprire `/it/` e verificare: hero sobrio, proof strip mono sotto hero, prodotti asimmetrica visibile, blog strip, proof preview, CTA finale su navy-deep.

- [ ] **Step 5: Commit**

```bash
git add components/HomeContent.tsx
git commit -m "refactor: reskin HomeContent with institutional-dark design

Hero with mono kicker, medium-weight h1, ink-100 primary CTA and
outline secondary. Proof strip in JetBrains Mono below hero.
Asymmetric 2:1 product grid with hover-only border transitions.
BlogStrip replaces ThreatTicker. CTA finale on navy-deep surface.
All gold-* removed; all animations on page load removed.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 10: Refactor `components/PrivacyPhoneContent.tsx`

**Scopo:** Nuovo skin per la pagina flagship. Include la grid 2×2 numerata "Cosa include".

**Files:**
- Modify: `components/PrivacyPhoneContent.tsx`

- [ ] **Step 1: Aprire il file (post-Progetto 1)**

Il file ha già le sezioni: hero, cosaE, cosaInclude, proof, pricing, metodologia, disclaimer, ctaFinale. Rimuovere `@ts-nocheck` se presente e riscrivere le classi.

- [ ] **Step 2: Sostituire il body JSX con skin nuovo**

La sezione "Cosa include" deve usare grid 2×2 con numerazione mono:

```tsx
<section id="cosa-include" className="bg-navy-ink px-6 md:px-10 py-20">
  <div className="max-w-[1100px] mx-auto">
    <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
      {t.privacyPhone.cosaInclude.label}
    </div>
    <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-8 tracking-[-0.01em]">
      {t.privacyPhone.cosaInclude.title}
    </h2>
    <div className="grid md:grid-cols-2 gap-[1px] bg-navy-line border border-navy-line">
      {t.privacyPhone.cosaInclude.items.map((item, i) => (
        <div key={item.key} className="bg-navy-ink p-7">
          <div className="font-mono text-[12px] text-ink-400 tracking-[0.15em] mb-3">
            {String(i + 1).padStart(2, '0')}
          </div>
          <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2.5">
            {item.title}
          </h3>
          <p className="text-sm text-ink-300 leading-[1.55]">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 3: Re-skin hero, cosa-è, metodologia, CTA finale**

Applicare lo stesso pattern di HomeContent (kicker mono + h1 medium + sub + bottoni primario/secondario).

Pattern hero:
```tsx
<section className="px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
  <div className="max-w-[1100px] mx-auto">
    <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-4">
      {t.privacyPhone.hero.title}
    </h1>
    <p className="text-[17px] md:text-[19px] text-ink-200 leading-relaxed max-w-[720px] mb-4">
      {t.privacyPhone.hero.tagline}
    </p>
    <p className="font-mono text-[13px] text-steel-hi tracking-wide mb-8">
      {t.privacyPhone.hero.claim}
    </p>
    <div className="flex flex-wrap gap-3">
      {/* CTA primary + secondary come in HomeContent */}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Re-skin Proof section**

La struttura Proof contiene screenshot UFED + test card + timeline. Mantenere lo struttura funzionale ma cambiare:
- Background card: `bg-navy-card` invece del vecchio
- Border: `border-navy-line`
- Testo mono per data/versione UFED: `font-mono text-ink-400`
- Niente glow, niente gold
- `<img>` UFED screenshot resta ma con border `border-navy-line` rounded

- [ ] **Step 5: Re-skin Pricing section**

```tsx
<section className="px-6 md:px-10 py-20 bg-navy-deep border-t border-navy-line">
  <div className="max-w-[1100px] mx-auto">
    <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
      {t.privacyPhone.pricing.label}
    </div>
    <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-8">
      {t.privacyPhone.pricing.title}
    </h2>
    <div className="grid md:grid-cols-2 gap-5">
      {t.privacyPhone.pricing.packages.map((p) => (
        <div
          key={p.name}
          className={`bg-navy-card border rounded p-8 ${
            p.highlighted ? 'border-ink-300' : 'border-navy-line'
          }`}
        >
          <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2">{p.name}</h3>
          <div className="text-[32px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">{p.price}</div>
          <p className="text-sm text-ink-300 leading-[1.55]">{p.description}</p>
        </div>
      ))}
    </div>
    {t.privacyPhone.pricing.business ? (
      <div className="mt-10 p-6 border-l-2 border-steel">
        <h3 className="text-[16px] font-medium text-ink-100 mb-2">{t.privacyPhone.pricing.business.title}</h3>
        <p className="text-sm text-ink-300 leading-[1.55] mb-3 max-w-[720px]">{t.privacyPhone.pricing.business.body}</p>
        <Link href={`/${locale}/contatti/`} className="text-[13px] text-ink-100 border-b border-current pb-0.5">
          {t.privacyPhone.pricing.business.cta}
        </Link>
      </div>
    ) : null}
  </div>
</section>
```

- [ ] **Step 6: Re-skin Metodologia + Disclaimer**

Classi base: `text-ink-200 text-[16px] leading-[1.65]`. Disclaimer con border-top, font-size 13px, color `text-ink-400`.

- [ ] **Step 7: Re-skin CTA finale**

Stesso pattern home CTA finale (bg-navy-deep, bottone primario).

- [ ] **Step 8: Build + test**

```bash
npm run build
npm run dev
```
Aprire `/it/privacy-phone/`, verificare ogni sezione.

- [ ] **Step 9: Commit**

```bash
git add components/PrivacyPhoneContent.tsx
git commit -m "refactor: reskin PrivacyPhoneContent with new design tokens

Cosa-include section becomes 2x2 numbered grid on navy-line separators.
Hero with ink-100 h1 + mono claim. Pricing cards with ink-300 border
highlight. Proof section preserves structure with navy-card surfaces.
Removes @ts-nocheck.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 11: Refactor `components/FrameworkContent.tsx`

**Scopo:** One-pager tipografica con prose editoriale.

**Files:**
- Modify: `components/FrameworkContent.tsx`

- [ ] **Step 1: Rimuovere `@ts-nocheck`**

Se presente, rimuovere.

- [ ] **Step 2: Sostituire il body JSX**

```tsx
'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'

export default function FrameworkContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const f = t.framework

  return (
    <main>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-20 pb-12 md:pt-28">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6">
            {f.hero.title}
          </h1>
          <p className="text-[17px] md:text-[19px] text-ink-200 leading-relaxed max-w-[720px]">
            {f.hero.tagline}
          </p>
        </div>
      </section>

      {/* 4 PARAGRAFI */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[720px] mx-auto space-y-12">
          {[f.cosaE, f.perChi, f.stato, f.roadmap].map((blk, i) => (
            <div key={i}>
              <h2 className="text-[20px] md:text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">
                {blk.title}
              </h2>
              <p className="text-[16px] text-ink-200 leading-[1.65]">
                {blk.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA PILOT */}
      <section className="px-6 md:px-10 py-16 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {f.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed mb-8">
            {f.ctaFinale.body}
          </p>
          <Link
            href={`/${locale}/contatti/?motivo=framework-pilot`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {f.ctaFinale.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 3: Build + test**

```bash
npm run build
npm run dev
```
Aprire `/it/framework/`. La pagina deve essere breve, testuale, leggibile.

- [ ] **Step 4: Commit**

```bash
git add components/FrameworkContent.tsx
git commit -m "refactor: reskin FrameworkContent as editorial one-pager

Text-first layout with max-w-[720px] prose column. Four typographic
blocks (cosa, per chi, stato, roadmap) followed by CTA pilot on
navy-deep surface. Removes @ts-nocheck.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 12: Refactor `components/AboutContent.tsx`

**Files:**
- Modify: `components/AboutContent.tsx`

- [ ] **Step 1: Sostituire il body JSX**

```tsx
'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'

export default function AboutContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const a = t.about

  return (
    <main>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-20 pb-12 md:pt-28">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6">
            {a.hero.title}
          </h1>
          <p className="text-[17px] md:text-[19px] text-ink-200 leading-relaxed max-w-[720px]">
            {a.hero.subtitle}
          </p>
        </div>
      </section>

      {/* SOCIETÀ + MISSIONE */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[720px] mx-auto space-y-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">LA SOCIETÀ</div>
            <h2 className="text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{a.societa.title}</h2>
            <p className="text-[16px] text-ink-200 leading-[1.65]">{a.societa.body}</p>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">LA MISSIONE</div>
            <h2 className="text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{a.missione.title}</h2>
            <p className="text-[16px] text-ink-200 leading-[1.65]">{a.missione.body}</p>
          </div>
        </div>
      </section>

      {/* COSA PRODUCIAMO */}
      <section className="px-6 md:px-10 py-16 border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">COSA PRODUCIAMO</div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-8 tracking-[-0.01em]">
            {a.cosaProduciamo.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {a.cosaProduciamo.items.map((item) => (
              <div key={item.name} className="bg-navy-card border border-navy-line rounded p-8">
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-3">{item.status}</div>
                <h3 className="text-[20px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{item.name}</h3>
                <p className="text-sm text-ink-300 leading-[1.55]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-10 py-16 border-t border-navy-line">
        <div className="max-w-[720px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">IL TEAM</div>
          <h2 className="text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{a.team.title}</h2>
          <p className="text-[16px] text-ink-200 leading-[1.65]">{a.team.body}</p>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 md:px-10 py-16 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {a.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed mb-8">{a.ctaFinale.body}</p>
          <Link
            href={`/${locale}/contatti/`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {a.ctaFinale.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Build + test + commit**

```bash
npm run build
git add components/AboutContent.tsx
git commit -m "refactor: reskin AboutContent with institutional tokens

5 sections: hero, societa+missione (narrative), cosa produciamo (cards),
team (prose), CTA finale on navy-deep.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 13: Refactor `components/ContattiContent.tsx`

**Files:**
- Modify: `components/ContattiContent.tsx`

- [ ] **Step 1: Sostituire il body JSX**

```tsx
'use client'
import { useTranslations } from '@/lib/i18n/context'
import ContactForm from '@/components/ContactForm'

export default function ContattiContent() {
  const t = useTranslations()
  const page = t.contact.page
  const diretti = t.contact.diretti

  return (
    <main>
      <section className="px-6 md:px-10 pt-20 pb-10 md:pt-28">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6">
            {page.title}
          </h1>
          <p className="text-[17px] text-ink-300 leading-[1.55] max-w-[640px]">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[640px] mx-auto">
          <ContactForm />
        </div>
      </section>

      {diretti ? (
        <section className="px-6 md:px-10 py-12 border-t border-navy-line">
          <div className="max-w-[640px] mx-auto">
            <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">OPPURE IN MODO DIRETTO</div>
            <h2 className="text-[18px] font-display font-medium text-ink-100 mb-4">{diretti.title}</h2>
            <ul className="font-sans text-sm text-ink-200 space-y-2">
              {diretti.email ? (
                <li>
                  <a href={`mailto:${diretti.email}`} className="text-ink-100 border-b border-current pb-0.5">
                    {diretti.email}
                  </a>
                </li>
              ) : null}
              {diretti.pec ? <li className="text-ink-300">{diretti.pec}</li> : null}
              {diretti.legal ? <li className="text-ink-400 text-xs mt-4">{diretti.legal}</li> : null}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  )
}
```

- [ ] **Step 2: Build + commit**

```bash
npm run build
git add components/ContattiContent.tsx
git commit -m "refactor: reskin ContattiContent with institutional tokens

Simple prose column max-w-[640px] with form, then diretti section
with mono kicker and flat link styling.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 14: Refactor `components/ContactForm.tsx`

**Scopo:** Solo cambi di classi (colori + border + input). Logica invariata.

**Files:**
- Modify: `components/ContactForm.tsx`

- [ ] **Step 1: Aggiornare le costanti classi**

Nel file, trovare e sostituire:

```tsx
const inputClasses =
  'w-full bg-navy-card border border-navy-line rounded px-4 py-3 text-ink-100 font-sans text-sm placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-ink-200 focus:ring-1 focus:ring-ink-200'

const labelClasses = 'block text-sm font-sans text-ink-300 mb-1.5'
```

- [ ] **Step 2: Aggiornare il bottone submit**

Trovare il bottone submit e sostituire le classi con:

```tsx
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 hover:border-ink-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isSubmitting ? form.sending : form.submit}
</button>
```

- [ ] **Step 3: Aggiornare success/error containers**

Cambiare eventuali bg-gold/border-gold nei messaggi success con bg-navy-card/border-navy-line.

- [ ] **Step 4: Aggiornare checkbox consenso**

```tsx
<input
  type="checkbox"
  required
  className="accent-steel-hi mt-1"
/>
```

- [ ] **Step 5: Build + test**

```bash
npm run build
npm run dev
```
Compilare il form test, verificare submit path.

- [ ] **Step 6: Commit**

```bash
git add components/ContactForm.tsx
git commit -m "refactor: reskin ContactForm inputs and buttons

Input fields on navy-card with navy-line borders and ink-200 focus
state. Primary submit button ink-100 on navy-ink. Checkbox uses
accent-steel-hi. Submit logic unchanged.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 15: Refactor `components/Footer.tsx`

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Rimuovere `@ts-nocheck` se presente**

- [ ] **Step 2: Sostituire il body JSX**

```tsx
'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'

export default function Footer() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep border-t border-navy-line px-6 md:px-10 pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-8 border-b border-navy-line">
          <div>
            <div className="font-mono font-semibold tracking-[0.15em] text-[16px] text-ink-100 mb-3">AEGIDA</div>
            <p className="text-[13px] text-ink-300 leading-[1.55] max-w-[420px]">
              {f.istituzionale}
            </p>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400 mb-3">PRODOTTI</div>
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/privacy-phone/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.privacyPhone}</Link></li>
              <li><Link href={`/${locale}/framework/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.framework}</Link></li>
              <li><Link href={`/${locale}/chi-siamo/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.chiSiamo}</Link></li>
              <li><Link href={`/${locale}/blog/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.blog}</Link></li>
              <li><Link href={`/${locale}/contatti/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.contatti}</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400 mb-3">LEGALE</div>
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/privacy-policy/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.legale.privacyPolicy}</Link></li>
              <li><Link href={`/${locale}/cookie-policy/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.legale.cookiePolicy}</Link></li>
              <li><Link href={`/${locale}/conformita/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.legale.conformita}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap justify-between gap-3 font-mono text-[11px] tracking-[0.12em] text-ink-400">
          <span>{f.copyright.replace('{year}', year.toString())}</span>
          <span>{f.payoff}</span>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Build + commit**

```bash
npm run build
git add components/Footer.tsx
git commit -m "refactor: reskin Footer with institutional dark background

3-column layout (brand + prodotti + legale) on navy-deep surface.
Mono wordmark, mono column titles, mono bottom line with copyright
and payoff. Removes @ts-nocheck.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 16: Refactor componenti condivisi (SectionLabel, FeatureGrid, ComparisonTable, SpecsTable)

**Scopo:** Uniformare i componenti usati in più pagine al nuovo design.

**Files:**
- Modify: `components/SectionLabel.tsx`, `components/FeatureGrid.tsx`, `components/ComparisonTable.tsx`, `components/SpecsTable.tsx`

- [ ] **Step 1: SectionLabel**

Sostituire il JSX con:

```tsx
interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`font-mono text-[11px] tracking-[0.2em] text-steel-hi ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: FeatureGrid**

Trovare l'attuale struttura. Sostituire le classi container in modo che:
- Background card: `bg-navy-card border border-navy-line rounded p-6 md:p-8`
- Titolo: `text-[18px] font-display font-medium text-ink-100 mb-2.5`
- Body: `text-sm text-ink-300 leading-[1.55]`
- Nessuna icona colorata — solo testo (o numerazione mono se già presente)

- [ ] **Step 3: ComparisonTable**

Tabella con:
- `<table>` wrapper `overflow-hidden border border-navy-line rounded`
- `<thead>`: `bg-navy-card text-ink-100 font-mono text-[11px] tracking-[0.15em] uppercase`
- `<th>`: `px-4 py-3 border-b border-navy-line text-left`
- `<td>`: `px-4 py-3 border-b border-navy-line text-sm text-ink-200`
- Riga evidenziata (AEGIDA): `bg-navy-card` + `border-l-2 border-steel`
- Niente gold fills per row highlight.

- [ ] **Step 4: SpecsTable**

Pattern analogo a ComparisonTable. Righe con separatori `border-b border-navy-line`, testo `text-sm`, labels in mono `text-ink-300`.

- [ ] **Step 5: Build + commit**

```bash
npm run build
git add components/SectionLabel.tsx components/FeatureGrid.tsx components/ComparisonTable.tsx components/SpecsTable.tsx
git commit -m "refactor: reskin shared components (SectionLabel, FeatureGrid, tables)

Unified to navy-card surfaces, navy-line borders, mono labels.
Tables use hairline separators, ComparisonTable highlight via
steel left border instead of gold fill.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 17: Refactor `components/blog/*` (article card + category badge)

**Scopo:** Uniformare il listing del blog al nuovo design.

**Files:**
- Modify: `components/blog/CategoryBadge.tsx`, `components/blog/ArticleCard.tsx` (o i nomi esatti)

- [ ] **Step 1: Identificare i file blog**

```bash
ls components/blog/
```

- [ ] **Step 2: CategoryBadge — uniformare colori**

Sostituire la mappa categoria → colore con una palette coerente. Per tutte le categorie, pattern:

```tsx
const categoryStyles: Record<string, string> = {
  'threat-intelligence': 'border-steel text-steel-hi',
  'deep-analysis': 'border-ink-400 text-ink-200',
  'compliance': 'border-ink-400 text-ink-200',
  'technology': 'border-ink-400 text-ink-200',
  'case-studies': 'border-ink-400 text-ink-200',
}

// Badge JSX:
<span className={`inline-block font-mono text-[10px] tracking-[0.15em] uppercase border px-2 py-1 rounded-sm ${style}`}>
  {category}
</span>
```

Unica distinzione: `threat-intelligence` conserva l'accento steel (è la più "newsworthy"); le altre categorie restano neutre. Zero `purple-*`, `red-*`, `green-*`, `gold-*`.

- [ ] **Step 3: ArticleCard**

Card con:
- `bg-navy-card border border-navy-line rounded p-6 hover:border-ink-400 transition-colors`
- Title: `text-[18px] font-display font-medium text-ink-100 mb-2`
- Data + categoria in flex: `font-mono text-[11px] text-ink-400 tracking-wide mb-3`
- Excerpt: `text-sm text-ink-300 leading-[1.55]`
- Hover solo su border (no transform, no shadow)

- [ ] **Step 4: Blog index page**

Se c'è un component listing (`components/blog/BlogIndex.tsx` o simile), riskinnare wrapper e titoli pagina col pattern hero standard.

- [ ] **Step 5: Build + test**

```bash
npm run build
npm run dev
```
Aprire `/it/blog/`.

- [ ] **Step 6: Commit**

```bash
git add components/blog/
git commit -m "refactor: reskin blog card and category badge

Cards on navy-card surface, border-hover transitions. Category
badges use mono text with hairline border; only threat-intelligence
keeps steel accent, others neutral.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 18: Gestire ShieldSVG + altri componenti residui

**Scopo:** Decidere sorte di ShieldSVG e verificare che nessun componente secondario abbia @ts-nocheck o classi vecchie residue.

**Files:**
- Eventualmente modify / move: `components/ShieldSVG.tsx`, `components/LayerDiagram.tsx`, `components/PacketInspector.tsx`

- [ ] **Step 1: Verificare usi di ShieldSVG**

```bash
grep -rn "ShieldSVG" components/ app/ --include="*.tsx" --include="*.ts"
```

- [ ] **Step 2: Se usato solo per OG image / decorazione**

Archiviare come ThreatTicker:
```bash
git mv components/ShieldSVG.tsx lib/archived/ShieldSVG.tsx
# aggiornare lib/archived/README.md
```

Rimuovere import dai file che lo usano (se rimangono alcuni).

- [ ] **Step 3: Se usato per OG image effettivamente servita**

Conservarlo in components/ ma togliere l'animazione orbital ring (se presente), rendendo SVG statico con colori aggiornati (`stroke="#4A6583"` invece di gold).

- [ ] **Step 4: LayerDiagram + PacketInspector**

Questi hanno ancora `@ts-nocheck`. Sono usati dal Framework pre-riduzione? Probabilmente no (la one-pager non li importa). Verificare:

```bash
grep -rn "LayerDiagram\|PacketInspector" components/ app/ --include="*.tsx" | grep -v "lib/archived/"
```

Se nessun uso attivo → spostarli in `lib/archived/`.

```bash
git mv components/LayerDiagram.tsx lib/archived/LayerDiagram.tsx
git mv components/PacketInspector.tsx lib/archived/PacketInspector.tsx
```

Aggiornare `lib/archived/README.md`.

- [ ] **Step 5: Build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: archive unused legacy components (ShieldSVG/LayerDiagram/PacketInspector)

Components no longer referenced after Progetto 1 framework reduction
and Progetto 2 redesign. Preserved in lib/archived/.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

Se ShieldSVG resta (OG image), adattare il messaggio di commit di conseguenza.

---

### Task 19: Sweep finale — eliminazione residui gold/animate/scrollreveal

**Scopo:** Verifica totale che non restino tracce del vecchio design.

**Files:** nessuno (solo verifica + eventuali fix)

- [ ] **Step 1: Zero gold**

```bash
grep -rn "gold-\|gold\." --include="*.tsx" --include="*.ts" --include="*.css" components/ app/ lib/ | grep -v "lib/archived/" | grep -v "docs/framework-archive"
```
Expected: 0 match fuori archivi. Se trova qualcosa, sostituire con il token giusto (`ink-100` / `ink-200` / `steel-hi`).

- [ ] **Step 2: Zero ScrollReveal / animate-ping / animate-pulse / animate-spin attivi**

```bash
grep -rn "ScrollReveal\|animate-ping\|animate-pulse\|animate-spin" --include="*.tsx" components/ app/ | grep -v "lib/archived/"
```
Expected: 0 match. Se trova qualcosa, rimuovere.

- [ ] **Step 3: Zero backdrop-blur attivi**

```bash
grep -rn "backdrop-blur" --include="*.tsx" --include="*.css" components/ app/
```
Accettabile: `backdrop-blur-none` (esplicito). Non accettabile: `backdrop-blur-sm/md/lg/xl`.

- [ ] **Step 4: Zero @ts-nocheck nei componenti**

```bash
grep -rn "@ts-nocheck" components/
```
Expected: 0. Se ne trovi, rimuovi e assicurati che i tipi siano corretti.

- [ ] **Step 5: Build finale**

```bash
npm run build 2>&1 | tail -20
```
Expected: SUCCESS. 6 IT routes generate.

- [ ] **Step 6: Commit (solo se ci sono correzioni da Step 1-4)**

```bash
git add -A
git commit -m "design: final sweep — zero gold, zero cascade animations, zero @ts-nocheck

All legacy design tokens and workarounds cleared from production code.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

Se non ci sono correzioni, saltare il commit.

---

### Task 20: Verifica finale end-to-end

**Scopo:** Preview completo su tutte le pagine del sito, confronto contro i criteri di successo della spec.

- [ ] **Step 1: Build**

```bash
cd "C:/Users/Windows 11/Desktop/LAVORO/SITI WEB CLAUDE/aegida-website"
npm run build 2>&1 | tail -15
```

- [ ] **Step 2: Dev server**

```bash
npm run dev
```

- [ ] **Step 3: Checklist visita manuale IT + responsive**

Aprire in browser (desktop):

- [ ] `http://localhost:3000/it/` — Hero sobrio, Proof strip mono, Istituzionale, Prodotti asimmetrica, BlogStrip, Proof preview, CTA finale
- [ ] `http://localhost:3000/it/privacy-phone/` — Hero, Cos'è, Cosa include 2×2 numerata, Proof UFED re-skin, Pricing re-skin, Metodologia, Disclaimer, CTA
- [ ] `http://localhost:3000/it/framework/` — One-pager tipografica 4 paragrafi + CTA pilot
- [ ] `http://localhost:3000/it/chi-siamo/` — 5 sezioni sobrie, `[DA CONFERMARE]` visibile
- [ ] `http://localhost:3000/it/contatti/` — form con skin nuovo
- [ ] `http://localhost:3000/it/blog/` — cards blog sobrie con category badge
- [ ] Header su ogni pagina: wordmark mono AEGIDA + 5 nav items + CTA outline
- [ ] Footer su ogni pagina: navy-deep, 3 colonne, bottom-line mono

Ridimensionare a 768px (tablet) e 360px (mobile):
- [ ] Hero collassa gracefully
- [ ] Nav diventa hamburger
- [ ] Grid 2×2 diventa 1 colonna
- [ ] Footer 3 colonne diventano 1 colonna

- [ ] **Step 4: Criteri di successo dalla spec**

Confronto con `docs/superpowers/specs/2026-04-20-redesign-visivo-design.md` — sezione Criteri di successo:

- [ ] Gold zero: `grep -r "gold-" ...` = 0 (già verificato in Task 19)
- [ ] Animazioni zero on load: già verificato in Task 19
- [ ] Font loading: `grep -r "next/font/google\|Inter\|JetBrains_Mono" app/` → Inter + JetBrains_Mono presenti
- [ ] Build + Lighthouse: dev server avviato, niente errori console
- [ ] Render manuale 5 pagine: checklist sopra
- [ ] Mobile: test 3 breakpoint sopra
- [ ] Percezione: NOTA all'utente che il test "mostra a 3 persone del target" richiede di fare un giro con i clienti reali

- [ ] **Step 5: Ultimo merge/deploy decision**

Stato branch ora: `feature/bonifica-comunicazione-ita` contiene Progetto 1 + Progetto 2.

Opzioni:
- **A** Merge branch su main, deploy (`bash deploy.sh`)
- **B** Prima passare al Progetto 3 (white paper) sopra lo stesso branch, poi merge unico
- **C** Lasciare tutto sul branch e far decidere all'utente

Default: segnalare lo stato all'utente e aspettare sua decisione (no auto-merge, no auto-deploy).

- [ ] **Step 6: Riepilogo utente**

Produrre messaggio conclusivo per l'utente con:
- Numero commit totali del Progetto 2
- Stato `@ts-nocheck` (0 su production)
- Componenti archiviati (lista)
- Elementi visivi chiave (screenshot mentale)
- Placeholder ancora presenti (i 3 `[DA CONFERMARE]` dal Progetto 1)
- Decisione di deploy/merge

Non eseguire merge / push / deploy senza conferma esplicita.

---

## Note di chiusura progetto

Dopo il completamento:

1. **Progetto 3 (White paper)** — riflette la nuova palette nel PDF.
2. **Fase 2 Progetto 1** — traduzioni EN/DE aggiornate al copy (e al registro visivo se emergono adattamenti).
3. **Memory file da aggiornare:**
   - `project_aegida.md` — nuovi token e font loading documentati
   - `session_handoff_ufed_pivot.md` — chiusura Progetto 2

4. **Monitoraggio post-deploy:**
   - Google Analytics: bounce rate e tempo medio sulla home
   - Lighthouse produzione: conferma miglioramento performance (meno JS animato)
   - Raccogliere feedback qualitativo da 3 persone del target per validazione percettiva

---

## Decisioni rimandate già risolte nel piano

1. **Branch:** proseguo su `feature/bonifica-comunicazione-ita` (stessa base del Progetto 1).
2. **Ordine refactor:** top-down — prima token, poi shared components, poi pages. Applicato nella numerazione dei task.
3. **ShieldSVG:** verificato in Task 18. Archivio se non usato, statico se serve per OG.
4. **Card prodotto hover:** link diretto senza reveal (già nel Task 9 JSX).
