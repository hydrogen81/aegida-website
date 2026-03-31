import type { ArticleMeta } from '../../types'

const article: ArticleMeta = {
  slug: '2026-03-supply-chain-attacks',
  date: '2026-03-10',
  author: 'AEGIDA Research Team',
  category: 'threat-intelligence',
  locales: {
    it: {
      title: 'Attacchi alla supply chain: il vettore preferito dai gruppi APT nel 2025-2026',
      excerpt: 'Da SolarWinds a XZ Utils: perche gli attacchi alla supply chain sono diventati la minaccia numero uno per le infrastrutture critiche e come difendersi.',
      body: [
        { type: 'paragraph', text: 'Gli attacchi alla supply chain rappresentano oggi il vettore di compromissione piu efficace e piu difficile da rilevare. Invece di attaccare direttamente l\'obiettivo, gli aggressori compromettono un fornitore, un componente software o un servizio di terze parti, ottenendo accesso indiretto — e spesso privilegiato — all\'infrastruttura del bersaglio reale.' },
        { type: 'heading', level: 2, text: 'I casi piu significativi' },
        { type: 'quote', text: 'L\'attacco a SolarWinds nel 2020 ha dimostrato che anche le organizzazioni piu protette al mondo sono vulnerabili quando la minaccia arriva da un fornitore fidato.', author: 'CISA Advisory' },
        { type: 'list', ordered: false, items: [
          'SolarWinds SUNBURST (2020): backdoor inserita in un aggiornamento software legittimo, ha compromesso 18.000 organizzazioni incluse agenzie federali USA.',
          'Kaseya VSA (2021): ransomware REvil distribuito attraverso un tool di gestione remota, colpendo oltre 1.500 aziende.',
          'XZ Utils (2024): backdoor sofisticata inserita in una libreria open source dopo anni di social engineering contro i maintainer.',
          'Compromissione 3CX (2023): supply chain a cascata — un attacco a un fornitore di trading ha poi compromesso il software di comunicazione 3CX.',
        ]},
        { type: 'heading', level: 2, text: 'Perche le infrastrutture critiche sono particolarmente vulnerabili' },
        { type: 'paragraph', text: 'Le infrastrutture critiche (energia, acqua, trasporti, sanita) dipendono da numerosi fornitori OEM per la manutenzione e il monitoraggio remoto dei sistemi. Questi fornitori hanno spesso accesso privilegiato alle reti operative tramite VPN permanenti, con credenziali condivise e audit trail insufficienti. Un singolo fornitore compromesso puo aprire la porta all\'intera rete OT.' },
        { type: 'callout', variant: 'tip', text: 'La NIS2 (Art. 21) impone esplicitamente la sicurezza della supply chain. Le organizzazioni devono implementare controlli zero-trust per gli accessi dei fornitori: autenticazione forte, autorizzazione granulare, sessioni temporizzate e logging completo.' },
        { type: 'heading', level: 2, text: 'L\'approccio zero-trust come difesa' },
        { type: 'paragraph', text: 'L\'unica difesa efficace contro gli attacchi alla supply chain e un modello zero-trust applicato sistematicamente a tutti gli accessi di terze parti. Ogni sessione deve essere autenticata, autorizzata, temporizzata, monitorata e registrata. Nessun fornitore dovrebbe avere accesso permanente o non tracciato alla rete operativa.' },
        { type: 'paragraph', text: 'AEGIDA Framework implementa questo modello con accessi zero-trust per fornitori OEM: ogni sessione e autenticata con certificati, limitata nel tempo, circoscritta ai soli asset autorizzati e completamente tracciata in un audit trail immutabile. In caso di compromissione del fornitore, l\'impatto e automaticamente contenuto.' },
      ],
    },
    en: {
      title: 'Supply chain attacks: the preferred vector for APT groups in 2025-2026',
      excerpt: 'From SolarWinds to XZ Utils: why supply chain attacks have become the number one threat to critical infrastructure and how to defend against them.',
      body: [
        { type: 'paragraph', text: 'Supply chain attacks represent today the most effective and hardest to detect compromise vector. Instead of directly attacking the target, adversaries compromise a supplier, software component, or third-party service, gaining indirect — and often privileged — access to the real target\'s infrastructure.' },
        { type: 'heading', level: 2, text: 'The most significant cases' },
        { type: 'quote', text: 'The SolarWinds attack in 2020 demonstrated that even the most protected organizations in the world are vulnerable when the threat comes from a trusted supplier.', author: 'CISA Advisory' },
        { type: 'list', ordered: false, items: [
          'SolarWinds SUNBURST (2020): backdoor inserted in a legitimate software update, compromising 18,000 organizations including US federal agencies.',
          'Kaseya VSA (2021): REvil ransomware distributed through a remote management tool, hitting over 1,500 companies.',
          'XZ Utils (2024): sophisticated backdoor inserted in an open source library after years of social engineering against maintainers.',
          '3CX Compromise (2023): cascading supply chain — an attack on a trading vendor then compromised 3CX communication software.',
        ]},
        { type: 'heading', level: 2, text: 'Why critical infrastructure is particularly vulnerable' },
        { type: 'paragraph', text: 'Critical infrastructure (energy, water, transport, healthcare) depends on numerous OEM vendors for remote maintenance and monitoring. These vendors often have privileged access to operational networks through permanent VPNs, with shared credentials and insufficient audit trails. A single compromised vendor can open the door to the entire OT network.' },
        { type: 'callout', variant: 'tip', text: 'NIS2 (Art. 21) explicitly mandates supply chain security. Organizations must implement zero-trust controls for vendor access: strong authentication, granular authorization, timed sessions, and complete logging.' },
        { type: 'heading', level: 2, text: 'The zero-trust approach as defense' },
        { type: 'paragraph', text: 'The only effective defense against supply chain attacks is a zero-trust model systematically applied to all third-party access. Every session must be authenticated, authorized, time-limited, monitored, and logged. No vendor should have permanent or untracked access to the operational network.' },
        { type: 'paragraph', text: 'AEGIDA Framework implements this model with zero-trust access for OEM vendors: every session is certificate-authenticated, time-limited, scoped to authorized assets only, and fully tracked in an immutable audit trail. In case of vendor compromise, the impact is automatically contained.' },
      ],
    },
    de: {
      title: 'Supply-Chain-Angriffe: der bevorzugte Vektor der APT-Gruppen 2025-2026',
      excerpt: 'Von SolarWinds bis XZ Utils: Warum Supply-Chain-Angriffe zur groessten Bedrohung fuer kritische Infrastrukturen geworden sind und wie man sich schuetzt.',
      body: [
        { type: 'paragraph', text: 'Supply-Chain-Angriffe stellen heute den effektivsten und am schwierigsten zu erkennenden Kompromittierungsvektor dar. Anstatt das Ziel direkt anzugreifen, kompromittieren die Angreifer einen Lieferanten, eine Softwarekomponente oder einen Drittanbieterdienst und erhalten so indirekten — und oft privilegierten — Zugang zur Infrastruktur des eigentlichen Ziels.' },
        { type: 'heading', level: 2, text: 'Die bedeutendsten Faelle' },
        { type: 'quote', text: 'Der SolarWinds-Angriff im Jahr 2020 hat gezeigt, dass selbst die best geschuetzten Organisationen der Welt verwundbar sind, wenn die Bedrohung von einem vertrauenswuerdigen Lieferanten kommt.', author: 'CISA Advisory' },
        { type: 'list', ordered: false, items: [
          'SolarWinds SUNBURST (2020): Backdoor in einem legitimen Software-Update, 18.000 Organisationen kompromittiert.',
          'Kaseya VSA (2021): REvil-Ransomware ueber ein Remote-Management-Tool verteilt, ueber 1.500 Unternehmen betroffen.',
          'XZ Utils (2024): Raffinierte Backdoor in einer Open-Source-Bibliothek nach jahrelangem Social Engineering.',
          '3CX-Kompromittierung (2023): Kaskadierende Supply Chain — ein Angriff auf einen Trading-Anbieter kompromittierte dann die 3CX-Kommunikationssoftware.',
        ]},
        { type: 'heading', level: 2, text: 'Warum kritische Infrastrukturen besonders gefaehrdet sind' },
        { type: 'paragraph', text: 'Kritische Infrastrukturen (Energie, Wasser, Verkehr, Gesundheit) sind auf zahlreiche OEM-Anbieter fuer Fernwartung und -ueberwachung angewiesen. Diese Anbieter haben oft privilegierten Zugang zu operativen Netzwerken ueber permanente VPNs, mit geteilten Zugangsdaten und unzureichenden Audit-Trails.' },
        { type: 'callout', variant: 'tip', text: 'NIS2 (Art. 21) schreibt ausdruecklich die Sicherheit der Lieferkette vor. Organisationen muessen Zero-Trust-Kontrollen fuer den Zugang von Lieferanten implementieren.' },
        { type: 'heading', level: 2, text: 'Der Zero-Trust-Ansatz als Verteidigung' },
        { type: 'paragraph', text: 'Die einzige wirksame Verteidigung gegen Supply-Chain-Angriffe ist ein systematisch auf alle Drittanbieterzugriffe angewandtes Zero-Trust-Modell. Jede Sitzung muss authentifiziert, autorisiert, zeitlich begrenzt, ueberwacht und protokolliert werden.' },
        { type: 'paragraph', text: 'AEGIDA Framework setzt dieses Modell mit Zero-Trust-Zugang fuer OEM-Anbieter um: Jede Sitzung ist zertifikatauthentifiziert, zeitlich begrenzt und vollstaendig in einem unveraenderlichen Audit-Trail nachverfolgt.' },
      ],
    },
  },
}

export default article
