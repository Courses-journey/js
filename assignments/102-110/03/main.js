div = document.createElement("div");
div.innerHTML = "10";
div.style.cssText = `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
font-size: 40rem;
`;

document.body.append(div);

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    div.style.color = "red";
    clearInterval(countDownTimer);
  }
}

let countDownTimer = setInterval(countDown, 1000);
