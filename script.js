let randomNumber = 0;
let roundScore = 0;
let activePlayer = 0;
let scores = [0, 0];

const dice = document.getElementById("diceNumber");
const roll = document.getElementById("rollDice");
const hold = document.getElementById("hold");
const newGame = document.getElementById("replay");
const player1 = document.getElementById("playerOne");
const player2 = document.getElementById("playerTwo");

// Create a random number   // Display dice  // Round score
const rollDice = () => {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  diceNumber.innerHTML = `<img class="dice" src="./images/dice-${randomNumber}.png" alt="dice ${randomNumber}">`;
  if (randomNumber !== 1) {
    roundScore += randomNumber;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    changePlayer();
  }
};

// Change player
const changePlayer = () => {
  roundScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("active-player");
  player2.classList.toggle("active-player");
};