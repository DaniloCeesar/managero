// const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: 'class',

  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
