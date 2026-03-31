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
      <circle cx="9" cy="9" r="8" fill="rgba(34,197,94,0.15)" />
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
      <circle cx="9" cy="9" r="8" fill="rgba(220,38,38,0.15)" />
      <path
        d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5"
        stroke="#dc2626"
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
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {headers.map((header, colIdx) => {
              const isHighlight = highlightColumn !== undefined && colIdx === highlightColumn
              return (
                <th
                  key={colIdx}
                  className={`font-mono text-xs uppercase tracking-wider px-4 py-3 border-b-2 ${
                    isHighlight
                      ? 'border-b-gold-500 bg-navy-800 text-gold-400'
                      : 'border-b-navy-700 bg-navy-900 text-slate-400'
                  } ${colIdx === 0 ? 'text-left' : 'text-center'}`}
                >
                  {header}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-navy-700 last:border-b-0 ${
                rowIdx % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'
              }`}
            >
              <td className="font-body text-sm text-slate-300 px-4 py-3">
                {row.label}
              </td>
              {row.values.map((val, colIdx) => {
                const isHighlight =
                  highlightColumn !== undefined && colIdx + 1 === highlightColumn
                return (
                  <td
                    key={colIdx}
                    className={`px-4 py-3 text-center ${
                      isHighlight ? 'bg-gold-500/5' : ''
                    }`}
                  >
                    {typeof val === 'boolean' ? (
                      <span className="inline-flex justify-center">
                        {val ? <CheckIcon /> : <CrossIcon />}
                      </span>
                    ) : (
                      <span className="font-mono text-sm text-slate-200">
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
