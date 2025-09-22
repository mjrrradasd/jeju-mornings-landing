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
      // 이 부분이 배경 이미지를 등록하는 부분입니다.
      backgroundImage: {
        'jeju-bg': "url('/jeju-bg.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
