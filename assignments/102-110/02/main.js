function showPopup() {
  let popup = document.createElement("div");
  popup.style.cssText = `
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 200px;
  transform: translate(-50%,-50%);
  background-color: #eee; 
  display: flex;
  flex-direction:column; 
  align-items: center;
  justify-content : center;
  fontFamily: 
  `;

  h2 = document.createElement("h2");
  h2.innerHTML = "Welcome";

  p = document.createElement("p");
  p.innerHTML = "Welcome To Elzero Web School";

  popup.append(h2);
  popup.append(p);

  let closeBtn = document.createElement("button");
  closeBtn.style.cssText = `
  position: absolute;
  background-color:red;
  width: 30px;
  height: 30px;
  border-radius:50%; 
  border: none;
  right: 0px;
  top: 0px;
  transform: translate(50%,-50%);
  color: white;
  font-size:15px;
  font-weight:bold;  
  cursor: pointer;
  text-align: center;
  `;

  closeBtn.onclick = () => {
    closeBtn.parentElement.remove();
  };

  closeBtn.innerHTML = "X";

  popup.append(closeBtn);

  document.body.append(popup);
}

setTimeout(showPopup, 5000);
