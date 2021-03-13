const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/shared/components/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'arial', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '420px',
      },
      colors: {
        black: '#121212',
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
