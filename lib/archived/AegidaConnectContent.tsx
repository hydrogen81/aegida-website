'use client'

import Link from 'next/link'
import ScrollReveal from '@/lib/archived/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'
import ShieldSVG from '@/lib/archived/ShieldSVG'
import { useTranslations, useLocale } from '@/lib/i18n/context'

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function LinuxIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.868.07 1.178-.29 1.316-.915.135-.6-.182-.882-.416-1.332-.057-.116-.136-.198-.2-.268-.497-.534-.89-.738-.855-1.661.039-.936.29-1.707.431-2.541.054-.336-.03-.468-.144-.602-.084-.101-.186-.134-.238-.268-.21-.505.36-1.68.36-2.77 0-1.2-.404-2.539-1.04-3.568-.635-1.072-1.476-1.944-2.082-2.922-.603-.98-.87-2.043-.87-3.34C15.74 3.928 14.028 0 12.504 0zm.282 1.396c.966.037 1.722 1.11 1.862 2.693.093 1.456-.17 2.636-.85 3.713-.696 1.07-1.56 1.98-2.16 3.003-.593 1.018-.93 2.168-.93 3.225 0 .87-.272 1.836-.217 2.618.026.36.078.54.067.791-.03.644.092.97.389 1.33-.007.011-.013.024-.02.035-.458.625-.96.854-1.59.985-.632.13-1.414-.005-2.242-.43-.828-.43-1.878-.54-2.67-.707-.399-.08-.728-.2-.868-.377-.134-.178-.166-.468.058-1.003.208-.504.217-.97.14-1.466-.074-.463-.18-.9-.244-1.33-.128-.86-.039-1.578.195-2.298.516-1.586 1.627-3.153 2.557-4.261.867-1.163 1.116-2.203 1.202-3.4.042-.611.118-1.253.369-1.75.254-.504.646-.84 1.219-1.016.15-.048.311-.073.479-.073h.047z" />
    </svg>
  )
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

function Divider() {
  return <hr className="divider mx-auto max-w-7xl" />
}

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function AegidaConnectContent() {
  const t = useTranslations()
  const { locale } = useLocale()

  return (
    <main className="min-h-screen bg-navy-950 text-slate-200">

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(34,197,94,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <ScrollReveal>
            <ShieldSVG size={72} className="mx-auto mb-8" animated />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <span className="inline-block font-mono text-xs uppercase tracking-wider-mono px-3 py-1.5 rounded border border-success-green/50 text-success-green mb-6">
              {t.aegidaConnect.hero.badge}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
              {t.aegidaConnect.hero.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-display text-lg md:text-xl text-success-green uppercase tracking-wide mb-6">
              {t.aegidaConnect.hero.tagline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-base md:text-lg leading-relaxed text-slate-400 max-w-3xl mx-auto mb-10">
              {t.aegidaConnect.hero.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center" style={{ gap: '1rem' }}>
              <button
                disabled
                className="inline-flex items-center px-7 py-3.5 bg-success-green/30 text-success-green/60 font-display font-bold uppercase text-sm tracking-wide-display rounded cursor-not-allowed border border-success-green/20"
              >
                <LinuxIcon className="mr-2 w-5 h-5" />
                {t.aegidaConnect.download.comingSoon}
              </button>
              <Link
                href={`/${locale}/privacy-phone/`}
                className="inline-flex items-center px-7 py-3.5 border border-gold-500 text-gold-400 font-display font-bold uppercase text-sm tracking-wide-display rounded hover:bg-gold-500/10 transition-colors duration-200"
              >
                {t.aegidaConnect.hero.ctaLearnMore}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  FEATURES                                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.aegidaConnect.features.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.aegidaConnect.features.title}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.aegidaConnect.features.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="rounded-lg border border-navy-700 bg-navy-900 p-6 h-full">
                  <h3 className="font-display text-lg font-bold uppercase text-slate-100 tracking-wide-display mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  SECURITY / CRYPTO STACK                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.aegidaConnect.security.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.aegidaConnect.security.title}
            </h2>
            <p className="mt-4 font-body text-lg text-slate-400 leading-relaxed max-w-3xl">
              {t.aegidaConnect.security.description}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.aegidaConnect.security.items.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.06}>
                <div className="rounded-lg border border-navy-700 bg-navy-900 p-5">
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-wider-mono mb-1">
                    {item.label}
                  </p>
                  <p className="font-display text-lg font-bold text-success-green tracking-wide-display">
                    {item.value}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  COMPARISON TABLE                                            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>{t.aegidaConnect.comparison.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.aegidaConnect.comparison.title}
            </h2>
            <p className="mt-4 font-body text-lg text-slate-400 leading-relaxed max-w-3xl">
              {t.aegidaConnect.comparison.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-navy-700">
                    {t.aegidaConnect.comparison.headers.map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 font-display text-sm uppercase tracking-wide-display text-gold-400"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.aegidaConnect.comparison.rows.map((row) => (
                    <tr key={row.feature} className="border-b border-navy-800">
                      <td className="px-4 py-3 font-body text-sm text-slate-300">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-slate-400">
                        <span className={row.connect === 'No' || row.connect === 'Nein' ? 'text-slate-600' : 'text-success-green'}>
                          {row.connect}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gold-400">
                        {row.privacyPhone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 font-body text-sm text-slate-500 leading-relaxed">
              {t.aegidaConnect.comparison.note}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  DOWNLOAD                                                    */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionLabel className="justify-center">{t.aegidaConnect.download.sectionLabel}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.aegidaConnect.download.title}
            </h2>
            <p className="mt-4 font-body text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t.aegidaConnect.download.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 rounded-lg border border-navy-700 bg-navy-900 p-8">
              <LinuxIcon className="text-success-green mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold uppercase text-slate-100 tracking-wide-display mb-2">
                {t.aegidaConnect.download.linuxLabel}
              </h3>
              <p className="font-body text-sm text-slate-400 mb-6">
                {t.aegidaConnect.download.linuxDescription}
              </p>
              <button
                disabled
                className="inline-flex items-center px-8 py-4 bg-success-green/20 text-success-green/60 font-display font-bold uppercase text-base tracking-wide-display rounded cursor-not-allowed border border-success-green/20"
              >
                {t.aegidaConnect.download.comingSoon}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Divider />

      {/* ============================================================ */}
      {/*  UPSELL CTA                                                  */}
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
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {t.aegidaConnect.cta.title}
            </h2>
            <p className="mt-4 font-body text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t.aegidaConnect.cta.description}
            </p>
            <div className="mt-10">
              <Link
                href={`/${locale}/privacy-phone/`}
                className="inline-flex items-center px-8 py-4 bg-gold-500 text-navy-950 font-display font-bold uppercase text-base tracking-wide-display rounded hover:bg-gold-400 transition-colors duration-200"
              >
                {t.aegidaConnect.cta.button} &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
