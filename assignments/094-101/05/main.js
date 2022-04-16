document.addEventListener("click", function (e) {
  if (e.target) {
    console.log(`This Is ${e.target.nodeName}`);
  }
});
