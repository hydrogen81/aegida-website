interface ComparisonTableProps {
  headers: string[]
  rows: Array<{ label: string; values: (boolean | string)[] }>
  highlightColumn?: number
  className?: string
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-label="Sì"
      role="img"
    >
      <circle cx="9" cy="9" r="8" fill="rgba(34,197,94,0.12)" />
      <path
        d="M5.5 9.5L7.5 11.5L12.5 6.5"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-label="No"
      role="img"
    >
      <circle cx="9" cy="9" r="8" fill="rgba(148,163,184,0.08)" />
      <path
        d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function ComparisonTable({
  headers,
  rows,
  highlightColumn,
  className = '',
}: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto border border-navy-line rounded ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="bg-navy-card">
            {headers.map((header, colIdx) => {
              const isHighlight = highlightColumn !== undefined && colIdx === highlightColumn
              return (
                <th
                  key={colIdx}
                  className={`px-4 py-3 text-left font-mono text-[11px] tracking-[0.15em] uppercase text-ink-300 border-b border-navy-line ${
                    isHighlight ? 'border-l-2 border-l-steel' : ''
                  } ${colIdx !== 0 ? 'text-center' : ''}`}
                >
                  {isHighlight ? (
                    <span className="text-ink-100 font-medium">{header}</span>
                  ) : header}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="border-b border-navy-line last:border-b-0 hover:bg-navy-card/30"
            >
              <td className="px-4 py-3 border-b border-navy-line text-sm text-ink-200 align-top">
                {row.label}
              </td>
              {row.values.map((val, colIdx) => {
                const isHighlight =
                  highlightColumn !== undefined && colIdx + 1 === highlightColumn
                return (
                  <td
                    key={colIdx}
                    className={`px-4 py-3 border-b border-navy-line text-sm text-ink-200 align-top text-center ${
                      isHighlight ? 'border-l-2 border-l-steel text-ink-100 font-medium' : ''
                    }`}
                  >
                    {typeof val === 'boolean' ? (
                      <span className="inline-flex justify-center">
                        {val ? <CheckIcon /> : <CrossIcon />}
                      </span>
                    ) : (
                      <span className="font-mono text-sm">
                        {val}
                      </span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
