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
  diceNumber.innerHTML = `<img class="dice" src="./image/dice-${randomNumber}.png" alt="dice ${randomNumber}">`;
  if (randomNumber !== 1) {
    roundScore += randomNumber;
    document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
  } else {
    changePlayer();
  }
};

// Highlight the player
const highlightActivePlayerName = () => {
  if (activePlayer === 0) {
    player1.style.fontSize = "200%";
    player2.style.fontSize = "120%";
  } else {
    player2.style.fontSize = "200%";
    player1.style.fontSize = "120%";
  }
};

// Change player
const changePlayer = () => {
  roundScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  highlightActivePlayerName();
  player1.classList.toggle("active-player");
  player2.classList.toggle("active-player");
};

// Hold the score
const holdScore = () => {
  scores[activePlayer] += roundScore;
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  if (scores[activePlayer] >= 100) {
    document.querySelector(`.playerName-${activePlayer}`).classList.add("winner-player");
    document.querySelector(`.playerName-${activePlayer}`).innerHTML = `<p>Vous avez gagné !</p>`;
    stopRolling();
  } else {
    changePlayer();
  }
};

// Disable buttons at game end
const stopRolling = () => {
  roll.disabled = true;
  hold.disabled = true;
  
  hold.classList.remove("inactive-button");
  hold.classList.remove("inactive-button");

  dice.style.opacity = "0.5";
};

// New game
const replay = () => {
  document.location.reload();
};

// click events
roll.addEventListener("click", rollDice, false);
hold.addEventListener("click", holdScore, false);
newGame.addEventListener("click", replay, false);
