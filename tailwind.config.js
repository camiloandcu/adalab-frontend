/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}
