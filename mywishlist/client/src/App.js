import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // CSS 파일 경로를 맞춰주세요

const App = () => {
  const navigate = useNavigate();
  // 카드 클릭 핸들러
  const handleCardClick = (event, cardIndex) => {
    const card = event.currentTarget;
    const flippedClass = `flipped${cardIndex}`;

    if (card.classList.contains(flippedClass)) {
      // 이미 뒤집힌 카드라면 해당 경로로 이동
      switch (cardIndex) {
        case 1:
          navigate("/top");
          break;
        case 2:
          navigate("/bottom");
          break;
        case 3:
          navigate("/bag");
          break;
        case 4:
          navigate("/shoes");
          break;
        case 5:
          navigate("/hat");
          break;
        default:
          break;
      }
    } else {
      // 카드 뒤집기 및 z-index 조정
      card.classList.add(flippedClass);
      document.querySelectorAll(".card-container .card").forEach((c) => {
        c.style.zIndex = 0;
      });
      card.style.zIndex = 4;
    }
  };

  return (
    <div className="section2" id="about">
      <div className="pattern">
        <div id="canvas"></div>
        <hr className="long-line1" />
        <hr className="long-line2" />
        <hr className="long-line3" />
        <hr className="long-line4" />
        <hr className="short-line1" />
        <hr className="short-line2" />
        <hr className="short-line3" />
        <hr className="short-line4" />
        <img src="img/eyes.png" alt="" className="img" />
        <img src="img/eyes.png" alt="" className="img1" />
        <img src="img/dream.png" alt="" className="img2" />
        <img src="img/dream.png" alt="" className="img3" />
        <img src="img/star.png" alt="" className="img4" />
        <img src="img/star.png" alt="" className="img5" />
        <img src="img/circle.png" alt="" className="img6" />
        <img src="img/circle.png" alt="" className="img7" />
      </div>
      <div className="card-container">
        {/* 각 카드에 클릭 이벤트 추가 */}
        <div className="card" onClick={(e) => handleCardClick(e, 1)}>
          <img src="img/frontcard1.png" alt="Front Card" className="card1" />
          <img src="img/backcard1.png" alt="Back Card" className="card2" />
        </div>
        <div className="card_2" onClick={(e) => handleCardClick(e, 2)}>
          <img src="img/frontcard2.png" alt="Front Card" className="card3" />
          <img src="img/backcard2.png" alt="Back Card" className="card4" />
        </div>
        <div className="card_3" onClick={(e) => handleCardClick(e, 3)}>
          <img src="img/frontcard3.png" alt="Front Card" className="card5" />
          <img src="img/backcard3.png" alt="Back Card" className="card6" />
        </div>
        <div className="card_4" onClick={(e) => handleCardClick(e, 4)}>
          <img src="img/frontcard4.png" alt="Front Card" className="card7" />
          <img src="img/backcard4.png" alt="Back Card" className="card8" />
        </div>
        <div className="card_5" onClick={(e) => handleCardClick(e, 5)}>
          <img src="img/frontcard5.png" alt="Front Card" className="card9" />
          <img src="img/backcard5.png" alt="Back Card" className="card10" />
        </div>
      </div>
      <div className="flame-wrapper">
        <div className="flame red"></div>
        <div className="flame orange"></div>
        <div className="flame gold"></div>
        <div className="flame white"></div>
        <div className="base blue"></div>
        <div className="base black"></div>
      </div>
      <div className="flame-wrapper1">
        <div className="flame red1"></div>
        <div className="flame orange1"></div>
        <div className="flame gold1"></div>
        <div className="flame white1"></div>
        <div className="base blue1"></div>
        <div className="base black1"></div>
      </div>
    </div>
  );
};

export default App;
