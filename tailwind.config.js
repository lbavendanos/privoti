/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#effef8',
          100: '#b2fce4',
          200: '#95fadb',
          300: '#58f0c7',
          400: '#26dbb0',
          500: '#0dbf97',
          600: '#079a7d',
          700: '#0b7a66',
          800: '#0e6153',
          900: '#115045',
        },
        secondary: {
          50: '#f2ffe6',
          100: '#e2fec9',
          200: '#d2fdaf',
          300: '#a0f75f',
          400: '#7eed2e',
          500: '#5dd30f',
          600: '#45a907',
          700: '#36800b',
          800: '#2e650f',
          900: '#285512',
        },
        tertiary: {
          50: '#fef1f9',
          100: '#fde6f5',
          200: '#fdcded',
          300: '#fdafe1',
          400: '#fa6cc4',
          500: '#f440ab',
          600: '#e31f89',
          700: '#c6106e',
          800: '#a3115a',
          900: '#88134d',
        },
      },
    },
  },
  plugins: [],
}
