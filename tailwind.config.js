/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // Dark theme colors
        'dark-bg': '#0a192f',
        'dark-bg-secondary': '#112240',
        'dark-text': '#ccd6f6',
        'dark-text-secondary': '#8892b0',
        'dark-accent': '#64ffda',
        'dark-accent-secondary': '#00d4ff',
        
        // Light theme colors
        'light-bg': '#ffffff',
        'light-bg-secondary': '#f8fafc',
        'light-text': '#1a202c',
        'light-text-secondary': '#4a5568',
        'light-accent': '#3182ce',
        'light-accent-secondary': '#63b3ed',
        
        // Custom color palette
        'teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 4s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'slideInFromLeft': 'slideInFromLeft 0.8s ease-out',
        'slideInFromRight': 'slideInFromRight 0.8s ease-out',
        'slideInFromBottom': 'slideInFromBottom 0.8s ease-out',
        'slideInFromTop': 'slideInFromTop 0.5s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'blink': 'blink 1s infinite',
      },
      backgroundSize: {
        '300%': '300% 300%',
        '400%': '400% 400%',
      },
      boxShadow: {
        '4xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 30px rgba(100, 255, 218, 0.3)',
        'glow-lg': '0 0 50px rgba(100, 255, 218, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(100, 255, 218, 0.2)',
      },
      backdropBlur: {
        'xl': '20px',
        '2xl': '40px',
        '3xl': '60px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInFromLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInFromBottom: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInFromTop: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        gradient: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(100, 255, 218, 0.5)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(100, 255, 218, 0.8)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 5px rgba(100, 255, 218, 0.5)',
          },
          '50%': {
            'box-shadow': '0 0 20px rgba(100, 255, 218, 0.8)',
          },
        },
        typewriter: {
          'from': {
            width: '0',
          },
          'to': {
            width: '100%',
          },
        },
        blink: {
          '0%, 50%': {
            opacity: '1',
          },
          '51%, 100%': {
            opacity: '0',
          },
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
};