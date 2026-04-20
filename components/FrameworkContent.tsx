'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'

export default function FrameworkContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const f = t.framework

  return (
    <main>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-20 pb-12 md:pt-28">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6">
            {f.hero.title}
          </h1>
          <p className="text-[17px] md:text-[19px] text-ink-200 leading-relaxed max-w-[720px]">
            {f.hero.tagline}
          </p>
        </div>
      </section>

      {/* 4 PARAGRAFI */}
      <section className="px-6 md:px-10 pb-16">
        <div className="max-w-[720px] mx-auto space-y-12">
          {[f.cosaE, f.perChi, f.stato, f.roadmap].map((blk, i) => (
            <div key={i}>
              <h2 className="text-[20px] md:text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">
                {blk.title}
              </h2>
              <p className="text-[16px] text-ink-200 leading-[1.65]">
                {blk.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA PILOT */}
      <section className="px-6 md:px-10 py-16 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {f.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed mb-8">
            {f.ctaFinale.body}
          </p>
          <Link
            href={`/${locale}/contatti/?motivo=framework-pilot`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {f.ctaFinale.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
