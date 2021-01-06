(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{"rakshithaevangeline-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;


  // Returns only the letters from a phrase that contains punctuation
  this.letters = function letters() {
    // return  Array.from(this.content).filter(character => character.match(/[a-zA-Z]/)).join("");

    // Refactor with just match()
    if (this.content.match(/[a-z]/ig)) {
      return this.content.match(/[a-z]/ig).join("");
    } else {
      return [].join("");
    }
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
   }

  // Returns true if the phrase is a palindrome , false otherwise.
  this.palindrome = function palindrome() {
   return this.processedContent() === this.processedContent().reverse();
  };

}
},{}]},{},[1]);
