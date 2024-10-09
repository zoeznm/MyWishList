const hoverDiv1 = document.querySelector(".hover-div1");
const hoverDiv2 = document.querySelector(".hover-div2");
const hoverDiv3 = document.querySelector(".hover-div3");
const hoverDiv4 = document.querySelector(".hover-div4");
const hoverDiv5 = document.querySelector(".hover-div5");
const hoverDiv6 = document.querySelector(".hover-div6");
const hoverDiv7 = document.querySelector(".hover-div7");
const hoverDiv8 = document.querySelector(".hover-div8");
const hoverDiv9 = document.querySelector(".hover-div9");

const followImage1 = document.getElementById("followImage1");
const followImage2 = document.getElementById("followImage2");
const followImage3 = document.getElementById("followImage3");
const followImage4 = document.getElementById("followImage4");
const followImage5 = document.getElementById("followImage5");
const followImage6 = document.getElementById("followImage6");
const followImage7 = document.getElementById("followImage7");
const followImage8 = document.getElementById("followImage8");
const followImage9 = document.getElementById("followImage9");

hoverDiv1.addEventListener("mouseover", () => {
  followImage1.style.display = "block";
});

hoverDiv1.addEventListener("mouseout", () => {
  followImage1.style.display = "none";
});

hoverDiv1.addEventListener("mousemove", (e) => {
  followImage1.style.left = `${e.pageX + 10}px`;
  followImage1.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv2.addEventListener("mouseover", () => {
  followImage2.style.display = "block";
});

hoverDiv2.addEventListener("mouseout", () => {
  followImage2.style.display = "none";
});

hoverDiv2.addEventListener("mousemove", (e) => {
  followImage2.style.left = `${e.pageX + 10}px`;
  followImage2.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv3.addEventListener("mouseover", () => {
  followImage3.style.display = "block";
});

hoverDiv3.addEventListener("mouseout", () => {
  followImage3.style.display = "none";
});

hoverDiv3.addEventListener("mousemove", (e) => {
  followImage3.style.left = `${e.pageX + 10}px`;
  followImage3.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv4.addEventListener("mouseover", () => {
  followImage4.style.display = "block";
});

hoverDiv4.addEventListener("mouseout", () => {
  followImage4.style.display = "none";
});

hoverDiv4.addEventListener("mousemove", (e) => {
  followImage4.style.left = `${e.pageX + 10}px`;
  followImage4.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv5.addEventListener("mouseover", () => {
  followImage5.style.display = "block";
});

hoverDiv5.addEventListener("mouseout", () => {
  followImage5.style.display = "none";
});

hoverDiv5.addEventListener("mousemove", (e) => {
  followImage5.style.left = `${e.pageX + 10}px`;
  followImage5.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv6.addEventListener("mouseover", () => {
  followImage6.style.display = "block";
});

hoverDiv6.addEventListener("mouseout", () => {
  followImage6.style.display = "none";
});

hoverDiv6.addEventListener("mousemove", (e) => {
  followImage6.style.left = `${e.pageX + 10}px`;
  followImage6.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv7.addEventListener("mouseover", () => {
  followImage7.style.display = "block";
});

hoverDiv7.addEventListener("mouseout", () => {
  followImage7.style.display = "none";
});

hoverDiv7.addEventListener("mousemove", (e) => {
  followImage7.style.left = `${e.pageX + 10}px`;
  followImage7.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv8.addEventListener("mouseover", () => {
  followImage8.style.display = "block";
});

hoverDiv8.addEventListener("mouseout", () => {
  followImage8.style.display = "none";
});

hoverDiv8.addEventListener("mousemove", (e) => {
  followImage8.style.left = `${e.pageX + 10}px`;
  followImage8.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
hoverDiv9.addEventListener("mouseover", () => {
  followImage9.style.display = "block";
});

hoverDiv9.addEventListener("mouseout", () => {
  followImage9.style.display = "none";
});

hoverDiv9.addEventListener("mousemove", (e) => {
  followImage9.style.left = `${e.pageX + 10}px`;
  followImage9.style.top = `${e.pageY + 10}px`;
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ?? 마우스 hover 시 텍스트 나오게 하기

const hoverText1 = document.getElementById("hoverText1");
const hoverText2 = document.getElementById("hoverText2");
const hoverText3 = document.getElementById("hoverText3");
const hoverText4 = document.getElementById("hoverText4");
const hoverText5 = document.getElementById("hoverText5");
const hoverText6 = document.getElementById("hoverText6");
const hoverText7 = document.getElementById("hoverText7");
const hoverText8 = document.getElementById("hoverText8");
const hoverText9 = document.getElementById("hoverText9"); // 추가된 텍스트 요소

hoverDiv1.addEventListener("mouseover", () => {
  followImage1.style.display = "block";
  hoverText1.style.display = "block"; // 텍스트 표시
});

hoverDiv1.addEventListener("mouseout", () => {
  followImage1.style.display = "none";
  hoverText1.style.display = "none"; // 텍스트 숨김
});

hoverDiv1.addEventListener("mousemove", (e) => {
  followImage1.style.left = `${e.pageX + 10}px`;
  followImage1.style.top = `${e.pageY + 10}px`;
  hoverText1.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText1.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});

// !!!!
hoverDiv2.addEventListener("mouseover", () => {
  followImage2.style.display = "block";
  hoverText2.style.display = "block"; // 텍스트 표시
});

hoverDiv2.addEventListener("mouseout", () => {
  followImage2.style.display = "none";
  hoverText2.style.display = "none"; // 텍스트 숨김
});

hoverDiv2.addEventListener("mousemove", (e) => {
  followImage2.style.left = `${e.pageX + 10}px`;
  followImage2.style.top = `${e.pageY + 10}px`;
  hoverText2.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText2.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
//!!!
hoverDiv3.addEventListener("mouseover", () => {
  followImage3.style.display = "block";
  hoverText3.style.display = "block"; // 텍스트 표시
});

hoverDiv3.addEventListener("mouseout", () => {
  followImage3.style.display = "none";
  hoverText3.style.display = "none"; // 텍스트 숨김
});

hoverDiv3.addEventListener("mousemove", (e) => {
  followImage3.style.left = `${e.pageX + 10}px`;
  followImage3.style.top = `${e.pageY + 10}px`;
  hoverText3.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText3.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
// !!!!
hoverDiv4.addEventListener("mouseover", () => {
  followImage4.style.display = "block";
  hoverText4.style.display = "block"; // 텍스트 표시
});

hoverDiv4.addEventListener("mouseout", () => {
  followImage4.style.display = "none";
  hoverText4.style.display = "none"; // 텍스트 숨김
});

hoverDiv4.addEventListener("mousemove", (e) => {
  followImage4.style.left = `${e.pageX + 10}px`;
  followImage4.style.top = `${e.pageY + 10}px`;
  hoverText4.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText4.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
// !!!!
hoverDiv5.addEventListener("mouseover", () => {
  followImage5.style.display = "block";
  hoverText5.style.display = "block"; // 텍스트 표시
});

hoverDiv5.addEventListener("mouseout", () => {
  followImage5.style.display = "none";
  hoverText5.style.display = "none"; // 텍스트 숨김
});

hoverDiv5.addEventListener("mousemove", (e) => {
  followImage5.style.left = `${e.pageX + 10}px`;
  followImage5.style.top = `${e.pageY + 10}px`;
  hoverText5.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText5.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
// !!!!
hoverDiv6.addEventListener("mouseover", () => {
  followImage6.style.display = "block";
  hoverText6.style.display = "block"; // 텍스트 표시
});

hoverDiv6.addEventListener("mouseout", () => {
  followImage6.style.display = "none";
  hoverText6.style.display = "none"; // 텍스트 숨김
});

hoverDiv6.addEventListener("mousemove", (e) => {
  followImage6.style.left = `${e.pageX + 10}px`;
  followImage6.style.top = `${e.pageY + 10}px`;
  hoverText6.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText6.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
// !!!!
hoverDiv7.addEventListener("mouseover", () => {
  followImage7.style.display = "block";
  hoverText7.style.display = "block"; // 텍스트 표시
});

hoverDiv7.addEventListener("mouseout", () => {
  followImage7.style.display = "none";
  hoverText7.style.display = "none"; // 텍스트 숨김
});

hoverDiv7.addEventListener("mousemove", (e) => {
  followImage7.style.left = `${e.pageX + 10}px`;
  followImage7.style.top = `${e.pageY + 10}px`;
  hoverText7.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText7.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
// !!!!
hoverDiv8.addEventListener("mouseover", () => {
  followImage8.style.display = "block";
  hoverText8.style.display = "block"; // 텍스트 표시
});

hoverDiv8.addEventListener("mouseout", () => {
  followImage8.style.display = "none";
  hoverText8.style.display = "none"; // 텍스트 숨김
});

hoverDiv8.addEventListener("mousemove", (e) => {
  followImage8.style.left = `${e.pageX + 10}px`;
  followImage8.style.top = `${e.pageY + 10}px`;
  hoverText8.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText8.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
// !!!!
hoverDiv9.addEventListener("mouseover", () => {
  followImage9.style.display = "block";
  hoverText9.style.display = "block"; // 텍스트 표시
});

hoverDiv9.addEventListener("mouseout", () => {
  followImage9.style.display = "none";
  hoverText9.style.display = "none"; // 텍스트 숨김
});

hoverDiv9.addEventListener("mousemove", (e) => {
  followImage9.style.left = `${e.pageX + 10}px`;
  followImage9.style.top = `${e.pageY + 10}px`;
  hoverText9.style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
  hoverText9.style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
});
