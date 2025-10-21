import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
      colors: {
        coke: {
          red: '#F40009',
          'red-dark': '#C8102E',
          'red-darker': '#8B0000',
          white: '#FFFFFF',
          black: '#000000',
          silver: '#C0C0C0',
        },
        primary: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#F40009',
          600: '#C8102E',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bubble': 'bubble 3s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(244, 0, 9, 0.5)',
        'glow-lg': '0 0 40px rgba(244, 0, 9, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;