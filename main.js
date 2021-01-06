let Phrase = require("rakshithaevangeline-palindrome");


function palindromeTester() {
  let content = prompt("Please type a phrase here:");
  let phrase = new Phrase(content);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", () => {
  palindromeTester();
});
});

