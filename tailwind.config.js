/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,}', './components/**/*.{js,jsx,}'],
  theme: {
    colors: {
      accent: '#F5793A',
      primaryDark: '#A95AA1',
      primaryLight: '#85C0F9',
      darkBlue: '#0F2080',
    },
    extend: {
      fontFamily: {
        Lexend: ['Lexend', 'sans serif'],
      },
    },
  },
  plugins: [],
}
