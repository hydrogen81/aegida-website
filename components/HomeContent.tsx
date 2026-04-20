'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'
import BlogStrip from '@/components/BlogStrip'

export default function HomeContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const home = t.home

  return (
    <main>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[12px] tracking-[0.18em] text-steel-hi mb-6">
            TEST FORENSE · 17 APRILE 2026
          </div>
          <h1 className="text-[32px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6 max-w-[900px]">
            {home.hero.title}
          </h1>
          <p className="text-[15px] md:text-[17px] text-ink-300 leading-relaxed max-w-[640px] mb-9">
            {home.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contatti/`}
              className="bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 hover:border-ink-200 transition-colors"
            >
              {home.hero.ctaPrimary}
            </Link>
            <a
              href="/downloads/aegida-privacy-phone-test-ufed-2026-04-17.pdf"
              className="text-ink-100 text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-400 hover:border-ink-200 transition-colors"
            >
              {home.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-navy-line">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-5 flex flex-wrap gap-x-12 gap-y-2 font-mono text-[11px] md:text-[12px] tracking-wide text-ink-300">
          <span><b className="text-ink-100 font-medium">Strumento</b> · Cellebrite UFED 10.8.0.322 + Turbo Link</span>
          <span><b className="text-ink-100 font-medium">Modalità</b> · BFU + AFU</span>
          <span><b className="text-ink-100 font-medium">Esito</b> · 0 dati utente estratti</span>
          <span><b className="text-ink-100 font-medium">Operatore</b> · IMCST certificato · società terza</span>
        </div>
      </section>

      {/* ISTITUZIONALE */}
      <section className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">CHI SIAMO</div>
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-ink-200 max-w-[720px]">
            {home.istituzionale.body}
          </p>
        </div>
      </section>

      {/* LINEA PRODOTTI (asimmetrica 2:1) */}
      <section className="px-6 md:px-10 pb-16 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[22px] md:text-[24px] font-display font-medium text-ink-100 mb-6 tracking-[-0.01em]">
            {home.prodotti.label}
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {/* Privacy Phone (2/3) */}
            <Link
              href={`/${locale}/privacy-phone/`}
              className="md:col-span-2 bg-navy-card border border-navy-line rounded p-8 hover:border-ink-400 transition-colors flex flex-col justify-between min-h-[220px] group"
            >
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-3">
                  FLAGSHIP · 2026
                </div>
                <h3 className="text-[22px] font-display font-medium text-ink-100 mb-2.5 tracking-[-0.01em]">
                  {home.prodotti.privacyPhone.name}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed max-w-[460px]">
                  {home.prodotti.privacyPhone.claim}
                </p>
              </div>
              <span className="text-[13px] text-ink-100 mt-5 border-b border-current pb-0.5 self-start">
                {home.prodotti.privacyPhone.cta}
              </span>
            </Link>

            {/* Framework (1/3) */}
            <Link
              href={`/${locale}/framework/`}
              className="bg-navy-card border border-navy-line rounded p-8 hover:border-ink-400 transition-colors flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-3">
                  IN PREPARAZIONE · 2027–2028
                </div>
                <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2.5 tracking-[-0.01em]">
                  {home.prodotti.framework.name}
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">
                  {home.prodotti.framework.claim}
                </p>
              </div>
              <span className="text-[13px] text-ink-100 mt-5 border-b border-current pb-0.5 self-start">
                {home.prodotti.framework.cta}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG STRIP */}
      <BlogStrip />

      {/* PROOF PREVIEW */}
      <section className="px-6 md:px-10 py-16 md:py-20 border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
            {home.proofPreview.label}
          </div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-5 tracking-[-0.01em]">
            {home.proofPreview.title}
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink-200 max-w-[720px] mb-6">
            {home.proofPreview.body}
          </p>
          <Link
            href={`/${locale}/privacy-phone/#proof`}
            className="text-[14px] text-ink-100 border-b border-current pb-0.5"
          >
            {home.proofPreview.cta}
          </Link>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 md:px-10 py-16 md:py-20 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {home.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed max-w-[640px] mb-8">
            {home.ctaFinale.subtitle}
          </p>
          <Link
            href={`/${locale}/contatti/`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {home.ctaFinale.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
