// Filter Strings + Multiply

let mix = "A13BS2ZX";

let result = mix
  .split("")
  .filter((ele) => {
    return !isNaN(ele);
  })
  .map((ele) => ele * ele);

console.log(result);
