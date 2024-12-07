/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      screens: {
        'xs': '360px',
        's': '480px',
        'xxl': '1440px'
      }
    },
  },
  plugins: [],
}

