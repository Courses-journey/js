let dollarValue = 15.6;

let field = document.forms[0].firstElementChild;

let result = document.forms[0].lastElementChild;

function convert(value) {
  return `{${value}} USD Dollar = ${(value * dollarValue).toFixed(
    2
  )} Egyptian Pound`;
}

field.oninput = (e) => {
  result.textContent = convert(field.value);
};
