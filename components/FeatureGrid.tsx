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
          className="bg-navy-card border border-navy-line rounded p-6 md:p-8"
        >
          {feat.icon && (
            <div className="mb-4 text-ink-300">{feat.icon}</div>
          )}
          <h3 className="text-[18px] font-display font-medium text-ink-100 mb-2.5">
            {feat.title}
          </h3>
          <p className="text-sm text-ink-300 leading-[1.55]">
            {feat.description}
          </p>
        </div>
      ))}
    </div>
  )
}
