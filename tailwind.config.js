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
        logo: "url('/dist/image/logo.png')",
        flogo: "url('/dist/image/footer-logo.svg')",

        alert: "url('/dist/image/icon-alert.svg')",
        search: "url('/dist/image/icon-search.svg')",
        user: "url('/dist/image/icon-user.svg')",
        menu: "url('/dist/image/icon-menu.svg')",
      },
    },
  },
  plugins: [],
};
