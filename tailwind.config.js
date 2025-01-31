/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#242424',
          500: '#2A2A2A',
          50: '#F5F5F5',
        },
        orange: {
          500: '#FF4D00',
          600: '#CC3D00',
        },
      },
      fontFamily: {
        display: ['Russo One', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};