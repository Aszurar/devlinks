import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        0.375: '1.5px',
      },

      colors: {
        highlight: {
          light: 'rgba(0, 0, 0, 0.1)',
          dark: 'rgba(255, 255, 255, 0.2)',
        },
        stroke: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.5)',
        },
        surface: {
          dark: 'rgba(255, 255, 255, 0.1)',
          light: 'rgba(0, 0, 0, 0.05)',
          'hover-light': 'rgba(0, 0, 0, 0.01)',
          'hover-dark': 'rgba(255, 255, 255, 0.05)',
        },
        text: {
          light: 'rgba(255, 255, 255, 255)',
          dark: 'rgba(0, 0, 0, 0)',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.transition-200ms': {
          transition: 'all 0.2s ease',
        },
        '.animate-opacity': {
          'animation-timing-function': 'cubic-bezier(0.16, 1, 0.3, 1)',
          'will-change': 'transform, opacity',
        },
        '.background-dark-full': {
          'background-image': "url('imgs/background-dark.png')",
          'background-repeat': 'no-repeat',
          'background-position': 'top center',
          'background-size': 'cover',
        },
        '.background-light-full': {
          'background-image': "url('imgs/background-light.png')",
          'background-repeat': 'no-repeat',
          'background-position': 'top center',
          'background-size': 'cover',
        },
        '.background-mb-light-full': {
          'background-image': "url('imgs/background-mb-light.png')",
          'background-repeat': 'no-repeat',
          'background-position': 'top center',
          'background-size': 'cover',
        },
        '.background-mb-dark-full': {
          'background-image': "url('imgs/background-mb-dark.png')",
          'background-repeat': 'no-repeat',
          'background-position': 'top center',
          'background-size': 'cover',
        },
      })
    }),
  ],
}
