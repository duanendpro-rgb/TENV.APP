/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#F3F5F0',
          dark: '#0F1A14',
          lime: '#C6F432',
          border: '#DDE3D8',
          textMuted: '#5B6A60',
          okBg: '#E4F2D9',
          okText: '#1F4D36',
          todoBg: '#FBEBD0',
          todoText: '#8A4B08',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}