let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");

let count = letter.length;
for (let index = 0; index < friends.length; index++) {
  if (friends[index].includes(letter) && !friends[index].startsWith(letter)) {
    console.log(`${count} => ${friends[index]}`);
    count++;
  }
}
