// Get text field
let field = document.querySelector(".input");
// Get Add btn
let addBtn = document.querySelector(".add");
// Get tasks board
let tasksBoard = document.querySelector(".tasks");
// Get tasks in tasks board
let tasksHTML = tasksBoard.children;
/**************** */
let storageKey = "tasks";
/**************** */

addBtn.onclick = () => {
  if (field.value === "") {
    return;
  }
  handelAdding(field.value);
};

function checkIfTaskExist(taskTitle) {
  let isExist = false;
  for (let index = 0; index < tasksHTML.length; index++) {
    if (tasksHTML[index].firstElementChild.innerHTML === taskTitle) {
      isExist = true;
    }
  }
  return isExist;
}

function handelAdding(taskTitle) {
  if (checkIfTaskExist(taskTitle)) {
    alert("Already exsit");
  } else {
    addToLocalStorage(createTaskItem(taskTitle));
  }
}
function createTaskItem(taskTitle, id = Math.round(Date.now() / 1000)) {
  //   const secondsSinceEpoch = Math.round(Date.now() / 1000);
  /** */
  let item = document.createElement("div");
  item.className = "item";
  item.setAttribute("id", `${id}`);
  /*** */
  let p = document.createElement("p");
  p.innerHTML = taskTitle;
  /** */
  let deletebtn = document.createElement("div");
  deletebtn.className = "delete-btn";
  deletebtn.innerHTML = "Delete";
  deletebtn.onclick = () => {
    let deletedId = deletebtn.parentElement.getAttribute("id");
    removeTasksFromStorage(deletedId);
    deletebtn.parentElement.remove();
  };
  /** */
  item.append(p);
  item.append(deletebtn);
  tasksBoard.append(item);
  /** */
  clearInput();
  /** */
  return { id: id, title: taskTitle };
}

function clearInput() {
  field.value = "";
}

function addToLocalStorage(taskData) {
  if (window.localStorage[storageKey]) {
    let stored = JSON.parse(window.localStorage[storageKey]);
    stored.push(taskData);
    window.localStorage[storageKey] = JSON.stringify(stored);
  } else {
    window.localStorage[storageKey] = JSON.stringify([taskData]);
  }
}

function restoreTasksFromStorage() {
  if (window.localStorage[storageKey]) {
    let stored = JSON.parse(window.localStorage[storageKey]);
    for (let index = 0; index < stored.length; index++) {
      createTaskItem(stored[index]["title"], stored[index]["id"]);
    }
  }
}

function removeTasksFromStorage(taskId) {
  if (window.localStorage[storageKey]) {
    let stored = JSON.parse(window.localStorage[storageKey]);
    for (let index = 0; index < stored.length; index++) {
      if (stored[index]["id"] === +taskId) {
        stored.splice(index, 1);
        console.log(stored);
        window.localStorage[storageKey] = JSON.stringify(stored);
        return;
      }
    }
  }
}

restoreTasksFromStorage();
