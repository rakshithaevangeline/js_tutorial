function pluralize(noun, count) {
  if (count === 1) {
    return noun;
  } else {
    return noun + 's';
  }
}

function template(n) {
  return `${n} ${pluralize('bottle', n)} of beer on the wall,
${n} ${pluralize('bottle', n)} of beer!
Take one down,
Pass it around,
${n - 1} ${pluralize('bottle', n - 1)} of beer on the wall!\n`;
}

function printLyrics(bottleCount) {
  for(let i = bottleCount; i>0; i--) {
    console.log(template(i));
  }
}

printLyrics(100);