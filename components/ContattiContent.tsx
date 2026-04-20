'use client'

import { useTranslations } from '@/lib/i18n/context'
import ContactForm from '@/components/ContactForm'

export default function ContattiContent() {
  const t = useTranslations()
  const page = t.contact.page
  const diretti = t.contact.diretti

  return (
    <main>
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl text-slate-100 mb-4">
            {page.title}
          </h1>
          <p className="font-body text-lg text-slate-300 leading-relaxed">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <ContactForm />
        </div>
      </section>

      {diretti ? (
        <section className="pb-24 border-t border-navy-800">
          <div className="container mx-auto px-6 max-w-2xl pt-12">
            <h2 className="font-display text-xl text-slate-200 mb-4">
              {diretti.title}
            </h2>
            <ul className="font-body text-sm text-slate-400 space-y-2">
              {diretti.email ? (
                <li>
                  <a
                    href={`mailto:${diretti.email}`}
                    className="text-gold-400 hover:text-gold-300"
                  >
                    {diretti.email}
                  </a>
                </li>
              ) : null}
              {diretti.pec ? <li>{diretti.pec}</li> : null}
              {diretti.legal ? <li>{diretti.legal}</li> : null}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  )
}
