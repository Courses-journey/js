document.querySelectorAll("img").forEach((element) => {
  if (element.hasAttribute("alt")) {
    element.setAttribute("alt", "Old");
  } else {
    element.setAttribute("alt", "Elzero New");
  }
});
