'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.number').textContent = '?';
// console.log(number);

document.querySelector('.check').addEventListener('click', () => {
  
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // when there is no input
  if(!guess) {
    displayMessage('No number!');
    score--;
    document.querySelector('.score').textContent = score;


    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      };
      
      
      // REFACTORED CODE

    } else if (guess !== secretNumber) {
      if(score > 1) {
        displayMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
        score--;
        document.querySelector('.score').textContent = score; 
      } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }

  });






    // when guess is too high
  // } else if (guess > secretNumber) {

  //   if(score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {

  //   if(score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
// });

  // when player wants to reset game
  document.querySelector('.again').addEventListener('click', () => {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });




