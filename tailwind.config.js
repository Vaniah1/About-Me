/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      sreens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 100/20)'},
      },
      colors: {
        'primary': '#079211',
        'white': '#FFFF',
        'light-gray': '#D1D5DB',
        'gray': '#808080',
        'deep-gray': '#0A0A0F',
        'light-dark': '#313131',
        'dark': '#101017',
        'deep-dark': '#050507',
      }
    },
  },
  plugins: [],
}

