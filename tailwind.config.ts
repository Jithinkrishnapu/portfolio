import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: {
          primary: '#0c0e12',
          secondary: '#111317',
          card: '#1e2024',
        },
        accent: {
          DEFAULT: '#a9fc03',
          hover: '#98e202',
          dark: '#87c902',
        },
        'brand-accent': '#a9fc03',
        surface: {
          DEFAULT: '#111317',
          variant: '#333539',
          bright: '#37393e',
          dim: '#111317',
        },
        'on-surface': {
          DEFAULT: '#e2e2e8',
          variant: '#c1caad',
        },
        'surface-container': {
          lowest: '#0c0e12',
          low: '#1a1c20',
          DEFAULT: '#1e2024',
          high: '#282a2e',
          highest: '#333539',
        },
        border: {
          DEFAULT: '#222222',
          light: '#333333',
        },
      },
    },
  },
  plugins: [],
}

export default config
