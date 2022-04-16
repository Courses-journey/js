/*
 *01
 */
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

/*
 *02
 */

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  console.log("*".repeat(15));
  /** */
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }
  /** */
  if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === undefined) {
    console.log(firstNum + secondNum);
  }
  /* another */
  console.log("-".repeat(5));
  if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else {
    console.log(firstNum + secondNum);
  }
  /** */
  console.log("*".repeat(15));
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

/**
 * 03
 */

function ageInTime(theAge) {
  console.log("*".repeat(5) + " Age Calculation " + "*".repeat(5));
  if (theAge > 10 && theAge < 100) {
    // Your Code Here
    // Months
    console.log(theAge * 12 + " Months");
    // Weeks
    console.log(theAge * 52 + " Weeks");
    // Days
    console.log(theAge * 356 + " Days");
    // Hours
    console.log(theAge * 356 * 24 + " Hours");
    // Minutes
    console.log(theAge * 356 * 24 * 60 + " Minutes");
    // Seconds
    console.log(theAge * 356 * 24 * 60 * 60 + " Seconds");
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

/**
 * 04
 */

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let index = startYear; index < endYear; index++) {
    // Your Code Here
    document.write(`<option value="${index}">${index}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

/**
 * 05
 */

function multiply(...numbers) {
  console.log("*".repeat(5) + " Multiply " + "*".repeat(5));
  let result = 1;
  for (let index = 0; index < numbers.length; index++) {
    if (typeof numbers[index] === "string") {
      continue;
    }
    result = result * Number.parseInt(numbers[index]);
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
