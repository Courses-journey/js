let range = prompt("Print Number From – To", "Example: 5-20");

let largeNum, smallNum;
if (range.split("-")[0] > range.split("-")[1]) {
  largeNum = range.split("-")[0];
  smallNum = range.split("-")[1];
} else {
  largeNum = range.split("-")[1];
  smallNum = range.split("-")[0];
}
for (let index = smallNum; index <= largeNum; index++) {
  console.log(index);
}
