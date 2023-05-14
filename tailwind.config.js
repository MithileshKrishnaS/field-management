/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary'     : '#05386B',
        'secondary'   : '#05BFDB',
        'color-1'     : '#F7F9FC',
        'color-2'     : '#F7C04A',
        'color-3'     : '#F45050',
        'color-4'     : '#4CBB17',
        'white'       : '#FFFFFF',
      },
      fontSize: {
        'small'   : '.625rem', // 10px
        'default' : '.75rem',  // 12px
        'medium'  : '.875rem', // 14px
        'big'     : '1rem',    // 16px
        'large'   : '1.125rem',// 18px
        'xl'      : '1.25rem', // 20px
        '2xl'     : '1.5rem',  // 24px
        '3xl'     : '1.875rem' // 30px
      },
      fontWeight: {
        'bold'   : 600,
        'medium' : 500,
        'regular': 400
      },
      fontFamily: {
        "Poppins": ["Poppins", 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  prefix: 't-',
  plugins: [],
}

