let dot =  "\u00B7";
let dash =  "\u2012";
let whitespace = "\u0020";

let morseCodeAlphabet = {
  a: dot + dash,
  b: dash + dot + dot,
  c: dash + dot + dash + dot,
  d: dash + dot + dot,
  e: dot,
  f: dot + dot + dash + dot,
  g: dash + dash + dot,
  h: dot + dot + dot + dot,
  i: dot + dot,
  j: dot + dash + dash + dash,
  k: dash + dot + dash,
  l: dot + dash + dot + dot,
  m: dash + dash,
  n: dash + dot,
  o: dash + dash + dash, 
  p: dot + dash + dash + dot,
  q: dash + dash + dot + dash,
  r: dot + dash + dot,
  s: dot + dot + dot,
  t: dash,
  u: dot + dot + dash,
  v: dot + dot + dot + dash,
  w: dot + dash + dash,
  x: dash + dot + dot + dash,
  y: dash + dot + dash + dash,
  z: dash + dash + dot + dot,
  " ": whitespace
};

function encodeToMorseCode(string) {
  let lettersArray = string.toLowerCase().split("");

  let morseCode = lettersArray.map(letter => {
    return morseCodeAlphabet[letter];
  });
  
  return morseCode.join("");
}

console.log(encodeToMorseCode("rakshitha and timothy"));
