// Get all checkboxes
let usernameField = document.getElementById("name");
let emailField = document.getElementById("email");
let colorBox = document.getElementById("colors");

// localStorage keys
let usernameKey = "name";
let emailKey = "email";
let colorKey = "color";

function applyStoredKeys() {
  if (window.sessionStorage.getItem(usernameKey)) {
    setName(window.sessionStorage.getItem(usernameKey));
  } else {
  }

  if (window.sessionStorage.getItem(emailKey)) {
    setEmail(window.sessionStorage.getItem(emailKey));
  } else {
  }

  if (window.sessionStorage.getItem(colorKey)) {
    setColor(window.sessionStorage.getItem(colorKey));
  } else {
  }
}
applyStoredKeys();

function setName(value) {
  usernameField.value = value;
}
function setEmail(value) {
  emailField.value = value;
}
function setColor(value) {
  colorBox.value = value;
  // document.body.style.color = value;
}

function saveToSessionStorage(key, value) {
  console.log(value);
  window.sessionStorage.setItem(key, value);
  applyStoredKeys();
}

usernameField.oninput = () => {
  saveToSessionStorage(usernameKey, usernameField.value);
};
emailField.oninput = () => {
  saveToSessionStorage(emailKey, emailField.value);
};
colorBox.onchange = () => {
  saveToSessionStorage(colorKey, colorBox.value);
};
