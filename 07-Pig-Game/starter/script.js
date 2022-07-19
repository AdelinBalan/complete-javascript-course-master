'use strict';


// Selecting elements 

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// const score0 = document.querySelector('#score--0');
const score0El = document.getElementById('score--0'); // way of getting element by ID instead of Class, without using '#'
const score1El = document.querySelector('#score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`); 
  player1El.classList.remove(`player--active`);
  diceEl.classList.add('hidden');
}

init();


const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}



// Rolling dice functionality

btnRoll.addEventListener('click', () => {

  if(playing) {
    // 1. generating a random dice roll
    const dice = Number(Math.trunc(Math.random() * 6) + 1); 
  
    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    // 3. check for rolled 1: 
    if(dice !== 1) {
      // add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore; // Change later to Active Player
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  
    } else {
      // if true, switch to next player
  
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      
      //DONT REPEAT YOURSELF:
      switchPlayer();
    
    }
  }
});


btnHold.addEventListener('click', () => {

  if(playing) {
    // 1. Add curent score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    
    // 2. Check if player's score is >= 100
    if(scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.remove('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);


