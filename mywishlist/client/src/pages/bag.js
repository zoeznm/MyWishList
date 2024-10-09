import React, { useState, useEffect } from "react";
import "../styles/bag.css";
import "../scripts/bag.js"; // 스크립트 임포트 필요 시 추가

const App = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enterCount, setEnterCount] = useState(0);
  const words = [
    "wishlist",
    "lemaire",
    "amomento",
    "heritagefloss",
    "032c",
    "kapital",
    "THX☻",
  ];
  const infoTexts = [
    '<span>▶ <a href="https://www.lemaire.fr/products/mini-fortune-croissant-bag-soft-nappa-leather-dark-chocolate" target="_blank">lemaire</a> &nbsp; : MINI FORTUNE CROISSANT BAG</span>',
    '<span>▶ <a href="https://example.com/amomento" target="_blank">amomento</a> &nbsp; : HAND MADE BIG CROCHET BAG</span>',
    '<span>▶ <a href="https://example.com/heritagefloss" target="_blank">heritagefloss</a> &nbsp; : NYLON WASHER SPORTS BAG</span>',
    '<span>▶ <a href="https://example.com/032c" target="_blank">032c</a> &nbsp; : \'TEAM\' TAG SHOULDER BAG</span>',
    '<span>▶ <a href="https://example.com/kapital" target="_blank">kapital</a> &nbsp; : 箔キャンバス　ブリックツールBAG</span>',
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        setEnterCount((prevCount) => prevCount + 1);
        const currentText = document.getElementById(`text${currentIndex + 1}`);
        if (currentText) {
          currentText.style.display = "block";
          setCurrentIndex((prevIndex) => prevIndex + 1);
          currentText.scrollIntoView({ behavior: "smooth", block: "center" });
        }

        // 만약 6번 엔터를 누르면 다른 화면으로 전환하는 로직
        if (enterCount === 6) {
          // 전환 로직 구현
          setEnterCount(0); // 엔터 횟수 리셋
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, enterCount]);

  useEffect(() => {
    const inputContainer = document.getElementById("input-container");
    const enterZone = document.querySelector(".enterzone");

    let index = 0;

    const createNewInput = () => {
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.maxLength = words[index].length;
      newInput.placeholder = words[index];
      inputContainer.appendChild(newInput);
      newInput.focus();

      newInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          const currentText = newInput.value.trim().toLowerCase();
          if (currentText === words[index]) {
            const infoP = document.createElement("p");
            infoP.className = "enter1";
            infoP.innerHTML = `${infoTexts[index]} &nbsp; : click the text`;
            enterZone.appendChild(infoP);

            newInput.remove();
            index++;
            if (index < words.length) {
              createNewInput();
            } else {
              enterZone.style.display = "block";
            }
          } else {
            alert("다시 쓰세요!");
            newInput.value = "";
            newInput.focus();
          }
        }
      });
    };

    createNewInput();
  }, []);

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="container" id="container">
      <div className="section" id="home">
        {popupVisible && (
          <div id="popup" className="popup">
            <div className="popup-content">
              <span id="closePopupBtn" className="close" onClick={closePopup}>
                &times;
              </span>
              <h2>MUST READ</h2>
              <div className="poptext1">
                {" "}
                ❉ &nbsp; First, enter “wishlist” in the blank field.
              </div>
              <div className="poptext2">
                {" "}
                ❉ &nbsp; If you filled in the blank field, you can now "Enter" a
                total of 5 times.
              </div>
              <div className="poptext3">
                {" "}
                ❉ &nbsp; If you click Enter, you can see my five above systems.
              </div>
              <div className="poptext4">
                {" "}
                ❉ &nbsp; Click to go to the site and view it.
              </div>
            </div>
          </div>
        )}

        <h1 className="title">Check the words</h1>
        <h2 className="title2">
          ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉ ❉
        </h2>

        <div id="input-container"></div>
        <div className="enterzone" id="enterzone"></div>

        <h2 className="title3">Enter list</h2>
        <div className="enterzone">
          <p className="enter1" id="text1">
            Click the text
          </p>
          <p className="enter1" id="text2">
            <a href="https://www.lemaire.fr/products/mini-fortune-croissant-bag-soft-nappa-leather-dark-chocolate">
              ▶ lemaire &nbsp; :MINI FORTUNE CROISSANT BAG
            </a>
          </p>
          <p className="enter1" id="text3">
            <a href="https://amomento.co/product/detail.html?product_no=856&cate_no=57&display_group=1">
              ▶ amomento &nbsp; :HAND MADE BIG CROCHET BAG
            </a>
          </p>
          <p className="enter1" id="text4">
            <a href="https://heritagefloss.com/product/nylon-washer-sports-bag-black/3586/category/134/display/1/">
              ▶ heritagefloss &nbsp; :NYLON WASHER SPORTS BAG
            </a>
          </p>
          <p className="enter1" id="text5">
            <a href="https://032c.com/product/team-tag-shoulder-bag">
              ▶ 032c &nbsp; :"TEAM" TAG SHOULDER BAG
            </a>
          </p>
          <p className="enter1" id="text6">
            <a href="https://www.kapital-webshop.jp/category/BAG/K2309XB504.html">
              ▶ kapital &nbsp; :箔キャンバス　ブリックツールBAG
            </a>
          </p>
        </div>

        <div className="top">
          <div className="activity-feed1">
            <div className="scroll-container1">
              <div className="scroll-text1">
                <ul>
                  <li>Please give me money to buy some clothes!</li>
                  <li>With your support, this child buys clothes!</li>
                  <li>453019-56-087003 This is Nonghyup..</li>
                </ul>
              </div>
            </div>
            <div className="tlqkf">
              <p>Awesome and webpage!</p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="activity-feed">
            <h2>C'mon and check this!</h2>
            <div className="scroll-container">
              <div className="scroll-text">
                <ul>
                  <li>Please give me money to buy some clothes!</li>
                  <li>With your support, this child buys clothes!</li>
                  <li>453019-56-087003 This is Nonghyup..</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/main" className="back3">
        Back
      </a>
    </div>
  );
};

export default App;
