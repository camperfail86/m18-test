const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  effect: 'slider',
  spaceBetween: 72,
  slidesPerView: 2,
  centeredSlidesBounds: true,
  initialSlide: 1, 
  loop: true,
  speed: 650,

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});