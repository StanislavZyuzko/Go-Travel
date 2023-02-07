/* const { forms } = document;

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
 */

const subscribeForm = document.forms.subscribeform;
const subscribeInput = subscribeForm.subscribemail;
const subscribeButton = subscribeForm.subscribesubmit;
const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;

const getError = () => {
   subscribeInput.style.border = "2px solid red";
   subscribeButton.disabled = true;
};

const getValid = () => {
   subscribeInput.style.border = "2px solid green";
   subscribeButton.disabled = false;
};

const getValidMessage = (message, callback) => {
   const delMessage = subscribeForm.querySelector(".subscribe__valid");
   if (delMessage) {
      delMessage.remove();
   }

   let className;
   if (callback.name === "getError") {
      className = "subscribe__valid--error";
   }
   if (callback.name === "getValid") {
      className = "subscribe__valid--success";
   }

   const messageDiv = document.createElement("div");
   messageDiv.classList = `subscribe__valid  ${className}`;
   messageDiv.innerHTML = message;
   subscribeInput.before(messageDiv);

   callback();
};

subscribeForm.addEventListener("input", () => {
   const { value } = subscribeInput;
   if (!value) {
      getValidMessage("E-mail is required", getError);
   }

   if (mailRegExp.test(value)) {
      getValidMessage("Successfully!", getValid);
   } else if (value) {
      getValidMessage("Enter correct e-mail", getError);
   }
});


