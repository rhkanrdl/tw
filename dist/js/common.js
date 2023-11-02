//
//
//****메뉴
//
// 메뉴 열기 버튼 요소 가져오기
const menuOpenButton = document.getElementById("menuButton");

// 메인 메뉴 요소 가져오기
const mainMenu = document.getElementById("mainMenu");

// 모든 h3 요소의 하위 링크 선택
const h3Links = document.querySelectorAll("nav h3 > a");

// 모든 연결된 ul 요소 선택
const uls = document.querySelectorAll("nav h3 + ul");

// 뷰포트의 너비 가져오기
let viewportWidth = window.innerWidth;

window.addEventListener("resize", function () {
  // 리사이즈 시 뷰포트 너비 업데이트
  viewportWidth = window.innerWidth;
});

// 메뉴 열기 버튼 클릭 시 이벤트 처리
menuOpenButton.addEventListener("click", function () {
  mainMenu.classList.remove("hidden");
  mainMenu.classList.add("block");
  mainMenu.classList.add("pc:menu-background");

  // 모든 ul 요소를 표시
  uls.forEach(function (ul) {
    ul.classList.remove("pc:hidden");
    ul.classList.add("pc:block");
  });
});

// 메뉴 닫기 버튼 요소 가져오기
const menuCloseButton = document.getElementById("menuClose");

// 메뉴 닫기 버튼 클릭 시 이벤트 처리
menuCloseButton.addEventListener("click", function () {
  mainMenu.classList.remove("block");
  mainMenu.classList.add("hidden");
});

// 메뉴 호버 이벤트 처리
h3Links.forEach(function (h3link) {
  h3link.addEventListener("mouseover", function () {
    mainMenu.classList.add("pc:menu-background");

    // 모든 ul 요소를 표시
    uls.forEach(function (ul) {
      ul.classList.remove("pc:hidden");
      ul.classList.add("pc:block");
    });
  });
});

// 마우스 움직임을 추적하는 이벤트 리스너
document.addEventListener("mousemove", function (e) {
  // 현재 마우스 커서의 Y 좌표를 가져옵니다.
  var mouseY = e.clientY;

  // 페이지의 스크롤 위치를 가져옵니다.
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  // 마우스 커서가 페이지 최상단에서 400픽셀 이상 넘어갔을 때 클래스를 추가합니다.
  if (viewportWidth >= 1200 && mouseY - scrollTop >= 466) {
    mainMenu.classList.remove("pc:menu-background");

    // 모든 ul 요소를 숨김
    uls.forEach(function (ul) {
      ul.classList.add("pc:hidden");
      ul.classList.remove("pc:block");
    });
  }
});
//
//
//****검색
//

//

const searchOpen = document.getElementById("searchOpen");
const search = document.getElementById("search");
const searchClose = document.getElementById("searchClose");

searchOpen.addEventListener("click", function () {
  search.classList.toggle("hidden");
  search.classList.toggle("block");
  searchOpen.classList.toggle("bg-search");
  searchOpen.classList.toggle("bg-close");
});

searchClose.addEventListener("click", function () {
  search.classList.add("hidden");
  search.classList.remove("block");
  searchOpen.classList.add("bg-search");
  searchOpen.classList.remove("bg-close");
});

const swiper = new Swiper(".main-swiper", {
  speed: 400,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".main-next",
    prevEl: ".main-prev",
  },
});

const swiper2 = new Swiper(".notice-swiper", {
  speed: 400,
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".notice-next",
    prevEl: ".notice-prev",
  },
  pagination: {
    el: ".notice-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
  },
});
