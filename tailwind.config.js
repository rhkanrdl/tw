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
        searchbg: "url('./image/search-bg.svg')",

        alert: "url('./image/icon-alert.svg')",
        search: "url('./image/icon-search.svg')",
        close: "url('./image/icon-close.svg')",
        user: "url('./image/icon-user.svg')",
        menu: "url('./image/icon-menu.svg')",
        arrowleft: "url('./image/icon-left.svg')",
        arrowright: "url('./image/icon-right.svg')",

        link1: "url('./image/link-1.svg')",
        link2: "url('./image/link-2.svg')",
        link3: "url('./image/link-3.svg')",
        link4: "url('./image/link-4.svg')",
        link5: "url('./image/link-5.svg')",
        link6: "url('./image/link-6.svg')",
        link7: "url('./image/link-7.svg')",
        link8: "url('./image/link-8.svg')",

        mainad: "url('./image/ad-bg.png')",
        mainnotice: "url('./image/img-notice.svg')",
      },
    },
  },
  plugins: [],
};
