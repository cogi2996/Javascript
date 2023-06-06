'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.message').textContent = 'Correct number!'
// document.querySelector('.guess').value = 23
// document.querySelector('.score').textContent = 10;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  if(!guess)
  {
      document.querySelector('.message').textContent = 'No nummber!'
  }
});
