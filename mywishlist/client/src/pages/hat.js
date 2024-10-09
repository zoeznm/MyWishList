import React from "react";
import "../styles/hat.css";
import "../scripts/hat.js";

const Hat = () => {
  const hatsData = [
    {
      id: 1,
      name: "Roa beanie",
      description:
        "This is a ROA beanie. It's not one of my favorite brands, but the hat is nice, so I decided to add it.",
      images: ["img/roa_front.jpg", "img/roa_back.jpg", "img/roa_detail.jpg"],
    },
    {
      id: 2,
      name: "Kapital cap",
      description:
        "I usually like a vintage vibe, and this hat really caught my eye. Anyone willing to buy it for me?",
      images: [
        "img/kapital_front.jpg",
        "img/kapital_top.jpg",
        "img/kapital_side.jpg",
        "img/kapital_back.jpg",
      ],
    },
    {
      id: 3,
      name: "Cayl cap",
      description:
        "Honestly, this hat is something anyone would find cute, not just me. Don’t you think so? But if not, never mind~",
      images: [
        "img/cayl_front.jpg",
        "img/cayl_side.jpg",
        "img/cayl_back.jpg",
        "img/cayl_detail.jpg",
        "img/cayl_detail2.jpg",
      ],
    },
    {
      id: 4,
      name: "Chrome Hearts cap",
      description:
        "Even if I don't have the money, I can still want it. Even if I don't have the money, I can still keep it on my wishlist.",
      images: [
        "img/chrome_front.jpg",
        "img/chrome_other.jpg",
        "img/chrome_detail.jpg",
      ],
    },
    {
      id: 5,
      name: "GALLERY DEPT",
      description:
        "In a way, this might be the first hat I get from here. Even if it's not this specific hat, I would love to have a hat from this brand.",
      images: ["img/dept_front.jpg", "img/dept_back.jpg"],
    },
  ];

  return (
    <div className="wrapper">
      <div className="left">
        <a className="back" href="/main">
          Back
        </a>
        <p className="text">
          Here is the final page showing my wishlist. Thank you so much for
          checking out all five cards. The fifth card is about something I
          include in my monthly fashion spending—hats. Hats are an inseparable
          friend to me. As someone who might be considered a hat enthusiast
          (though I don't own many), here is my hat wishlist. Thank you!
        </p>
        <p className="text2">
          Some of them are a bit expensive, but hey, it's a wishlist!
        </p>
        {hatsData.map((hat) => (
          <div
            key={hat.id}
            className={hat.name.toLowerCase().replace(" ", "_")}
          >
            <h3>{hat.name}</h3>
            <p>{hat.description}</p>
          </div>
        ))}
      </div>
      <div className="right"></div>
    </div>
  );
};
export default Hat;
