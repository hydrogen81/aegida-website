import type { Translations } from '../types'

const de: Translations = {
  /* ================================================================ */
  /*  Navigation                                                       */
  /* ================================================================ */
  nav: {
    privacyPhone: 'Privacy Phone',
    framework: 'Framework',
    blog: 'Blog',
    chiSiamo: 'Über uns',
    contatti: 'Kontakt',
    richiedi: 'Gespräch anfragen',
    // deprecated keys kept for transitional compatibility
    prodotti: 'Produkte',
    settori: 'Branchen',
    conformita: 'Compliance',
    aegidaConnect: 'Connect',
    openMenu: 'Menu oeffnen',
    closeMenu: 'Menu schliessen',
    langWarning: '',
  },

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
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

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
  home: {
    hero: {
      title: 'Smartphone rafforzato. Zero dati estratti in test forense.',
      subtitle: 'AEGIDA è il brand di sicurezza di H4R. Progetta e produce smartphone e piattaforme per chi lavora con informazioni sensibili — giornalisti investigativi, avvocati, dirigenti esposti. Ogni strumento è testato in laboratorio forense indipendente e costruito in Italia.',
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
        claim: 'Smartphone rafforzato su base Pixel 10a. Testato in verifica forense indipendente: 0 dati utente estratti.',
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
      title: 'La verifica forense indipendente',
      body: 'Una società italiana di analisi forense indipendente ha tentato l\'estrazione dati da un AEGIDA Privacy Phone con Cellebrite UFED 10.8.0.322 e modulo Turbo Link. Il test è stato condotto sia in modalità Locked (BFU — Before First Unlock) sia in modalità Unlocked (AFU — After First Unlock) con codice di sblocco fornito. Esito: 0 dati utente estratti.',
      cta: 'Leggi il test completo',
    },
    ctaFinale: {
      title: 'Parla con chi ha progettato AEGIDA.',
      subtitle: 'Le decisioni sulla sicurezza del tuo lavoro richiedono un colloquio, non un modulo generico.',
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
      tagline: 'Smartphone rafforzato su base Pixel 10a, con sistema operativo derivato e indurito da AEGIDA.',
      claim: 'Cellebrite UFED 10.8.0.322 — verifica documentata: 0 dati utente estratti.',
      ctaPrimary: 'Richiedi un colloquio',
      ctaSecondary: 'Scarica il white paper UFED',
    },
    cosaE: {
      label: 'Cos\'è',
      body: 'Il Privacy Phone è pensato per chi lavora con informazioni sensibili.',
    },
    cosaInclude: {
      label: 'Cosa include',
      title: 'Il pacchetto AEGIDA Privacy Phone',
      items: [
        { key: 'hardware', title: 'Hardware rafforzato', body: 'Base Pixel 10a. Firmware originale rimosso; sistema operativo indurito da AEGIDA.' },
        { key: 'connect', title: 'Connect — messaggistica cifrata', body: 'Cifratura post-quantum (ML-KEM FIPS 203). Nessun server centrale.' },
        { key: 'inspector', title: 'Inspector — attestazione integrità', body: 'Verifica crittografica dell\'integrità hardware.' },
        { key: 'supporto', title: 'Supporto e formazione', body: '12 mesi di supporto via canale cifrato.' },
      ],
    },

    proof: {
      sectionLabel: 'Riscontri forensi',
      title: 'Test Cellebrite UFED — 17 aprile 2026',
      intro: 'Il 17 aprile 2026 una società italiana indipendente ha sottoposto AEGIDA Privacy Phone a estrazione forense con Cellebrite Inseyets UFED 10.8.0.322 e modulo Turbo Link.',
      testCard: {
        operator: 'Operatore terzo',
        operatorValue: 'Società italiana indipendente certificata',
        software: 'Software',
        softwareValue: 'Cellebrite Inseyets UFED 10.8.0.322 + modulo Turbo Link',
        date: 'Data',
        dateValue: '17 aprile 2026',
        duration: 'Modalità',
        durationValue: 'BFU (Locked) e AFU (Unlocked) con codice fornito',
        device: 'Dispositivo',
        deviceValue: 'AEGIDA Privacy Phone su base Pixel 10a, Aegida OS, Android 16',
      },
      timeline: [
        { time: '16:00 — Locked (BFU)', caption: 'Access attempt failed — No suitable method found.', image: '/proof/ufed-test/01-locked-no-method-found.jpg', alt: 'UFED Locked mode failure' },
        { time: '16:04 — Unlocked (AFU)', caption: 'UFED legge solo identificatori di dispositivo.', image: '/proof/ufed-test/02-metadata-only.jpg', alt: 'UFED metadata only' },
        { time: '16:07 — Estrazione dati', caption: 'Access attempt failed — No suitable method found.', image: '/proof/ufed-test/03-unlocked-passcode-failed.jpg', alt: 'UFED extraction failure' },
        { time: 'Postazione', caption: 'Laptop con Cellebrite Inseyets UFED e AEGIDA Privacy Phone.', image: '/proof/ufed-test/04-setup-fisico.jpg', alt: 'Test workstation' },
      ],
      conclusionLabel: 'Conclusione',
      conclusionText: 'Nel corso del test, Cellebrite Inseyets UFED 10.8.0.322 non ha estratto alcun dato utente da AEGIDA Privacy Phone. 0 contenuto applicativo (messaggi, contatti, foto, documenti) su entrambe le modalità. I metadati di sistema non contengono informazioni dell\'utente.',
      disclaimer: 'Cellebrite, UFED, Turbo Link sono marchi di Cellebrite DI Ltd. Google, Pixel, Tensor sono marchi di Google LLC. GrapheneOS è marchio del GrapheneOS Project. AEGIDA non ha alcun rapporto commerciale con queste entità. Diritto di replica: legal@aegida-systems.com.',
    },
    pricing: {
      label: 'Prezzi',
      title: 'Pacchetto primo anno e rinnovi',
      packages: [
        { name: 'Pacchetto primo anno', price: '3.900 €', description: 'Hardware + AEGIDA Connect + Inspector + 12 mesi supporto + formazione', highlighted: true },
        { name: 'Rinnovo annuale', price: '690 € / anno', description: 'Aggiornamenti sicurezza, supporto cifrato, re-hardening annuale', highlighted: false },
      ],
      business: {
        title: 'Ordini multi-dispositivo',
        body: 'Per 5 o più dispositivi sono disponibili condizioni dedicate.',
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
      body: 'Per scegliere un AEGIDA Privacy Phone serve un colloquio.',
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
      body: 'H4R (Human for Research Srl) è una società italiana con sede a Roma, fondata nel 2018. Opera nei settori della sicurezza informatica e della ricerca applicata. AEGIDA è il brand con cui H4R sviluppa e commercializza strumenti dedicati alla protezione delle comunicazioni.',
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
          body: 'Smartphone rafforzato su base Pixel 10a. Testato in verifica forense indipendente: 0 dati utente estratti.',
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
      badge: 'KOSTENLOS \u2014 OPEN SOURCE',
      title: 'AEGIDA Connect',
      tagline: 'Verschluesselte Kommunikation. Fuer alle.',
      description:
        'Ende-zu-Ende verschluesselte Messaging-App fuer Linux Desktop. Peer-to-Peer-Architektur, keine zentralen Server, keine Kompromisse bei der Privatsphaere. Kostenlos und Open Source.',
      ctaDownload: 'Fuer Linux herunterladen',
      ctaLearnMore: 'Privacy Phone entdecken',
    },

    features: {
      sectionLabel: 'FUNKTIONEN',
      title: 'Sichere Kommunikation, ohne Kompromisse',
      items: [
        {
          title: 'Ende-zu-Ende-Verschluesselung',
          description:
            'Jede Nachricht wird verschluesselt, bevor sie Ihr Geraet verlaesst. Niemand, nicht einmal wir, kann Ihre Gespraeche lesen.',
        },
        {
          title: 'Peer-to-Peer-Architektur',
          description:
            'Kein zentraler Server speichert Ihre Nachrichten. Kommunikation findet direkt zwischen den Geraeten statt.',
        },
        {
          title: 'Multi-Kanal',
          description:
            'Kommunizieren Sie ueber Internet (Tor), lokales WLAN oder Bluetooth. Auch ohne Internetverbindung.',
        },
        {
          title: 'Null Metadaten',
          description:
            'Keine Aufzeichnungen darueber, wer mit wem, wann oder wie oft spricht. Ihr Kontaktnetzwerk bleibt unsichtbar.',
        },
        {
          title: 'Open Source',
          description:
            'Quellcode von jedem ueberpruefbar. Volle Transparenz ueber die Anwendungssicherheit.',
        },
        {
          title: 'Nativ fuer Linux',
          description:
            'Fuer Linux Desktop konzipiert. Native Integration in Ihre Arbeitsumgebung.',
        },
      ],
    },

    security: {
      sectionLabel: 'SICHERHEIT',
      title: 'Kryptografischer Stack',
      description:
        'AEGIDA Connect implementiert moderne, verifizierte kryptografische Protokolle zum Schutz jedes Aspekts Ihrer Kommunikation.',
      items: [
        { label: 'Schluesselaustausch', value: 'Curve25519' },
        { label: 'Nachrichtenverschluesselung', value: 'ChaCha20-Poly1305' },
        { label: 'Hash', value: 'BLAKE2' },
        { label: 'Forward Secrecy', value: 'PFS aktiviert' },
        { label: 'Lokaler Speicher', value: 'AES-256-GCM' },
        { label: 'KDF', value: 'Scrypt' },
      ],
    },

    comparison: {
      sectionLabel: 'VERGLEICH',
      title: 'Connect vs Privacy Phone',
      description:
        'AEGIDA Connect ist der kostenlose Einstieg. Fuer umfassenden Schutz bietet das Privacy Phone dedizierte Hardware, ein gehaertetes Betriebssystem und Post-Quantum-Kryptografie.',
      headers: ['Funktion', 'Connect (Kostenlos)', 'Privacy Phone'],
      rows: [
        { feature: 'E2E-verschluesselte Nachrichten', connect: 'Ja', privacyPhone: 'Ja' },
        { feature: 'P2P-Architektur', connect: 'Ja', privacyPhone: 'Ja' },
        { feature: 'Tor-Transport', connect: 'Ja', privacyPhone: 'Ja' },
        { feature: 'Wi-Fi / Bluetooth P2P', connect: 'Ja', privacyPhone: 'Ja' },
        { feature: 'Post-Quantum-Kryptografie', connect: 'Nein', privacyPhone: 'ML-KEM FIPS 203' },
        { feature: 'Gehaertetes OS (keine Telemetrie)', connect: 'Nein', privacyPhone: 'Aegida OS' },
        { feature: 'Sichere Hardware (Titan M2)', connect: 'Nein', privacyPhone: 'Ja' },
        { feature: 'Air-Gap (MicroSD/USB)', connect: 'Nein', privacyPhone: 'Ja' },
        { feature: 'Dedizierter Support', connect: 'Community', privacyPhone: 'Enterprise SLA' },
        { feature: 'Plattform', connect: 'Linux Desktop', privacyPhone: 'Dediziertes Smartphone' },
      ],
      note: 'AEGIDA Connect bietet hervorragenden Schutz fuer den persoenlichen Gebrauch. Fuer professionelle Anforderungen und kritische Infrastrukturen garantiert das Privacy Phone kompromisslosen Schutz.',
    },

    download: {
      sectionLabel: 'DOWNLOAD',
      title: 'AEGIDA Connect herunterladen',
      description:
        'Kostenlos fuer Linux Desktop verfuegbar. Schuetzen Sie Ihre Kommunikation in wenigen Minuten.',
      linuxLabel: 'Linux Desktop',
      linuxDescription: 'Kompatibel mit Ubuntu, Fedora, Debian und allen wichtigen Distributionen.',
      comingSoon: 'Download in Kuerze verfuegbar',
    },

    cta: {
      title: 'Vollstaendigen Schutz gewuenscht?',
      description:
        'AEGIDA Connect ist erst der Anfang. Entdecken Sie das Privacy Phone fuer Hardware-Sicherheit, gehaertetes OS und Post-Quantum-Kryptografie.',
      button: 'Privacy Phone entdecken',
    },
  },

  /* ================================================================ */
  /*  Conformita / Quiz page                                           */
  /* ================================================================ */
  conformita: {
    meta: {
      title:
        'Self-Assessment NIS2-Konformitaet und Kommunikationssicherheit \u2014 AEGIDA | H4R',
      description:
        'Pruefen Sie in 5 Minuten die Konformitaet Ihrer Organisation mit den NIS2-, DSGVO- und NIST-Anforderungen an die Kommunikationssicherheit. Kostenloses Self-Assessment mit personalisierten Empfehlungen.',
    },

    hero: {
      label: 'Kostenloses Self-Assessment',
      title: 'Compliance-',
      titleHighlight: 'Self-Assessment',
      description:
        'Pruefen Sie in 5 Minuten die Sicherheitslage der Kommunikation Ihrer Organisation im Hinblick auf die NIS2-, DSGVO- und NIST-Anforderungen fuer Post-Quantum-Kryptografie.',
      noteLabel: 'Hinweis:',
      noteText:
        'Dieses Tool liefert eine indikative Bewertung und ersetzt kein professionelles Audit. Die Ergebnisse werden lokal in Ihrem Browser berechnet und es werden keine Daten an unsere Server uebertragen.',
    },

    frameworks: {
      title: 'Die Referenz-',
      titleHighlight: 'Frameworks',
      description:
        'Das Self-Assessment basiert auf den Anforderungen und Best Practices der wichtigsten fuer die operative Kommunikation geltenden Sicherheitsstandards.',
      items: [
        {
          title: 'NIS2-Richtlinie',
          subtitle: 'NIS2UmsuCG \u2014 Art. 30',
          text: 'Sicherheitspflichten fuer wesentliche und wichtige Einrichtungen: Verschluesselung, Vorfallmanagement, Betriebskontinuitaet, Lieferkettensicherheit. Sanktionen bis zu 2 % des weltweiten Umsatzes.',
        },
        {
          title: 'DSGVO',
          subtitle: 'Verordnung (EU) 2016/679',
          text: 'Schutz personenbezogener Daten mit angemessenen technischen Massnahmen, einschliesslich der Verschluesselung der Kommunikation. Privacy by Design und by Default fuer jede Verarbeitung.',
        },
        {
          title: 'NIST FIPS 203',
          subtitle: 'ML-KEM (Kyber)',
          text: 'US-Bundesstandard fuer Post-Quantum-Kryptografie. Definiert den ML-KEM-Algorithmus fuer den Schluesselaustausch, der gegen Angriffe mit Quantencomputern resistent ist.',
        },
        {
          title: 'ISO/IEC 27001',
          subtitle: 'Annex A \u2014 Controls',
          text: 'Internationales Framework fuer das Management der Informationssicherheit. Spezifische Controls fuer Kryptografie, Zugang, Resilienz und Governance.',
        },
      ],
    },
  },

  quiz: {
    intro: {
      questionLabel: 'Frage',
      ofLabel: 'von',
    },

    areas: [
      'Verschluesselung der Kommunikation',
      'Zugangskontrolle und Lieferkette',
      'Resilienz und Betriebskontinuitaet',
      'Governance und Datenschutz',
    ],

    questions: [
      // Bereich 1 - Verschluesselung der Kommunikation (Art. 21 NIS2)
      {
        area: 'Verschluesselung der Kommunikation',
        question:
          'Ist die Kommunikation zwischen Ihren Betriebsstandorten und der Leitstelle Ende-zu-Ende-verschluesselt?',
        options: [
          { text: 'Ja, mit E2E-Verschluesselung auf allen Verbindungen' },
          { text: 'Ja, aber nur auf einigen kritischen Verbindungen' },
          { text: 'Wir nutzen VPN, aber kein E2E' },
          { text: 'Nicht verschluesselt oder unbekannt' },
        ],
      },
      {
        area: 'Verschluesselung der Kommunikation',
        question:
          'Sind die eingesetzten kryptografischen Algorithmen resistent gegen Angriffe mit Quantencomputern?',
        options: [
          { text: 'Ja, wir verwenden Post-Quantum-Algorithmen (ML-KEM, CRYSTALS-Kyber)' },
          { text: 'Wir evaluieren die Migration' },
          { text: 'Nein, wir verwenden nur RSA/ECC' },
          { text: 'Unbekannt' },
        ],
      },
      {
        area: 'Verschluesselung der Kommunikation',
        question:
          'Gibt es einen Forward-Secrecy-Mechanismus, der vergangene Sitzungen bei Kompromittierung eines Schluessels schuetzt?',
        options: [
          { text: 'Ja, mit PFS auf allen Sitzungen' },
          { text: 'Nur auf einigen Kanaelen' },
          { text: 'Nein' },
        ],
      },
      {
        area: 'Verschluesselung der Kommunikation',
        question:
          'Ist der verschluesselte Datenverkehr durch Deep Packet Inspection von normalem HTTPS-Verkehr unterscheidbar?',
        options: [
          { text: 'Nein, er ist ununterscheidbar (Traffic Obfuscation aktiv)' },
          { text: 'Wir haben es nicht getestet' },
          { text: 'Ja, das VPN-Muster ist erkennbar' },
        ],
      },
      // Bereich 2 - Zugangskontrolle und Lieferkette (Art. 21 NIS2)
      {
        area: 'Zugangskontrolle und Lieferkette',
        question:
          'Sind die Fernzugaenge von Lieferanten/Wartungstechnikern zum Betriebsnetzwerk zeitlich begrenzt und widerrufbar?',
        options: [
          { text: 'Ja, mit zeitlich begrenztem und protokolliertem Zero-Trust-Zugang' },
          { text: 'Ja, aber mit permanentem VPN' },
          { text: 'Zugaenge nicht spezifisch kontrolliert' },
        ],
      },
      {
        area: 'Zugangskontrolle und Lieferkette',
        question:
          'Gibt es einen vollstaendigen Audit Trail aller Fernzugaenge von Dritten?',
        options: [
          { text: 'Ja, mit in das SIEM integriertem Logging' },
          { text: 'Teilweise Protokolle' },
          { text: 'Nein' },
        ],
      },
      {
        area: 'Zugangskontrolle und Lieferkette',
        question:
          'Kann sich die Kompromittierung eines Lieferanten auf das Betriebsnetzwerk ausbreiten?',
        options: [
          { text: 'Nein, die Zugaenge sind segmentiert und eingegrenzt' },
          { text: 'Teilweise segmentiert' },
          { text: 'Ja, der Lieferant hat weitreichenden Zugriff' },
        ],
      },
      // Bereich 3 - Resilienz und Betriebskontinuitaet
      {
        area: 'Resilienz und Betriebskontinuitaet',
        question:
          'Verfuegt die Netzwerkarchitektur ueber Redundanz zur Vermeidung von Single Points of Failure?',
        options: [
          { text: 'Ja, redundantes Mesh mit automatischem Failover' },
          { text: 'Teilweise Redundanz' },
          { text: 'Nein' },
        ],
      },
      {
        area: 'Resilienz und Betriebskontinuitaet',
        question:
          'Kann die operative Kommunikation bei einem Internet-Blackout an einem Remote-Standort fortgesetzt werden?',
        options: [
          { text: 'Ja, ueber alternative Kanaele (Funk, Satellit, LAN)' },
          { text: 'Nur an einigen kritischen Standorten' },
          { text: 'Nein, wir sind auf WAN-Konnektivitaet angewiesen' },
        ],
      },
      {
        area: 'Resilienz und Betriebskontinuitaet',
        question:
          'Betraegt die Failover-Zeit zwischen primaerer und Backup-Verbindung weniger als 30 Sekunden?',
        options: [
          { text: 'Ja' },
          { text: 'Nicht gemessen' },
          { text: 'Nein oder nicht zutreffend' },
        ],
      },
      // Bereich 4 - Governance und Datenschutz
      {
        area: 'Governance und Datenschutz',
        question:
          'Hat das Management direkte Einsicht in den Sicherheitsstatus der operativen Kommunikation?',
        options: [
          { text: 'Ja, mit Dashboard und regelmaessigem Reporting' },
          { text: 'Periodische Berichte, aber nicht in Echtzeit' },
          { text: 'Nein' },
        ],
      },
      {
        area: 'Governance und Datenschutz',
        question:
          'Gibt es einen Incident-Response-Plan speziell fuer die Kompromittierung von Kommunikationskanaelen?',
        options: [
          { text: 'Ja, dokumentiert und getestet' },
          { text: 'Dokumentiert, aber nicht getestet' },
          { text: 'Nein' },
        ],
      },
      {
        area: 'Governance und Datenschutz',
        question:
          'Sind die ruhenden Daten auf mobilen Unternehmensgeraeten mit starken Algorithmen (AES-256 oder gleichwertig) verschluesselt?',
        options: [
          { text: 'Ja, mit hardwaregestuetzter Verschluesselung' },
          { text: 'Software-Verschluesselung' },
          { text: 'Nein oder unbekannt' },
        ],
      },
      {
        area: 'Governance und Datenschutz',
        question:
          'Hat Ihre Organisation eine Risikobewertung zu \u201eStore-now-decrypt-later\u201c durchgefuehrt?',
        options: [
          { text: 'Ja, mit PQC-Migrationsplan' },
          { text: 'Bewusst, aber ohne Plan' },
          { text: 'Nein' },
        ],
      },
      // Klassifizierungsfrage
      {
        area: 'Organisationsklassifizierung',
        question:
          'Ist die Organisation als wesentliche oder wichtige Einrichtung im Sinne des NIS2UmsuCG registriert?',
        options: [
          { text: 'Ja, wesentliche Einrichtung' },
          { text: 'Ja, wichtige Einrichtung' },
          { text: 'Noch nicht klassifiziert' },
          { text: 'Nicht zutreffend' },
        ],
      },
    ],

    navigation: {
      back: 'Zurueck',
      next: 'Weiter',
      seeResults: 'Ergebnisse anzeigen',
    },

    results: {
      title: 'Ergebnisse des Self-Assessments',
      scoreLabel: 'Punktzahl',
      analysisTitle: 'Analyse pro Bereich',
      classificationType: 'NIS2-Klassifizierung',
      recommendationsTitle: 'Empfehlungen',
      recommendedSolution: 'Empfohlene Loesung',
      ctaTitle: 'Moechten Sie vertiefen?',
      ctaDescription:
        'Fordern Sie ein kostenloses technisches Assessment beim H4R-Team an fuer eine detaillierte Analyse und einen personalisierten Remediation-Plan.',
      ctaButton: 'Kostenloses Assessment anfragen',
      downloadReport: 'Bericht als PDF herunterladen',
      restart: 'Self-Assessment wiederholen',
      downloadToast:
        'Funktion in Kuerze verfuegbar \u2014 der PDF-Download wird bald bereitstehen.',
      pdfTitle: 'Self-Assessment-Bericht',
      pdfSubtitle: 'Bewertung der Kommunikationssicherheitslage',
      pdfDate: 'Datum',
      pdfClassification: 'NIS2-Klassifizierung',
      pdfOverallScore: 'Gesamtergebnis',
      pdfAreaBreakdown: 'Analyse pro Bereich',
      pdfRecommendations: 'Empfehlungen',
      pdfDisclaimer:
        'Dieser Bericht wurde automatisch vom AEGIDA Self-Assessment-Tool erstellt und dient ausschliesslich zu Informationszwecken. Er stellt keine rechtliche, technische oder professionelle Beratung dar. Fuer eine eingehende Bewertung empfehlen wir, ein dediziertes technisches Assessment anzufordern.',
      pdfGenerated:
        'Erstellt von AEGIDA Self-Assessment Tool — www.aegida-systems.com',
    },

    levels: {
      advanced: 'Fortgeschrittene Sicherheitslage',
      advancedDesc:
        'Ihre Organisation weist ein hohes Sicherheitsniveau in der Kommunikation auf.',
      intermediate: 'Mittlere Sicherheitslage',
      intermediateDesc:
        'Es bestehen signifikante Luecken, die die Organisation konkreten Risiken aussetzen.',
      insufficient: 'Ungenuuegende Sicherheitslage',
      insufficientDesc:
        'Die operative Kommunikation weist kritische Schwachstellen auf.',
      critical: 'Kritische Sicherheitslage',
      criticalDesc:
        'Die Organisation ist schwerwiegenden und unmittelbaren Risiken ausgesetzt.',
    },

    areaLevels: {
      green: 'Konform \u2014 gute Sicherheitslage',
      yellow: 'Teilweise konform \u2014 Luecken zu schliessen',
      red: 'Nicht konform \u2014 hohes Risiko',
    },

    recommendations: [
      {
        text: 'Die Kommunikation Ihrer Organisation benoetigt Post-Quantum-Ende-zu-Ende-Verschluesselung und Traffic Obfuscation, um gegen aktuelle und zukuenftige Angriffe bestehen zu koennen.',
        product: 'AEGIDA Framework',
      },
      {
        text: 'Die Kontrolle von Fernzugaengen und der Lieferkette erfordert einen Zero-Trust-Ansatz mit zeitlich begrenzten, protokollierten Zugaengen und vollstaendigem Audit Trail.',
        product: 'AEGIDA Framework',
      },
      {
        text: 'Die Betriebsresilienz erfordert redundante Mesh-Architekturen mit automatischem Failover und alternativen Kommunikationskanaelen.',
        product: 'AEGIDA Framework + Privacy Phone',
      },
      {
        text: 'Die Governance der Kommunikationssicherheit erfordert Echtzeit-Transparenz, getestete Incident-Response-Plaene und hardwaregestuetzte Verschluesselung der ruhenden Daten.',
        product: 'AEGIDA Privacy Phone + Framework',
      },
    ],

    classificationQuestion: {
      area: 'Organisationsklassifizierung',
      question:
        'Ist die Organisation als wesentliche oder wichtige Einrichtung im Sinne des NIS2UmsuCG registriert?',
      options: [
        'Ja, wesentliche Einrichtung',
        'Ja, wichtige Einrichtung',
        'Noch nicht klassifiziert',
        'Nicht zutreffend',
      ],
    },
  },

  /* ================================================================ */
  /*  Privacy Policy page                                              */
  /* ================================================================ */
  privacyPolicy: {
    meta: {
      title: 'Datenschutzerklaerung — AEGIDA | H4R',
      description: 'Datenschutzerklaerung der H4RESEARCH SRL fuer die Website AEGIDA.',
    },
    hero: {
      label: 'RECHTLICHES',
      title: 'Datenschutzerklaerung',
    },
    lastUpdated: 'Letzte Aktualisierung: 31. Maerz 2026',
    sections: [
      {
        title: '1. Verantwortlicher',
        content: [
          'Der Verantwortliche fuer die Verarbeitung personenbezogener Daten ist H4RESEARCH SRL, mit Sitz in Rom, Italien — USt-IdNr. IT14765811006.',
          'Fuer Anfragen zur Verarbeitung personenbezogener Daten koennen Sie uns ueber das Kontaktformular auf der Website www.aegida-systems.com erreichen.',
        ],
      },
      {
        title: '2. Erhobene Daten',
        content: [
          'Wir erfassen ausschliesslich personenbezogene Daten, die freiwillig ueber das Kontaktformular bereitgestellt werden: Name, Vorname, E-Mail-Adresse, Organisation, Rolle und Nachrichteninhalt.',
          'Wir erfassen keine personenbezogenen Daten automatisch, abgesehen von technisch notwendigen Cookies fuer den Betrieb der Website.',
        ],
      },
      {
        title: '3. Zwecke der Verarbeitung',
        content: [
          'Personenbezogene Daten werden fuer folgende Zwecke verarbeitet:',
          '- Beantwortung von Informationsanfragen ueber das Kontaktformular.',
          '- Verwaltung von Anfragen fuer technische Bewertungen und Briefings zu AEGIDA-Produkten.',
          '- Erfuellung gesetzlicher Verpflichtungen.',
        ],
      },
      {
        title: '4. Rechtsgrundlage',
        content: [
          'Die Datenverarbeitung basiert auf der Einwilligung der betroffenen Person (Art. 6 Abs. 1 lit. a DSGVO) bei Absenden des Kontaktformulars und auf dem berechtigten Interesse des Verantwortlichen an der Beantwortung eingegangener Anfragen (Art. 6 Abs. 1 lit. f DSGVO).',
        ],
      },
      {
        title: '5. Speicherdauer',
        content: [
          'Personenbezogene Daten werden nur so lange aufbewahrt, wie es fuer die Erfuellung der Zwecke erforderlich ist, fuer die sie erhoben wurden, und in jedem Fall nicht laenger als 24 Monate nach der letzten Interaktion.',
        ],
      },
      {
        title: '6. Datenweitergabe',
        content: [
          'Personenbezogene Daten werden nicht fuer Marketingzwecke an Dritte verkauft, uebertragen oder weitergegeben.',
          'Daten koennen an Dienstleister weitergegeben werden, die im Auftrag des Verantwortlichen taetig sind (z.B. Hosting-Anbieter, E-Mail-Dienste), in Uebereinstimmung mit der DSGVO und auf Grundlage angemessener vertraglicher Vereinbarungen.',
        ],
      },
      {
        title: '7. Rechte der Betroffenen',
        content: [
          'Gemaess den Artikeln 15-22 der DSGVO hat die betroffene Person das Recht:',
          '- Auf Auskunft ueber ihre personenbezogenen Daten und Erhalt einer Kopie.',
          '- Auf Berichtigung unrichtiger oder unvollstaendiger Daten.',
          '- Auf Loeschung der Daten (Recht auf Vergessenwerden).',
          '- Auf Einschraenkung der Verarbeitung in bestimmten Faellen.',
          '- Auf Widerspruch gegen die Verarbeitung aufgrund berechtigten Interesses.',
          '- Auf Datenuebertragbarkeit.',
          '- Auf Widerruf der Einwilligung jederzeit.',
          '- Auf Beschwerde bei der zustaendigen Datenschutzbehoerde.',
        ],
      },
      {
        title: '8. Sicherheit',
        content: [
          'Wir setzen angemessene technische und organisatorische Massnahmen zum Schutz personenbezogener Daten vor unbefugtem Zugriff, Verlust, Zerstoerung oder Veraenderung ein, in Uebereinstimmung mit den Best Practices der Branche und den Anforderungen der DSGVO.',
        ],
      },
      {
        title: '9. Aenderungen dieser Erklaerung',
        content: [
          'Der Verantwortliche behaelt sich das Recht vor, diese Erklaerung jederzeit zu aendern. Aenderungen werden auf dieser Seite mit Angabe des letzten Aktualisierungsdatums veroeffentlicht.',
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  Cookie Policy page                                               */
  /* ================================================================ */
  cookiePolicy: {
    meta: {
      title: 'Cookie-Richtlinie — AEGIDA | H4R',
      description: 'Cookie-Richtlinie fuer die AEGIDA-Website von H4RESEARCH SRL.',
    },
    hero: {
      label: 'RECHTLICHES',
      title: 'Cookie-Richtlinie',
    },
    lastUpdated: 'Letzte Aktualisierung: 31. Maerz 2026',
    sections: [
      {
        title: '1. Was sind Cookies',
        content: [
          'Cookies sind kleine Textdateien, die auf dem Geraet des Nutzers gespeichert werden, wenn er eine Website besucht. Sie werden verwendet, um die Website effizient zu betreiben und den Websitebetreibern Informationen bereitzustellen.',
        ],
      },
      {
        title: '2. Verwendete Cookies',
        content: [
          'Die Website www.aegida-systems.com verwendet folgende Cookie-Kategorien:',
        ],
      },
      {
        title: '2.1 Notwendige Cookies',
        content: [
          'Diese Cookies sind fuer den Betrieb der Website unerlaeasslich und koennen nicht deaktiviert werden. Sie umfassen:',
          '- Cookies fuer Sitzungsverwaltung und Einwilligungspraeferenzen (aegida_cookie_consent).',
          '- Technische Cookies fuer Navigation und Website-Sicherheit.',
          'Diese Cookies erfassen keine personenbezogenen Daten.',
        ],
      },
      {
        title: '2.2 Analytische Cookies',
        content: [
          'Mit Einwilligung des Nutzers verwenden wir analytische Cookies, um zu verstehen, wie Besucher mit der Website interagieren. Diese Cookies erfassen Informationen in aggregierter und anonymer Form.',
          'Analytische Cookies helfen uns, die Website zu verbessern, indem sie Besucherzahlen und meistbesuchte Seiten analysieren.',
        ],
      },
      {
        title: '2.3 Marketing-Cookies',
        content: [
          'Mit Einwilligung des Nutzers koennen Marketing-Cookies fuer das Tracking auf Drittanbieter-Plattformen installiert werden. Derzeit verwendet die Website keine aktiven Marketing-Cookies.',
        ],
      },
      {
        title: '3. Cookie-Verwaltung',
        content: [
          'Beim ersten Besuch der Website ermoeglicht ein Banner, alle Cookies zu akzeptieren, nur notwendige zu akzeptieren oder die Praeferenzen anzupassen.',
          'Sie koennen Ihre Praeferenzen jederzeit aendern, indem Sie die Cookies in Ihrem Browser loeschen und die Website erneut besuchen.',
          'Sie koennen Ihren Browser auch so konfigurieren, dass Cookies blockiert oder geloescht werden. Beachten Sie, dass die Deaktivierung notwendiger Cookies die Funktionalitaet der Website beeintraechtigen kann.',
        ],
      },
      {
        title: '4. Cookies von Drittanbietern',
        content: [
          'Die Website kann Links zu Websites Dritter enthalten, die eigene Cookies verwenden. H4R hat keine Kontrolle ueber Cookies Dritter und empfiehlt, deren jeweilige Richtlinien zu konsultieren.',
        ],
      },
      {
        title: '5. Aktualisierungen',
        content: [
          'Diese Cookie-Richtlinie kann regelmaessig aktualisiert werden. Aenderungen werden auf dieser Seite mit Angabe des letzten Aktualisierungsdatums veroeffentlicht.',
        ],
      },
      {
        title: '6. Kontakt',
        content: [
          'Bei Fragen zur Verwendung von Cookies koennen Sie uns ueber das Kontaktformular auf der Website www.aegida-systems.com kontaktieren.',
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  Cookie consent banner                                            */
  /* ================================================================ */
  cookie: {
    message:
      'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Sie koennen Ihre Einstellungen jederzeit verwalten.',
    acceptAll: 'Alle akzeptieren',
    necessaryOnly: 'Nur notwendige',
    customize: 'Anpassen',
    save: 'Einstellungen speichern',
    necessary: 'Notwendige',
    necessaryDesc:
      'Wesentliche Cookies fuer die Funktionalitaet der Website, Sicherheit und Sitzungsverwaltung.',
    analytics: 'Analytische',
    analyticsDesc:
      'Cookies zur Analyse des Datenverkehrs und zur Verbesserung der Website (z.B. Google Analytics).',
    marketing: 'Marketing',
    marketingDesc:
      'Cookies fuer Werbetracking und Remarketing auf Drittanbieter-Plattformen.',
    privacyLink: 'Datenschutzerklaerung',
  },
}

export default de
