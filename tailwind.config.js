/** @type {import('tailwindcss').Config} */
let plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#4E85E5',
        'secondary': '#161925',
        'tertiary': '#23395B'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('second', '&:nth-child(2)')
    })
  ],
}
