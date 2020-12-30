let prompt = require('readline-sync');

// When the program starts, pick a random number and don't reveal it.
// Ask the user for a guess; if they get it right, tell them they won and exit.
// If they get it wrong, tell them if they were too high or too low, and give them another guess.
// Use this function to get user input:
//
//   var name = prompt.question("What is your name? ");
//
// The `prompt.question` function will _return_ the value the user entered.

function getIntegerGuess() {
  return Math.round(prompt.question("What is your guess? "));
}

function randomInt(n) {
  return Math.floor((Math.random() * n));
}

function highOrLow() {
  let target = randomInt(100);
  let guess = getIntegerGuess();

  while (guess !== target) {
    if (guess < target) {
      console.log("Too low, guess again!");
    } else {
      console.log("Too high, guess again!");
    }
    guess = getIntegerGuess();
  }

  console.log("You won!");
}
  
highOrLow();