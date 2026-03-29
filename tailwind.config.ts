import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B14',
        surface: 'rgba(255,255,255,0.04)',
        glass: 'rgba(255,255,255,0.08)',
        'glass-border': 'rgba(255,255,255,0.12)',
        primary: '#6366f1',
        'primary-end': '#8b5cf6',
        accent: '#06b6d4',
        'text-primary': '#f8fafc',
        'text-secondary': '#94a3b8',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'gradient-accent': 'linear-gradient(135deg, #06b6d4, #6366f1)',
        'gradient-dark': 'linear-gradient(180deg, #080B14 0%, #0d1120 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.05))',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '60px',
      },
      animation: {
        'aurora-1': 'aurora1 18s ease-in-out infinite',
        'aurora-2': 'aurora2 22s ease-in-out infinite',
        'aurora-3': 'aurora3 26s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        aurora1: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(5%, 8%) scale(1.1)', opacity: '0.8' },
          '66%': { transform: 'translate(-4%, 4%) scale(0.95)', opacity: '0.5' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.5' },
          '33%': { transform: 'translate(-6%, -5%) scale(1.05)', opacity: '0.7' },
          '66%': { transform: 'translate(4%, -8%) scale(1.1)', opacity: '0.6' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translate(8%, -4%) scale(0.9)', opacity: '0.6' },
          '66%': { transform: 'translate(-5%, 6%) scale(1.08)', opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3), 0 0 40px rgba(99,102,241,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.6), 0 0 80px rgba(99,102,241,0.2)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        'glass-lg': '0 16px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
        'glow-primary': '0 0 40px rgba(99,102,241,0.4)',
        'glow-accent': '0 0 40px rgba(6,182,212,0.4)',
        'glow-sm': '0 0 20px rgba(99,102,241,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
