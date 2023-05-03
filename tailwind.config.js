/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'primary': '#3657D2',
      'danger': '#E6194D',
      'soft-danger': '#EB4770',
      'success': '#62D862',
      'soft-success': '#8BE28B',
      'warning': '#FFA12E',
      'soft-warning': '#FFB861',
      'white': '#FFFFFF',
      'dark-white': '#F5F5F5',
      'soft-gray': '#E8E9EB',
      'dark-gray': '#AAAAAA',
      'black': '#0F172A',
      'soft-black': '#1E293B',
      'light-black': '#374151'
    },
    extend: {
      fontFamily: {
        sans : ['Rubik']
      }
    }
  },
  plugins: []
}
