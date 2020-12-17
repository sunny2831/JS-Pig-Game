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
score0El.textContent = 0;
score1EL.textContent = 0;
diceEle.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Rolling dice functionality
btnRoll.addEventListener("click", function () {
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
  }
});
