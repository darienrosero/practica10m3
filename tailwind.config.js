/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      Verydarkblue: 'hsl(220, 13%, 13%)',
      Darkgrayishblue: 'hsl(219, 9%, 45%)',
      Grayishblue: 'hsl(220, 14%, 75%)',
      Lightgrayishblue: 'hsl(223, 64%, 98%)',
      White: 'hsl(0, 0%, 100%)'
    },
    extend: {
      fontFamily:{
        'font-kumbh': ["Kumbh Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}

