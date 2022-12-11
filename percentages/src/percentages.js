// const expressions = require('../../math-js/utils/regexp');
// import exp from '../../math-js/utils/regexp';
const articleRegEx = /^[a-zA-Z0-9]/;
const form = document.querySelector('.form__main');
const inputs = document.querySelectorAll('#form input');
const successMsg = document.querySelector('.form__success-msg');
const errorMsg = document.querySelector('.form__warning-message');
const resultMsg = document.querySelector('.discounted-price');

const fieldsValidated = {
  articleIsValid: false,
  priceIsValid: false,
  discountIsValid: false,
};

function calcReducedPrice(price, discount) {
  return (price * (100 - discount)) / 100;
}

function inputValidation(regex, input, field) {
  if (regex.test(input.value)) {
    document.getElementById(`group__${field}`).classList.remove('form__group-error');
    document.getElementById(`group__${field}`).classList.add('form__group-success');
    document.getElementById(`item_${field}`).classList.remove('fa-circle-xmark');
    document.getElementById(`item_${field}`).classList.add('fa-circle-check');
    document.querySelector(`.form__error-input--${field}`).classList.remove('form__error-input-active');
    fieldsValidated.articleIsValid = true;
  } else {
    document.getElementById(`group__${field}`).classList.add('form__group-error');
    document.getElementById(`item_${field}`).classList.add('fa-circle-xmark');
    document.getElementById(`item_${field}`).classList.remove('fa-circle-check');
    document.querySelector(`.form__error-input--${field}`).classList.add('form__error-input-active');
    fieldsValidated.articleIsValid = false;
  }
}

function numberFieldValidation(input, field) {
  if (input.value > 0) {
    document.getElementById(`group__${field}`).classList.remove('form__group-error');
    document.getElementById(`group__${field}`).classList.add('form__group-success');
    document.getElementById(`item_${field}`).classList.remove('fa-circle-xmark');
    document.getElementById(`item_${field}`).classList.add('fa-circle-check');
    document.querySelector(`.form__error-input--${field}`).classList.remove('form__error-input-active');
    fieldsValidated[`${field}IsValid`] = true;
  } else {
    document.getElementById(`group__${field}`).classList.add('form__group-error');
    document.getElementById(`item_${field}`).classList.add('fa-circle-xmark');
    document.getElementById(`item_${field}`).classList.remove('fa-circle-check');
    document.querySelector(`.form__error-input--${field}`).classList.add('form__error-input-active');
    fieldsValidated[`${field}IsValid`] = false;
  }
}

const validateFormControl = (e) => {
  console.log(e.target.value);
  switch (e.target.name) {
    case 'article':
      inputValidation(articleRegEx, e.target, e.target.name);
      break;
    case 'price':
      numberFieldValidation(e.target, e.target.name);
      break;
    case 'discount':
      if (e.target.value > 0 && e.target.value < 100) {
        document.querySelector(`.form__error-input--${e.target.name}`).classList.remove('form__error-input-active');
        numberFieldValidation(e.target, e.target.name);
      } else {
        document.getElementById(`group__${e.target.name}`).classList.add('form__group-error');
        document.getElementById(`item_${e.target.name}`).classList.add('fa-circle-xmark');
        document.getElementById(`item_${e.target.name}`).classList.remove('fa-circle-check');
        document.querySelector(`.form__error-input--${e.target.name}`).classList.add('form__error-input-active');
        fieldsValidated[`${e.target.name}IsValid`] = false;
      }
      break;
    default:
      console.log(`Sorry, try introducing the correct values for: ${e.target.name}.`);
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

  if (fieldsValidated.articleIsValid && fieldsValidated.priceIsValid && fieldsValidated.discountIsValid) {
    form.reset();

    successMsg.classList.add('form__success-msg-active');
    JSON.stringify(submitedData);
    // discountedPriceResult = ``;

    const discountedPriceResult = document.getElementById('discounted-price');
    discountedPriceResult.innerHTML = '';
    const priceAfterDiscount = calcReducedPrice(submitedData.price, submitedData.discount);

    discountedPriceResult.innerHTML += `<p>El precio final a pagar es: ${priceAfterDiscount}</p>`;
    resultMsg.classList.add('discounted-price-active');

    errorMsg.classList.remove('form__warning-message-active');

    // setTimeout(() => {
    //   successMsg.classList.remove('form__success-msg-active');
    // }, 3000);
  } else {
    errorMsg.classList.add('form__warning-message-active');
  }
});

module.exports = calcReducedPrice;
