const { body } = document;
const menu = document.querySelector('.header__menu-body');
const menuLinks = menu.querySelectorAll('a');
const burger = document.querySelector('.burger');
let menuActive = false;

const toggleMenu = () => {
  body.classList.toggle('disable-scroll');
  menu.classList.toggle('header__menu-body--visible');
  burger.classList.toggle('burger--active');
  menuActive = !menuActive;
};

burger.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (menuActive) {
      toggleMenu();
    }
  });
});
