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
        logo: "url('./image/logo.svg')",
        flogo: "url('./image/footer-logo.svg')",
        searchbg: "url('./image/search-bg.svg')",

        alert: "url('./image/icon-alert.svg')",
        search: "url('./image/icon-search.svg')",
        close: "url('./image/icon-close.svg')",
        user: "url('./image/icon-user.svg')",
        menu: "url('./image/icon-menu.svg')",
        arrowleft: "url('./image/icon-left.svg')",
        arrowright: "url('./image/icon-right.svg')",
        checkw: "url('./image/icon-check.svg')",

        arrowleft2: "url('./image/icon-left2.svg')",
        arrowright2: "url('./image/icon-right2.svg')",
        arrowrr: "url('./image/icon-rr.svg')",
        arrowff: "url('./image/icon-ff.svg')",

        naver: "url('./image/icon-naver.svg')",
        kakao: "url('./image/icon-kakao.svg')",
        twitter: "url('./image/icon-twitter.svg')",
        facebook: "url('./image/icon-facebook.svg')",
        link: "url('./image/icon-link.svg')",
        hart: "url('./image/icon-hart.svg')",
        print: "url('./image/icon-print.svg')",

        link1: "url('./image/link-1.svg')",
        link2: "url('./image/link-2.svg')",
        link3: "url('./image/link-3.svg')",
        link4: "url('./image/link-4.svg')",
        link5: "url('./image/link-5.svg')",
        link6: "url('./image/link-6.svg')",
        link7: "url('./image/link-7.svg')",
        link8: "url('./image/link-8.svg')",

        link1on: "url('./image/link-1on.svg')",
        link2on: "url('./image/link-2on.svg')",
        link3on: "url('./image/link-3on.svg')",
        link4on: "url('./image/link-4on.svg')",
        link5on: "url('./image/link-5on.svg')",
        link6on: "url('./image/link-6on.svg')",
        link7on: "url('./image/link-7on.svg')",
        link8on: "url('./image/link-8on.svg')",

        mainad: "url('./image/ad-bg.png')",
        mainnotice: "url('./image/img-notice.svg')",

        calendar: "url('./image/icon-calendar.svg')",
        user2: "url('./image/icon-user2.svg')",
        doc: "url('./image/icon-doc.svg')",
        detail: "url('./image/icon-detail.svg')",
        call: "url('./image/icon-call.svg')",
        file: "url('./image/icon-file.svg')",
        address: "url('./image/icon-house.svg')",
        hart2: "url('./image/icon-hart2.svg')",
        reply: "url('./image/icon-reply.svg')",

        like: "url('./image/icon-like.svg')",
        hate: "url('./image/icon-hate.svg')",

      },
    },
  },
  plugins: [],
};
