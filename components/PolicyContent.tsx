'use client'

import ScrollReveal from '@/components/ScrollReveal'
import SectionLabel from '@/components/SectionLabel'

interface PolicySection {
  title: string
  content: string[]
}

interface PolicyContentProps {
  label: string
  title: string
  lastUpdated: string
  sections: PolicySection[]
}

export default function PolicyContent({
  label,
  title,
  lastUpdated,
  sections,
}: PolicyContentProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-12 md:pt-36 md:pb-16"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(26,37,64,0.7) 0%, transparent 60%), #0a0e1a',
        }}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel className="justify-center">{label}</SectionLabel>
            <h1 className="mt-4 text-center font-display text-3xl md:text-5xl font-bold uppercase text-slate-100 tracking-wide-display">
              {title}
            </h1>
            <p className="mt-4 text-center font-mono text-xs text-slate-500 tracking-wider-mono">
              {lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section) => (
              <ScrollReveal key={section.title}>
                <div className="rounded-lg border border-navy-700 bg-navy-900 p-6 md:p-8">
                  <h2 className="font-display text-lg md:text-xl font-bold uppercase text-slate-100 tracking-wide-display mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-body text-sm md:text-base text-slate-400 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
