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
    langWarning: '',
  },

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
  footer: {
    istituzionale: 'AEGIDA è il brand di sicurezza di H4R Srl - Human for Research. Roma, Italia.',
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
    copyright: '© {year} H4R Srl - Human for Research. Tutti i diritti riservati.',
  },

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
  home: {
    hero: {
      title: 'Smartphone sigillato. Zero dati estratti in test forense.',
      subtitle: 'Il 17 aprile 2026 un laboratorio italiano di digital forensics ha tentato l\'estrazione dati da un AEGIDA Privacy Phone con Cellebrite UFED. I dettagli sono in questa pagina. È anche l\'unico smartphone commerciale al mondo con cifratura post-quantum (ML-KEM FIPS 203) integrata nel sistema di comunicazione.',
      ctaPrimary: 'Richiedi un colloquio',
      ctaSecondary: 'Scarica il white paper UFED',
    },
    istituzionale: {
      body: 'AEGIDA nasce dentro H4R Srl - Human for Research, laboratorio italiano attivo dal 2018 nella ricerca applicata alla sicurezza. Abbiamo costruito questo brand perché il mercato offriva due alternative insufficienti: soluzioni militari inaccessibili a un professionista, oppure app «privacy» di consumo che crollano al primo test serio. AEGIDA colma quel vuoto con strumenti progettati, assemblati e verificati in Italia, pensati per chi — giornalisti, avvocati, dirigenti — lavora con informazioni la cui compromissione ha un costo reale.',
    },
    prodotti: {
      label: 'Cosa produciamo',
      privacyPhone: {
        name: 'AEGIDA Privacy Phone',
        claim: 'Hardware Pixel 10a con sistema AEGIDA sigillato. Unico smartphone commerciale con cifratura post-quantum integrata. Include Connect (messaggistica cifrata), Inspector (attestazione integrità), 12 mesi di supporto.',
        cta: 'Scopri Privacy Phone',
      },
      framework: {
        name: 'AEGIDA Framework',
        claim: 'Piattaforma di sicurezza per reti di operatori di servizi essenziali sottoposti a NIS2 e DORA. In qualificazione presso ACN.',
        cta: 'Stato del progetto',
      },
    },
    proofPreview: {
      label: 'Test forense',
      title: 'Perché il test è credibile',
      body: 'Il test non è stato commissionato a un fornitore amico. L\'ha condotto un laboratorio italiano di digital forensics certificato. L\'operatore è certificato ASIS IMCST (International Master Counter Surveillance Technical). Lo strumento è lo stesso utilizzato quotidianamente dalle forze dell\'ordine. Gli screenshot e la metodologia completa sono nel white paper.',
      cta: 'Leggi il test completo',
    },
    ctaFinale: {
      title: 'AEGIDA Privacy Phone — scheda completa',
      subtitle: 'Specifiche tecniche, metodologia di test, pacchetto, pricing e processo d\'acquisto. Tutto in un\'unica pagina.',
      cta: 'Scopri AEGIDA Privacy Phone',
    },
  },

  /* ================================================================ */
  /*  Contact / Colloquio page                                         */
  /* ================================================================ */
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
        tipoRichiesta: 'Tipo di richiesta',
      },
      placeholders: {
        nome: 'Mario Rossi',
        email: 'nome@dominio.it',
        ruolo: 'giornalista, avvocato, dirigente, altro',
        motivo: 'Descrivi sinteticamente la tua situazione.',
      },
      motivoOptions: [
        'Valutazione Privacy Phone per il mio caso',
        'Preventivo per team / studio legale / redazione',
        'Formazione e supporto',
        'Informazioni tecniche sul test UFED',
        'Programma pilot Framework (2026-2028)',
        'Altro',
      ],
      submit: 'Invia richiesta',
      consenso: 'Ho letto la Privacy Policy e acconsento al trattamento dei dati per essere ricontattato.',
      success: {
        title: 'Richiesta ricevuta',
        body: "Ti risponderemo entro 2 giorni lavorativi all'indirizzo che hai indicato.",
      },
      error: {
        generic: 'Non è stato possibile inviare la richiesta. Riprova tra qualche minuto o scrivi a info@aegida-systems.com.',
      },
    },
    diretti: {
      title: 'Oppure in modo diretto',
      email: 'info@aegida-systems.com',
      pec: 'PEC: h4-researchsrl@legalmail.it',
      legal: 'legal@aegida-systems.com (per esercizio del diritto di replica)',
    },
  },

  /* ================================================================ */
  /*  Privacy Phone page                                               */
  /* ================================================================ */
  privacyPhone: {
    hero: {
      title: 'AEGIDA Privacy Phone',
      tagline: 'Smartphone sigillato su base Pixel 10a, con sistema operativo derivato da GrapheneOS e hardening AEGIDA su verified boot a chiavi proprietarie.',
      claim: 'Cellebrite UFED 10.8.0.322 — verifica documentata: 0 dati utente estratti.',
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
          title: 'Hardware con hardening AEGIDA',
          body: 'Base Pixel 10a (Google Tensor G4, 8 GB RAM). Firmware originale rimosso; installato sistema operativo derivato, indurito da AEGIDA, con verified boot e chiavi proprietarie. Il dispositivo arriva al cliente già configurato e sigillato.',
        },
        {
          key: 'connect',
          title: 'Connect — messaggistica post-quantum (primato tecnico)',
          body: 'AEGIDA Privacy Phone è l\'unico smartphone commerciale al mondo a integrare ML-KEM FIPS 203 — lo standard NIST per la cifratura post-quantum ratificato nell\'agosto 2024 — nel proprio sistema di messaggistica. Comunicazione diretta tra dispositivi AEGIDA, senza server centrale di instradamento. Resistente anche ad attacchi «harvest-now-decrypt-later», in cui un avversario archivia oggi traffico cifrato per decifrarlo quando disporrà di computer quantistici.',
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
      conclusionText: 'Nel corso del test, Cellebrite Inseyets UFED 10.8.0.322 con Turbo Link non ha estratto alcun dato utente da AEGIDA Privacy Phone, né in modalità BFU (Locked) né in modalità AFU (Unlocked) con codice di sblocco fornito allo strumento. 0 contenuto applicativo (messaggi, contatti, foto, documenti) su entrambe le modalità. I metadati di sistema non contengono informazioni dell\'utente.',
      disclaimer: 'Cellebrite, UFED, Turbo Link sono marchi di Cellebrite DI Ltd. Google, Pixel, Tensor sono marchi di Google LLC. GrapheneOS è marchio del GrapheneOS Project. AEGIDA non ha alcun rapporto commerciale con queste entità. Diritto di replica: legal@aegida-systems.com.',
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
          description: 'Supporto cifrato continuato, re-hardening annuale, incident response entry-level',
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
      body: 'Il test è stato condotto da una società italiana di analisi forense certificata con un operatore con certificazione ASIS IMCST (International Master Counter Surveillance Technical). Lo strumento utilizzato è Cellebrite Inseyets UFED 10.8.0.322 con modulo Turbo Link.',
    },
    tempest: {
      title: 'Resistenza alle emissioni compromettenti (TEMPEST)',
      body: 'Il dispositivo è stato sottoposto a test secondo metodologia TEMPEST per la verifica della resistenza a compromissioni tramite intercettazione di emissioni elettromagnetiche, acustiche e ottiche non intenzionali. I test sono stati condotti da società italiana indipendente secondo protocolli documentati. Non costituiscono certificazione SDIP-27 né accreditamento da ente terzo, ma verifica metodologica.',
    },
    disclaimer: {
      text: 'Cellebrite, UFED, Turbo Link sono marchi di Cellebrite DI Ltd. Google, Pixel, Tensor sono marchi di Google LLC. GrapheneOS è marchio del GrapheneOS Project. AEGIDA non ha alcun rapporto commerciale con queste entità. Diritto di replica: legal@aegida-systems.com.',
    },
    ctaFinale: {
      title: 'Richiedi un colloquio',
      body: 'Per scegliere un AEGIDA Privacy Phone non serve un carrello. Serve un colloquio.',
      cta: 'Richiedi un colloquio',
    },
  },

  /* ================================================================ */
  /*  About / Chi Siamo page                                           */
  /* ================================================================ */
  about: {
    hero: {
      title: 'Chi siamo',
      subtitle: 'AEGIDA è il brand di sicurezza di H4R. Progetta e produce strumenti per chi opera con informazioni sensibili.',
    },
    societa: {
      title: 'La società',
      body: 'H4R Srl - Human for Research è una società italiana con sede a Roma, fondata nel 2018. Opera nei settori della sicurezza informatica e della ricerca applicata. AEGIDA è il brand con cui H4R sviluppa e commercializza strumenti dedicati alla protezione delle comunicazioni.',
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
          body: 'Hardware Pixel 10a con sistema AEGIDA sigillato. Unico smartphone commerciale con cifratura post-quantum integrata. Testato in verifica forense indipendente: 0 dati utente estratti.',
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
      body: 'Il team operativo di H4R.',
      members: [
        { name: 'Giuseppe Savio', role: 'CEO' },
        { name: 'Daniele Fabro', role: 'CTO' },
        { name: 'Fabrizio Mariani', role: 'COO' },
      ],
    },
    ctaFinale: {
      title: 'Parliamone',
      body: 'Se stai valutando AEGIDA per il tuo lavoro, la prima cosa da fare è un colloquio. Capiamo se siamo lo strumento giusto per il tuo caso.',
      cta: 'Richiedi un colloquio',
    },
  },

  /* ================================================================ */
  /*  Framework page                                                   */
  /* ================================================================ */
  framework: {
    hero: {
      title: 'AEGIDA Framework',
      tagline: 'Piattaforma di sicurezza per le reti di comunicazione di infrastrutture critiche.',
    },

    cosaE: {
      title: "Cos'è",
      body: "AEGIDA Framework è una piattaforma pensata per le reti di comunicazione di infrastrutture critiche. Combina crittografia post-quantum (ML-KEM, NIST FIPS 203), offuscamento del traffico e controllo accessi zero-trust per fornitori OEM. Progettato per energia, sanità, trasporti e pubblica amministrazione.",
    },

    perChi: {
      title: 'A chi serve',
      body: 'Agli operatori di servizi essenziali che devono rispondere a NIS2, DORA e ai requisiti ACN, e proteggere le reti WAN di controllo e telemetria da compromissione remota.',
    },

    stato: {
      title: 'Stato 2026',
      body: "Il Framework è in fase di qualificazione presso l'Agenzia per la Cybersicurezza Nazionale. Sono in corso test con un numero limitato di organizzazioni selezionate. Non è ancora disponibile per l'acquisto diretto.",
    },

    roadmap: {
      title: 'Roadmap 2027-2028',
      body: 'Il lancio commerciale è previsto nel biennio 2027-2028, a seguito del completamento del percorso di qualificazione e delle certificazioni FIPS 140-3 e Common Criteria EAL4+.',
    },

    ctaFinale: {
      title: 'Interessato a un pilot?',
      body: "Se la tua organizzazione rientra fra gli operatori di servizi essenziali e vuole valutare AEGIDA Framework in anticipo rispetto al lancio, contattaci per discutere le condizioni di un programma pilot riservato.",
      cta: 'Richiedi contatto per un pilot',
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
