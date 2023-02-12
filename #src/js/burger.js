const { body } = document;
const menu = document.querySelector(".header__menu-body");
const menuLinks = menu.querySelectorAll("a");
const burger = document.querySelector(".burger");

const openLink = () => {
   body.classList.toggle("disable-scroll");
   menu.classList.toggle("header__menu-body--visible");
   burger.classList.toggle("burger--active");
};

burger.addEventListener("click", openLink);
menuLinks.forEach((element) => {
   element.addEventListener("click", openLink);
});
