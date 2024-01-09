/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFEBED',
        darkText: '#313C5E',
        headingText: '#BA3183',
        accText: '#BB2C84'
      },
      fontFamily: {
        'lobster': 'Lobster, sans-serif'
      }
    },
  },
  plugins: [],
}

