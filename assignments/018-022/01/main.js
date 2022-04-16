/* 
01
*/
// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400);

console.log("-".repeat(10));

/* 
02
*/
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * (+true + +true)); // 6

// Soultion Three
console.log(num + num / num + num / num + num / num); // 6

// Soultion Four
console.log(num ** (+true + +true) - num); // 6

// Solution Five
console.log(num * num - num); // 6

// Solution Six
console.log((+true + +true) ** num - (+true + +true)); // 6

console.log("-".repeat(10));

/* 
03
*/

let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(num2 * (+true + +true)); // 20

// Solution Three
console.log(+num2 + +num2 + +num2 - num2); // 20

// Solution Four
console.log((+num2 * +num2) / (+num2 / (+true + +true))); // 20
