export interface QuizOption {
  text: string
  points: number
  isContext?: boolean
}

export interface QuizQuestion {
  id: number
  area: string
  areaIndex: number
  question: string
  options: QuizOption[]
}

export const QUIZ_AREAS = [
  'Cifratura delle Comunicazioni',
  'Controllo Accessi e Supply Chain',
  'Resilienza e Continuità Operativa',
  'Governance e Protezione Dati',
]

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Area 1 — Cifratura delle Comunicazioni (Art. 21 NIS2)
  {
    id: 1,
    area: 'Cifratura delle Comunicazioni',
    areaIndex: 0,
    question: 'Le comunicazioni tra i vostri siti operativi e il centro di controllo sono cifrate end-to-end?',
    options: [
      { text: 'Sì, con cifratura E2E su tutti i link', points: 3 },
      { text: 'Sì, ma solo su alcuni link critici', points: 2 },
      { text: 'Usiamo VPN ma non E2E', points: 1 },
      { text: 'Non cifrate o non so', points: 0 },
    ],
  },
  {
    id: 2,
    area: 'Cifratura delle Comunicazioni',
    areaIndex: 0,
    question: 'Gli algoritmi crittografici in uso sono resistenti ad attacchi con computer quantistici?',
    options: [
      { text: 'Sì, usiamo algoritmi post-quantum (ML-KEM, CRYSTALS-Kyber)', points: 3 },
      { text: 'Stiamo valutando la migrazione', points: 1 },
      { text: 'No, usiamo solo RSA/ECC', points: 0 },
      { text: 'Non so', points: 0 },
    ],
  },
  {
    id: 3,
    area: 'Cifratura delle Comunicazioni',
    areaIndex: 0,
    question: 'Esiste un meccanismo di forward secrecy che protegge le sessioni passate in caso di compromissione di una chiave?',
    options: [
      { text: 'Sì, con PFS su tutte le sessioni', points: 3 },
      { text: 'Solo su alcuni canali', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 4,
    area: 'Cifratura delle Comunicazioni',
    areaIndex: 0,
    question: 'Il traffico cifrato è distinguibile dal normale traffico HTTPS tramite Deep Packet Inspection?',
    options: [
      { text: 'No, è indistinguibile (traffic obfuscation attiva)', points: 3 },
      { text: 'Non abbiamo testato', points: 1 },
      { text: 'Sì, il pattern VPN è riconoscibile', points: 0 },
    ],
  },
  // Area 2 — Controllo Accessi e Supply Chain (Art. 21 NIS2)
  {
    id: 5,
    area: 'Controllo Accessi e Supply Chain',
    areaIndex: 1,
    question: 'Gli accessi remoti dei fornitori/manutentori alla rete operativa sono temporizzati e revocabili?',
    options: [
      { text: 'Sì, con accesso zero-trust temporizzato e tracciato', points: 3 },
      { text: 'Sì, ma con VPN permanente', points: 1 },
      { text: 'Accessi non specificamente controllati', points: 0 },
    ],
  },
  {
    id: 6,
    area: 'Controllo Accessi e Supply Chain',
    areaIndex: 1,
    question: 'Esiste un audit trail completo di tutti gli accessi remoti di terze parti?',
    options: [
      { text: 'Sì, con logging integrato nel SIEM', points: 3 },
      { text: 'Log parziali', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 7,
    area: 'Controllo Accessi e Supply Chain',
    areaIndex: 1,
    question: 'La compromissione di un fornitore può propagarsi alla rete operativa?',
    options: [
      { text: 'No, gli accessi sono segmentati e contenuti', points: 3 },
      { text: 'Parzialmente segmentati', points: 1 },
      { text: 'Sì, il fornitore ha accesso ampio', points: 0 },
    ],
  },
  // Area 3 — Resilienza e Continuità Operativa
  {
    id: 8,
    area: 'Resilienza e Continuità Operativa',
    areaIndex: 2,
    question: "L'architettura di rete prevede ridondanza per evitare single point of failure?",
    options: [
      { text: 'Sì, mesh ridondante con failover automatico', points: 3 },
      { text: 'Ridondanza parziale', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 9,
    area: 'Resilienza e Continuità Operativa',
    areaIndex: 2,
    question: 'In caso di blackout Internet su un sito remoto, le comunicazioni operative possono continuare?',
    options: [
      { text: 'Sì, con canali alternativi (radio, satellite, LAN)', points: 3 },
      { text: 'Solo su alcuni siti critici', points: 1 },
      { text: 'No, dipendiamo dalla connettività WAN', points: 0 },
    ],
  },
  {
    id: 10,
    area: 'Resilienza e Continuità Operativa',
    areaIndex: 2,
    question: 'Il tempo di failover tra link primario e backup è inferiore a 30 secondi?',
    options: [
      { text: 'Sì', points: 3 },
      { text: 'Non misurato', points: 1 },
      { text: 'No o non applicabile', points: 0 },
    ],
  },
  // Area 4 — Governance e Protezione Dati
  {
    id: 11,
    area: 'Governance e Protezione Dati',
    areaIndex: 3,
    question: 'Il management ha visibilità diretta sullo stato di sicurezza delle comunicazioni operative?',
    options: [
      { text: 'Sì, con dashboard e reporting regolare', points: 3 },
      { text: 'Report periodici ma non in tempo reale', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 12,
    area: 'Governance e Protezione Dati',
    areaIndex: 3,
    question: 'Esiste un piano di risposta agli incidenti specifico per la compromissione dei canali di comunicazione?',
    options: [
      { text: 'Sì, documentato e testato', points: 3 },
      { text: 'Documentato ma non testato', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 13,
    area: 'Governance e Protezione Dati',
    areaIndex: 3,
    question: 'I dati a riposo sui dispositivi mobili aziendali sono cifrati con algoritmi forti (AES-256 o equivalente)?',
    options: [
      { text: 'Sì, con cifratura hardware-backed', points: 3 },
      { text: 'Cifratura software', points: 1 },
      { text: 'No o non so', points: 0 },
    ],
  },
  {
    id: 14,
    area: 'Governance e Protezione Dati',
    areaIndex: 3,
    question: 'La vostra organizzazione ha effettuato una valutazione del rischio "store-now-decrypt-later"?',
    options: [
      { text: 'Sì, con piano di migrazione PQC', points: 3 },
      { text: 'Consapevoli ma senza piano', points: 1 },
      { text: 'No', points: 0 },
    ],
  },
  {
    id: 15,
    area: 'Classificazione Organizzazione',
    areaIndex: -1,
    question: "L'organizzazione è registrata come soggetto Essenziale o Importante ai sensi del D.Lgs. 138/2024?",
    options: [
      { text: 'Sì, Essenziale', points: 0, isContext: true },
      { text: 'Sì, Importante', points: 0, isContext: true },
      { text: 'Non ancora classificati', points: 0, isContext: true },
      { text: 'Non applicabile', points: 0, isContext: true },
    ],
  },
]

export const MAX_SCORE = 42

export interface AreaResult {
  name: string
  score: number
  maxScore: number
  percentage: number
  level: 'green' | 'yellow' | 'red'
  label: string
}

export interface QuizResult {
  totalScore: number
  maxScore: number
  percentage: number
  overallLevel: string
  overallDescription: string
  areas: AreaResult[]
  classification: string
}

export function calculateResults(answers: Record<number, number>): QuizResult {
  const areaScores: Record<number, { score: number; maxScore: number }> = {
    0: { score: 0, maxScore: 12 },
    1: { score: 0, maxScore: 9 },
    2: { score: 0, maxScore: 9 },
    3: { score: 0, maxScore: 12 },
  }

  let classification = 'Non specificato'

  QUIZ_QUESTIONS.forEach((q) => {
    const selectedOption = answers[q.id]
    if (selectedOption === undefined) return

    if (q.id === 15) {
      classification = q.options[selectedOption].text
      return
    }

    if (q.areaIndex >= 0) {
      areaScores[q.areaIndex].score += q.options[selectedOption].points
    }
  })

  const totalScore = Object.values(areaScores).reduce((sum, a) => sum + a.score, 0)

  const areas: AreaResult[] = QUIZ_AREAS.map((name, i) => {
    const { score, maxScore } = areaScores[i]
    const percentage = Math.round((score / maxScore) * 100)
    let level: 'green' | 'yellow' | 'red' = 'red'
    let label = 'Non conforme — rischio elevato'
    if (percentage > 75) {
      level = 'green'
      label = 'Conforme — buona postura'
    } else if (percentage >= 50) {
      level = 'yellow'
      label = 'Parzialmente conforme — gap da colmare'
    }
    return { name, score, maxScore, percentage, level, label }
  })

  let overallLevel = ''
  let overallDescription = ''
  if (totalScore >= 36) {
    overallLevel = 'Postura Avanzata'
    overallDescription = 'La vostra organizzazione dimostra un livello di sicurezza delle comunicazioni elevato.'
  } else if (totalScore >= 25) {
    overallLevel = 'Postura Intermedia'
    overallDescription = 'Esistono gap significativi che espongono l\'organizzazione a rischi concreti.'
  } else if (totalScore >= 14) {
    overallLevel = 'Postura Insufficiente'
    overallDescription = 'Le comunicazioni operative presentano vulnerabilità critiche.'
  } else {
    overallLevel = 'Postura Critica'
    overallDescription = 'L\'organizzazione è esposta a rischi gravi e immediati.'
  }

  return {
    totalScore,
    maxScore: MAX_SCORE,
    percentage: Math.round((totalScore / MAX_SCORE) * 100),
    overallLevel,
    overallDescription,
    areas,
    classification,
  }
}

export const AREA_RECOMMENDATIONS: Record<number, { text: string; product: string }> = {
  0: {
    text: 'Le comunicazioni della vostra organizzazione necessitano di cifratura post-quantum end-to-end e traffic obfuscation per resistere ad attacchi attuali e futuri.',
    product: 'AEGIDA Framework',
  },
  1: {
    text: 'Il controllo degli accessi remoti e della supply chain richiede un approccio zero-trust con accessi temporizzati, tracciati e audit trail completo.',
    product: 'AEGIDA Framework',
  },
  2: {
    text: 'La resilienza operativa richiede architetture mesh ridondanti con failover automatico e canali di comunicazione alternativi.',
    product: 'AEGIDA Framework + Privacy Phone',
  },
  3: {
    text: 'La governance della sicurezza delle comunicazioni richiede visibilità in tempo reale, piani di incident response testati e cifratura hardware-backed dei dati a riposo.',
    product: 'AEGIDA Privacy Phone + Framework',
  },
}
