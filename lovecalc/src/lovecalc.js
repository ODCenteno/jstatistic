// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');

// const { sanitize } = require("dompurify");

// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);
// const clean = DOMPurify.sanitize('<b>hello there</b>');

const form = document.querySelector('.form__main');
const inputs = document.querySelectorAll('#form input');
const successMsg = document.querySelector('.form__success-msg');
const errorMsg = document.querySelector('.form__warning-message');
const resultMsg = document.querySelector('.compatibility-result');
const nameRegEx = /^[a-zA-Z]/;

const fieldsValidated = {
  nameIsValid: false,
};

function getRandomPercentage() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

function inputValidation(regex, input, field) {
  if (regex.test(input.value)) {
    document.getElementById(`group__${field}`).classList.remove('form__group-error');
    document.getElementById(`group__${field}`).classList.add('form__group-success');
    document.getElementById(`item_${field}`).classList.remove('fa-circle-xmark');
    document.getElementById(`item_${field}`).classList.add('fa-circle-check');
    document.querySelector(`.form__error-input--${field}`).classList.remove('form__error-input-active');
    fieldsValidated.nameIsValid = true;
  } else {
    document.getElementById(`group__${field}`).classList.add('form__group-error');
    document.getElementById(`item_${field}`).classList.add('fa-circle-xmark');
    document.getElementById(`item_${field}`).classList.remove('fa-circle-check');
    document.querySelector(`.form__error-input--${field}`).classList.add('form__error-input-active');
    fieldsValidated.nameIsValid = false;
  }
}

const validateFormControl = (e) => {
  console.log(e.target.value);
  switch (e.target.name) {
    case 'person1':
      inputValidation(nameRegEx, e.target, e.target.name);
      break;
    case 'person2':
      inputValidation(nameRegEx, e.target, e.target.name);
      break;
    default:
      console.log(`Intenta de nuevo con un nombre adecuado para: ${e.target.name}.`);
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyUp', validateFormControl);
  input.addEventListener('blur', validateFormControl);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitedData = Object.fromEntries(
    new FormData(e.target),
  );

  if (fieldsValidated.nameIsValid) {
    form.reset();

    successMsg.classList.add('form__success-msg-active');
    JSON.stringify(submitedData);
    // discountedPriceResult = ``;

    const discountedPriceResult = document.getElementById('compatibility-result');
    discountedPriceResult.innerHTML = '';

    const priceAfterDiscount = getRandomPercentage();

    discountedPriceResult.innerHTML += `<p>Compatibilidad de: ${priceAfterDiscount} %</p>`;
    resultMsg.classList.add('discounted-price-active');

    errorMsg.classList.remove('form__warning-message-active');

    // setTimeout(() => {
    //   successMsg.classList.remove('form__success-msg-active');
    // }, 3000);
  } else {
    errorMsg.classList.add('form__warning-message-active');
  }
});
