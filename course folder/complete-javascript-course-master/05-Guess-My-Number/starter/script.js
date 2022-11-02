'use strict';

const body = document.querySelector('body');
const check = document.querySelector('.check');

//generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// initially the game score to 0
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when the guess is no input
  if (!guess) {
    displayMessage('⛔ No Number');
    //when the guess is right!
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    displayNumber(secretNumber);

    body.style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);

      // when the guess is too low
    } else {
      displayMessage('💣 You lost the game!');
      displayScore(0);
    }
  }
});

// coding challenge

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  displayScore(score);

  displayNumber('?');

  document.querySelector('.guess').value = '';

  // resetting the initial background properties and the width size
  body.style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
