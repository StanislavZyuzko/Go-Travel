const { body } = document;
const menu = document.querySelector('.header__menu-body');
const menuLinks = menu.querySelectorAll('a');
const burger = document.querySelector('.burger');
let burgerActive = false;

const openLink = () => {
  body.classList.toggle('disable-scroll');
  menu.classList.toggle('header__menu-body--visible');
  burger.classList.toggle('burger--active');
  burgerActive = !burgerActive;
};

burger.addEventListener('click', () =>{
  openLink();


});

menuLinks.forEach((element) => {
  element.addEventListener('click', () => {
    // const burgerActive = document.querySelector('.burger--active');
    if (burgerActive) {
      openLink();
    }
  });
});

document.onclick = () => {
console.log(burgerActive);
}
