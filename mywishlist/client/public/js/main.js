// ! 카드 뒤집기 _1번카드
document.querySelector(".card").addEventListener("click", function () {
  if (this.classList.contains("flipped")) {
    // If the card is already flipped, navigate to top.html
    window.location.href = "/top";
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add("flipped");

    // Reset z-index for all cards
    document.querySelectorAll(".card-container .card").forEach((card) => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});

// ! 카드 뒤집기_2번카드
document.querySelector(".card_2").addEventListener("click", function () {
  if (this.classList.contains("flipped1")) {
    // If the card is already flipped, navigate to top.html
    window.location.href = "/bottom";
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add("flipped1");

    // Reset z-index for all cards
    document.querySelectorAll(".card-container .card_2").forEach((card) => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});

// ! 카드 뒤집기_3번카드
document.querySelector(".card_3").addEventListener("click", function () {
  if (this.classList.contains("flipped2")) {
    // If the card is already flipped, navigate to top.html
    window.location.href = "/bag";
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add("flipped2");

    // Reset z-index for all cards
    document.querySelectorAll(".card-container .card_3").forEach((card) => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});

// ! 카드 뒤집기_4번카드
document.querySelector(".card_4").addEventListener("click", function () {
  if (this.classList.contains("flipped3")) {
    // If the card is already flipped, navigate to top.html
    window.location.href = "/shoes";
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add("flipped3");

    // Reset z-index for all cards
    document.querySelectorAll(".card-container .card_4").forEach((card) => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});

// ! 카드 뒤집기_5번카드
document.querySelector(".card_5").addEventListener("click", function () {
  if (this.classList.contains("flipped4")) {
    // If the card is already flipped, navigate to top.html
    window.location.href = "/hat";
  } else {
    // Otherwise, flip the card and bring it to the front
    this.classList.add("flipped4");

    // Reset z-index for all cards
    document.querySelectorAll(".card-container .card_5").forEach((card) => {
      card.style.zIndex = 0;
    });

    // Set z-index for the clicked card
    this.style.zIndex = 4;
  }
});
