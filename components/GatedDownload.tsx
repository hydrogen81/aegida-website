'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GatedDownloadProps {
  documentSlug: 'privacy-phone-dossier' | 'framework-brochure' | 'white-paper-ufed'
  label: string
  variant?: 'primary' | 'secondary' | 'link'
  className?: string
}

// URL relativa: stesso origine del sito (evita CORS quando il sito
// è servito da www.aegida-systems.com e il fetch colpisce
// aegida-systems.com senza www → cross-origin e blocco sul preflight).
const API_ENDPOINT = '/api/download-gate.php'

const inputClasses =
  'w-full bg-navy-card border border-navy-line rounded px-4 py-3 text-ink-100 font-sans text-sm placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-ink-200 focus:ring-1 focus:ring-ink-200'

const labelClasses = 'block text-sm font-sans text-ink-300 mb-1.5'

export default function GatedDownload({
  documentSlug,
  label,
  variant = 'secondary',
  className = '',
}: GatedDownloadProps) {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    consent: false,
    website: '', // honeypot
  })

  const buttonClasses = {
    primary: 'bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 transition-colors',
    secondary: 'text-ink-100 text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-400 hover:border-ink-200 transition-colors',
    link: 'text-[14px] underline-offset-4 hover:underline',
  }[variant]

  function closeModal() {
    if (submitting) return
    setOpen(false)
    // Reset dopo piccolo delay per non vedere cambio di schermata durante il fade-out
    setTimeout(() => {
      setPdfUrl(null)
      setError(null)
      setForm({ name: '', email: '', role: '', consent: false, website: '' })
    }, 250)
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const resp = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          documentSlug,
        }),
      })

      const data = await resp.json()

      if (!resp.ok || !data.success || !data.pdfUrl) {
        throw new Error(data.error || 'Errore durante la richiesta.')
      }

      // Non apriamo la tab in automatico — su iOS Safari un window.open()
      // dopo await viene bloccato perché fuori dal call-stack del click.
      // Mostriamo un bottone che l'utente preme manualmente: click diretto
      // = gesto utente = browser consente apertura.
      setPdfUrl(data.pdfUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore di rete. Riprova.')
    } finally {
      setSubmitting(false)
    }
  }

  const isSuccess = pdfUrl !== null

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${buttonClasses} ${className}`}
      >
        {label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-ink/80 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="bg-navy-deep border border-navy-line rounded max-w-[440px] w-full p-7"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.18em] text-steel-hi mb-1">
                    {isSuccess ? 'DOCUMENTO PRONTO' : 'DOWNLOAD'}
                  </div>
                  <h2 className="text-[20px] font-display font-medium text-ink-100">{label}</h2>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-ink-400 hover:text-ink-100 text-[20px] leading-none"
                  aria-label="Chiudi"
                >
                  ×
                </button>
              </div>

              {isSuccess ? (
                <div className="space-y-5">
                  <p className="text-sm text-ink-200 leading-[1.55]">
                    Grazie, registrazione completata. Il documento è pronto.
                  </p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 transition-colors text-center"
                  >
                    Scarica il documento
                  </a>
                  <p className="text-xs text-ink-400 leading-[1.5]">
                    Se il download non parte automaticamente, il PDF si aprirà in una nuova scheda: da lì puoi salvarlo sul dispositivo.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-ink-300 leading-[1.55] mb-5">
                    Per ricevere il documento, registra nome ed email. Ti ricontatteremo solo in relazione alla tua richiesta.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="gd-name" className={labelClasses}>Nome e cognome</label>
                      <input
                        id="gd-name"
                        type="text"
                        required
                        maxLength={80}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="gd-email" className={labelClasses}>Email</label>
                      <input
                        id="gd-email"
                        type="email"
                        required
                        maxLength={120}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="gd-role" className={labelClasses}>Ruolo professionale</label>
                      <select
                        id="gd-role"
                        required
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className={inputClasses}
                      >
                        <option value="">— Seleziona —</option>
                        <option value="giornalista">Giornalista</option>
                        <option value="avvocato">Avvocato</option>
                        <option value="dirigente">Dirigente</option>
                        <option value="responsabile-it">Responsabile IT / Sicurezza</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    {/* Honeypot (nascosto visivamente) */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                      aria-hidden="true"
                    />

                    <label className="flex items-start gap-2 text-xs text-ink-300 leading-[1.5]">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="accent-steel-hi mt-0.5"
                      />
                      <span>
                        Acconsento al trattamento dei dati ai sensi della{' '}
                        <a href="/it/privacy-policy/" className="text-ink-100 border-b border-current pb-px" target="_blank" rel="noopener noreferrer">
                          Privacy Policy
                        </a>
                        {' '}per essere contattato in relazione a questa richiesta.
                      </span>
                    </label>

                    {error && (
                      <div className="bg-navy-card border-l-4 border-semantic-error pl-4 py-2 text-sm text-ink-200">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Invio in corso…' : 'Ricevi il documento'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
