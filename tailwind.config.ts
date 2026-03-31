import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a0e1a',
          900: '#0d1321',
          800: '#131b2e',
          700: '#1a2540',
          600: '#243055',
        },
        gold: {
          500: '#b8960c',
          400: '#d4ad0e',
          300: '#e8c840',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#22d3ee',
        },
        danger: {
          red: '#dc2626',
        },
        success: {
          green: '#22c55e',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-source-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        'wide-display': '0.05em',
        'wider-mono': '0.15em',
        'widest-mono': '0.25em',
      },
    },
  },
  plugins: [],
}
export default config
