import type { ArticleMeta } from '../../types'

const article: ArticleMeta = {
  slug: '2026-03-post-quantum-minacce',
  date: '2026-03-20',
  author: 'AEGIDA Research Team',
  category: 'threat-intelligence',
  locales: {
    it: {
      title: 'Store-Now-Decrypt-Later: perché le tue comunicazioni di oggi sono già a rischio',
      excerpt: 'I computer quantistici non sono ancora operativi, ma la minaccia è già reale. Ecco come funziona l\'attacco "store-now-decrypt-later" e come proteggersi con la crittografia post-quantum.',
      body: [
        { type: 'paragraph', text: 'Esiste una minaccia informatica che non richiede un attacco diretto, non lascia tracce nei log e non attiva nessun allarme. Si chiama "store-now-decrypt-later" (SNDL) e sta già accadendo. Agenzie di intelligence, gruppi APT e attori statali stanno intercettando e archiviando enormi quantità di traffico cifrato, con l\'obiettivo di decrittarlo in futuro quando i computer quantistici saranno operativi.' },
        { type: 'heading', level: 2, text: 'Come funziona l\'attacco SNDL' },
        { type: 'list', ordered: true, items: [
          'Un attore malevolo intercetta il traffico cifrato sulle reti WAN (comunicazioni tra sedi, telemetria, dati SCADA).',
          'I dati vengono archiviati in attesa che i computer quantistici diventino abbastanza potenti.',
          'Quando la capacità computazionale sarà disponibile, algoritmi come quello di Shor potranno rompere RSA, ECC e Diffie-Hellman in poche ore.',
          'Tutti i dati archiviati — contratti, comunicazioni strategiche, segreti industriali — diventeranno leggibili.',
        ]},
        { type: 'heading', level: 2, text: 'Non è fantascienza' },
        { type: 'paragraph', text: 'La NSA, il NCSC britannico e il BSI tedesco hanno pubblicamente confermato che la minaccia SNDL è reale e attuale. Il NIST ha finalizzato gli standard post-quantum (FIPS 203, ML-KEM) nell\'agosto 2024 proprio per rispondere a questa urgenza. La timeline stimata per un computer quantistico crittograficamente rilevante varia tra i 5 e i 15 anni — ma i dati intercettati oggi avranno ancora valore strategico tra 10, 20 o 30 anni.' },
        { type: 'callout', variant: 'warning', text: 'Se le tue comunicazioni contengono informazioni che saranno ancora sensibili tra 10 anni — contratti, proprietà intellettuale, dati personali, strategie — l\'attacco SNDL ti riguarda già oggi.' },
        { type: 'heading', level: 2, text: 'La soluzione: crittografia post-quantum' },
        { type: 'paragraph', text: 'La migrazione verso algoritmi post-quantum come ML-KEM (FIPS 203) è l\'unica contromisura efficace contro SNDL. Questi algoritmi sono basati su problemi matematici (reticoli strutturati) che rimangono computazionalmente intrattabili anche per i computer quantistici.' },
        { type: 'paragraph', text: 'AEGIDA Framework implementa ML-KEM per lo scambio di chiavi, combinato con AES-256-GCM per la cifratura simmetrica e uno stealth layer che rende il traffico indistinguibile dal normale HTTPS. Questo approccio a tre livelli protegge sia dai futuri attacchi quantistici che dalle tecniche di intercettazione e analisi del traffico già disponibili oggi.' },
        { type: 'heading', level: 2, text: 'Cosa fare adesso' },
        { type: 'paragraph', text: 'La transizione alla crittografia post-quantum non è un progetto del futuro: è un\'urgenza del presente. Ogni giorno di ritardo è un giorno in più di dati potenzialmente intercettati e archiviati. Le organizzazioni che gestiscono infrastrutture critiche, dati sanitari, informazioni finanziarie o segreti industriali dovrebbero iniziare la migrazione PQC immediatamente.' },
      ],
    },
    en: {
      title: 'Store-Now-Decrypt-Later: why your communications today are already at risk',
      excerpt: 'Quantum computers are not yet operational, but the threat is already real. How the "store-now-decrypt-later" attack works and how to protect yourself with post-quantum cryptography.',
      body: [
        { type: 'paragraph', text: 'There is a cyber threat that requires no direct attack, leaves no traces in logs, and triggers no alarms. It is called "store-now-decrypt-later" (SNDL) and it is already happening. Intelligence agencies, APT groups, and state actors are intercepting and archiving vast amounts of encrypted traffic, with the goal of decrypting it in the future when quantum computers become operational.' },
        { type: 'heading', level: 2, text: 'How the SNDL attack works' },
        { type: 'list', ordered: true, items: [
          'A malicious actor intercepts encrypted traffic on WAN networks (inter-site communications, telemetry, SCADA data).',
          'The data is archived, waiting for quantum computers to become powerful enough.',
          'When the computational capacity becomes available, algorithms like Shor\'s will be able to break RSA, ECC, and Diffie-Hellman in hours.',
          'All archived data — contracts, strategic communications, trade secrets — will become readable.',
        ]},
        { type: 'heading', level: 2, text: 'This is not science fiction' },
        { type: 'paragraph', text: 'The NSA, UK NCSC, and German BSI have publicly confirmed that the SNDL threat is real and current. NIST finalized post-quantum standards (FIPS 203, ML-KEM) in August 2024 precisely to address this urgency. The estimated timeline for a cryptographically relevant quantum computer ranges between 5 and 15 years — but data intercepted today will still have strategic value in 10, 20, or 30 years.' },
        { type: 'callout', variant: 'warning', text: 'If your communications contain information that will still be sensitive in 10 years — contracts, intellectual property, personal data, strategies — the SNDL attack already concerns you today.' },
        { type: 'heading', level: 2, text: 'The solution: post-quantum cryptography' },
        { type: 'paragraph', text: 'Migration to post-quantum algorithms such as ML-KEM (FIPS 203) is the only effective countermeasure against SNDL. These algorithms are based on mathematical problems (structured lattices) that remain computationally intractable even for quantum computers.' },
        { type: 'paragraph', text: 'AEGIDA Framework implements ML-KEM for key exchange, combined with AES-256-GCM for symmetric encryption and a stealth layer that makes traffic indistinguishable from normal HTTPS. This three-layer approach protects against both future quantum attacks and traffic interception and analysis techniques already available today.' },
        { type: 'heading', level: 2, text: 'What to do now' },
        { type: 'paragraph', text: 'The transition to post-quantum cryptography is not a future project: it is a present urgency. Every day of delay is another day of potentially intercepted and archived data. Organizations managing critical infrastructure, health data, financial information, or trade secrets should begin PQC migration immediately.' },
      ],
    },
    de: {
      title: 'Store-Now-Decrypt-Later: Warum Ihre heutige Kommunikation bereits gefaehrdet ist',
      excerpt: 'Quantencomputer sind noch nicht einsatzbereit, aber die Bedrohung ist bereits real. Wie der "Store-Now-Decrypt-Later"-Angriff funktioniert und wie Sie sich mit Post-Quantum-Kryptografie schuetzen.',
      body: [
        { type: 'paragraph', text: 'Es gibt eine Cyberbedrohung, die keinen direkten Angriff erfordert, keine Spuren in Logs hinterlaesst und keinen Alarm ausloest. Sie heisst "Store-Now-Decrypt-Later" (SNDL) und findet bereits statt. Geheimdienste, APT-Gruppen und staatliche Akteure fangen grosse Mengen verschluesselten Datenverkehrs ab und archivieren ihn, um ihn in Zukunft zu entschluesseln, wenn Quantencomputer einsatzbereit sind.' },
        { type: 'heading', level: 2, text: 'Wie der SNDL-Angriff funktioniert' },
        { type: 'list', ordered: true, items: [
          'Ein boesartiger Akteur faengt verschluesselten Datenverkehr in WAN-Netzwerken ab (Standortkommunikation, Telemetrie, SCADA-Daten).',
          'Die Daten werden archiviert und warten darauf, dass Quantencomputer leistungsfaehig genug werden.',
          'Wenn die Rechenkapazitaet verfuegbar ist, koennen Algorithmen wie Shors RSA, ECC und Diffie-Hellman in Stunden brechen.',
          'Alle archivierten Daten — Vertraege, strategische Kommunikation, Geschaeftsgeheimnisse — werden lesbar.',
        ]},
        { type: 'heading', level: 2, text: 'Das ist keine Science-Fiction' },
        { type: 'paragraph', text: 'Die NSA, das britische NCSC und das deutsche BSI haben oeffentlich bestaetigt, dass die SNDL-Bedrohung real und aktuell ist. NIST hat die Post-Quantum-Standards (FIPS 203, ML-KEM) im August 2024 genau aus diesem Grund finalisiert. Die geschaetzte Zeitlinie fuer einen kryptografisch relevanten Quantencomputer liegt zwischen 5 und 15 Jahren — aber heute abgefangene Daten haben auch in 10, 20 oder 30 Jahren noch strategischen Wert.' },
        { type: 'callout', variant: 'warning', text: 'Wenn Ihre Kommunikation Informationen enthaelt, die in 10 Jahren noch sensibel sein werden — Vertraege, geistiges Eigentum, personenbezogene Daten, Strategien — betrifft der SNDL-Angriff Sie bereits heute.' },
        { type: 'heading', level: 2, text: 'Die Loesung: Post-Quantum-Kryptografie' },
        { type: 'paragraph', text: 'Die Migration zu Post-Quantum-Algorithmen wie ML-KEM (FIPS 203) ist die einzige wirksame Gegenmassnahme gegen SNDL. Diese Algorithmen basieren auf mathematischen Problemen (strukturierte Gitter), die auch fuer Quantencomputer rechnerisch unlösbar bleiben.' },
        { type: 'paragraph', text: 'AEGIDA Framework implementiert ML-KEM fuer den Schluesselaustausch, kombiniert mit AES-256-GCM fuer symmetrische Verschluesselung und einer Stealth-Schicht, die den Datenverkehr von normalem HTTPS ununterscheidbar macht.' },
        { type: 'heading', level: 2, text: 'Was jetzt zu tun ist' },
        { type: 'paragraph', text: 'Der Uebergang zur Post-Quantum-Kryptografie ist kein Zukunftsprojekt: Es ist eine gegenwaertige Dringlichkeit. Jeder Tag Verzoegerung ist ein weiterer Tag potenziell abgefangener und archivierter Daten. Organisationen, die kritische Infrastrukturen verwalten, sollten sofort mit der PQC-Migration beginnen.' },
      ],
    },
  },
}

export default article
