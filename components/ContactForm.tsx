'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'

interface ContactFormProps {
  defaultProduct?: string
  className?: string
}

const inputClasses =
  'w-full bg-navy-900 border border-navy-700 rounded px-4 py-3 text-slate-200 font-body text-sm placeholder:text-slate-500 outline-none transition-colors duration-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500'

const labelClasses = 'block text-sm font-body text-slate-300 mb-1.5'

export default function ContactForm({
  defaultProduct = '',
  className = '',
}: ContactFormProps) {
  const t = useTranslations()
  const form = t.contactForm

  const [formData, setFormData] = useState({
    nome: '',
    organizzazione: '',
    email: '',
    ruolo: '',
    prodotto: defaultProduct,
    settore: '',
    messaggio: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || form.errorDefault)
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : form.errorDefault)
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
            className="rounded border border-success-green/30 bg-success-green/10 px-6 py-8 text-center"
          >
            <p className="text-success-green font-display text-xl uppercase tracking-wide mb-2">
              {form.successTitle}
            </p>
            <p className="text-slate-400 font-body text-sm">
              {form.successMessage}
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
                {form.nameLabel}
              </label>
              <input
                id="cf-nome"
                name="nome"
                type="text"
                required
                aria-label={form.nameLabel}
                value={formData.nome}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="cf-org" className={labelClasses}>
                {form.organizationLabel}
              </label>
              <input
                id="cf-org"
                name="organizzazione"
                type="text"
                aria-label={form.organizationLabel}
                value={formData.organizzazione}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.organizationPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="cf-email" className={labelClasses}>
                {form.emailLabel}
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                aria-label={form.emailLabel}
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="cf-ruolo" className={labelClasses}>
                {form.roleLabel}
              </label>
              <input
                id="cf-ruolo"
                name="ruolo"
                type="text"
                aria-label={form.roleLabel}
                value={formData.ruolo}
                onChange={handleChange}
                className={inputClasses}
                placeholder={form.rolePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="cf-prodotto" className={labelClasses}>
                {form.productLabel}
              </label>
              <select
                id="cf-prodotto"
                name="prodotto"
                required
                aria-label={form.productLabel}
                value={formData.prodotto}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">{form.productPlaceholder}</option>
                {form.productOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-settore" className={labelClasses}>
                {form.sectorLabel}
              </label>
              <select
                id="cf-settore"
                name="settore"
                required
                aria-label={form.sectorLabel}
                value={formData.settore}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">{form.sectorPlaceholder}</option>
                {form.sectorOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="cf-messaggio" className={labelClasses}>
                {form.messageLabel}
              </label>
              <textarea
                id="cf-messaggio"
                name="messaggio"
                rows={5}
                aria-label={form.messageLabel}
                value={formData.messaggio}
                onChange={handleChange}
                className={`${inputClasses} resize-y`}
                placeholder={form.messagePlaceholder}
              />
            </div>

            {error && (
              <div className="rounded border border-danger-red/30 bg-danger-red/10 px-4 py-3 text-danger-red font-body text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full font-display uppercase tracking-wide text-sm font-semibold rounded px-6 py-3.5 bg-gold-500 text-navy-950 transition-colors duration-200 hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? form.sending : form.submitButton}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
