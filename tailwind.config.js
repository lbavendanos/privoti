/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effefe',
          100: '#bdfffd',
          200: '#91fefd',
          300: '#52f2f6',
          400: '#1fd6e2',
          500: '#06b8c6',
          600: '#02909f',
          700: '#06737f',
          800: '#0a5a65',
          900: '#0e4b53',
        },
        secondary: {
          50: '#eefff2',
          100: '#d8ffe4',
          200: '#b3ffca',
          300: '#8bfdae',
          400: '#37f171',
          500: '#0dda4d',
          600: '#04b53b',
          700: '#078e32',
          800: '#0c6f2d',
          900: '#0c5b27',
        },
        tertiary: {
          50: '#fff4fe',
          100: '#ffe7fe',
          200: '#ffcffb',
          300: '#fea9f4',
          400: '#fd8bee',
          500: '#f441dc',
          600: '#d821bc',
          700: '#b31898',
          800: '#92167a',
          900: '#781764',
        },
      },
    },
  },
  plugins: [],
}
