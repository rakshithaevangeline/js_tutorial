#!/usr/local/bin/node


const pyramidArray = [];
const limit = 50;

for (let i = 0; i < limit; i++) {
  pyramidArray.push("*");
  console.log(pyramidArray.join(""));
}

for (let i = 0; i < limit; i++) {
  pyramidArray.pop("*");
  console.log(pyramidArray.join(""));
}

