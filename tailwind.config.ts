import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './store/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb'
        }
      },
      boxShadow: {
        premium: '0 10px 30px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(59,130,246,0.15), 0 8px 24px rgba(59,130,246,0.2)'
      },
      backgroundImage: {
        'glass-light': 'linear-gradient(120deg, rgba(255,255,255,0.75), rgba(255,255,255,0.5))',
        'glass-dark': 'linear-gradient(120deg, rgba(15,23,42,0.5), rgba(15,23,42,0.35))'
      }
    }
  },
  plugins: []
};

export default config;
