/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cosmic Vibe Theme
        'cosmic': {
          'night': '#1A237E',      // Primary: Indigo Night
          'violet': '#651FFF',     // Secondary: Electric Violet
          'cyan': '#00E5FF',       // Accent: Neon Cyan
          'dark': '#121212',       // Dark mode background
          'light': '#F5F5F5',      // Light mode background
          'success': '#4CAF50',    // Success green
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
