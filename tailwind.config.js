/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        card: '#0F172A',
        secondary: '#1E293B',
        accentBlue: '#3B82F6',
        accentCyan: '#06B6D4',
        offwhite: '#F8FAFC',
        muted: '#94A3B8',
        success: '#00FF88',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        scan: 'scan 4s linear infinite',
        blink: 'blink 1.2s steps(2, start) infinite',
        flicker: 'flicker 3s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          to: { visibility: 'hidden' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.6' },
          '94%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
