// Get all checkboxes
let fontSizeBox = document.getElementById("fonts-size");
let fontFamilyBox = document.getElementById("fonts");
let colorBox = document.getElementById("colors");

// localStorage keys
let fontSizeKey = "fontSize";
let fontFamilyKey = "fontFamily";
let colorKey = "color";

// add from 16 to 30
for (let index = 16; index <= 30; index++) {
  let size = document.createElement("option");
  size.value = index;
  size.innerHTML = index;
  fontSizeBox.append(size);
}

function applyStoredKeys() {
  if (window.localStorage.getItem(fontSizeKey)) {
    setFontSize(window.localStorage.getItem(fontSizeKey));
  } else {
  }
  if (window.localStorage.getItem(fontFamilyKey)) {
    setFontFamily(window.localStorage.getItem(fontFamilyKey));
  } else {
  }
  if (window.localStorage.getItem(colorKey)) {
    setColor(window.localStorage.getItem(colorKey));
  } else {
  }
}
applyStoredKeys();

function setFontSize(value) {
  fontSizeBox.value = value;
  document.body.style.fontSize = `${value}px`;
}
function setFontFamily(value) {
  fontFamilyBox.value = value;
  document.body.style.fontFamily = value;
}
function setColor(value) {
  colorBox.value = value;
  document.body.style.color = value;
}

function saveToStorage(key, value) {
  console.log(value);
  window.localStorage.setItem(key, value);
  applyStoredKeys();
}

fontSizeBox.onchange = () => {
  saveToStorage(fontSizeKey, fontSizeBox.value);
};
fontFamilyBox.onchange = () => {
  saveToStorage(fontFamilyKey, fontFamilyBox.value);
};
colorBox.onchange = () => {
  saveToStorage(colorKey, colorBox.value);
};
