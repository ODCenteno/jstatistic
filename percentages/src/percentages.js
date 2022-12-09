const form = document.querySelector('.form');

function calcReducedPrice(price, discount) {
  return (price * (100 - discount)) / 100;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitedData = Object.fromEntries(
    new FormData(e.target),
  );

  JSON.stringify(submitedData);
  // discountedPriceResult = ``;
  console.log(submitedData.price, submitedData.discount);

  const discountedPriceResult = document.getElementById('discounted-price');
  discountedPriceResult.innerHTML = `<p></p>`;
  const priceAfterDiscount = calcReducedPrice(submitedData.price, submitedData.discount);

  discountedPriceResult.innerHTML += `<p>El precio final a pagar es: ${priceAfterDiscount}</p>`;
});

module.exports = calcReducedPrice;
