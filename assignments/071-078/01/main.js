/**
 *01
 */

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix.reduce((acc, cur) =>
  isNaN(acc) || acc === "" ? (isNaN(cur) ? `${acc}${cur}` : `${acc}`) : ""
);

console.log(word); // Elzero

/**
 *02
 */

let myString = "EElllzzzzzzzeroo";

let word2 = myString
  .split("")
  .filter((ele, index, arr) => (ele === arr[index - 1] ? "" : ele))
  .join("");

console.log(word2); // Elzero

/**
 *03
 */

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let word3 = myArray
  .map((cur) =>
    cur.length > 1 ? cur.reduce((acc, cur) => `${acc}${cur}`) : `${cur}`
  )
  .reduce((acc, cur) => `${acc}${cur}`);

console.log(word3); // Elzero

/**
 * 04
 */

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result4 = numsAndStrings.filter((cur) => !isNaN(cur)).map((cur) => -cur);

console.log(result4);
// [-1, -10, 10, 20, -5, -3]

/**
 * 05
 */

let nums = [2, 12, 11, 5, 10, 1, 99];

let result5 = nums.reduce(
  (acc, cur) => (cur % 2 === 1 ? acc + cur : acc * cur),
  1
);

console.log(result5);
// 500
