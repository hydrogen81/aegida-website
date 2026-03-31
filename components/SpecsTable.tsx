interface Spec {
  label: string
  value: string
}

interface SpecsTableProps {
  specs: Spec[]
  title?: string
  className?: string
}

export default function SpecsTable({
  specs,
  title,
  className = '',
}: SpecsTableProps) {
  return (
    <div className={className}>
      {title && (
        <h3 className="font-display text-lg font-bold text-slate-100 uppercase tracking-wide mb-4">
          {title}
        </h3>
      )}
      <div className="overflow-x-auto rounded border border-navy-700">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-navy-700">
              <th className="font-mono text-xs uppercase tracking-wider text-gold-500 bg-navy-800 px-4 py-3">
                Specifica
              </th>
              <th className="font-mono text-xs uppercase tracking-wider text-gold-500 bg-navy-800 px-4 py-3">
                Valore
              </th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec, i) => (
              <tr
                key={i}
                className={`border-b border-navy-700 last:border-b-0 ${
                  i % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800'
                }`}
              >
                <td className="font-body text-sm text-slate-300 px-4 py-3">
                  {spec.label}
                </td>
                <td className="font-mono text-sm text-slate-200 px-4 py-3">
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
