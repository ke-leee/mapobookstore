/*------------------헤더 START------------------*/
let header = document.querySelector("#header");
let header_h1 = document.querySelector("#header_h1");
let header_h2 = document.getElementById("#header_h2");
let header_ul = document.getElementById("header_ul");
let logo_img = document.getElementById("logo_img");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style = "height : 92px";
    header_h1.style = "top: 3px";
    logo_img.style = "width : 50%; height:50%;";
    header_ul.style = "font-size : 15px; padding : 45px 0 0 0;";
  } else {
    header.style = "height : 180px";
    logo_img.style = "width : 100%; height:100%;";
    header_ul.style = "font-size : 30px";
    header_h1.style = "top: 20px";
  }
});

/*--------------메인스무스한 풀페이지JS START ------------*/
const main = document.querySelector("main");

main.style.position = "absolute";
main.style.top = 0;
main.style.left = 0;

let sx = 0;
let sy = 0;

let dx = sx;
let dy = sy;

window.addEventListener("scroll", function () {
  // 스크롤위치 변수
  sx = window.pageXOffset;
  sy = window.pageYOffset;
});

// 루프를 돌면서 render함수 호출
window.requestAnimationFrame(render);

function render() {
  dx = lerp(dx, sx, 0.07);
  dy = lerp(dy, sy, 0.07);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  // Finally we translate our container to its new positions.
  // the opposite direction of the window .
  main.style.transform = `translate(-${dx}px, -${dy}px)`;

  //loop again
  window.requestAnimationFrame(render);
}

//Linear Interpolation method.
function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

//새로고침 했을 때 스크롤을 맨 위로
window.addEventListener("load", function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
});

/*----------섹션1 이미지 슬라이딩 START-------------*/
let slideIndex = 1; //1

showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); //배열로
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length; // 첫번째 이미지에서 왼쪽을 누를경우 마지막 이미지 나오게
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //안보이게
  }
  slides[slideIndex - 1].style.display = "block"; //첫화면 1번 이미지 보이게
}

//새로고침시 랜덤 책 슬라이드
let slideImg = document.getElementsByClassName("sildeImg");
let imgPath = "./images/book";
let jpgPath = ".jpg";

window.addEventListener("load", random);

function random() {
  let randomNum = Math.floor(Math.random() * 2);
  console.log(randomNum);
  for (let i = 0; i < slideImg.length; i++) {
    slideImg[i].src = imgPath + randomNum + "_" + i + jpgPath;
  }
}

/*------------섹션2 이미지, 글 스크롤 START----------*/
let here_spot = document.getElementById("here-spot");
let here_spot2 = document.getElementById("here-spot2");

// console.log(here_spot);

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 150) {
    // here_spot.classList.add('fadeInUp');
    here_spot.style = "opacity : 1";
    here_spot.style = "animation: fadeInUp 1.8s forwards;";
  }
  if (value > 400) {
    here_spot2.style = "opacity : 1";
    here_spot2.style = "animation: fadeInUp 1.8s forwards;";
  }
});

/*--------------섹션3 모달 START--------------------*/
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

function modalDetail(params) {
  //객체로

  let name = params;
  let result = {};

  bookshop.forEach((element) => {
    if (name == element.name) {
      result = element;
    }
  });
  modalShow(result);
}

function modalShow(result) {
  //모달창

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
    `<a href = ` +
    result.site +
    ` class = "fab fa-instagram fa-2x" target=”_blank” ></a>`;
}

//이미지 밑에서 하나씩 나타나게
let modalbook = document.getElementsByClassName("modalbook");

window.addEventListener("scroll", function () {
  let value = Math.round(window.scrollY);
  if (value > 780) {
    for (let i = 0; i < modalbook.length; i++) {
      setTimeout(() => {
        modalbook[i].style = "opacity : 1; animation: fadeInUp 0.7s forwards";
      }, i * 150);
    }
  }
});

