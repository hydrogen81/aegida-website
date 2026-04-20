'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'

export default function AboutContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const a = t.about

  return (
    <main>
      {/* HERO */}
      <section className="px-6 md:px-10 pt-20 pb-12 md:pt-28">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-6">
            {a.hero.title}
          </h1>
          <p className="text-[17px] md:text-[19px] text-ink-200 leading-relaxed max-w-[720px]">
            {a.hero.subtitle}
          </p>
        </div>
      </section>

      {/* SOCIETÀ + MISSIONE */}
      <section className="px-6 md:px-10 pb-12">
        <div className="max-w-[720px] mx-auto space-y-12">
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">LA SOCIETÀ</div>
            <h2 className="text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{a.societa.title}</h2>
            <p className="text-[16px] text-ink-200 leading-[1.65]">{a.societa.body}</p>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">LA MISSIONE</div>
            <h2 className="text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{a.missione.title}</h2>
            <p className="text-[16px] text-ink-200 leading-[1.65]">{a.missione.body}</p>
          </div>
        </div>
      </section>

      {/* COSA PRODUCIAMO */}
      <section className="px-6 md:px-10 py-16 border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">COSA PRODUCIAMO</div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-8 tracking-[-0.01em]">
            {a.cosaProduciamo.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {a.cosaProduciamo.items.map((item) => (
              <div key={item.name} className="bg-navy-card border border-navy-line rounded p-8">
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-3">{item.status}</div>
                <h3 className="text-[20px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{item.name}</h3>
                <p className="text-sm text-ink-300 leading-[1.55]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 md:px-10 py-16 border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">IL TEAM</div>
          <h2 className="text-[22px] font-display font-medium text-ink-100 mb-3 tracking-[-0.01em]">{a.team.title}</h2>
          <p className="text-[16px] text-ink-200 leading-[1.65] mb-8 max-w-[720px]">{a.team.body}</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {a.team.members.map((m) => (
              <div key={m.name} className="bg-navy-card border border-navy-line rounded p-6">
                <div className="font-mono text-[11px] tracking-[0.15em] text-steel-hi mb-2">{m.role}</div>
                <h3 className="text-[18px] font-display font-medium text-ink-100 tracking-[-0.01em]">{m.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="px-6 md:px-10 py-16 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {a.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed mb-8">{a.ctaFinale.body}</p>
          <Link
            href={`/${locale}/contatti/`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {a.ctaFinale.cta}
          </Link>
        </div>
      </section>
    </main>
  )
}
