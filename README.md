# 004

u can test ur code directly in console tab in browser

---

# 005

u can put script tag in `<head>` or in `<body>`

- it prefered to put it in the end of the `<body>`
- u can put it in head but use code to select html element in `window.onload{}`

---

# 007

Output to screen

- `console.log()`
- `console.alert()`
- `console.write()`

---

# 008

- Console Methods

  - `console.log()` to log any msg
  - `console.error` to print msg as an error
  - `console.table()` to print array element with its index

- directive
  -%c

to style certin text in log u can do this

`console.log("Hello %cjs %cworld","font-size: 40px,color: red","font-size: 40px,color: bleu")`

console not a js thing but a webApi thing u can read more in MDN

---

# Assignment 001-009

There is grouping method u can group and make nested group in console like that

```
  console.group("Group 1");
  console.log("Msg 01");
  console.log("Msg 02");
  console.group("Child Group");
  console.log("Msg 01");
  console.log("Msg 02");
  console.group("Grand Child Group");
  console.log("Msg 01");
  console.log("Msg 02");
  console.groupEnd();
  console.groupEnd();
  console.groupEnd();
  console.group("Group 2");
  console.log("Msg 01");
  console.log("Msg 02");
  console.groupEnd();
```

---

# 010

- Data Types And Typeof Operator

  - String
  - Number
  - Array => Object
  - Object
  - Boolean
  - undifened
  - null => Object
  - there is more

- To know type of var u can use `typeof (var)` or `typeof var`
  - if var is string u should put it in double quotes `""`
  - if not put it as same like `typeof 347` or `typeof [3,4,7]` etc

---

# 011

Any `id` inside html is a global variable and u can use it it javaScript

- for example
  `<div id= "option">Option Text<div>`
  - u can use it like this
    `console.log(option)` output is `Option Text`
  - or u can change inner html like that
    `option.innerHTML = "New Text`

---

# 013

Var, Let, Const Compare

Var

- Redeclare (Yes)
- Access Before Declare (Undefined)
- Variable Scope Drama [Added To Window] ()
- Block Or Scope Function

Let

- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
- Block Or Scope Function

Const

- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
- Block Or Scope Function

Any variable u decalre using `var` added to window object unlike `let` or `const`

---

# 014

String Syntax + Character Escape Sequences

- \ Escape + Line Continue
  - to ignore next characheter from programming language
- \n

---

# 015

- Concatenation

u can concat strings with `+`
if u want to log multi var u can use seperate them with comma `,` in log and it will add spaces between like `console.log(a,b,c)`

---

# 016

- Template Literals Template Strings

u can use dollar sign `$` to concat varibles in string by using backtick `` ` `` like this `` console.log(`${a} ${b} ${c}`) `` u can add new line simply by pressing enter

u can repeat certin string by using `var.repeat()`
for example

```
let a = "Lab"
console.log(a.repeat(2) + "La");
```

`output: LabLabLa`

---

# 018

Arithmetic Operators

- `**` expontional operator

  - `2 ** 4` is the same as 2^4

- `++` & `--`

```
a = 1;
console.log(a); //1
a++; //1
console.log(a); //2
++a; //3
console.log(a); //3
```

---

# 019

- Unary Plus And Negation Operators

  - - Unary Plus [Return Number If Its Not Number]

  - - Unary Negation [Return Number If Its Not Number + Negates It]

Tests

- Normal Number
- String Number
- String Negative Number
- String Text
- Float
- Hexadecimal Numeral System => 0xFF
- null
- false
- true

u can also use `Number(" ")`

---

# 023

Number

- Compiler ignore `_` betwwen number
- u can use `e` to represent exponetional value like `2e6` output is `2000000`

---

# 023

- To use toString() u can do that

  - `(10).toString()`
  - `10..toString()`

- `.toFixed( )` it used to control the number

  - of decimal value
    `(10.4535).toFixed(2)` output: `10.45` as string

- `.parseInt( )` | `.parseFloat( )`

---

# 024

- Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]

---

# 025

- Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]

---

# 031

- `=` Equal

  - assign values

- `==` Equality

  - compare value only and ignore type

- `===` Identical operator recommended
  - compare value and type

To check if data type equal data type but ignore value u can use
`typeof var1 === typeof var2`

---

# 035

Conditional Ternary Operator
=> Shortend if

---

# 036

- Nullish Coalescing Operator And Logical Or

- Logical Or `||`
  - Null + Undefined + Any Falsy Value
- Nullish Coalescing Operator `??`
  - Null + Undefined

---

# 038

Switch Statement

U can do multi case with same todo like that

```
let day = 2;

