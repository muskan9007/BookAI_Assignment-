/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    color:{
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary':'linear-gradient(135deg, #1e0533, #110a1f)',
      'light': '#13ce66',
      // 'test': '#ffff00',
    },
    extend: {},
  },
  plugins: [
    createThemes({
      light: { 
         'primary': 'steelblue',
         'secondary': 'darkblue',
         'brand': '#F3F3F3',
      },
      dark: { 
        'primary': 'turquoise',
        'secondary': 'tomato',
        'brand': '#4A4A4A',
      },
    })
  ],
}

