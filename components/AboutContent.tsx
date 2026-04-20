'use client'

import SectionLabel from '@/components/SectionLabel'
import { useTranslations, useLocale } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AboutContent() {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <main className="min-h-screen bg-navy-950 text-slate-200">

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(184,150,12,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            {t.about.hero.title}
          </h1>

          <p className="font-body text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.about.hero.subtitle}
          </p>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  SOCIETA                                                     */}
      {/* ============================================================ */}
      <section id="societa" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel className="mb-4">{t.about.societa.title}</SectionLabel>
          <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
            {t.about.societa.body}
          </p>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  MISSIONE                                                    */}
      {/* ============================================================ */}
      <section id="missione" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel className="mb-4">{t.about.missione.title}</SectionLabel>
          <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
            {t.about.missione.body}
          </p>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  COSA PRODUCIAMO                                             */}
      {/* ============================================================ */}
      <section id="cosa-produciamo" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel className="mb-4">{t.about.cosaProduciamo.title}</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8" style={{ gap: '1.5rem' }}>
            {t.about.cosaProduciamo.items.map((item) => (
              <div key={item.name} className="rounded border border-navy-700 bg-navy-900 p-6 h-full transition-colors duration-200 hover:border-gold-500/40">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-2">
                  {item.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-gold-400 mb-3">
                  {item.status}
                </p>
                <p className="font-body text-sm leading-relaxed text-slate-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  TEAM                                                        */}
      {/* ============================================================ */}
      <section id="team" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionLabel className="mb-4">{t.about.team.title}</SectionLabel>
          <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
            {t.about.team.body}
          </p>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  CTA FINALE                                                  */}
      {/* ============================================================ */}
      <section id="cta-finale" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-6">
            {t.about.ctaFinale.title}
          </h2>
          <p className="font-body text-base text-slate-400 max-w-2xl mx-auto mb-10">
            {t.about.ctaFinale.body}
          </p>
          <a
            href={`/${locale}/contatti/`}
            className="inline-flex items-center justify-center rounded bg-gold-500 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
          >
            {t.about.ctaFinale.cta}
          </a>
        </div>
      </section>

    </main>
  )
}
