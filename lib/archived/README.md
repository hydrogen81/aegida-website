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

## ThreatTicker.tsx

Rimosso il 2026-04-20 durante il redesign visivo (Progetto 2).
Motivo: estetica matrix-cyberpunk (pulsing dot verde, scroll infinito, badge LIVE)
incompatibile con la direzione istituzionale-sobria. Sostituito da
`components/BlogStrip.tsx` che mostra gli ultimi 3 articoli del blog in forma
statica. Il prebuild `scripts/fetch-threats.js` (popola `lib/threats-live.json`)
resta funzionante per eventuale riuso futuro.

## ScrollReveal.tsx

Rimosso il 2026-04-20. Motivo: cascade fade-in su scroll (Framer Motion
con 126 utilizzi) incompatibile con la nuova direzione "animazioni-zero
al primo paint". Tutti gli utilizzi sono stati sostituiti con <div> o
rimossi come wrapper superflui.
