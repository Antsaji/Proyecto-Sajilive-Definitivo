/** @type {import('tailwindcss').Config} */

  module.exports = {
    mode: 'jit',
    theme: {
      extend: {
        
        // that is animation class
        animation: {
          fade: 'fadeOut 10s ease-in-out',
        },
  
        // that is actual animation
        keyframes: theme => ({
          fadeOut: {
            '0%': { backgroundColor: theme('colors.red.300') },
            '100%': { backgroundColor: theme('colors.transparent') },
          },
        }),
      },
    },
    variants: {},
    plugins: [],
  }


