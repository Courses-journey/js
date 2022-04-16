// Body
document.body.style.cssText = `
      margin: 0px;
      background-color:#E8E8E8; 
      font-family: Arial, Helvetica, sans-serif;
`;

// Start Header

let header = document.createElement("header");
let nav = document.createElement("div");
header.append(nav);
nav.className = ".nav";
nav.style.cssText = `
        display: flex;
        background-color:white; 
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        align-items:center; 
`;

// logo
let logo = document.createElement("div");
nav.append(logo);

logo.className = ".logo";
logoName = document.createElement("h1");
logoName.innerHTML = "Elzero";
logoName.style.cssText = `
padding: 0px;
margin: 0px;
        font-size: 30px;
        font-weight: 800;
        color: #23A96E;
`;
logo.append(logoName);

// listy=
let list = document.createElement("ul");
nav.append(list);
list.className = "list";
list.style.cssText = `
        display: flex;
        gap: 10px;
        font-size: 15px;
        font-weight: bold;
        color: #aaa;
        list-style: none;
`;

// nav.append(logo);
listHome = document.createElement("li");
listHome.innerHTML = "Home";
list.append(listHome);
listAbout = document.createElement("li");
listAbout.innerHTML = "About";
list.append(listAbout);
listServices = document.createElement("li");
listServices.innerHTML = "Services";
list.append(listServices);
listContact = document.createElement("li");
listContact.innerHTML = "Contact";
list.append(listContact);

document.body.append(header);

// End Header
/****************** */
// Start Body
let main = document.createElement("div");
main.className = "product-grid";
main.style.cssText = `
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        grid-template-rows: repeat(5 , 1fr);
        justify-content: center;
        align-items:center;
        width: calc(100vw - 20px);
        height: calc(100vh - 110px);
        gap: 20px;
`;

for (let index = 0; index < 15; index++) {
  let card = document.createElement("div");
  card.setAttribute("id", `product-${index + 1}`);
  card.style.cssText = `
        padding: 10px;
        display: flex;
        flex-direction:column; 
        justify-content: center;
        align-items:center;
        background: white;
        `;
  let productTitle = document.createElement("h2");
  productTitle.style.cssText = `
        font-size: 30px;
        `;
  productTitle.innerHTML = `${index + 1}`;
  let productDetails = document.createElement("p");
  productDetails.style.cssText = `
              font-size: 15px;
              color: #aaa;
              `;
  productDetails.innerHTML = `Product`;
  card.append(productTitle);
  card.append(productDetails);
  main.append(card);
}

document.body.append(main);
// End Body
/****************** */
// Start footer
let footer = document.createElement("footer");
footer.style.cssText = `
        display: flex;
        background-color:#23A96E; 
        justify-content: center;
        padding: 10px;
        align-items:center;
        position: absolute;
        bottom: 0px;
        width: calc(100% - 20px);
`;

copyText = document.createElement("h2");
copyText.innerHTML = `Copyright 2021`;
copyText.style.cssText = `
        padding: 0px;
        margin: 0px;
        font-size: 15px;
        color: white;

`;
footer.append(copyText);

document.body.append(footer);
// End Footer
