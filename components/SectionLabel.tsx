interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`font-mono text-[11px] tracking-[0.2em] text-steel-hi ${className}`}>
      {children}
    </div>
  )
}
