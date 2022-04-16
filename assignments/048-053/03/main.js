let start = 1;
let end = 6;
let breaker = 2;

for (let index = start; index <= end; index++) {
  console.log(index);
  for (let j = start; j <= breaker; j++) {
    console.log(`--${breaker * j}`);
  }
}
