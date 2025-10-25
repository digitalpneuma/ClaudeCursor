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
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 229, 255, 0.5)' },
          '50%': { opacity: '.8', boxShadow: '0 0 40px rgba(101, 31, 255, 0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #1A237E 0%, #651FFF 100%)',
        'gradient-cyan-violet': 'linear-gradient(135deg, #00E5FF 0%, #651FFF 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 229, 255, 0.5)',
        'glow-violet': '0 0 20px rgba(101, 31, 255, 0.5)',
        'glow-green': '0 0 20px rgba(76, 175, 80, 0.5)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
