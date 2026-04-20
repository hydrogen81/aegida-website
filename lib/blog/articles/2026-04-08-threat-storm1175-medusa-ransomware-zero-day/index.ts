import type { ArticleMeta } from '../../types'

const article: ArticleMeta = {
  slug: '2026-04-08-threat-storm1175-medusa-ransomware-zero-day',
  date: '2026-04-08',
  author: 'AEGIDA Research Team',
  category: 'threat-intelligence',
  locales: {
    it: {
      title: 'Storm-1175: Il Gruppo Cinese Che Distribuisce Medusa Ransomware Sfruttando Zero-Day in Meno di 24 Ore',
      excerpt: 'Microsoft rivela che Storm-1175, attore cinese finanziariamente motivato, sta sfruttando zero-day in SmarterMail e GoAnywhere MFT per distribuire Medusa ransomware con velocità senza precedenti — in alcuni casi dalla compromissione iniziale al ransomware in meno di 24 ore. Oltre 300 organizzazioni colpite nei settori sanitario, educativo e finanziario. Analisi delle TTPs, delle vulnerabilità sfruttate e delle contromisure.',
      body: [
        { type: 'paragraph', text: 'Il 6 aprile 2026, Microsoft ha pubblicato un\'analisi dettagliata su Storm-1175, un attore cinese finanziariamente motivato che sta orchestrando attacchi "ad alta velocità" sfruttando una combinazione di zero-day e vulnerabilità N-day per distribuire il ransomware Medusa. Il dato che rende questa campagna particolarmente allarmante è il tempo di esecuzione: in alcuni casi, Storm-1175 passa dalla compromissione iniziale all\'esfiltrazione dei dati e al deployment del ransomware in meno di 24 ore. Non giorni, non settimane — ore. Questo ritmo operativo lascia alle vittime una finestra di risposta praticamente inesistente.' },

        { type: 'heading', level: 2, text: 'Zero-Day Sfruttati Prima della Disclosure: SmarterMail e GoAnywhere' },
        { type: 'paragraph', text: 'Storm-1175 ha recentemente sfruttato due vulnerabilità critiche come zero-day — ovvero prima della loro divulgazione pubblica: CVE-2026-23760 in SmarterMail, un server email e piattaforma di collaborazione ampiamente utilizzato, e CVE-2025-10035 in GoAnywhere Managed File Transfer. Entrambe le vulnerabilità sono state sfruttate una settimana prima della disclosure pubblica, dando al gruppo un vantaggio temporale devastante: le vittime non sapevano nemmeno che la vulnerabilità esistesse mentre venivano già compromesse.' },
        { type: 'paragraph', text: 'CVE-2026-23760 è un bypass dell\'autenticazione in SmarterMail che consente l\'accesso non autorizzato al server email. Per un attaccante, compromettere un server email significa accesso immediato a comunicazioni interne, credenziali, documenti allegati e — nel caso di organizzazioni sanitarie — dati dei pazienti. CVE-2025-10035 in GoAnywhere MFT è particolarmente critica perché GoAnywhere è utilizzato per il trasferimento sicuro di file tra organizzazioni — un bersaglio perfetto per l\'esfiltrazione massiva di dati sensibili.' },
        { type: 'callout', variant: 'warning', text: 'Storm-1175 ha sfruttato CVE-2026-23760 (SmarterMail) e CVE-2025-10035 (GoAnywhere MFT) come zero-day, una settimana prima della divulgazione pubblica. Nelle campagne recenti, il gruppo ha sfruttato oltre 16 vulnerabilità in 10 prodotti software diversi, tra cui Microsoft Exchange, PaperCut, Ivanti Connect Secure, ConnectWise ScreenConnect, JetBrains TeamCity, SimpleHelp, CrushFTP e BeyondTrust.' },

        { type: 'heading', level: 2, text: 'Anatomia dell\'Attacco: Dalla Compromissione al Ransomware in 24 Ore' },
        { type: 'paragraph', text: 'Microsoft ha ricostruito la catena di attacco di Storm-1175 in fasi distinte. La prima fase è lo sfruttamento iniziale: il gruppo identifica asset web-facing vulnerabili con una velocità e una competenza che Microsoft definisce "alta operatività". La scansione è continua e sistematica — quando una nuova vulnerabilità diventa disponibile (o il gruppo ne scopre una zero-day), gli asset esposti vengono compromessi in ore.' },
        { type: 'paragraph', text: 'Dalla compromissione di un\'applicazione SmarterMail, Storm-1175 modifica il firewall e abilita l\'accesso Remote Desktop per il movimento laterale, scrivendo i risultati dei comandi in file TXT. Nella fase di persistenza, il gruppo crea nuovi account utente, distribuisce web shell e installa software di Remote Monitoring and Management (RMM) legittimo per mantenere l\'accesso. L\'uso di strumenti legittimi è tattico: gli RMM non vengono rilevati dagli antivirus perché sono software autorizzati.' },
        { type: 'paragraph', text: 'Per il furto di credenziali e il movimento laterale, Storm-1175 utilizza Impacket — un toolkit open-source per l\'interazione con protocolli di rete Windows — e PDQ Deployer, uno strumento di deployment software che viene abusato per distribuire sia strumenti di movimento laterale che il payload finale del ransomware Medusa attraverso tutta la rete. Infine, per l\'esfiltrazione dei dati, il gruppo utilizza Bandizip per la compressione e Rclone per il trasferimento verso storage cloud controllato dall\'attaccante.' },

        { type: 'heading', level: 2, text: 'La Tecnica Anti-Detection: Escludere l\'Intero Disco dall\'Antivirus' },
        { type: 'paragraph', text: 'Un aspetto particolarmente sofisticato è la tecnica di evasione della detection: Storm-1175 utilizza comandi PowerShell codificati per aggiungere l\'intero disco C:\\ al percorso di esclusione dell\'antivirus. Questo singolo comando disabilita di fatto l\'intera protezione endpoint, impedendo alla soluzione di sicurezza di scansionare qualsiasi file sul disco. È brutalmente efficace: invece di cercare di eludere l\'antivirus file per file, il gruppo lo acceca completamente con un singolo comando.' },
        { type: 'callout', variant: 'info', text: 'Storm-1175 aggiunge l\'intero disco C:\\ alle esclusioni dell\'antivirus tramite PowerShell codificato. Questo disabilita di fatto l\'intera protezione endpoint con un singolo comando. Le organizzazioni devono monitorare le modifiche alle esclusioni antivirus come indicatore ad alta priorità di compromissione attiva.' },

        { type: 'heading', level: 2, text: 'Doppia Estorsione: Esfiltrazione Prima, Cifratura Dopo' },
        { type: 'paragraph', text: 'Medusa opera un modello di doppia estorsione: prima dell\'attivazione del ransomware, tutti i dati sensibili vengono esfiltrati verso server controllati dall\'attaccante. Questo significa che anche se la vittima ha backup perfetti e può ripristinare i sistemi senza pagare il riscatto per la decifratura, deve comunque affrontare la minaccia della pubblicazione dei dati rubati. Per le organizzazioni sanitarie — il settore più colpito — questo include dati dei pazienti, cartelle cliniche e informazioni mediche protette da normative come GDPR e HIPAA.' },
        { type: 'paragraph', text: 'L\'FBI e CISA hanno documentato che Medusa ha violato con successo oltre 300 organizzazioni nel settore delle infrastrutture critiche entro febbraio 2025, e la campagna è in accelerazione. I settori più colpiti nelle campagne recenti di Storm-1175 sono sanità, istruzione, servizi professionali e finanza, con un focus geografico su Australia, Regno Unito e Stati Uniti. Tuttavia, la natura globale degli attacchi — che sfruttano vulnerabilità in software utilizzato ovunque — significa che le organizzazioni europee sono ugualmente esposte.' },

        { type: 'heading', level: 2, text: 'Il Nesso Cinese: Crimine o Stato?' },
        { type: 'paragraph', text: 'Microsoft classifica Storm-1175 come "finanziariamente motivato" e basato in Cina. Ma il confine tra cybercrime e operazioni statali nel panorama cinese è notoriamente sfumato. Il fatto che un gruppo cinese sfrutti zero-day — capacità tipicamente associate a risorse statali — per operazioni ransomware solleva interrogativi sulla reale natura dell\'operazione. Alcuni analisti suggeriscono che gruppi come Storm-1175 operino con il tacito consenso dello Stato, che beneficia sia dei proventi finanziari sia dell\'intelligence raccolta durante le intrusioni.' },
        { type: 'paragraph', text: 'In alcuni incidenti, Storm-1175 ha concatenato exploit multipli (ad esempio OWASSRF) per attività post-compromissione, dimostrando un livello di sofisticazione tecnica che va oltre il tipico attore ransomware. La combinazione di zero-day exploitation, velocità operativa estrema e targeting di settori critici suggerisce un attore con risorse significative e possibile supporto istituzionale.' },

        { type: 'heading', level: 2, text: 'Vulnerabilità Sfruttate: L\'Arsenal di Storm-1175' },
        { type: 'paragraph', text: 'Nelle campagne recenti, Storm-1175 ha sfruttato oltre 16 vulnerabilità in 10 prodotti software:' },
        { type: 'list', ordered: false, items: [
          'CVE-2026-23760 — SmarterMail: bypass dell\'autenticazione (zero-day)',
          'CVE-2025-10035 — GoAnywhere MFT: accesso non autorizzato (zero-day)',
          'Microsoft Exchange — catena OWASSRF e vulnerabilità correlate',
          'PaperCut — sfruttamento di vulnerabilità critiche nel print management',
          'Ivanti Connect Secure — bypass dell\'autenticazione in VPN enterprise',
          'ConnectWise ScreenConnect — esecuzione remota di codice',
          'JetBrains TeamCity — compromissione della pipeline CI/CD',
          'SimpleHelp — sfruttamento di software di remote support',
          'CrushFTP — vulnerabilità nel file transfer server',
          'BeyondTrust — escalation di privilegi in soluzioni PAM',
        ]},

        { type: 'heading', level: 2, text: 'Strumenti e TTPs Osservati' },
        { type: 'list', ordered: false, items: [
          'LOLBins: PowerShell e PsExec per movimento laterale ed esecuzione comandi',
          'Impacket: toolkit per interazione con protocolli Windows (SMB, WMI, DCE/RPC)',
          'PDQ Deployer: abusato per deployment laterale di payload e ransomware',
          'Rclone: esfiltrazione dati verso cloud storage controllato dall\'attaccante',
          'Bandizip: compressione dei dati prima dell\'esfiltrazione',
          'Web shell: persistenza su server web compromessi',
          'Software RMM legittimo: persistenza e comando & controllo',
          'PowerShell codificato: aggiunta esclusioni antivirus per disabilitare la protezione',
        ]},

        { type: 'heading', level: 2, text: 'Raccomandazioni Operative' },
        { type: 'list', ordered: true, items: [
          'Patching prioritario dei prodotti target: aggiornare immediatamente SmarterMail, GoAnywhere MFT, Microsoft Exchange, PaperCut, Ivanti Connect Secure, ConnectWise, JetBrains TeamCity, SimpleHelp, CrushFTP e BeyondTrust. La velocità di sfruttamento di Storm-1175 rende il patching urgente — il gruppo colpisce entro ore dalla disclosure.',
          'Monitoraggio delle esclusioni antivirus: implementare alert automatici per qualsiasi modifica alle esclusioni di Microsoft Defender o altri AV/EDR. L\'aggiunta dell\'intero disco C:\\ alle esclusioni è un indicatore critico di compromissione attiva.',
          'Blocco di Rclone e tool di esfiltrazione: Rclone non ha usi legittimi nella maggior parte degli ambienti enterprise. Bloccarne l\'esecuzione tramite AppLocker o policy EDR equivalenti.',
          'Monitoraggio di PDQ Deployer: se PDQ Deployer non è utilizzato legittimamente nell\'ambiente, bloccarne l\'esecuzione. Se è in uso, monitorare distribuzioni anomale fuori orario o verso sistemi inattesi.',
          'Hardening degli asset web-facing: ridurre al minimo la superficie di attacco esposta a Internet. Ogni applicazione web-facing deve essere dietro WAF, con accesso limitato e aggiornata costantemente.',
          'Segmentazione di rete: limitare il movimento laterale con segmentazione rigorosa. Il deployment di ransomware via PDQ Deployer attraverso l\'intera rete richiede connettività piatta — la segmentazione lo impedisce.',
          'Backup offline e testati: la doppia estorsione rende i backup necessari ma non sufficienti. Assicurarsi che i backup siano offline (air-gapped), cifrati e testati regolarmente per il ripristino.',
          'Incident Response Plan per ransomware sotto le 24 ore: data la velocità di Storm-1175, i piani di risposta agli incidenti devono prevedere contenimento e risposta in ore, non giorni. Simulare scenari dove il ransomware viene distribuito entro 24 ore dalla compromissione iniziale.',
        ]},

        { type: 'heading', level: 2, text: 'Conclusione: La Nuova Velocità del Ransomware' },
        { type: 'paragraph', text: 'Storm-1175 rappresenta l\'evoluzione più pericolosa del ransomware moderno: un attore con accesso a zero-day, velocità operativa estrema e capacità di passare dalla compromissione iniziale al deployment del ransomware in meno di 24 ore. La combinazione di sofisticazione tecnica (zero-day exploitation, concatenamento di exploit, evasione degli AV) e obiettivo finanziario (doppia estorsione Medusa) crea un avversario che non lascia tempo per reagire.' },
        { type: 'paragraph', text: 'Per le organizzazioni europee, il messaggio è chiaro: il patching non può più aspettare il prossimo ciclo di manutenzione programmata. Con Storm-1175 che sfrutta le vulnerabilità entro ore dalla disclosure — e in alcuni casi prima — la finestra tra "vulnerabilità pubblicata" e "rete compromessa" si è ridotta a zero. Chi non ha un processo di patching d\'emergenza operativo oggi, lo avrà dopo l\'incidente. Ma a quel punto, i dati saranno già stati esfiltrati e il ransomware già distribuito.' },
        { type: 'callout', variant: 'tip', text: 'Fonti primarie: Microsoft Security Blog (6 aprile 2026), The Hacker News (7 aprile 2026), BleepingComputer (aprile 2026), Security Affairs (aprile 2026), CSO Online (aprile 2026), CyberSecurity News (aprile 2026), TechNadu (aprile 2026). Report completo con IOC disponibile sul Microsoft Security Blog.' },
      ],
    },

    en: {
      title: 'Storm-1175: The Chinese Group Deploying Medusa Ransomware via Zero-Days in Under 24 Hours',
      excerpt: 'Microsoft reveals that Storm-1175, a financially motivated Chinese actor, is exploiting zero-days in SmarterMail and GoAnywhere MFT to deploy Medusa ransomware at unprecedented speed — in some cases from initial compromise to ransomware in under 24 hours. Over 300 organizations hit across healthcare, education, and finance.',
      body: [
        { type: 'paragraph', text: 'On April 6, 2026, Microsoft published a detailed analysis of Storm-1175, a financially motivated Chinese threat actor orchestrating "high-velocity" attacks using a combination of zero-day and N-day vulnerabilities to deploy Medusa ransomware. The most alarming data point: in select incidents, Storm-1175 moves from initial compromise to data exfiltration and ransomware deployment in under 24 hours. This operational tempo leaves victims virtually no response window.' },

        { type: 'heading', level: 2, text: 'Zero-Days Exploited Before Disclosure: SmarterMail and GoAnywhere' },
        { type: 'paragraph', text: 'Storm-1175 recently exploited two critical vulnerabilities as zero-days: CVE-2026-23760 in SmarterMail and CVE-2025-10035 in GoAnywhere Managed File Transfer. Both were exploited a full week before public disclosure. In recent campaigns, the group has exploited more than 16 vulnerabilities across 10 software products including Microsoft Exchange, PaperCut, Ivanti Connect Secure, ConnectWise ScreenConnect, JetBrains TeamCity, SimpleHelp, CrushFTP, and BeyondTrust.' },
        { type: 'callout', variant: 'warning', text: 'Storm-1175 exploited CVE-2026-23760 (SmarterMail) and CVE-2025-10035 (GoAnywhere MFT) as zero-days, one week before public disclosure. The group\'s arsenal spans 16+ vulnerabilities across 10 software products — any internet-facing application is a potential entry point.' },

        { type: 'heading', level: 2, text: 'Attack Anatomy: From Compromise to Ransomware in 24 Hours' },
        { type: 'paragraph', text: 'Microsoft reconstructed Storm-1175\'s attack chain in distinct phases. Initial exploitation targets web-facing assets with high operational tempo. From a compromised SmarterMail application, the actor modifies the firewall and enables Remote Desktop for lateral movement. For persistence, the group creates new user accounts, deploys web shells, and installs legitimate RMM software. For credential theft and lateral movement, Storm-1175 uses Impacket and PDQ Deployer. Data exfiltration uses Bandizip for compression and Rclone for transfer to attacker-controlled cloud storage.' },
        { type: 'paragraph', text: 'A particularly sophisticated evasion technique: Storm-1175 uses encoded PowerShell commands to add the entire C:\\ drive to the antivirus exclusion path. This single command effectively disables all endpoint protection, preventing the security solution from scanning any file on disk.' },
        { type: 'callout', variant: 'info', text: 'Storm-1175 adds the entire C:\\ drive to antivirus exclusions via encoded PowerShell. This effectively disables all endpoint protection with a single command. Organizations must monitor antivirus exclusion changes as a high-priority indicator of active compromise.' },

        { type: 'heading', level: 2, text: 'Double Extortion: Exfiltrate First, Encrypt Second' },
        { type: 'paragraph', text: 'Medusa operates a double-extortion model: before ransomware activation, all sensitive data is exfiltrated to attacker-controlled servers. The FBI and CISA documented that Medusa has successfully breached over 300 organizations in critical infrastructure by February 2025. The most impacted sectors in Storm-1175\'s recent campaigns are healthcare, education, professional services, and finance in Australia, the United Kingdom, and the United States — but the global nature of the vulnerabilities means European organizations are equally exposed.' },

        { type: 'heading', level: 2, text: 'The China Nexus: Crime or State?' },
        { type: 'paragraph', text: 'Microsoft classifies Storm-1175 as "financially motivated" and China-based. But the boundary between cybercrime and state operations in the Chinese landscape is notoriously blurred. The fact that a Chinese group exploits zero-days — capabilities typically associated with state resources — for ransomware operations raises questions about the operation\'s true nature. The combination of zero-day exploitation, extreme operational speed, and critical sector targeting suggests an actor with significant resources and possible institutional support.' },

        { type: 'heading', level: 2, text: 'Exploited Vulnerabilities: Storm-1175\'s Arsenal' },
        { type: 'list', ordered: false, items: [
          'CVE-2026-23760 — SmarterMail: authentication bypass (zero-day)',
          'CVE-2025-10035 — GoAnywhere MFT: unauthorized access (zero-day)',
          'Microsoft Exchange — OWASSRF chain and related vulnerabilities',
          'PaperCut — critical print management vulnerabilities',
          'Ivanti Connect Secure — enterprise VPN authentication bypass',
          'ConnectWise ScreenConnect — remote code execution',
          'JetBrains TeamCity — CI/CD pipeline compromise',
          'SimpleHelp — remote support software exploitation',
          'CrushFTP — file transfer server vulnerabilities',
          'BeyondTrust — PAM privilege escalation',
        ]},

        { type: 'heading', level: 2, text: 'Observed Tools and TTPs' },
        { type: 'list', ordered: false, items: [
          'LOLBins: PowerShell and PsExec for lateral movement and command execution',
          'Impacket: toolkit for Windows protocol interaction (SMB, WMI, DCE/RPC)',
          'PDQ Deployer: abused for lateral payload and ransomware deployment',
          'Rclone: data exfiltration to attacker-controlled cloud storage',
          'Bandizip: data compression before exfiltration',
          'Web shells: persistence on compromised web servers',
          'Legitimate RMM software: persistence and command & control',
          'Encoded PowerShell: antivirus exclusion addition to disable protection',
        ]},

        { type: 'heading', level: 2, text: 'Operational Recommendations' },
        { type: 'list', ordered: true, items: [
          'Priority patching of target products: immediately update SmarterMail, GoAnywhere MFT, Microsoft Exchange, PaperCut, Ivanti Connect Secure, ConnectWise, JetBrains TeamCity, SimpleHelp, CrushFTP, and BeyondTrust.',
          'Antivirus exclusion monitoring: implement automatic alerts for any modification to Microsoft Defender or other AV/EDR exclusions. Adding the entire C:\\ drive to exclusions is a critical indicator of active compromise.',
          'Block Rclone and exfiltration tools: Rclone has no legitimate use in most enterprise environments. Block its execution via AppLocker or equivalent EDR policies.',
          'PDQ Deployer monitoring: if not legitimately used, block its execution. If in use, monitor anomalous deployments outside business hours or to unexpected systems.',
          'Web-facing asset hardening: minimize internet-exposed attack surface. Every web-facing application must be behind a WAF with limited access and constant updates.',
          'Network segmentation: limit lateral movement with rigorous segmentation. Ransomware deployment via PDQ Deployer across the entire network requires flat connectivity — segmentation prevents this.',
          'Offline and tested backups: double extortion makes backups necessary but insufficient. Ensure backups are air-gapped, encrypted, and regularly tested for restoration.',
          'Sub-24-hour ransomware incident response plan: given Storm-1175\'s speed, incident response plans must enable containment in hours, not days.',
        ]},

        { type: 'heading', level: 2, text: 'Conclusion: The New Speed of Ransomware' },
        { type: 'paragraph', text: 'Storm-1175 represents the most dangerous evolution of modern ransomware: an actor with zero-day access, extreme operational speed, and the ability to move from initial compromise to ransomware deployment in under 24 hours. For European organizations, the message is clear: patching can no longer wait for the next scheduled maintenance window. The gap between "vulnerability published" and "network compromised" has shrunk to zero.' },
        { type: 'callout', variant: 'tip', text: 'Primary sources: Microsoft Security Blog (April 6, 2026), The Hacker News (April 7, 2026), BleepingComputer (April 2026), Security Affairs (April 2026), CSO Online (April 2026), CyberSecurity News (April 2026), TechNadu (April 2026). Full report with IOCs available on the Microsoft Security Blog.' },
      ],
    },

    de: {
      title: 'Storm-1175: Die chinesische Gruppe, die Medusa-Ransomware ueber Zero-Days in weniger als 24 Stunden verteilt',
      excerpt: 'Microsoft enthuellt, dass Storm-1175, ein finanziell motivierter chinesischer Akteur, Zero-Days in SmarterMail und GoAnywhere MFT ausnutzt, um Medusa-Ransomware mit beispielloser Geschwindigkeit zu verteilen — in einigen Faellen von der Erstkompromittierung bis zum Ransomware-Einsatz in unter 24 Stunden.',
      body: [
        { type: 'paragraph', text: 'Am 6. April 2026 veroeffentlichte Microsoft eine detaillierte Analyse von Storm-1175, einem finanziell motivierten chinesischen Bedrohungsakteur, der "Hochgeschwindigkeits"-Angriffe mit einer Kombination aus Zero-Day- und N-Day-Schwachstellen orchestriert, um Medusa-Ransomware zu verteilen. Der alarmierendste Befund: In ausgewaehlten Vorfaellen bewegt sich Storm-1175 von der Erstkompromittierung zur Datenexfiltration und Ransomware-Verteilung in weniger als 24 Stunden.' },

        { type: 'heading', level: 2, text: 'Vor der Offenlegung ausgenutzte Zero-Days: SmarterMail und GoAnywhere' },
        { type: 'paragraph', text: 'Storm-1175 hat kuerzlich zwei kritische Schwachstellen als Zero-Days ausgenutzt: CVE-2026-23760 in SmarterMail und CVE-2025-10035 in GoAnywhere Managed File Transfer. Beide wurden eine volle Woche vor der oeffentlichen Offenlegung ausgenutzt. In juengsten Kampagnen hat die Gruppe mehr als 16 Schwachstellen in 10 Softwareprodukten ausgenutzt, darunter Microsoft Exchange, PaperCut, Ivanti Connect Secure, ConnectWise ScreenConnect, JetBrains TeamCity, SimpleHelp, CrushFTP und BeyondTrust.' },
        { type: 'callout', variant: 'warning', text: 'Storm-1175 hat CVE-2026-23760 (SmarterMail) und CVE-2025-10035 (GoAnywhere MFT) als Zero-Days ausgenutzt, eine Woche vor der oeffentlichen Offenlegung. Das Arsenal der Gruppe umfasst 16+ Schwachstellen in 10 Softwareprodukten.' },

        { type: 'heading', level: 2, text: 'Angriffsanatomie: Von der Kompromittierung zur Ransomware in 24 Stunden' },
        { type: 'paragraph', text: 'Microsoft rekonstruierte die Angriffskette von Storm-1175: Erstausnutzung zielt auf web-facing Assets mit hohem operativen Tempo. Von einer kompromittierten SmarterMail-Anwendung aus aendert der Akteur die Firewall und aktiviert Remote Desktop fuer laterale Bewegung. Fuer Persistenz erstellt die Gruppe neue Benutzerkonten, verteilt Web-Shells und installiert legitime RMM-Software. Fuer Zugangsdatendiebstahl und laterale Bewegung verwendet Storm-1175 Impacket und PDQ Deployer. Die Datenexfiltration nutzt Bandizip zur Kompression und Rclone zum Transfer in vom Angreifer kontrollierten Cloud-Speicher.' },
        { type: 'paragraph', text: 'Eine besonders ausgefeilte Evasionsmethode: Storm-1175 verwendet kodierte PowerShell-Befehle, um das gesamte Laufwerk C:\\ zum Antivirus-Ausschlusspfad hinzuzufuegen. Dieser einzelne Befehl deaktiviert effektiv den gesamten Endpoint-Schutz.' },
        { type: 'callout', variant: 'info', text: 'Storm-1175 fuegt das gesamte Laufwerk C:\\ ueber kodierten PowerShell-Befehl zu den Antivirus-Ausnahmen hinzu. Organisationen muessen Aenderungen an Antivirus-Ausnahmen als hochprioritaeren Indikator fuer aktive Kompromittierung ueberwachen.' },

        { type: 'heading', level: 2, text: 'Doppelte Erpressung: Erst exfiltrieren, dann verschluesseln' },
        { type: 'paragraph', text: 'Medusa betreibt ein Doppelerpressungsmodell: Vor der Ransomware-Aktivierung werden alle sensiblen Daten auf vom Angreifer kontrollierte Server exfiltriert. FBI und CISA haben dokumentiert, dass Medusa bis Februar 2025 ueber 300 Organisationen im Bereich kritischer Infrastrukturen erfolgreich kompromittiert hat. Die am staerksten betroffenen Sektoren sind Gesundheitswesen, Bildung, professionelle Dienstleistungen und Finanzen in Australien, dem Vereinigten Koenigreich und den USA.' },

        { type: 'heading', level: 2, text: 'Der China-Nexus: Kriminalitaet oder Staat?' },
        { type: 'paragraph', text: 'Microsoft klassifiziert Storm-1175 als "finanziell motiviert" und in China ansaessig. Die Grenze zwischen Cyberkriminalitaet und staatlichen Operationen in der chinesischen Landschaft ist jedoch bekanntermaassen unscharf. Die Kombination aus Zero-Day-Exploitation, extremer Betriebsgeschwindigkeit und gezieltem Angriff auf kritische Sektoren deutet auf einen Akteur mit erheblichen Ressourcen und moeglicher institutioneller Unterstuetzung hin.' },

        { type: 'heading', level: 2, text: 'Ausgenutzte Schwachstellen: Das Arsenal von Storm-1175' },
        { type: 'list', ordered: false, items: [
          'CVE-2026-23760 — SmarterMail: Authentifizierungs-Bypass (Zero-Day)',
          'CVE-2025-10035 — GoAnywhere MFT: unbefugter Zugriff (Zero-Day)',
          'Microsoft Exchange — OWASSRF-Kette und verwandte Schwachstellen',
          'PaperCut — kritische Druckmanagement-Schwachstellen',
          'Ivanti Connect Secure — Enterprise-VPN-Authentifizierungs-Bypass',
          'ConnectWise ScreenConnect — Remote Code Execution',
          'JetBrains TeamCity — CI/CD-Pipeline-Kompromittierung',
          'SimpleHelp, CrushFTP, BeyondTrust — diverse kritische Schwachstellen',
        ]},

        { type: 'heading', level: 2, text: 'Beobachtete Tools und TTPs' },
        { type: 'list', ordered: false, items: [
          'LOLBins: PowerShell und PsExec fuer laterale Bewegung und Befehlsausfuehrung',
          'Impacket: Toolkit fuer Windows-Protokoll-Interaktion (SMB, WMI, DCE/RPC)',
          'PDQ Deployer: missbraucht fuer laterale Payload- und Ransomware-Verteilung',
          'Rclone: Datenexfiltration zu vom Angreifer kontrolliertem Cloud-Speicher',
          'Bandizip: Datenkompression vor der Exfiltration',
          'Web-Shells: Persistenz auf kompromittierten Webservern',
          'Legitime RMM-Software: Persistenz und Command & Control',
          'Kodierter PowerShell: Antivirus-Ausnahmen zur Deaktivierung des Schutzes',
        ]},

        { type: 'heading', level: 2, text: 'Operative Empfehlungen' },
        { type: 'list', ordered: true, items: [
          'Prioritaeres Patching der Zielprodukte: SmarterMail, GoAnywhere MFT, Microsoft Exchange, PaperCut, Ivanti Connect Secure, ConnectWise, JetBrains TeamCity, SimpleHelp, CrushFTP und BeyondTrust sofort aktualisieren.',
          'Ueberwachung der Antivirus-Ausnahmen: automatische Warnungen fuer jede Aenderung an Microsoft Defender oder anderen AV/EDR-Ausnahmen implementieren.',
          'Rclone und Exfiltrationstools blockieren: Rclone hat in den meisten Enterprise-Umgebungen keine legitime Verwendung.',
          'PDQ Deployer ueberwachen: wenn nicht legitim verwendet, Ausfuehrung blockieren.',
          'Haertung web-exponierter Assets: Angriffsflaeche minimieren, WAF einsetzen.',
          'Netzwerksegmentierung: laterale Bewegung durch rigorose Segmentierung einschraenken.',
          'Offline-Backups: air-gapped, verschluesselt und regelmaessig getestet.',
          'Incident-Response-Plan unter 24 Stunden: Eindaemmung in Stunden, nicht Tagen ermoeglichen.',
        ]},

        { type: 'heading', level: 2, text: 'Fazit: Die neue Geschwindigkeit der Ransomware' },
        { type: 'paragraph', text: 'Storm-1175 repraesentiert die gefaehrlichste Evolution moderner Ransomware: ein Akteur mit Zero-Day-Zugang, extremer Betriebsgeschwindigkeit und der Faehigkeit, von der Erstkompromittierung zur Ransomware-Verteilung in unter 24 Stunden ueberzugehen. Fuer europaeische Organisationen ist die Botschaft klar: Patching kann nicht mehr auf das naechste geplante Wartungsfenster warten. Die Luecke zwischen "Schwachstelle veroeffentlicht" und "Netzwerk kompromittiert" ist auf Null geschrumpft.' },
        { type: 'callout', variant: 'tip', text: 'Primaerquellen: Microsoft Security Blog (6. April 2026), The Hacker News (7. April 2026), BleepingComputer (April 2026), Security Affairs (April 2026), CSO Online (April 2026), CyberSecurity News (April 2026), TechNadu (April 2026). Vollstaendiger Bericht mit IOCs auf dem Microsoft Security Blog verfuegbar.' },
      ],
    },
  },
}

export default article
