"use strict";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player0Ele = document.querySelector(".player--0");
const player1Ele = document.querySelector(".player--1");

const diceEle = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting condition

let currentScore, activePlayer, playing, scores;

const initGame = function () {
  score0El.textContent = 0;
  score1EL.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEle.classList.add("hidden");
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Ele.classList.toggle("player--active");
  player1Ele.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display dice image
    diceEle.src = `dice-${dice}.png`;
    diceEle.classList.remove("hidden");

    // 3. Check for rolled 1
    if (dice !== 1) {
      // add dice value to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // reset currentScore & switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // add currentScore to totalScore
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // if score>100 activePlayer wins
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      diceEle.classList.add("hidden");
    } else {
      //reset current-score & switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
  player0Ele.classList.add("player--active");
  initGame();
});
