var swiper2 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  direction: "vertical",
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    426: {
      direction: "horizontal",
    },
    550: {
      direction: "vertical",
    },
  },
});

var swiper = new Swiper(".goodSwiper", {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
    1301: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  thumbs: {
    swiper: swiper2,
  },
  navigation: {
    prevEl: ".goods-button-prev",
    nextEl: ".goods-button-next",
  },
});

if (swiper.slides.length < 5) {
  swiper.navigation.nextEl.style.display = "none";
  swiper.navigation.prevEl.style.display = "none";
}
