# Stringhe framework — versione pre-bonifica 2026-04-20

Copia letterale della sezione `framework` di `lib/i18n/locales/it.ts` prima
della riduzione a one-pager. Conservata per rilancio commerciale 2027-2028.

```typescript
framework: {
    hero: {
      sectionLabel: 'FRAMEWORK',
      title: 'AEGIDA Framework',
      tagline: 'Post-Quantum Security per Infrastrutture Critiche',
      description:
        'AEGIDA Framework protegge le comunicazioni WAN delle infrastrutture critiche con crittografia post-quantum (ML-KEM, NIST FIPS 203), uno stealth layer che rende il traffico indistinguibile da normali sessioni HTTPS, e controllo accessi zero-trust per fornitori OEM. Progettato per energia, sanita, trasporti e pubblica amministrazione.',
      ctaDownload: 'Scarica Documento Tecnico',
      ctaContact: 'Richiedi PoC',
    },

    problem: {
      sectionLabel: 'IL PROBLEMA',
      title: "Le reti di comunicazione sono la superficie d'attacco",
      description:
        'Le infrastrutture critiche dipendono da reti WAN per il controllo remoto, la telemetria e la manutenzione. Queste connessioni attraversano Internet pubblico e sono esposte a intercettazione, targeting e disruption. Le soluzioni tradizionali (VPN IPSec, WireGuard) non offrono protezione post-quantum, non nascondono il traffico e non gestiscono gli accessi dei fornitori.',
      threats: [
        {
          type: 'Intercettazione',
          detail:
            'Store-now-decrypt-later: dati cifrati oggi, decifrabili domani con computer quantistici.',
        },
        {
          type: 'Compromissione fornitore',
          detail:
            'Ucraina 2015, Colonial Pipeline 2021, Synnovis UK 2024, SolarWinds 2020.',
        },
        {
          type: 'Identificazione targeting',
          detail:
            'Pattern VPN rilevabili: IKEv2 port 500/4500, WireGuard UDP fisso, fingerprint TLS.',
        },
        {
          type: 'Disruption mirata',
          detail:
            'Scenari NATO/ENISA/CISA: attacchi coordinati su energia, acqua, trasporti.',
        },
      ],
      tableHeaders: {
        threat: 'Minaccia',
        detail: 'Dettaglio',
      },
    },

    layers: {
      sectionLabel: 'ARCHITETTURA',
      title: 'Tre Layer di Protezione',
      layerA: {
        label: 'Layer A',
        name: 'ML-KEM (FIPS 203)',
        subtitle: 'Post-Quantum Key Exchange',
        details: [
          'Standard NIST FIPS 203 (agosto 2024)',
          'ML-KEM ex Kyber-768',
          'Sicurezza classica equivalente ad AES-192',
          "Resistente all'algoritmo di Shor",
        ],
      },
      layerB: {
        label: 'Layer B',
        name: 'AES-256-GCM',
        subtitle: 'Symmetric Authenticated Encryption',
        details: [
          'AES-256-GCM autenticato',
          'Throughput: 350 Mbps',
          'Key derivation da Layer A',
          'Rotazione automatica, forward secrecy',
        ],
      },
      layerC: {
        label: 'Layer C',
        name: 'Stealth HTTPS Obfuscation',
        subtitle: 'Anti-DPI Traffic Camouflage',
        details: [
          'Porta 443/TCP, identico a HTTPS',
          'Bypassa Deep Packet Inspection',
          'Nessuna analisi del traffico possibile',
          'Invisibile a firewall e IDS',
        ],
      },
    },

    stats: {
      items: [
        { value: '350', unit: 'Mbps', label: 'Throughput cifrato' },
        { value: '24/7', unit: '', label: 'Fanless, zero manutenzione' },
        { value: '0%', unit: '', label: 'DPI detection rate' },
        { value: '<5', unit: 'ms', label: 'Overhead su fibra' },
      ],
    },

    comparison: {
      sectionLabel: 'COMPARATIVA',
      title: 'AEGIDA vs Soluzioni Esistenti',
      headers: ['', 'IPSec/IKEv2', 'WireGuard', 'ZTNA', 'SD-WAN', 'AEGIDA'],
      rows: [
        { label: 'Cifratura simmetrica' },
        { label: 'PQC Key Exchange' },
        { label: 'Traffic Obfuscation / DPI Resistance' },
        { label: 'Zero-Trust Access OEM' },
        { label: 'Nessun fingerprint' },
        { label: 'Forward Secrecy con PQC' },
      ],
      note: 'AEGIDA non sostituisce, integra. Opera a livello trasporto WAN senza modifiche alla rete interna.',
    },

    threats: {
      sectionLabel: 'THREAT LANDSCAPE',
      title: 'Attacchi Documentati a Infrastrutture Critiche',
      cards: [
        {
          year: '2016',
          name: 'INDUSTROYER / CRASHOVERRIDE',
          location: 'Ucraina',
          description:
            'Primo malware progettato per attaccare reti elettriche. Interruzione di corrente a Kiev tramite protocolli ICS manipolati.',
        },
        {
          year: '2017',
          name: 'TRITON / TRISIS',
          location: 'Petrolchimico',
          description:
            'Attacco ai sistemi di sicurezza Triconex SIS. Obiettivo: disabilitare protezioni fisiche in impianto petrolchimico.',
        },
        {
          year: '2022',
          name: 'PIPEDREAM / INCONTROLLER',
          location: 'Sandworm / GRU',
          description:
            'Toolkit modulare per attacchi a PLC Schneider, OMRON e server OPC UA. Capacita di disruption su larga scala.',
        },
        {
          year: 'Ongoing',
          name: 'Store-Now-Decrypt-Later',
          location: 'NSA, NCSC UK, BSI',
          description:
            'Intercettazione massiva di traffico cifrato per futura decrittazione con computer quantistici. Minaccia confermata da agenzie.',
        },
      ],
    },

    nis2: {
      sectionLabel: 'NIS2',
      title: 'Conformita NIS2',
      badgeTitle: 'Direttiva NIS2 — D.Lgs. 138/2024',
      badgeSubtitle:
        'Sanzioni fino al 2% del fatturato annuo globale per mancata conformita.',
      tableHeaders: {
        requirement: 'Requisito NIS2',
        coverage: 'Copertura AEGIDA',
      },
      rows: [
        {
          article: 'Art. 21 Crittografia',
          mapping:
            'ML-KEM (FIPS 203) + AES-256-GCM con forward secrecy e key rotation automatica.',
        },
        {
          article: 'Art. 21 Gestione rischio',
          mapping:
            'Mesh ridondante, failover automatico, nessun Single Point of Failure.',
        },
        {
          article: 'Art. 21 Supply chain',
          mapping:
            'Accessi OEM zero-trust: autenticazione, autorizzazione e logging per ogni sessione.',
        },
        {
          article: 'Artt. 20-23 Governance',
          mapping:
            'Logging strutturato, audit trail completo, reportistica automatica.',
        },
      ],
    },

    roadmap: {
      sectionLabel: 'CERTIFICAZIONI',
      title: 'Roadmap Certificazioni',
      items: [
        { label: 'NIST FIPS 203', status: 'Implementato' },
        { label: 'FIPS 140-3', status: 'In corso' },
        { label: 'Common Criteria EAL4+', status: 'In corso' },
        { label: 'ACN Qualificazione', status: 'In corso' },
      ],
      statusImplemented: 'Implementato',
      statusInProgress: 'In corso',
    },

    poc: {
      sectionLabel: 'PROOF OF CONCEPT',
      title: 'Proof of Concept',
      description:
        "Il percorso PoC si articola in tre fasi per validare le performance e l'integrazione di AEGIDA nella vostra infrastruttura.",
      phases: [
        {
          phase: '1',
          title: 'Setup',
          description:
            'Analisi requisiti, configurazione appliance e definizione baseline.',
        },
        {
          phase: '2',
          title: 'Deployment',
          description:
            'Installazione in ambiente di produzione e integrazione con infrastruttura esistente.',
        },
        {
          phase: '3',
          title: 'Analisi',
          description:
            'Raccolta metriche, report tecnico completo e raccomandazioni per il roll-out.',
        },
      ],
    },

    download: {
      sectionLabel: 'DOCUMENTAZIONE',
      title: 'Scarica la Documentazione',
      items: [
        {
          title: 'Brochure Framework',
          description: 'Panoramica commerciale e vantaggi di AEGIDA Framework.',
        },
        {
          title: 'Brief Generale',
          description: 'Per il Responsabile Sicurezza.',
        },
        {
          title: 'Documento Tecnico',
          description: 'Architettura dettagliata e Proof of Concept.',
        },
      ],
    },

    cta: {
      title: 'Pronto per una valutazione tecnica?',
      description:
        'Contatta il nostro team per una valutazione tecnica gratuita della tua infrastruttura e scopri come AEGIDA Framework puo proteggere le tue comunicazioni critiche.',
      button: 'Richiedi Valutazione Tecnica',
    },
  },
```
