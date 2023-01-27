const title = document.querySelector('.header__slogan');

title.innerHTML = title.innerText
  .split('')
  .map((ltr, idx) => `<span class="ltr" style="--delay: ${idx * 100}ms">${ltr}</span>`)
  .join('');

const ltrs = document.querySelectorAll('.header__slogan .ltr');

ltrs.forEach((ltr) => {
  ltr.addEventListener('animationend', () => {
    ltr.classList.add('show');
  });
});
