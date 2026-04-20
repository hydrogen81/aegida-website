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
        <h3 className="font-mono text-[11px] tracking-wide uppercase text-ink-100 bg-navy-card px-4 py-3 border border-navy-line rounded-t">
          {title}
        </h3>
      )}
      <div className={`overflow-x-auto border border-navy-line ${title ? 'border-t-0' : 'rounded'}`}>
        <table className="w-full text-left">
          <tbody>
            {specs.map((spec, i) => (
              <tr
                key={i}
                className="border-b border-navy-line last:border-b-0"
              >
                <td className="font-mono text-xs text-ink-300 px-4 py-3 font-medium w-1/2">
                  {spec.label}
                </td>
                <td className="text-sm text-ink-200 px-4 py-3">
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
