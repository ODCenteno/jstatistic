const form = document.querySelector('.form');
const netPrice = document.querySelector('#price');
const discountToApply = document.querySelector('#discount');

function calcReducedPrice(price, discount) {
  return (price * (100 - discount)) / 100;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(calcReducedPrice(netPrice.value, discountToApply.value));
});

module.exports = calcReducedPrice;
