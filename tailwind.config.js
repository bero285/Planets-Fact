/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        spartan:['Spartan','sans-serif']
      },
      ringColor: {
        'red': 'red',
        'blue': 'blue',
        'orange': 'orange',
        'white':'white',
      
      },
    },
    
  },
  plugins: [],
};
