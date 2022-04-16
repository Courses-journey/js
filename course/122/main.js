/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  [a] = myFriends;
  printRequired(a);
} else if (chosen === 2) {
  [, a] = myFriends;
  printRequired(a);
} else if (chosen === 3) {
  [, , a] = myFriends;
  printRequired(a);
}

function printRequired({
  title,
  age,
  available,
  skills: [, lastSkill],
} = object) {
  console.log(title);
  console.log(age);
  console.log(available ? `Available` : `Not Available`);
  console.log(lastSkill);
}