Switch (day) {

  case 1:
    //do something;
    break;

case 2:
case 3:
    //do something else;
    break;

}
```

---

# 040

`Array.isArray(var)` to check if something is array

- string is sequence not an array

---

# 042

Add And Remove From Array

`unshift(var)` add element at the start of array
`push(var)` add element at the end of array
`shift()` remove first element from array
`pop()` remove last element from array

---

# 043

Searching array

Arrays Methods [Search]

- indexOf(Search Element, From Index [Opt])
- lastIndexOf(Search Element, From Index [Opt])
- includes(valueToFind, fromIndex [Opt]) [ES7]

---

# 044

Sorting Arrays

`sort()` to sort array depend on alphapet not value
`reverse()`

---

# 045

Arrays Methods [Slicing]

Slice
return new array & dosen't affect current array

- slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array

Splice
Affect current array

- splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End

---

# 046

Arrays Methods [Joining]

- `concat(array, array)` => Return A New Array
- `join(Separator)` join all items as string and u can define separetor between them

---

# 051

Loop Control - Break, Continue, Label

`break;` || `break label;` stop iteration
`Continue;` || `Continue label;` exclude this iteration

```
parent: for(let i = 0; i<5; i++){
  //do someting
  child: for(let k = 0; k <5 ; k++) {
    //do someting
      if(){
      break parent;
      }
  }
}
```

---

# 055

`while` vs `DoWhile`

- `while` like `for` do something while condition is true

- `dowhile` like `while` but is do first loop regardless the condition is true or not

---

# 061

Function Rest Parameters

- Rest Parameters
- Only One Allowed
- Must Be Last Element

```
function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}
```

---

# 064

Anonymous Function And Practice

- Anonymous Function
- Calling Named Function vs Anonymous Function
- Argument To Other Function
- Task Without Name

- ## SetTimeout : do something after certin time
  -
  - ````
    setTimeout(function elzero() {
        console.log("Good");
      }, 2000);```
    ````

---

# 066

Arrow Function Syntax

- Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines

```
let print = function () {
  return 10;
};

let print = () => 10;

let print = _ => 10;

let print = function (num) {
  return num;
};

let print = (num) => num;

// in case of one param
let print = num => num;

let print = function (num1, num2) {
  return num1 + num2;
};

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));
```

---

Scope - Block

- Block Scope [If, Switch, For]

- If u define a variable in block scope with `var` keyword it will be rechable out of the block

- To prevent that u must use `let` keyword to define it

---

# 069

Scope - Lexical (Static)

---

# Assignment 064 - 070

- [Read about Currying Function Technique](https://javascript.info/currying-partials)

---

# 071

Higher Order Functions
---> is a function that accepts functions as parameters and/or returns a function.

- Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)

- Element => The current element being processed in the array.
- Index => The index of the current element being processed in the array.
- Array => The Current Array

Notes

- Map Return A New Array

Examples

- Anonymous Function
- Named Function

```
let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);
```

---

# 073

- Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)

- Element => The current element being processed in the array.
- Index => The index of the current element being processed in the array.
- Array => The Current Array

---

# 075

- Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

Syntax
reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)

- Accumulator => the accumulated value previously returned in the last invocation
- Current Val => The current element being processed in the array
- Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
- Array => The Current Array

---

# 077

- forEach
  --- method executes a provided function once for each array element.

Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)

- Element => The current element being processed in the array.
- Index => The index of the current element being processed in the array.
- Array - The Current Array

Note

- Doesnt Return Anything [Undefined]
- Break Will Not Break The Loop

---

# 080

Dot Notation vs Bracket Notation

```
let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country
```

---

# 083

Function this Keyword

- this Introduction
- this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
- Global Object
- Test Variables With Window And This
- Global Context
- Function Context

[Search Strict Mode]()

---

# 086

DOM

- What Is DOM
- DOM **Selectors**
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links

```
let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);
```

---

# 087

DOM [Get / Set Elements Content And Attributes]

- innerHTML
- textContent
- Change Attributes Directly
- Change Attributes With Methods
  --- getAttribute
  --- setAttribute

[Search innerText]()

---

# 088

DOM [Check Attributes]

- Element.attributes
- Element.hasAttribute
- Element.hasAttributes
- Element.removeAttribute

---

# 089

DOM [Create Elements]

- createElement
- createComment
- createTextNode
- createAttribute
- appendChild

---

# 091

DOM [Deal With Childrens]

