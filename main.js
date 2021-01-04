let Phrase = require("rakshithaevangeline-palindrome");

let content = prompt("Please type a phrase here:");
let phrase = new Phrase(content);

if (phrase.palindrome()) {
  alert(`${phrase.content} is a palindrome!`);
} else {
  alert(`${phrase.content} is not a palindrome.`);
};