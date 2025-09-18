/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      colors: {
        jeju: {
          green: '#2E7D65',
          gold: '#E9C46A',
          dark: '#111827'
        }
      }
    },
  },
  plugins: [],
}
