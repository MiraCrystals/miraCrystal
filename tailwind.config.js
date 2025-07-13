/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a3b5a3',
          400: '#7a947a',
          500: '#5a7a5a',
          600: '#456145',
          700: '#374d37',
          800: '#2d3f2d',
          900: '#263426',
        },
        earth: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e6e1d6',
          300: '#d5cdb8',
          400: '#c0b394',
          500: '#a89876',
          600: '#8f7f5f',
          700: '#756650',
          800: '#625544',
          900: '#54493b',
        },
        gold: {
          50: '#fffef7',
          100: '#fffbeb',
          200: '#fef3c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        mystic: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'handwritten': ['Caveat', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'spiral': 'spiral 15s linear infinite',
        'chakra-spin': 'chakra-spin 20s linear infinite',
        'aura': 'aura 4s ease-in-out infinite',
        'mist': 'mist 8s ease-in-out infinite',
        'feather': 'feather 12s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'typewriter': 'typewriter 4s steps(40) 1s 1 normal both',
        'blink': 'blink 1s infinite',
        'letter-float': 'letter-float 0.6s ease-out forwards',
        'signature': 'signature 3s ease-in-out forwards',
        'mantra': 'mantra 0.8s ease-in-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(90, 122, 90, 0.3), 0 0 40px rgba(90, 122, 90, 0.1)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(90, 122, 90, 0.6), 0 0 60px rgba(90, 122, 90, 0.2)',
            filter: 'brightness(1.1)'
          },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100px) translateY(0px)' },
          '100%': { transform: 'translateX(calc(100vw + 100px)) translateY(-50px)' },
        },
        spiral: {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
        'chakra-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        aura: {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)',
            filter: 'blur(20px)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'scale(1.2)',
            filter: 'blur(30px)'
          },
        },
        mist: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '50%': { opacity: '0.7', transform: 'translateX(0px)' },
          '100%': { opacity: '0', transform: 'translateX(50px)' },
        },
        feather: {
          '0%': { 
            transform: 'translateY(100px) rotate(0deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '0.8'
          },
          '100%': { 
            transform: 'translateY(-100px) rotate(360deg)',
            opacity: '0'
          },
        },
        ripple: {
          '0%': { 
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(4)',
            opacity: '0'
          },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'letter-float': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(50px) scale(0.8)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0px) scale(1)'
          },
        },
        signature: {
          '0%': { 
            strokeDasharray: '0 100',
            opacity: '0'
          },
          '50%': { 
            strokeDasharray: '50 50',
            opacity: '0.7'
          },
          '100%': { 
            strokeDasharray: '100 0',
            opacity: '1'
          },
        },
        mantra: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0px) scale(1)'
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
    },
  },
  plugins: [],
}