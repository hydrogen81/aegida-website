import type { ArticleMeta } from '../../types'

const article: ArticleMeta = {
  slug: '2026-04-07-geo-iran-password-spraying-missili',
  date: '2026-04-07',
  author: 'AEGIDA Research Team',
  category: 'deep-analysis',
  locales: {
    it: {
      title: 'Iran: Missili sulle Citt\u00e0, Password Spraying sui Municipi — Come Teheran Sincronizza Guerra Cinetica e Cyber',
      excerpt: 'Check Point rivela una campagna iraniana in tre ondate che ha colpito oltre 300 organizzazioni israeliane e 25 negli Emirati Arabi. Il dato pi\u00f9 inquietante: le citt\u00e0 colpite dal password spraying corrispondono a quelle bersaglio dei missili iraniani. L\u2019Iran non separa pi\u00f9 la guerra cinetica da quella cyber \u2014 le sincronizza. Analisi della campagna, delle TTPs e delle implicazioni per l\u2019Europa.',
      body: [
        { type: 'paragraph', text: 'Il 31 marzo 2026, Check Point Research ha pubblicato un\u2019analisi che ridefinisce il concetto di guerra ibrida. Una campagna di password spraying condotta da un attore iraniano ha colpito oltre 300 organizzazioni israeliane e pi\u00f9 di 25 negli Emirati Arabi Uniti in tre ondate distinte \u2014 il 3, il 13 e il 23 marzo 2026. Ma il dato che trasforma questa operazione da un attacco cyber \u201cnormale\u201d a un caso di studio di guerra integrata \u00e8 un altro: Check Point ha identificato una correlazione tra le citt\u00e0 bersaglio del password spraying e quelle colpite dai missili iraniani nello stesso periodo. I municipi \u2014 gli enti responsabili della risposta d\u2019emergenza ai danni fisici dei bombardamenti \u2014 erano il target primario dell\u2019operazione cyber. L\u2019Iran non ha condotto due operazioni separate: ha sincronizzato la guerra cinetica con quella digitale per massimizzare il danno.' },

        { type: 'heading', level: 2, text: 'Tre Ondate, Un Obiettivo: Accecare la Risposta d\u2019Emergenza' },
        { type: 'paragraph', text: 'La campagna si \u00e8 sviluppata in tre ondate con cadenza regolare di dieci giorni. Il 3 marzo, la prima ondata ha colpito centinaia di organizzazioni israeliane con password spraying massivo contro ambienti Microsoft 365. Il 13 marzo, la seconda ondata ha esteso il targeting. Il 23 marzo, la terza ondata ha consolidato l\u2019operazione. In ogni fase, il bersaglio primario erano i municipi \u2014 le amministrazioni comunali che gestiscono servizi essenziali: protezione civile, vigili del fuoco, servizi sanitari locali, distribuzione idrica, gestione dei rifugi.' },
        { type: 'paragraph', text: 'La logica operativa \u00e8 devastante nella sua semplicit\u00e0: quando un missile colpisce una citt\u00e0, i primi a rispondere sono i servizi comunali. Se quei servizi sono paralizzati da un attacco cyber simultaneo \u2014 email bloccate, sistemi di coordinamento inaccessibili, database dei residenti compromessi \u2014 la capacit\u00e0 di risposta all\u2019emergenza crolla. Le vittime dei missili diventano anche vittime dell\u2019attacco cyber, perch\u00e9 i soccorsi non arrivano o arrivano in ritardo.' },
        { type: 'callout', variant: 'warning', text: 'Check Point ha identificato una correlazione diretta tra le citt\u00e0 bersaglio della campagna di password spraying e quelle colpite dai missili iraniani durante il mese di marzo 2026. Questo non \u00e8 un attacco opportunistico: \u00e8 un\u2019operazione militare integrata dove il dominio cyber \u00e8 sincronizzato con il dominio cinetico per amplificare l\u2019effetto distruttivo complessivo.' },

        { type: 'heading', level: 2, text: 'Anatomia Tecnica: Scan, Infiltrate, Exfiltrate' },
        { type: 'paragraph', text: 'Check Point ha ricostruito la catena di attacco in tre fasi distinte. Nella fase di Scan, gli attaccanti hanno condotto password spraying intensivo contro centinaia di organizzazioni, ruotando attraverso nodi di uscita Tor per evitare il blocco basato su IP. Lo User-Agent utilizzato \u00e8 "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)" \u2014 che simula Internet Explorer 10 su Windows 7, una firma deliberatamente datata che si confonde con il traffico legacy ancora presente in molte reti governative.' },
        { type: 'paragraph', text: 'Nella fase di Infiltrate, una volta individuate credenziali valide, gli attaccanti accedevano agli account Microsoft 365 non pi\u00f9 da Tor ma da provider VPN commerciali \u2014 Windscribe (range 185.191.204.x) e NordVPN (range 169.150.227.x) \u2014 con geolocalizzazione in Israele per bypassare le restrizioni geografiche degli ambienti M365. Il cambio da Tor a VPN commerciali israeliane \u00e8 tatticamente sofisticato: il login appare provenire da un IP israeliano legittimo, rendendo inefficaci i controlli di accesso basati sulla geolocalizzazione.' },
        { type: 'paragraph', text: 'Nella fase di Exfiltrate, le credenziali valide consentivano l\u2019accesso a email personali, documenti interni, piani di emergenza e dati sensibili. Per i municipi, questo significa potenziale accesso ai piani di evacuazione, alle liste dei rifugi, ai protocolli di risposta ai bombardamenti \u2014 esattamente le informazioni che un avversario militare vorrebbe avere durante un conflitto attivo.' },

        { type: 'heading', level: 2, text: 'L\u2019Attribuzione: Gray Sandstorm e l\u2019Ecosistema Iraniano' },
        { type: 'paragraph', text: 'Check Point ha attribuito la campagna a un attore iraniano con confidenza moderata, basandosi sull\u2019allineamento con gli interessi strategici iraniani, l\u2019uso di infrastruttura VPN commerciale ospitata su AS35758 (Rachamim Aviel Twito) \u2014 coerente con operazioni iran-nexus precedenti \u2014 e le similitudini con Gray Sandstorm nell\u2019uso di tool di red-teaming attraverso nodi di uscita Tor.' },
        { type: 'paragraph', text: 'La campagna non opera in isolamento. Il rapporto Unit 42 di Palo Alto Networks del 26 marzo 2026 documenta un\u2019escalation massiva dell\u2019attivit\u00e0 cyber iraniana dopo le operazioni militari di fine febbraio. Almeno 12 gruppi hacktivisti pro-Iran sono attivi: Handala Hack (collegato al MOIS, responsabile dell\u2019attacco wiper a Stryker), APT Iran, Cyber Islamic Resistance, Dark Storm Team, FAD Team, Evil Markhors, 313 Team e DieNet. I bersagli includono banche, telecomunicazioni, aeroporti, sistemi di carburante e reti sanitarie in tutta la regione.' },
        { type: 'list', ordered: false, items: [
          'Unit 42 ha identificato 7.381 URL di phishing su 1.881 hostname legati alla campagna iraniana',
          'Il malware StealC viene distribuito tramite archivi protetti da password',
          'APK malevoli distribuiscono strumenti di sorveglianza mobile',
          'Handala Hack ha emesso minacce di morte via email a influencer iraniano-americani e iraniano-canadesi',
          'La connettivit\u00e0 Internet iraniana \u00e8 scesa all\u20191-4% durante il conflitto, limitando ma non fermando le operazioni',
        ]},

        { type: 'heading', level: 2, text: 'Il Target Europeo: Non Solo Medio Oriente' },
        { type: 'paragraph', text: 'Check Point ha documentato attivit\u00e0 dello stesso attore contro un numero limitato di bersagli in Europa, Stati Uniti, Regno Unito e Arabia Saudita. Questo \u00e8 il dato che rende questa campagna rilevante ben oltre il Medio Oriente. L\u2019ecosistema cyber iraniano ha dimostrato ripetutamente la capacit\u00e0 di colpire obiettivi occidentali: l\u2019advisory congiunto CISA-FBI-NSA del 2024 (AA24-290A) documentava gi\u00e0 operazioni di brute force iraniane contro infrastrutture critiche statunitensi nei settori sanitario, governativo, IT, ingegneria e energia.' },
        { type: 'paragraph', text: 'L\u2019attacco Handala a Stryker Corporation \u2014 80.000 dispositivi cancellati, 50 TB di dati esfiltrati da un colosso medtech da 22,6 miliardi di dollari \u2014 dimostra che gli attori iraniani hanno sia la volont\u00e0 che la capacit\u00e0 di colpire supply chain occidentali critiche. L\u2019FBI ha sequestrato due siti di data leak di Handala, e CISA e Microsoft hanno rilasciato linee guida di hardening specifiche. Il pattern \u00e8 chiaro: ci\u00f2 che inizia come operazione regionale si espande rapidamente verso obiettivi globali.' },
        { type: 'callout', variant: 'info', text: 'L\u2019advisory CISA-FBI-DC3-NSA avverte esplicitamente: "Le organizzazioni di infrastrutture critiche statunitensi devono rimanere vigili per potenziali attivit\u00e0 cyber mirate da parte di attori cyber affiliati all\u2019Iran." La campagna di password spraying contro Israele e UAE \u00e8 il banco di prova operativo \u2014 le stesse TTPs vengono adattate per bersagli occidentali.' },

        { type: 'heading', level: 2, text: 'Il Paradigma della Guerra Ibrida Integrata' },
        { type: 'paragraph', text: 'La sincronizzazione tra missili e password spraying rappresenta un\u2019evoluzione qualitativa nella dottrina di guerra ibrida. Finora, le operazioni cyber e cinetiche erano considerate complementari ma separate: la Russia usava cyberattack prima dell\u2019invasione dell\u2019Ucraina (Viasat, febbraio 2022), ma come preparazione, non come operazione simultanea integrata. L\u2019Iran ha fatto un passo ulteriore: il cyber non prepara l\u2019attacco fisico \u2014 lo amplifica in tempo reale.' },
        { type: 'paragraph', text: 'Le implicazioni per la NATO e l\u2019Europa sono immediate. Se un avversario pu\u00f2 colpire contemporaneamente le infrastrutture fisiche e i sistemi digitali di risposta all\u2019emergenza di una citt\u00e0, la resilienza urbana \u2014 definita dall\u2019Articolo 3 del Trattato NATO come prerequisito per la difesa collettiva \u2014 \u00e8 compromessa. I piani di protezione civile europei, costruiti sull\u2019assunzione che i sistemi di comunicazione funzionino durante un\u2019emergenza, devono essere ricalibrati per uno scenario in cui quei sistemi sono il primo bersaglio.' },

        { type: 'heading', level: 2, text: 'IOC e Indicatori Tecnici' },
        { type: 'paragraph', text: 'Check Point ha rilasciato indicatori di compromissione specifici per questa campagna:' },
        { type: 'list', ordered: false, items: [
          'IP Windscribe VPN: 185.191.204.202, 185.191.204.203',
          'IP NordVPN: 169.150.227.3, 169.150.227.143, 169.150.227.146',
          'User-Agent: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
          'Target: ambienti Microsoft 365 / Entra ID',
          'Pattern: autenticazioni fallite multiple su account distinti dallo stesso IP in finestre temporali ristrette',
          'Infrastruttura VPN su AS35758 (Rachamim Aviel Twito)',
        ]},

        { type: 'heading', level: 2, text: 'Raccomandazioni Operative' },
        { type: 'list', ordered: true, items: [
          'Monitoraggio dei log di accesso M365: cercare autenticazioni fallite multiple su account diversi dallo stesso IP o range IP, specialmente da nodi Tor o VPN commerciali.',
          'Conditional Access con geo-fencing: implementare policy che blocchino accessi da IP Tor e richiedano MFA per accessi da VPN commerciali. Attenzione: gli attaccanti usano VPN con geolocalizzazione locale per bypassare il geo-fencing standard.',
          'MFA su tutti gli account: l\u2019autenticazione multi-fattore blocca il 99% degli attacchi di password spraying. Utilizzare token hardware o app authenticator, non SMS.',
          'Audit delle password deboli: eseguire un audit interno delle password pi\u00f9 comuni e forzare il cambio per qualsiasi account che utilizza password nella top-1000 delle pi\u00f9 usate.',
          'Threat hunting per IOC: verificare i log M365 per accessi dai range IP indicati da Check Point e per lo User-Agent Internet Explorer 10 \u2014 un browser obsoleto da anni che non dovrebbe apparire nel traffico legittimo.',
          'Piani di continuit\u00e0 operativa offline: la lezione della campagna iraniana \u00e8 che i sistemi di risposta all\u2019emergenza devono funzionare anche senza accesso al cloud. Backup dei piani di evacuazione, delle liste rifugi e dei protocolli di emergenza su supporti fisici offline.',
          'Cifratura delle comunicazioni critiche: in uno scenario di guerra ibrida dove l\u2019avversario colpisce simultaneamente il dominio fisico e digitale, le comunicazioni tra servizi di emergenza devono essere cifrate end-to-end su canali indipendenti dal cloud.',
        ]},

        { type: 'heading', level: 2, text: 'Conclusione: La Nuova Dottrina della Guerra Simultanea' },
        { type: 'paragraph', text: 'La campagna iraniana di marzo 2026 segna un prima e un dopo nella storia della guerra ibrida. Per la prima volta in modo documentato, uno Stato ha sincronizzato attacchi missilistici con operazioni di password spraying contro le stesse citt\u00e0 bersaglio, puntando specificamente ai sistemi municipali di risposta all\u2019emergenza. Non \u00e8 pi\u00f9 "cyber che prepara il cinetico" o "cinetico seguito dal cyber": \u00e8 guerra simultanea su entrambi i domini, dove l\u2019obiettivo \u00e8 massimizzare il danno complessivo impedendo la risposta.' },
        { type: 'paragraph', text: 'Per ogni citt\u00e0 europea, per ogni municipio, per ogni operatore di servizi essenziali, la domanda \u00e8: se domani i sistemi M365 della protezione civile fossero inaccessibili durante un\u2019emergenza reale, esiste un piano B? Se la risposta \u00e8 no, la lezione dell\u2019Iran \u00e8 che quel piano va costruito adesso \u2014 prima che qualcuno decida di testare la stessa dottrina in Europa.' },
        { type: 'callout', variant: 'tip', text: 'Fonti primarie: Check Point Research (blog ufficiale, 31 marzo 2026), Unit 42 / Palo Alto Networks (Threat Brief, aggiornato 26 marzo 2026), Cybersecurity Dive (1 aprile 2026), The Hacker News (6 aprile 2026), CISA-FBI-DC3-NSA (advisory AA24-290A), The Register (31 marzo 2026). IOC disponibili nel report Check Point Research.' },
      ],
    },

    en: {
      title: 'Iran: Missiles on Cities, Password Spraying on Municipalities \u2014 How Tehran Synchronizes Kinetic and Cyber Warfare',
      excerpt: 'Check Point reveals a three-wave Iranian campaign hitting 300+ Israeli organizations and 25+ in the UAE. The most disturbing finding: cities targeted by password spraying match those hit by Iranian missiles. Iran no longer separates kinetic from cyber warfare \u2014 it synchronizes them.',
      body: [
        { type: 'paragraph', text: 'On March 31, 2026, Check Point Research published an analysis that redefines the concept of hybrid warfare. A password-spraying campaign by an Iranian actor hit over 300 Israeli organizations and more than 25 in the UAE in three distinct waves \u2014 March 3, 13, and 23. But the data that transforms this from a "normal" cyber attack into an integrated warfare case study is different: Check Point identified a correlation between the cities targeted by password spraying and those hit by Iranian missiles during the same period. Municipalities \u2014 the entities responsible for emergency response to physical bombing damage \u2014 were the primary cyber target.' },

        { type: 'heading', level: 2, text: 'Three Waves, One Objective: Blinding Emergency Response' },
        { type: 'paragraph', text: 'The campaign unfolded in three waves at regular ten-day intervals. In each phase, the primary target was municipalities \u2014 the local administrations managing essential services: civil protection, fire departments, local healthcare, water distribution, and shelter management. The operational logic is devastating in its simplicity: when a missile hits a city, the first responders are municipal services. If those services are paralyzed by a simultaneous cyber attack, emergency response capability collapses.' },
        { type: 'callout', variant: 'warning', text: 'Check Point identified a direct correlation between cities targeted by the password-spraying campaign and those hit by Iranian missiles during March 2026. This is not opportunistic \u2014 it is an integrated military operation where the cyber domain is synchronized with the kinetic domain to amplify overall destructive effect.' },

        { type: 'heading', level: 2, text: 'Technical Anatomy: Scan, Infiltrate, Exfiltrate' },
        { type: 'paragraph', text: 'In the Scan phase, attackers conducted intensive password spraying against hundreds of organizations, rotating through Tor exit nodes. The User-Agent was "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)" \u2014 simulating Internet Explorer 10 on Windows 7, a deliberately dated signature blending with legacy traffic still present in government networks.' },
        { type: 'paragraph', text: 'In the Infiltrate phase, once valid credentials were found, attackers switched from Tor to commercial VPN providers \u2014 Windscribe (185.191.204.x) and NordVPN (169.150.227.x) \u2014 geolocated in Israel to bypass M365 geographic restrictions. The switch from Tor to Israeli-geolocated commercial VPNs is tactically sophisticated: logins appear from legitimate Israeli IPs, defeating geo-based access controls.' },
        { type: 'paragraph', text: 'In the Exfiltrate phase, valid credentials enabled access to personal emails, internal documents, emergency plans, and sensitive data. For municipalities, this means potential access to evacuation plans, shelter lists, and bombing response protocols \u2014 exactly the intelligence a military adversary would want during active conflict.' },

        { type: 'heading', level: 2, text: 'Attribution: Gray Sandstorm and the Iranian Ecosystem' },
        { type: 'paragraph', text: 'Check Point attributed the campaign to an Iranian actor with moderate confidence. The Unit 42 report (March 26, 2026) documents massive Iranian cyber escalation after late-February military operations, with at least 12 pro-Iran hacktivist groups active: Handala Hack (MOIS-linked), APT Iran, Cyber Islamic Resistance, Dark Storm Team, and others. Unit 42 identified 7,381 phishing URLs across 1,881 hostnames linked to the Iranian campaign.' },
        { type: 'callout', variant: 'info', text: 'The CISA-FBI-DC3-NSA advisory explicitly warns: "U.S. critical infrastructure organizations should remain vigilant for potential targeted cyber activity by Iranian-affiliated cyber actors." The password-spraying campaign against Israel and UAE is the operational proving ground \u2014 the same TTPs are being adapted for Western targets.' },

        { type: 'heading', level: 2, text: 'The European Target: Not Just the Middle East' },
        { type: 'paragraph', text: 'Check Point documented activity by the same actor against a limited number of targets in Europe, the United States, the United Kingdom, and Saudi Arabia. The Iranian cyber ecosystem has repeatedly demonstrated the capability to strike Western targets: the 2024 joint CISA advisory (AA24-290A) already documented Iranian brute-force operations against U.S. critical infrastructure in healthcare, government, IT, engineering, and energy sectors. The Handala attack on Stryker \u2014 80,000 devices wiped, 50 TB exfiltrated \u2014 confirms Iranian actors have both will and capability to hit critical Western supply chains.' },

        { type: 'heading', level: 2, text: 'The Integrated Hybrid Warfare Paradigm' },
        { type: 'paragraph', text: 'The synchronization between missiles and password spraying represents a qualitative evolution in hybrid warfare doctrine. Until now, cyber and kinetic operations were considered complementary but separate: Russia used cyberattacks before the Ukraine invasion (Viasat, February 2022) as preparation, not simultaneous integrated operations. Iran went further: cyber doesn\'t prepare the physical attack \u2014 it amplifies it in real time.' },
        { type: 'paragraph', text: 'The implications for NATO and Europe are immediate. If an adversary can simultaneously strike a city\'s physical infrastructure and digital emergency response systems, urban resilience \u2014 defined by NATO Treaty Article 3 as a prerequisite for collective defense \u2014 is compromised. European civil protection plans, built on the assumption that communication systems function during emergencies, must be recalibrated for a scenario where those systems are the first target.' },

        { type: 'heading', level: 2, text: 'IOCs and Technical Indicators' },
        { type: 'list', ordered: false, items: [
          'Windscribe VPN IPs: 185.191.204.202, 185.191.204.203',
          'NordVPN IPs: 169.150.227.3, 169.150.227.143, 169.150.227.146',
          'User-Agent: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
          'Target: Microsoft 365 / Entra ID environments',
          'Pattern: multiple failed authentications across distinct accounts from same IP in narrow time windows',
          'VPN infrastructure on AS35758 (Rachamim Aviel Twito)',
        ]},

        { type: 'heading', level: 2, text: 'Operational Recommendations' },
        { type: 'list', ordered: true, items: [
          'M365 access log monitoring: look for multiple failed authentications across different accounts from the same IP, especially from Tor nodes or commercial VPNs.',
          'Conditional Access with geo-fencing: block Tor IP access and require MFA for commercial VPN access. Note: attackers use locally-geolocated VPNs to bypass standard geo-fencing.',
          'MFA on all accounts: multi-factor authentication blocks 99% of password-spraying attacks. Use hardware tokens or authenticator apps, not SMS.',
          'Weak password audit: scan for common passwords and force changes on any account using top-1000 most common passwords.',
          'IOC threat hunting: check M365 logs for access from Check Point-identified IP ranges and Internet Explorer 10 User-Agent.',
          'Offline continuity plans: emergency response systems must function without cloud access. Back up evacuation plans, shelter lists, and emergency protocols on offline physical media.',
          'Critical communications encryption: in a hybrid warfare scenario, emergency service communications must be end-to-end encrypted on cloud-independent channels.',
        ]},

        { type: 'heading', level: 2, text: 'Conclusion: The New Doctrine of Simultaneous Warfare' },
        { type: 'paragraph', text: 'The Iranian campaign of March 2026 marks a before and after in hybrid warfare history. For the first time in a documented manner, a state synchronized missile attacks with password-spraying operations against the same target cities, specifically targeting municipal emergency response systems. For every European city, every municipality, every essential service operator, the question is: if M365 civil protection systems were inaccessible during a real emergency tomorrow, does a Plan B exist?' },
        { type: 'callout', variant: 'tip', text: 'Primary sources: Check Point Research (official blog, March 31, 2026), Unit 42/Palo Alto Networks (Threat Brief, updated March 26, 2026), Cybersecurity Dive (April 1, 2026), The Hacker News (April 6, 2026), CISA-FBI-DC3-NSA (advisory AA24-290A), The Register (March 31, 2026). IOCs available in the Check Point Research report.' },
      ],
    },

    de: {
      title: 'Iran: Raketen auf Staedte, Password Spraying auf Kommunen \u2014 Wie Teheran kinetische und Cyber-Kriegsfuehrung synchronisiert',
      excerpt: 'Check Point enthuellt eine iranische Drei-Wellen-Kampagne gegen ueber 300 israelische Organisationen und 25+ in den VAE. Der beunruhigendste Befund: Die vom Password Spraying angegriffenen Staedte stimmen mit den von iranischen Raketen getroffenen ueberein.',
      body: [
        { type: 'paragraph', text: 'Am 31. Maerz 2026 veroeffentlichte Check Point Research eine Analyse, die das Konzept der hybriden Kriegsfuehrung neu definiert. Eine Password-Spraying-Kampagne eines iranischen Akteurs traf ueber 300 israelische Organisationen und mehr als 25 in den VAE in drei Wellen \u2014 am 3., 13. und 23. Maerz. Aber der Befund, der diese Operation vom "normalen" Cyberangriff zur Fallstudie integrierter Kriegsfuehrung macht, ist ein anderer: Check Point identifizierte eine Korrelation zwischen den vom Password Spraying angegriffenen Staedten und jenen, die im selben Zeitraum von iranischen Raketen getroffen wurden. Die Kommunen \u2014 die fuer die Notfallreaktion auf physische Bombenschaeden zustaendigen Einrichtungen \u2014 waren das primaere Cyber-Ziel.' },

        { type: 'heading', level: 2, text: 'Drei Wellen, ein Ziel: Notfallreaktion blenden' },
        { type: 'paragraph', text: 'Die Kampagne verlief in drei Wellen im regelmaessigen Zehn-Tage-Abstand. In jeder Phase waren die primaeren Ziele Kommunen \u2014 die lokalen Verwaltungen, die wesentliche Dienste verwalten: Zivilschutz, Feuerwehr, lokale Gesundheitsversorgung, Wasserversorgung und Schutzbunker-Verwaltung. Die operative Logik ist in ihrer Einfachheit verheerend: Wenn eine Rakete eine Stadt trifft, sind die Kommunaldienste die Ersthelfer. Wenn diese Dienste durch einen gleichzeitigen Cyberangriff gelaehmt sind, bricht die Notfallreaktion zusammen.' },
        { type: 'callout', variant: 'warning', text: 'Check Point identifizierte eine direkte Korrelation zwischen den vom Password Spraying angegriffenen Staedten und den von iranischen Raketen getroffenen im Maerz 2026. Dies ist keine opportunistische Attacke: Es ist eine integrierte Militaeroperation, bei der die Cyber-Domaene mit der kinetischen Domaene synchronisiert wird.' },

        { type: 'heading', level: 2, text: 'Technische Anatomie: Scan, Infiltrate, Exfiltrate' },
        { type: 'paragraph', text: 'In der Scan-Phase fuehrten die Angreifer intensives Password Spraying gegen Hunderte von Organisationen durch und rotierten durch Tor-Exit-Nodes. Der User-Agent war "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)" \u2014 eine bewusst veraltete Signatur, die sich mit Legacy-Verkehr in Regierungsnetzwerken vermischt.' },
        { type: 'paragraph', text: 'In der Infiltrate-Phase wechselten die Angreifer von Tor zu kommerziellen VPN-Anbietern \u2014 Windscribe (185.191.204.x) und NordVPN (169.150.227.x) \u2014 mit Geolokalisierung in Israel, um M365-Geobeschraenkungen zu umgehen. In der Exfiltrate-Phase ermoeglichten gueltige Zugangsdaten den Zugang zu E-Mails, internen Dokumenten, Notfallplaenen und sensiblen Daten.' },

        { type: 'heading', level: 2, text: 'Zuordnung: Gray Sandstorm und das iranische Oekosystem' },
        { type: 'paragraph', text: 'Check Point ordnete die Kampagne mit maessiger Zuversicht einem iranischen Akteur zu. Der Unit-42-Bericht (26. Maerz 2026) dokumentiert eine massive iranische Cyber-Eskalation mit mindestens 12 aktiven pro-iranischen Hacktivistengruppen. Unit 42 identifizierte 7.381 Phishing-URLs auf 1.881 Hostnamen.' },
        { type: 'callout', variant: 'info', text: 'Die CISA-FBI-DC3-NSA-Warnung lautet ausdruecklich: "US-Organisationen kritischer Infrastrukturen sollten wachsam bleiben gegenueber potenziellen gezielten Cyberaktivitaeten iranisch-affiliierter Akteure." Die Password-Spraying-Kampagne gegen Israel und VAE ist das operative Testfeld \u2014 dieselben TTPs werden fuer westliche Ziele angepasst.' },

        { type: 'heading', level: 2, text: 'Das europaeische Ziel: Nicht nur Naher Osten' },
        { type: 'paragraph', text: 'Check Point dokumentierte Aktivitaeten desselben Akteurs gegen eine begrenzte Anzahl von Zielen in Europa, den USA, dem Vereinigten Koenigreich und Saudi-Arabien. Der Handala-Angriff auf Stryker \u2014 80.000 Geraete geloescht, 50 TB exfiltriert \u2014 bestaetigt, dass iranische Akteure sowohl den Willen als auch die Faehigkeit haben, kritische westliche Lieferketten zu treffen.' },

        { type: 'heading', level: 2, text: 'Das Paradigma der integrierten hybriden Kriegsfuehrung' },
        { type: 'paragraph', text: 'Die Synchronisierung zwischen Raketen und Password Spraying stellt eine qualitative Entwicklung in der Doktrin der hybriden Kriegsfuehrung dar. Bisher galten Cyber- und kinetische Operationen als komplementaer, aber getrennt. Der Iran ging weiter: Cyber bereitet den physischen Angriff nicht vor \u2014 es verstaerkt ihn in Echtzeit. Die Auswirkungen fuer NATO und Europa sind unmittelbar.' },

        { type: 'heading', level: 2, text: 'IOCs und technische Indikatoren' },
        { type: 'list', ordered: false, items: [
          'Windscribe VPN IPs: 185.191.204.202, 185.191.204.203',
          'NordVPN IPs: 169.150.227.3, 169.150.227.143, 169.150.227.146',
          'User-Agent: Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
          'Ziel: Microsoft 365 / Entra ID Umgebungen',
          'Muster: mehrere fehlgeschlagene Authentifizierungen ueber verschiedene Konten vom selben IP',
          'VPN-Infrastruktur auf AS35758 (Rachamim Aviel Twito)',
        ]},

        { type: 'heading', level: 2, text: 'Operative Empfehlungen' },
        { type: 'list', ordered: true, items: [
          'M365-Zugriffslog-Ueberwachung: nach mehreren fehlgeschlagenen Authentifizierungen ueber verschiedene Konten vom selben IP suchen.',
          'Conditional Access mit Geo-Fencing: Tor-IP-Zugriff blockieren und MFA fuer kommerzielle VPN-Zugriffe verlangen.',
          'MFA auf allen Konten: Multi-Faktor-Authentifizierung blockiert 99% der Password-Spraying-Angriffe.',
          'Schwache-Passwoerter-Audit: nach gaengigen Passwoertern scannen und Aenderung erzwingen.',
          'IOC Threat Hunting: M365-Logs auf die von Check Point identifizierten IP-Bereiche und Internet Explorer 10 User-Agent pruefen.',
          'Offline-Kontinuitaetsplaene: Notfallreaktionssysteme muessen ohne Cloud-Zugang funktionieren.',
          'Verschluesselung kritischer Kommunikation: Notdienst-Kommunikation muss Ende-zu-Ende-verschluesselt auf Cloud-unabhaengigen Kanaelen erfolgen.',
        ]},

        { type: 'heading', level: 2, text: 'Fazit: Die neue Doktrin der simultanen Kriegsfuehrung' },
        { type: 'paragraph', text: 'Die iranische Kampagne vom Maerz 2026 markiert ein Vorher und Nachher in der Geschichte der hybriden Kriegsfuehrung. Erstmals synchronisierte ein Staat dokumentiert Raketenangriffe mit Password-Spraying-Operationen gegen dieselben Zielstaedte. Fuer jede europaeische Stadt lautet die Frage: Wenn morgen die M365-Systeme des Zivilschutzes waehrend eines echten Notfalls unzugaenglich waeren, gibt es einen Plan B?' },
        { type: 'callout', variant: 'tip', text: 'Primaerquellen: Check Point Research (offizieller Blog, 31. Maerz 2026), Unit 42/Palo Alto Networks (Threat Brief, 26. Maerz 2026), Cybersecurity Dive (1. April 2026), The Hacker News (6. April 2026), CISA-FBI-DC3-NSA (Advisory AA24-290A), The Register (31. Maerz 2026). IOCs im Check Point Research-Bericht verfuegbar.' },
      ],
    },
  },
}

export default article
