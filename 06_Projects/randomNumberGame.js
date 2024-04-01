let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  // yahan check krenge ki user allowed hau ya nahi game khelne k liye
  submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    const guess = parseInt(userInput.value);
    validatguess(guess);
  });
}

function validatguess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number.');
  } else if (guess < 0) {
    alert('Enter Greater Than 0');
  } else if (guess > 100) {
    alert('Enter Less Than 100');
  } else {
    prevGuess.push(guess);
  }

  if (numGuess > 10) {
    displayGuess(guess);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You are Correct  `);
    displayMessage(`Random Number is : ${randomNumber} Game Over !`);
    endGame();
  } else if (guess < 100) {
    displayMessage('Entered number too Low !');
  } else {
    displayMessage('Entered number too High !');
  }
}
function displayGuess(guess) {
  userInput.value = ''; // clean up method
  userSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    StartOver.removeChild(p);

    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "New Game">Start New Game </h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}
