import React, { useEffect, useRef } from "react";
import styles from "../styles/shoes.module.css"; 

const Shoes = () => {
  const shoesData = [
    {
      id: 1,
      image: 'img/amomentoshoe.jpg',
      alt: 'amomentoshoe',
      text: 'amomento',
      link: 'https://amomento.co/product/detail.html?product_no=894&cate_no=50&display_group=1',
    },
    {
      id: 2,
      image: 'img/roashoe.jpg',
      alt: 'roashoe',
      text: 'roa hiking',
      link: 'https://www.roa-hiking.com/en-kr/products/roa-footwear-sandal-blue-j285905?variant=47725437813068',
    },
    {
      id: 3,
      image: 'img/demonshoe.jpg',
      alt: 'demonshoe',
      text: 'demon',
      link: 'https://demonfootwear.com/products/vipara-sneaker-black',
    },
    {
      id: 4,
      image: 'img/onshoe.jpg',
      alt: 'onshoe',
      text: 'on',
      link: 'https://www.on.com/ko-kr/products/cloudboom-echo-3-0-3md1059/mens/undyed-white-mint-shoes-3MD10591105',
    },
    {
      id: 5,
      image: 'img/lemaireshoe.jpg',
      alt: 'lemaireshoe',
      text: 'lemaire',
      link: 'https://www.lemaire.fr/products/flat-piped-slippers-bk999-black-w-23s',
    },
    {
      id: 6,
      image: 'img/nordashoe.jpg',
      alt: 'nordashoe',
      text: 'norda',
      link: 'https://outofall.co.kr/product/norda-002-cinder%EB%85%B8%EB%8B%A4-002-%EC%8B%A0%EB%8D%94/544/category/58/display/1/',
    },
    {
      id: 7,
      image: 'img/newshoe.jpg',
      alt: 'newshoe',
      text: 'newbalance',
      link: 'https://kream.co.kr/products/288247',
    },
    {
      id: 8,
      image: 'img/hokashoe.jpg',
      alt: 'hokashoe',
      text: 'hoka',
      link: 'https://outofall.co.kr/product/hoka-tor-ultra-hi-lunar-rock-diva-blue%ED%98%B8%EC%B9%B4-%ED%86%A0%EB%A5%B4-%EC%9A%B8%ED%8A%B8%EB%9D%BC-%ED%95%98%EC%9D%B4-%EB%A3%A8%EB%82%98-%EB%9D%BD%EB%94%94%EB%B0%94-%EB%B8%94%EB%A3%A8/730/category/82/display/1/',
    },
    {
      id: 9,
      image: 'img/nikeshoe.jpg',
      alt: 'nikeshoe',
      text: 'nike',
      link: 'https://kream.co.kr/products/308111?fetchRelated=true',
    },
  ];

  const followImages = useRef([]);
  const hoverTexts = useRef([]);

  useEffect(() => {
    const hoverDivs = Array.from(document.querySelectorAll('.hover_div'));
    console.log(hoverDivs.length); 

    hoverDivs.forEach((hoverDiv, index) => {
      hoverDiv.addEventListener("mouseover", () => {
        followImages.current[index].style.display = "block";
        hoverTexts.current[index].style.display = "block"; // 텍스트 표시
      });
      
      hoverDiv.addEventListener("mouseout", () => {
        followImages.current[index].style.display = "none";
        hoverTexts.current[index].style.display = "none"; // 텍스트 숨김
      });
      
      hoverDiv.addEventListener("mousemove", (e) => {
        followImages.current[index].style.left = `${e.pageX + 10}px`;
        followImages.current[index].style.top = `${e.pageY + 10}px`;
        hoverTexts.current[index].style.left = `${e.pageX + 10}px`; // 텍스트 위치 이동
        hoverTexts.current[index].style.top = `${e.pageY - 30}px`; // 텍스트 위치 이동
      });
    });

    return () => {
      hoverDivs.forEach((hoverDiv, index) => {
        hoverDiv.removeEventListener("mouseover", () => {});
        hoverDiv.removeEventListener("mouseout", () => {});
        hoverDiv.removeEventListener("mousemove", () => {});
      });
    };
  }, []);

  return (
    <div className={styles.grid_container}>
      <a href="/main" className={styles.back}><p>Back</p></a>
      {shoesData.map(shoe => (
        <div key={shoe.id} className={`${styles.grid_item} ${styles.hover_div} ${styles[`hover_div${shoe.id}`]}`}>
          <img
            className={`${styles.follow_image} ${styles[`follow_image${shoe.id}`]}`}
            ref={el => followImages.current[shoe.id - 1] = el}
            src={shoe.image}
            alt={shoe.alt}
            style={{
              display: 'none',
              position: 'absolute',
              pointerEvents: 'none',
              transition: 'all 0.1s ease', // 부드러운 트랜지션 효과
            }}
          />
          <button onClick={() => window.location.href = shoe.link}>click the link</button>
          <h1
            className={styles.hover_text}
            ref={el => hoverTexts.current[shoe.id - 1] = el}
            style={{
              display: 'none',
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: '#fff',
              padding: '5px',
              borderRadius: '3px',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {shoe.text}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
