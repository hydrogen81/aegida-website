import type { ArticleMeta } from '../../types'

const article: ArticleMeta = {
  slug: '2026-04-09-geo-iran-plc-infrastrutture-critiche-usa',
  date: '2026-04-09',
  author: 'AEGIDA Research Team',
  category: 'deep-analysis',
  locales: {
    it: {
      title: 'Iran Dentro i PLC Americani: L\'IRGC Ha Già Causato Danni Reali a Impianti Idrici ed Energetici USA',
      excerpt: 'L\'advisory congiunto CISA AA26-097A del 7 aprile 2026, firmato da FBI, NSA, EPA, DOE e Cyber Command, conferma che hacker affiliati all\'Iran hanno compromesso controller logici programmabili Rockwell Automation in infrastrutture critiche americane — acqua, energia, servizi governativi. Non è più teoria: ci sono stati danni operativi reali e perdite finanziarie. Il NERC monitora attivamente la rete elettrica. Analisi dell\'operazione, delle TTPs e delle implicazioni per l\'Europa.',
      body: [
        { type: 'paragraph', text: 'Il 7 aprile 2026, sei agenzie federali statunitensi — FBI, CISA, NSA, EPA, Dipartimento dell\'Energia e Cyber Command — hanno pubblicato l\'advisory congiunto AA26-097A con un messaggio inequivocabile: hacker affiliati all\'Iran hanno compromesso controller logici programmabili (PLC) in infrastrutture critiche americane, causando danni operativi reali e perdite finanziarie. Non si tratta di un\'allerta preventiva su rischi teorici: le intrusioni sono avvenute, i sistemi sono stati manipolati, le operazioni sono state interrotte. Il NERC (North American Electric Reliability Corporation) ha confermato di stare monitorando attivamente la rete elettrica nazionale in coordinamento con il Dipartimento dell\'Energia e il Consiglio di Coordinamento del Sottosettore Elettrico.' },

        { type: 'heading', level: 2, text: 'CyberAv3ngers 2.0: Dall\'Attacco ai PLC Unitronics alla Compromissione dei Rockwell' },
        { type: 'paragraph', text: 'L\'advisory identifica l\'attore come affiliato all\'IRGC (Corpo delle Guardie della Rivoluzione Islamica) — Cyber Electronic Command (CEC). Le agenzie lo collegano esplicitamente ai CyberAv3ngers (alias Shahid Kaveh Group), lo stesso gruppo che nel novembre 2023 aveva compromesso almeno 75 dispositivi PLC Unitronics con credenziali predefinite in impianti idrici americani. Quella operazione era stata considerata relativamente primitiva: credenziali di default, PLC esposti su Internet, nessuna sofisticazione tecnica particolare.' },
        { type: 'paragraph', text: 'La campagna del 2026 segna un salto qualitativo drammatico. Gli attaccanti non usano più credenziali predefinite: utilizzano infrastruttura ospitata presso terze parti e software di configurazione industriale legittimo — specificamente Rockwell Automation Studio 5000 Logix Designer — per creare connessioni accettate verso i PLC delle vittime. In altre parole, gli iraniani parlano ai PLC americani nella loro stessa lingua, usando gli strumenti che gli ingegneri industriali usano ogni giorno. Questo rende l\'attacco estremamente difficile da distinguere dall\'attività legittima.' },
        { type: 'callout', variant: 'warning', text: 'L\'advisory CISA AA26-097A è firmato congiuntamente da FBI, CISA, NSA, EPA, DOE e U.S. Cyber Command — un livello di cooperazione inter-agenzia che riflette la gravità della minaccia. Gli attaccanti hanno causato "disruption operativa e perdite finanziarie" reali in più organizzazioni di infrastrutture critiche americane. Il NERC monitora attivamente la rete elettrica nazionale.' },

        { type: 'heading', level: 2, text: 'I Bersagli: Acqua, Energia, Servizi Governativi' },
        { type: 'paragraph', text: 'I PLC compromessi erano distribuiti in tre settori critici: sistemi idrici e di trattamento acque reflue (WWS), settore energetico e servizi governativi (inclusi municipi). I dispositivi target includono Rockwell Automation CompactLogix e Micro850, ampiamente utilizzati nell\'automazione industriale americana — dal trattamento delle acque alla generazione elettrica, dalla manifattura alla distribuzione di carburante.' },
        { type: 'paragraph', text: 'Ma il dettaglio più allarmante è un altro: il targeting di porte associate a protocolli di altri vendor OT suggerisce che gli attaccanti stanno prendendo di mira anche dispositivi prodotti da aziende diverse da Rockwell, inclusi i PLC Siemens S7. Questo espande enormemente la superficie di attacco: non è una campagna contro un singolo vendor, ma un\'offensiva sistematica contro l\'intero ecosistema dell\'automazione industriale americana.' },
        { type: 'list', ordered: false, items: [
          'Settore idrico (WWS): impianti di trattamento acque e acque reflue — controllo di processi chimici, pompe, valvole',
          'Settore energetico: generazione elettrica, distribuzione, sottostazioni — NERC monitora attivamente la rete',
          'Servizi governativi: municipi e amministrazioni locali — stessi target della campagna iraniana di password spraying',
          'Dispositivi: Rockwell CompactLogix, Micro850, potenzialmente Siemens S7',
          'Porte target: 44818 (EtherNet/IP), 2222 (Rockwell), 102 (Siemens S7), 22 (SSH), 502 (Modbus)',
        ]},

        { type: 'heading', level: 2, text: 'Anatomia Tecnica: Studio 5000, Dropbear e Manipolazione HMI' },
        { type: 'paragraph', text: 'La catena di attacco ricostruita dalle agenzie rivela un livello di competenza OT significativo. Nella fase di accesso iniziale, gli attaccanti hanno utilizzato indirizzi IP basati all\'estero per accedere a PLC Rockwell esposti su Internet. L\'infrastruttura era ospitata presso provider terzi, rendendo difficile l\'attribuzione diretta. Il software utilizzato per interagire con i PLC è Studio 5000 Logix Designer — lo strumento ufficiale di Rockwell Automation per la programmazione e configurazione dei PLC. Questo significa che gli attaccanti possedevano non solo il software (che richiede licenza), ma anche la competenza per utilizzarlo operativamente.' },
        { type: 'paragraph', text: 'Una volta stabilita la connessione, gli attaccanti hanno estratto i file di progetto dei PLC — che contengono la logica di controllo dei processi industriali — e hanno manipolato i dati visualizzati sugli HMI (Human Machine Interface) e sui display SCADA. Manipolare un HMI significa che gli operatori vedono dati falsi: livelli d\'acqua corretti quando sono critici, temperature normali quando sono fuori range, valvole aperte quando sono chiuse. In un impianto di trattamento acque, questo può significare acqua contaminata distribuita alla popolazione. In una centrale elettrica, può significare guasti a cascata.' },
        { type: 'paragraph', text: 'Per la persistenza, gli attaccanti hanno distribuito Dropbear — un\'implementazione leggera di SSH — sugli endpoint delle vittime per mantenere l\'accesso remoto attraverso la porta 22. Dropbear è una scelta tatticamente intelligente: è un software legittimo, leggero, progettato per sistemi embedded — esattamente il tipo di ambiente in cui operano i PLC. La sua presenza su un dispositivo OT può facilmente passare inosservata.' },
        { type: 'callout', variant: 'info', text: 'Le porte target osservate — 44818 (EtherNet/IP/CIP), 2222 (Rockwell Automation), 102 (Siemens S7comm), 22 (SSH/Dropbear), 502 (Modbus) — indicano che gli attaccanti non si limitano ai dispositivi Rockwell ma stanno sondando l\'intero spettro dei protocolli industriali. Qualsiasi organizzazione con PLC esposti su Internet su queste porte deve considerarsi a rischio immediato.' },

        { type: 'heading', level: 2, text: 'Dal Medio Oriente all\'Europa: Perché Questa Campagna Riguarda Anche Noi' },
        { type: 'paragraph', text: 'La campagna iraniana contro i PLC americani potrebbe sembrare distante dall\'Europa, ma tre fattori la rendono direttamente rilevante. Primo: gli stessi dispositivi Rockwell Automation e Siemens sono il cuore dell\'automazione industriale europea. Un impianto di trattamento acque a Milano usa gli stessi CompactLogix di uno a Pittsburgh. Le TTPs sviluppate contro l\'America funzionano identicamente in Europa.' },
        { type: 'paragraph', text: 'Secondo: il Waterfall Security Threat Report 2026 documenta che gli attacchi nation-state e hacktivisti contro infrastrutture critiche sono raddoppiati, con Germania, USA e Russia come principali geografie vittima. L\'Europa non è un obiettivo futuro — è già un bersaglio attivo. Terzo: la sincronizzazione tra operazioni cyber e cinetiche iraniane — già documentata nella campagna di password spraying contro i municipi israeliani — suggerisce che la compromissione dei PLC potrebbe essere un pre-posizionamento per operazioni future, non solo spionaggio.' },

        { type: 'heading', level: 2, text: 'Il Report Waterfall 2026: I Numeri della Minaccia OT' },
        { type: 'paragraph', text: 'Il Waterfall Security Threat Report 2026 fornisce il contesto quantitativo. Nel 2025 si sono verificati 57 incidenti cyber con conseguenze fisiche su infrastrutture critiche — in calo del 25% rispetto ai 76 del 2024, ma per ragioni temporanee legate al rallentamento del ransomware. Il dato preoccupante è un altro: gli attacchi nation-state e hacktivisti sono raddoppiati. Il ransomware rimane la principale causa di conseguenze fisiche, ma la composizione della minaccia sta cambiando: meno criminali, più Stati.' },
        { type: 'paragraph', text: 'Il report prevede che gli attacchi ransomware riprenderanno a crescere nel 2026-2027, mentre gli attacchi nation-state continueranno la loro traiettoria ascendente. La convergenza tra le due categorie — come dimostra Storm-1175 in Cina e CyberAv3ngers in Iran — rende il panorama particolarmente complesso: attori statali che usano tattiche ransomware, e gruppi criminali che servono obiettivi geopolitici.' },
        { type: 'list', ordered: false, items: [
          '57 incidenti cyber con conseguenze fisiche su infrastrutture critiche nel 2025',
          'Attacchi nation-state e hacktivisti raddoppiati rispetto al 2024',
          'Germania, USA e Russia: principali geografie vittima',
          'Il ransomware resta la prima causa di danni fisici, ma gli attacchi statali crescono più velocemente',
          'Previsione: ransomware in ripresa nel 2026-2027, attacchi nation-state in crescita continua',
        ]},

        { type: 'heading', level: 2, text: 'Indicatori di Compromissione e Porte Target' },
        { type: 'list', ordered: false, items: [
          'Porta 44818: EtherNet/IP — protocollo Rockwell Automation CIP (Common Industrial Protocol)',
          'Porta 2222: protocollo proprietario Rockwell Automation per configurazione PLC',
          'Porta 102: Siemens S7comm — comunicazione con PLC Siemens S7-300/400/1200/1500',
          'Porta 22: SSH — utilizzata per Dropbear, accesso remoto persistente',
          'Porta 502: Modbus TCP — protocollo industriale universale per SCADA/HMI',
          'Software: Rockwell Automation Studio 5000 Logix Designer (usato per connettersi ai PLC)',
          'Persistenza: Dropbear SSH server distribuito su endpoint vittima',
          'IOC STIX completi disponibili nell\'advisory CISA AA26-097A e nel file AA26-097A.stix.xml',
        ]},

        { type: 'heading', level: 2, text: 'Raccomandazioni Operative' },
        { type: 'list', ordered: true, items: [
          'Disconnettere i PLC da Internet: nessun PLC dovrebbe essere raggiungibile direttamente da Internet. Se l\'accesso remoto è necessario, deve passare attraverso VPN con MFA, jump box dedicati e monitoraggio continuo.',
          'Bloccare le porte OT sul perimetro: le porte 44818, 2222, 102 e 502 non devono mai essere accessibili dall\'esterno. Implementare regole firewall esplicite e verificarle con scansioni periodiche.',
          'Audit dei dispositivi Rockwell e Siemens: verificare tutti i PLC CompactLogix, Micro850 e Siemens S7 per connessioni non autorizzate, modifiche ai file di progetto e presenza di Dropbear o altri software SSH non previsti.',
          'Monitoraggio delle connessioni Studio 5000: ogni connessione Studio 5000 Logix Designer deve essere loggata e correlata con attività autorizzata. Connessioni da IP esterni o in orari anomali richiedono indagine immediata.',
          'Verifica integrità HMI/SCADA: confrontare i dati visualizzati sugli HMI con misurazioni indipendenti (sensori fisici, letture manuali) per identificare eventuali manipolazioni dei display.',
          'Segmentazione IT/OT rigorosa: la rete OT deve essere fisicamente o logicamente separata dalla rete IT. Il traffico tra le due zone deve passare attraverso una DMZ industriale con ispezione profonda dei pacchetti.',
          'Piano di fallback manuale: ogni processo industriale critico deve avere procedure operative manuali testate e personale addestrato a eseguirle. In caso di compromissione OT, la capacità di operare senza automazione è l\'ultima linea di difesa.',
          'Threat hunting con IOC CISA: utilizzare gli indicatori STIX dell\'advisory AA26-097A per cercare attivamente segni di compromissione pregressa nei log di rete e nei dispositivi OT.',
        ]},

        { type: 'heading', level: 2, text: 'Conclusione: La Guerra Ibrida È Arrivata alle Valvole e ai Trasformatori' },
        { type: 'paragraph', text: 'L\'advisory AA26-097A segna un punto di non ritorno nella guerra ibrida iraniana. Non parliamo più di spionaggio, DDoS o defacement — parliamo di attori statali che manipolano i controller fisici che governano il trattamento dell\'acqua potabile e la distribuzione dell\'energia elettrica. La progressione dai PLC Unitronics con credenziali di default (2023) ai Rockwell Automation con Studio 5000 (2026) mostra un attore in rapida maturazione tecnica, che sta acquisendo competenze OT specifiche e strumenti industriali professionali.' },
        { type: 'paragraph', text: 'Per l\'Europa, la lezione è immediata: se l\'Iran può compromettere i PLC delle infrastrutture critiche della nazione più avanzata tecnologicamente al mondo, può farlo ovunque. E non è solo l\'Iran: la Cina (Volt Typhoon) si pre-posiziona, la Russia (Sandworm) ha già colpito reti elettriche in Ucraina e Danimarca. La domanda per ogni operatore di infrastrutture critiche europeo non è se sarà preso di mira, ma quando — e se i suoi PLC sono pronti per quell\'eventualità.' },
        { type: 'callout', variant: 'tip', text: 'Fonti primarie: CISA Advisory AA26-097A (7 aprile 2026), CyberScoop (8 aprile 2026), Cybersecurity Dive (8 aprile 2026), The Register (7 aprile 2026), Defense One (aprile 2026), Utility Dive — NERC (aprile 2026), Security Affairs (aprile 2026), Picus Security (analisi simulazione AA26-097A), Waterfall Security Threat Report 2026. IOC STIX disponibili su cisa.gov (AA26-097A.stix.xml).' },
      ],
    },

    en: {
      title: 'Iran Inside American PLCs: The IRGC Has Already Caused Real Damage to US Water and Energy Facilities',
      excerpt: 'Joint advisory CISA AA26-097A of April 7, 2026, signed by FBI, NSA, EPA, DOE and Cyber Command, confirms that Iran-affiliated hackers have compromised Rockwell Automation PLCs in American critical infrastructure — water, energy, government services. This is no longer theoretical: there has been real operational disruption and financial loss.',
      body: [
        { type: 'paragraph', text: 'On April 7, 2026, six U.S. federal agencies — FBI, CISA, NSA, EPA, Department of Energy, and Cyber Command — published joint advisory AA26-097A with an unequivocal message: Iran-affiliated hackers have compromised programmable logic controllers (PLCs) in American critical infrastructure, causing real operational damage and financial losses. NERC confirmed it is actively monitoring the national electrical grid in coordination with DOE and the Electricity Subsector Coordinating Council.' },

        { type: 'heading', level: 2, text: 'CyberAv3ngers 2.0: From Unitronics Default Credentials to Rockwell Studio 5000' },
        { type: 'paragraph', text: 'The advisory identifies the actor as affiliated with the IRGC Cyber Electronic Command (CEC), linking it to CyberAv3ngers (aka Shahid Kaveh Group) — the same group that compromised at least 75 Unitronics PLC devices using default credentials in November 2023. The 2026 campaign marks a dramatic qualitative leap: attackers now use third-party hosted infrastructure and legitimate industrial configuration software — specifically Rockwell Automation Studio 5000 Logix Designer — to create accepted connections to victim PLCs. The Iranians speak to American PLCs in their own language.' },
        { type: 'callout', variant: 'warning', text: 'Advisory CISA AA26-097A is jointly signed by FBI, CISA, NSA, EPA, DOE, and U.S. Cyber Command. Attackers caused "operational disruption and financial loss" at multiple U.S. critical infrastructure organizations. NERC is actively monitoring the national grid.' },

        { type: 'heading', level: 2, text: 'Targets: Water, Energy, Government Services' },
        { type: 'paragraph', text: 'Compromised PLCs were deployed across water and wastewater systems (WWS), the energy sector, and government services including municipalities. Target devices include Rockwell Automation CompactLogix and Micro850. The targeting of ports associated with other OT vendor protocols suggests attackers are also targeting Siemens S7 PLCs, expanding the attack surface across the entire industrial automation ecosystem.' },
        { type: 'list', ordered: false, items: [
          'Water sector (WWS): treatment plants — chemical processes, pumps, valves',
          'Energy sector: power generation, distribution, substations',
          'Government services: municipalities and local administrations',
          'Devices: Rockwell CompactLogix, Micro850, potentially Siemens S7',
          'Target ports: 44818 (EtherNet/IP), 2222 (Rockwell), 102 (Siemens S7), 22 (SSH), 502 (Modbus)',
        ]},

        { type: 'heading', level: 2, text: 'Technical Anatomy: Studio 5000, Dropbear, and HMI Manipulation' },
        { type: 'paragraph', text: 'Attackers used overseas-based IPs and third-party infrastructure with Studio 5000 Logix Designer to connect to victim PLCs. They extracted project files containing industrial process control logic and manipulated data displayed on HMI and SCADA displays. Manipulating an HMI means operators see false data: correct water levels when they are critical, normal temperatures when out of range. For persistence, attackers deployed Dropbear — a lightweight SSH implementation designed for embedded systems — on victim endpoints via port 22.' },
        { type: 'callout', variant: 'info', text: 'Target ports — 44818 (EtherNet/IP/CIP), 2222 (Rockwell), 102 (Siemens S7comm), 22 (SSH/Dropbear), 502 (Modbus) — indicate attackers are probing the entire spectrum of industrial protocols. Any organization with internet-facing PLCs on these ports should consider itself at immediate risk.' },

        { type: 'heading', level: 2, text: 'From the Middle East to Europe: Why This Campaign Matters Here' },
        { type: 'paragraph', text: 'The same Rockwell and Siemens devices are the backbone of European industrial automation. TTPs developed against America work identically in Europe. The Waterfall Security Threat Report 2026 documents that nation-state and hacktivist attacks against critical infrastructure doubled, with Germany, the US, and Russia as the top victim geographies. Europe is not a future target — it is already an active one.' },

        { type: 'heading', level: 2, text: 'IOCs and Target Ports' },
        { type: 'list', ordered: false, items: [
          'Port 44818: EtherNet/IP — Rockwell CIP protocol',
          'Port 2222: Rockwell Automation proprietary PLC configuration',
          'Port 102: Siemens S7comm — S7-300/400/1200/1500 communication',
          'Port 22: SSH — Dropbear for persistent remote access',
          'Port 502: Modbus TCP — universal SCADA/HMI protocol',
          'Software: Rockwell Automation Studio 5000 Logix Designer',
          'Persistence: Dropbear SSH server deployed on victim endpoints',
          'Full STIX IOCs available in CISA advisory AA26-097A',
        ]},

        { type: 'heading', level: 2, text: 'Operational Recommendations' },
        { type: 'list', ordered: true, items: [
          'Disconnect PLCs from the internet: no PLC should be directly reachable. Remote access must go through VPN with MFA, dedicated jump boxes, and continuous monitoring.',
          'Block OT ports at the perimeter: ports 44818, 2222, 102, and 502 must never be externally accessible.',
          'Audit Rockwell and Siemens devices: check all CompactLogix, Micro850, and Siemens S7 PLCs for unauthorized connections, project file modifications, and presence of Dropbear.',
          'Monitor Studio 5000 connections: every connection must be logged and correlated with authorized activity.',
          'Verify HMI/SCADA integrity: compare displayed data with independent measurements to identify display manipulation.',
          'Rigorous IT/OT segmentation: OT network must be physically or logically separated with an industrial DMZ.',
          'Manual fallback plan: every critical process must have tested manual operating procedures.',
          'Threat hunting with CISA IOCs: use STIX indicators from AA26-097A to actively search for prior compromise.',
        ]},

        { type: 'heading', level: 2, text: 'Conclusion: Hybrid Warfare Has Reached the Valves and Transformers' },
        { type: 'paragraph', text: 'Advisory AA26-097A marks a point of no return in Iranian hybrid warfare. The progression from Unitronics PLCs with default credentials (2023) to Rockwell Automation with Studio 5000 (2026) shows a rapidly maturing actor acquiring specific OT competencies. For Europe, the lesson is immediate: if Iran can compromise PLCs in the most technologically advanced nation, it can do so anywhere.' },
        { type: 'callout', variant: 'tip', text: 'Primary sources: CISA Advisory AA26-097A (April 7, 2026), CyberScoop (April 8, 2026), Cybersecurity Dive (April 8, 2026), The Register (April 7, 2026), Defense One (April 2026), Utility Dive/NERC (April 2026), Security Affairs (April 2026), Picus Security (AA26-097A simulation analysis), Waterfall Security Threat Report 2026. STIX IOCs at cisa.gov.' },
      ],
    },

    de: {
      title: 'Iran in amerikanischen PLCs: Die IRGC hat bereits reale Schaeden an US-Wasser- und Energieanlagen verursacht',
      excerpt: 'Das gemeinsame Advisory CISA AA26-097A vom 7. April 2026, unterzeichnet von FBI, NSA, EPA, DOE und Cyber Command, bestaetigt: Iran-affiliierte Hacker haben Rockwell-Automation-PLCs in amerikanischer kritischer Infrastruktur kompromittiert — Wasser, Energie, Regierungsdienste. Es gab reale Betriebsstoerungen und finanzielle Verluste.',
      body: [
        { type: 'paragraph', text: 'Am 7. April 2026 veroeffentlichten sechs US-Bundesbehoerden — FBI, CISA, NSA, EPA, Energieministerium und Cyber Command — das gemeinsame Advisory AA26-097A mit einer eindeutigen Botschaft: Iran-affiliierte Hacker haben speicherprogrammierbare Steuerungen (PLCs) in amerikanischer kritischer Infrastruktur kompromittiert und dabei reale Betriebsstoerungen und finanzielle Verluste verursacht. NERC bestaetigte, dass das nationale Stromnetz aktiv ueberwacht wird.' },

        { type: 'heading', level: 2, text: 'CyberAv3ngers 2.0: Von Unitronics-Standardpasswoertern zu Rockwell Studio 5000' },
        { type: 'paragraph', text: 'Das Advisory identifiziert den Akteur als affiliiert mit dem IRGC Cyber Electronic Command (CEC) — CyberAv3ngers (alias Shahid Kaveh Group). Die Kampagne 2026 markiert einen dramatischen qualitativen Sprung: Die Angreifer verwenden nun Drittanbieter-Infrastruktur und legitime industrielle Konfigurationssoftware — speziell Rockwell Automation Studio 5000 Logix Designer — um akzeptierte Verbindungen zu den PLCs der Opfer herzustellen.' },
        { type: 'callout', variant: 'warning', text: 'Advisory CISA AA26-097A ist gemeinsam unterzeichnet von FBI, CISA, NSA, EPA, DOE und U.S. Cyber Command. Die Angreifer verursachten "Betriebsstoerungen und finanzielle Verluste" bei mehreren US-Organisationen kritischer Infrastruktur. NERC ueberwacht aktiv das nationale Stromnetz.' },

        { type: 'heading', level: 2, text: 'Ziele: Wasser, Energie, Regierungsdienste' },
        { type: 'paragraph', text: 'Kompromittierte PLCs waren in drei kritischen Sektoren verteilt: Wasser- und Abwassersysteme (WWS), Energiesektor und Regierungsdienste einschliesslich Kommunen. Zielgeraete umfassen Rockwell Automation CompactLogix und Micro850. Das Targeting von Ports anderer OT-Herstellerprotokolle deutet darauf hin, dass auch Siemens S7 PLCs angegriffen werden.' },
        { type: 'list', ordered: false, items: [
          'Wassersektor (WWS): Aufbereitungsanlagen — chemische Prozesse, Pumpen, Ventile',
          'Energiesektor: Stromerzeugung, Verteilung, Umspannwerke',
          'Regierungsdienste: Kommunen und lokale Verwaltungen',
          'Geraete: Rockwell CompactLogix, Micro850, potenziell Siemens S7',
          'Zielports: 44818 (EtherNet/IP), 2222 (Rockwell), 102 (Siemens S7), 22 (SSH), 502 (Modbus)',
        ]},

        { type: 'heading', level: 2, text: 'Technische Anatomie: Studio 5000, Dropbear und HMI-Manipulation' },
        { type: 'paragraph', text: 'Die Angreifer verwendeten im Ausland gehostete IPs und Drittanbieter-Infrastruktur mit Studio 5000 Logix Designer. Sie extrahierten Projektdateien mit industrieller Prozesssteuerungslogik und manipulierten Daten auf HMI- und SCADA-Displays. Fuer Persistenz verteilten die Angreifer Dropbear — eine leichtgewichtige SSH-Implementierung fuer eingebettete Systeme — auf Opfer-Endpoints ueber Port 22.' },
        { type: 'callout', variant: 'info', text: 'Zielports — 44818 (EtherNet/IP/CIP), 2222 (Rockwell), 102 (Siemens S7comm), 22 (SSH/Dropbear), 502 (Modbus) — zeigen, dass die Angreifer das gesamte Spektrum industrieller Protokolle sondieren. Jede Organisation mit internetexponierten PLCs auf diesen Ports muss sich als unmittelbar gefaehrdet betrachten.' },

        { type: 'heading', level: 2, text: 'Vom Nahen Osten nach Europa: Warum diese Kampagne auch uns betrifft' },
        { type: 'paragraph', text: 'Dieselben Rockwell- und Siemens-Geraete bilden das Rueckgrat der europaeischen Industrieautomatisierung. Der Waterfall Security Threat Report 2026 dokumentiert, dass Nation-State- und Hacktivisten-Angriffe auf kritische Infrastrukturen sich verdoppelt haben, mit Deutschland, den USA und Russland als wichtigsten Opfergeografien. Europa ist kein zukuenftiges Ziel — es ist bereits ein aktives.' },

        { type: 'heading', level: 2, text: 'IOCs und Zielports' },
        { type: 'list', ordered: false, items: [
          'Port 44818: EtherNet/IP — Rockwell CIP-Protokoll',
          'Port 2222: Rockwell Automation proprietaere PLC-Konfiguration',
          'Port 102: Siemens S7comm — S7-300/400/1200/1500-Kommunikation',
          'Port 22: SSH — Dropbear fuer persistenten Fernzugriff',
          'Port 502: Modbus TCP — universelles SCADA/HMI-Protokoll',
          'Software: Rockwell Automation Studio 5000 Logix Designer',
          'Vollstaendige STIX-IOCs im CISA Advisory AA26-097A verfuegbar',
        ]},

        { type: 'heading', level: 2, text: 'Operative Empfehlungen' },
        { type: 'list', ordered: true, items: [
          'PLCs vom Internet trennen: Kein PLC sollte direkt erreichbar sein. Fernzugriff nur ueber VPN mit MFA und dedizierten Jump Boxes.',
          'OT-Ports am Perimeter blockieren: Ports 44818, 2222, 102 und 502 duerfen niemals extern zugaenglich sein.',
          'Audit aller Rockwell- und Siemens-Geraete: Alle CompactLogix, Micro850 und Siemens S7 auf unautorisierte Verbindungen und Dropbear pruefen.',
          'Studio-5000-Verbindungen ueberwachen: Jede Verbindung muss protokolliert und mit autorisierter Aktivitaet korreliert werden.',
          'HMI/SCADA-Integritaet verifizieren: Angezeigte Daten mit unabhaengigen Messungen vergleichen.',
          'Rigorose IT/OT-Segmentierung: OT-Netzwerk muss physisch oder logisch getrennt sein mit industrieller DMZ.',
          'Manueller Rueckfallplan: Jeder kritische Prozess muss getestete manuelle Betriebsverfahren haben.',
          'Threat Hunting mit CISA-IOCs: STIX-Indikatoren aus AA26-097A verwenden.',
        ]},

        { type: 'heading', level: 2, text: 'Fazit: Hybride Kriegsfuehrung hat die Ventile und Transformatoren erreicht' },
        { type: 'paragraph', text: 'Advisory AA26-097A markiert einen Wendepunkt in der iranischen hybriden Kriegsfuehrung. Die Progression von Unitronics-PLCs mit Standardpasswoertern (2023) zu Rockwell Automation mit Studio 5000 (2026) zeigt einen sich rasch weiterentwickelnden Akteur. Fuer Europa ist die Lektion unmittelbar: Wenn der Iran PLCs in der technologisch fortschrittlichsten Nation kompromittieren kann, kann er es ueberall.' },
        { type: 'callout', variant: 'tip', text: 'Primaerquellen: CISA Advisory AA26-097A (7. April 2026), CyberScoop (8. April 2026), Cybersecurity Dive (8. April 2026), The Register (7. April 2026), Defense One (April 2026), Utility Dive/NERC (April 2026), Waterfall Security Threat Report 2026. STIX-IOCs auf cisa.gov.' },
      ],
    },
  },
}

export default article
