import React from "react";
import "../styles/top.css"; // 스타일 시트 불러오기
import "../scripts/top.js"; // 스크립트 파일 불러오기

const Top = () => {
  return (
    <>
      <div className="window-border">
        <div className="window">
          <div className="title">
            <div className="button close" id="window">
              &#8212;
            </div>
            Wishlist_TOP
            <div className="button" id="max">
              &#9650;
            </div>
            <div className="button" id="min">
              &#9660;
            </div>
          </div>
          <div className="menubar">
            <a href="/main" className="back">
              Back
            </a>
            <div className="menuitem">
              <span>F</span>ile
            </div>
            <div className="menuitem">
              <span>O</span>ptions
            </div>
            <div className="menuitem">
              <span>W</span>indows
            </div>
            <div className="menuitem">
              <span>H</span>elp
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="img/folder.png" alt="" />
              <div className="text">Accessories</div>
            </div>
            <div className="icon">
              <img src="img/folder.png" alt="" />
              <div className="text">Games</div>
            </div>
            <div className="icon">
              <img src="img/folder.png" alt="" />
              <div className="text">Applications</div>
            </div>
            <div className="icon">
              <img src="img/folder.png" alt="" />
              <div className="text">main</div>
            </div>
          </div>
        </div>
        <div className="bottomright handle"></div>
        <div className="topright handle"></div>
        <div className="topleft handle"></div>
        <div className="bottomleft handle"></div>
      </div>
      <div className="window-border1">
        <div className="window1">
          <div className="title1">
            <div className="button1 close1" id="window1">
              &#8212;
            </div>
            Supreme
            <div className="button1" id="max1">
              &#9650;
            </div>
            <div className="button1" id="min1">
              &#9660;
            </div>
          </div>
          <div className="menubar1">
            <div className="menuitem1">
              <span>F</span>ile
            </div>
            <div className="menuitem1">
              <span>O</span>ptions
            </div>
            <div className="menuitem1">
              <span>W</span>indows
            </div>
            <div className="menuitem1">
              <span>H</span>elp
            </div>
          </div>
          <div className="supremefolder">
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
          <div className="icons1">
            <div className="icon1">
              <img src="img/supreme.png" alt="" className="supreme" />
              <div className="text1">Supreme</div>
            </div>
          </div>
        </div>
        <div className="bottomright1 handle1"></div>
        <div className="topright1 handle1"></div>
        <div className="topleft1 handle1"></div>
        <div className="bottomleft1 handle1"></div>
      </div>
      <div className="window-border2">
        <div className="window2">
          <div className="title2">
            <div className="button2 close2" id="window2">
              &#8212;
            </div>
            Roa hiking
            <div className="button2" id="max2">
              &#9650;
            </div>
            <div className="button2" id="min2">
              &#9660;
            </div>
          </div>
          <div className="menubar2">
            <div className="menuitem2">
              <span>F</span>ile
            </div>
            <div className="menuitem2">
              <span>O</span>ptions
            </div>
            <div className="menuitem2">
              <span>W</span>indows
            </div>
            <div className="menuitem2">
              <span>H</span>elp
            </div>
          </div>
          <div className="roafolder">
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
          <div className="icons2">
            <div className="icon2">
              <img src="img/roa.png" alt="" className="roa" />
              <div className="text2">Roa hiking</div>
            </div>
          </div>
        </div>
        <div className="bottomright2 handle2"></div>
        <div className="topright2 handle2"></div>
        <div className="topleft2 handle2"></div>
        <div className="bottomleft2 handle2"></div>
      </div>
      <div className="window-border3">
        <div className="window3">
          <div className="title3">
            <div className="button3 close3" id="window3">
              &#8212;
            </div>
            Arcteryx
            <div className="button3" id="max3">
              &#9650;
            </div>
            <div className="button3" id="min3">
              &#9660;
            </div>
          </div>
          <div className="menubar3">
            <div className="menuitem3">
              <span>F</span>ile
            </div>
            <div className="menuitem3">
              <span>O</span>ptions
            </div>
            <div className="menuitem3">
              <span>W</span>indows
            </div>
            <div className="menuitem3">
              <span>H</span>elp
            </div>
          </div>
          <div className="arcteryxfolder">
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
          <div className="icons3">
            <div className="icon3">
              <img src="img/arcteryx.png" alt="" className="arcteryx" />
              <div className="text3">Arcteryx</div>
            </div>
          </div>
        </div>
        <div className="bottomright3 handle3"></div>
        <div className="topright3 handle3"></div>
        <div className="topleft3 handle3"></div>
        <div className="bottomleft3 handle3"></div>
      </div>
      <div className="window-border4">
        <div className="window4">
          <div className="title4">
            <div className="button4 close4" id="window4">
              &#8212;
            </div>
            Our Lecacy
            <div className="button4" id="max4">
              &#9650;
            </div>
            <div className="button4" id="min4">
              &#9660;
            </div>
          </div>
          <div className="menubar4">
            <div className="menuitem4">
              <span>F</span>ile
            </div>
            <div className="menuitem4">
              <span>O</span>ptions
            </div>
            <div className="menuitem4">
              <span>W</span>indows
            </div>
            <div className="menuitem4">
              <span>H</span>elp
            </div>
          </div>
          <div className="ourlegacyfolder">
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
          <div className="icons4">
            <div className="icon4">
              <img src="img/ourlegacy.png" alt="" className="ourlegacy" />
              <div className="text4">Our Lecacy</div>
            </div>
          </div>
        </div>
        <div className="bottomright4 handle4"></div>
        <div className="topright4 handle4"></div>
        <div className="topleft4 handle4"></div>
        <div className="bottomleft4 handle4"></div>
      </div>
    </>
  );
};

export default Top;
