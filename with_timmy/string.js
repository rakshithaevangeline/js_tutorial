function doesHaveA(str) {
  let hasA = false;

  for (c in str) {
    if (c == 'a') {
      hasA = true;
    }
  }

  return hasA;
}

console.log(doesHaveA("Noah"));
