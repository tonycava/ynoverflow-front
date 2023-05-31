/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.js.html', './src/**/*.{svelte,js,ts}', './src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      keyframes: {
        scaleZeroToOne: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' }
        },
        scaleOneToZero: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        },
        dotFadeOut: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(24px, 0)' }
        }
      },
      animation: {
        scaleZeroToOne: 'scaleZeroToOne 0.6s infinite',
        scaleOneToZero: 'scaleOneToZero 0.6s infinite',
        dotFadeOut: 'dotFadeOut 0.6s infinite'
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'primary-text': 'var(--color-text-primary)',
        'secondary-text': 'var(--color-text-secondary)'
      },
      height: {
        'screen-minus-topbar': 'calc(100vh - 3rem)'
      },
      fontFamily: {
        ubuntu: ['ubuntu'],
        'ubuntu-bold': ['ubuntu-bold'],
        'poppins-bold': ['poppins-bold'],
        'poppins-medium': ['poppins-medium'],
        'poppins-regular': ['poppins-regular'],
        'poppins-light': ['poppins-light'],
        'popins-thin': ['poppins-thin']
      }
    }
  },
  plugins: []
};