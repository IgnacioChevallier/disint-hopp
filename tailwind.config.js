// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // H1 Masthead
        'h1-extra-bold': ['36px', { lineHeight: '48px', fontWeight: '800' }], // Inter ExtraBold 36/48
        'h1-bold': ['36px', { lineHeight: '48px', fontWeight: '700' }],        // Inter Bold 36/48
        'h1-regular': ['36px', { lineHeight: '48px', fontWeight: '400' }],     // Inter Regular 36/48

        // H2 Head
        'h2-extra-bold': ['26px', { lineHeight: '32px', fontWeight: '800' }],  // Inter ExtraBold 26/32
        'h2-bold': ['26px', { lineHeight: '32px', fontWeight: '700' }],        // Inter Bold 26/32
        'h2-regular': ['26px', { lineHeight: '32px', fontWeight: '400' }],     // Inter Regular 26/32

        // H3 Subhead
        'h3-extra-bold': ['20px', { lineHeight: '24px', fontWeight: '800' }],  // Inter ExtraBold 20/24
        'h3-bold': ['20px', { lineHeight: '24px', fontWeight: '700' }],        // Inter Bold 20/24
        'h3-regular': ['20px', { lineHeight: '24px', fontWeight: '400' }],     // Inter Regular 20/24

        // Body
        'body-bold': ['16px', { lineHeight: '18px', fontWeight: '700' }],      // Inter Bold 16/18
        'body-regular': ['16px', { lineHeight: '18px', fontWeight: '400' }],   // Inter Regular 16/18
      },
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
        background: {
          main: "#F9FBFF",
        },
        white: "#FFFFFF",
        black: "#000000"
      }
    },
  },
  plugins: [],
}
