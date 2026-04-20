'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import SpecsTable from '@/components/SpecsTable'
import FeatureGrid from '@/components/FeatureGrid'
import DownloadSection from '@/components/DownloadSection'
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
      {/*  2.1 HERO                                                    */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Decorative gradient */}
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
            <p className="font-display text-lg md:text-xl text-gold-400 uppercase tracking-wide mb-6">
              {t.privacyPhone.hero.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl mx-auto mb-10">
              {t.privacyPhone.hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '1rem' }}>
              <a
                href="/downloads/aegida-privacy-phone-brochure.pdf"
                download
                className="inline-flex items-center justify-center rounded bg-gold-500 px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
              >
                {t.privacyPhone.hero.ctaDownload}
              </a>
              <a
                href={`/${locale}/#contatti`}
                className="inline-flex items-center justify-center rounded border border-slate-500 px-7 py-3 font-display text-sm font-bold uppercase tracking-wider text-slate-200 transition-colors duration-200 hover:border-gold-500 hover:text-gold-400"
              >
                {t.privacyPhone.hero.ctaContact}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.1.5 PROOF \u2014 UFED FORENSIC TEST                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-navy-950">
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
                      {'AEGIDA \u00b7 PROOF'}
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
      {/*  2.2 TRE PILASTRI                                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4 justify-center">{t.privacyPhone.pillars.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white text-center mb-16">
              {t.privacyPhone.pillars.title}
            </h2>
          </ScrollReveal>

          {/* Pillar cards with connecting line */}
          <div className="relative">
            {/* Connecting line — horizontal on md+, vertical on mobile */}
            <div
              className="absolute hidden md:block top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent -translate-y-1/2"
              aria-hidden="true"
            />
            <div
              className="absolute md:hidden left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 md:grid-cols-3" style={{ gap: '2rem' }}>
              {t.privacyPhone.pillars.items.map((p, i) => (
                <ScrollReveal key={p.num} delay={i * 0.15}>
                  <div className="relative rounded border border-navy-700 bg-navy-900 p-8 text-center transition-colors duration-200 hover:border-gold-500/40">
                    <span className="font-mono text-3xl font-bold text-gold-500 block mb-2">
                      {p.num}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-1">
                      {p.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-gold-400/70 block mb-4">
                      {p.subtitle}
                    </span>
                    <p className="font-body text-sm leading-relaxed text-slate-400">
                      {p.desc}
                    </p>

                    {/* Arrow connector (horizontal on md+) */}
                    {i < t.privacyPhone.pillars.items.length - 1 && (
                      <span
                        className="absolute hidden md:flex items-center justify-center -right-5 top-1/2 -translate-y-1/2 text-gold-500/50"
                        aria-hidden="true"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                    {/* Arrow connector (vertical on mobile) */}
                    {i < t.privacyPhone.pillars.items.length - 1 && (
                      <span
                        className="flex md:hidden items-center justify-center mx-auto mt-4 text-gold-500/50"
                        aria-hidden="true"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.3 HARDWARE — GOOGLE PIXEL 10a                             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.hardware.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-10">
              {t.privacyPhone.hardware.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SpecsTable specs={t.privacyPhone.hardware.specs} className="mb-12" />
          </ScrollReveal>

          {/* Why Pixel 10a box */}
          <ScrollReveal delay={0.2}>
            <div className="rounded border border-navy-700 bg-navy-900 p-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-6">
                {t.privacyPhone.hardware.whyTitle}
              </h3>
              <ul className="space-y-4">
                {t.privacyPhone.hardware.whyPoints.map((point, i) => (
                  <li key={i} className="flex items-start" style={{ gap: 0 }}>
                    <span
                      className="shrink-0 mt-1.5 block rounded-full bg-gold-500"
                      style={{ width: 6, height: 6, marginRight: '0.75rem' }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm leading-relaxed text-slate-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.4 AEGIDA OS                                               */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.os.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
              {t.privacyPhone.os.title}
            </h2>
            <p className="font-body text-base leading-relaxed text-slate-400 max-w-3xl mb-12">
              {t.privacyPhone.os.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FeatureGrid features={t.privacyPhone.os.features} columns={2} className="mb-16" />
          </ScrollReveal>

          {/* Privacy by Design */}
          <ScrollReveal delay={0.15}>
            <div className="rounded border border-navy-700 bg-navy-900 p-8 mb-10">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-6">
                {t.privacyPhone.os.privacyByDesignTitle}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0.75rem' }}>
                {t.privacyPhone.os.privacyByDesignItems.map((item, i) => (
                  <li key={i} className="flex items-start" style={{ gap: 0 }}>
                    <span
                      className="shrink-0 mt-1.5 block rounded-full bg-gold-500"
                      style={{ width: 6, height: 6, marginRight: '0.75rem' }}
                      aria-hidden="true"
                    />
                    <span className="font-body text-sm leading-relaxed text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Zero Google */}
          <ScrollReveal delay={0.2}>
            <div className="rounded border border-navy-700 bg-navy-900 p-8">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-4">
                {t.privacyPhone.os.zeroGoogleTitle}
              </h3>
              <p className="font-body text-sm leading-relaxed text-slate-400">
                {t.privacyPhone.os.zeroGoogleDescription}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.5 AEGIDA CONNECT                                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.connect.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
              {t.privacyPhone.connect.title}
            </h2>
            <p className="font-body text-base leading-relaxed text-slate-400 max-w-3xl mb-12">
              {t.privacyPhone.connect.description}
            </p>
          </ScrollReveal>

          {/* Transport Channels */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-4">
              {t.privacyPhone.connect.transportTitle}
            </h3>
            <SpecsTable
              specs={t.privacyPhone.connect.transportChannels}
              className="mb-12"
            />
          </ScrollReveal>

          {/* Aegida Secure Relay */}
          <ScrollReveal delay={0.15}>
            <div className="rounded border border-navy-700 bg-navy-900 p-8 mb-12">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-4">
                {t.privacyPhone.connect.secureRelayTitle}
              </h3>
              <p className="font-body text-sm leading-relaxed text-slate-400">
                {t.privacyPhone.connect.secureRelayDescription}
              </p>
            </div>
          </ScrollReveal>

          {/* Crypto Stack */}
          <ScrollReveal delay={0.2}>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-6">
              {t.privacyPhone.connect.cryptoStackTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: '0.75rem', marginBottom: '3rem' }}>
              {t.privacyPhone.connect.cryptoStack.map((c) => (
                <div
                  key={c.name}
                  className="rounded border border-navy-700 bg-navy-900 px-5 py-4 transition-colors duration-200 hover:border-gold-500/40"
                >
                  <span className="font-mono text-sm font-bold text-gold-400 block mb-1">
                    {c.name}
                  </span>
                  <span className="font-body text-xs text-slate-500">
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Identity Management */}
          <ScrollReveal delay={0.25}>
            <div className="rounded border border-navy-700 bg-navy-900 p-8 mb-12">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-4">
                {t.privacyPhone.connect.identityTitle}
              </h3>
              <p className="font-body text-sm leading-relaxed text-slate-400">
                {t.privacyPhone.connect.identityDescription}
              </p>
            </div>
          </ScrollReveal>

          {/* Features List */}
          <ScrollReveal delay={0.3}>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-4">
              {t.privacyPhone.connect.featuresTitle}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '0.75rem' }}>
              {t.privacyPhone.connect.features.map((feat, i) => (
                <li key={i} className="flex items-start" style={{ gap: 0 }}>
                  <span
                    className="shrink-0 mt-1.5 block rounded-full bg-gold-500"
                    style={{ width: 6, height: 6, marginRight: '0.75rem' }}
                    aria-hidden="true"
                  />
                  <span className="font-body text-sm leading-relaxed text-slate-300">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.6 INTEGRAZIONE DEI LIVELLI                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.integration.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-10">
              {t.privacyPhone.integration.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto rounded border border-navy-700">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-navy-700">
                    <th className="font-mono text-xs uppercase tracking-wider text-gold-500 bg-navy-800 px-4 py-3">
                      {t.privacyPhone.integration.tableHeaders.from}
                    </th>
                    <th className="font-mono text-xs uppercase tracking-wider text-gold-500 bg-navy-800 px-4 py-3">
                      {t.privacyPhone.integration.tableHeaders.to}
                    </th>
                    <th className="font-mono text-xs uppercase tracking-wider text-gold-500 bg-navy-800 px-4 py-3">
                      {t.privacyPhone.integration.tableHeaders.synergy}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.privacyPhone.integration.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-navy-700 last:border-b-0 ${
                        i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'
                      }`}
                    >
                      <td className="font-mono text-sm text-gold-400 px-4 py-3 whitespace-nowrap">
                        {row.from}
                      </td>
                      <td className="font-mono text-sm text-gold-400 px-4 py-3 whitespace-nowrap">
                        {row.to}
                      </td>
                      <td className="font-body text-sm text-slate-300 px-4 py-3">
                        {row.synergy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.7 PRICING                                                 */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4 justify-center">{t.privacyPhone.pricing.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white text-center mb-4">
              {t.privacyPhone.pricing.title}
            </h2>
            <p className="font-body text-base text-slate-400 text-center max-w-2xl mx-auto mb-12">
              {t.privacyPhone.pricing.subtitle}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.5rem' }}>
            {/* Bundle primo anno */}
            <ScrollReveal delay={0.1}>
              <div className="relative rounded-lg border-2 border-gold-500 bg-navy-900 p-8 h-full">
                <div className="absolute -top-3 left-8 px-3 py-1 bg-gold-500 text-navy-950 font-mono text-xs font-bold uppercase tracking-wider rounded">
                  {t.privacyPhone.pricing.bundle.label}
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-extrabold text-white">
                    {t.privacyPhone.pricing.bundle.price}
                  </span>
                  <span className="font-mono text-sm text-gold-400 uppercase tracking-wider">
                    {t.privacyPhone.pricing.bundle.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-3">
                  {t.privacyPhone.pricing.bundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-slate-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gold-500 shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Rinnovo annuale */}
            <ScrollReveal delay={0.2}>
              <div className="relative rounded-lg border border-navy-700 bg-navy-900 p-8 h-full">
                <div className="absolute -top-3 left-8 px-3 py-1 bg-navy-800 border border-navy-600 text-slate-300 font-mono text-xs font-bold uppercase tracking-wider rounded">
                  {t.privacyPhone.pricing.renewal.label}
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-display text-5xl font-extrabold text-white">
                    {t.privacyPhone.pricing.renewal.price}
                  </span>
                  <span className="font-mono text-sm text-slate-500 uppercase tracking-wider">
                    {t.privacyPhone.pricing.renewal.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-3">
                  {t.privacyPhone.pricing.renewal.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-slate-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-500 shrink-0 mt-0.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-sm text-slate-500 italic text-center max-w-3xl mx-auto mt-10">
              {t.privacyPhone.pricing.note}
            </p>
            <div className="mt-8 text-center">
              <a
                href={`/${locale}/#contatti`}
                className="inline-flex items-center justify-center rounded bg-gold-500 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
              >
                {t.privacyPhone.pricing.cta}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.8 DOWNLOAD                                                */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-4">{t.privacyPhone.download.sectionLabel}</SectionLabel>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-10">
              {t.privacyPhone.download.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DownloadSection
              downloads={t.privacyPhone.download.items.map((item, i) => ({
                title: item.title,
                description: item.description,
                filename: [
                  'aegida-privacy-phone-test-ufed-2026-04-17.pdf',
                  'aegida-privacy-phone-brochure.pdf',
                  'aegida-privacy-phone-documento-tecnico.pdf',
                ][i],
              }))}
            />
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-navy-800 mx-6" />

      {/* ============================================================ */}
      {/*  2.9 CTA FINALE                                              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-6">
              {t.privacyPhone.cta.title}
            </h2>
            <p className="font-body text-base text-slate-400 max-w-2xl mx-auto mb-10">
              {t.privacyPhone.cta.description}
            </p>
            <a
              href={`/${locale}/#contatti`}
              className="inline-flex items-center justify-center rounded bg-gold-500 px-8 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors duration-200 hover:bg-gold-400"
            >
              {t.privacyPhone.cta.button}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
