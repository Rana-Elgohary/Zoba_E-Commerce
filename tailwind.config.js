/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {backgroundImage: theme => ({
      'searchIcon': "url('img/main/search-icon.png')",
    })},
  },
  plugins: [],
}

