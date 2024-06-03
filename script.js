'use strict';

// let targetNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// const displayScore = function (score) {
//   document.querySelector('.score').textContent = score;
// };

// const displayHighScore = function (highScore) {
//   document.querySelector('.highscore').textContent = score;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     displayMessage('⛔️ No number');
//   } else if (guess === targetNumber) {
//     displayMessage('🏅 Correct number');

//     document.querySelector('.number').textContent = targetNumber;
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('body').style.backgroundColor = '#60b347';

//     if (score > highScore) {
//       highScore = score;
//       displayHighScore(highScore);
//     }
//   } else if (guess !== targetNumber) {
//     if (score > 1) {
//       displayMessage(guess > targetNumber ? '⬆️ Too high' : '⬇️ Too low');
//       score--;
//       displayScore(score);
//     } else {
//       displayMessage('💣 You lost the game');
//       displayScore(0);
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   targetNumber = Math.trunc(Math.random() * 20) + 1;

//   displayMessage('Start guessing...');
//   displayScore(score);
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
