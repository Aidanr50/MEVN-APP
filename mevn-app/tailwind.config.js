/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "brand-green": "#53B044",
        "brand-blue": "#0C84C7",
        "off-white": "#E7E7E7"
      }
    },
    fontFamily: {
      'body': ["Noto Sans, sans-serif"]
    }
  },
  plugins: [],
}