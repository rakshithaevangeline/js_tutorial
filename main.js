let Phrase = require("rakshithaevangeline-palindrome");


function palindromeTester(event) {
  event.preventDefault();
  let content = event.target.phrase.value;
  let phrase = new Phrase(content);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", (event) => {
    palindromeTester(event);
  });
});

