'use client'

import { useTranslations } from '@/lib/i18n/context'
import ScrollReveal from '@/components/ScrollReveal'
import ComplianceQuiz from './components/ComplianceQuiz'

export default function ConformitaContent() {
  const t = useTranslations()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AEGIDA NIS2 Self-Assessment',
    url: 'https://www.aegida-systems.com/conformita',
    description: t.conformita.meta.description,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    creator: {
      '@type': 'Organization',
      name: 'H4R Human for Research Srl',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,150,12,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-widest-mono text-gold-400 mb-4">
              {t.conformita.hero.label}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl font-bold uppercase tracking-wide-display text-slate-50 sm:text-5xl lg:text-6xl">
              {t.conformita.hero.title}{' '}
              <span className="text-gold-400">{t.conformita.hero.titleHighlight}</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-slate-300 leading-relaxed">
              {t.conformita.hero.description}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 rounded-lg border border-navy-700 bg-navy-900/60 px-6 py-4">
              <p className="font-body text-sm text-slate-400">
                <span className="font-semibold text-gold-300">{t.conformita.hero.noteLabel}</span>{' '}
                {t.conformita.hero.noteText}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-navy-950 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ComplianceQuiz />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide-display text-slate-50 text-center sm:text-4xl">
              {t.conformita.frameworks.title}{' '}
              <span className="text-gold-400">{t.conformita.frameworks.titleHighlight}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-center font-body text-slate-400">
              {t.conformita.frameworks.description}
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {t.conformita.frameworks.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.1 * (i + 1)}>
                <div className="rounded-xl border border-navy-700 bg-navy-800/50 p-6 h-full">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide-display text-gold-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-wider-mono text-slate-500">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 font-body text-sm text-slate-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
