'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ComparisonTable from '@/components/ComparisonTable'
import DownloadSection from '@/components/DownloadSection'
import FeatureGrid from '@/components/FeatureGrid'
import LayerDiagram from '@/components/LayerDiagram'
import PacketInspector from '@/components/PacketInspector'
import { useTranslations, useLocale } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  Static data (language-independent)                                 */
/* ------------------------------------------------------------------ */

const comparisonValues = [
  [true, true, true, true, true],
  [false, false, false, false, true],
  [false, false, false, false, true],
  [false, false, true, false, true],
  [false, false, false, false, true],
  [false, false, false, false, true],
]

const downloadFilenames = [
  'aegida-framework-brochure.pdf',
  'aegida-framework-brief-generale.pdf',
  'aegida-framework-documento-tecnico.pdf',
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function Divider() {
  return <div className="w-full h-px bg-navy-700 my-16 md:my-24" />
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FrameworkContent() {
  const t = useTranslations()
  const { locale } = useLocale()

  const comparisonRows = t.framework.comparison.rows.map((row, i) => ({
    label: row.label,
    values: comparisonValues[i],
  }))

  const downloads = t.framework.download.items.map((item, i) => ({
    title: item.title,
    description: item.description,
    filename: downloadFilenames[i],
  }))

  return (
    <article className="bg-navy-950 text-slate-200 min-h-screen">
      {/* ============================================================ */}
      {/* 3.1 HERO                                                     */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <SectionLabel className="mb-6">{t.framework.hero.sectionLabel}</SectionLabel>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-wide-display text-white mb-4">
              {t.framework.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-display text-xl md:text-2xl font-semibold uppercase tracking-wide text-gold-400 mb-8">
              {t.framework.hero.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl mb-10">
              {t.framework.hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap items-center" style={{ gap: '1rem' }}>
              <a
                href="/downloads/aegida-framework-brochure.pdf"
                download
                className="inline-flex items-center font-display text-sm font-bold uppercase tracking-wider px-7 py-3 rounded bg-gold-500 text-navy-950 transition-colors duration-200 hover:bg-gold-400"
                style={{ gap: '0.5rem' }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1v10m0 0L4 7m4 4l4-4M2 14h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t.framework.hero.ctaDownload}
              </a>
              <a
                href={`/${locale}/#contatti`}
                className="inline-flex items-center font-display text-sm font-bold uppercase tracking-wider px-7 py-3 rounded border border-slate-500 text-slate-200 transition-colors duration-200 hover:border-gold-500 hover:text-gold-400"
              >
                {t.framework.hero.ctaContact}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.2 IL PROBLEMA                                              */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.problem.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
            {t.framework.problem.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-body text-base leading-relaxed text-slate-400 max-w-3xl mb-10">
            {t.framework.problem.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="font-mono text-xs uppercase tracking-wider px-4 py-3 border-b-2 border-b-navy-700 bg-navy-900 text-slate-400">
                    {t.framework.problem.tableHeaders.threat}
                  </th>
                  <th className="font-mono text-xs uppercase tracking-wider px-4 py-3 border-b-2 border-b-navy-700 bg-navy-900 text-slate-400">
                    {t.framework.problem.tableHeaders.detail}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.framework.problem.threats.map((threat, i) => (
                  <tr
                    key={i}
                    className={`border-b border-navy-700 last:border-b-0 ${
                      i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'
                    }`}
                  >
                    <td className="font-display text-sm font-semibold text-gold-400 px-4 py-3 whitespace-nowrap uppercase tracking-wide">
                      {threat.type}
                    </td>
                    <td className="font-body text-sm text-slate-300 px-4 py-3">
                      {threat.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.3 ARCHITETTURA A TRE LAYER                                 */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.layers.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-12">
            {t.framework.layers.title}
          </h2>
        </ScrollReveal>

        {/* Interactive layer diagram */}
        <ScrollReveal delay={0.15}>
          <LayerDiagram />
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.4 STATS                                                    */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.framework.stats.items.map((stat, i) => (
              <div key={i} className="text-center py-6">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-white mb-1">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-gold-400 text-2xl md:text-3xl ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider-mono text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.4b PACKET INSPECTOR — Live Stealth Demo                    */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">LAYER C — LIVE DEMO</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
            Deep Packet Inspection: Before &amp; After
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-body text-base leading-relaxed text-slate-400 max-w-3xl mb-10">
            {locale === 'de'
              ? 'Klicken Sie auf den Toggle, um den Unterschied zu sehen. Mit AEGIDA OFF ist der Datenverkehr identifizierbar. Mit AEGIDA ON wird alles zu Standard-HTTPS auf Port 443 — unsichtbar fuer Deep Packet Inspection.'
              : locale === 'en'
                ? 'Click the toggle to see the difference. With AEGIDA OFF, traffic protocols are fully identifiable. With AEGIDA ON, everything becomes standard HTTPS on port 443 — invisible to Deep Packet Inspection.'
                : 'Clicca il toggle per vedere la differenza. Con AEGIDA OFF, i protocolli di traffico sono completamente identificabili. Con AEGIDA ON, tutto diventa HTTPS standard su porta 443 — invisibile al Deep Packet Inspection.'}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <PacketInspector />
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.5 COMPARATIVA                                              */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.comparison.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-10">
            {t.framework.comparison.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <ComparisonTable
            headers={t.framework.comparison.headers}
            rows={comparisonRows}
            highlightColumn={5}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-sm text-slate-500 mt-6 italic">
            {t.framework.comparison.note}
          </p>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.6 THREAT LANDSCAPE                                         */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.threats.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-10">
            {t.framework.threats.title}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.framework.threats.cards.map((card, i) => (
            <ScrollReveal key={i} delay={0.15 + i * 0.05}>
              <div className="rounded bg-navy-900 border border-navy-700 p-6 border-l-4 border-l-danger-red">
                <div className="flex items-center mb-3" style={{ gap: '0.75rem' }}>
                  <span className="inline-block font-mono text-xs font-semibold uppercase tracking-wider bg-danger-red/15 text-danger-red px-2 py-1 rounded">
                    {card.year}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {card.location}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wide mb-2">
                  {card.name}
                </h3>
                <p className="font-body text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.7 CONFORMITA NIS2                                          */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.nis2.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
            {t.framework.nis2.title}
          </h2>
        </ScrollReveal>

        {/* NIS2 badge */}
        <ScrollReveal delay={0.15}>
          <div className="rounded border border-gold-500/30 bg-gold-500/5 px-6 py-4 mb-10 flex items-center" style={{ gap: '1rem' }}>
            <div className="shrink-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <circle cx="20" cy="20" r="18" stroke="#b8960c" strokeWidth="1.5" fill="none" />
                <path
                  d="M20 10l2.5 5 5.5.8-4 3.9.9 5.5L20 22.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8z"
                  fill="#b8960c"
                  opacity="0.3"
                />
                <path
                  d="M20 10l2.5 5 5.5.8-4 3.9.9 5.5L20 22.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8z"
                  stroke="#b8960c"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-gold-400 uppercase tracking-wide">
                {t.framework.nis2.badgeTitle}
              </p>
              <p className="font-body text-sm text-slate-400">
                {t.framework.nis2.badgeSubtitle}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Compliance mapping */}
        <ScrollReveal delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="font-mono text-xs uppercase tracking-wider px-4 py-3 border-b-2 border-b-gold-500 bg-navy-900 text-gold-400">
                    {t.framework.nis2.tableHeaders.requirement}
                  </th>
                  <th className="font-mono text-xs uppercase tracking-wider px-4 py-3 border-b-2 border-b-gold-500 bg-navy-900 text-gold-400">
                    {t.framework.nis2.tableHeaders.coverage}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.framework.nis2.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-navy-700 last:border-b-0 ${
                      i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'
                    }`}
                  >
                    <td className="font-display text-sm font-semibold text-white px-4 py-3 uppercase tracking-wide whitespace-nowrap">
                      {row.article}
                    </td>
                    <td className="font-body text-sm text-slate-300 px-4 py-3">
                      {row.mapping}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.8 ROADMAP CERTIFICAZIONI                                   */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.roadmap.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-12">
            {t.framework.roadmap.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative pl-8 md:pl-10">
            {/* Timeline line */}
            <div
              className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-navy-600"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {t.framework.roadmap.items.map((item, i) => {
                const done = item.status === t.framework.roadmap.statusImplemented
                return (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div
                      className={`absolute w-3 h-3 rounded-full border-2 ${
                        done
                          ? 'bg-success-green border-success-green'
                          : 'bg-navy-900 border-navy-600'
                      }`}
                      style={{ left: '-1.625rem', top: '0.25rem' }}
                      aria-hidden="true"
                    />
                    <div>
                      <div className="flex flex-wrap items-center" style={{ gap: '0.75rem' }}>
                        <h3 className="font-display text-base font-bold text-white uppercase tracking-wide">
                          {item.label}
                        </h3>
                        {done && (
                          <span className="inline-block font-mono text-xs uppercase tracking-wider bg-success-green/15 text-success-green px-2 py-0.5 rounded">
                            {t.framework.roadmap.statusImplemented}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-sm text-slate-400 mt-1">
                        {item.status}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.9 PROPOSTA PoC                                             */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.poc.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-10">
            {t.framework.poc.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-body text-base leading-relaxed text-slate-400 max-w-3xl mb-10">
            {t.framework.poc.description}
          </p>
        </ScrollReveal>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.framework.poc.phases.map((phase, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.05}>
              <div className="rounded border border-navy-700 bg-navy-900 p-6 h-full">
                <div className="flex items-center mb-3" style={{ gap: '0.75rem' }}>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10 font-mono text-sm font-semibold text-gold-400">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-base font-bold text-white uppercase tracking-wide">
                    {phase.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-slate-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.10 DOWNLOAD                                                */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionLabel className="mb-6">{t.framework.download.sectionLabel}</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-10">
            {t.framework.download.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <DownloadSection downloads={downloads} />
        </ScrollReveal>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/* 3.11 CTA FINALE                                              */}
      {/* ============================================================ */}
      <section className="mx-auto max-w-5xl px-6 pb-24 md:pb-32 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-6">
            {t.framework.cta.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="font-body text-base text-slate-400 max-w-2xl mx-auto mb-10">
            {t.framework.cta.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <a
            href={`/${locale}/#contatti`}
            className="inline-flex items-center font-display text-sm font-bold uppercase tracking-wider px-8 py-4 rounded bg-gold-500 text-navy-950 transition-colors duration-200 hover:bg-gold-400"
          >
            {t.framework.cta.button}
          </a>
        </ScrollReveal>
      </section>
    </article>
  )
}
