'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'

interface ContactFormProps {
  defaultProduct?: string
  className?: string
}

const inputClasses =
  'w-full bg-navy-card border border-navy-line rounded px-4 py-3 text-ink-100 font-sans text-sm placeholder:text-ink-400 outline-none transition-colors duration-200 focus:border-ink-200 focus:ring-1 focus:ring-ink-200'

const labelClasses = 'block text-sm font-sans text-ink-300 mb-1.5'

export default function ContactForm({
  defaultProduct = 'Privacy Phone',
  className = '',
}: ContactFormProps) {
  const t = useTranslations()
  const form = t.contact.form

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    ruolo: '',
    // PHP-required fields — sent as hidden defaults
    prodotto: defaultProduct || 'Privacy Phone',
    settore: 'Altro',
    // 'messaggio' is what PHP reads; visible as 'motivo' to the user
    messaggio: '',
    tipoRichiesta: '',
    // consenso is UI-only, not sent to backend
  })
  const [consenso, setConsenso] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const combinedMessage = formData.tipoRichiesta
        ? `[${formData.tipoRichiesta}]\n\n${formData.messaggio || ''}`
        : formData.messaggio
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, messaggio: combinedMessage }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || form.error.generic)
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : form.error.generic)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded bg-navy-card border border-navy-line px-6 py-8 text-center"
          >
            <p className="text-ink-100 font-display text-xl uppercase tracking-wide mb-2">
              {form.success.title}
            </p>
            <p className="text-ink-300 font-sans text-sm">
              {form.success.body}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="cf-nome" className={labelClasses}>
                {form.labels.nome}
              </label>
              <input
                id="cf-nome"
                name="nome"
                type="text"
                required
                aria-label={form.labels.nome}
                value={formData.nome}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.placeholders.nome}
              />
            </div>

            <div>
              <label htmlFor="cf-email" className={labelClasses}>
                {form.labels.email}
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                aria-label={form.labels.email}
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.placeholders.email}
              />
            </div>

            <div>
              <label htmlFor="cf-ruolo" className={labelClasses}>
                {form.labels.ruolo}
              </label>
              <input
                id="cf-ruolo"
                name="ruolo"
                type="text"
                aria-label={form.labels.ruolo}
                value={formData.ruolo}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.placeholders.ruolo}
              />
            </div>

            <div>
              <label htmlFor="cf-tipo-richiesta" className={labelClasses}>
                {form.labels.tipoRichiesta}
              </label>
              <select
                id="cf-tipo-richiesta"
                name="tipoRichiesta"
                className={inputClasses}
                value={formData.tipoRichiesta}
                onChange={handleChange}
              >
                <option value="">— Seleziona —</option>
                {form.motivoOptions.map((opt: string) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-messaggio" className={labelClasses}>
                {form.labels.motivo}
              </label>
              <textarea
                id="cf-messaggio"
                name="messaggio"
                rows={5}
                aria-label={form.labels.motivo}
                value={formData.messaggio}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
                placeholder={form.placeholders.motivo}
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="cf-consenso"
                type="checkbox"
                required
                checked={consenso}
                onChange={(e) => setConsenso(e.target.checked)}
                className="accent-steel-hi mt-1"
              />
              <label htmlFor="cf-consenso" className="text-xs text-slate-400 font-body">
                {form.consenso}
              </label>
            </div>

            {error && (
              <div className="bg-navy-card border-l-4 border-semantic-error pl-4 px-4 py-3 text-ink-200 font-sans text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={sending || !consenso}
              className="w-full bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 hover:border-ink-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? '...' : form.submit}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
