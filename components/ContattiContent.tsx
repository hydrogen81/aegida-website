'use client'
import { useTranslations } from '@/lib/i18n/context'
import ContactForm from '@/components/ContactForm'

export default function ContattiContent() {
  const t = useTranslations()
  const page = t.contact.page
  const diretti = t.contact.diretti

  return (
    <main>
      <section className="px-6 md:px-10 pt-20 pb-10 md:pt-28">
        <div className="max-w-[720px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6">
            {page.title}
          </h1>
          <p className="text-[17px] text-ink-300 leading-[1.55] max-w-[640px]">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[640px] mx-auto">
          <ContactForm />
        </div>
      </section>

      {diretti ? (
        <section className="px-6 md:px-10 py-12 border-t border-navy-line">
          <div className="max-w-[640px] mx-auto">
            <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">OPPURE IN MODO DIRETTO</div>
            <h2 className="text-[18px] font-display font-medium text-ink-100 mb-4">{diretti.title}</h2>
            <ul className="font-sans text-sm text-ink-200 space-y-2">
              {diretti.email ? (
                <li>
                  <a href={`mailto:${diretti.email}`} className="text-ink-100 border-b border-current pb-0.5">
                    {diretti.email}
                  </a>
                </li>
              ) : null}
              {diretti.pec ? <li className="text-ink-300">{diretti.pec}</li> : null}
              {diretti.legal ? <li className="text-ink-400 text-xs mt-4">{diretti.legal}</li> : null}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  )
}
