import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        0.375: '1.5px',
      },

      colors: {
        highlight: 'rgba(255, 255, 255, 0.2)',
        stroke: 'rgba(255, 255, 255, 0.5)',
        surface: {
          normal: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 255, 255, 0.05)',
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

        '.background-full': {
          'background-image': "url('./src/assets/imgs/background.png')",
          'background-repeat': 'no-repeat',
          'background-position': 'top center',
          'background-size': 'cover',
        },
      })
    }),
  ],
}
