'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ShieldSVG from '@/components/ShieldSVG'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import { useTranslations, useLocale } from '@/lib/i18n/context'

/* ================================================================== */
/*  HomeContent                                                        */
/* ================================================================== */

export default function HomeContent() {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <>
      {/* ============================================================ */}
      {/*  SECTION 1 — Hero                                            */}
      {/* ============================================================ */}
      <section
        id="hero"
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(26,37,64,0.7) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 50%, rgba(184,150,12,0.06) 0%, transparent 70%), #0a0e1a',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight text-slate-100 tracking-wide-display"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {t.home.hero.title}
              </motion.h1>

              <motion.p
                className="mt-6 text-slate-400 font-body text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t.home.hero.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link
                  href={`/${locale}/#contatti`}
                  className="inline-flex items-center px-7 py-3.5 bg-gold-500 text-navy-950 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-400 transition-colors duration-200"
                >
                  {t.home.hero.ctaPrimary}
                </Link>
                <a
                  href="/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf"
                  className="inline-flex items-center px-7 py-3.5 border border-gold-500 text-gold-400 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-500/10 transition-colors duration-200"
                >
                  {t.home.hero.ctaSecondary}
                </a>
              </motion.div>
            </div>

            {/* Right — Shield */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="block md:hidden">
                <ShieldSVG size={180} animated />
              </div>
              <div className="hidden md:block">
                <ShieldSVG size={280} animated />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <hr className="divider mx-auto max-w-7xl" />

      {/* ============================================================ */}
      {/*  SECTION 2 — Istituzionale                                   */}
      {/* ============================================================ */}
      <section id="istituzionale" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-body text-lg text-slate-400 leading-relaxed max-w-3xl">
              {t.home.istituzionale.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="divider mx-auto max-w-7xl" />

      {/* ============================================================ */}
      {/*  SECTION 3 — Prodotti (asimmetrica)                          */}
      {/* ============================================================ */}
      <section id="prodotti" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.home.prodotti.label}</SectionLabel>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Privacy Phone — occupa 2/3 */}
            <ScrollReveal delay={0.1} className="md:col-span-2">
              <Link
                href={`/${locale}/privacy-phone/`}
                className="group relative block rounded-lg border border-navy-700 bg-navy-900 p-8 transition-colors duration-300 hover:border-gold-500 overflow-hidden h-full"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-display text-2xl font-bold uppercase text-slate-100 tracking-wide-display">
                  {t.home.prodotti.privacyPhone.name}
                </h3>
                <p className="mt-4 font-body text-slate-400 leading-relaxed">
                  {t.home.prodotti.privacyPhone.claim}
                </p>
                <span className="mt-6 inline-flex items-center text-gold-400 font-display text-sm uppercase tracking-wide-display group-hover:text-gold-300 transition-colors duration-200">
                  {t.home.prodotti.privacyPhone.cta} &rarr;
                </span>
              </Link>
            </ScrollReveal>

            {/* Framework — occupa 1/3 */}
            <ScrollReveal delay={0.2}>
              <Link
                href={`/${locale}/framework/`}
                className="group relative block rounded-lg border border-navy-700 bg-navy-900 p-8 transition-colors duration-300 hover:border-gold-500 overflow-hidden h-full"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-display text-xl font-bold uppercase text-slate-100 tracking-wide-display">
                  {t.home.prodotti.framework.name}
                </h3>
                <p className="mt-4 font-body text-slate-400 leading-relaxed text-sm">
                  {t.home.prodotti.framework.claim}
                </p>
                <span className="mt-6 inline-flex items-center text-gold-400 font-display text-sm uppercase tracking-wide-display group-hover:text-gold-300 transition-colors duration-200">
                  {t.home.prodotti.framework.cta} &rarr;
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="divider mx-auto max-w-7xl" />

      {/* ============================================================ */}
      {/*  SECTION 4 — Proof UFED preview                              */}
      {/* ============================================================ */}
      <section id="proof" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.home.proofPreview.label}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.proofPreview.title}
            </h2>
            <p className="mt-6 font-body text-slate-400 leading-relaxed max-w-3xl">
              {t.home.proofPreview.body}
            </p>
            <Link
              href={`/${locale}/privacy-phone/#proof`}
              className="mt-6 inline-flex items-center text-gold-400 font-display text-sm uppercase tracking-wide-display hover:text-gold-300 transition-colors duration-200"
            >
              {t.home.proofPreview.cta} &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <hr className="divider mx-auto max-w-7xl" />

      {/* ============================================================ */}
      {/*  SECTION 5 — CTA finale                                      */}
      {/* ============================================================ */}
      <section
        id="cta-finale"
        className="py-20 md:py-28"
        style={{
          background:
            'linear-gradient(180deg, #0d1321 0%, #131b2e 50%, #0d1321 100%)',
        }}
      >
        <div id="contatti" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.ctaFinale.title}
            </h2>
            <p className="mt-4 font-body text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t.home.ctaFinale.subtitle}
            </p>
            <div className="mt-10">
              <Link
                href={`/${locale}/#contatti`}
                className="inline-flex items-center px-8 py-4 bg-gold-500 text-navy-950 font-display font-bold uppercase text-base tracking-wide-display rounded hover:bg-gold-400 transition-colors duration-200"
              >
                {t.home.ctaFinale.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
