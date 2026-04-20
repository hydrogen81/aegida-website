# TikTok Descriptions — Batch 5 (2 video: 17 aprile 2026)

Account: **@aegida.cyber**
Video nella cartella: `video tik tok/`

---

## 31 — Strapi npm: 36 pacchetti malevoli in 13 ore

**File:** `31-strapi-npm-supply-chain.mp4`

**Caption:**

Tra il 14 e il 15 aprile 2026 un attore ha pubblicato 36 pacchetti npm malevoli travestiti da plugin Strapi, da 4 account fake, tutti con naming strapi-plugin-qualcosa (cron, events, seed, api, database). Otto varianti di malware in 13 ore. Un solo bersaglio: Guardarian, piattaforma crypto. Il vettore? Il campo postinstall nel package.json — zero click, il codice gira appena digiti npm install, con i tuoi privilegi. Variante 6: credenziali PostgreSQL hardcodate verso i database di produzione di Guardarian. Variante 7: hostname check "prod-strapi", persistenza crontab, reverse shell. Variante 8: esecuzione fileless via node -e, caccia ai secrets in /opt/secrets/. Esfiltrazione in HTTP chiaro — rumore di fondo che nessun SOC filtra. IOC: IP 144.31.107.231, file /tmp/.node_gc.js. Se usi Strapi in agenzia, fai un audit delle dipendenze oggi. Analisi completa sul blog.

**Hashtag:**

#cybersecurity #npm #strapi #supplychain #malware #nodejs #cybersecurityitalia #aegida #threatintelligence #postinstall #javascript #devsecops #crypto #guardarian #redteam #cybernews #italia #infosec #packagemanager #supplychainattack

---

## 32 — FrostArmada: 18.000 router dirottati da APT28

**File:** `32-apt28-frostarmada-router.mp4`

**Caption:**

Tra maggio 2025 e aprile 2026 APT28 (GRU unità 26165, Fancy Bear) ha condotto FrostArmada: una campagna sistematica di DNS hijacking su router consumer e SMB che ha raggiunto 18.000 dispositivi compromessi in 120 paesi. Vettore: MikroTik, TP-Link, Nethesis, Fortinet — firmware obsoleti, credenziali deboli, Winbox e web admin esposti a internet. Non hanno bucato i target finali: hanno bucato i router. Da lì modificano il DNS distribuito via DHCP e ogni PC, smartphone e server della rete locale usa il DNS dell'attaccante. Quando l'utente apre login.microsoftonline.com, il traffico viene dirottato su un proxy Adversary-in-the-Middle che ruba username, password, token OAuth e cookie — MFA inclusa. L'unico segnale? Il warning del certificato TLS che nessuno più legge. L'Italia è strutturalmente esposta: MikroTik è capillare nelle PMI, Nethesis è confermato tra i target. Il 7 aprile 2026 FBI, DOJ, governo polacco, Microsoft e Lumen hanno smantellato l'infrastruttura, ma i router restano vulnerabili — ricompromissione attesa entro 60-90 giorni. Verifica oggi: DNS del router, firmware, password, log verso i C2. Analisi completa sul blog.

**Hashtag:**

#cybersecurity #apt28 #fancybear #gru #router #mikrotik #dnshijacking #cybersecurityitalia #aegida #threatintelligence #nato #microsoft365 #aitm #oauth #italia #pmi #infosec #nethesis #cybernews #russia

---

## Note operative

- Sfondo nero, solo italiano, accenti corretti (è, più, già, perché)
- Priorità di pubblicazione: prima **32 FrostArmada** (geopolitica + angolo Italia MikroTik = alto engagement), poi **31 Strapi npm** (target B2B/dev, performance stabile in orario diurno)
- Cadenza consigliata: 1 video al mattino (8:00-10:00) e 1 a fine giornata (19:00-21:00)
- Il 32 è particolarmente rilevante per system integrator e MSP italiani: valutare cross-posting su LinkedIn
