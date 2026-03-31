interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap: 0 }}
    >
      <span
        className="block bg-gold-500 shrink-0"
        style={{
          width: 40,
          height: 1,
          marginRight: '0.75rem',
        }}
        aria-hidden="true"
      />
      <span
        className="font-mono text-gold-500 uppercase"
        style={{
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
        }}
      >
        {children}
      </span>
    </div>
  )
}
