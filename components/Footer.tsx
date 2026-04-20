'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from '@/lib/i18n/context'
import GatedDownload from '@/components/GatedDownload'

export default function Footer() {
  const { locale } = useParams() as { locale: string }
  const t = useTranslations()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep border-t border-navy-line px-6 md:px-10 pt-12 pb-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-8 border-b border-navy-line">
          <div>
            <div className="font-mono font-semibold tracking-[0.15em] text-[16px] text-ink-100 mb-3">AEGIDA</div>
            <p className="text-[13px] text-ink-300 leading-[1.55] max-w-[420px]">
              {f.istituzionale}
            </p>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400 mb-3">PRODOTTI</div>
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/privacy-phone/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.privacyPhone}</Link></li>
              <li><Link href={`/${locale}/framework/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.framework}</Link></li>
              <li><Link href={`/${locale}/chi-siamo/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.chiSiamo}</Link></li>
              <li><Link href={`/${locale}/blog/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.blog}</Link></li>
              <li><Link href={`/${locale}/contatti/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.nav.contatti}</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400 mb-3">MATERIALI</div>
            <ul className="space-y-2.5">
              <li>
                <GatedDownload
                  documentSlug="privacy-phone-dossier"
                  label="Dossier tecnico Privacy Phone"
                  variant="link"
                  className="text-[13px] text-ink-200 hover:text-ink-100"
                />
              </li>
              <li>
                <GatedDownload
                  documentSlug="framework-brochure"
                  label="Brochure Framework"
                  variant="link"
                  className="text-[13px] text-ink-200 hover:text-ink-100"
                />
              </li>
              <li>
                <GatedDownload
                  documentSlug="white-paper-ufed"
                  label="White paper UFED"
                  variant="link"
                  className="text-[13px] text-ink-200 hover:text-ink-100"
                />
              </li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-ink-400 mb-3">LEGALE</div>
            <ul className="space-y-2.5">
              <li><Link href={`/${locale}/privacy-policy/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.legale.privacyPolicy}</Link></li>
              <li><Link href={`/${locale}/cookie-policy/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.legale.cookiePolicy}</Link></li>
              <li><Link href={`/${locale}/conformita/`} className="text-[13px] text-ink-200 hover:text-ink-100">{f.legale.conformita}</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-5 flex flex-wrap justify-between gap-3 font-mono text-[11px] tracking-[0.12em] text-ink-400">
          <span>{f.copyright.replace('{year}', year.toString())}</span>
          <span>{f.payoff}</span>
        </div>
        <div className="pt-3 font-mono text-[10px] tracking-[0.08em] text-ink-400 opacity-60">
          Cellebrite, Google, Pixel, Tensor e GrapheneOS sono marchi dei rispettivi proprietari.
        </div>
      </div>
    </footer>
  )
}
