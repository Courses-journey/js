/**
 * 01
 */
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${Number.parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    if (zCountry === "Egypt") {
      return `You Live In EG`;
    } else if (zCountry === "Syria") {
      return `You Live In SY`;
    }
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern(zName)},${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

/**
 * 02
 */

/* 02 - 01*/

// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

/* 02 - 02*/
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

/**
 * 03
 */

// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

/**
 * 04
 */
console.log("******" + " 04 " + "******");

function specialMix(...data) {
  let sum = 0;

  // Check if all items is string
  function checkIfAllIsString() {
    let isAllString = true;
    for (let index = 0; index < data.length; index++) {
      if (Number.isInteger(Number.parseInt(data[index]))) {
        isAllString = false;
      }
    }
    return isAllString;
  }

  // Do sum
  if (checkIfAllIsString()) {
    return "All Is Strings";
  } else {
    for (let index = 0; index < data.length; index++) {
      sum += Number.parseInt(data[index]) || 0;
    }
    return sum;
  }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

console.log(Number.isInteger(Number.parseInt("A"))); // All Is Strings
