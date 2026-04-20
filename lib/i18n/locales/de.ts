import type { Translations } from '../types'

const de: Translations = {
  /* ================================================================ */
  /*  Navigation                                                       */
  /* ================================================================ */
  nav: {
    prodotti: 'Produkte',
    privacyPhone: 'Privacy Phone',
    framework: 'Framework',
    aegidaConnect: 'Connect',
    settori: 'Branchen',
    conformita: 'Compliance',
    blog: 'Blog',
    contatti: 'Kontakt',
    richiedi: 'Briefing anfragen',
    openMenu: 'Menu oeffnen',
    closeMenu: 'Menu schliessen',
  },

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
  footer: {
    copyright: '\u00a9 2026 H4RESEARCH SRL. Alle Rechte vorbehalten.',
    location: 'Rom, Italien \u2014 USt-IdNr. IT14765811006',
    privacy: 'Datenschutzerklaerung',
    cookie: 'Cookie-Richtlinie',
    payoff: 'ENTWICKELT IN ITALIEN.',
  },

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
  home: {
    hero: {
      classification: 'AEGIDA \u00b7 H4RESEARCH SRL \u00b7 ROM',
      title: 'Cellebrite UFED, 17. April 2026:\nkeine Benutzerdaten extrahiert.',
      subtitle: 'AEGIDA Privacy Phone.',
      description:
        'In Rom entwickeltes geh\u00e4rtetes Smartphone. Eine unabh\u00e4ngige italienische Firma f\u00fcr technische elektronische Gegenma\u00dfnahmen hat das Ger\u00e4t Cellebrite Inseyets UFED 10.8.0.322 mit Turbo Link unterzogen, sowohl im Locked-Modus als auch im Unlocked-Modus mit dem dem Werkzeug \u00fcbergebenen Entsperrcode. Es wurden keine Benutzerdaten extrahiert. Konzipiert f\u00fcr alle, die unter gezielter Bedrohung arbeiten: Investigativjournalisten, Strafverteidiger, exponierte F\u00fchrungskr\u00e4fte.',
      ctaPrimary: 'Spezifikationen und Testnachweise',
      ctaSecondary: 'AEGIDA Framework',
      stats: [
        { value: '0 Benutzerdaten', label: 'extrahiert im UFED-Test 17/04/2026' },
        { value: 'ML-KEM', label: 'FIPS 203 \u2014 Aegida Connect' },
        { value: 'Rom', label: 'Entwicklung und Support' },
        { value: '7 Jahre', label: 'Sicherheitsupdates' },
      ],
    },

    threatTicker: {
      label: 'LIVE-BEDROHUNGSFEED',
    },

    products: {
      sectionLabel: 'PRODUKTE',
      title: 'Zwei Produkte, zwei Perimeter.',

      card1: {
        title: 'AEGIDA Privacy Phone',
        specs: '3.900 \u20ac \u2014 Ger\u00e4t, Dienste und Support f\u00fcr das erste Jahr',
        description:
          'Geh\u00e4rtetes Smartphone auf Pixel 10a + Aegida OS (basierend auf GrapheneOS). Forensiktest vom 17. April 2026 mit Cellebrite Inseyets UFED 10.8.0.322: keine Benutzerdaten extrahiert. Aegida Connect mit Post-Quantum-Kryptografie ML-KEM (FIPS 203), Hardware-Attestierung via AEGIDA Inspector, italienischsprachiger Support.',
        features: [
          '0 Benutzerdaten extrahiert im UFED-Test (17/04/2026)',
          'Aegida Connect \u2014 P2P-Messaging Post-Quantum (ML-KEM)',
          'AEGIDA Inspector \u2014 Hardware-Integrit\u00e4tsattestierung',
          'Aegida OS basierend auf GrapheneOS',
          'Italienischsprachiger Support \u00fcber verschl\u00fcsselten Kanal',
        ],
        cta: 'Preis und Spezifikationen ansehen \u2192',
      },

      card2: {
        title: 'AEGIDA Framework',
        specs: 'WAN-Infrastruktur \u00b7 NIS2 / DORA \u00b7 Post-Quantum',
        description:
          'Post-Quantum-Kommunikationsinfrastruktur f\u00fcr NIS2- und DORA-Betreiber. Stealth-Anti-DPI, Zero-Trust-Lieferantenzugang, redundantes Mesh. F\u00fcr Einzelprojekte: Energie, Versorgung, Telekom, Finanzen, Verteidigung.',
        features: [
          'ML-KEM FIPS 203 Post-Quantum',
          'AES-256-GCM 350 Mbps',
          'Stealth anti-DPI',
          'Zero-Trust OEM Access',
          'Redundantes Mesh 24/7',
        ],
        cta: 'Framework entdecken \u2192',
      },

      card3: {
        title: 'AEGIDA Connect',
        badge: 'KOSTENLOS',
        specs: 'Linux Desktop \u00b7 E2E Encryption \u00b7 P2P',
        description:
          'Kostenlose verschluesselte Messaging-App fuer Linux. Ende-zu-Ende-geschuetzte Kommunikation ohne Zwischenserver. Ihr erster Schritt zur AEGIDA-Sicherheit.',
        features: [
          'E2E-verschluesselte Nachrichten',
          'Peer-to-Peer-Architektur',
          'Keine zentralen Server',
          'Open Source',
          'Kostenloser Download fuer Linux',
        ],
        cta: 'Mehr erfahren \u2192',
      },
    },

    sectors: {
      sectionLabel: 'BRANCHEN',
      title: 'Wen wir schuetzen',
      items: [
        {
          title: 'Energie & Versorgung',
          description:
            'SCADA/ICS-Schutz, Kommunikation zwischen Kraftwerken und Leitstellen, OEM-Wartungszugaenge.',
        },
        {
          title: 'Gesundheitswesen',
          description:
            'Verschluesselung von Patientendaten im Transit, Schutz vernetzter Medizingeraete, verstaerkte DSGVO-Konformitaet.',
        },
        {
          title: 'Recht & Compliance',
          description:
            'Verschluesselte Anwalt-Mandanten-Kommunikation, Schutz vertraulicher Akten, anwaltliches Berufsgeheimnis gewaehrleistet.',
        },
        {
          title: 'Verkehr & Transport',
          description:
            'Schutz operativer Kommunikation im Bahn-, Hafen- und Flughafenbereich, resilientes Multi-Link-Mesh.',
        },
        {
          title: 'Journalismus & NGOs',
          description:
            'Quellenschutz, Kommunikation in feindlichen Gebieten, Widerstandsfaehigkeit gegen staatliche Ueberwachung und Zensur.',
        },
        {
          title: 'Oeffentliche Verwaltung & Nachrichtendienste',
          description:
            'Klassifizierte Kommunikation, nationale Kritische Infrastrukturen (KRITIS), technologische Souveraenitaet.',
        },
      ],
    },

    threats: {
      sectionLabel: 'BEDROHUNGEN',
      title: 'Threat Model',
      items: [
        {
          name: 'Metadaten-Ueberwachung',
          vector:
            'Analyse von Kommunikationsmustern, Zeitpunkten, Haeufigkeit, Gespraechspartnern \u2014 auch ohne Zugang zum Inhalt.',
          countermeasure:
            'Aegida Connect: P2P ueber Tor, kein Zwischenserver, keine zentralisierten Metadaten.',
        },
        {
          name: 'Deep Packet Inspection',
          vector:
            'Untersuchung des Netzwerkverkehrs zur Identifizierung und Blockierung von VPN, Tor und Nicht-Standard-Protokollen.',
          countermeasure:
            'AEGIDA Framework Layer C: Datenverkehr nicht von Standard-HTTPS auf Port 443/TCP unterscheidbar.',
        },
        {
          name: 'Store-Now-Decrypt-Later',
          vector:
            'Abfangen heute, Entschluesselung morgen mit Quantencomputern (innerhalb von 10\u201315 Jahren).',
          countermeasure:
            'ML-KEM (FIPS 203): Post-Quantum-Schluesselaustausch, sofortiger Schutz gegen zukuenftige Bedrohungen.',
        },
        {
          name: 'Lieferanten-Kompromittierung',
          vector:
            'Lateraler Zugriff ueber Anmeldedaten von Lieferanten/Wartungstechnikern mit permanenten VPN-Zugaengen.',
          countermeasure:
            'Zero-Trust-Zugangskontrolle: zeitlich begrenzte, protokollierte und widerrufbare Zugaenge pro OEM-Sitzung.',
        },
        {
          name: 'Physische Kompromittierung',
          vector:
            'Datenextraktion von beschlagnahmten oder gestohlenen Geraeten mittels forensischer Tools (Cellebrite, GrayKey).',
          countermeasure:
            'Aegida OS: USB-Lockdown, hardwaregestuetzte AES-256-Verschluesselung, Remote Wipe.',
        },
        {
          name: 'Blackout / Zensur',
          vector:
            'Unterbrechung der Internetverbindung zur Verhinderung operativer Kommunikation.',
          countermeasure:
            'Aegida Connect: Kommunikation ueber lokales Wi-Fi, Bluetooth und physische Datentraeger. Resilientes Mesh.',
        },
      ],
    },

    compliance: {
      sectionLabel: 'COMPLIANCE',
      title: 'Pruefen Sie Ihre Konformitaet',
      subtitle:
        'Erfahren Sie in 5 Minuten, ob Ihre Organisation die Sicherheitsanforderungen von NIS2, DSGVO und NIST erfuellt.',
      cta: 'Kostenloses Self-Assessment starten \u2192',
      badges: ['NIS2 / NIS2UmsuCG', 'DSGVO', 'NIST FIPS 203'],
      note: 'Indikatives Ergebnis \u2014 keine Rechtsberatung',
    },

    contact: {
      sectionLabel: 'KONTAKT',
      title: 'Briefing anfragen',
      info: {
        companyName: 'H4RESEARCH SRL',
        productLabel: 'Produkt AEGIDA',
        webLabel: 'Web',
        sedeLabel: 'Sitz',
        sedeValue: 'Rom, Italien',
        pivaLabel: 'USt-IdNr.',
        briefingNote:
          'Fuellen Sie das Formular aus, um ein vertrauliches technisches Briefing anzufragen. Unser Team wird sich innerhalb von 24 Werktags-Stunden bei Ihnen melden, um einen dedizierten Termin zu vereinbaren.',
      },
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Ihr vollstaendiger Name',
        organizationLabel: 'Organisation',
        organizationPlaceholder: 'Name der Organisation',
        emailLabel: 'E-Mail',
        emailPlaceholder: 'email@organisation.de',
        roleLabel: 'Position',
        rolePlaceholder: 'Ihre Position',
        productLabel: 'Interessiertes Produkt',
        productPlaceholder: 'Produkt auswaehlen',
        productOptions: ['Privacy Phone', 'Framework', 'Beide'],
        sectorLabel: 'Branche',
        sectorPlaceholder: 'Branche auswaehlen',
        sectorOptions: [
          'Energie',
          'Gesundheitswesen',
          'Recht',
          'Verkehr/Transport',
          'Journalismus',
          'Oeffentliche Verwaltung',
          'Sonstige',
        ],
        messageLabel: 'Nachricht',
        messagePlaceholder: 'Beschreiben Sie Ihre Sicherheitsanforderungen...',
        submitButton: 'Briefing-Anfrage senden',
        sending: 'Wird gesendet...',
        successTitle: 'Anfrage gesendet',
        successMessage:
          'Unser Team wird sich innerhalb von 24 Werktags-Stunden bei Ihnen melden.',
        errorDefault: 'Fehler beim Senden. Bitte versuchen Sie es spaeter erneut.',
      },
    },
  },

  /* ================================================================ */
  /*  Contact Form (shared)                                            */
  /* ================================================================ */
  contactForm: {
    nameLabel: 'Name',
    namePlaceholder: 'Ihr vollstaendiger Name',
    organizationLabel: 'Organisation',
    organizationPlaceholder: 'Name der Organisation',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'email@organisation.de',
    roleLabel: 'Position',
    rolePlaceholder: 'Ihre Position',
    productLabel: 'Interessiertes Produkt',
    productPlaceholder: 'Produkt auswaehlen',
    productOptions: ['Privacy Phone', 'Framework', 'Beide'],
    sectorLabel: 'Branche',
    sectorPlaceholder: 'Branche auswaehlen',
    sectorOptions: [
      'Energie',
      'Gesundheitswesen',
      'Recht',
      'Verkehr/Transport',
      'Journalismus',
      'Oeffentliche Verwaltung',
      'Sonstige',
    ],
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Beschreiben Sie Ihre Sicherheitsanforderungen...',
    submitButton: 'Briefing-Anfrage senden',
    sending: 'Wird gesendet...',
    successTitle: 'Anfrage gesendet',
    successMessage:
      'Unser Team wird sich innerhalb von 24 Werktags-Stunden bei Ihnen melden.',
    errorDefault: 'Fehler beim Senden. Bitte versuchen Sie es spaeter erneut.',
  },

  /* ================================================================ */
  /*  Privacy Phone page                                               */
  /* ================================================================ */
  privacyPhone: {
    hero: {
      title: 'AEGIDA Privacy Phone',
      tagline: 'Cellebrite UFED, 17. April 2026: keine Benutzerdaten extrahiert.',
      description:
        'Geh\u00e4rtetes Smartphone auf Pixel 10a, mit Aegida OS (basierend auf GrapheneOS), Aegida Connect Post-Quantum-Messaging (ML-KEM, FIPS 203) und Hardware-Integrit\u00e4tsattestierung via AEGIDA Inspector. In Rom entwickelt und unterst\u00fctzt. 3.900 \u20ac umfassen Ger\u00e4t, Dienste und Support f\u00fcr das erste Jahr; Verl\u00e4ngerung 690 \u20ac/Jahr f\u00fcr Updates und fortgesetzte Unterst\u00fctzung.',
      ctaDownload: 'Datenblatt herunterladen',
      ctaContact: 'Verf\u00fcgbarkeit pr\u00fcfen',
    },

    pillars: {
      sectionLabel: 'Architektur',
      title: 'Drei Saeulen, ein Ziel',
      items: [
        {
          num: '01',
          title: 'Hardware',
          subtitle: 'Google Pixel 10a',
          desc: 'Titan M2 Secure Enclave, wieder sperrbarer Bootloader, 7 Jahre Updates. Die physische Basis, auf der jede Sicherheitsebene aufbaut.',
        },
        {
          num: '02',
          title: 'Aegida OS',
          subtitle: 'GrapheneOS',
          desc: 'Gehaertetes Betriebssystem, 100 % Open-Source, keine Google-Telemetrie. Jede Berechtigung, jeder Sensor, jedes Byte unter Ihrer Kontrolle.',
        },
        {
          num: '03',
          title: 'Aegida Connect',
          subtitle: 'P2P Comms',
          desc: 'Verschluesselte Peer-to-Peer-Kommunikation ueber Tor, lokales Wi-Fi und Bluetooth. Kein zentraler Server, kein Vermittler, keine Metadaten.',
        },
      ],
    },

    hardware: {
      sectionLabel: 'Hardware',
      title: 'Google Pixel 10a',
      specs: [
        { label: 'Prozessor', value: 'Google Tensor G4 (4 nm), Custom-SoC mit dedizierter NPU, Exynos 5400 Modem mit Satelliten-SOS' },
        { label: 'RAM / Speicher', value: '8 GB LPDDR5 / 128\u2013256 GB UFS' },
        { label: 'Display', value: '6,3" P-OLED, 120 Hz, 3.000 nit, Gorilla Glass 7i' },
        { label: 'Kamera', value: '48 MP f/1.7 + 13 MP Ultraweitwinkel, 13 MP Frontkamera, 4K@60fps' },
        { label: 'Akku', value: '5.100 mAh, 30 W kabelgebunden, 18 W kabellos' },
        { label: 'Konnektivitaet', value: '5G, Wi-Fi 7, Bluetooth 6, NFC, Satelliten-SOS' },
        { label: 'HW-Sicherheit', value: 'Titan M2 Secure Enclave' },
        { label: 'Schutzklasse', value: 'IP68' },
        { label: 'Abmessungen', value: '153,9 x 73 x 9 mm, 183 g' },
        { label: 'Updates', value: '7 Jahre OS + Sicherheit (bis 2033)' },
      ],
      whyTitle: 'Warum das Pixel 10a',
      whyPoints: [
        'Wieder sperrbarer Bootloader nach dem Flash: einziges Android-Smartphone, das ein Re-Lock mit benutzerdefiniertem OS erlaubt und damit die Verified-Boot-Kette bewahrt.',
        'Titan M2 Secure Enclave: dedizierter Chip fuer kryptografische Schluessel, Hardware-Anti-Tampering und Rate-Limiting der PIN-Versuche.',
        'Zeitnahe Kernel-Patches: Google veroeffentlicht monatliche Patches mit oeffentlichem SLA; GrapheneOS integriert diese innerhalb von 24\u201348 Stunden.',
      ],
    },

    os: {
      sectionLabel: 'Betriebssystem',
      title: 'Aegida OS',
      description:
        'Basierend auf GrapheneOS, dem datenschutzorientierten mobilen Betriebssystem mit ueber 300.000 aktiven Nutzern, gegruendet 2014 und als 100 % Open-Source-Projekt entwickelt. Aegida OS erbt alle Schutzfunktionen und ergaenzt spezifische Konfigurationen fuer den Enterprise-Einsatz.',
      features: [
        {
          title: 'Storage Scopes',
          description:
            'Jede App sieht nur ihre eigene Speicher-Sandbox, ohne Zugriff auf Dateien anderer Anwendungen oder das globale Dateisystem.',
        },
        {
          title: 'Network Permission Toggle',
          description:
            'Netzwerkberechtigung pro App: jederzeit widerrufbar, blockiert stillschweigend jede ausgehende Verbindung.',
        },
        {
          title: 'Sensors Permission',
          description:
            'Beschleunigungssensor, Gyroskop, Barometer und andere Sensoren erfordern eine explizite Berechtigung, um Hardware-Fingerprinting zu verhindern.',
        },
        {
          title: 'Hardened Memory Allocator',
          description:
            'Benutzerdefinierter gehaerteter Speicher-Allokator (hardened_malloc) mit Guard Pages, Canary-Randomisierung und Use-after-free-Schutz.',
        },
        {
          title: 'Vanadium Browser',
          description:
            'Gehaertetes Chromium mit Per-Site-Isolierung, deaktivierbarem JIT, standardmaessig blockiertem WebRTC und restriktiven Content Security Policies.',
        },
        {
          title: 'Secure App Spawning',
          description:
            'Sicheres Forking von App-Prozessen mit ASLR-Re-Randomisierung bei jedem Start, um Angriffe auf vorhersagbare Speicherlayouts zu eliminieren.',
        },
      ],
      privacyByDesignTitle: 'Privacy by Design',
      privacyByDesignItems: [
        'MAC-Randomisierung fuer jedes Wi-Fi-Netzwerk',
        'PIN Scrambling: Ziffernblock mit zufaelligem Layout',
        'Automatische EXIF-Entfernung bei Fotos und Screenshots',
        'Hardware-Identifier-Isolierung zwischen Profilen',
        'Clipboard-Benachrichtigung: Hinweis bei jedem Clipboard-Zugriff',
        'Isolierte Mehrfachprofile mit separater Verschluesselung',
        'USB-Lockdown: Peripheriegeraete bei gesperrtem Bildschirm blockiert',
      ],
      zeroGoogleTitle: 'Zero Google',
      zeroGoogleDescription:
        'Keine Google Play Services. Keine Telemetrie. Keine Bloatware. Kompatible Apps koennen ueber eine optionale Sandbox ohne Sonderprivilegien installiert werden, wobei das System vollstaendig vom Google-Oekosystem isoliert bleibt.',
    },

    connect: {
      sectionLabel: 'Kommunikation',
      title: 'Aegida Connect',
      description:
        'Reine Peer-to-Peer-Architektur: Jedes Geraet ist ein autonomer Knoten. Nachrichten werden direkt zwischen Absender und Empfaenger ueber mehrere Kanaele \u2014 Tor, lokales Wi-Fi, Bluetooth \u2014 uebertragen, ohne jemals ueber einen zentralen Server zu laufen. Kein Vermittler erfaehrt, wer mit wem kommuniziert.',
      transportTitle: 'Transportkanaele',
      transportChannels: [
        { label: 'Tor / Internet', value: 'Onion Service v3 ED25519 \u2014 anonyme globale Kommunikation' },
        { label: 'Lokales Wi-Fi', value: 'LAN / Hotspot 802.11 \u2014 keine Internetabhaengigkeit' },
        { label: 'Bluetooth', value: 'BT Classic / BLE, 10\u2013100 m \u2014 Nahbereich ohne Netzwerk' },
        { label: 'Physische Datentraeger', value: 'MicroSD / USB \u2014 Delay-tolerant, Air-gapped Transfer' },
      ],
      secureRelayTitle: 'Aegida Secure Relay',
      secureRelayDescription:
        'Wenn der Empfaenger offline ist, werden Nachrichten voruebergehend auf verteilten Relays gespeichert, Ende-zu-Ende-verschluesselt mit dem oeffentlichen Schluessel des Empfaengers. Das Relay kann weder den Inhalt noch die Metadaten lesen. Sobald der Empfaenger wieder online ist, werden die Nachrichten zugestellt und vom Relay geloescht. Eine Delay-tolerante Architektur, die keine Kompromisse bei der Sicherheit eingeht.',
      cryptoStackTitle: 'Kryptografischer Stack',
      cryptoStack: [
        { name: 'Curva25519', role: 'ECDH Key Exchange' },
        { name: 'ChaCha20-Poly1305', role: 'AEAD Encryption' },
        { name: 'BLAKE2', role: 'Hashing' },
        { name: 'PFS', role: 'Perfect Forward Secrecy' },
        { name: 'AES-256-GCM', role: 'Symmetric Encryption' },
        { name: 'Scrypt KDF', role: 'Key Derivation' },
        { name: 'Onion Service v3', role: 'Anonymous Transport' },
      ],
      identityTitle: 'Identitaetsverwaltung',
      identityDescription:
        'Keine zentrale PKI, keine Certificate Authority. Jedes Geraet erzeugt ein ED25519-Schluesselpaar direkt im Titan M2. Der Identitaetsaustausch erfolgt ueber QR-Pairing im Nahbereich: Zwei Nutzer scannen gegenseitig den QR-Code, verifizieren den Fingerprint und etablieren einen permanenten verschluesselten Kanal. Einfach, verifizierbar, MITM-resistent.',
      featuresTitle: 'Funktionen',
      features: [
        'Ende-zu-Ende-verschluesselte 1:1-Nachrichten',
        'Private Gruppen mit geteiltem Schluessel',
        'Verteilte und moderierbare Foren',
        'Feeds und Broadcast-Updates',
        'Aegida Secure Relay fuer Offline-Nutzer',
        'Sicheres Pairing per QR-Code',
      ],
    },

    integration: {
      sectionLabel: 'Synergie',
      title: 'Integration der Ebenen',
      tableHeaders: {
        from: 'Von',
        to: 'Nach',
        synergy: 'Synergie',
      },
      rows: [
        {
          from: 'Hardware',
          to: 'OS',
          synergy:
            'Verified Boot + Titan M2 stellen sicher, dass nur signiertes Aegida OS starten kann. Kryptografische Schluessel sind hardwaregeschuetzt.',
        },
        {
          from: 'OS',
          to: 'App',
          synergy:
            'Verstaerkte Sandbox, granulare Berechtigungen und hardened_malloc schuetzen Aegida Connect vor System-Level-Exploits.',
        },
        {
          from: 'App',
          to: 'Hardware',
          synergy:
            'Aegida Connect erzeugt und speichert ED25519-Schluessel direkt im Titan M2, ohne sie jemals im RAM offenzulegen.',
        },
        {
          from: 'OS',
          to: 'Kommunikation',
          synergy:
            'Network Permission Toggle und OS-Level-Firewall verhindern Datenlecks ausserhalb der autorisierten verschluesselten Kanaele.',
        },
        {
          from: 'Hardware',
          to: 'Kommunikation',
          synergy:
            'Hardwarebeschleunigte Bluetooth 6 und Wi-Fi 7 bieten P2P-Kanaele mit niedriger Latenz und Transportschicht-Verschluesselung.',
        },
      ],
    },

    download: {
      sectionLabel: 'Dokumentation',
      title: 'Download',
      items: [
        {
          title: 'UFED-Test White Paper \u2014 17. April 2026',
          description:
            'Forensische Nachweise des Cellebrite Inseyets UFED 10.8.0.322 Tests auf AEGIDA Privacy Phone: Methodik, Screenshots, Schlussfolgerungen und rechtlicher Disclaimer (PDF, 12 Seiten, in Italienisch).',
        },
        {
          title: 'Privacy Phone Broschure',
          description:
            'Kommerzielle Uebersicht und Hauptmerkmale des AEGIDA Privacy Phone.',
        },
        {
          title: 'Technisches Dokument',
          description:
            'Hardwarespezifikationen, Aegida OS-Funktionen und Aegida Connect-Architektur im Detail.',
        },
      ],
    },

    proof: {
      sectionLabel: 'Forensische Nachweise',
      title: 'Cellebrite UFED Test \u2014 17. April 2026',
      intro:
        'Am 17. April 2026 hat eine unabh\u00e4ngige italienische Firma, spezialisiert auf technische elektronische Gegenma\u00dfnahmen und Counter-Surveillance, AEGIDA Privacy Phone einer forensischen Extraktion mit Cellebrite Inseyets UFED 10.8.0.322 und dem Turbo Link Modul unterzogen \u2014 dem internationalen Referenzwerkzeug der Strafverfolgungsbeh\u00f6rden. Der Test wurde sowohl im Locked-Modus (BFU \u2014 Before First Unlock) als auch im Unlocked-Modus (AFU \u2014 After First Unlock) mit bekanntem und an das Werkzeug \u00fcbergebenem Entsperrcode durchgef\u00fchrt. In keinem Szenario hat UFED Benutzerdaten extrahiert.',
      testCard: {
        operator: 'Drittanbieter-Operator',
        operatorValue: 'Unabh\u00e4ngige italienische Firma zertifiziert in technischen elektronischen Gegenma\u00dfnahmen und Counter-Surveillance',
        software: 'Software',
        softwareValue: 'Cellebrite Inseyets UFED 10.8.0.322 + Turbo Link Modul',
        date: 'Datum',
        dateValue: '17. April 2026',
        duration: 'Getestete Modi',
        durationValue: 'BFU (Locked) und AFU (Unlocked) mit \u00fcbergebenem Code \u2014 14 Minuten gesamt',
        device: 'Ger\u00e4t',
        deviceValue: 'AEGIDA Privacy Phone auf Pixel 10a, Aegida OS basierend auf GrapheneOS, Android 16, FBE-Verschl\u00fcsselung',
      },
      timeline: [
        {
          time: '16:00 \u2014 Locked-Modus (BFU)',
          caption:
            'UFED ersch\u00f6pft die f\u00fcr Pixel 10a verf\u00fcgbaren BFU-Methoden und gibt zur\u00fcck: "Access attempt failed \u2014 No suitable method found". Der einzige verbleibende Pfad ist die Recovery-Prozedur, die jedoch den AFU-Status des Ger\u00e4ts verlieren w\u00fcrde.',
          image: '/proof/ufed-test/01-locked-no-method-found.jpg',
          alt: 'UFED-Bildschirm zeigt Access attempt failed und No suitable method found im Locked-Modus',
        },
        {
          time: '16:04 \u2014 Unlocked (AFU) mit \u00fcbergebenem Code',
          caption:
            'Der Operator f\u00fchrt den Flow im Unlocked-Modus erneut aus und liefert den Entsperrcode. UFED liest Ger\u00e4te-Identifikatoren (Vendor, Modell, Chipset, OS, Kernel, Patch Level, Verschl\u00fcsselungstyp, Batterie) \u2014 Felder, die \u00fcber ADB und fastboot zug\u00e4nglich sind, kein Benutzerinhalt.',
          image: '/proof/ufed-test/02-metadata-only.jpg',
          alt: 'UFED Quick view zeigt nur Ger\u00e4te-Identifikatoren des Pixel 10a',
        },
        {
          time: '16:07 \u2014 Benutzerdatenextraktion',
          caption:
            'Nach drei Minuten mehrfacher Versuche ("Method failed, starting next attempt..."), kommt UFED zu dem Schluss: "Access attempt failed for Google Pixel 10a \u2014 No suitable method found". Keine Nachrichten, keine Fotos, keine Kontakte, keine Benutzerdateien wurden extrahiert.',
          image: '/proof/ufed-test/03-unlocked-passcode-failed.jpg',
          alt: 'UFED-Bildschirm zeigt Access attempt failed for Google Pixel 10a im Unlocked-Modus mit Code',
        },
        {
          time: 'Test-Arbeitsplatz',
          caption:
            'Laptop mit Cellebrite Inseyets UFED, Cellebrite Turbo Link Hardware via propriet\u00e4rem Kabel verbunden, AEGIDA Privacy Phone mit Aegida Connect und AEGIDA Inspector im Home-Bildschirm sichtbar. Die International Master Counter Surveillance Technical Zertifizierung des Operators ist am Arbeitsplatz sichtbar.',
          image: '/proof/ufed-test/04-setup-fisico.jpg',
          alt: 'Foto des Test-Arbeitsplatzes: Laptop mit UFED, Cellebrite Turbo Link Hardware, AEGIDA Privacy Phone',
        },
      ],
      conclusionLabel: 'Fazit',
      conclusionText:
        'Im Test vom 17. April 2026 hat Cellebrite Inseyets UFED 10.8.0.322 mit Turbo Link keine Benutzerdaten aus AEGIDA Privacy Phone extrahiert, weder im BFU- (Locked) noch im AFU-Modus (Unlocked) mit dem an das Werkzeug \u00fcbergebenen Entsperrcode. Es wurden ausschlie\u00dflich Ger\u00e4te-Identifikatoren gelesen, die \u00fcber ADB und fastboot zug\u00e4nglich sind. Die Ergebnisse beziehen sich auf die angegebene Version und Konfiguration, am Datum des Tests.',
      disclaimer:
        'Test durchgef\u00fchrt von einer unabh\u00e4ngigen, zertifizierten italienischen Firma. Cellebrite, Inseyets, UFED und Turbo Link sind eingetragene Marken von Cellebrite DI Ltd. AEGIDA ist nicht mit Cellebrite DI Ltd. verbunden, gesponsert oder verkn\u00fcpft; die Bez\u00fcge dienen der technischen vergleichenden Dokumentation gem\u00e4\u00df italienischem D.Lgs. 145/2007. Die wiedergegebenen Screenshots stellen ein Zitat gem\u00e4\u00df Art. 70 des italienischen Gesetzes 633/1941 zu Zwecken der Kritik und wissenschaftlichen Diskussion dar. Die Ergebnisse beziehen sich auf die angegebene Software/Firmware-Version und Hardware-Konfiguration, am Datum des Tests; AEGIDA garantiert nicht, dass zuk\u00fcnftige Releases der genannten forensischen Werkzeuge die gleichen Ergebnisse erzeugen, und verpflichtet sich, periodische Re-Tests zu ver\u00f6ffentlichen. Der Test misst die Interoperabilit\u00e4t mit einer spezifischen AEGIDA Privacy Phone Konfiguration und \u00e4u\u00dfert kein Gesamturteil \u00fcber Cellebrite-Produkte. Antwortrecht: legal@aegida-systems.com.',
    },

    pricing: {
      sectionLabel: 'Preisliste',
      title: 'Preis und Paket',
      subtitle:
        'Ein einheitlicher Preis, der Ger\u00e4t, Dienste und Support f\u00fcr das erste Jahr umfasst.',
      bundle: {
        label: 'Paket f\u00fcr das erste Jahr',
        price: '3.900 \u20ac',
        period: 'im Preis enthalten',
        items: [
          'Hardware-Ger\u00e4t (Google Pixel 10a)',
          'Aegida Connect mit Post-Quantum-Kryptografie konfiguriert',
          'AEGIDA Inspector f\u00fcr Hardware-Integrit\u00e4tsattestierung',
          '12 Monate Unterst\u00fctzung \u00fcber verschl\u00fcsselten Kanal',
          'Nutzerschulung (remote; vor Ort f\u00fcr Mehrger\u00e4te-Bestellungen)',
        ],
      },
      renewal: {
        label: 'J\u00e4hrliche Verl\u00e4ngerung',
        price: '690 \u20ac',
        period: 'ab dem zweiten Jahr',
        items: [
          'Sicherheitsupdates f\u00fcr den gesamten Ger\u00e4te-Lebenszyklus',
          'Fortgesetzte technische Unterst\u00fctzung \u00fcber verschl\u00fcsselten Kanal',
          'J\u00e4hrliche Konfigurations\u00fcberpr\u00fcfung',
          'Incident Response Basis (innerhalb von 4 Stunden)',
        ],
      },
      note: 'Preise f\u00fcr Privatkunden inkl. MwSt., f\u00fcr Unternehmen zzgl. MwSt. F\u00fcr Bestellungen von 5+ Ger\u00e4ten (Anwaltskanzleien, Redaktionen, NGOs, interne Sicherheitsteams) ist ein dediziertes Paket verf\u00fcgbar: Kontakt f\u00fcr ein Angebot.',
      cta: 'Verf\u00fcgbarkeit pr\u00fcfen',
    },

    cta: {
      title: 'AEGIDA Privacy Phone kaufen',
      description:
        '3.900 \u20ac Paket f\u00fcr das erste Jahr. Enth\u00e4lt Ger\u00e4t, Aegida Connect mit Post-Quantum-Kryptografie, AEGIDA Inspector, 12 Monate verschl\u00fcsselten Support und Schulung. Kontaktieren Sie uns f\u00fcr Verf\u00fcgbarkeit und Versand.',
      button: 'Verf\u00fcgbarkeit pr\u00fcfen',
    },
  },

  /* ================================================================ */
  /*  Framework page                                                   */
  /* ================================================================ */
  framework: {
    hero: {
      sectionLabel: 'FRAMEWORK',
      title: 'AEGIDA Framework',
      tagline: 'Post-Quantum-Sicherheit fuer Kritische Infrastrukturen',
      description:
        'AEGIDA Framework schuetzt die WAN-Kommunikation Kritischer Infrastrukturen mit Post-Quantum-Kryptografie (ML-KEM, NIST FIPS 203), einer Stealth-Schicht, die den Datenverkehr von normalen HTTPS-Sitzungen ununterscheidbar macht, und Zero-Trust-Zugangskontrolle fuer OEM-Lieferanten. Entwickelt fuer Energie, Gesundheitswesen, Verkehr und oeffentliche Verwaltung.',
      ctaDownload: 'Technisches Dokument herunterladen',
      ctaContact: 'PoC anfragen',
    },

    problem: {
      sectionLabel: 'DAS PROBLEM',
      title: 'Kommunikationsnetzwerke sind die Angriffsflaeche',
      description:
        'Kritische Infrastrukturen sind auf WAN-Netzwerke fuer Fernsteuerung, Telemetrie und Wartung angewiesen. Diese Verbindungen laufen ueber das oeffentliche Internet und sind Abhoerung, Targeting und Stoerungen ausgesetzt. Traditionelle Loesungen (VPN IPSec, WireGuard) bieten keinen Post-Quantum-Schutz, verschleiern den Datenverkehr nicht und verwalten keine Lieferantenzugaenge.',
      threats: [
        {
          type: 'Abhoeren',
          detail:
            'Store-now-decrypt-later: Heute verschluesselte Daten, morgen mit Quantencomputern entschluesselbar.',
        },
        {
          type: 'Lieferanten-Kompromittierung',
          detail:
            'Ukraine 2015, Colonial Pipeline 2021, Synnovis UK 2024, SolarWinds 2020.',
        },
        {
          type: 'Identifizierung / Targeting',
          detail:
            'Erkennbare VPN-Muster: IKEv2 Port 500/4500, WireGuard festes UDP, TLS-Fingerprint.',
        },
        {
          type: 'Gezielte Stoerung',
          detail:
            'NATO/ENISA/CISA-Szenarien: koordinierte Angriffe auf Energie, Wasser, Verkehr.',
        },
      ],
      tableHeaders: {
        threat: 'Bedrohung',
        detail: 'Detail',
      },
    },

    layers: {
      sectionLabel: 'ARCHITEKTUR',
      title: 'Drei Schutzschichten',
      layerA: {
        label: 'Layer A',
        name: 'ML-KEM (FIPS 203)',
        subtitle: 'Post-Quantum Key Exchange',
        details: [
          'Standard NIST FIPS 203 (August 2024)',
          'ML-KEM (ehem. Kyber-768)',
          'Klassische Sicherheit aequivalent zu AES-192',
          'Resistent gegen Shors Algorithmus',
        ],
      },
      layerB: {
        label: 'Layer B',
        name: 'AES-256-GCM',
        subtitle: 'Symmetric Authenticated Encryption',
        details: [
          'Authentifiziertes AES-256-GCM',
          'Durchsatz: 350 Mbps',
          'Schluesselableitung aus Layer A',
          'Automatische Rotation, Forward Secrecy',
        ],
      },
      layerC: {
        label: 'Layer C',
        name: 'Stealth HTTPS Obfuscation',
        subtitle: 'Anti-DPI Traffic Camouflage',
        details: [
          'Port 443/TCP, identisch mit HTTPS',
          'Umgeht Deep Packet Inspection',
          'Keine Verkehrsanalyse moeglich',
          'Unsichtbar fuer Firewalls und IDS',
        ],
      },
    },

    stats: {
      items: [
        { value: '350', unit: 'Mbps', label: 'Verschluesselter Durchsatz' },
        { value: '24/7', unit: '', label: 'Luefterlos, wartungsfrei' },
        { value: '0%', unit: '', label: 'DPI-Erkennungsrate' },
        { value: '<5', unit: 'ms', label: 'Overhead auf Glasfaser' },
      ],
    },

    comparison: {
      sectionLabel: 'VERGLEICH',
      title: 'AEGIDA vs. bestehende Loesungen',
      headers: ['', 'IPSec/IKEv2', 'WireGuard', 'ZTNA', 'SD-WAN', 'AEGIDA'],
      rows: [
        { label: 'Symmetrische Verschluesselung' },
        { label: 'PQC Key Exchange' },
        { label: 'Traffic Obfuscation / DPI Resistance' },
        { label: 'Zero-Trust Access OEM' },
        { label: 'Kein Fingerprint' },
        { label: 'Forward Secrecy mit PQC' },
      ],
      note: 'AEGIDA ersetzt nicht, sondern ergaenzt. Es arbeitet auf WAN-Transportebene ohne Aenderungen am internen Netzwerk.',
    },

    threats: {
      sectionLabel: 'THREAT LANDSCAPE',
      title: 'Dokumentierte Angriffe auf Kritische Infrastrukturen',
      cards: [
        {
          year: '2016',
          name: 'INDUSTROYER / CRASHOVERRIDE',
          location: 'Ukraine',
          description:
            'Erste Malware, die speziell fuer Angriffe auf Stromnetze entwickelt wurde. Stromausfall in Kiew durch manipulierte ICS-Protokolle.',
        },
        {
          year: '2017',
          name: 'TRITON / TRISIS',
          location: 'Petrochemie',
          description:
            'Angriff auf Triconex-SIS-Sicherheitssysteme. Ziel: Deaktivierung physischer Schutzvorrichtungen in einer petrochemischen Anlage.',
        },
        {
          year: '2022',
          name: 'PIPEDREAM / INCONTROLLER',
          location: 'Sandworm / GRU',
          description:
            'Modulares Toolkit fuer Angriffe auf Schneider-PLC, OMRON und OPC-UA-Server. Faehigkeit zur gross angelegten Stoerung.',
        },
        {
          year: 'Ongoing',
          name: 'Store-Now-Decrypt-Later',
          location: 'NSA, NCSC UK, BSI',
          description:
            'Massenhafte Abhoerung verschluesselten Datenverkehrs zur kuenftigen Entschluesselung mit Quantencomputern. Von Behoerden bestaetigte Bedrohung.',
        },
      ],
    },

    nis2: {
      sectionLabel: 'NIS2',
      title: 'NIS2-Konformitaet',
      badgeTitle: 'NIS2-Richtlinie \u2014 NIS2UmsuCG',
      badgeSubtitle:
        'Sanktionen bis zu 2 % des weltweiten Jahresumsatzes bei Nichtkonformitaet.',
      tableHeaders: {
        requirement: 'NIS2-Anforderung',
        coverage: 'AEGIDA-Abdeckung',
      },
      rows: [
        {
          article: 'Art. 21 Kryptografie',
          mapping:
            'ML-KEM (FIPS 203) + AES-256-GCM mit Forward Secrecy und automatischer Schluesselrotation.',
        },
        {
          article: 'Art. 21 Risikomanagement',
          mapping:
            'Redundantes Mesh, automatisches Failover, kein Single Point of Failure.',
        },
        {
          article: 'Art. 21 Lieferkette',
          mapping:
            'Zero-Trust-OEM-Zugaenge: Authentifizierung, Autorisierung und Protokollierung pro Sitzung.',
        },
        {
          article: 'Artt. 20\u201323 Governance',
          mapping:
            'Strukturiertes Logging, vollstaendiger Audit Trail, automatisierte Berichterstellung.',
        },
      ],
    },

    roadmap: {
      sectionLabel: 'ZERTIFIZIERUNGEN',
      title: 'Zertifizierungs-Roadmap',
      items: [
        { label: 'NIST FIPS 203', status: 'Implementiert' },
        { label: 'FIPS 140-3', status: 'In Bearbeitung' },
        { label: 'Common Criteria EAL4+', status: 'In Bearbeitung' },
        { label: 'BSI-Qualifizierung', status: 'In Bearbeitung' },
      ],
      statusImplemented: 'Implementiert',
      statusInProgress: 'In Bearbeitung',
    },

    poc: {
      sectionLabel: 'PROOF OF CONCEPT',
      title: 'Proof of Concept',
      description:
        'Der PoC-Prozess gliedert sich in drei Phasen zur Validierung der Leistung und Integration von AEGIDA in Ihre Infrastruktur.',
      phases: [
        {
          phase: '1',
          title: 'Setup',
          description:
            'Anforderungsanalyse, Appliance-Konfiguration und Baseline-Definition.',
        },
        {
          phase: '2',
          title: 'Deployment',
          description:
            'Installation in der Produktionsumgebung und Integration in die bestehende Infrastruktur.',
        },
        {
          phase: '3',
          title: 'Analyse',
          description:
            'Metriken-Erfassung, vollstaendiger technischer Bericht und Empfehlungen fuer den Roll-out.',
        },
      ],
    },

    download: {
      sectionLabel: 'DOKUMENTATION',
      title: 'Dokumentation herunterladen',
      items: [
        {
          title: 'Framework Broschure',
          description: 'Kommerzielle Uebersicht und Vorteile des AEGIDA Framework.',
        },
        {
          title: 'Allgemeines Briefing',
          description: 'Fuer den Sicherheitsverantwortlichen.',
        },
        {
          title: 'Technisches Dokument',
          description: 'Detaillierte Architektur und Proof of Concept.',
        },
      ],
    },

    cta: {
      title: 'Bereit fuer eine technische Bewertung?',
      description:
        'Kontaktieren Sie unser Team fuer eine kostenlose technische Bewertung Ihrer Infrastruktur und erfahren Sie, wie AEGIDA Framework Ihre kritische Kommunikation schuetzen kann.',
      button: 'Technische Bewertung anfragen',
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
