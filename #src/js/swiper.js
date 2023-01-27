const imageSlider = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  watchOverflow: true,

  initialSlide: 2,

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1252: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});
