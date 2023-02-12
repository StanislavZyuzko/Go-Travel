const { body } = document;
console.log('testConnect');
const menu = document.querySelector('.header__menu-body');
const menuLinks = menu.querySelectorAll('a');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  body.classList.toggle('disable-scroll');
  menu.classList.toggle('header__menu-body--visible');
  burger.classList.toggle('burger--active');
});

menuLinks.forEach(element => {
    element.addEventListener('click', () => {
        body.classList.toggle('disable-scroll');
        menu.classList.toggle('header__menu-body--visible');
        burger.classList.toggle('burger--active');
      });
});
