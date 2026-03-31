interface Download {
  title: string
  description: string
  filename: string
}

interface DownloadSectionProps {
  downloads: Download[]
  className?: string
}

function PdfIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="4" y="2" width="24" height="28" rx="2" stroke="#b8960c" strokeWidth="1.5" fill="none" />
      <path d="M4 8h24" stroke="#1a2540" strokeWidth="1" />
      <text x="16" y="21" textAnchor="middle" fill="#b8960c" fontSize="8" fontFamily="monospace" fontWeight="bold">
        PDF
      </text>
    </svg>
  )
}

export default function DownloadSection({
  downloads,
  className = '',
}: DownloadSectionProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {downloads.map((dl) => (
        <div
          key={dl.filename}
          className="group rounded border border-navy-700 bg-navy-900 p-5 transition-colors duration-200 hover:border-gold-500"
        >
          <div className="flex items-start" style={{ gap: 0 }}>
            <div className="shrink-0" style={{ marginRight: '1rem' }}>
              <PdfIcon />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base font-semibold text-slate-100 uppercase tracking-wide mb-1">
                {dl.title}
              </h3>
              <p className="font-body text-sm text-slate-400 mb-3">
                {dl.description}
              </p>
              <a
                href={`/downloads/${dl.filename}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-gold-500 transition-colors duration-200 hover:text-gold-300"
                style={{ gap: 0 }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  style={{ marginRight: '0.5rem' }}
                >
                  <path
                    d="M7 1v9m0 0L3.5 6.5M7 10l3.5-3.5M2 12h10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
