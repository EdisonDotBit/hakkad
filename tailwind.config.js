/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xsm": "200px",
      },
      colors: {
        customBlue: '#0f57c1',
      },
    },
    fontFamily:{
      inter:["Inter","Sans-serif"],
      poppins:["Poppins","Sans-serif"]
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

