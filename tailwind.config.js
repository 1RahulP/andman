/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow1': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'custom-shadow2': '0px 38px 78px 0px #BFC1C829',
        'custom-shadow4' : '0px 0px 30.6px 0px #C0C0C040',
        'button-shadow' :'0px 6px 55.7px 0px #1D243E29' ,
        'custom-shadow3' : '0px 0px 4px 1px #00000026',
        'card-shadow':'0px 12px 78px 0px #ABABAE29'
      }
    },
  },
  plugins: [],
}