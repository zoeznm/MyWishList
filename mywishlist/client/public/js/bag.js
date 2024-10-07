console.log("hello")// ! 팝업창 
document.addEventListener('DOMContentLoaded', (event) => {
  const popup = document.getElementById('popup');
  const closePopupBtn = document.getElementById('closePopupBtn');

  // 페이지 로드 시 팝업 창을 표시
  popup.style.display = 'block';

  closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// ! enter 클릭시 text 나오게 하기 
var currentIndex = 0;
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        var currentText = document.getElementById("text" + (currentIndex + 1));
        if (currentText) {
            currentText.style.display = "block";
            currentIndex++;
            currentText.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        }
    }
});

let currentView = 'home';
let enterCount = 0; // Enter 키 누른 횟수를 저장하는 변수
let isSwitched = false; // 화면이 전환되었는지를 추적하는 변수

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && !isSwitched) {
    enterCount++;
    if (enterCount === 6) {
      currentView();
      enterCount = 0; // 카운트를 리셋하여 다시 6번 셀 수 있도록 합니다.
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const inputContainer = document.getElementById('input-container');
  const enterZone = document.querySelector('.enterzone');
  const words = ["wishlist", "lemaire", "amomento", "heritagefloss", "032c", "kapital", "THX☻"];
  const infoTexts = [
    '<span>▶ <a href="https://www.lemaire.fr/products/mini-fortune-croissant-bag-soft-nappa-leather-dark-chocolate" target="_blank">lemaire</a> &nbsp; : MINI FORTUNE CROISSANT BAG</span>',
    '<span>▶ <a href="https://example.com/amomento" target="_blank">amomento</a> &nbsp; : HAND MADE BIG CROCHET BAG</span>',
    '<span>▶ <a href="https://example.com/heritagefloss" target="_blank">heritagefloss</a> &nbsp; : NYLON WASHER SPORTS BAG</span>',
    '<span>▶ <a href="https://example.com/032c" target="_blank">032c</a> &nbsp; : \'TEAM\' TAG SHOULDER BAG</span>',
    '<span>▶ <a href="https://example.com/kapital" target="_blank">kapital</a> &nbsp; : 箔キャンバス　ブリックツールBAG</span>'
  ];

  const clickText = "click the text";
  let index = 0;

  // Function to create a new input box
  function createNewInput() {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.maxLength = words[index].length;
    newInput.placeholder = words[index];
    newInput.style.setProperty('--n', words[index].length);
    inputContainer.appendChild(newInput);
    newInput.focus(); // Focus the new input

    // Event listener to handle input submission
    newInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default behavior (form submission)
        const currentText = newInput.value.trim().toLowerCase();
        if (currentText === words[index]) {
          // Show corresponding infoText in enterZone
          const infoP = document.createElement('p');
          infoP.className = 'enter1';
          infoP.innerHTML = `${infoTexts[index]} &nbsp; : ${clickText}`;
          enterZone.appendChild(infoP);

          newInput.remove(); // Remove current input
          index++;
          if (index < words.length) {
            createNewInput(); // Create next input
          } else {
            // Show enterZone when all inputs are correct
            enterZone.style.display = 'block';
          }
        } else {
          // Incorrect input: Show alert and keep the input box
          alert('다시 쓰세요!');
          newInput.value = ''; // Clear input value
          newInput.focus(); // Focus back on the input
        }
      }
    });
  }

  // Initial setup: hide enterZone and create the first input box

  createNewInput();
});


