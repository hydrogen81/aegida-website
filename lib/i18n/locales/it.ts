import type { Translations } from '../types'

const it: Translations = {
  /* ================================================================ */
  /*  Navigation                                                       */
  /* ================================================================ */
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
    openMenu: 'Apri menu',
    closeMenu: 'Chiudi menu',
  },

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
  footer: {
    copyright: '\u00a9 2026 H4RESEARCH SRL. Tutti i diritti riservati.',
    location: 'Roma, Italia \u2014 P.IVA IT14765811006',
    privacy: 'Privacy Policy',
    cookie: 'Cookie Policy',
    payoff: 'PROGETTATO IN ITALIA.',
  },

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
  home: {
    hero: {
      classification: 'AEGIDA \u00b7 H4RESEARCH SRL \u00b7 ROMA',
      title: 'Cellebrite UFED, 17 aprile 2026:\nnessun dato utente estratto.',
      subtitle: 'AEGIDA Privacy Phone.',
      description:
        'Smartphone hardened sviluppato a Roma. Una societ\u00e0 italiana indipendente specializzata in bonifica tecnica elettronica ha sottoposto il dispositivo a Cellebrite Inseyets UFED 10.8.0.322 con Turbo Link, sia in modalit\u00e0 Locked sia in modalit\u00e0 Unlocked con codice di sblocco fornito allo strumento. Nessun dato utente \u00e8 stato estratto. Pensato per chi lavora sotto minaccia mirata: cronisti d\u2019inchiesta, penalisti, quadri esposti.',
      ctaPrimary: 'Specifiche e prove del test',
      ctaSecondary: 'AEGIDA Framework',
      stats: [
        { value: '0 dati utente', label: 'estratti in test UFED 17/04/2026' },
        { value: 'ML-KEM', label: 'FIPS 203 \u2014 Aegida Connect' },
        { value: 'Roma', label: 'sviluppo e assistenza' },
        { value: '7 anni', label: 'aggiornamenti di sicurezza' },
      ],
    },

    threatTicker: {
      label: 'MINACCE IN TEMPO REALE',
    },

    products: {
      sectionLabel: 'PRODOTTI',
      title: 'Due prodotti, due perimetri.',

      card1: {
        title: 'AEGIDA Privacy Phone',
        specs: '3.900 \u20ac \u2014 dispositivo, servizi e assistenza per il primo anno',
        description:
          'Smartphone hardened su base Pixel 10a + Aegida OS (basato su GrapheneOS). Test forense del 17 aprile 2026 con Cellebrite Inseyets UFED 10.8.0.322: nessun dato utente estratto. Comunicazioni Aegida Connect con cifratura post-quantum ML-KEM (FIPS 203), attestazione hardware via AEGIDA Inspector, assistenza in italiano.',
        features: [
          '0 dati utente estratti in test UFED (17/04/2026)',
          'Aegida Connect \u2014 messaggistica P2P post-quantum (ML-KEM)',
          'AEGIDA Inspector \u2014 attestazione integrit\u00e0 hardware',
          'Aegida OS basato su GrapheneOS',
          'Assistenza in italiano via canale cifrato',
        ],
        cta: 'Vedi prezzo e specifiche \u2192',
      },

      card2: {
        title: 'AEGIDA Framework',
        specs: 'Infrastruttura WAN \u00b7 NIS2 / DORA \u00b7 Post-Quantum',
        description:
          'Infrastruttura di comunicazione post-quantum per operatori NIS2 e DORA. Stealth anti-DPI, accesso zero-trust per fornitori, mesh ridondante. Per progetti su misura: energy, utility, telco, finanza, difesa.',
        features: [
          'ML-KEM FIPS 203 Post-Quantum',
          'AES-256-GCM 350 Mbps',
          'Stealth anti-DPI',
          'Zero-Trust OEM Access',
          'Mesh ridondante 24/7',
        ],
        cta: 'Scopri il Framework \u2192',
      },

      card3: {
        title: 'AEGIDA Connect',
        badge: 'GRATUITO',
        specs: 'Linux Desktop \u00b7 E2E Encryption \u00b7 P2P',
        description:
          'App di messaggistica cifrata gratuita per Linux. Comunicazioni end-to-end protette senza server intermediari. Il primo passo verso la sicurezza AEGIDA.',
        features: [
          'Messaggistica cifrata E2E',
          'Architettura peer-to-peer',
          'Nessun server centrale',
          'Open source',
          'Download gratuito per Linux',
        ],
        cta: 'Scopri di piu \u2192',
      },
    },

    sectors: {
      sectionLabel: 'SETTORI',
      title: 'Chi Proteggiamo',
      items: [
        {
          title: 'Energia & Utilities',
          description:
            'Protezione SCADA/ICS, comunicazioni tra centrali e centri di controllo, accessi manutentori OEM.',
        },
        {
          title: 'Sanita',
          description:
            'Cifratura dati paziente in transito, protezione dispositivi medici connessi, conformita GDPR rafforzata.',
        },
        {
          title: 'Legal & Compliance',
          description:
            'Comunicazioni avvocato-cliente cifrate, protezione fascicoli riservati, privilegio legale garantito.',
        },
        {
          title: 'Trasporti',
          description:
            'Protezione comunicazioni operative ferroviarie, portuali e aeroportuali, resilienza mesh multi-link.',
        },
        {
          title: 'Giornalismo & ONG',
          description:
            'Protezione fonti, comunicazioni in aree ostili, resistenza a sorveglianza statale e censura.',
        },
        {
          title: 'PA & Intelligence',
          description:
            'Comunicazioni classificate, infrastrutture critiche nazionali, sovranita tecnologica.',
        },
      ],
    },

    threats: {
      sectionLabel: 'MINACCE',
      title: 'Threat Model',
      items: [
        {
          name: 'Sorveglianza Metadati',
          vector:
            'Analisi pattern di comunicazione, orari, frequenza, interlocutori \u2014 anche senza leggere il contenuto.',
          countermeasure:
            'Aegida Connect: P2P via Tor, nessun server intermedio, nessun metadato centralizzato.',
        },
        {
          name: 'Deep Packet Inspection',
          vector:
            'Ispezione del traffico di rete per identificare e bloccare VPN, Tor, protocolli non standard.',
          countermeasure:
            'AEGIDA Framework Layer C: traffico indistinguibile da HTTPS standard su porta 443/TCP.',
        },
        {
          name: 'Store-Now-Decrypt-Later',
          vector:
            'Intercettazione oggi, decrittazione domani con computer quantistici (entro 10-15 anni).',
          countermeasure:
            'ML-KEM (FIPS 203): key exchange post-quantum, protezione immediata contro minacce future.',
        },
        {
          name: 'Compromissione Fornitore',
          vector:
            'Accesso laterale tramite credenziali di fornitori/manutentori con VPN permanenti.',
          countermeasure:
            'Zero-trust access control: accessi temporizzati, tracciati, revocabili per ogni sessione OEM.',
        },
        {
          name: 'Compromissione Fisica',
          vector:
            'Estrazione dati da dispositivo sequestrato o rubato tramite tool forensi (Cellebrite, GrayKey).',
          countermeasure:
            'Aegida OS: USB lockdown, cifratura AES-256 hardware-backed, wipe remoto.',
        },
        {
          name: 'Blackout / Censura',
          vector:
            'Interruzione connettivita Internet per impedire comunicazioni operative.',
          countermeasure:
            'Aegida Connect: comunicazione via Wi-Fi locale, Bluetooth, supporti fisici. Mesh resiliente.',
        },
      ],
    },

    compliance: {
      sectionLabel: 'CONFORMITA',
      title: 'Verifica la tua conformita',
      subtitle:
        'Scopri in 5 minuti se la tua organizzazione soddisfa i requisiti di sicurezza NIS2, GDPR e NIST.',
      cta: 'Avvia Self-Assessment Gratuito \u2192',
      badges: ['NIS2 / D.Lgs. 138/2024', 'GDPR', 'NIST FIPS 203'],
      note: 'Risultato indicativo \u2014 non costituisce consulenza legale',
    },

    contact: {
      sectionLabel: 'CONTATTI',
      title: 'Richiedi un Briefing',
      info: {
        companyName: 'H4RESEARCH SRL',
        productLabel: 'Prodotto AEGIDA',
        webLabel: 'Web',
        sedeLabel: 'Sede',
        sedeValue: 'Roma, Italia',
        pivaLabel: 'P.IVA',
        briefingNote:
          'Compila il form per richiedere un briefing tecnico riservato. Il nostro team ti contatterà entro 24 ore lavorative per organizzare una sessione dedicata.',
      },
      form: {
        nameLabel: 'Nome',
        namePlaceholder: 'Il tuo nome completo',
        organizationLabel: 'Organizzazione',
        organizationPlaceholder: "Nome dell'organizzazione",
        emailLabel: 'Email',
        emailPlaceholder: 'email@organizzazione.it',
        roleLabel: 'Ruolo',
        rolePlaceholder: 'La tua posizione',
        productLabel: 'Prodotto di interesse',
        productPlaceholder: 'Seleziona un prodotto',
        productOptions: ['Privacy Phone', 'Framework', 'Entrambi'],
        sectorLabel: 'Settore',
        sectorPlaceholder: 'Seleziona il settore',
        sectorOptions: [
          'Energia',
          'Sanita',
          'Legal',
          'Trasporti',
          'Giornalismo',
          'PA',
          'Altro',
        ],
        messageLabel: 'Messaggio',
        messagePlaceholder: 'Descrivi le tue esigenze di sicurezza...',
        submitButton: 'Invia Richiesta di Briefing',
        sending: 'Invio in corso...',
        successTitle: 'Richiesta inviata',
        successMessage:
          'Il nostro team ti contatterà entro 24 ore lavorative.',
        errorDefault: "Errore durante l'invio. Riprova piu tardi.",
      },
    },
  },

  /* ================================================================ */
  /*  Contact Form (shared)                                            */
  /* ================================================================ */
  contactForm: {
    nameLabel: 'Nome',
    namePlaceholder: 'Il tuo nome completo',
    organizationLabel: 'Organizzazione',
    organizationPlaceholder: "Nome dell'organizzazione",
    emailLabel: 'Email',
    emailPlaceholder: 'email@organizzazione.it',
    roleLabel: 'Ruolo',
    rolePlaceholder: 'La tua posizione',
    productLabel: 'Prodotto di interesse',
    productPlaceholder: 'Seleziona un prodotto',
    productOptions: ['Privacy Phone', 'Framework', 'Entrambi'],
    sectorLabel: 'Settore',
    sectorPlaceholder: 'Seleziona il settore',
    sectorOptions: [
      'Energia',
      'Sanita',
      'Legal',
      'Trasporti',
      'Giornalismo',
      'PA',
      'Altro',
    ],
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Descrivi le tue esigenze di sicurezza...',
    submitButton: 'Invia Richiesta di Briefing',
    sending: 'Invio in corso...',
    successTitle: 'Richiesta inviata',
    successMessage:
      'Il nostro team ti contatterà entro 24 ore lavorative.',
    errorDefault: "Errore durante l'invio. Riprova piu tardi.",
  },

  /* ================================================================ */
  /*  Privacy Phone page                                               */
  /* ================================================================ */
  privacyPhone: {
    hero: {
      title: 'AEGIDA Privacy Phone',
      tagline: 'Cellebrite UFED, 17 aprile 2026: nessun dato utente estratto.',
      description:
        'Smartphone hardened su base Pixel 10a, sistema operativo Aegida OS basato su GrapheneOS, comunicazioni Aegida Connect con cifratura post-quantum ML-KEM (FIPS 203), attestazione integrit\u00e0 hardware tramite AEGIDA Inspector. Sviluppato e assistito a Roma. 3.900 \u20ac comprensivi di dispositivo, servizi e assistenza per il primo anno; rinnovo 690 \u20ac/anno per gli aggiornamenti.',
      ctaDownload: 'Scarica scheda tecnica',
      ctaContact: 'Verifica disponibilit\u00e0',
    },

    pillars: {
      sectionLabel: 'Architettura',
      title: 'Tre Pilastri, Un Solo Obiettivo',
      items: [
        {
          num: '01',
          title: 'Hardware',
          subtitle: 'Google Pixel 10a',
          desc: 'Titan M2 Secure Enclave, bootloader ribloccabile, 7 anni di aggiornamenti. La base fisica su cui si fonda ogni livello di sicurezza.',
        },
        {
          num: '02',
          title: 'Aegida OS',
          subtitle: 'GrapheneOS',
          desc: 'Sistema operativo hardened, 100 % open-source, zero telemetria Google. Ogni permesso, ogni sensore, ogni byte sotto il tuo controllo.',
        },
        {
          num: '03',
          title: 'Aegida Connect',
          subtitle: 'P2P Comms',
          desc: 'Comunicazioni cifrate peer-to-peer via Tor, Wi-Fi locale e Bluetooth. Nessun server centrale, nessun intermediario, nessun metadato.',
        },
      ],
    },

    hardware: {
      sectionLabel: 'Hardware',
      title: 'Google Pixel 10a',
      specs: [
        { label: 'Processore', value: 'Google Tensor G4 (4 nm), SoC custom con NPU dedicata, modem Exynos 5400 con satellite SOS' },
        { label: 'RAM / Storage', value: '8 GB LPDDR5 / 128-256 GB UFS' },
        { label: 'Display', value: '6.3" P-OLED, 120 Hz, 3.000 nit, Gorilla Glass 7i' },
        { label: 'Fotocamera', value: '48 MP f/1.7 + 13 MP ultrawide, 13 MP selfie, 4K@60fps' },
        { label: 'Batteria', value: '5.100 mAh, 30 W cablata, 18 W wireless' },
        { label: 'Connettivita', value: '5G, Wi-Fi 7, Bluetooth 6, NFC, Satellite SOS' },
        { label: 'Sicurezza HW', value: 'Titan M2 Secure Enclave' },
        { label: 'Resistenza', value: 'IP68' },
        { label: 'Dimensioni', value: '153.9 x 73 x 9 mm, 183 g' },
        { label: 'Aggiornamenti', value: '7 anni OS + sicurezza (fino al 2033)' },
      ],
      whyTitle: 'Perche il Pixel 10a',
      whyPoints: [
        'Bootloader ribloccabile dopo il flash: unico smartphone Android a consentire re-lock con OS custom, preservando la catena di Verified Boot.',
        'Titan M2 Secure Enclave: chip dedicato per chiavi crittografiche, anti-tampering hardware e rate-limiting dei tentativi PIN.',
        'Kernel patches tempestivi: Google rilascia patch mensili con SLA pubblico; GrapheneOS le integra entro 24-48 h.',
      ],
    },

    os: {
      sectionLabel: 'Sistema Operativo',
      title: 'Aegida OS',
      description:
        'Basato su GrapheneOS, il sistema operativo mobile privacy-focused con oltre 300.000 utenti attivi, fondato nel 2014 e sviluppato come progetto 100 % open-source. Aegida OS ne eredita tutte le protezioni e aggiunge configurazioni specifiche per il deployment enterprise.',
      features: [
        {
          title: 'Storage Scopes',
          description:
            'Ogni app vede solo la propria sandbox di storage, senza accesso ai file di altre applicazioni o al file-system globale.',
        },
        {
          title: 'Network Permission Toggle',
          description:
            'Permesso di rete per singola app: revocabile in qualsiasi momento, bloccando silenziosamente ogni connessione in uscita.',
        },
        {
          title: 'Sensors Permission',
          description:
            'Accelerometro, giroscopio, barometro e altri sensori richiedono un permesso esplicito, prevenendo fingerprinting hardware.',
        },
        {
          title: 'Hardened Memory Allocator',
          description:
            'Allocatore di memoria custom (hardened_malloc) con guard pages, randomizzazione canary e protezione use-after-free.',
        },
        {
          title: 'Vanadium Browser',
          description:
            'Chromium hardened con isolamento per-site, JIT disabilitabile, WebRTC bloccato di default e Content Security Policy restrittive.',
        },
        {
          title: 'Secure App Spawning',
          description:
            'Fork sicuro dei processi app con re-randomizzazione ASLR ad ogni avvio, eliminando attacchi basati su layout di memoria predicibile.',
        },
      ],
      privacyByDesignTitle: 'Privacy by Design',
      privacyByDesignItems: [
        'MAC randomization per ogni rete Wi-Fi',
        'PIN scrambling: tastierino numerico con layout casuale',
        'Rimozione automatica EXIF da foto e screenshot',
        'Hardware identifier isolation tra profili',
        'Clipboard notification: avviso ad ogni accesso alla clipboard',
        'Profili multipli isolati con crittografia separata',
        'USB lockdown: periferiche bloccate a schermo spento',
      ],
      zeroGoogleTitle: 'Zero Google',
      zeroGoogleDescription:
        'Nessun Google Play Services. Zero telemetria. Zero bloatware. Le app compatibili possono essere installate tramite sandbox opzionale senza alcun privilegio speciale, mantenendo il sistema completamente isolato dall\'ecosistema Google.',
    },

    connect: {
      sectionLabel: 'Comunicazioni',
      title: 'Aegida Connect',
      description:
        'Architettura peer-to-peer pura: ogni dispositivo e un nodo autonomo. I messaggi viaggiano direttamente tra mittente e destinatario attraverso canali multipli \u2014 Tor, Wi-Fi locale, Bluetooth \u2014 senza mai transitare da un server centrale. Nessun intermediario conosce chi comunica con chi.',
      transportTitle: 'Canali di Trasporto',
      transportChannels: [
        { label: 'Tor / Internet', value: 'Onion Service v3 ED25519 \u2014 comunicazione anonima globale' },
        { label: 'Wi-Fi locale', value: 'LAN / hotspot 802.11 \u2014 zero dipendenza da Internet' },
        { label: 'Bluetooth', value: 'BT Classic / BLE, 10-100 m \u2014 prossimita senza rete' },
        { label: 'Supporti fisici', value: 'MicroSD / USB \u2014 delay-tolerant, air-gapped transfer' },
      ],
      secureRelayTitle: 'Aegida Secure Relay',
      secureRelayDescription:
        'Quando il destinatario e offline, i messaggi vengono temporaneamente custoditi su relay distribuiti, cifrati end-to-end con la chiave pubblica del destinatario. Il relay non puo leggere il contenuto ne i metadati. Appena il destinatario torna online, i messaggi vengono recapitati e cancellati dal relay. Un\'architettura delay-tolerant che non sacrifica la sicurezza.',
      cryptoStackTitle: 'Stack Crittografico',
      cryptoStack: [
        { name: 'Curva25519', role: 'ECDH Key Exchange' },
        { name: 'ChaCha20-Poly1305', role: 'AEAD Encryption' },
        { name: 'BLAKE2', role: 'Hashing' },
        { name: 'PFS', role: 'Perfect Forward Secrecy' },
        { name: 'AES-256-GCM', role: 'Symmetric Encryption' },
        { name: 'Scrypt KDF', role: 'Key Derivation' },
        { name: 'Onion Service v3', role: 'Anonymous Transport' },
      ],
      identityTitle: 'Gestione Identita',
      identityDescription:
        'Nessuna PKI centralizzata, nessuna Certificate Authority. Ogni dispositivo genera una coppia di chiavi ED25519 direttamente nel Titan M2. Lo scambio di identita avviene tramite QR pairing in prossimita: due utenti si inquadrano reciprocamente il codice QR, verificano il fingerprint e stabiliscono un canale cifrato permanente. Semplice, verificabile, resistente a MITM.',
      featuresTitle: 'Funzionalita',
      features: [
        'Messaggistica 1:1 cifrata end-to-end',
        'Gruppi privati con chiave condivisa',
        'Forum distribuiti e moderabili',
        'Feed e aggiornamenti broadcast',
        'Aegida Secure Relay per utenti offline',
        'Secure Pairing via QR Code',
      ],
    },

    integration: {
      sectionLabel: 'Sinergia',
      title: 'Integrazione dei Livelli',
      tableHeaders: {
        from: 'Da',
        to: 'A',
        synergy: 'Sinergia',
      },
      rows: [
        {
          from: 'Hardware',
          to: 'OS',
          synergy:
            'Verified Boot + Titan M2 garantiscono che solo Aegida OS firmato possa avviarsi. Chiavi crittografiche protette in hardware.',
        },
        {
          from: 'OS',
          to: 'App',
          synergy:
            'Sandbox rinforzata, permessi granulari e hardened_malloc proteggono Aegida Connect da exploit a livello di sistema.',
        },
        {
          from: 'App',
          to: 'Hardware',
          synergy:
            'Aegida Connect genera e custodisce le chiavi ED25519 direttamente nel Titan M2, senza mai esporle in RAM.',
        },
        {
          from: 'OS',
          to: 'Comunicazioni',
          synergy:
            'Network Permission Toggle e firewall OS-level prevengono leak di dati al di fuori dei canali cifrati autorizzati.',
        },
        {
          from: 'Hardware',
          to: 'Comunicazioni',
          synergy:
            'Bluetooth 6 e Wi-Fi 7 hardware-accelerati offrono canali P2P a bassa latenza con crittografia a livello di trasporto.',
        },
      ],
    },

    download: {
      sectionLabel: 'Documentazione',
      title: 'Download',
      items: [
        {
          title: 'White paper test UFED \u2014 17 aprile 2026',
          description:
            'Riscontri forensi del test Cellebrite Inseyets UFED 10.8.0.322 su AEGIDA Privacy Phone: metodologia, screenshot, conclusioni e disclaimer legale (PDF, 12 pagine).',
        },
        {
          title: 'Brochure Privacy Phone',
          description:
            'Panoramica commerciale e caratteristiche principali di AEGIDA Privacy Phone.',
        },
        {
          title: 'Documento tecnico',
          description:
            'Specifiche hardware, funzionalit\u00e0 Aegida OS e architettura Aegida Connect in dettaglio.',
        },
      ],
    },

    proof: {
      sectionLabel: 'Riscontri forensi',
      title: 'Test Cellebrite UFED \u2014 17 aprile 2026',
      intro:
        'Il 17 aprile 2026 una societ\u00e0 italiana indipendente specializzata in bonifica tecnica elettronica e contro-sorveglianza ha sottoposto AEGIDA Privacy Phone a estrazione forense con Cellebrite Inseyets UFED 10.8.0.322 e modulo Turbo Link \u2014 lo strumento di riferimento delle forze dell\u2019ordine a livello internazionale. Il test \u00e8 stato condotto sia in modalit\u00e0 Locked (BFU \u2014 Before First Unlock) sia in modalit\u00e0 Unlocked (AFU \u2014 After First Unlock) con codice di sblocco noto e fornito allo strumento. In nessuno dei due scenari UFED ha estratto dati utente.',
      testCard: {
        operator: 'Operatore terzo',
        operatorValue: 'Societ\u00e0 italiana indipendente certificata in bonifica elettronica e contro-sorveglianza',
        software: 'Software',
        softwareValue: 'Cellebrite Inseyets UFED 10.8.0.322 + modulo Turbo Link',
        date: 'Data',
        dateValue: '17 aprile 2026',
        duration: 'Modalit\u00e0',
        durationValue: 'BFU (Locked) e AFU (Unlocked) con codice fornito \u2014 14 minuti totali',
        device: 'Dispositivo',
        deviceValue: 'AEGIDA Privacy Phone su base Pixel 10a, Aegida OS basato su GrapheneOS, Android 16, cifratura FBE',
      },
      timeline: [
        {
          time: '16:00 \u2014 Modalit\u00e0 Locked (BFU)',
          caption:
            'UFED esaurisce i metodi BFU disponibili per Pixel 10a e restituisce "Access attempt failed \u2014 No suitable method found". L\u2019unica via residua proposta \u00e8 la procedura Recovery, che farebbe per\u00f2 perdere lo stato AFU del dispositivo.',
          image: '/proof/ufed-test/01-locked-no-method-found.jpg',
          alt: 'Schermata UFED che mostra Access attempt failed e No suitable method found in modalit\u00e0 Locked',
        },
        {
          time: '16:04 \u2014 Modalit\u00e0 Unlocked (AFU) con codice fornito',
          caption:
            'L\u2019operatore reimmette il flusso in modalit\u00e0 Unlocked e fornisce il codice di sblocco. UFED legge gli identificatori di dispositivo (vendor, modello, chipset, OS, kernel, livello patch, tipo di cifratura, batteria) \u2014 campi accessibili via ADB e fastboot, non contenuto utente.',
          image: '/proof/ufed-test/02-metadata-only.jpg',
          alt: 'Schermata UFED Quick view che mostra solo identificatori di dispositivo del Pixel 10a',
        },
        {
          time: '16:07 \u2014 Estrazione dati utente',
          caption:
            'Dopo tre minuti di tentativi multipli ("Method failed, starting next attempt..."), UFED conclude: "Access attempt failed for Google Pixel 10a \u2014 No suitable method found". Nessun messaggio, nessuna foto, nessun contatto, nessun file utente \u00e8 stato estratto.',
          image: '/proof/ufed-test/03-unlocked-passcode-failed.jpg',
          alt: 'Schermata UFED che mostra Access attempt failed for Google Pixel 10a in modalit\u00e0 Unlocked con codice',
        },
        {
          time: 'Postazione del test',
          caption:
            'Laptop con Cellebrite Inseyets UFED, hardware Cellebrite Turbo Link collegato via cavo proprietario, AEGIDA Privacy Phone con Aegida Connect e AEGIDA Inspector visibili nella schermata principale. La certificazione International Master Counter Surveillance Technical dell\u2019operatore \u00e8 visibile sulla postazione.',
          image: '/proof/ufed-test/04-setup-fisico.jpg',
          alt: 'Foto della postazione del test: laptop con UFED, hardware Cellebrite Turbo Link, AEGIDA Privacy Phone',
        },
      ],
      conclusionLabel: 'Conclusione',
      conclusionText:
        'Nel test del 17 aprile 2026, Cellebrite Inseyets UFED 10.8.0.322 con Turbo Link non ha estratto alcun dato utente da AEGIDA Privacy Phone, n\u00e9 in modalit\u00e0 BFU (Locked) n\u00e9 in modalit\u00e0 AFU (Unlocked) con codice di sblocco fornito allo strumento. Sono stati letti unicamente gli identificatori di dispositivo accessibili via ADB e fastboot. I risultati si riferiscono alla versione e configurazione indicate, alla data del test.',
      disclaimer:
        'Test condotto da societ\u00e0 italiana indipendente certificata. Cellebrite, Inseyets, UFED e Turbo Link sono marchi registrati di Cellebrite DI Ltd. AEGIDA non \u00e8 affiliata, sponsorizzata o collegata a Cellebrite DI Ltd; i riferimenti hanno finalit\u00e0 di documentazione tecnica comparativa ai sensi del D.Lgs. 145/2007. Gli screenshot riprodotti costituiscono citazione ex art. 70 L. 633/1941 a fini di critica e discussione scientifica. I risultati si riferiscono alla versione software/firmware e alla configurazione hardware indicate, alla data del test; AEGIDA non garantisce che release future degli strumenti forensi citati producano gli stessi risultati e si impegna a pubblicare re-test periodici. Il test misura l\u2019interoperabilit\u00e0 con una specifica configurazione AEGIDA Privacy Phone, non esprime giudizio complessivo sui prodotti Cellebrite. Diritto di replica: legal@aegida-systems.com.',
    },

    pricing: {
      sectionLabel: 'Listino',
      title: 'Prezzo e pacchetto',
      subtitle:
        'Un prezzo unico comprensivo di dispositivo, servizi e assistenza per il primo anno.',
      bundle: {
        label: 'Pacchetto primo anno',
        price: '3.900 \u20ac',
        period: 'compreso nel prezzo',
        items: [
          'Dispositivo hardware (Google Pixel 10a)',
          'Aegida Connect configurato con cifratura post-quantum',
          'AEGIDA Inspector per attestazione integrit\u00e0 hardware',
          '12 mesi di assistenza via canale cifrato',
          'Formazione utente (remota; in sede per ordini multi-dispositivo)',
        ],
      },
      renewal: {
        label: 'Rinnovo annuale',
        price: '690 \u20ac',
        period: 'dal secondo anno',
        items: [
          'Aggiornamenti di sicurezza per l\u2019intero ciclo del dispositivo',
          'Assistenza tecnica continuata via canale cifrato',
          'Verifica annuale della configurazione',
          'Risposta a incidenti di base (entro 4 ore)',
        ],
      },
      note: 'Prezzi IVA inclusa per privati, IVA esclusa per aziende. Per ordini di 5+ dispositivi (studi legali, redazioni, ONG, team interni di sicurezza) \u00e8 disponibile un pacchetto dedicato: scrivici per un preventivo.',
      cta: 'Verifica disponibilit\u00e0',
    },

    cta: {
      title: 'Acquista AEGIDA Privacy Phone',
      description:
        '3.900 \u20ac pacchetto primo anno. Include dispositivo, Aegida Connect con cifratura post-quantum, AEGIDA Inspector, 12 mesi di assistenza cifrata e formazione. Contattaci per disponibilit\u00e0 e spedizione.',
      button: 'Verifica disponibilit\u00e0',
    },
  },

  /* ================================================================ */
  /*  Framework page                                                   */
  /* ================================================================ */
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
      badgeTitle: 'Direttiva NIS2 \u2014 D.Lgs. 138/2024',
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

  /* ================================================================ */
  /*  AegidaConnect page                                               */
  /* ================================================================ */
  aegidaConnect: {
    hero: {
      badge: 'GRATUITO \u2014 OPEN SOURCE',
      title: 'AEGIDA Connect',
      tagline: 'Messaggistica cifrata. Per tutti.',
      description:
        'App di messaggistica end-to-end cifrata per Linux desktop. Architettura peer-to-peer, nessun server centrale, nessun compromesso sulla privacy. Gratuita e open source.',
      ctaDownload: 'Scarica per Linux',
      ctaLearnMore: 'Scopri Privacy Phone',
    },

    features: {
      sectionLabel: 'FUNZIONALITA',
      title: 'Comunicazioni sicure, senza compromessi',
      items: [
        {
          title: 'Cifratura End-to-End',
          description:
            'Ogni messaggio \u00e8 cifrato prima di lasciare il tuo dispositivo. Nessuno, nemmeno noi, pu\u00f2 leggere le tue conversazioni.',
        },
        {
          title: 'Architettura Peer-to-Peer',
          description:
            'Nessun server centrale che memorizza i tuoi messaggi. Le comunicazioni avvengono direttamente tra i dispositivi.',
        },
        {
          title: 'Multi-Canale',
          description:
            'Comunica tramite Internet (Tor), rete Wi-Fi locale o Bluetooth. Anche senza connessione Internet.',
        },
        {
          title: 'Zero Metadati',
          description:
            'Nessun registro di chi parla con chi, quando o quanto spesso. La tua rete di contatti resta invisibile.',
        },
        {
          title: 'Open Source',
          description:
            'Codice sorgente verificabile da chiunque. Trasparenza totale sulla sicurezza dell\u2019applicazione.',
        },
        {
          title: 'Nativo Linux',
          description:
            'Progettato per Linux desktop. Integrazione nativa con il tuo ambiente di lavoro.',
        },
      ],
    },

    security: {
      sectionLabel: 'SICUREZZA',
      title: 'Stack crittografico',
      description:
        'AEGIDA Connect implementa protocolli crittografici moderni e verificati per proteggere ogni aspetto delle tue comunicazioni.',
      items: [
        { label: 'Key Exchange', value: 'Curve25519' },
        { label: 'Cifratura messaggi', value: 'ChaCha20-Poly1305' },
        { label: 'Hash', value: 'BLAKE2' },
        { label: 'Forward Secrecy', value: 'PFS attivo' },
        { label: 'Storage locale', value: 'AES-256-GCM' },
        { label: 'KDF', value: 'Scrypt' },
      ],
    },

    comparison: {
      sectionLabel: 'CONFRONTO',
      title: 'Connect vs Privacy Phone',
      description:
        'AEGIDA Connect \u00e8 il punto di partenza gratuito. Per chi ha bisogno di protezione totale, il Privacy Phone aggiunge hardware dedicato, OS hardened e crittografia post-quantum.',
      headers: ['Funzionalit\u00e0', 'Connect (Gratuito)', 'Privacy Phone'],
      rows: [
        { feature: 'Messaggistica cifrata E2E', connect: 'Si', privacyPhone: 'Si' },
        { feature: 'Architettura P2P', connect: 'Si', privacyPhone: 'Si' },
        { feature: 'Trasporto Tor', connect: 'Si', privacyPhone: 'Si' },
        { feature: 'Wi-Fi / Bluetooth P2P', connect: 'Si', privacyPhone: 'Si' },
        { feature: 'Crittografia post-quantum', connect: 'No', privacyPhone: 'ML-KEM FIPS 203' },
        { feature: 'OS hardened (zero telemetria)', connect: 'No', privacyPhone: 'Aegida OS' },
        { feature: 'Hardware sicuro (Titan M2)', connect: 'No', privacyPhone: 'Si' },
        { feature: 'Air-gap (MicroSD/USB)', connect: 'No', privacyPhone: 'Si' },
        { feature: 'Supporto dedicato', connect: 'Community', privacyPhone: 'Enterprise SLA' },
        { feature: 'Piattaforma', connect: 'Linux desktop', privacyPhone: 'Smartphone dedicato' },
      ],
      note: 'AEGIDA Connect offre un livello di protezione eccellente per uso personale. Per esigenze professionali e infrastrutture critiche, il Privacy Phone garantisce protezione senza compromessi.',
    },

    download: {
      sectionLabel: 'DOWNLOAD',
      title: 'Scarica AEGIDA Connect',
      description:
        'Disponibile gratuitamente per Linux desktop. Proteggi le tue comunicazioni in pochi minuti.',
      linuxLabel: 'Linux Desktop',
      linuxDescription: 'Compatibile con Ubuntu, Fedora, Debian e le principali distribuzioni.',
      comingSoon: 'Download disponibile a breve',
    },

    cta: {
      title: 'Vuoi protezione totale?',
      description:
        'AEGIDA Connect \u00e8 solo l\u2019inizio. Scopri il Privacy Phone per sicurezza hardware, OS hardened e crittografia post-quantum.',
      button: 'Scopri il Privacy Phone',
    },
  },

  /* ================================================================ */
  /*  Conformita / Quiz page                                           */
  /* ================================================================ */
  conformita: {
    meta: {
      title:
        'Self-Assessment Conformita NIS2 e Sicurezza Comunicazioni \u2014 AEGIDA | H4R',
      description:
        'Verifica in 5 minuti la conformita della tua organizzazione ai requisiti NIS2, GDPR e NIST per la sicurezza delle comunicazioni. Self-assessment gratuito con raccomandazioni personalizzate.',
    },

    hero: {
      label: 'Self-Assessment Gratuito',
      title: 'Self-Assessment di ',
      titleHighlight: 'Conformita',
      description:
        'Verifica in 5 minuti la postura di sicurezza delle comunicazioni della tua organizzazione rispetto ai requisiti NIS2, GDPR e agli standard NIST per la crittografia post-quantum.',
      noteLabel: 'Nota:',
      noteText:
        'Questo strumento fornisce una valutazione indicativa e non sostituisce un audit professionale. I risultati sono calcolati localmente nel tuo browser e nessun dato viene trasmesso ai nostri server.',
    },

    frameworks: {
      title: 'I Framework di ',
      titleHighlight: 'Riferimento',
      description:
        'Il self-assessment si basa sui requisiti e le best practice dei principali standard di sicurezza applicabili alle comunicazioni operative.',
      items: [
        {
          title: 'Direttiva NIS2',
          subtitle: 'D.Lgs. 138/2024 \u2014 Art. 21',
          text: 'Obblighi di sicurezza per soggetti Essenziali e Importanti: cifratura, gestione incidenti, continuita operativa, sicurezza della supply chain. Sanzioni fino al 2% del fatturato globale.',
        },
        {
          title: 'GDPR',
          subtitle: 'Reg. UE 2016/679',
          text: 'Protezione dei dati personali con misure tecniche adeguate, inclusa la cifratura delle comunicazioni. Privacy by design e by default per ogni trattamento.',
        },
        {
          title: 'NIST FIPS 203',
          subtitle: 'ML-KEM (Kyber)',
          text: "Standard federale USA per la crittografia post-quantum. Definisce l'algoritmo ML-KEM per lo scambio di chiavi resistente ad attacchi con computer quantistici.",
        },
        {
          title: 'ISO/IEC 27001',
          subtitle: 'Annex A \u2014 Controlli',
          text: 'Framework internazionale per la gestione della sicurezza delle informazioni. Controlli specifici per crittografia, accesso, resilienza e governance.',
        },
      ],
    },
  },

  quiz: {
    intro: {
      questionLabel: 'Domanda',
      ofLabel: 'di',
    },

    areas: [
      'Cifratura delle Comunicazioni',
      'Controllo Accessi e Supply Chain',
      'Resilienza e Continuita Operativa',
      'Governance e Protezione Dati',
    ],

    questions: [
      // Area 1 — Cifratura delle Comunicazioni
      {
        area: 'Cifratura delle Comunicazioni',
        question:
          'Le comunicazioni tra i vostri siti operativi e il centro di controllo sono cifrate end-to-end?',
        options: [
          { text: 'Si, con cifratura E2E su tutti i link' },
          { text: 'Si, ma solo su alcuni link critici' },
          { text: 'Usiamo VPN ma non E2E' },
          { text: 'Non cifrate o non so' },
        ],
      },
      {
        area: 'Cifratura delle Comunicazioni',
        question:
          'Gli algoritmi crittografici in uso sono resistenti ad attacchi con computer quantistici?',
        options: [
          { text: 'Si, usiamo algoritmi post-quantum (ML-KEM, CRYSTALS-Kyber)' },
          { text: 'Stiamo valutando la migrazione' },
          { text: 'No, usiamo solo RSA/ECC' },
          { text: 'Non so' },
        ],
      },
      {
        area: 'Cifratura delle Comunicazioni',
        question:
          'Esiste un meccanismo di forward secrecy che protegge le sessioni passate in caso di compromissione di una chiave?',
        options: [
          { text: 'Si, con PFS su tutte le sessioni' },
          { text: 'Solo su alcuni canali' },
          { text: 'No' },
        ],
      },
      {
        area: 'Cifratura delle Comunicazioni',
        question:
          'Il traffico cifrato e distinguibile dal normale traffico HTTPS tramite Deep Packet Inspection?',
        options: [
          { text: 'No, e indistinguibile (traffic obfuscation attiva)' },
          { text: 'Non abbiamo testato' },
          { text: 'Si, il pattern VPN e riconoscibile' },
        ],
      },
      // Area 2 — Controllo Accessi e Supply Chain
      {
        area: 'Controllo Accessi e Supply Chain',
        question:
          'Gli accessi remoti dei fornitori/manutentori alla rete operativa sono temporizzati e revocabili?',
        options: [
          { text: 'Si, con accesso zero-trust temporizzato e tracciato' },
          { text: 'Si, ma con VPN permanente' },
          { text: 'Accessi non specificamente controllati' },
        ],
      },
      {
        area: 'Controllo Accessi e Supply Chain',
        question:
          'Esiste un audit trail completo di tutti gli accessi remoti di terze parti?',
        options: [
          { text: 'Si, con logging integrato nel SIEM' },
          { text: 'Log parziali' },
          { text: 'No' },
        ],
      },
      {
        area: 'Controllo Accessi e Supply Chain',
        question:
          'La compromissione di un fornitore puo propagarsi alla rete operativa?',
        options: [
          { text: 'No, gli accessi sono segmentati e contenuti' },
          { text: 'Parzialmente segmentati' },
          { text: 'Si, il fornitore ha accesso ampio' },
        ],
      },
      // Area 3 — Resilienza e Continuita Operativa
      {
        area: 'Resilienza e Continuita Operativa',
        question:
          "L'architettura di rete prevede ridondanza per evitare single point of failure?",
        options: [
          { text: 'Si, mesh ridondante con failover automatico' },
          { text: 'Ridondanza parziale' },
          { text: 'No' },
        ],
      },
      {
        area: 'Resilienza e Continuita Operativa',
        question:
          'In caso di blackout Internet su un sito remoto, le comunicazioni operative possono continuare?',
        options: [
          { text: 'Si, con canali alternativi (radio, satellite, LAN)' },
          { text: 'Solo su alcuni siti critici' },
          { text: 'No, dipendiamo dalla connettivita WAN' },
        ],
      },
      {
        area: 'Resilienza e Continuita Operativa',
        question:
          'Il tempo di failover tra link primario e backup e inferiore a 30 secondi?',
        options: [
          { text: 'Si' },
          { text: 'Non misurato' },
          { text: 'No o non applicabile' },
        ],
      },
      // Area 4 — Governance e Protezione Dati
      {
        area: 'Governance e Protezione Dati',
        question:
          'Il management ha visibilita diretta sullo stato di sicurezza delle comunicazioni operative?',
        options: [
          { text: 'Si, con dashboard e reporting regolare' },
          { text: 'Report periodici ma non in tempo reale' },
          { text: 'No' },
        ],
      },
      {
        area: 'Governance e Protezione Dati',
        question:
          'Esiste un piano di risposta agli incidenti specifico per la compromissione dei canali di comunicazione?',
        options: [
          { text: 'Si, documentato e testato' },
          { text: 'Documentato ma non testato' },
          { text: 'No' },
        ],
      },
      {
        area: 'Governance e Protezione Dati',
        question:
          'I dati a riposo sui dispositivi mobili aziendali sono cifrati con algoritmi forti (AES-256 o equivalente)?',
        options: [
          { text: 'Si, con cifratura hardware-backed' },
          { text: 'Cifratura software' },
          { text: 'No o non so' },
        ],
      },
      {
        area: 'Governance e Protezione Dati',
        question:
          'La vostra organizzazione ha effettuato una valutazione del rischio "store-now-decrypt-later"?',
        options: [
          { text: 'Si, con piano di migrazione PQC' },
          { text: 'Consapevoli ma senza piano' },
          { text: 'No' },
        ],
      },
      // Classificazione
      {
        area: 'Classificazione Organizzazione',
        question:
          "L'organizzazione e registrata come soggetto Essenziale o Importante ai sensi del D.Lgs. 138/2024?",
        options: [
          { text: 'Si, Essenziale' },
          { text: 'Si, Importante' },
          { text: 'Non ancora classificati' },
          { text: 'Non applicabile' },
        ],
      },
    ],

    navigation: {
      back: 'Indietro',
      next: 'Avanti',
      seeResults: 'Vedi Risultati',
    },

    results: {
      title: 'Risultati del Self-Assessment',
      scoreLabel: 'punteggio',
      analysisTitle: 'Analisi per Area',
      classificationType: 'Classificazione NIS2',
      recommendationsTitle: 'Raccomandazioni',
      recommendedSolution: 'Soluzione consigliata:',
      ctaTitle: 'Vuoi Approfondire?',
      ctaDescription:
        "Richiedi un assessment tecnico gratuito con il team H4R per un'analisi dettagliata e un piano di remediation personalizzato.",
      ctaButton: 'Richiedi Assessment Gratuito',
      downloadReport: 'Scarica il Report in PDF',
      restart: 'Ripeti il self-assessment',
      downloadToast:
        'Funzionalita in arrivo \u2014 il download PDF sara disponibile a breve.',
      pdfTitle: 'Report di Self-Assessment',
      pdfSubtitle: 'Valutazione della postura di sicurezza delle comunicazioni',
      pdfDate: 'Data',
      pdfClassification: 'Classificazione NIS2',
      pdfOverallScore: 'Punteggio Complessivo',
      pdfAreaBreakdown: 'Analisi per Area',
      pdfRecommendations: 'Raccomandazioni',
      pdfDisclaimer:
        'Questo report e stato generato automaticamente dallo strumento di self-assessment AEGIDA e ha valore puramente indicativo. Non costituisce consulenza legale, tecnica o professionale. Per una valutazione approfondita, si consiglia di richiedere un assessment tecnico dedicato.',
      pdfGenerated:
        'Generato da AEGIDA Self-Assessment Tool — www.aegida-systems.com',
    },

    levels: {
      advanced: 'Postura Avanzata',
      advancedDesc:
        'La vostra organizzazione dimostra un livello di sicurezza delle comunicazioni elevato.',
      intermediate: 'Postura Intermedia',
      intermediateDesc:
        "Esistono gap significativi che espongono l'organizzazione a rischi concreti.",
      insufficient: 'Postura Insufficiente',
      insufficientDesc:
        'Le comunicazioni operative presentano vulnerabilita critiche.',
      critical: 'Postura Critica',
      criticalDesc:
        "L'organizzazione e esposta a rischi gravi e immediati.",
    },

    areaLevels: {
      green: 'Conforme \u2014 buona postura',
      yellow: 'Parzialmente conforme \u2014 gap da colmare',
      red: 'Non conforme \u2014 rischio elevato',
    },

    recommendations: [
      {
        text: 'Le comunicazioni della vostra organizzazione necessitano di cifratura post-quantum end-to-end e traffic obfuscation per resistere ad attacchi attuali e futuri.',
        product: 'AEGIDA Framework',
      },
      {
        text: 'Il controllo degli accessi remoti e della supply chain richiede un approccio zero-trust con accessi temporizzati, tracciati e audit trail completo.',
        product: 'AEGIDA Framework',
      },
      {
        text: 'La resilienza operativa richiede architetture mesh ridondanti con failover automatico e canali di comunicazione alternativi.',
        product: 'AEGIDA Framework + Privacy Phone',
      },
      {
        text: 'La governance della sicurezza delle comunicazioni richiede visibilita in tempo reale, piani di incident response testati e cifratura hardware-backed dei dati a riposo.',
        product: 'AEGIDA Privacy Phone + Framework',
      },
    ],

    classificationQuestion: {
      area: 'Classificazione Organizzazione',
      question:
        "L'organizzazione e registrata come soggetto Essenziale o Importante ai sensi del D.Lgs. 138/2024?",
      options: [
        'Si, Essenziale',
        'Si, Importante',
        'Non ancora classificati',
        'Non applicabile',
      ],
    },
  },

  /* ================================================================ */
  /*  Privacy Policy page                                              */
  /* ================================================================ */
  privacyPolicy: {
    meta: {
      title: 'Informativa sulla Privacy — AEGIDA | H4R',
      description: 'Informativa sul trattamento dei dati personali di H4RESEARCH SRL per il sito AEGIDA.',
    },
    hero: {
      label: 'LEGAL',
      title: 'Informativa sulla Privacy',
    },
    lastUpdated: 'Ultimo aggiornamento: 31 marzo 2026',
    sections: [
      {
        title: '1. Titolare del Trattamento',
        content: [
          'Il Titolare del trattamento dei dati personali e H4RESEARCH SRL, con sede legale in Roma, Italia — P.IVA IT14765811006.',
          'Per qualsiasi richiesta relativa al trattamento dei dati personali, e possibile contattarci tramite il modulo di contatto presente sul sito web www.aegida-systems.com.',
        ],
      },
      {
        title: '2. Dati Raccolti',
        content: [
          'Raccogliamo esclusivamente i dati personali forniti volontariamente attraverso il modulo di contatto: nome, cognome, indirizzo email, organizzazione di appartenenza, ruolo e il contenuto del messaggio.',
          'Non raccogliamo dati personali in modo automatico al di fuori dei cookie tecnici strettamente necessari al funzionamento del sito.',
        ],
      },
      {
        title: '3. Finalita del Trattamento',
        content: [
          'I dati personali sono trattati per le seguenti finalita:',
          '- Rispondere alle richieste di informazioni inviate tramite il modulo di contatto.',
          '- Gestire le richieste di valutazione tecnica e briefing relativi ai prodotti AEGIDA.',
          '- Adempiere ad obblighi di legge applicabili.',
        ],
      },
      {
        title: '4. Base Giuridica',
        content: [
          'Il trattamento dei dati e basato sul consenso dell\'interessato (Art. 6, par. 1, lett. a del GDPR) espresso al momento dell\'invio del modulo di contatto, e sul legittimo interesse del Titolare a rispondere alle richieste ricevute (Art. 6, par. 1, lett. f del GDPR).',
        ],
      },
      {
        title: '5. Conservazione dei Dati',
        content: [
          'I dati personali sono conservati per il tempo strettamente necessario al perseguimento delle finalita per cui sono stati raccolti, e comunque non oltre 24 mesi dall\'ultima interazione.',
        ],
      },
      {
        title: '6. Condivisione dei Dati',
        content: [
          'I dati personali non vengono venduti, ceduti o condivisi con terze parti per finalita di marketing.',
          'I dati possono essere comunicati a fornitori di servizi che operano per conto del Titolare (es. provider di hosting, servizi email) nel rispetto del GDPR e sulla base di adeguati accordi contrattuali.',
        ],
      },
      {
        title: '7. Diritti dell\'Interessato',
        content: [
          'Ai sensi degli articoli 15-22 del GDPR, l\'interessato ha diritto di:',
          '- Accedere ai propri dati personali e ottenerne una copia.',
          '- Rettificare dati inesatti o incompleti.',
          '- Richiedere la cancellazione dei dati (diritto all\'oblio).',
          '- Limitare il trattamento in determinati casi.',
          '- Opporsi al trattamento basato su legittimo interesse.',
          '- Richiedere la portabilita dei dati.',
          '- Revocare il consenso in qualsiasi momento.',
          '- Proporre reclamo all\'Autorita Garante per la Protezione dei Dati Personali.',
        ],
      },
      {
        title: '8. Sicurezza',
        content: [
          'Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o alterazione, in conformita con le best practice di settore e i requisiti del GDPR.',
        ],
      },
      {
        title: '9. Modifiche all\'Informativa',
        content: [
          'Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.',
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
      description: 'Informativa sull\'utilizzo dei cookie sul sito AEGIDA di H4RESEARCH SRL.',
    },
    hero: {
      label: 'LEGAL',
      title: 'Cookie Policy',
    },
    lastUpdated: 'Ultimo aggiornamento: 31 marzo 2026',
    sections: [
      {
        title: '1. Cosa sono i Cookie',
        content: [
          'I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell\'utente quando visita un sito web. Vengono utilizzati per far funzionare il sito in modo efficiente e per fornire informazioni ai proprietari del sito.',
        ],
      },
      {
        title: '2. Cookie Utilizzati',
        content: [
          'Il sito www.aegida-systems.com utilizza le seguenti categorie di cookie:',
        ],
      },
      {
        title: '2.1 Cookie Necessari',
        content: [
          'Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati. Includono:',
          '- Cookie di gestione della sessione e delle preferenze di consenso (aegida_cookie_consent).',
          '- Cookie tecnici per la navigazione e la sicurezza del sito.',
          'Questi cookie non raccolgono informazioni personali identificabili.',
        ],
      },
      {
        title: '2.2 Cookie Analitici',
        content: [
          'Se l\'utente acconsente, utilizziamo cookie analitici per comprendere come i visitatori interagiscono con il sito. Questi cookie raccolgono informazioni in forma aggregata e anonima.',
          'I cookie analitici ci aiutano a migliorare il sito analizzando il numero di visitatori e le pagine piu visualizzate.',
        ],
      },
      {
        title: '2.3 Cookie di Marketing',
        content: [
          'Se l\'utente acconsente, possono essere installati cookie di marketing per il tracciamento su piattaforme di terze parti. Attualmente il sito non utilizza cookie di marketing attivi.',
        ],
      },
      {
        title: '3. Gestione dei Cookie',
        content: [
          'Al primo accesso al sito, un banner consente di accettare tutti i cookie, accettare solo quelli necessari, o personalizzare le preferenze.',
          'E possibile modificare le preferenze in qualsiasi momento cancellando i cookie dal proprio browser e rivisitando il sito.',
          'E inoltre possibile configurare il proprio browser per bloccare o eliminare i cookie. Si noti che la disabilitazione dei cookie necessari potrebbe compromettere il funzionamento del sito.',
        ],
      },
      {
        title: '4. Cookie di Terze Parti',
        content: [
          'Il sito potrebbe contenere link a siti di terze parti che utilizzano i propri cookie. H4R non ha alcun controllo sui cookie di terze parti e si consiglia di consultare le rispettive informative.',
        ],
      },
      {
        title: '5. Aggiornamenti',
        content: [
          'La presente Cookie Policy puo essere aggiornata periodicamente. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.',
        ],
      },
      {
        title: '6. Contatti',
        content: [
          'Per qualsiasi domanda relativa all\'utilizzo dei cookie, e possibile contattarci tramite il modulo di contatto presente sul sito web www.aegida-systems.com.',
        ],
      },
    ],
  },

  /* ================================================================ */
  /*  Cookie consent banner                                            */
  /* ================================================================ */
  cookie: {
    message:
      'Utilizziamo cookie per migliorare la tua esperienza. Puoi gestire le tue preferenze in qualsiasi momento.',
    acceptAll: 'Accetta tutti',
    necessaryOnly: 'Solo necessari',
    customize: 'Personalizza',
    save: 'Salva preferenze',
    necessary: 'Necessari',
    necessaryDesc:
      'Cookie essenziali per il funzionamento del sito, la sicurezza e la gestione della sessione.',
    analytics: 'Analitici',
    analyticsDesc:
      'Cookie utilizzati per analizzare il traffico e migliorare il sito (es. Google Analytics).',
    marketing: 'Marketing',
    marketingDesc:
      'Cookie per il tracciamento pubblicitario e il remarketing su piattaforme di terze parti.',
    privacyLink: 'Informativa sulla privacy',
  },
}

export default it
