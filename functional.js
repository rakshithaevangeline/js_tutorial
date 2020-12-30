let states = ["Kansas", "North Dakota", "South Dakota", "Nebraska"];

// Returns a url friendly version of a string
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
};


// urls: Imperative function
function imperativeUrls (array) {
  let urls = [];
  array.forEach(element => urls.push(urlify(element)));
  return urls;
};
console.log(imperativeUrls(states));


// urls: Functional version
function functionalUrls(array) {
  return array.map(state => urlify(state));
};
console.log(functionalUrls(states));


// singles: Functional Version
function functionalSingles(array) { 
  return array.filter(state => state.split(/\s+/).length === 1);
};
console.log(functionalSingles(states));

// singles: Functional version, with the state names URLified.
function functionalSingles(array) { 
  return array.filter(state => state.split("-").length === 1);
};
console.log(functionalSingles(functionalUrls(states)));

// Returns the 2 "Dakota"s

// Using string include
console.log(states.filter(state => state.includes("Dakota")));

// Using RegExp
console.log(states.filter( state => state.match(/\s+/)));

// Sum: Imperative Version
let array = [1,2,3,4,5,6,7,8,9,10];

function imperativeSum(array) {
  let total = 0;
  array.forEach(number => {
    total += number;
  });
  return total;
  };
  console.log(imperativeSum(array));

// Sum: Functional Version 
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}

function functionalSum(array) {
  return array.reduce(add, 0);
};
console.log(functionalSum(array));


// Lengths: Imperative Version
function imperativeLengths(array) {
  let lengths = {};
  array.forEach( state => {
    lengths[state] = state.length;
  });
  return lengths;
};

console.log(imperativeLengths(states));

// Lengths: Functional Version
function functionalLengths(array) {
  return array.reduce((acc, state) => {
    // you cannot return an assignment. In JS, returning an assignment will return the right hand side of the expression
    // the assignment below creates the first key-value pair.
    // for reduce(), the initial value is the first value for acc. 
    // So, when the key-value pair is created, the intial value of acc is {} and gets replaced by {"Kansas":6};
    // that is why we need to return acc as this will now be the new value of acc.
    acc[state] = state.length; 
    return acc;
  }, {});
};
console.log(functionalLengths(states));