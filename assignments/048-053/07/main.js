let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
// Output
2;
3;
4;

for (let index = 0; index < mix.length; index++) {
  if (index === 0) {
    continue;
  }
  if (typeof mix[index] == "string") {
    continue;
  }
  console.log(mix[index]);
}
