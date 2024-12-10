/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Add the correct path
    "./views/**/*.ejs",
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};