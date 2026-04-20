'use client'

import { motion } from 'framer-motion'
import SectionLabel from '@/components/SectionLabel'
import { useTranslations, useLocale } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FrameworkContent() {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <article className="bg-navy-950 text-slate-200 min-h-screen">

      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <motion.h1
            className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-wide-display text-white mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {t.framework.hero.title}
          </motion.h1>

          <motion.p
            className="font-display text-xl md:text-2xl font-semibold uppercase tracking-wide text-gold-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {t.framework.hero.tagline}
          </motion.p>
        </div>
      </section>

      <div className="w-full h-px bg-navy-700 my-0" />

      {/* ============================================================ */}
      {/* 4 PARAGRAFI                                                  */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 space-y-16">

          {/* Cos'è */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
              {t.framework.cosaE.title}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
              {t.framework.cosaE.body}
            </p>
          </div>

          {/* Per chi */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
              {t.framework.perChi.title}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
              {t.framework.perChi.body}
            </p>
          </div>

          {/* Stato 2026 */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
              {t.framework.stato.title}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
              {t.framework.stato.body}
            </p>
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
              {t.framework.roadmap.title}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
              {t.framework.roadmap.body}
            </p>
          </div>

        </div>
      </section>

      <div className="w-full h-px bg-navy-700" />

      {/* ============================================================ */}
      {/* CTA PILOT                                                    */}
      {/* ============================================================ */}
      <section id="cta-pilot" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
            {t.framework.ctaFinale.title}
          </h2>
          <p className="font-body text-base text-slate-400 max-w-2xl mx-auto mb-10">
            {t.framework.ctaFinale.body}
          </p>
          <a
            href={`/${locale}/#contatti`}
            className="inline-flex items-center font-display text-sm font-bold uppercase tracking-wider px-8 py-4 rounded bg-gold-500 text-navy-950 transition-colors duration-200 hover:bg-gold-400"
          >
            {t.framework.ctaFinale.cta}
          </a>
        </div>
      </section>

    </article>
  )
}
