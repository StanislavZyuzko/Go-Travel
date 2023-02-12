const { body } = document;
const menu = document.querySelector('.header__menu-body');
const burger = document.querySelector('.burger');
const menuLinks = menu.querySelectorAll('a');

const closeLink = () => {
  body.classList.toggle('disable-scroll');
  menu.classList.toggle('header__menu-body--visible');
  burger.classList.toggle('burger--active');
};

burger.addEventListener('click', closeLink);
menuLinks.forEach((elem) => {
  elem.addEventListener('click', closeLink);
});
