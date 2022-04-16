/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.reverse().slice(counter - true)); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(
  my
    .reverse()
    .slice(+true)
    .slice(zero, counter - true)
    .reverse()
); // ["Elham", "Mazero"]

// FIXME
console.log(
  my
    .slice(+true)
    .slice(zero, counter - true)
    [+true].splice(+true, counter) +
    my
      .slice(+true)
      .slice(zero, counter - true)
      [zero].slice(counter - true)
); // "Elzero"

console.log(); // "rO"
