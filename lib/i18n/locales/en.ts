import type { Translations } from '../types'

const en: Translations = {
  /* ================================================================ */
  /*  Navigation                                                       */
  /* ================================================================ */
  nav: {
    prodotti: 'Products',
    privacyPhone: 'Privacy Phone',
    framework: 'Framework',
    settori: 'Sectors',
    conformita: 'Compliance',
    blog: 'Blog',
    contatti: 'Contact',
    richiedi: 'Request Briefing',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
  footer: {
    copyright: '\u00a9 2026 H4R Human for Research Srl. All rights reserved.',
    location: 'Rome, Italy \u2014 VAT IT14765811006',
    privacy: 'Privacy Policy',
    cookie: 'Cookie Policy',
    payoff: "NOBODY ELSE'S.",
  },

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
  home: {
    hero: {
      classification: 'RESTRICTED \u2014 H4R HUMAN FOR RESEARCH',
      title: 'Post-Quantum Security.\nZero Trust.',
      subtitle: "Nobody else's.",
      description:
        'AEGIDA is the H4R platform designed to protect communications and critical infrastructure with post-quantum cryptography, peer-to-peer architecture, and zero-trust access. No intermediary servers, no compromises.',
      ctaPrimary: 'Request Technical Assessment',
      ctaSecondary: 'Explore the Platform',
      stats: [
        { value: 'FIPS 203', label: 'Post-Quantum Standard' },
        { value: '350 Mbps', label: 'Real Throughput' },
        { value: 'E2E', label: 'End-to-End Encryption' },
        { value: '0 Servers', label: 'P2P Architecture' },
      ],
    },

    threatTicker: {
      label: 'LIVE THREAT FEED',
    },

    products: {
      sectionLabel: 'PLATFORM',
      title: 'Two Products, One Mission',

      card1: {
        title: 'AEGIDA Privacy Phone',
        specs: 'Pixel 10a \u00b7 Aegida OS \u00b7 Aegida Connect',
        description:
          'Hardened smartphone with a proprietary operating system and encrypted peer-to-peer communications. Absolute privacy with no dependency on third-party infrastructure.',
        features: [
          'Aegida OS (GrapheneOS)',
          'Encrypted P2P communications',
          'Multi-channel (Tor/Wi-Fi/BT)',
          'Zero intermediary servers',
          'Titan M2 Security',
        ],
        cta: 'Learn more \u2192',
      },

      card2: {
        title: 'AEGIDA Framework',
        specs: 'Post-Quantum \u00b7 Stealth \u00b7 Zero-Trust Access',
        description:
          'Post-quantum communication infrastructure for OT/IT networks, featuring stealth anti-DPI, zero-trust access control for OEM vendors, and redundant high-availability mesh.',
        features: [
          'ML-KEM FIPS 203 Post-Quantum',
          'AES-256-GCM 350 Mbps',
          'Stealth anti-DPI',
          'Zero-Trust OEM Access',
          'Redundant 24/7 mesh',
        ],
        cta: 'Learn more \u2192',
      },
    },

    sectors: {
      sectionLabel: 'SECTORS',
      title: 'Who We Protect',
      items: [
        {
          title: 'Energy & Utilities',
          description:
            'SCADA/ICS protection, communications between power plants and control centers, OEM maintenance access.',
        },
        {
          title: 'Healthcare',
          description:
            'Encryption of patient data in transit, protection of connected medical devices, enhanced GDPR compliance.',
        },
        {
          title: 'Legal & Compliance',
          description:
            'Encrypted attorney-client communications, protection of confidential case files, legal privilege guaranteed.',
        },
        {
          title: 'Transportation',
          description:
            'Protection of rail, port, and airport operational communications, resilient multi-link mesh.',
        },
        {
          title: 'Journalism & NGOs',
          description:
            'Source protection, communications in hostile environments, resistance to state surveillance and censorship.',
        },
        {
          title: 'Government & Intelligence',
          description:
            'Classified communications, critical national infrastructure, technological sovereignty.',
        },
      ],
    },

    threats: {
      sectionLabel: 'THREATS',
      title: 'Threat Model',
      items: [
        {
          name: 'Metadata Surveillance',
          vector:
            'Analysis of communication patterns, timing, frequency, and contacts \u2014 even without reading message content.',
          countermeasure:
            'Aegida Connect: P2P via Tor, no intermediary servers, no centralized metadata.',
        },
        {
          name: 'Deep Packet Inspection',
          vector:
            'Network traffic inspection to identify and block VPNs, Tor, and non-standard protocols.',
          countermeasure:
            'AEGIDA Framework Layer C: traffic indistinguishable from standard HTTPS on port 443/TCP.',
        },
        {
          name: 'Store-Now-Decrypt-Later',
          vector:
            'Intercept today, decrypt tomorrow with quantum computers (within 10\u201315 years).',
          countermeasure:
            'ML-KEM (FIPS 203): post-quantum key exchange, immediate protection against future threats.',
        },
        {
          name: 'Vendor Compromise',
          vector:
            'Lateral access through vendor/maintenance credentials with permanent VPN connections.',
          countermeasure:
            'Zero-trust access control: time-limited, audited, revocable sessions for every OEM access.',
        },
        {
          name: 'Physical Compromise',
          vector:
            'Data extraction from a seized or stolen device using forensic tools (Cellebrite, GrayKey).',
          countermeasure:
            'Aegida OS: USB lockdown, hardware-backed AES-256 encryption, remote wipe.',
        },
        {
          name: 'Blackout / Censorship',
          vector:
            'Internet connectivity disruption to prevent operational communications.',
          countermeasure:
            'Aegida Connect: communication via local Wi-Fi, Bluetooth, and physical media. Resilient mesh.',
        },
      ],
    },

    compliance: {
      sectionLabel: 'COMPLIANCE',
      title: 'Check Your Compliance',
      subtitle:
        'Find out in 5 minutes whether your organization meets NIS2, GDPR, and NIST security requirements.',
      cta: 'Start Free Self-Assessment \u2192',
      badges: ['NIS2 / EU Directive 2022/2555', 'GDPR', 'NIST FIPS 203'],
      note: 'Indicative results \u2014 this does not constitute legal advice',
    },

    contact: {
      sectionLabel: 'CONTACT',
      title: 'Request a Briefing',
      info: {
        companyName: 'H4R Human for Research Srl',
        productLabel: 'AEGIDA Product',
        webLabel: 'Web',
        sedeLabel: 'HQ',
        sedeValue: 'Rome, Italy',
        pivaLabel: 'VAT',
        briefingNote:
          'Fill out the form to request a confidential technical briefing. Our team will contact you within 24 business hours to schedule a dedicated session.',
      },
      form: {
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
      tagline: 'The device. The operating system. The communications.',
      description:
        'AEGIDA Privacy Phone combines reference-grade hardware, a hardened operating system, and encrypted peer-to-peer communications in a single device designed for those who accept no compromises on privacy. No central server, no intermediaries, no exposed metadata.',
      ctaDownload: 'Download Data Sheet',
      ctaContact: 'Request Information',
    },

    pillars: {
      sectionLabel: 'Architecture',
      title: 'Three Pillars, One Goal',
      items: [
        {
          num: '01',
          title: 'Hardware',
          subtitle: 'Google Pixel 10a',
          desc: 'Titan M2 Secure Enclave, relockable bootloader, 7 years of updates. The physical foundation upon which every security layer is built.',
        },
        {
          num: '02',
          title: 'Aegida OS',
          subtitle: 'GrapheneOS',
          desc: 'Hardened operating system, 100% open-source, zero Google telemetry. Every permission, every sensor, every byte under your control.',
        },
        {
          num: '03',
          title: 'Aegida Connect',
          subtitle: 'P2P Comms',
          desc: 'Encrypted peer-to-peer communications via Tor, local Wi-Fi, and Bluetooth. No central server, no intermediaries, no metadata.',
        },
      ],
    },

    hardware: {
      sectionLabel: 'Hardware',
      title: 'Google Pixel 10a',
      specs: [
        { label: 'Processor', value: 'Google Tensor G4 (4 nm), custom SoC with dedicated NPU, Exynos 5400 modem with satellite SOS' },
        { label: 'RAM / Storage', value: '8 GB LPDDR5 / 128\u2013256 GB UFS' },
        { label: 'Display', value: '6.3" P-OLED, 120 Hz, 3,000 nit, Gorilla Glass 7i' },
        { label: 'Camera', value: '48 MP f/1.7 + 13 MP ultrawide, 13 MP front, 4K@60fps' },
        { label: 'Battery', value: '5,100 mAh, 30 W wired, 18 W wireless' },
        { label: 'Connectivity', value: '5G, Wi-Fi 7, Bluetooth 6, NFC, Satellite SOS' },
        { label: 'HW Security', value: 'Titan M2 Secure Enclave' },
        { label: 'Durability', value: 'IP68' },
        { label: 'Dimensions', value: '153.9 x 73 x 9 mm, 183 g' },
        { label: 'Updates', value: '7 years OS + security (through 2033)' },
      ],
      whyTitle: 'Why the Pixel 10a',
      whyPoints: [
        'Relockable bootloader after flashing: the only Android smartphone that allows re-lock with a custom OS, preserving the Verified Boot chain.',
        'Titan M2 Secure Enclave: dedicated chip for cryptographic keys, hardware anti-tampering, and PIN attempt rate-limiting.',
        'Timely kernel patches: Google releases monthly patches with a public SLA; GrapheneOS integrates them within 24\u201348 hours.',
      ],
    },

    os: {
      sectionLabel: 'Operating System',
      title: 'Aegida OS',
      description:
        'Based on GrapheneOS, the privacy-focused mobile operating system with over 300,000 active users, founded in 2014 and developed as a 100% open-source project. Aegida OS inherits all its protections and adds enterprise-specific deployment configurations.',
      features: [
        {
          title: 'Storage Scopes',
          description:
            'Each app sees only its own storage sandbox, with no access to other applications\u2019 files or the global file system.',
        },
        {
          title: 'Network Permission Toggle',
          description:
            'Per-app network permission: revocable at any time, silently blocking all outbound connections.',
        },
        {
          title: 'Sensors Permission',
          description:
            'Accelerometer, gyroscope, barometer, and other sensors require explicit permission, preventing hardware fingerprinting.',
        },
        {
          title: 'Hardened Memory Allocator',
          description:
            'Custom memory allocator (hardened_malloc) with guard pages, canary randomization, and use-after-free protection.',
        },
        {
          title: 'Vanadium Browser',
          description:
            'Hardened Chromium with per-site isolation, disableable JIT, WebRTC blocked by default, and restrictive Content Security Policies.',
        },
        {
          title: 'Secure App Spawning',
          description:
            'Secure process forking with ASLR re-randomization at every launch, eliminating attacks based on predictable memory layout.',
        },
      ],
      privacyByDesignTitle: 'Privacy by Design',
      privacyByDesignItems: [
        'MAC randomization for every Wi-Fi network',
        'PIN scrambling: numeric keypad with randomized layout',
        'Automatic EXIF removal from photos and screenshots',
        'Hardware identifier isolation across profiles',
        'Clipboard notification: alert on every clipboard access',
        'Multiple isolated profiles with separate encryption',
        'USB lockdown: peripherals blocked when screen is off',
      ],
      zeroGoogleTitle: 'Zero Google',
      zeroGoogleDescription:
        'No Google Play Services. Zero telemetry. Zero bloatware. Compatible apps can be installed via an optional sandbox without any special privileges, keeping the system completely isolated from the Google ecosystem.',
    },

    connect: {
      sectionLabel: 'Communications',
      title: 'Aegida Connect',
      description:
        'Pure peer-to-peer architecture: every device is an autonomous node. Messages travel directly between sender and recipient through multiple channels \u2014 Tor, local Wi-Fi, Bluetooth \u2014 without ever passing through a central server. No intermediary knows who communicates with whom.',
      transportTitle: 'Transport Channels',
      transportChannels: [
        { label: 'Tor / Internet', value: 'Onion Service v3 ED25519 \u2014 anonymous global communication' },
        { label: 'Local Wi-Fi', value: 'LAN / hotspot 802.11 \u2014 zero Internet dependency' },
        { label: 'Bluetooth', value: 'BT Classic / BLE, 10\u2013100 m \u2014 proximity without network' },
        { label: 'Physical media', value: 'MicroSD / USB \u2014 delay-tolerant, air-gapped transfer' },
      ],
      secureRelayTitle: 'Aegida Secure Relay',
      secureRelayDescription:
        'When the recipient is offline, messages are temporarily held on distributed relays, encrypted end-to-end with the recipient\u2019s public key. The relay cannot read the content or metadata. As soon as the recipient comes back online, messages are delivered and deleted from the relay. A delay-tolerant architecture that does not sacrifice security.',
      cryptoStackTitle: 'Cryptographic Stack',
      cryptoStack: [
        { name: 'Curva25519', role: 'ECDH Key Exchange' },
        { name: 'ChaCha20-Poly1305', role: 'AEAD Encryption' },
        { name: 'BLAKE2', role: 'Hashing' },
        { name: 'PFS', role: 'Perfect Forward Secrecy' },
        { name: 'AES-256-GCM', role: 'Symmetric Encryption' },
        { name: 'Scrypt KDF', role: 'Key Derivation' },
        { name: 'Onion Service v3', role: 'Anonymous Transport' },
      ],
      identityTitle: 'Identity Management',
      identityDescription:
        'No centralized PKI, no Certificate Authority. Each device generates an ED25519 key pair directly in the Titan M2. Identity exchange occurs via proximity QR pairing: two users scan each other\u2019s QR code, verify the fingerprint, and establish a permanent encrypted channel. Simple, verifiable, MITM-resistant.',
      featuresTitle: 'Features',
      features: [
        'End-to-end encrypted 1:1 messaging',
        'Private groups with shared key',
        'Distributed and moderatable forums',
        'Broadcast feeds and updates',
        'Aegida Secure Relay for offline users',
        'Secure Pairing via QR Code',
      ],
    },

    integration: {
      sectionLabel: 'Synergy',
      title: 'Layer Integration',
      tableHeaders: {
        from: 'From',
        to: 'To',
        synergy: 'Synergy',
      },
      rows: [
        {
          from: 'Hardware',
          to: 'OS',
          synergy: 'Verified Boot + Titan M2 ensure that only signed Aegida OS can boot. Cryptographic keys are protected in hardware.',
        },
        {
          from: 'OS',
          to: 'App',
          synergy: 'Reinforced sandbox, granular permissions, and hardened_malloc protect Aegida Connect from system-level exploits.',
        },
        {
          from: 'App',
          to: 'Hardware',
          synergy: 'Aegida Connect generates and stores ED25519 keys directly in the Titan M2, never exposing them in RAM.',
        },
        {
          from: 'OS',
          to: 'Communications',
          synergy: 'Network Permission Toggle and OS-level firewall prevent data leaks outside authorized encrypted channels.',
        },
        {
          from: 'Hardware',
          to: 'Communications',
          synergy: 'Hardware-accelerated Bluetooth 6 and Wi-Fi 7 provide low-latency P2P channels with transport-layer encryption.',
        },
      ],
    },

    download: {
      sectionLabel: 'Documentation',
      title: 'Downloads',
      items: [
        {
          title: 'Privacy Phone Brochure',
          description:
            'Commercial overview and key features of AEGIDA Privacy Phone.',
        },
        {
          title: 'Technical Document',
          description:
            'Hardware specifications, Aegida OS features, and Aegida Connect architecture in detail.',
        },
      ],
    },

    cta: {
      title: 'Interested in AEGIDA Privacy Phone?',
      description:
        'Contact us for information on availability, enterprise configurations, and pilot programs.',
      button: 'Request Information',
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
      description: 'Privacy policy of H4R Human for Research Srl for the AEGIDA website.',
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
          'The Data Controller is H4R Human for Research Srl, with registered office in Rome, Italy — VAT IT14765811006.',
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
      description: 'Cookie policy for the AEGIDA website by H4R Human for Research Srl.',
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
