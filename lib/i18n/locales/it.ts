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
    langWarning: 'EN/DE aggiornamento in corso',
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
      pec: '[DA CONFERMARE: PEC H4R se esiste]',
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
        'Nel corso del test, Cellebrite Inseyets UFED 10.8.0.322 con Turbo Link non ha estratto alcun dato utente da AEGIDA Privacy Phone, né in modalità BFU (Locked) né in modalità AFU (Unlocked) con codice di sblocco fornito allo strumento. Sono stati letti unicamente gli identificatori di dispositivo accessibili via ADB e fastboot: 0 contenuto applicativo (messaggi, contatti, foto, documenti) su entrambe le modalità. I metadati di sistema (build ID, versione OS, stato verified boot) restano accessibili come normale per qualsiasi dispositivo Android; non contengono informazioni dell\'utente. I risultati si riferiscono alla versione e configurazione indicate, alla data del test.',
      disclaimer:
        'Test condotto da societ\u00e0 italiana indipendente certificata. Cellebrite, Inseyets, UFED e Turbo Link sono marchi registrati di Cellebrite DI Ltd. AEGIDA non \u00e8 affiliata, sponsorizzata o collegata a Cellebrite DI Ltd; i riferimenti hanno finalit\u00e0 di documentazione tecnica comparativa ai sensi del D.Lgs. 145/2007. Gli screenshot riprodotti costituiscono citazione ex art. 70 L. 633/1941 a fini di critica e discussione scientifica. I risultati si riferiscono alla versione software/firmware e alla configurazione hardware indicate, alla data del test; AEGIDA non garantisce che release future degli strumenti forensi citati producano gli stessi risultati e si impegna a pubblicare re-test periodici. Il test misura l\u2019interoperabilit\u00e0 con una specifica configurazione AEGIDA Privacy Phone, non esprime giudizio complessivo sui prodotti Cellebrite. Diritto di replica: legal@aegida-systems.com.',
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
      body: 'Il test è stato condotto da una società italiana di analisi forense certificata con un operatore con certificazione ASIS IMCST (International Master Counter Surveillance Technical). Lo strumento utilizzato è Cellebrite Inseyets UFED 10.8.0.322 con modulo Turbo Link. Il dispositivo è stato testato sia in modalità Locked (BFU — Before First Unlock) sia in modalità Unlocked (AFU — After First Unlock) con codice di sblocco fornito. Il test non ha estratto dati utente in nessuna delle due modalità. La metodologia completa, gli screenshot del software e la timeline sono nel white paper PDF in download.',
    },

    tempest: {
      title: 'Resistenza alle emissioni compromettenti (TEMPEST)',
      body: 'Il dispositivo è stato sottoposto a test secondo metodologia TEMPEST per la verifica della resistenza a compromissioni tramite intercettazione di emissioni elettromagnetiche, acustiche e ottiche non intenzionali. I test sono stati condotti da società italiana indipendente secondo protocolli documentati. Non costituiscono certificazione SDIP-27 né accreditamento da ente terzo, ma verifica metodologica.',
    },

    disclaimer: {
      text: 'Cellebrite, UFED, Turbo Link sono marchi di Cellebrite DI Ltd. Google, Pixel, Tensor sono marchi di Google LLC. GrapheneOS è marchio del GrapheneOS Project. AEGIDA non ha alcun rapporto commerciale con queste entità; i riferimenti hanno finalità identificativa ai sensi del D.Lgs. 145/2007 e dell\'art. 70 L. 633/1941. Per l\'esercizio del diritto di replica: legal@aegida-systems.com.',
    },

    ctaFinale: {
      title: 'Richiedi un colloquio',
      body: 'Per scegliere un AEGIDA Privacy Phone non serve un carrello. Serve un colloquio in cui capire se è lo strumento giusto per il tuo caso, in che configurazione, con quale formazione. Scriviamoci.',
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
