/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'border-color': '#EEF3F5'
      
      },
      fontSize: {
        't-size': '12rem'
      },
      fontFamily: {
      
      'roboto': 'Roboto',
    }
    },
  },
  plugins: [],
}