- children
- childNodes
- firstChild
- lastChild
- firstElementChild
- lastElementChild

---

# 092

DOM [Events]

- Use Events On HTML
- Use Events On JS
  --- onclick
  --- oncontextmenu : to create custom menu fro example
  --- onmouseenter
  --- onmouseleave

--- onload
--- onscroll
--- onresize

--- onfocus: when select input to use it
--- onblur: when end input and become out of focus
--- onsubmit

---

# 094

Event Simulation
to simulate events

Click Focus Blur
`ele.click()`
`ele.focus()`
`ele.blur()`

---

# 095

DOM [Class List]

- classList
  --- `.classList.length` get length of classes
  --- `.classList.contains("")` check if certin class name is exists or not
  --- `.classList.item("index")` get class name by index
  --- `.classList.add()`
  --- `.classList.remove()`
  --- `.classList.toggle()` check if class name is exsist it will remove if not exisit it will be added

---

# 096

CSS Styling And Stylesheets

DOM [Class List]
-- style
-- `style.cssText = ""`
-- `style.removeProperty(propertyName)` [inline, Stylesheet]
-- `style.setProperty(propertyName,value,priority)` `priority like "priority"`
-- `document.styleSheets` to get all stylesheets in pages
-- `document.styleSheets[index].rules` to get all rules in stylesheets in pages `rules mean every element style in sheet`

-- `document.styleSheets[index].rules[index].style` to access certin style in certin styleSheet

---

# 097

DOM [Deal With Elements]

- before [Element || String] `ele1.before(ele2)`
  -- put ele1 before certin ele2

- after [Element || String] `ele1.after(ele2)`
  -- put ele1 after certin ele2

- append [Element || String]
- prepend [Element || String]
- remove

---

# 098

DOM [Traversing]

- nextSibling
- previousSibling

- nextElementSibling
- previousElementSibling

- parentElement: get parent element

---

# 099

DOM [Cloning]

- cloneNode(Deep)

`deep` is a boolean value if true it will clone element and its childern
if false or not written it will clone element without children
for all cases it will clone element property

```
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`;

myDiv.appendChild(myP);
```

---

# 100

DOM [Add Event Listener]

add listener on element even before its exisitance

- addEventListener
- Use Without On
- Attach Multiple Events
- Error Test

Search

- Capture & Bubbling JavaScript
- [removeEventListener](https://www.w3schools.com/jsref/met_element_removeeventlistener.asp)

```
// u can get clicked element by this way
document.addEventListener("click",function(e){
  if(e.target)
  {
    console.log(e.target)
  }
})
```

---

`.nodeName` to get type of htmlelement

---

# 102

BOM [Browser Object Model]

- Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
- What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later

---

# 103

BOM [Browser Object Model]

- alert(Message) => Need No Response Only Ok Available
- confirm(Message) => Need Response And Return A Boolean
- prompt(Message, Default Message) => Collect Data

library `SweetAlert2`

---

# 104

BOM [Browser Object Model]

- setTimeout(Function, Timeout, Additional Params)
- clearTimeout(Identifier)

if u use an anonymous function and u want to pass paramerters u can do it like this

```
setTimeout(sayMsg, 3000, "Osama", 38);

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}
```

if u write function like this

```
setTimeout(sayMsg("Osama", 38), 3000);

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}
```

it will be always called and the timer won't work

---

# 105

BOM [Browser Object Model]

- setInterval(Function, Millseconds, Additional Params)
- clearInterval(Identifier)

```
The diffrence between interval and setTimeout
that interval call function repeatly after given time
unlike settimeout which call function only one time after given time
```

---

# 106

BOM [Browser Object Model]

- location Object `To deal with url`

  --- `.href =` Get / Set [URL || Hash || File || Mail] =========> `Don't replace site entery from history`
  --- `.host =` and `hostname` =========> u can fro example change host or hostname and leave rest of url the same
  --- `.hash =`
  --- `.protocol =`
  --- `.reload()` to reload page
  --- `.replace("url")` =========> `Replace site entery from history`
  --- `.assign()` =========> `Don't replace site entery from history`

---

# 107

BOM [Browser Object Model]

- open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
- close() `Only close windows which opened by open()`
- Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

Search

- Window.Open Window Features

```
  // _blank default value || open in new tab
  // _self || open in current tab
  window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
```

---

# 108

BOM [Browser Object Model]

- History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

Search [For Advanced Knowledge]

- pushState() + replaceState()

---

# 109

BOM [Browser Object Model]

