/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#E3E3E3',
        white: '#FFFFFF',
        button: '#FFF000',
      },
    },
  },
  plugins: [],
};
