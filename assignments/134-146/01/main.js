/**
 * 01
 */
console.log("\n***** " + `01` + " *****\n\n");

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let regexassgin01 = /\d{4}:\w{2}\d(:\d{4}){6}/gi;
console.log(ip.match(regexassgin01));

/**
 * 02
 */
console.log("\n***** " + `02` + " *****\n\n");

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']

let regexassgin02 = /Os\d*O/g;
console.log(specialNames.match(regexassgin02));

/**
 * 03
 */
console.log("\n***** " + `03` + " *****\n\n");

let phone = "+(995)-123 (4567)";

let regexassgin03 = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(regexassgin03));

/**
 * 04
 */
console.log("\n***** " + `04` + " *****\n\n");

let regexassgin04 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https?           => https exsist or not
// :                => contain :
// \/\/             => contain // but use \ to escape from defined expersion
// (?:[-\w]+\.)?    => contain ?:
// ([-\w]+)\.       =>
// \w+(?:\.\w+)?    =>
// \/?              => contain / but use \ to escape from defined expersion
// .*               => have zero or more anything but space a-z A-Z 0-9 ...etc
// i                => ignore letter case | not case sensentive

console.log(`
#### /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i ####

// https?           => https exsist or not
// :                => contain :
// \/\/             => contain // but use \ to escape from defined expersion
// (?:[-\w]+\.)?    => contain ? followed by : followed by dot .
// ([-\w]+)\.       => contain one or more ( a-z A-Z digits _ - ) followed by dot .
// \w+(?:\.\w+)?    => (\w+ => contain one char or more | contain (?:\.\w+)? => (contain ? | contain dot . | contain one char or more)) or not
// \/?              => contain / but use \ to escape from defined expersion
// .*               => have zero or more anything but space a-z A-Z 0-9 ...etc
// i                => ignore letter case | not case sensentive
`);

/**
 * 04
 */
console.log("\n***** " + `05` + " *****\n\n");

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let regexassgin05 = /\d{2}\s?[-\/]?\s?\d{2}\s?[-\/]?\s?\d{2,4}/; // Write Pattern Here

console.log(date1.match(regexassgin05)); // "25/10/1982"
console.log(date2.match(regexassgin05)); // "25 - 10 - 1982"
console.log(date3.match(regexassgin05)); // "25 10 1982"
console.log(date4.match(regexassgin05)); // "25 10 82"

/**
 * 06
 */
console.log("\n***** " + `06` + " *****\n\n");
let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re =
  /(((http(s)?):(\/\/))?(www.)?)(\w+.\w+)(:?(\d{4})?)(\/?(\w+.\w+\?)?)((\w+=(\w+|\d+).?)+)?/gi; // Write Your Pattern Here
// :?(\d{4})?\/?(\d+)?
console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
