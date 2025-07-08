/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1d2434",
        lightGray: "#979faf",
        lightBlue: "#242e3f"
      }
    },
  },
  plugins: [],
}