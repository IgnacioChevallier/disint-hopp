/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "#66C2FF",
        DEFAULT: "#0095FF",
        dark: "#006BB3"
      },
      danger: {
        light: "#ED9AA2",
        DEFAULT: "#DC3545",
        dark: "#90222D"
      },
      status: {
        success: "#28A745",
        warning: "#FFC107",
      },
      gray: {
        100: "#EAEAEA",
        200: "#D8D8D8",
        300: "#B3B3B3",
        400: "#8F8F8F",
        500: "#6D6D6D",
        600: "#4C4C4C",
        700: "#333333",
        800: "#1A1A1A"
      },
      white: "#FFFFFF",
      black: "#000000"
    }
  },
  plugins: [],
}