let classContainer = document.querySelector(".classes-list div");
let addField = document.querySelector(".classes-to-add");
let removeField = document.querySelector(".classes-to-remove ");

addField.onblur = () => {
  handleInput("add", addField.value.trim());
};

removeField.onblur = () => {
  handleInput("remove", removeField.value.trim());
};

function handleInput(operation, text) {
  // if input is empty
  if (text === "") {
    checkIfEmpty();
    return;
  }

  // split string
  textList = text.toLowerCase().split(" ");

  // Remove
  if (operation === "remove") {
    for (let i = 0; i < textList.length; i++) {
      // Ignore space and empty
      if (textList[i] === "" || textList[i] === " ") {
        continue;
      }
      if (deleteClassIfExist(textList[i])) {
        console.log("Exist.");
      } else {
        console.log("Not Found.");
      }
    }
  }

  // Add
  else if (operation === "add") {
    for (let i = 0; i < textList.length; i++) {
      // Ignore space and empty
      if (textList[i] === "" || textList[i] === " ") {
        continue;
      }
      if (checkIfClassIsExist(textList[i]) === false) {
        createCard(textList[i]);
      } else {
        console.log("Already Exist.");
      }
    }
  }
  checkIfEmpty();
  sortContainer();
}

function createCard(className) {
  let card = document.createElement("span");
  card.className = className;
  card.innerHTML = className;
  classContainer.append(card);
}

function checkIfClassIsExist(className) {
  let isExist = false;
  for (let j = 0; j < classContainer.children.length; j++) {
    if (classContainer.children[j].classList.contains(className)) {
      isExist = true;
    }
  }
  return isExist;
}

function deleteClassIfExist(className) {
  for (let j = 0; j < classContainer.children.length; j++) {
    if (classContainer.children[j].classList.contains(className)) {
      classContainer.children[j].remove();
    }
  }
}

function sortContainer() {
  var sortedArray = [].slice
    .call(classContainer.children)
    .sort(function (a, b) {
      return a.textContent > b.textContent ? 1 : -1;
    });

  for (let index = 0; index < sortedArray.length; index++) {
    classContainer.appendChild(sortedArray[index]);
  }
}

function checkIfEmpty() {
  if (classContainer.children.length === 0) {
    let emptyTxt = document.createElement("h5");
    emptyTxt.style.cssText = `
    text-align:center; 
    `;
    emptyTxt.innerHTML = "No Classes To Show";
    classContainer.append(emptyTxt);
  } else {
    if (classContainer.children[0].innerHTML === "No Classes To Show") {
      classContainer.children[0].remove();
    }
  }
}

// Check when page load
checkIfEmpty();
