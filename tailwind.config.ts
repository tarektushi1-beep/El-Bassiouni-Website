// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'eb-black': '#000000',
        'eb-red': '#DE0024',
        'eb-white': '#FFFFFF',
        'eb-gray': '#1a1a1a',
        'eb-light': '#f5f5f5',
      },
      fontFamily: {
        aspire: ['Aspire', 'Orbitron', 'sans-serif'],
        body: ['Somar Sans', 'Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
