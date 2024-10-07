// 클래스별 링크 주소 정의
const links = {
  roa: {
    buy: "https://www.roa-hiking.com/en-kr/products/roa-accessories-logo-beanie-beige-j277338?variant=47460223877452",
    save: "save", // 'save'를 클릭할 때 페이지를 새로 고침하도록 설정
  },
  kapital: {
    buy: "https://fruitsfamily.com/product/1d6k8/%EC%BA%90%ED%94%BC%ED%83%88-%EC%82%AC%EC%8B%9C%EC%BD%94%EC%BA%A1-%EC%83%88%EC%A0%9C%ED%92%88",
    save: "save",
  },
  cayl: {
    buy: "https://cayl.co.kr/product/chk-trail-cap-green/2000/category/60/display/1/",
    save: "save",
  },
  chrome: {
    buy: "https://kream.co.kr/products/184869",
    save: "save",
  },
  dept: {
    buy: "https://gallerydept.com/collections/hats/products/gdxla-rams-hat",
    save: "save",
  },
};

document.querySelectorAll(".left > div").forEach((item) => {
  item.addEventListener("click", () => {
    const images = item.getAttribute("data-images").split(",");
    const rightDiv = document.querySelector(".right");

    rightDiv.innerHTML = ""; // 기존 내용 제거

    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image;
      rightDiv.appendChild(imgElement);
    });

    // 클릭된 요소의 클래스 이름을 가져옵니다.
    const className = item.className.split(" ")[0];
    const linksForClass = links[className] || {};

    // 링크 추가 div 생성
    const div1 = document.createElement("div");
    div1.classList.add("additional-div");
    const link1 = document.createElement("a");
    link1.href = linksForClass.buy || "#";
    link1.textContent = "Let's go buy it now";
    link1.target = "_blank"; // 링크를 새 탭에서 열기
    div1.appendChild(link1);

    const div2 = document.createElement("div");
    div2.classList.add("additional-div");
    const link2 = document.createElement("a");
    if (linksForClass.save === "save") {
      link2.textContent = "Let's save money...";
      link2.href = "#"; // 빈 링크
      link2.onclick = (event) => {
        event.preventDefault(); // 링크 기본 동작 방지
        window.location.reload(); // 페이지 새로고침
      };
    } else {
      const saveLink = linksForClass.save || "#";
      link2.href = saveLink;
      link2.textContent = "Let's save money...";
      link2.target = "_blank"; // 링크를 새 탭에서 열기
    }
    div2.appendChild(link2);

    rightDiv.appendChild(div1);
    rightDiv.appendChild(div2);
  });
});
