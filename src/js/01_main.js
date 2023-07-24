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

const telephone = document.querySelector('.feedback__tel-input');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};
const mask = IMask(telephone, maskOptions);


const submit = document.querySelector('.feedback__button');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

const inputName = document.querySelector('.feedback__name-input');
const inputNameText = document.querySelector('.feedback__name-text');

const inputEmail = document.querySelector('.feedback__email-input');
const inputEmailText = document.querySelector('.feedback__email-text');

const inputTel = document.querySelector('.feedback__tel-input');
const inputTelText = document.querySelector('.feedback__tel-text');

inputName.addEventListener('input', () => {
  console.log(1)
  if (inputName.value.length > 0) {
    inputNameText.style.display = 'flex';
  } else {
    inputNameText.style.display = 'none';
  }
});

inputTel.addEventListener('input', () => {
  if (inputTel.value.length > 0) {
    inputTelText.style.display = 'flex';
  } else {
    inputTelText.style.display = 'none';
  }
});

inputEmail.addEventListener('input', () => {
  if (inputEmail.value.length > 0) {
    inputEmailText.style.display = 'flex';
  } else {
    inputEmailText.style.display = 'none';
  }
});