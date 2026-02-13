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
          primary: '#000000',
          secondary: '#0D0D0D',
          card: '#111111',
        },
        accent: {
          DEFAULT: '#00E6A7',
          hover: '#00C896',
          dark: '#00B386',
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
