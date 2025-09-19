/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'sans-serif'], // 기본 폰트를 'Lora'로 설정합니다.
      },
    },
  },
  plugins: [],
}
