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
        ink: '#05060a',
        panel: 'rgba(255,255,255,0.07)',
        cyan: '#72f1ff',
        violet: '#9d7cff',
        pink: '#ff72c8',
        mint: '#7dffbf',
      },
      boxShadow: {
        glow: '0 24px 90px rgba(114,241,255,0.18)',
      },
      borderRadius: {
        xxl: '2rem',
      },
    },
  },
  plugins: [],
}

export default config
