'use client'

import { useTranslations } from '@/lib/i18n/context'
import liveThreats from '@/lib/threats-live.json'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface LiveThreat {
  date: string
  cve: string
  vendor: string
  product: string
  name: string
  ransomware: boolean
}

interface ThreatEntry {
  date: string
  title: string
  tag: string
  severity: 'critical' | 'high'
  url: string
}

/* ------------------------------------------------------------------ */
/*  Map live data to display format                                    */
/* ------------------------------------------------------------------ */

function mapLiveThreats(data: LiveThreat[]): ThreatEntry[] {
  return data.map((t) => ({
    date: t.date,
    title: `${t.vendor} ${t.product} — ${t.cve}`,
    tag: t.ransomware ? 'RANSOMWARE' : t.name.split(' ').slice(-2).join(' '),
    severity: t.ransomware ? 'critical' as const : 'high' as const,
    url: `https://nvd.nist.gov/vuln/detail/${t.cve}`,
  }))
}

/* ------------------------------------------------------------------ */
/*  Static fallback                                                    */
/* ------------------------------------------------------------------ */

const FALLBACK: ThreatEntry[] = [
  { date: '2024-06', title: 'Synnovis NHS — Qilin Ransomware', tag: 'RANSOMWARE', severity: 'critical', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
  { date: '2024-02', title: 'Change Healthcare — ALPHV/BlackCat', tag: 'RANSOMWARE', severity: 'critical', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
  { date: '2024-01', title: 'Volt Typhoon — Infrastructure Infiltration', tag: 'APT', severity: 'critical', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
  { date: '2024-03', title: 'XZ Utils — Supply Chain Backdoor', tag: 'SUPPLY CHAIN', severity: 'critical', url: 'https://nvd.nist.gov/vuln/detail/CVE-2024-3094' },
  { date: '2023-05', title: 'MOVEit Zero-Day — Cl0p Exploitation', tag: 'ZERO-DAY', severity: 'critical', url: 'https://nvd.nist.gov/vuln/detail/CVE-2023-34362' },
  { date: '2023-11', title: 'Danish Energy — SektorCERT Attack', tag: 'ICS/OT', severity: 'high', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
  { date: '2022-04', title: 'PIPEDREAM — ICS Malware Toolkit', tag: 'ICS/OT', severity: 'critical', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
  { date: '2021-05', title: 'Colonial Pipeline — DarkSide', tag: 'RANSOMWARE', severity: 'critical', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
  { date: '2020-12', title: 'SolarWinds SUNBURST — Supply Chain', tag: 'SUPPLY CHAIN', severity: 'critical', url: 'https://nvd.nist.gov/vuln/detail/CVE-2020-10148' },
]

/* ------------------------------------------------------------------ */
/*  Severity styling                                                   */
/* ------------------------------------------------------------------ */

const DOT_CLASS = { critical: 'bg-red-500', high: 'bg-amber-500' }
const TEXT_CLASS = { critical: 'text-red-400', high: 'text-amber-400' }
const TAG_CLASS = {
  critical: 'border-red-500/40 text-red-400',
  high: 'border-amber-500/40 text-amber-400',
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ThreatTicker() {
  const t = useTranslations()

  const isLive = (liveThreats as LiveThreat[]).length > 0
  const threats = isLive ? mapLiveThreats(liveThreats as LiveThreat[]) : FALLBACK

  // Duplicate for seamless infinite scroll
  const doubled = [...threats, ...threats]

  return (
    <div
      className="relative w-full overflow-hidden bg-navy-800 border-t border-b border-red-900/40"
      style={{ height: '44px' }}
    >
      {/* Fixed left label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center px-3 sm:px-5"
        style={{
          background: 'linear-gradient(90deg, #131b2e 80%, transparent 100%)',
          minWidth: '200px',
        }}
      >
        {/* Pulsing dot */}
        <span className="relative flex items-center justify-center mr-2" style={{ width: 10, height: 10 }}>
          <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${isLive ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLive ? 'bg-green-500' : 'bg-red-500'}`} />
        </span>
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest-mono text-red-400 whitespace-nowrap font-semibold">
          {t.home.threatTicker.label}
        </span>
        {isLive && (
          <span className="ml-2 font-mono text-[9px] uppercase tracking-wider-mono text-green-400 whitespace-nowrap">
            LIVE
          </span>
        )}
      </div>

      {/* Scrolling entries */}
      <div className="flex items-center h-full" style={{ paddingLeft: '220px' }}>
        <div
          className="flex items-center threat-ticker-track"
          onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused' }}
          onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running' }}
        >
          {doubled.map((threat, i) => (
            <a
              key={`${threat.title}-${i}`}
              href={threat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center whitespace-nowrap hover:opacity-80 transition-opacity duration-150 cursor-pointer"
              style={{ marginRight: '2rem' }}
            >
              {/* Severity dot */}
              <span
                className={`inline-block rounded-full mr-2 ${DOT_CLASS[threat.severity]}`}
                style={{ width: 6, height: 6, flexShrink: 0 }}
              />
              {/* Date */}
              <span className="font-mono text-[10px] text-slate-500 mr-2">
                {threat.date}
              </span>
              {/* Title */}
              <span className={`font-mono text-[11px] sm:text-xs font-medium mr-2 ${TEXT_CLASS[threat.severity]}`}>
                {threat.title}
              </span>
              {/* Tag badge */}
              <span className={`inline-block font-mono text-[9px] uppercase tracking-wider-mono px-1.5 py-0.5 rounded border ${TAG_CLASS[threat.severity]}`}>
                {threat.tag}
              </span>
              {/* Divider */}
              <span className="inline-block mx-3 text-navy-600 select-none" aria-hidden="true">
                {'//'}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(270deg, #131b2e 0%, transparent 100%)' }}
      />

      {/* Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes threatTickerScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .threat-ticker-track {
          display: flex;
          animation: threatTickerScroll 120s linear infinite;
          will-change: transform;
        }
      `}} />
    </div>
  )
}
