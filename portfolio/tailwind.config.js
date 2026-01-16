/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: "#0aff0a",   // Terminal green
          cyan: "#00f3ff",    // Holographic blue
          purple: "#bc13fe",  // Neon purple
          black: "#050505",   // Void black
          gray: "#1a1a1a",    // Panel gray
        }
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'], // Fallback for now, can add Google Font later
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
