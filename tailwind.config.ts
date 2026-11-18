import type { Config } from 'tailwindcss'

const config: Config = {
  safelist: ['tc-alert-error', 'tc-alert-warning'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        canvas: {
          DEFAULT: '#f1f5f9',
          subtle: '#e8eef5',
        },
        ink: {
          DEFAULT: '#0f172a',
          muted: '#475569',
          faint: '#64748b',
        },
        accent: {
          DEFAULT: '#c2410c',
          soft: '#fff7ed',
          border: '#fdba74',
        },
      },
      fontSize: {
        'display': ['1.75rem', { lineHeight: '2.1rem', fontWeight: '700' }],
        'title': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6rem' }],
        'caption': ['0.875rem', { lineHeight: '1.35rem' }],
        'label': ['0.75rem', { lineHeight: '1.1rem', fontWeight: '600', letterSpacing: '0.06em' }],
      },
      borderRadius: {
        card: '1rem',
        panel: '0.75rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(15 23 42 / 0.05), 0 8px 24px -8px rgb(30 64 175 / 0.15)',
        elevated: '0 12px 40px -12px rgb(15 23 42 / 0.22)',
      },
      maxWidth: {
        site: '72rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-panel': 'linear-gradient(145deg, #eff6ff 0%, #f8fafc 55%, #e0f2fe 100%)',
      },
      animation: {
        'slide-down': 'slide-down 0.3s ease-out',
        'install-backdrop-in': 'install-backdrop-in 0.2s ease-out',
        'install-modal-in': 'install-modal-in 0.28s ease-out',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'install-backdrop-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'install-modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}

export default config