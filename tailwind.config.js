/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: '991px',
      },
      colors: {
        "border-light": "#F4F4F4"
      },
      backgroundColor: {
        "light" : "#F5F7FB",
        "dark"  : "#0D120E",
      }
    },
  },
  plugins: [],
}
