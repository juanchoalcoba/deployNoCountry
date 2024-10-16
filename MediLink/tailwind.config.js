/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      '1440': '90rem',
    },
    fontFamily: {
      abc: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
}

