/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      customGray: '#E5E5E5',
      customBlack: 'rgba(39, 39, 39, 0.2)',
      white: '#fff',
      labelText: 'rgba(23, 23, 25, 0.3)',
      inputActiveBg: 'rgba(197, 228, 249, 0.3)',
      headerText: '#1390E5',
      descriptionResult: 'rgba(23, 23, 25, 0.3)',
    },
    extend: {},
  },
  plugins: [],
}

