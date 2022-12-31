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
      width: {
        "modal-sm": "300px",
        "modal-lg": "800px",
        "modal-xl": "1140px",
        "modal-base": "500px"
      },
      screens: {
        lg: '991px',
      },
      zIndex: {
        '60': '60',
      },
      colors: {
        "border-light": "#F4F4F4",
        "border-dark": "#2B2B40",
        "border-btn-light-primary": "#ffedec",
        "border-btn-hover-light-primary": "#ffdedb",
        "depth-1": "#2A2A2A",
        "depth-2": "#3d3d3d",
      },
      backgroundColor: {
        "light" : "#F5F7FB",
        "dark"  : "#0D0D0D",
        "dark-dept-1" : "#2A2A2A",
        "dark-dept-2" : "#3d3d3d",
        "btn-light-primary": "#ffedec",
        "btn-hover-light-primary": "#ffdedb",
        "dark-light-primary": "#b2cebf",
      },
       fontFamily: {
        "inter-thin": ['var(--font-inter-thin)'],
        "inter-extralight": ['var(--font-inter-extralight)'],
        "inter-light": ['var(--font-inter-light)'],
        "inter": ['var(--font-inter-regular)'],
        "inter-medium": ['var(--font-inter-medium)'],
        "inter-semibold": ['var(--font-inter-semibold)'],
        "inter-bold": ['var(--font-inter-bold)'],
        "inter-extrabold": ['var(--font-inter-extrabold)'],
      }
    },
  },
  plugins: [],
}
