/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      'primary': '#1C64F2',
      'dark-primary': '#0C4ECF',
      'error' : '#E6194D',
      'soft-error' : '#EB4770',
      'success' : '#62D862',
      'soft-success' : '#8BE28B',
      'white': '#FFFFFF',
      'dark-white': '#F5F5F5',
      'soft-gray': '#E8E9EB',
      'dark-gray': '#AAAAAA',
      'black': '#333333',
      'soft-black': '#636363'
    },
    extend: {
      fontFamily: {
        sans : ['Nunito']
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin")]
}
