const diceBtn = document.getElementById('dice_btn');
const dice1IMG = document.getElementById('image_dice1');

function randomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function showDiceRandomNumber() {
  const randNumber = randomDiceNumber();
  dice1IMG.src = `./images/dice${randNumber}.png`;
}

diceBtn.addEventListener('click', showDiceRandomNumber);
