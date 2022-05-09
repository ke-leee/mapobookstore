/*------------------헤더 start------------------*/
let header = document.querySelector("#header");
let header_h1 = document.querySelector("#header_h1");
let header_h2 = document.getElementById("#header_h2");
let header_ul = document.getElementById("header_ul");
let logo_img = document.getElementById("logo_img");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style = "height : 92px";
    header_h1.style = "top: 3px";
    logo_img.style = "width : 50%; height:50%;";
    header_ul.style = "font-size : 15px; padding : 45px 0 0 0;";

    //header_h1.classList.add('fold');
  } else {
    header.style = "height : 180px";
    logo_img.style = "width : 100%; height:100%;";
    header_ul.style = "font-size : 30px";
    header_h1.style = "top: 20px";
  }
}

/*--------------헤더 End-------------------------*/
/*--------------메인 풀페이지JS start ------------*/
const main = document.querySelector("main");

main.style.position = "absolute";
main.style.top = 0;
main.style.left = 0;

let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

window.addEventListener("scroll", scroll);

function scroll() {
  // We only update the scroll position variables
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

// Then we start a `requestAnimationFrame` loop.

window.requestAnimationFrame(render);

function render() {
  // We calculate our container position by using our Linear Interpolation method.

  dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  // Finally we translate our container to its new positions.
  // Don't forget to add a minus sign because the container needs to move in
  // the opposite direction of the window scroll.
  main.style.transform = `translate(-${dx}px, -${dy}px)`;

  // And we loop again.
  window.requestAnimationFrame(render);
}

// This is our Linear Interpolation method.
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

//새로고침 했을 때 스크롤을 맨 위로
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};
/*--------------메인 풀페이지JS  End ------------*/
/*----------1. 이미지 슬라이딩 start-------*/
let slideIndex = 1; //1

showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  // n값 = 1
  let i;
  let slides = document.getElementsByClassName("mySlides"); //배열로 내려온다
  if (n > slides.length) {
    // n값이 3이상일때 초기화 시키기 위해(1로)
    slideIndex = 1;
  }
  if (n < 1) {
    // 첫번째 이미지에서 왼쪽을 누를경우 마지막 이미지 나오게
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //안보이게(사라지는건아님) 사용자한테 안보이게
  }
  slides[slideIndex - 1].style.display = "block"; //첫화면 1번 이미지 보이게(배열 인덱스 순서 맞춤)
}

/*--------------1. 이미지 슬라이딩 end------------*/
/*--------------2. 이미지, 글 스크롤Start---------*/

let here_spot = document.getElementById("here-spot");
let here_spot2 = document.getElementById("here-spot2");

// console.log(here_spot);

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  // console.log("윈도우 높이" + window.innerHeight);
  // console.log("스크롤 값" + value);

  if (value > 150) {
    // here_spot.style= "animation : fadein 1.5s";
    //  here_spot.style = "animation : fadein 1.5s ease-in";
    // here_spot.classList.add('fadeInUp');
    here_spot.style = "opacity : 1";
    here_spot.style = "animation: fadeInUp 1.8s forwards;";
  }
  if (value > 400) {
    here_spot2.style = "opacity : 1";
    here_spot2.style = "animation: fadeInUp 1.8s forwards;";
  }
});

/*--------------2. 이미지, 글 스크롤End-----------*/
/*--------------3. 모달 Start--------------------*/
const modal = document.getElementById("modal");

function modalOn() {
  modal.style.display = "flex";
}
function isModalOn() {
  return modal.style.display === "flex";
}
function modalOff() {
  modal.style.display = "none";
}

const closeBtn = modal.querySelector(".close-area"); // 모달창 안 닫기버튼
closeBtn.addEventListener("click", (e) => {
  modalOff();
});

modal.addEventListener("click", (e) => {
  //모달창 클릭시 다른 부분 흐리게

  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modalOff();
  }
});
window.addEventListener("keyup", (e) => {
  if (isModalOn() && e.key === "Escape") {
    modalOff();
  }
});


//객체로구현

function modalDetail(params) {
  let name = params;
  let result = {};

  bookshop.forEach((element) => {
    if (name == element.name) {
      result = element;
    }
  });
  modalShow(result);
}

//모달창
function modalShow(result) {
  modalOn();

  const name = document.getElementById("name");
  name.innerHTML = result.name;

  const info = document.getElementById("info");
  info.innerHTML = result.info;

  const address = document.getElementById("address");
  address.innerHTML = result.address;

  const time = document.getElementById("time");
  time.innerHTML = result.time;

  const site = document.getElementById("site");
  site.innerHTML =
    `<a href = ` + result.site + ` class = "fab fa-instagram fa-2x" ></a>`;
}

/*--------------3. 모달 End------------------------*/
/*--------------4. 이미지, 글 스크롤Start-----------*/

let here_spot3 = document.getElementById("here-spot3");
let here_spot4 = document.getElementById("here-spot4");

// console.log(here_spot);

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  // console.log("윈도우 높이" + window.innerHeight);
  // console.log("스크롤 값" + value);

  if (value > 1200) {
    // here_spot.style= "animation : fadein 1.5s";
    //  here_spot.style = "animation : fadein 1.5s ease-in";
    // here_spot.classList.add('fadeInUp');
    here_spot3.style = "opacity : 1";
    here_spot3.style = "animation: fadeInUp 1.8s forwards;";
  }
  if (value > 1500) {
    here_spot4.style = "opacity : 1";
    here_spot4.style = "animation: fadeInUp 1.8s forwards;";
  }
});

/*--------------4. 이미지, 글 스크롤End-------------*/
/*---------------5. 카카오지도 Start----------------*/
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
