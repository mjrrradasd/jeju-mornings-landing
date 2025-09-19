/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'sans-serif'], // 이 부분을 추가/수정합니다.
      },
    },
  },
  plugins: [],
}