/*--------------섹션4 이미지, 글 스크롤 START-----------*/
let here_spot3 = document.getElementById("here-spot3");
let here_spot4 = document.getElementById("here-spot4");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  if (value > 1100) {
    // here_spot.classList.add('fadeInUp');
    here_spot3.style = "opacity : 1";
    here_spot3.style = "animation: fadeInUp 1.8s forwards;";
  }
  if (value > 1350) {
    here_spot4.style = "opacity : 1";
    here_spot4.style = "animation: fadeInUp 1.8s forwards;";
  }
});

/*---------------섹션5 카카오지도 START----------------*/
var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.55876028104912, 126.91730057286772), // 지도의 중심좌표
    level: 5, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

// 마커가 표시될 위치
var markerPosition = new kakao.maps.LatLng(
  37.55876028104912,
  126.91730057286772
);

// 마커를 생성
var marker = new kakao.maps.Marker({
  position: markerPosition,
});

var imageSrc = "./images/icon.png"; // 마커이미지 주소
imageSize = new kakao.maps.Size(34, 36); // 마커이미지의 크기
imageOption = { offset: new kakao.maps.Point(17, 36) }; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표설정

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

var arr = new Array();
arr[0] = [
  "당인리책발전소",
  37.555624833127716,
  126.91113041837029,
  "서울 마포구 월드컵로14길 10-8 1층",
  "123575123",
];
arr[1] = [
  "어쩌다책방",
  37.55283892821797,
  126.92832981465126,
  "서울 마포구 월드컵로19길 74 1층 102호",
  "1720347748",
];
arr[2] = [
  "책익다",
  37.555639845709244,
  126.92640318062097,
  "서울 마포구 와우산로29마길 10-3 2층",
  "1569570696",
];
arr[3] = [
  "gaga77page",
  37.557257763162085,
  126.90517541840744,
  "서울 마포구 망원로 74-1 지하1층",
  "895754731",
];
arr[4] = [
  "땡스북스",
  37.548840569423575,
  126.91769063077982,
  "서울 마포구 양화로6길 57-6 1층",
  "13312633",
];
arr[5] = [
  "번역가의 서재",
  37.557649881934076,
  126.91425451854089,
  "서울 마포구 동교로17길 67 1층",
  "1062133270",
];
arr[6] = [
  "책방꼴",
  37.55699634243369,
  126.91696299530305,
  "서울 마포구 월드컵북로5나길 18 대우미래사랑아파트상가 1층 112호",
  "1414047189",
];
arr[7] = [
  "책방서로",
  37.56535047480829,
  126.91645569460924,
  "서울 마포구 연남로11길 46 1층",
  "1834576970",
];
arr[8] = [
  "사적인서점",
  37.56159674570155,
  126.90603010741025,
  "서울 마포구 성미산로1길 92 102호 ",
  "786507630",
];
arr[9] = [
  "로우북스",
  37.552382394644894,
  126.90678293257045,
  "서울 마포구 포은로 56 1층",
  "679286709",
];

var markerTmp; // 마커
var customOverlay; // 오버레이
var contentStr;

for (var i = 0; i < arr.length; i++) {
  markerTmp = new daum.maps.Marker({
    position: new daum.maps.LatLng(arr[i][1], arr[i][2]),
    title: arr[i][0],
    image: markerImage,
    map: map,
  });

  contentStr =
    "<div class='customoverlay'><a href='https://map.kakao.com/link/map/" +
    arr[i][4] +
    "' target='_blank'><span class='title'>" +
    arr[i][0] +
    "</span></a></div>";

  customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: new daum.maps.LatLng(arr[i][1], arr[i][2]),
    content: contentStr,
    yAnchor: 1,
  });
}

// 지도 타입 변경 컨트롤을 생성
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도에 확대 축소 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();

// 지도의 우측에 확대 축소 컨트롤을 추가
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 아래 코드는 지도 위의 마커를 제거하는 코드
// marker.setMap(null);
