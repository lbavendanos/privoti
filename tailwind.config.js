/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebfffd',
          100: '#cdfffe',
          200: '#8affff',
          300: '#62fcfe',
          400: '#1beff5',
          500: '#00d2db',
          600: '#02a8b8',
          700: '#0a8594',
          800: '#126b78',
          900: '#135866',
        },
      },
    },
  },
  plugins: [],
}
