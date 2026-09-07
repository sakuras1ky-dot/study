cnst main-visual-bg = document.querySelectorAll(".hero .main-visual .main-visual-bg");
// console.log(mainvisualbg);

const swHero = new Swiper(".sw-hero", {
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
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