- stop()
- print()
- focus()
- scrollTo(x, y || Options)
- scroll(x, y || Options)
- scrollBy(x, y || Options)

```
// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });
```

---

# 110

BOM [Browser Object Model]

- Practice => Scroll To Top
- scrollX [Alias => PageXOffset]
- scrollY [Alias => PageYOffset]

---

# 111

BOM [Browser Object Model]
Local Storage

- setItem
- getItem
- removeItem
- clear
- key

Info

- No Expiration Time
- HTTP And HTTPS
- Private Tab

```
// Set
window.localStorage.setItem("color", "#F00");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);
```

---

# 113

BOM [Browser Object Model]
Session Storage

- setItem
- getItem
- removeItem
- clear
- key

Info

- New Tab = New Session
- Duplicate Tab = Copy Session
- New Tab With Same Url = New Session

---

# 115

Destructuring
" is a JavaScript expression that allows us to extract data from arrays,
objects, and maps and set them into new, distinct variables. "

- Destructuring Array

```
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

// if u want to ignore certin index leave it empty in the oppiste arrays
let [, y, , z] = myFriends;

console.log(y);
console.log(z);
```

---

# 116

Destructuring

- Destructuring Array Advanced Examples

```
let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [a, , [, b]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal
```

---

# 117

Destructuring

- Destructuring Array => Swapping Variables

```
let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);
```

---

# 118

Destructuring

- Destructuring Object

```
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
// Here order isn't impoaratant because u call property by its name
const { theName, theAge, theCountry } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);
```

---

# 119

Destructuring

- Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only

```
const user = {
theName: "Osama",
theAge: 39,
theTitle: "Developer",
theCountry: "Egypt",
theColor: "Black",
skills: {
html: 70,
css: 80,
},
};

const {
theName: n,
theAge: a,
theCountry,
theColor: co = "Red",
skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);
```

---

# 120

Destructuring

- Destructuring Function Parameters

```
const user = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}
```

---

# 121

Destructuring

- Destructuring Mixed Content

```
const user = {
theName: "Osama",
theAge: 39,
skills: ["HTML", "CSS", "JavaScript"],
addresses: {
egypt: "Cairo",
ksa: "Riyadh",
},
};

const {
theName: n,
theAge: a,
skills: [, , three],
addresses: { egypt: e },
} = user;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);
```

---

`Object.keys(game.releases);` to get name of key
for example

```
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

let [o, a] = Object.keys(game.releases); // o=> "Oath In Felghana" a=>"Ark Of Napishtim"
```

---

# 123

- Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

- Properties:

  - size

- Methods:
  - add
  - delete
  - clear : clear all data in set
  - has : check if certin data is exsist

```
let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);
```

---

# 124

- Set vs WeakSet
  "
  The WeakSet is weak,
  meaning references to objects in a WeakSet are held weakly.
  If no other references to an object stored in the WeakSet exist,
  those objects can be garbage collected.
  "

`.`

- Set => Can Store Any Data Values
- WeakSet => Collection Of Objects Only

`.`

- Set => Have Size Property
- WeakSet => Does Not Have Size Property

`.`

- Set => Have Keys, Values, Entries
- WeakSet => Does Not Have clear, Keys, Values And Entries

`.`

- Set => Can Use forEach
- WeakSet => Cannot Use forEach

Usage: Store objects and removes them once they become inaccessible

---

# 125

- Map Data Type
  Syntax: new Map(Iterable With Key/Value)

- Map vs Object

`.`

- Map => Does Not Contain Key By Default
- Object => Has Default Keys

`.`

- Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
- Object => String Or Symbol

`.`

- Map => Ordered By Insertion
- Object => Not 100% Till Now

`.`

- Map => Get Items By Size
- Object => Need To Do Manually

`.`

- Map => Can Be Directly Iterated
- Object => Not Directly And Need To Use Object.keys() And So On

`.`

- Map => Better Performance When Add Or Remove Data
- Object => Low Performance When Comparing To Map

---

# 126

- Map Data Type

  - Methods

    - set
    - get
    - delete
    - clear
    - has

  - Properties
    - size

---

# 127

- Map vs WeakMap
  "
  WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "

`.`

Map => Key Can Be Anything
WeakMap => Key Can Be Object Only

`.`

---

# 128

Array Methods

- Array.from(Iterable, MapFunc, This)

  - Variable
  - String Numbers
  - Set
  - Using The Map Function
  - Arrow Function
  - Shorten The Method + Use arguments

- u can use `arguments` to return all arguments in function

