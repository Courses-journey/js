let start = 0;
let swappedName = "elZerO";

// Output
// ("ELzERo");

let myName = swappedName.split("");
for (let index = 0; index < myName.length; index++) {
  if (myName[index] === myName[index].toUpperCase()) {
    myName[index] = myName[index].toLocaleLowerCase();
  } else {
    myName[index] = myName[index].toUpperCase();
  }
}
swappedName = myName.join("");
console.log(swappedName);
