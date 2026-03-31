interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3
  className?: string
}

export default function FeatureGrid({
  features,
  columns = 3,
  className = '',
}: FeatureGridProps) {
  const colsClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${colsClass} gap-5 ${className}`}>
      {features.map((feat, i) => (
        <div
          key={i}
          className="rounded border border-navy-700 bg-navy-900 p-6 transition-colors duration-200 hover:border-navy-600"
        >
          {feat.icon && (
            <div className="mb-4 text-gold-500">{feat.icon}</div>
          )}
          <h3 className="font-display text-base font-bold text-slate-100 uppercase tracking-wide mb-2">
            {feat.title}
          </h3>
          <p className="font-body text-sm leading-relaxed text-slate-400">
            {feat.description}
          </p>
        </div>
      ))}
    </div>
  )
}
