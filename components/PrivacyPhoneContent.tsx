'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'
import GatedDownload from '@/components/GatedDownload'

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function PrivacyPhoneContent() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()

  return (
    <main>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="px-6 md:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-[36px] md:text-[48px] font-display font-medium leading-[1.1] tracking-[-0.015em] text-ink-100 mb-4">
            {t.privacyPhone.hero.title}
          </h1>
          <p className="text-[17px] md:text-[19px] text-ink-200 leading-relaxed max-w-[720px] mb-4">
            {t.privacyPhone.hero.tagline}
          </p>
          <p className="font-mono text-[13px] text-steel-hi tracking-wide mb-4">
            {t.privacyPhone.hero.claim}
          </p>
          <p className="font-mono text-[11px] tracking-[0.18em] text-steel-hi mt-3 mb-8">
            PROGETTATO E COSTRUITO IN ITALIA
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`/${locale}/#contatti`}
              className="bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm border border-ink-100 hover:bg-ink-200 hover:border-ink-200 transition-colors"
            >
              {t.privacyPhone.hero.ctaPrimary}
            </a>
            <GatedDownload
              documentSlug="white-paper-ufed"
              label="Scarica il white paper UFED"
              variant="secondary"
            />
          </div>
          <div className="mt-4">
            <GatedDownload
              documentSlug="privacy-phone-dossier"
              label="Oppure scarica il dossier commerciale"
              variant="link"
              className="text-[13px] text-ink-300 hover:text-ink-100"
            />
          </div>
        </div>
      </section>

      <div className="border-t border-navy-line" />

      {/* ============================================================ */}
      {/*  COS'E                                                       */}
      {/* ============================================================ */}
      <section id="cosa-e" className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
            {t.privacyPhone.cosaE.label}
          </div>
          <p className="text-[16px] md:text-[17px] leading-[1.65] text-ink-200 max-w-[720px]">
            {t.privacyPhone.cosaE.body}
          </p>
        </div>
      </section>

      <div className="border-t border-navy-line" />

      {/* ============================================================ */}
      {/*  COSA INCLUDE                                                */}
      {/* ============================================================ */}
      <section id="cosa-include" className="px-6 md:px-10 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
            {t.privacyPhone.cosaInclude.label}
          </div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-8 tracking-[-0.01em]">
            {t.privacyPhone.cosaInclude.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-[1px] bg-navy-line border border-navy-line">
            {t.privacyPhone.cosaInclude.items.map((item, i) => (
              <div key={item.key} className="bg-navy-ink p-7">
                <div className="font-mono text-[12px] text-ink-400 tracking-[0.15em] mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-300 leading-[1.55]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TEMPEST                                                     */}
      {/* ============================================================ */}
      <section className="px-6 md:px-10 py-20 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">METODOLOGIA COMPLEMENTARE</div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-5 tracking-[-0.01em]">
            {t.privacyPhone.tempest.title}
          </h2>
          <p className="text-[16px] text-ink-200 leading-[1.65] max-w-[720px]">
            {t.privacyPhone.tempest.body}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PROOF — UFED FORENSIC TEST                                  */}
      {/* ============================================================ */}
      <section id="proof" className="px-6 md:px-10 py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3 text-center">
            {t.privacyPhone.proof.sectionLabel}
          </div>
          <h2 className="text-[24px] md:text-[32px] font-display font-medium text-ink-100 text-center mb-6 tracking-[-0.01em]">
            {t.privacyPhone.proof.title}
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink-200 max-w-[720px] mx-auto text-center mb-12">
            {t.privacyPhone.proof.intro}
          </p>

          {/* Test card */}
          <div className="rounded border border-navy-line bg-navy-card p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: t.privacyPhone.proof.testCard.operator, value: t.privacyPhone.proof.testCard.operatorValue },
                { label: t.privacyPhone.proof.testCard.software, value: t.privacyPhone.proof.testCard.softwareValue },
                { label: t.privacyPhone.proof.testCard.date, value: t.privacyPhone.proof.testCard.dateValue },
                { label: t.privacyPhone.proof.testCard.duration, value: t.privacyPhone.proof.testCard.durationValue },
                { label: t.privacyPhone.proof.testCard.device, value: t.privacyPhone.proof.testCard.deviceValue },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-ink-100 leading-snug">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.privacyPhone.proof.timeline.map((step, i) => (
              <div key={i} className="rounded border border-navy-line bg-navy-card overflow-hidden h-full flex flex-col">
                <div className="relative bg-navy-deep border-b border-navy-line">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-auto border border-navy-line rounded"
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-wider text-ink-400 bg-navy-deep/80 px-2 py-1 rounded"
                  >
                    {'AEGIDA · PROOF'}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="font-mono text-xs uppercase tracking-wider text-ink-400 mb-3">
                    {step.time}
                  </p>
                  <p className="text-sm text-ink-200 leading-relaxed flex-1">
                    {step.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 rounded border-l-4 border-steel bg-navy-card p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-300 mb-3">
              {t.privacyPhone.proof.conclusionLabel}
            </p>
            <p className="text-[16px] leading-relaxed text-ink-100">
              {t.privacyPhone.proof.conclusionText}
            </p>
          </div>

          {/* Proof disclaimer */}
          <p className="text-xs text-ink-400 italic leading-relaxed mt-6 max-w-[720px] mx-auto text-center">
            {t.privacyPhone.proof.disclaimer}
          </p>
        </div>
      </section>

      <div className="border-t border-navy-line" />

      {/* ============================================================ */}
      {/*  PRICING                                                     */}
      {/* ============================================================ */}
      <section id="pricing" className="px-6 md:px-10 py-20 bg-navy-deep border-t border-navy-line">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
            {t.privacyPhone.pricing.label}
          </div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-8 tracking-[-0.01em]">
            {t.privacyPhone.pricing.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {t.privacyPhone.pricing.packages.map((p) => (
              <div
                key={p.name}
                className={`bg-navy-card border rounded p-8 ${
                  p.highlighted ? 'border-ink-300' : 'border-navy-line'
                }`}
              >
                <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2">{p.name}</h3>
                <div className="text-[32px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">{p.price}</div>
                <p className="text-sm text-ink-300 leading-[1.55]">{p.description}</p>
              </div>
            ))}
          </div>
          {t.privacyPhone.pricing.business ? (
            <div className="mt-10 p-6 border-l-2 border-steel">
              <h3 className="text-[16px] font-medium text-ink-100 mb-2">{t.privacyPhone.pricing.business.title}</h3>
              <p className="text-sm text-ink-300 leading-[1.55] mb-3 max-w-[720px]">{t.privacyPhone.pricing.business.body}</p>
              <Link href={`/${locale}/contatti/`} className="text-[13px] text-ink-100 border-b border-current pb-0.5">
                {t.privacyPhone.pricing.business.cta}
              </Link>
            </div>
          ) : null}
          <div className="mt-10 pt-10 border-t border-navy-line">
            <p className="text-sm text-ink-300 mb-3">Vuoi valutare il Privacy Phone offline?</p>
            <GatedDownload
              documentSlug="privacy-phone-dossier"
              label="Scarica il dossier completo (PDF, 9 pagine)"
              variant="link"
              className="text-[14px] text-ink-100"
            />
          </div>
        </div>
      </section>

      <div className="border-t border-navy-line" />

      {/* ============================================================ */}
      {/*  METODOLOGIA                                                 */}
      {/* ============================================================ */}
      <section id="metodologia" className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.2em] text-steel-hi mb-3">
            {t.privacyPhone.metodologia.label}
          </div>
          <h2 className="text-[24px] md:text-[28px] font-display font-medium text-ink-100 mb-6 tracking-[-0.01em]">
            {t.privacyPhone.metodologia.title}
          </h2>
          <p className="text-[16px] leading-[1.65] text-ink-200 max-w-[720px]">
            {t.privacyPhone.metodologia.body}
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  DISCLAIMER                                                  */}
      {/* ============================================================ */}
      <div className="border-t border-navy-line pt-8 mt-0 px-6 md:px-10 pb-8">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-xs text-ink-400 italic leading-relaxed">
            {t.privacyPhone.disclaimer.text}
          </p>
        </div>
      </div>

      <div className="border-t border-navy-line" />

      {/* ============================================================ */}
      {/*  CTA FINALE                                                  */}
      {/* ============================================================ */}
      <section id="cta-finale" className="px-6 md:px-10 py-16 md:py-20 bg-navy-deep">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-display font-medium text-ink-100 mb-4 tracking-[-0.01em]">
            {t.privacyPhone.ctaFinale.title}
          </h2>
          <p className="text-[16px] text-ink-300 leading-relaxed max-w-[640px] mb-8">
            {t.privacyPhone.ctaFinale.body}
          </p>
          <a
            href={`/${locale}/#contatti`}
            className="inline-block bg-ink-100 text-navy-ink text-sm font-medium px-[22px] py-[13px] rounded-sm hover:bg-ink-200 transition-colors"
          >
            {t.privacyPhone.ctaFinale.cta}
          </a>
        </div>
      </section>

    </main>
  )
}
