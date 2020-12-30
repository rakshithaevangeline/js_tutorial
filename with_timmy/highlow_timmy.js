let prompt = require('readline-sync');

function playGame() {
  let upperBound = 100;
  let target = Math.floor(Math.random() * upperBound);

  while (true) {
    let guess = parseInt(prompt.question("Enter a number: "));

    if (guess < target) {
      console.log("Too low, sorry!");
    } else if (guess > target) {
      console.log("Too high, try again!");
    } else {
      console.log("You won!");
      break;
    }
  }
}

playGame();