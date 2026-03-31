export const SITE_CONFIG = {
  name: 'AEGIDA',
  company: 'H4R Human for Research Srl',
  url: 'https://www.aegida-systems.com',
  contactEndpoint: '/api/contact', // configurabile per integrazione futura
}

export const NAV_LINKS = [
  { label: 'Prodotti', href: '/#prodotti' },
  { label: 'Privacy Phone', href: '/privacy-phone' },
  { label: 'Framework', href: '/framework' },
  { label: 'Settori', href: '/#settori' },
  { label: 'Conformità', href: '/conformita' },
  { label: 'Contatti', href: '/#contatti' },
]

export const SECTORS = [
  {
    icon: 'bolt',
    title: 'Energia & Utilities',
    description: 'Protezione SCADA/ICS, comunicazioni tra centrali e centri di controllo, accessi manutentori OEM.',
    tags: ['Framework'],
  },
  {
    icon: 'heart',
    title: 'Sanità',
    description: 'Cifratura dati paziente in transito, protezione dispositivi medici connessi, conformità GDPR rafforzata.',
    tags: ['Phone', 'Framework'],
  },
  {
    icon: 'scale',
    title: 'Legal & Compliance',
    description: 'Comunicazioni avvocato-cliente cifrate, protezione fascicoli riservati, privilegio legale garantito.',
    tags: ['Phone'],
  },
  {
    icon: 'truck',
    title: 'Trasporti',
    description: 'Protezione comunicazioni operative ferroviarie, portuali e aeroportuali, resilienza mesh multi-link.',
    tags: ['Framework'],
  },
  {
    icon: 'newspaper',
    title: 'Giornalismo & ONG',
    description: 'Protezione fonti, comunicazioni in aree ostili, resistenza a sorveglianza statale e censura.',
    tags: ['Phone'],
  },
  {
    icon: 'building',
    title: 'PA & Intelligence',
    description: 'Comunicazioni classificate, infrastrutture critiche nazionali, sovranità tecnologica.',
    tags: ['Phone', 'Framework'],
  },
]

export const THREATS = [
  {
    name: 'Sorveglianza Metadati',
    vector: 'Analisi pattern di comunicazione, orari, frequenza, interlocutori — anche senza leggere il contenuto.',
    countermeasure: 'Aegida Connect: P2P via Tor, nessun server intermedio, nessun metadato centralizzato.',
  },
  {
    name: 'Deep Packet Inspection',
    vector: 'Ispezione del traffico di rete per identificare e bloccare VPN, Tor, protocolli non standard.',
    countermeasure: 'AEGIDA Framework Layer C: traffico indistinguibile da HTTPS standard su porta 443/TCP.',
  },
  {
    name: 'Store-Now-Decrypt-Later',
    vector: 'Intercettazione oggi, decrittazione domani con computer quantistici (entro 10-15 anni).',
    countermeasure: 'ML-KEM (FIPS 203): key exchange post-quantum, protezione immediata contro minacce future.',
  },
  {
    name: 'Compromissione Fornitore',
    vector: 'Accesso laterale tramite credenziali di fornitori/manutentori con VPN permanenti.',
    countermeasure: 'Zero-trust access control: accessi temporizzati, tracciati, revocabili per ogni sessione OEM.',
  },
  {
    name: 'Compromissione Fisica',
    vector: 'Estrazione dati da dispositivo sequestrato o rubato tramite tool forensi (Cellebrite, GrayKey).',
    countermeasure: 'Aegida OS: USB lockdown, cifratura AES-256 hardware-backed, wipe remoto.',
  },
  {
    name: 'Blackout / Censura',
    vector: 'Interruzione connettività Internet per impedire comunicazioni operative.',
    countermeasure: 'Aegida Connect: comunicazione via Wi-Fi locale, Bluetooth, supporti fisici. Mesh resiliente.',
  },
]

export const STATS = [
  { value: 'FIPS 203', label: 'Post-Quantum Standard' },
  { value: '350 Mbps', label: 'Throughput Reale' },
  { value: 'E2E', label: 'Cifratura End-to-End' },
  { value: '0 Server', label: 'Architettura P2P' },
]
