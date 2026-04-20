'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ShieldSVG from '@/components/ShieldSVG'
import { useTranslations, useLocale } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function PrivacyPhoneContent() {
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
          <ScrollReveal>
            <ShieldSVG size={72} className="mx-auto mb-8" animated />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
              {t.privacyPhone.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-display text-lg md:text-xl text-gold-400 uppercase tracking-wide mb-4">
              {t.privacyPhone.hero.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="font-mono text-sm text-slate-300 uppercase tracking-wider mb-8">
              {t.privacyPhone.hero.claim}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '1rem' }}>
              <a
                href={`/${locale}/#contatti`}
                className="inline-flex items-center justify-center rounded bg-gold-500 px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
              >
                {t.privacyPhone.hero.ctaPrimary}
              </a>
              <a
                href="/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf"
                className="inline-flex items-center justify-center rounded border border-slate-500 px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-slate-200 transition-colors duration-200 hover:border-gold-500 hover:text-gold-400"
              >
                {t.privacyPhone.hero.ctaSecondary}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  COS'E                                                       */}
      {/* ============================================================ */}
      <section id="cosa-e" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.cosaE.label}</SectionLabel>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl">
              {t.privacyPhone.cosaE.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  COSA INCLUDE                                                */}
      {/* ============================================================ */}
      <section id="cosa-include" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.cosaInclude.label}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-12">
              {t.privacyPhone.cosaInclude.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
            {t.privacyPhone.cosaInclude.items.map((item, i) => (
              <ScrollReveal key={item.key} delay={0.1 + i * 0.1}>
                <div className="rounded border border-navy-700 bg-navy-900 p-6 h-full transition-colors duration-200 hover:border-gold-500/40">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-slate-400">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  PROOF — UFED FORENSIC TEST (preserved as-is)               */}
      {/* ============================================================ */}
      <section id="proof" className="py-20 md:py-28 bg-navy-950">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4 justify-center">{t.privacyPhone.proof.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-white text-center mb-6">
              {t.privacyPhone.proof.title}
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl mx-auto text-center mb-12">
              {t.privacyPhone.proof.intro}
            </p>
          </ScrollReveal>

          {/* Test card */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-gold-500/40 bg-navy-900 p-6 md:p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
                {[
                  { label: t.privacyPhone.proof.testCard.operator, value: t.privacyPhone.proof.testCard.operatorValue },
                  { label: t.privacyPhone.proof.testCard.software, value: t.privacyPhone.proof.testCard.softwareValue },
                  { label: t.privacyPhone.proof.testCard.date, value: t.privacyPhone.proof.testCard.dateValue },
                  { label: t.privacyPhone.proof.testCard.duration, value: t.privacyPhone.proof.testCard.durationValue },
                  { label: t.privacyPhone.proof.testCard.device, value: t.privacyPhone.proof.testCard.deviceValue },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-xs uppercase tracking-wider text-gold-400/80 mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-slate-200 leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
            {t.privacyPhone.proof.timeline.map((step, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="rounded-lg border border-navy-700 bg-navy-900 overflow-hidden h-full flex flex-col">
                  <div className="relative bg-navy-950 border-b border-navy-700">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-wider text-gold-500/70 bg-navy-950/80 px-2 py-1 rounded"
                    >
                      {'AEGIDA · PROOF'}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="font-mono text-xs uppercase tracking-wider text-gold-400 mb-3">
                      {step.time}
                    </p>
                    <p className="font-body text-sm text-slate-300 leading-relaxed flex-1">
                      {step.caption}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Conclusion */}
          <ScrollReveal delay={0.5}>
            <div className="mt-12 rounded-lg border-l-4 border-gold-500 bg-navy-900 p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-gold-400 mb-3">
                {t.privacyPhone.proof.conclusionLabel}
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-slate-100">
                {t.privacyPhone.proof.conclusionText}
              </p>
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal delay={0.6}>
            <p className="font-body text-xs text-slate-500 italic leading-relaxed mt-6 max-w-3xl mx-auto text-center">
              {t.privacyPhone.proof.disclaimer}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  PRICING                                                     */}
      {/* ============================================================ */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4 justify-center">{t.privacyPhone.pricing.label}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white text-center mb-12">
              {t.privacyPhone.pricing.title}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
            {t.privacyPhone.pricing.packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={0.1 + i * 0.1}>
                <div
                  className={`relative rounded-lg p-8 h-full ${
                    pkg.highlighted
                      ? 'border-2 border-gold-500 bg-navy-900'
                      : 'border border-navy-700 bg-navy-900'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-gold-500 text-navy-950 font-mono text-xs font-bold uppercase tracking-wider rounded">
                      {pkg.name}
                    </div>
                  )}
                  {!pkg.highlighted && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-navy-800 border border-navy-600 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider rounded">
                      {pkg.name}
                    </div>
                  )}
                  <div className="mt-4">
                    <span className="font-display text-4xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-4 font-body text-sm text-slate-400 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Business / multi-device */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 rounded-lg border border-navy-700 bg-navy-900 p-6 md:p-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-3">
                {t.privacyPhone.pricing.business.title}
              </h3>
              <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
                {t.privacyPhone.pricing.business.body}
              </p>
              <a
                href={`/${locale}/#contatti`}
                className="inline-flex items-center justify-center rounded bg-gold-500 px-6 py-3 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
              >
                {t.privacyPhone.pricing.business.cta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  METODOLOGIA                                                 */}
      {/* ============================================================ */}
      <section id="metodologia" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.metodologia.label}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-6">
              {t.privacyPhone.metodologia.title}
            </h2>
            <p className="font-body text-base leading-relaxed text-slate-400 max-w-3xl">
              {t.privacyPhone.metodologia.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  DISCLAIMER                                                  */}
      {/* ============================================================ */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <p className="font-body text-xs text-slate-500 italic leading-relaxed">
              {t.privacyPhone.disclaimer.text}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  CTA FINALE                                                  */}
      {/* ============================================================ */}
      <section id="cta-finale" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-6">
              {t.privacyPhone.ctaFinale.title}
            </h2>
            <p className="font-body text-base text-slate-400 max-w-2xl mx-auto mb-10">
              {t.privacyPhone.ctaFinale.body}
            </p>
            <a
              href={`/${locale}/#contatti`}
              className="inline-flex items-center justify-center rounded bg-gold-500 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
            >
              {t.privacyPhone.ctaFinale.cta}
            </a>
          </ScrollReveal>
        </div>
      </section>

    </main>
  )
}
