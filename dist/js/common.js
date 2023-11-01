// 메뉴호출

// 버튼 요소를 가져옵니다.
const menuon = document.getElementById("menuButton");

// 클릭 이벤트를 리스닝하고 클릭 시 #main-menu 요소에 'block' 클래스를 추가합니다.
menuon.addEventListener("click", function () {
  const mainMenu = document.getElementById("mainMenu");

  mainMenu.classList.remove("hidden");
  mainMenu.classList.add("block");
});

// 메뉴닫기

// 버튼 요소를 가져옵니다.
const menuoff = document.getElementById("menuClose");

// 클릭 이벤트를 리스닝하고 클릭 시 #main-menu 요소에 'block' 클래스를 추가합니다.
menuoff.addEventListener("click", function () {
  const mainMenu = document.getElementById("mainMenu");

  mainMenu.classList.remove("block");
  mainMenu.classList.add("hidden");
});

//서브메뉴

// 메뉴
const mainMenu = document.getElementById("mainMenu");

// 모든 h3 요소를 선택합니다.
var h3Links = document.querySelectorAll("nav h3 > a");

// 모든 연결된 ul 요소를 선택합니다.
var uls = document.querySelectorAll("nav h3 + ul");

// 마우스를 올렸을 때 이벤트 리스너를 추가합니다.
h3Links.forEach(function (h3link) {
  h3link.addEventListener("mouseover", function () {
    mainMenu.classList.add("pc:menu-background");
    // 모든 ul 요소에 "pc:block" 클래스를 추가합니다.
    uls.forEach(function (ul) {
      ul.classList.remove("pc:hidden");
      ul.classList.add("pc:block");
    });
  });

  // 마우스 움직임을 추적하는 이벤트 리스너를 추가합니다.
  document.addEventListener("mousemove", function (e) {
    // 현재 마우스 커서의 Y 좌표를 가져옵니다.
    var mouseY = e.clientY;

    // 페이지의 스크롤 위치를 가져옵니다.
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 마우스 커서가 페이지 최상단에서 400픽셀 이상 넘어갔을 때 클래스를 추가합니다.
    if (mouseY - scrollTop >= 466) {
      mainMenu.classList.remove("pc:menu-background");
      uls.forEach(function (ul) {
        ul.classList.add("pc:hidden");
        ul.classList.remove("pc:block");
      });
    }
  });
});
