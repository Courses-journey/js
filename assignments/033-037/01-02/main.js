/*
01
*/

// Test Case 1
let num = 101; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

if (num < 10) {
  console.log(`00${num}`);
} else if (num > 10 && num < 100) {
  console.log(`0${num}`);
} else if (num > 100) {
  console.log(`${num}`);
}

/*
02
*/

let num1 = 9;
let str = "9";
let str2 = "20";

// Output
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (num1 == str && typeof num1 !== typeof str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (num1 != str2 && typeof num1 !== typeof str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (str != str2 && typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
