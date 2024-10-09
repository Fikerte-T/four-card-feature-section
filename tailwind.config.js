/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customred: 'hsl(0, 78%, 62%)',
        customcyan: 'hsl(180, 62%, 55%)',
        customorange: 'hsl(34, 97%, 64%)',
        customblue:'hsl(212, 86%, 64%)',
        verydar4kblue: 'hsl(234, 12%, 34%)',
        grayishblue: 'hsl(229, 6%, 66%)',
        verylightgray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

