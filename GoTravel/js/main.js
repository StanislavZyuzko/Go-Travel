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
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  menu.classList.toggle('header__menu-body--visible');
  burger.classList.toggle('burger--active');
});
;
const CLASS_LIST = {
  MODAL: 'modal',
  MODAL_ACTIVE: 'modal--active',
  MODAL_HAS_SCROLL: 'modal--has-scroll',
  MODAL_DIALOG_BODY: 'modal__dialog-body',
  TRIGGER_OPEN: 'modal__open',
  TRIGGER_CLOSE: 'modal__close',
};

const paddingOffset = window.innerWidth - document.body.offsetWidth;

const hideScroll = () => {
  document.body.style.paddingRight = `${paddingOffset}px`;
  document.body.style.overflow = 'hidden';
};

const showScroll = (event) => {
  if (event.propertyName === 'transform') {
    document.body.style.paddingRight = '';
    document.body.style.overflow = 'visible';

    event.target
      .closest(`.${CLASS_LIST.MODAL}`)
      .removeEventListener('transitionend', showScroll);
  }
};

document.addEventListener('click', (event) => {
  if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
    event.preventDefault();

    const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
    const modalId = target.getAttribute('href').replace('#', '');
    const modal = document.getElementById(modalId);

    hideScroll();

    modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
  }

  if (
    event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`)
      || event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
  ) {
    event.preventDefault();

    const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
    modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
    modal.addEventListener('transitionend', showScroll);
  }
});

// Modal video

function OpenVideoModal(htmlId, htmlDataAttr) {
  const videoModalOpen = document.getElementById(htmlId);
  const videoUrl = videoModalOpen.getAttribute(htmlDataAttr);

  let frame;

  videoModalOpen.addEventListener('click', () => {
    frame = document.querySelector('.modal__video video');
    frame.src = videoUrl;
  });

  document.addEventListener('click', (event) => {
    if (
      event.target.closest('.modal__close--video')
         || event.target.classList.contains('modal--video')
    ) {
      event.preventDefault();
      frame.src = ' ';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  OpenVideoModal('video-open', 'data-video-url');
});
;
const { forms } = document;

const checkPasswordsIdentity = (e, matchValue) => {
  const signupPswForms = e.currentTarget.querySelectorAll("[type='password']");

  if (signupPswForms.length > 1) {
    const signupPswFormsArr = Array.from(signupPswForms);

    signupPswForms.forEach((psw) => {
      const errLabels = psw
        .closest('.login-form__label')
        .querySelectorAll('.just-validate-error-label');
      if (errLabels.length > 1) {
        const remArr = Array.from(errLabels);
        remArr[0].remove();
      }
    });

    const psw = e.currentTarget.querySelector('.login-form__psw');
    const repeatPsw = e.currentTarget.querySelector(
      '.login-form__repeat-psw',
    );
    if (psw.value.length > 0 && psw.value === repeatPsw.value) {
      matchValue = true;
      signupPswFormsArr.forEach((pswrd) => {
        const closed = pswrd
          .closest('.login-form__label')
          .querySelector('.just-validate-error-label');
        if (closed) {
          closed.remove();
        }
      });
    } else if (psw.value.length > 0 && psw.value !== repeatPsw.value) {
      matchValue = false;
      const formLabel = e.target.closest('.login-form__label');
      if (
        e.target.type === 'password'
            && !formLabel.querySelector('.just-validate-error-label')
      ) {
        formLabel.insertAdjacentHTML(
          'beforeend',
          '<div class = "just-validate-error-label">Passwords must coincide!</div>',
        );
      }

      signupPswFormsArr.forEach((pswrd) => {
        if (pswrd.classList.contains('just-validate-success-field')) {
          pswrd.classList.remove('just-validate-success-field');
          pswrd.classList.add('just-validate-error-field');
        }
      });
    }
  }
};

const disableSendButton = (e) => {
  const matchTest = true;
  checkPasswordsIdentity(e, matchTest);
  let valTest = true;

  const reqInputs = e.currentTarget.querySelectorAll('[required]');
  const sendButton = e.currentTarget.querySelector("[type='submit']");

  const reqInputsArr = Array.from(reqInputs);
  reqInputsArr.forEach((input) => {
    if (!input.value) {
      valTest = false;
    }
  });

  const errTest = e.currentTarget.querySelectorAll(
    '.just-validate-error-field',
  );
  if (errTest.length === 0 && valTest && matchTest) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
};

[...forms].forEach((form) => {
  form.addEventListener('input', disableSendButton);
});

const resetAfterSubmit = (e) => {
  e.target.querySelector('[type="submit"]').disabled = true;
  e.target.reset();
};

const setSuccess = (event) => {
  const formData = new FormData(event.target);

  alert(`sent:
 ${[...formData]}`);

  // let xhr = new XMLHttpRequest();

  // xhr.onreadystatechange = () => {
  //    if (xhr.readyState === 4) {
  //       if (xhr.status === 200) {
  //          console.log("Отправлено");
  //       }
  //    }
  // };

  // xhr.open("POST", "mail.php", true);
  // xhr.send(formData);

  const reqInputs = document.querySelectorAll('[required]');
  const delInputs = Array.from(reqInputs);

  delInputs.forEach((input) => {
    if (input.classList.contains('just-validate-success-field')) {
      input.classList.remove('just-validate-success-field');
    }
  });

  resetAfterSubmit(event);
};

const loginValidate = new window.JustValidate('[name="loginform"]', {
  validateBeforeSubmitting: true,
});

loginValidate
  .addField('.login-form__uname', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter your name!',
    },
    {
      rule: 'customRegexp',
      value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/,
      errorMessage: 'Enter your name properly',
    },
  ])
  .addField('.login-form__psw', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'The password must contain at least 6 characters!',
    },

    {
      rule: 'customRegexp',
      value: /(?=.*[0-9])/,
      errorMessage: 'The password must contain at least one number!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter password!',
    },
  ])
  .onSuccess((event) => {
    setSuccess(event);
  });

const signupValidate = new window.JustValidate('[name="signupform"]', {
  validateBeforeSubmitting: true,
});

signupValidate
  .addField('.login-form__email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'E-mail is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Enter correct E-mail',
    },
  ])
  .addField('.login-form__psw', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'The password must contain at least 6 characters!',
    },

    {
      rule: 'customRegexp',
      value: /(?=.*[0-9])/,
      errorMessage: 'The password must contain at least one number!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter password!',
    },
  ])
  .addField('.login-form__repeat-psw', [
    {
      rule: 'minLength',
      value: 6,
      errorMessage: 'The password must contain at least 6 characters!',
    },

    {
      rule: 'customRegexp',
      value: /(?=.*[0-9])/,
      errorMessage: 'The password must contain at least one number!',
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Enter password!',
    },
  ])
  .onSuccess((event) => {
    setSuccess(event);
  });

const subscribeValidate = new window.JustValidate('[name="subscribeform"]', {
  validateBeforeSubmitting: true,
});

subscribeValidate
  .addField('.subscribe__email', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'E-mail is required',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: 'Enter correct E-mail',
    },
  ])
  .onSuccess((event) => {
    setSuccess(event);
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