```
function test() {
  return arguments;
}

console.log(test("A","B","C")); // ["A","B","C"]
```

---

# 129

Array Methods

- Array.copyWithin(Target, Start => Optional, End => Optional)

  "Copy Part Of An Array To Another Location in The Same Array"

  - Any Negative Value Will Count From The End

  - Target
    - Index To Copy Part To
    - If At Or Greater Than Array Length Nothing Will Be Copied
  - Start
    - Index To Start Copying From
    - If Ommited = Start From Index 0
  - End
    - Index To End Copying From
    - Not Including End
    - If Ommited = Reach The End

---

# 130

Array Methods

- Array.some(CallbackFunc(Element, Index, Array), This Argument)
  - CallbackFunc => Function To Run On Every Element On The Given Array
    - Element => The Current Element To Process
    - Index => Index Of Current Element
    - Array => The Current Array Working With
    - This Argument => Value To Use As This When Executing CallbackFunc

Using

- Check if Element Exists In Array
- Check If Number In Range

---

# 131

Array Methods

- Array.every(CallbackFunc(Element, Index, Array), This Argument)
  - CallbackFunc => Function To Run On Every Element On The Given Array
  - Element => The Current Element To Process
  - Index => Index Of Current Element
  - Array => The Current Array Working With
  - This Argument => Value To Use As This When Executing CallbackFunc

---

# 132

Spread Operator => ...Iterable
"Allow Iterable To Expand In Place"

```
// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
a: 1,
b: 2,
};
let objTwo = {
c: 3,
d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });
```

---

- To convert object to map
  `new Map(Object.entries(myInfo))`

---

# 134

Regular Expression

- Email
- IP
- Phone
- URL

---

# 135

Regular Expression

Syntax
/pattern/modifier(s);
new RegExp("pattern", "modifier(s)")

Modifiers => Flags
i => case-insensitive
g => global
m => Multilines

Search Methods

- match(Pattern)

Match
-- Matches A String Against a Regular Expression Pattern
-- Returns An Array With The Matches
-- Returns null If No Match Is Found.

```
let myString = "Hello Elzero Web School I Love elzero";

let regex = /elzero/ig;

console.log(myString.match(regex));
```

---

# 136-137

Regular Expression

Ranges

- Part 1
  `(X|Y)` => X Or Y
  `[0-9]` => 0 To 9
  `[^0-9]` => Any Character Not 0 To 9
  Practice

- Part 2
  `[a-z]`
  `[^a-z]`
  `[A-Z]`
  `[^a-z]`
  `[abc]`
  `[^abc]`

```
let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));
```

---

# 138

Regular Expression

- Character Classes
  - `.` => matches any character, except newline or - other line terminators.
  - `\w` => "word" => matches word characters. [a-z, A-Z, 0-9 - And Underscore]
  - `\W` => "not word" => matches Non word characters
  - `\d` => "digit" => matches digits from 0 to 9.
  - `\D` => "not digit" => matches non-digit characters.
  - `\s` => "space" => matches whitespace character.
  - `\S` => "not space" => matches non whitespace character.

`Any thing u want start with first letter but small`
what that mean?
`If u want any word then write` `\w` `but if u want non word use it capital` `\W`

```
let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));
```

---

# 139

Regular Expression

- Character Classes

  - `\b` => "beginning" => matches at the beginning or end of a word.
  - `\B` => "not beginning" => matches NOT at the beginning/end of a word.

- Test Method
  - `pattern.test(input)`

```
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test("Osama"));
console.log(/(\bspam|spam\b)/ig.test("1Spam"));
console.log(/(\bspam|spam\b)/ig.test("Spam1"));
```

---

# 140

Regular Expression

- Quantifiers
  - `n+` => One Or More
  - `n*` => zero or more
  - `n?` => zero or one
  -
  - `\` => escape character

```
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));
```

---

# 141

Regular Expression

- Quantifiers
  - `n{x}` => Number of
  - `n{x,y}` => Range
  - `n{x,}` => At Least x

```
let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S
```

---

# 142

- Quantifiers
  - `$` => End With Something
  - `^` => Start With Something
  - `?=` => Followed By Something
  - `?!` => Not Followed By Something

```
let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
console.log(/lz$/ig.test(names));
console.log(/^\d/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));
```

---

# 143

- Regular Expression
  - replace
  - replaceAll

---

# 145

Test Your Regular Expressions And Discussions

- [Regexr](https://regexr.com/)
- [RegExTester](https://www.regextester.com/)
- [RegEx101](https://regex101.com/)
