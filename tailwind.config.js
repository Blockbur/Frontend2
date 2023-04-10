/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple800: '#09071E',
        purple700: '#17124E',
        purple600: '#1F1863',
        purple500: '#352F8D',
        purple400: '#3B3192',
        purple300: '#453DA0',
        purple200: '#675DD6',

        green600: '#005629',
        green500: '#00CD72',

        yellow600: '#FCA236',
        yellow500: '#FBBD2E',

        white: '#FFFFFF',
        black: '#1A1A1A',
      },
      fontFamily: {
        grandstander: ['var(--grandstander-font)', 'sans-serif'],
        opensans: ['var(--opensans-font)', 'sans-serif'],
      },
      backgroundImage: {
        notes: "url('/notesBg.png')",
        trees: "url('/trees.png')",
        brand: "url('/logoBg.png')",
      },
    },
  },
  plugins: [],
}
