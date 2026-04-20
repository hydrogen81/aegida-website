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
          ink: '#0B1220',
          card: '#16202F',
          line: '#1F2C3F',
          deep: '#07101C',
        },
        ink: {
          100: '#E8ECF2',
          200: '#C7D0DE',
          300: '#8C9AB3',
          400: '#5E6B82',
        },
        steel: {
          DEFAULT: '#4A6583',
          hi: '#6B84A0',
        },
        semantic: {
          error: '#B8574F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '6px',
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
