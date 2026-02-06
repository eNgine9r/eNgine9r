import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f5ff',
          100: '#e0e8ff',
          200: '#c1d2ff',
          300: '#92b1ff',
          400: '#5d86ff',
          500: '#365fff',
          600: '#1f3ee6',
          700: '#1d33b8',
          800: '#1c2f92',
          900: '#1c2b73'
        }
      }
    }
  },
  plugins: []
};

export default config;
