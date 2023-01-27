const explore = document.querySelector('.main-inner__btn');

explore.addEventListener('click', () => {
  if (explore.classList.contains('main-inner__btn--active')) {
    explore.classList.remove('main-inner__btn--active');
  }
});

const setExplore = () => {
  explore.innerHTML = 'Explore Right Now!';
};

const jsConfetti = new JSConfetti();
const tooltip = document.querySelector('.header__tooltip-text');
const link = document.querySelector('.header__slogan');
const getConfetti = async () => {
  tooltip.style.display = 'none';

  await jsConfetti.addConfetti({
    confettiNumber: 350,
    confettiColors: [
      '#ff0a54',
      '#ff477e',
      '#ff7096',
      '#ff85a1',
      '#fbb1bd',
      '#f9bec7',
    ],
  });
  link.style.cursor = 'default';
  explore.classList.add('main-inner__btn--active');
  setTimeout(setExplore, 800);
};

tooltip.addEventListener('click', getConfetti);
link.addEventListener('click', getConfetti);
