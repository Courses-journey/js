let form = document.forms[0];

// form style
// css
form.style.cssText = `
display: flex;
flex-direction:column;
gap: 10px;
align-items: center;
`;

// form elements style
for (let index = 0; index < form.children.length; index++) {
  const element = form.children[index];
  // css
  element.style.cssText = `
width: 200px;
height: 30px;
`;
}

btn = document.querySelector(`input[name="create"]`);
// css
btn.style.cssText = `
background-color: #009982;
width: 200px;
height: 30px;
border: none;
color: white;
`;

// create board
let eleCount = document.querySelector(`input[name="elements"]`);
let eleTxt = document.querySelector(`input[name="texts"]`);
let eleType = document.querySelector(`select[name="type"]`);
btn.onclick = (e) => {
  let countValid = false;
  let txtValid = false;
  eleCount.innerHTML = "sas";
  if (eleCount.value !== "") {
    countValid = true;
  }
  if (eleTxt.value !== "") {
    txtValid = true;
  }

  if (countValid === false || txtValid === false) {
    alert("Please fill all data!");
    e.preventDefault();
  } else {
    createBoard();
  }
};

function createBoard() {
  try {
    result.innerHTML = "";
    for (let index = 0; index < eleCount.value; index++) {
      let ele2Create;
      if (eleType.value === "Section") {
        ele2Create = document.createElement("section");
      } else if (eleType.value === "Div") {
        ele2Create = document.createElement("div");
      }

      // css

      ele2Create.innerHTML = eleTxt.value;
      // css
      ele2Create.style.cssText = `
background-color: #FC572D;
height: 50px;
width: calc(100% /3 - 10px);
color: white;
display: flex;
justify-content: center; 
align-items: center;
`;
      ele2Create.setAttribute("id", `id-${index + 1}`);
      console.log("added");
      result.append(ele2Create);
    }
  } catch (error) {
    alert(error);
  }
}

// reslut
let result = document.getElementsByClassName("results")[0];
// css
result.style.cssText = `
display: flex;
gap: 10px;
flex-wrap: wrap; 
justify-content: space-between;
width: 100%;
`;

// // result element
// for (let index = 0; index < result.children.length; index++) {
//   const element = result.children[index];
//   element.innerHTML = eleTxt.value;
//   // css
//   element.style.cssText = `
// background-color: #FC572D;
// height: 50px;
// width: calc(100% /3 - 10px);
// color: white;
// display: flex;
// justify-content: center;
// align-items: center;
// `;
// }

console.log(btn);
