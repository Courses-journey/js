/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let adminCount = 0;

for (let index = 0; index < myAdmins.length; index++) {
  if (myAdmins[index] === "Stop") {
    break;
  }
  adminCount++;
}

document.write(`<div>We Have ${adminCount} Admins</div>`);
document.write(`<hr></hr>`);

for (let index = 0; index < adminCount; index++) {
  document.write(
    `<h3>The admin for Team ${index + 1} is ${myAdmins[index]}</h3>`
  );
  document.write(`<h1>Team Members</h1>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[index][0] === myEmployees[j][0]) {
      document.write(`<p>${j + 1}- ${myEmployees[j]}</p>`);
    }
  }
  document.write(`<hr></hr>`);
}
