// // Defining a function 
// function emailParts(emailaddress) {
//   return emailaddress.toLowerCase().split("@");
// }

// console.log(emailParts("mail@timothyandrew.net"));

// // Defining using fat arrow notation
// let emailParts = (email) => {
//   return email.toLowerCase().split("@");
// }

// console.log(emailParts("mail@timothyandrew.net"));

let a = [99, 13, 2, 42];

a.sort((a, b) => {
  return a-b;
});

console.log(a);
