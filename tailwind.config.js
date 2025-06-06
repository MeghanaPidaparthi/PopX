/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C25FF',
        secondary: '#CEBAFB',
        grayLight: '#CBCBCB',
      },
    },
  },
  plugins: [],
}
