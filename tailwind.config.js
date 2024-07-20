/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow:{
        'customShadow':'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      }
    },
  },
  plugins: [],
}