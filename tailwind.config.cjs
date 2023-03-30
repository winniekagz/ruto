/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  important: '#app',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "d-green":"#4B664D",
        "dull-pink":"#BEAEA1",
        "peach":"#EADBAE",
        "light":"#F5F5F5",
        "background-main": "rgba(219, 101, 38, 0.03)",
        "grey":"#D9D9D9"
      },
    
        borderRadius: {
          'none': '0',
          'sm': '10px',
          DEFAULT: '0.25rem',
          DEFAULT: '4px',
          'md': '0.375rem',
          'lg': '0.5rem',
          'full': '9999px',
          'large': '32px',
        },
        fontSize:{
          "title":"24px",
          "subtitle":"20px"
        }, 
        backgroundImage: {
          'login': "url('/images/login.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
  
    },
  },
  plugins: [
    
      

  ],
}
