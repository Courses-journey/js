/**
 * 01
 */

let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

console.log([...setOfNumbers][2]);

console.log(`\n***** 02 *****\n `);

/**
 * 02
 */

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());
// Needed Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

console.log(`\n***** 03 *****\n `);

/**
 * 03
 */

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myInfoMap = new Map(Object.entries(myInfo));

console.log(myInfoMap);
console.log(myInfoMap.size);
console.log(myInfoMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

console.log(`\n***** 04 *****\n `);

/**
 * 04
 */

let theNumber = 100020003000;

console.log(+[...new Set(`${theNumber}`)].sort().join(""));

// Needed Output
// 123;

console.log(`\n***** 05 *****\n `);

/**
 * 05
 */

let theName = "Elzero";

console.log([...theName]);
// Needed Output
// ["E", "l", "z", "e", "r", "o"];

console.log(`\n***** 06 *****\n `);

/**
 * 06
 */

let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(doRequired(chars1));
// Needed Output
// [""A", B", "C", "A", "B", "C", "D", "E"];

let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
console.log(doRequired(chars2));

// Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];

let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(doRequired(chars3));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];

function doRequired(array) {
  let numberCount = array.filter((item) => typeof item === "number").length;

  // custom sort
  let newArray = array
    .sort((a, b) => {
      if (typeof a === "number") {
        return -1;
      }
      return 0;
    })
    .copyWithin(0, numberCount, numberCount + numberCount);

  return newArray;
}

console.log(`\n***** 07 *****\n `);

/**
 * 07
 */

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
// first
let combined1 = [...numsOne, ...numsTwo];
console.log(combined1);
// Second
let combined2 = Array.from(numsOne);
numsTwo.forEach((element) => {
  combined2.push(element);
});
console.log(combined2);
// Third
let combined3 = [];
for (let index = 0; index < numsOne.length; index++) {
  combined3.push(numsOne[index]);
}
for (let index = 0; index < numsTwo.length; index++) {
  combined3.push(numsTwo[index]);
}
console.log(combined3);
// Needed Output
// [1, 2, 3, 4, 5, 6];

console.log(`\n***** 08 *****\n `);

/**
 * 08
 */

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210;

console.log(eval(n1.join("+")) * n2.length); // 210
