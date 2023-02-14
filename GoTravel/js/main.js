"use strict";
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
;
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
;
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
;
const CLASS_LIST = {
   MODAL: "modal",
   MODAL_ACTIVE: "modal--active",
   MODAL_HAS_SCROLL: "modal--has-scroll",
   MODAL_DIALOG_BODY: "modal__dialog-body",
   TRIGGER_OPEN: "modal__open",
   TRIGGER_CLOSE: "modal__close",
};

const paddingOffset = window.innerWidth - document.body.offsetWidth;

const hideScroll = () => {
   document.body.style.paddingRight = `${paddingOffset}px`;

   // to display correctly in Safari
   let pagePosition = window.scrollY;
   document.body.classList.add("disable-scroll");
   document.body.style.top = -pagePosition + "px";
   document.body.dataset.position = pagePosition;
};

const showScroll = (event) => {
   if (event.propertyName === "transform") {
      document.body.style.paddingRight = "";

      // to display correctly in Safari
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.classList.remove("disable-scroll");
      document.body.style.top = "auto";
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute("data-position");

      event.target
         .closest(`.${CLASS_LIST.MODAL}`)
         .removeEventListener("transitionend", showScroll);
   }
};

document.addEventListener("click", (event) => {
   if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
      event.preventDefault();

      const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
      const modalId = target.getAttribute("href").replace("#", "");
      const modal = document.getElementById(modalId);

      hideScroll();

      modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
   }

   if (
      event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
      event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
   ) {
      event.preventDefault();

      const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
      modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
      modal.addEventListener("transitionend", showScroll);
   }
});

// Modal video

function OpenVideoModal(htmlId, htmlDataAttr) {
   const videoModalOpen = document.getElementById(htmlId);
   const videoUrl = videoModalOpen.getAttribute(htmlDataAttr);

   let frame;

   videoModalOpen.addEventListener("click", () => {
      frame = document.querySelector(".modal__video video");
      frame.src = videoUrl;
   });

   document.addEventListener("click", (event) => {
      if (
         event.target.closest(".modal__close--video") ||
         event.target.classList.contains("modal--video")
      ) {
         event.preventDefault();
         frame.src = " ";
      }
   });
}

const videoModalDialog = document.querySelector(".modal__dialog--video");

document.addEventListener("DOMContentLoaded", (event) => {
   event.preventDefault();
   OpenVideoModal("video-open", "data-video-url");

   // to display correctly in Safari
   const getVisible = () => {
      videoModalDialog.style.display = "block";
   };
   setTimeout(getVisible, 1000);
});
;
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
;
document.querySelectorAll('.rating__item').forEach((item) => item.addEventListener('click', () => {
  item.parentNode.dataset.totalValue = item.dataset.itemValue;
}));
;
const subscribeForm = document.forms.subscribeform;
const subscribeInput = subscribeForm.subscribemail;
const subscribeButton = subscribeForm.subscribesubmit;
const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;

const getError = () => {
  subscribeInput.style.border = '2px solid red';
  subscribeButton.disabled = true;
};

const getValid = () => {
  subscribeInput.style.border = '2px solid green';
  subscribeButton.disabled = false;
};

const getValidMessage = (message, callback) => {
  const delMessage = subscribeForm.querySelector('.subscribe__valid');
  if (delMessage) {
    delMessage.remove();
  }

  let className;
  if (callback.name === 'getError') {
    className = 'subscribe__valid--error';
  }
  if (callback.name === 'getValid') {
    className = 'subscribe__valid--success';
  }

  const messageDiv = document.createElement('div');
  messageDiv.classList = `subscribe__valid  ${className}`;
  messageDiv.innerHTML = message;
  subscribeInput.before(messageDiv);

  callback();
};

subscribeForm.addEventListener('input', () => {
  const { value } = subscribeInput;
  if (!value) {
    getValidMessage('E-mail is required', getError);
  }

  if (mailRegExp.test(value)) {
    getValidMessage('Successfully!', getValid);
  } else if (value) {
    getValidMessage('Enter correct e-mail', getError);
  }
});

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  location.reload();
});
;



