'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = -1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No nummber!';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
  } else if ((guess < secretNumber) & (score >= 1)) {
    document.querySelector('.message').textContent = '📉 Too low ';
    score--;
  } else if ((guess > secretNumber) & (score >= 1)) {
    document.querySelector('.message').textContent = '📈 Too high';
    score--;
  }
  document.querySelector('.score').textContent = score;
  if (score == 0) {
    document.querySelector('.message').textContent = '💥You lost the game';
    document.querySelector('.score').textContent = 0;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.guess').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.guess').style.background = 'none';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
