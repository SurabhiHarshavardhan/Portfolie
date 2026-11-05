/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#f5d78e',
          DEFAULT: '#c9a84c',
          dark: '#9e7c2f',
        },
        parchment: '#e8e0d4',
        charcoal: '#1a1a1a',
        ink: '#0d0d0d',
        muted: '#8a8070',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        elegant: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'floatBob 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        floatBob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(201, 168, 76, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
