/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#0a0909',
      },
      fontFamily: {
        'sans': ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}