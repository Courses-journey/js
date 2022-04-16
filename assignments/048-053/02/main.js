let start = 10;
let end = 0;
let stop = 3;

for (let index = start; index >= stop; index--) {
  if (index === start) {
    console.log(index);
    continue;
  }
  console.log(`${end}${index}`);
}
