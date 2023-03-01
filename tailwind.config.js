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
        secondary: {
          50: '#effef5',
          100: '#d9ffe9',
          200: '#b5fdd3',
          300: '#7af9b1',
          400: '#3cec89',
          500: '#12d568',
          600: '#08b152',
          700: '#0b8a43',
          800: '#0e6d39',
          900: '#0e5931',
        },
        illusion: {
          50: '#fcf3fa',
          100: '#fbe8f7',
          200: '#f8d2ef',
          300: '#f29bdb',
          400: '#ec7acc',
          500: '#e252b5',
          600: '#d13197',
          700: '#b4227b',
          800: '#951f66',
          900: '#7d1e56',
        },
      },
    },
  },
  plugins: [],
}
