/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontSize: {
      zero: "0px",
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
      black: "900",
    },
    container: {
      center: true,
    },
    screens: {
      pc: "1200px",
    },
    extend: {
      backgroundImage: {
        logo: "url('./image/logo.png')",
        flogo: "url('./image/footer-logo.svg')",

        alert: "url('./image/icon-alert.svg')",
        search: "url('./image/icon-search.svg')",
        user: "url('./image/icon-user.svg')",
        menu: "url('./image/icon-menu.svg')",
      },
    },
  },
  plugins: [],
};
