// delete paragraph
if (document.getElementsByTagName("p")[0]) {
  let p = document.getElementsByTagName("p")[0];
  p.remove();
}

// get starting div
let div = document.querySelector("div.our-element");

// Before

let before = document.createElement("div");
before.setAttribute("title", "Start Element");
before.setAttribute("data-value", "Start");
before.innerHTML = "Start";
div.before(before);

// After

let after = document.createElement("div");
after.setAttribute("title", "End Element");
after.setAttribute("data-value", "Start");
after.innerHTML = "End";
div.after(after);
