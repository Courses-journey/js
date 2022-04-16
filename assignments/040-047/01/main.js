let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(
  myFriends
    .reverse()
    .slice(+true)
    .reverse()
); // ["Ahmed", "Elham", "Osama"];

/* ------------------- */
console.log("-".repeat(10));

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.reverse();
friends.pop();
friends.reverse();
console.log(friends); // ["Eman", "Osama"]

/* ------------------- */
console.log("-".repeat(10));

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
console.log(finalArr.concat(arrTwo, arrOne).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

/* ------------------- */
console.log("-".repeat(10));

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

/* ------------------- */
console.log("-".repeat(10));

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

/* ------------------- */
console.log("-".repeat(10));

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
arr1.shift();
arr1.shift();
arr2.shift();
arr2.shift();
console.log(allArrs.concat(arr1, arr2).sort().join("").toLowerCase()); // fxy
