'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ShieldSVG from '@/components/ShieldSVG'
import ThreatTicker from '@/components/ThreatTicker'
import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ContactForm from '@/components/ContactForm'
import { SECTORS } from '@/lib/constants'
import { useTranslations, useLocale } from '@/lib/i18n/context'
import AnimatedCounter from '@/components/AnimatedCounter'

/* ------------------------------------------------------------------ */
/*  SVG Icon helpers                                                   */
/* ------------------------------------------------------------------ */

function SmartphoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function NetworkIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <line x1="12" y1="7" x2="5" y2="17" />
      <line x1="12" y1="7" x2="19" y2="17" />
      <line x1="5" y1="19" x2="19" y2="19" />
    </svg>
  )
}

function MessageIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function SectorIcon({ icon }: { icon: string }) {
  const props = {
    width: 32,
    height: 32,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (icon) {
    case 'bolt':
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...props}>
          <line x1="12" y1="3" x2="12" y2="21" />
          <polyline points="4 7 12 3 20 7" />
          <path d="M4 7v3c0 2 2 4 4 4" />
          <path d="M20 7v3c0 2-2 4-4 4" />
          <line x1="4" y1="21" x2="20" y2="21" />
        </svg>
      )
    case 'truck':
      return (
        <svg {...props}>
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    case 'newspaper':
      return (
        <svg {...props}>
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <line x1="10" y1="6" x2="18" y2="6" />
          <line x1="10" y1="10" x2="18" y2="10" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      )
    case 'building':
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="6" x2="9.01" y2="6" />
          <line x1="15" y1="6" x2="15.01" y2="6" />
          <line x1="9" y1="10" x2="9.01" y2="10" />
          <line x1="15" y1="10" x2="15.01" y2="10" />
          <line x1="9" y1="14" x2="9.01" y2="14" />
          <line x1="15" y1="14" x2="15.01" y2="14" />
          <line x1="9" y1="22" x2="9" y2="18" />
          <line x1="15" y1="22" x2="15" y2="18" />
        </svg>
      )
    default:
      return null
  }
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-success-green shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ThreatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-danger-red shrink-0"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Section Divider                                                    */
/* ------------------------------------------------------------------ */

function Divider() {
  return <hr className="divider mx-auto max-w-7xl" />
}

/* ------------------------------------------------------------------ */
/*  Tag helper                                                         */
/* ------------------------------------------------------------------ */

