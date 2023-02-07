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
