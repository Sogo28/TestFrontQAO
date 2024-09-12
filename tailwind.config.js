/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          100: '#FFF2F5',
          150: "#FFDAE4",
          200: '#F1B5C5',
          300: '#E5678A',
          400: '#D92B5B',
          500: '#B20937',
          600: '#8D0C2F',
          700: '#730624',
          800: '#58041A',
          900: '#1A0007',
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },

  },
  plugins: [],
}

