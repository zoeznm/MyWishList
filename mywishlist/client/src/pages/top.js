import React from "react";
import styles from "../styles/top.module.css"; // 스타일 시트 불러오기
import "../scripts/top.js"; // 스크립트 파일 불러오기

const Top = () => {
  return (
    <>
      <div className={styles.window_border}>
        <div className={styles.window}>
          <div className={styles.title}>
            <div className={`${styles.button} ${styles.close}`} id="window">
              &#8212;
            </div>
            Wishlist_TOP
            <div className={styles.button} id="max">
              &#9650;
            </div>
            <div className={styles.button} id="min">
              &#9660;
            </div>
          </div>
          <div className={styles.menubar}>
            <a href="/main" className={styles.back}>
              Back
            </a>
            <div className={styles.menuitem}>
              <span>F</span>ile
            </div>
            <div className={styles.menuitem}>
              <span>O</span>ptions
            </div>
            <div className={styles.menuitem}>
              <span>W</span>indows
            </div>
            <div className={styles.menuitem}>
              <span>H</span>elp
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <img src="img/folder.png" alt="" />
              <div className={styles.text}>Accessories</div>
            </div>
            <div className={styles.icon}>
              <img src="img/folder.png" alt="" />
              <div className={styles.text}>Games</div>
            </div>
            <div className={styles.icon}>
              <img src="img/folder.png" alt="" />
              <div className={styles.text}>Applications</div>
            </div>
            <div className={styles.icon}>
              <img src="img/folder.png" alt="" />
              <div className={styles.text}>main</div>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomright} ${styles.handle}`}></div>
        <div className={`${styles.topright} ${styles.handle}`}></div>
        <div className={`${styles.topleft} ${styles.handle}`}></div>
        <div className={`${styles.bottomleft} ${styles.handle}`}></div>
      </div>
      <div className={styles.window_border1}>
        <div className={styles.window1}>
          <div className={styles.title1}>
            <div className={`${styles.button1} ${styles.close1}`} id="window1">
              &#8212;
            </div>
            Supreme
            <div className={styles.button1} id="max1">
              &#9650;
            </div>
            <div className={styles.button1} id="min1">
              &#9660;
            </div>
          </div>
          <div className={styles.menubar1}>
            <div className={styles.menuitem1}>
              <span>F</span>ile
            </div>
            <div className={styles.menuitem1}>
              <span>O</span>ptions
            </div>
            <div className={styles.menuitem1}>
              <span>W</span>indows
            </div>
            <div className={styles.menuitem1}>
              <span>H</span>elp
            </div>
          </div>
          <div className={styles.supremefolder}>
            <a href="top.html">
              <img src="img/supremefolder.png" alt="" />
              shirt
            </a>
            <a href="top.html">
              <img src="img/supremefolder.png" alt="" />
              T-shirt
            </a>
            <a href="top.html">
              <img src="img/supremefolder.png" alt="" />
              jumper
            </a>
            <a href="top.html">
              <img src="img/supremefolder.png" alt="" />
              hoodie
            </a>
          </div>
          <div className={styles.icons1}>
            <div className={styles.icon1}>
              <img src="img/supreme.png" alt="" className={styles.supreme} />
              <div className={styles.text1}>Supreme</div>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomright1} ${styles.handle1}`}></div>
        <div className={`${styles.topright1} ${styles.handle1}`}></div>
        <div className={`${styles.topleft1} ${styles.handle1}`}></div>
        <div className={`${styles.bottomleft1} ${styles.handle1}`}></div>
      </div>
      <div className={styles.window_border2}>
        <div className={styles.window2}>
          <div className={styles.title2}>
            <div className={`${styles.button2} ${styles.close2}`} id="window2">
              &#8212;
            </div>
            Roa hiking
            <div className={styles.button2} id="max2">
              &#9650;
            </div>
            <div className={styles.button2} id="min2">
              &#9660;
            </div>
          </div>
          <div className={styles.menubar2}>
            <div className={styles.menuitem2}>
              <span>F</span>ile
            </div>
            <div className={styles.menuitem2}>
              <span>O</span>ptions
            </div>
            <div className={styles.menuitem2}>
              <span>W</span>indows
            </div>
            <div className={styles.menuitem2}>
              <span>H</span>elp
            </div>
          </div>
          <div className={styles.roafolder}>
            <a href="https://www.roa-hiking.com/en-kr/products/roa-clothing-chore-shirt-multicolor-j277269?variant=47460186849612">
              <img src="img/roafolder.png" alt="" />
              Shirt
            </a>
            <a href="https://www.roa-hiking.com/en-kr/products/roa-clothing-graphic-boxy-tee-black-j294310?variant=48178814583116">
              <img src="img/roafolder.png" alt="" />
              T-shirt
            </a>
            <a href="https://www.roa-hiking.com/en-kr/products/roa-clothing-roa-puffer-vest-blue-j298181?variant=48302154154316">
              <img src="img/roafolder.png" alt="" />
              Outerwear
            </a>
            <a href="https://www.roa-hiking.com/en-kr/products/roa-clothing-mohair-polo-brown-j294334?variant=48178647400780">
              <img src="img/roafolder.png" alt="" />
              Knit
            </a>
          </div>
          <div className={styles.icons2}>
            <div className={styles.icon2}>
              <img src="img/roa.png" alt="" className={styles.roa} />
              <div className={styles.text2}>Roa hiking</div>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomright2} ${styles.handle2}`}></div>
        <div className={`${styles.topright2} ${styles.handle2}`}></div>
        <div className={`${styles.topleft2} ${styles.handle2}`}></div>
        <div className={`${styles.bottomleft2} ${styles.handle2}`}></div>
      </div>
      <div className={styles.window_border3}>
        <div className={styles.window3}>
          <div className={styles.title3}>
            <div className={`${styles.button3} ${styles.close3}`} id="window3">
              &#8212;
            </div>
            Arcteryx
            <div className={styles.button3} id="max3">
              &#9650;
            </div>
            <div className={styles.button3} id="min3">
              &#9660;
            </div>
          </div>
          <div className={styles.menubar3}>
            <div className={styles.menuitem3}>
              <span>F</span>ile
            </div>
            <div className={styles.menuitem3}>
              <span>O</span>ptions
            </div>
            <div className={styles.menuitem3}>
              <span>W</span>indows
            </div>
            <div className={styles.menuitem3}>
              <span>H</span>elp
            </div>
          </div>
          <div className={styles.arcteryxfolder}>
            <a href="https://arcteryx.co.kr/goods/view?no=684064">
              <img src="img/arcteryxfolder.png" alt="" />
              Shirt
            </a>
            <a href="https://arcteryx.co.kr/goods/view?no=684078">
              <img src="img/arcteryxfolder.png" alt="" />
              T-shirt
            </a>
            <a href="https://arcteryx.co.kr/goods/view?no=683940">
              <img src="img/arcteryxfolder.png" alt="" />
              Jumper
            </a>
            <a href="https://arcteryx.co.kr/goods/view?no=684373">
              <img src="img/arcteryxfolder.png" alt="" />
              Hoodie
            </a>
          </div>
          <div className={styles.icons3}>
            <div className={styles.icon3}>
              <img src="img/arcteryx.png" alt="" className={styles.arcteryx} />
              <div className={styles.text3}>Arcteryx</div>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomright3} ${styles.handle3}`}></div>
        <div className={`${styles.topright3} ${styles.handle3}`}></div>
        <div className={`${styles.topleft3} ${styles.handle3}`}></div>
        <div className={`${styles.bottomleft3} ${styles.handle3}`}></div>
      </div>
      <div className={styles.window_border4}>
        <div className={styles.window4}>
          <div className={styles.title4}>
            <div className={`${styles.button4} ${styles.close4}`} id="window4">
              &#8212;
            </div>
            Our Lecacy
            <div className={styles.button4} id="max4">
              &#9650;
            </div>
            <div className={styles.button4} id="min4">
              &#9660;
            </div>
          </div>
          <div className={styles.menubar4}>
            <div className={styles.menuitem4}>
              <span>F</span>ile
            </div>
            <div className={styles.menuitem4}>
              <span>O</span>ptions
            </div>
            <div className={styles.menuitem4}>
              <span>W</span>indows
            </div>
            <div className={styles.menuitem4}>
              <span>H</span>elp
            </div>
          </div>
          <div className={styles.ourlegacyfolder}>
            <a href="https://www.ourlegacy.com/sincere-shirt-pleated-black-kitchen-weave">
              <img src="img/ourlegacyfolder.png" alt="" />
              Shirt
            </a>
            <a href="https://www.ourlegacy.com/strap-denim-vest-western-blue-denim">
              <img src="img/ourlegacyfolder.png" alt="" />
              Top
            </a>
            <a href="https://www.ourlegacy.com/full-zip-hood-boston-check-w">
              <img src="img/ourlegacyfolder.png" alt="" />
              Jumper
            </a>
            <a href="https://www.ourlegacy.com/mazzy-polo-beige-melange-fuzzy-alpaca">
              <img src="img/ourlegacyfolder.png" alt="" />
              Knit
            </a>
          </div>
          <div className={styles.icons4}>
            <div className={styles.icon4}>
              <img src="img/ourlegacy.png" alt="" className={styles.ourlegacy} />
              <div className={styles.text4}>Our Lecacy</div>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomright4} ${styles.handle4}`}></div>
        <div className={`${styles.topright4} ${styles.handle4}`}></div>
        <div className={`${styles.topleft4} ${styles.handle4}`}></div>
        <div className={`${styles.bottomleft4} ${styles.handle4}`}></div>
      </div>
    </>
  );
};

export default Top;
