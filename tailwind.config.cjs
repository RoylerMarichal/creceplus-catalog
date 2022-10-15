const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Ibarra: ["Ibarra Real Nova", "serif"], // Ensure fonts with spaces have " " surrounding it.
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'fondo': "url('/fondo.webp')",
      } 
     
      
    },
  },
  plugins: [],
};
