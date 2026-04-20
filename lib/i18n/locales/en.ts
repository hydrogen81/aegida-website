import type { Translations } from '../types'

const en: Translations = {
  /* ================================================================ */
  /*  Navigation                                                       */
  /* ================================================================ */
  nav: {
    privacyPhone: 'Privacy Phone',
    framework: 'Framework',
    blog: 'Blog',
    chiSiamo: 'About us',
    contatti: 'Contact',
    richiedi: 'Request a meeting',
    // deprecated keys kept for transitional compatibility
    prodotti: 'Products',
    settori: 'Sectors',
    conformita: 'Compliance',
    aegidaConnect: 'Connect',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
  footer: {
    copyright: '\u00a9 2026 H4RESEARCH SRL. All rights reserved.',
    location: 'Rome, Italy \u2014 VAT IT14765811006',
    privacy: 'Privacy Policy',
    cookie: 'Cookie Policy',
    payoff: 'DESIGNED IN ITALY.',
  },

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
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

  /* ================================================================ */
  /*  Contact Form (shared)                                            */
  /* ================================================================ */
  contactForm: {
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    organizationLabel: 'Organization',
    organizationPlaceholder: 'Organization name',
    emailLabel: 'Email',
    emailPlaceholder: 'email@organization.com',
    roleLabel: 'Role',
    rolePlaceholder: 'Your position',
    productLabel: 'Product of interest',
    productPlaceholder: 'Select a product',
    productOptions: ['Privacy Phone', 'Framework', 'Both'],
    sectorLabel: 'Sector',
    sectorPlaceholder: 'Select your sector',
    sectorOptions: [
      'Energy',
      'Healthcare',
      'Legal',
      'Transportation',
      'Journalism',
      'Government',
      'Other',
    ],
    messageLabel: 'Message',
    messagePlaceholder: 'Describe your security requirements...',
    submitButton: 'Submit Briefing Request',
    sending: 'Sending...',
    successTitle: 'Request submitted',
    successMessage:
      'Our team will contact you within 24 business hours.',
    errorDefault: 'An error occurred while sending. Please try again later.',
  },

  /* ================================================================ */
  /*  Privacy Phone page                                               */
  /* ================================================================ */
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
      sectionLabel: 'Riscontri forensi',
      title: 'Test Cellebrite UFED — 17 aprile 2026',
      intro: 'Il 17 aprile 2026 una società italiana indipendente specializzata in bonifica tecnica elettronica e contro-sorveglianza ha sottoposto AEGIDA Privacy Phone a estrazione forense con Cellebrite Inseyets UFED 10.8.0.322 e modulo Turbo Link. Il test è stato condotto sia in modalità Locked (BFU — Before First Unlock) sia in modalità Unlocked (AFU — After First Unlock) con codice di sblocco noto e fornito allo strumento. In nessuno dei due scenari UFED ha estratto dati utente.',
      testCard: {
        operator: 'Operatore terzo',
        operatorValue: 'Società italiana indipendente certificata in bonifica elettronica e contro-sorveglianza',
        software: 'Software',
        softwareValue: 'Cellebrite Inseyets UFED 10.8.0.322 + modulo Turbo Link',
        date: 'Data',
        dateValue: '17 aprile 2026',
        duration: 'Modalità',
        durationValue: 'BFU (Locked) e AFU (Unlocked) con codice fornito — 14 minuti totali',
        device: 'Dispositivo',
        deviceValue: 'AEGIDA Privacy Phone su base Pixel 10a, Aegida OS basato su GrapheneOS, Android 16, cifratura FBE',
      },
      timeline: [
        {
          time: '16:00 — Modalità Locked (BFU)',
          caption: 'UFED esaurisce i metodi BFU disponibili per Pixel 10a e restituisce "Access attempt failed — No suitable method found".',
          image: '/proof/ufed-test/01-locked-no-method-found.jpg',
          alt: 'Schermata UFED che mostra Access attempt failed in modalità Locked',
        },
        {
          time: '16:04 — Modalità Unlocked (AFU) con codice fornito',
          caption: 'UFED legge gli identificatori di dispositivo — campi accessibili via ADB e fastboot, non contenuto utente.',
          image: '/proof/ufed-test/02-metadata-only.jpg',
          alt: 'Schermata UFED Quick view che mostra solo identificatori di dispositivo',
        },
        {
          time: '16:07 — Estrazione dati utente',
          caption: 'UFED conclude: "Access attempt failed for Google Pixel 10a — No suitable method found". Nessun dato utente estratto.',
          image: '/proof/ufed-test/03-unlocked-passcode-failed.jpg',
          alt: 'Schermata UFED che mostra Access attempt failed for Google Pixel 10a',
        },
        {
          time: 'Postazione del test',
          caption: 'Laptop con Cellebrite Inseyets UFED, hardware Cellebrite Turbo Link, AEGIDA Privacy Phone.',
          image: '/proof/ufed-test/04-setup-fisico.jpg',
          alt: 'Foto della postazione del test',
        },
      ],
      conclusionLabel: 'Conclusione',
      conclusionText: 'Nel test del 17 aprile 2026, Cellebrite Inseyets UFED 10.8.0.322 con Turbo Link non ha estratto alcun dato utente da AEGIDA Privacy Phone, né in modalità BFU (Locked) né in modalità AFU (Unlocked) con codice di sblocco fornito allo strumento.',
      disclaimer: 'Cellebrite, Inseyets, UFED e Turbo Link sono marchi registrati di Cellebrite DI Ltd. AEGIDA non è affiliata a Cellebrite DI Ltd. Diritto di replica: legal@aegida-systems.com.',
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
        body: 'Per studi legali, redazioni, ONG e team aziendali con 5 o più dispositivi sono disponibili condizioni dedicate.',
        cta: 'Richiedi preventivo',
      },
    },
    metodologia: {
      label: 'Metodologia',
      title: 'Come testiamo ciò che dichiariamo',
      body: 'Il test del 17 aprile 2026 è stato condotto da una società italiana di analisi forense certificata. Lo strumento utilizzato è Cellebrite Inseyets UFED 10.8.0.322 con modulo Turbo Link.',
    },
    disclaimer: {
      text: 'Cellebrite, Inseyets, UFED e Turbo Link sono marchi registrati di Cellebrite DI Ltd. AEGIDA non è affiliata a Cellebrite DI Ltd. Diritto di replica: legal@aegida-systems.com.',
    },
    ctaFinale: {
      title: 'Richiedi un colloquio',
      body: 'Per scegliere un AEGIDA Privacy Phone non serve un carrello. Serve un colloquio.',
      cta: 'Richiedi un colloquio',
    },
  },

  /* ================================================================ */
  /*  Framework page                                                   */
  /* ================================================================ */
  framework: {
    hero: {
      sectionLabel: 'FRAMEWORK',
      title: 'AEGIDA Framework',
      tagline: 'Post-Quantum Security for Critical Infrastructure',
      description:
        'AEGIDA Framework protects WAN communications for critical infrastructure with post-quantum cryptography (ML-KEM, NIST FIPS 203), a stealth layer that makes traffic indistinguishable from normal HTTPS sessions, and zero-trust access control for OEM vendors. Designed for energy, healthcare, transportation, and government sectors.',
      ctaDownload: 'Download Technical Document',
      ctaContact: 'Request PoC',
    },

    problem: {
      sectionLabel: 'THE PROBLEM',
      title: 'Communication networks are the attack surface',
      description:
        'Critical infrastructure depends on WAN networks for remote control, telemetry, and maintenance. These connections traverse the public Internet and are exposed to interception, targeting, and disruption. Traditional solutions (IPSec VPN, WireGuard) do not offer post-quantum protection, do not conceal traffic, and do not manage vendor access.',
      threats: [
        {
          type: 'Interception',
          detail: 'Store-now-decrypt-later: data encrypted today, decryptable tomorrow with quantum computers.',
        },
        {
          type: 'Vendor compromise',
          detail: 'Ukraine 2015, Colonial Pipeline 2021, Synnovis UK 2024, SolarWinds 2020.',
        },
        {
          type: 'Identification & targeting',
          detail: 'Detectable VPN patterns: IKEv2 port 500/4500, WireGuard fixed UDP, TLS fingerprint.',
        },
        {
          type: 'Targeted disruption',
          detail: 'NATO/ENISA/CISA scenarios: coordinated attacks on energy, water, and transportation.',
        },
      ],
      tableHeaders: {
        threat: 'Threat',
        detail: 'Detail',
      },
    },

    layers: {
      sectionLabel: 'ARCHITECTURE',
      title: 'Three Layers of Protection',
      layerA: {
        label: 'Layer A',
        name: 'ML-KEM (FIPS 203)',
        subtitle: 'Post-Quantum Key Exchange',
        details: [
          'NIST FIPS 203 standard (August 2024)',
          'ML-KEM ex Kyber-768',
          'Classical security equivalent to AES-192',
          "Resistant to Shor's algorithm",
        ],
      },
      layerB: {
        label: 'Layer B',
        name: 'AES-256-GCM',
        subtitle: 'Symmetric Authenticated Encryption',
        details: [
          'Authenticated AES-256-GCM',
          'Throughput: 350 Mbps',
          'Key derivation from Layer A',
          'Automatic rotation, forward secrecy',
        ],
      },
      layerC: {
        label: 'Layer C',
        name: 'Stealth HTTPS Obfuscation',
        subtitle: 'Anti-DPI Traffic Camouflage',
        details: [
          'Port 443/TCP, identical to HTTPS',
          'Bypasses Deep Packet Inspection',
          'No traffic analysis possible',
          'Invisible to firewalls and IDS',
        ],
      },
    },

    stats: {
      items: [
        { value: '350', unit: 'Mbps', label: 'Encrypted throughput' },
        { value: '24/7', unit: '', label: 'Fanless, zero maintenance' },
        { value: '0%', unit: '', label: 'DPI detection rate' },
        { value: '<5', unit: 'ms', label: 'Overhead on fiber' },
      ],
    },

    comparison: {
      sectionLabel: 'COMPARISON',
      title: 'AEGIDA vs Existing Solutions',
      headers: ['', 'IPSec/IKEv2', 'WireGuard', 'ZTNA', 'SD-WAN', 'AEGIDA'],
      rows: [
        { label: 'Symmetric encryption' },
        { label: 'PQC Key Exchange' },
        { label: 'Traffic Obfuscation / DPI Resistance' },
        { label: 'Zero-Trust OEM Access' },
        { label: 'No fingerprint' },
        { label: 'Forward Secrecy with PQC' },
      ],
      note: 'AEGIDA does not replace \u2014 it integrates. It operates at the WAN transport layer without modifications to the internal network.',
    },

    threats: {
      sectionLabel: 'THREAT LANDSCAPE',
      title: 'Documented Attacks on Critical Infrastructure',
      cards: [
        {
          year: '2016',
          name: 'INDUSTROYER / CRASHOVERRIDE',
          location: 'Ukraine',
          description:
            'First malware designed to attack power grids. Power outage in Kyiv through manipulated ICS protocols.',
        },
        {
          year: '2017',
          name: 'TRITON / TRISIS',
          location: 'Petrochemical',
          description:
            'Attack on Triconex SIS safety systems. Goal: disable physical protections in a petrochemical plant.',
        },
        {
          year: '2022',
          name: 'PIPEDREAM / INCONTROLLER',
          location: 'Sandworm / GRU',
          description:
            'Modular toolkit for attacks on Schneider PLCs, OMRON, and OPC UA servers. Large-scale disruption capability.',
        },
        {
          year: 'Ongoing',
          name: 'Store-Now-Decrypt-Later',
          location: 'NSA, NCSC UK, BSI',
          description:
            'Mass interception of encrypted traffic for future decryption with quantum computers. Threat confirmed by intelligence agencies.',
        },
      ],
    },

    nis2: {
      sectionLabel: 'NIS2',
      title: 'NIS2 Compliance',
      badgeTitle: 'NIS2 Directive \u2014 EU Directive 2022/2555',
      badgeSubtitle:
        'Penalties of up to 2% of annual global turnover for non-compliance.',
      tableHeaders: {
        requirement: 'NIS2 Requirement',
        coverage: 'AEGIDA Coverage',
      },
      rows: [
        {
          article: 'Art. 21 Cryptography',
          mapping: 'ML-KEM (FIPS 203) + AES-256-GCM with forward secrecy and automatic key rotation.',
        },
        {
          article: 'Art. 21 Risk management',
          mapping: 'Redundant mesh, automatic failover, no Single Point of Failure.',
        },
        {
          article: 'Art. 21 Supply chain',
          mapping: 'Zero-trust OEM access: authentication, authorization, and logging for every session.',
        },
        {
          article: 'Art. 20\u201323 Governance',
          mapping: 'Structured logging, complete audit trail, automated reporting.',
        },
      ],
    },

    roadmap: {
      sectionLabel: 'CERTIFICATIONS',
      title: 'Certification Roadmap',
      items: [
        { label: 'NIST FIPS 203', status: 'Implemented' },
        { label: 'FIPS 140-3', status: 'In progress' },
        { label: 'Common Criteria EAL4+', status: 'In progress' },
        { label: 'ACN Qualification', status: 'In progress' },
      ],
      statusImplemented: 'Implemented',
      statusInProgress: 'In progress',
    },

    poc: {
      sectionLabel: 'PROOF OF CONCEPT',
      title: 'Proof of Concept',
      description:
        'The PoC process is structured in three phases to validate performance and integration of AEGIDA within your infrastructure.',
      phases: [
        {
          phase: '1',
          title: 'Setup',
          description: 'Requirements analysis, appliance configuration, and baseline definition.',
        },
        {
          phase: '2',
          title: 'Deployment',
          description: 'Installation in production environment and integration with existing infrastructure.',
        },
        {
          phase: '3',
          title: 'Analysis',
          description: 'Metrics collection, complete technical report, and recommendations for roll-out.',
        },
      ],
    },

    download: {
      sectionLabel: 'DOCUMENTATION',
      title: 'Download Documentation',
      items: [
        {
          title: 'Framework Brochure',
          description: 'Commercial overview and advantages of AEGIDA Framework.',
        },
        {
          title: 'General Brief',
          description: 'For the Security Officer.',
        },
        {
          title: 'Technical Document',
          description: 'Detailed architecture and Proof of Concept.',
        },
      ],
    },

    cta: {
      title: 'Ready for a technical assessment?',
      description:
        'Contact our team for a free technical assessment of your infrastructure and discover how AEGIDA Framework can protect your critical communications.',
      button: 'Request Technical Assessment',
    },
  },

  /* ================================================================ */
  /*  AegidaConnect page                                               */
  /* ================================================================ */
  aegidaConnect: {
    hero: {
      badge: 'FREE \u2014 OPEN SOURCE',
      title: 'AEGIDA Connect',
      tagline: 'Encrypted messaging. For everyone.',
      description:
        'End-to-end encrypted messaging app for Linux desktop. Peer-to-peer architecture, no central servers, no privacy compromises. Free and open source.',
      ctaDownload: 'Download for Linux',
      ctaLearnMore: 'Discover Privacy Phone',
    },

    features: {
      sectionLabel: 'FEATURES',
      title: 'Secure communications, no compromises',
      items: [
        {
          title: 'End-to-End Encryption',
          description:
            'Every message is encrypted before leaving your device. Nobody, not even us, can read your conversations.',
        },
        {
          title: 'Peer-to-Peer Architecture',
          description:
            'No central server storing your messages. Communications happen directly between devices.',
        },
        {
          title: 'Multi-Channel',
          description:
            'Communicate via Internet (Tor), local Wi-Fi, or Bluetooth. Even without an Internet connection.',
        },
        {
          title: 'Zero Metadata',
          description:
            'No records of who talks to whom, when, or how often. Your contact network stays invisible.',
        },
        {
          title: 'Open Source',
          description:
            'Source code verifiable by anyone. Total transparency on application security.',
        },
        {
          title: 'Native Linux',
          description:
            'Designed for Linux desktop. Native integration with your work environment.',
        },
      ],
    },

    security: {
      sectionLabel: 'SECURITY',
      title: 'Cryptographic stack',
      description:
        'AEGIDA Connect implements modern, verified cryptographic protocols to protect every aspect of your communications.',
      items: [
        { label: 'Key Exchange', value: 'Curve25519' },
        { label: 'Message Encryption', value: 'ChaCha20-Poly1305' },
        { label: 'Hash', value: 'BLAKE2' },
        { label: 'Forward Secrecy', value: 'PFS enabled' },
        { label: 'Local Storage', value: 'AES-256-GCM' },
        { label: 'KDF', value: 'Scrypt' },
      ],
    },

    comparison: {
      sectionLabel: 'COMPARISON',
      title: 'Connect vs Privacy Phone',
      description:
        'AEGIDA Connect is the free starting point. For those who need total protection, the Privacy Phone adds dedicated hardware, a hardened OS, and post-quantum cryptography.',
      headers: ['Feature', 'Connect (Free)', 'Privacy Phone'],
      rows: [
        { feature: 'E2E encrypted messaging', connect: 'Yes', privacyPhone: 'Yes' },
        { feature: 'P2P architecture', connect: 'Yes', privacyPhone: 'Yes' },
        { feature: 'Tor transport', connect: 'Yes', privacyPhone: 'Yes' },
        { feature: 'Wi-Fi / Bluetooth P2P', connect: 'Yes', privacyPhone: 'Yes' },
        { feature: 'Post-quantum cryptography', connect: 'No', privacyPhone: 'ML-KEM FIPS 203' },
        { feature: 'Hardened OS (zero telemetry)', connect: 'No', privacyPhone: 'Aegida OS' },
        { feature: 'Secure hardware (Titan M2)', connect: 'No', privacyPhone: 'Yes' },
        { feature: 'Air-gap (MicroSD/USB)', connect: 'No', privacyPhone: 'Yes' },
        { feature: 'Dedicated support', connect: 'Community', privacyPhone: 'Enterprise SLA' },
        { feature: 'Platform', connect: 'Linux desktop', privacyPhone: 'Dedicated smartphone' },
      ],
      note: 'AEGIDA Connect offers excellent protection for personal use. For professional needs and critical infrastructure, the Privacy Phone guarantees uncompromising protection.',
    },

    download: {
      sectionLabel: 'DOWNLOAD',
      title: 'Download AEGIDA Connect',
      description:
        'Available for free on Linux desktop. Protect your communications in minutes.',
      linuxLabel: 'Linux Desktop',
      linuxDescription: 'Compatible with Ubuntu, Fedora, Debian, and major distributions.',
      comingSoon: 'Download available soon',
    },

    cta: {
      title: 'Want total protection?',
      description:
        'AEGIDA Connect is just the beginning. Discover the Privacy Phone for hardware security, hardened OS, and post-quantum cryptography.',
      button: 'Discover Privacy Phone',
    },
  },

  /* ================================================================ */
  /*  Conformita / Compliance page                                     */
  /* ================================================================ */
  conformita: {
    meta: {
      title:
        'NIS2 Compliance & Communications Security Self-Assessment \u2014 AEGIDA | H4R',
      description:
        'Verify in 5 minutes your organization\u2019s compliance with NIS2, GDPR, and NIST requirements for communications security. Free self-assessment with personalized recommendations.',
    },

    hero: {
      label: 'Free Self-Assessment',
      title: 'Self-Assessment of ',
      titleHighlight: 'Compliance',
      description:
        'Verify in 5 minutes the communications security posture of your organization against NIS2, GDPR requirements, and NIST standards for post-quantum cryptography.',
      noteLabel: 'Note:',
      noteText:
        'This tool provides an indicative assessment and does not replace a professional audit. Results are calculated locally in your browser and no data is transmitted to our servers.',
    },

    frameworks: {
      title: 'The Reference ',
      titleHighlight: 'Frameworks',
      description:
        'The self-assessment is based on requirements and best practices from the leading security standards applicable to operational communications.',
      items: [
        {
          title: 'NIS2 Directive',
          subtitle: 'EU Directive 2022/2555 \u2014 Art. 21',
          text: 'Security obligations for Essential and Important entities: encryption, incident management, business continuity, supply chain security. Penalties of up to 2% of global turnover.',
        },
        {
          title: 'GDPR',
          subtitle: 'EU Regulation 2016/679',
          text: 'Protection of personal data with adequate technical measures, including encryption of communications. Privacy by design and by default for every processing activity.',
        },
        {
          title: 'NIST FIPS 203',
          subtitle: 'ML-KEM (Kyber)',
          text: 'US federal standard for post-quantum cryptography. Defines the ML-KEM algorithm for key exchange resistant to quantum computer attacks.',
        },
        {
          title: 'ISO/IEC 27001',
          subtitle: 'Annex A \u2014 Controls',
          text: 'International framework for information security management. Specific controls for cryptography, access, resilience, and governance.',
        },
      ],
    },
  },

  /* ================================================================ */
  /*  Quiz                                                             */
  /* ================================================================ */
  quiz: {
    intro: {
      questionLabel: 'Question',
      ofLabel: 'of',
    },

    areas: [
      'Communications Encryption',
      'Access Control & Supply Chain',
      'Resilience & Business Continuity',
      'Governance & Data Protection',
    ],

    questions: [
      // Area 1 -- Communications Encryption (Art. 21 NIS2)
      {
        area: 'Communications Encryption',
        question:
          'Are communications between your operational sites and the control center encrypted end-to-end?',
        options: [
          { text: 'Yes, with E2E encryption on all links' },
          { text: 'Yes, but only on some critical links' },
          { text: 'We use VPN but not E2E' },
          { text: 'Not encrypted or I don\u2019t know' },
        ],
      },
      {
        area: 'Communications Encryption',
        question:
          'Are the cryptographic algorithms in use resistant to quantum computer attacks?',
        options: [
          { text: 'Yes, we use post-quantum algorithms (ML-KEM, CRYSTALS-Kyber)' },
          { text: 'We are evaluating migration' },
          { text: 'No, we only use RSA/ECC' },
          { text: 'I don\u2019t know' },
        ],
      },
      {
        area: 'Communications Encryption',
        question:
          'Is there a forward secrecy mechanism that protects past sessions in case of key compromise?',
        options: [
          { text: 'Yes, with PFS on all sessions' },
          { text: 'Only on some channels' },
          { text: 'No' },
        ],
      },
      {
        area: 'Communications Encryption',
        question:
          'Is your encrypted traffic distinguishable from normal HTTPS traffic via Deep Packet Inspection?',
        options: [
          { text: 'No, it is indistinguishable (traffic obfuscation active)' },
          { text: 'We have not tested' },
          { text: 'Yes, the VPN pattern is recognizable' },
        ],
      },
      // Area 2 -- Access Control & Supply Chain (Art. 21 NIS2)
      {
        area: 'Access Control & Supply Chain',
        question:
          'Are remote access sessions for vendors/maintenance personnel to the operational network time-limited and revocable?',
        options: [
          { text: 'Yes, with time-limited zero-trust access, fully audited' },
          { text: 'Yes, but with permanent VPN' },
          { text: 'Access not specifically controlled' },
        ],
      },
      {
        area: 'Access Control & Supply Chain',
        question:
          'Is there a complete audit trail of all third-party remote access?',
        options: [
          { text: 'Yes, with logging integrated into the SIEM' },
          { text: 'Partial logs' },
          { text: 'No' },
        ],
      },
      {
        area: 'Access Control & Supply Chain',
        question:
          'Could a vendor compromise propagate to the operational network?',
        options: [
          { text: 'No, access is segmented and contained' },
          { text: 'Partially segmented' },
          { text: 'Yes, the vendor has broad access' },
        ],
      },
      // Area 3 -- Resilience & Business Continuity
      {
        area: 'Resilience & Business Continuity',
        question:
          'Does the network architecture include redundancy to avoid single points of failure?',
        options: [
          { text: 'Yes, redundant mesh with automatic failover' },
          { text: 'Partial redundancy' },
          { text: 'No' },
        ],
      },
      {
        area: 'Resilience & Business Continuity',
        question:
          'In case of an Internet blackout at a remote site, can operational communications continue?',
        options: [
          { text: 'Yes, with alternative channels (radio, satellite, LAN)' },
          { text: 'Only at some critical sites' },
          { text: 'No, we depend on WAN connectivity' },
        ],
      },
      {
        area: 'Resilience & Business Continuity',
        question:
          'Is the failover time between the primary and backup link less than 30 seconds?',
        options: [
          { text: 'Yes' },
          { text: 'Not measured' },
          { text: 'No or not applicable' },
        ],
      },
      // Area 4 -- Governance & Data Protection
      {
        area: 'Governance & Data Protection',
        question:
          'Does management have direct visibility into the security status of operational communications?',
        options: [
          { text: 'Yes, with dashboard and regular reporting' },
          { text: 'Periodic reports but not real-time' },
          { text: 'No' },
        ],
      },
      {
        area: 'Governance & Data Protection',
        question:
          'Is there an incident response plan specifically for communication channel compromise?',
        options: [
          { text: 'Yes, documented and tested' },
          { text: 'Documented but not tested' },
          { text: 'No' },
        ],
      },
      {
        area: 'Governance & Data Protection',
        question:
          'Is data at rest on corporate mobile devices encrypted with strong algorithms (AES-256 or equivalent)?',
        options: [
          { text: 'Yes, with hardware-backed encryption' },
          { text: 'Software encryption' },
          { text: 'No or I don\u2019t know' },
        ],
      },
      {
        area: 'Governance & Data Protection',
        question:
          'Has your organization conducted a "store-now-decrypt-later" risk assessment?',
        options: [
          { text: 'Yes, with a PQC migration plan' },
          { text: 'Aware but no plan in place' },
          { text: 'No' },
        ],
      },
    ],

    navigation: {
      back: 'Back',
      next: 'Next',
      seeResults: 'See Results',
    },

    results: {
      title: 'Self-Assessment Results',
      scoreLabel: 'score',
      analysisTitle: 'Area-by-Area Analysis',
      classificationType: 'NIS2 Classification',
      recommendationsTitle: 'Recommendations',
      recommendedSolution: 'Recommended solution:',
      ctaTitle: 'Want to Learn More?',
      ctaDescription:
        'Request a free technical assessment with the H4R team for a detailed analysis and a personalized remediation plan.',
      ctaButton: 'Request Free Assessment',
      downloadReport: 'Download PDF Report',
      restart: 'Retake the self-assessment',
      downloadToast:
        'Coming soon \u2014 PDF download will be available shortly.',
      pdfTitle: 'Self-Assessment Report',
      pdfSubtitle: 'Communications security posture assessment',
      pdfDate: 'Date',
      pdfClassification: 'NIS2 Classification',
      pdfOverallScore: 'Overall Score',
      pdfAreaBreakdown: 'Area Breakdown',
      pdfRecommendations: 'Recommendations',
      pdfDisclaimer:
        'This report was automatically generated by the AEGIDA self-assessment tool and is for indicative purposes only. It does not constitute legal, technical, or professional advice. For a thorough evaluation, please request a dedicated technical assessment.',
      pdfGenerated:
        'Generated by AEGIDA Self-Assessment Tool — www.aegida-systems.com',
    },

    levels: {
      advanced: 'Advanced Posture',
      advancedDesc:
        'Your organization demonstrates a high level of communications security.',
      intermediate: 'Intermediate Posture',
      intermediateDesc:
        'Significant gaps exist that expose the organization to tangible risks.',
      insufficient: 'Insufficient Posture',
      insufficientDesc:
        'Operational communications have critical vulnerabilities.',
      critical: 'Critical Posture',
      criticalDesc:
        'The organization is exposed to severe and immediate risks.',
    },

    areaLevels: {
      green: 'Compliant \u2014 good posture',
      yellow: 'Partially compliant \u2014 gaps to address',
      red: 'Non-compliant \u2014 high risk',
    },

    recommendations: [
      {
        text: 'Your organization\u2019s communications require post-quantum end-to-end encryption and traffic obfuscation to withstand current and future attacks.',
        product: 'AEGIDA Framework',
      },
      {
        text: 'Remote access and supply chain control requires a zero-trust approach with time-limited, audited access and a complete audit trail.',
        product: 'AEGIDA Framework',
      },
      {
        text: 'Operational resilience requires redundant mesh architectures with automatic failover and alternative communication channels.',
        product: 'AEGIDA Framework + Privacy Phone',
      },
      {
        text: 'Communications security governance requires real-time visibility, tested incident response plans, and hardware-backed encryption of data at rest.',
        product: 'AEGIDA Privacy Phone + Framework',
      },
    ],

    classificationQuestion: {
      area: 'Organization Classification',
      question:
        'Is your organization registered as an Essential or Important entity under the NIS2 Directive (EU Directive 2022/2555)?',
      options: [
        'Yes, Essential',
        'Yes, Important',
        'Not yet classified',
        'Not applicable',
      ],
    },
  },

  /* ================================================================ */
  /*  Privacy Policy page                                              */
  /* ================================================================ */
  privacyPolicy: {
    meta: {
      title: 'Privacy Policy — AEGIDA | H4R',
      description: 'Privacy policy of H4RESEARCH SRL for the AEGIDA website.',
    },
    hero: {
      label: 'LEGAL',
      title: 'Privacy Policy',
    },
    lastUpdated: 'Last updated: March 31, 2026',
    sections: [
      {
        title: '1. Data Controller',
        content: [
          'The Data Controller is H4RESEARCH SRL, with registered office in Rome, Italy — VAT IT14765811006.',
          'For any request regarding the processing of personal data, you can contact us through the contact form on the website www.aegida-systems.com.',
        ],
      },
      {
        title: '2. Data Collected',
        content: [
          'We collect only personal data voluntarily provided through the contact form: name, surname, email address, organization, role, and message content.',
          'We do not automatically collect personal data beyond strictly necessary technical cookies for the operation of the website.',
        ],
      },
      {
        title: '3. Purposes of Processing',
        content: [
          'Personal data is processed for the following purposes:',
          '- Responding to information requests submitted through the contact form.',
          '- Managing technical assessment and briefing requests related to AEGIDA products.',
          '- Fulfilling applicable legal obligations.',
        ],
      },
      {
        title: '4. Legal Basis',
        content: [
          'Data processing is based on the data subject\'s consent (Art. 6(1)(a) GDPR) given when submitting the contact form, and on the Controller\'s legitimate interest in responding to received requests (Art. 6(1)(f) GDPR).',
        ],
      },
      {
        title: '5. Data Retention',
        content: [
          'Personal data is retained for the time strictly necessary to fulfill the purposes for which it was collected, and in any case no longer than 24 months from the last interaction.',
        ],
      },
      {
        title: '6. Data Sharing',
        content: [
          'Personal data is not sold, transferred, or shared with third parties for marketing purposes.',
          'Data may be communicated to service providers operating on behalf of the Controller (e.g., hosting providers, email services) in compliance with the GDPR and based on adequate contractual agreements.',
        ],
      },
      {
        title: '7. Data Subject Rights',
        content: [
          'Under Articles 15-22 of the GDPR, the data subject has the right to:',
          '- Access their personal data and obtain a copy.',
          '- Rectify inaccurate or incomplete data.',
          '- Request erasure of data (right to be forgotten).',
          '- Restrict processing in certain cases.',
          '- Object to processing based on legitimate interest.',
          '- Request data portability.',
          '- Withdraw consent at any time.',
          '- Lodge a complaint with the competent Data Protection Authority.',
        ],
      },
      {
        title: '8. Security',
        content: [
          'We implement appropriate technical and organizational measures to protect personal data from unauthorized access, loss, destruction, or alteration, in accordance with industry best practices and GDPR requirements.',
        ],
      },
      {
        title: '9. Changes to This Policy',
        content: [
          'The Controller reserves the right to modify this policy at any time. Changes will be published on this page with an indication of the last update date.',
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  Cookie Policy page                                               */
  /* ================================================================ */
  cookiePolicy: {
    meta: {
      title: 'Cookie Policy — AEGIDA | H4R',
      description: 'Cookie policy for the AEGIDA website by H4RESEARCH SRL.',
    },
    hero: {
      label: 'LEGAL',
      title: 'Cookie Policy',
    },
    lastUpdated: 'Last updated: March 31, 2026',
    sections: [
      {
        title: '1. What Are Cookies',
        content: [
          'Cookies are small text files stored on the user\'s device when visiting a website. They are used to make the website function efficiently and to provide information to the website owners.',
        ],
      },
      {
        title: '2. Cookies Used',
        content: [
          'The website www.aegida-systems.com uses the following categories of cookies:',
        ],
      },
      {
        title: '2.1 Necessary Cookies',
        content: [
          'These cookies are essential for the operation of the website and cannot be disabled. They include:',
          '- Session management and consent preference cookies (aegida_cookie_consent).',
          '- Technical cookies for navigation and website security.',
          'These cookies do not collect personally identifiable information.',
        ],
      },
      {
        title: '2.2 Analytics Cookies',
        content: [
          'If the user consents, we use analytics cookies to understand how visitors interact with the website. These cookies collect information in an aggregated and anonymous form.',
          'Analytics cookies help us improve the website by analyzing visitor numbers and most viewed pages.',
        ],
      },
      {
        title: '2.3 Marketing Cookies',
        content: [
          'If the user consents, marketing cookies may be installed for tracking on third-party platforms. Currently, the website does not use active marketing cookies.',
        ],
      },
      {
        title: '3. Managing Cookies',
        content: [
          'On your first visit to the website, a banner allows you to accept all cookies, accept only necessary ones, or customize your preferences.',
          'You can change your preferences at any time by clearing cookies from your browser and revisiting the website.',
          'You can also configure your browser to block or delete cookies. Note that disabling necessary cookies may impair the functioning of the website.',
        ],
      },
      {
        title: '4. Third-Party Cookies',
        content: [
          'The website may contain links to third-party websites that use their own cookies. H4R has no control over third-party cookies and we recommend consulting their respective policies.',
        ],
      },
      {
        title: '5. Updates',
        content: [
          'This Cookie Policy may be updated periodically. Changes will be published on this page with an indication of the last update date.',
        ],
      },
      {
        title: '6. Contact',
        content: [
          'For any questions regarding the use of cookies, you can contact us through the contact form on the website www.aegida-systems.com.',
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  Cookie consent banner                                            */
  /* ================================================================ */
  cookie: {
    message:
      'We use cookies to improve your experience. You can manage your preferences at any time.',
    acceptAll: 'Accept all',
    necessaryOnly: 'Necessary only',
    customize: 'Customize',
    save: 'Save preferences',
    necessary: 'Necessary',
    necessaryDesc:
      'Essential cookies for site functionality, security, and session management.',
    analytics: 'Analytics',
    analyticsDesc:
      'Cookies used to analyze traffic and improve the site (e.g. Google Analytics).',
    marketing: 'Marketing',
    marketingDesc:
      'Cookies for advertising tracking and remarketing on third-party platforms.',
    privacyLink: 'Privacy policy',
  },
}

export default en
