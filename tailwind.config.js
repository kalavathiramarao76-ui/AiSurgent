/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aiblue: '#0ea5e9',
        aipurple: '#8b5cf6',
        aiorange: '#f97316',
        aigreen: '#10b981',
        aiindigo: '#6366f1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.7s ease-out',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    'bg-aiblue/5', 'bg-aiblue/10', 'bg-aipurple/5', 'bg-aipurple/10', 'bg-aiorange/5', 'bg-aiorange/10', 'bg-aigreen/10', 'bg-aiindigo/10',
    'border-aiblue/20', 'border-aiblue/40', 'border-aipurple/20', 'border-aipurple/40', 'border-aiorange/20', 'border-aiorange/40', 'border-aigreen/20', 'border-aiindigo/20',
    'text-aiblue', 'text-aipurple', 'text-aiorange', 'text-aigreen', 'text-aiindigo',
    'hover-glow-blue', 'hover-glow-purple', 'hover-glow-orange', 'hover-glow-green',
  ],
  plugins: [],
}
