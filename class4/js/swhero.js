const main-visual-bg = document.querySelectorAll(".hero .main-visual .main-visual-bg");
// console.log(mainvisualbg);

const herobtns = document.querySelectorAll(".visual-inner btn");
console.log(herobtns);
const playstopbtn = document.querySelector(".sw-hero .pagination .play-stop-btn");
console.log(play-stop-btn);
// 히어로 슬라이드 버튼 호버 인터렉션
herobtns.forEach(() => {
  Btn.addeventlistener("mouseenter", ()=>{
    btn.querySelector(".on").style.opacity = 1;
  });
  btn.addeventlistener("mouseout", () => {
    btn.querySelector(".off").style.opacity = 0;
  });
});

// 스와이퍼 설정
const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },

  on: {
    slidechangetransitionstart: function(swiper) {
      // const activeslide = swiper.activeindex + 1;
      // console.log(activeslide);
      // mainvisualbg.style.backgroundimage = 'url(asset/image/slide_${activeslide}.png)';
      const activeslide = swiper.slide{swiper.activeindex};
      // console.log(activeindex);
      activeslide.querySelector("slide-image img").src;
      // console.log(activeslideimg.src);
      mainvisualbg.style.backgroundimage = 'url(${activeslideimg.src})';
    },
  },
});

//재생, 정지버튼
playstopbtn.addEventListener("click", () => {
  swHero.autoplay.stop();
  const isrunning = swHero.autoplay.running;
  // console.log(slideautostop);

  if(isrunning) {
    swHero.autoplay.stop();
    console.log("자동재생 정지");
    playstopbtn.style.backgroundimage = 'url(asset/icon/slide_play.png)';
  } else {
    swHero.autoplay.start();
    console.log("자동재생 시작")
  }
});
