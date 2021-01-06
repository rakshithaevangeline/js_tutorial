let Phrase = require("rakshithaevangeline-palindrome");


function palindromeTester() {
  let content = prompt("Please type a phrase here:");
  let phrase = new Phrase(content);
  
  if (phrase.palindrome()) {
    alert(`${phrase.content} is a palindrome!`);
  } else {
    alert(`${phrase.content} is not a palindrome.`);
  };
}

document.addEventListener("DOMContentLoaded", () =>{
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("click", () => {
  palindromeTester();
});
});
