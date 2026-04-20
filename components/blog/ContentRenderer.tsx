'use client'

import type { ContentBlock } from '@/lib/blog/types'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink-300 shrink-0 mt-1">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i} className="text-ink-200 leading-[1.65]">
                {block.text}
              </p>
            )
          case 'heading':
            if (block.level === 2) {
              return (
                <h2 key={i} className="text-xl md:text-2xl font-display font-medium text-ink-100 mt-10 mb-3">
                  {block.text}
                </h2>
              )
            }
            if (block.level === 3) {
              return (
                <h3 key={i} className="text-lg font-display font-medium text-ink-100 mt-8 mb-2">
                  {block.text}
                </h3>
              )
            }
            return (
              <h4 key={i} className="text-base font-medium text-ink-100 mt-6 mb-2">
                {block.text}
              </h4>
            )
          case 'list':
            if (block.ordered) {
              return (
                <ol key={i} className="space-y-2 pl-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-ink-200 leading-[1.65]">
                      <span className="font-mono text-xs text-ink-400 mt-0.5 shrink-0">{j + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              )
            }
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-ink-200 leading-[1.65]">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            )
          case 'quote':
            return (
              <blockquote key={i} className="border-l-2 border-steel pl-5 py-2 my-6">
                <p className="text-ink-200 italic leading-[1.65]">{block.text}</p>
                {block.author && (
                  <p className="mt-2 font-mono text-xs text-ink-400">— {block.author}</p>
                )}
              </blockquote>
            )
          case 'callout': {
            const colors = {
              info: 'border-ink-300 bg-navy-card',
              warning: 'border-ink-300 bg-navy-card',
              tip: 'border-steel bg-navy-card',
            }
            return (
              <div key={i} className={`border-l-2 ${colors[block.variant]} rounded-r px-5 py-4 my-6`}>
                <p className="text-sm text-ink-200 leading-[1.65]">{block.text}</p>
              </div>
            )
          }
          default:
            return null
        }
      })}
    </div>
  )
}