function ProductTag({ tag }: { tag: string }) {
  const isPhone = tag === 'Phone'
  return (
    <span
      className={`inline-block text-xs font-mono uppercase tracking-wider-mono px-2 py-0.5 rounded border ${
        isPhone
          ? 'border-accent-blue text-accent-blue'
          : 'border-gold-500 text-gold-500'
      }`}
    >
      {tag}
    </span>
  )
}

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
        className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(26,37,64,0.7) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 50%, rgba(184,150,12,0.06) 0%, transparent 70%), #0a0e1a',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Classified banner */}
          <motion.p
            className="text-center font-mono text-gold-500 uppercase mb-10"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.home.hero.classification}
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <motion.h1
                className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-none text-slate-100 tracking-wide-display"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                dangerouslySetInnerHTML={{ __html: t.home.hero.title.replace(/\n/g, '<br />') }}
              />

              <motion.p
                className="font-display text-2xl md:text-3xl italic text-gold-400 mt-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t.home.hero.subtitle}
              </motion.p>

              <motion.p
                className="mt-6 text-slate-400 font-body text-lg leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                {t.home.hero.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href={`/${locale}/#contatti`}
                  className="inline-flex items-center px-7 py-3.5 bg-gold-500 text-navy-950 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-400 transition-colors duration-200"
                >
                  {t.home.hero.ctaPrimary}
                </Link>
                <Link
                  href={`/${locale}/#prodotti`}
                  className="inline-flex items-center px-7 py-3.5 border border-gold-500 text-gold-400 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-500/10 transition-colors duration-200"
                >
                  {t.home.hero.ctaSecondary}
                </Link>
              </motion.div>
            </div>

            {/* Right — Shield */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Mobile size */}
              <div className="block md:hidden">
                <ShieldSVG size={180} animated />
              </div>
              {/* Desktop size */}
              <div className="hidden md:block">
                <ShieldSVG size={280} animated />
              </div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 border-t border-navy-700 pt-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t.home.hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-mono text-xl md:text-2xl font-semibold text-slate-100 tracking-wider-mono">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="font-body text-sm text-slate-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  THREAT TICKER — Live threat feed banner                     */}
      {/* ============================================================ */}
      <ThreatTicker />

      <Divider />

      {/* ============================================================ */}
      {/*  SECTION 2 — Panoramica Prodotti                             */}
      {/* ============================================================ */}
      <section id="prodotti" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.home.products.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.products.title}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 — Privacy Phone */}
            <ScrollReveal delay={0.1}>
              <div className="group relative rounded-lg border border-navy-700 bg-navy-900 p-8 transition-colors duration-300 hover:border-gold-500 overflow-hidden h-full">
                {/* Gold top bar on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <SmartphoneIcon className="text-gold-400 mb-4" />
                <h3 className="font-display text-2xl font-bold uppercase text-slate-100 tracking-wide-display">
                  {t.home.products.card1.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500 tracking-wider-mono">
                  {t.home.products.card1.specs}
                </p>
                <p className="mt-4 font-body text-slate-400 leading-relaxed">
                  {t.home.products.card1.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {t.home.products.card1.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm font-body text-slate-300"
                    >
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/privacy-phone/`}
                  className="mt-8 inline-flex items-center text-gold-400 font-display text-sm uppercase tracking-wide-display hover:text-gold-300 transition-colors duration-200"
                >
                  {t.home.products.card1.cta} &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Card 2 — Framework */}
            <ScrollReveal delay={0.2}>
              <div className="group relative rounded-lg border border-navy-700 bg-navy-900 p-8 transition-colors duration-300 hover:border-gold-500 overflow-hidden h-full">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <NetworkIcon className="text-gold-400 mb-4" />
                <h3 className="font-display text-2xl font-bold uppercase text-slate-100 tracking-wide-display">
                  {t.home.products.card2.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-slate-500 tracking-wider-mono">
                  {t.home.products.card2.specs}
                </p>
                <p className="mt-4 font-body text-slate-400 leading-relaxed">
                  {t.home.products.card2.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {t.home.products.card2.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm font-body text-slate-300"
                    >
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/framework/`}
                  className="mt-8 inline-flex items-center text-gold-400 font-display text-sm uppercase tracking-wide-display hover:text-gold-300 transition-colors duration-200"
                >
                  {t.home.products.card2.cta} &rarr;
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  SECTION 3 — Settori Target                                  */}
      {/* ============================================================ */}
      <section id="settori" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.home.sectors.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.sectors.title}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.home.sectors.items.map((sector, i) => (
              <ScrollReveal key={sector.title} delay={i * 0.08}>
                <div className="rounded-lg border border-navy-700 bg-navy-900 p-6 h-full">
                  <div className="text-gold-400 mb-3">
                    <SectorIcon icon={SECTORS[i]?.icon ?? ''} />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-slate-100 tracking-wide-display">
                    {sector.title}
                  </h3>
                  <p className="mt-2 font-body text-sm text-slate-400 leading-relaxed">
                    {sector.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SECTORS[i]?.tags.map((tag) => (
                      <ProductTag key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  SECTION 4 — Threat Model                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.home.threats.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.threats.title}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.home.threats.items.map((threat, i) => (
              <ScrollReveal key={threat.name} delay={i * 0.08}>
                <div className="rounded-lg border border-navy-700 bg-navy-900 p-6 border-l-4 border-l-danger-red h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <ThreatIcon />
                    <h3 className="font-display text-lg font-bold uppercase text-slate-100 tracking-wide-display">
                      {threat.name}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-slate-400 leading-relaxed">
                    {threat.vector}
                  </p>
                  <div className="mt-4 flex items-start gap-2">
                    <CheckIcon />
                    <p className="font-body text-sm text-success-green leading-relaxed">
                      {threat.countermeasure}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  SECTION 5 — Conformita CTA                                  */}
      {/* ============================================================ */}
      <section
        className="py-20 md:py-28"
        style={{
          background:
            'linear-gradient(180deg, #0d1321 0%, #131b2e 50%, #0d1321 100%)',
        }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionLabel className="justify-center">{t.home.compliance.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.compliance.title}
            </h2>
            <p className="mt-4 font-body text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t.home.compliance.subtitle}
            </p>

            <div className="mt-10">
              <Link
                href={`/${locale}/conformita/`}
                className="inline-flex items-center px-8 py-4 bg-danger-red text-white font-display font-bold uppercase text-base tracking-wide-display rounded hover:bg-red-700 transition-colors duration-200"
              >
                {t.home.compliance.cta} &rarr;
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {t.home.compliance.badges.map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-block font-mono text-xs uppercase tracking-wider-mono px-3 py-1.5 border border-navy-600 rounded text-slate-400"
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>

            <p className="mt-6 font-body text-xs text-slate-500">
              {t.home.compliance.note}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  SECTION 6 — Contatti                                        */}
      {/* ============================================================ */}
      <section id="contatti" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.home.contact.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.home.contact.title}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — Info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-slate-100 tracking-wide-display">
                    {t.home.contact.info.companyName}
                  </h3>
                  <p className="mt-1 font-body text-slate-400">
                    {t.home.contact.info.productLabel}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold-500 uppercase tracking-wider-mono w-12 shrink-0">
                      {t.home.contact.info.webLabel}
                    </span>
                    <a
                      href="https://www.aegida-systems.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-slate-300 hover:text-gold-400 transition-colors duration-200"
                    >
                      www.aegida-systems.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold-500 uppercase tracking-wider-mono w-12 shrink-0">
                      {t.home.contact.info.sedeLabel}
                    </span>
                    <span className="font-body text-slate-300">{t.home.contact.info.sedeValue}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold-500 uppercase tracking-wider-mono w-12 shrink-0">
                      {t.home.contact.info.pivaLabel}
                    </span>
                    <span className="font-body text-slate-300">IT14765811006</span>
                  </div>
                </div>

                <div className="mt-8 rounded-lg border border-navy-700 bg-navy-900 p-6">
                  <p className="font-body text-sm text-slate-400 leading-relaxed">
                    {t.home.contact.info.briefingNote}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
