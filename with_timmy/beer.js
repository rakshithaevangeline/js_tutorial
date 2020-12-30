// Write a function that prints out the song "99 bottles of beer on the wall"
// Don't write out the entire song in the function, but use looping
// Remember to use the singular "bottle" in the very last line
// https://lyricsplayground.com/alpha/songs/numbers/99bottlesofbeeronthewall.html

// One-hundred bottles of beer on the wall,
// One-hundred bottles of beer!
// Take one down,
// Pass it around,
// Ninety-nine bottles of beer on the wall!

// console.log(`
//     ${bottleNum-1} bottles of beer on the wall,
//     ${bottleNum-1} bottles of beer,
//     Take one down, 
//     Pass it around,
//     ${bottleNum-1} bottles of beer on the wall!
//     `);

// function printSong(bottleNum) {
//   for (let i=0; i <=bottleNum; i++) {
//     console.log(`
//     ${bottleNum} bottles of beer on the wall,
//     ${bottleNum} bottles of beer,
//     Take one down, 
//     Pass it around,
//     ${bottleNum-1} bottles of beer on the wall!
//     `);
// }

// printSong(5);












function printSong(bottleNum) {
  let x = bottleNum;
  for (let i=0; i<bottleNum; i++) {
    if (x !== 1) {
      console.log(`
      ${x} bottles of beer on the wall,
      ${x} bottles of beer,
      Take one down, 
      Pass it around,
      ${x-1} bottles of beer on the wall!
      `);

      x = x-1;
    } else {
      console.log(`
      ${x} bottle of beer on the wall,
      ${x} bottle of beer,
      Take one down, 
      Pass it around,
      No bottles of beer on the wall!
      `);
    }
  }
}

printSong(100);