/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'sans-serif'],
      },
      backgroundImage: {
        'jeju-bg': "url('/jeju-bg.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

