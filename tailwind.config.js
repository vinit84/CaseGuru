/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5612', // Define a custom primary color
        secondary: '#f6993f', // Define a custom secondary color
      },
    },
  },
  plugins: [],
}