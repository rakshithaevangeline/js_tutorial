function getStringArray(str) {
  let upperCaseString = str.toUpperCase();
  let stringArray = upperCaseString.split("");
  return stringArray;
}

// function convertBackToString(arr) {
//   return  arr.join('');
// }


function getReversedStringArray(str) {
   let reversedStringArray = getStringArray(str).slice().reverse();
   return reversedStringArray;
}



function checkIfPalindrome(str) {
  let arrayJoin = getStringArray(str).join('');
  let reversedArrayJoin = getReversedStringArray(str).join('');
  if (arrayJoin === reversedArrayJoin) {
    console.log(`The string is a palindrome`);
  } else {
    console.log(`The string is not a palindrome`);
  }
}

module.exports = {
  checkIfPalindrome: checkIfPalindrome
};

checkIfPalindrome("mom");