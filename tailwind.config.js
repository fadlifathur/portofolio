/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'dark': '#0f181a',
        'primary': '#548996',
        'secondary': '#d1e2e5',
      },
      fontFamily:{
        inter:['Inter'],
      }
    },
  },
  plugins: [],
}

