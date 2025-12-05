import { Store } from "./src/store.js";
import { Product } from "./src/product.js";

const mockText =
  "Emerio brödrost TO-123924 har 7 effektnivåer, en automatisk centreringsfunktion, uppvärmning, Defrost, en ställning och mer. Den är utmärkt för alla som gillar utsökt varmt och krispigt bröd.";
// Start

let p1 = new Product(
  "Sliten begagnad brödrost",
  99,
  "static/brödrost.png",
  mockText
);
let p2 = new Product("Begagnad brödrost", 299, "static/brödrost.png", mockText);
let p3 = new Product("Ny fräschbrödrost", 499, "static/brödrost.png", mockText);

let store = new Store();

store.addToStore(p1);
store.addToStore(p2);
store.addToStore(p3);

// console.log(`Hela sortimentet:${store}`);
// console.log("Hela sortimentet", store.store);
// console.log("Produkt1", p1.name);
// console.log("Produkt2", p2.name);

const createKarusell = (store) => {
  const productCaro = document.querySelector(".product-caro");

  for (let p of store.store) {
    // console.log(p);
    let div = document.createElement("div");
    div.classList.add("itemcard");
    div.innerHTML = `
    <img src="${p.image}" class="product-image" />
      <div class="product-text">
        <h4 class="product-name">${p.name}</h4>
        <div class="product-price">Pris:${p.price}</div>
        <p>${p.description}</p>
      </div>
          
    `;
    //här finns p och div så skicka med de till event
    let pEvent = setupEvent(p, div);
    productCaro.appendChild(div);
  }
};

const setupEvent = (p, div) => {
  console.log(p, div);
  div.addEventListener("click", (event) => {
    let popUp = document.createElement("div");
    popUp.classList.add("modal");
    popUp.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <img src="${p.image}" class="product-image" />
      <div class="product-text">
        <a class="product-name">${p.name}</a>
        <div class="product-price">Pris:${p.price}</div>
        <p>${p.description}</p>
      </div>
      </div>
    `;

    document.body.appendChild(popUp);
    popUp.style.display = "block";
    let link = document.querySelector(".product-name");
    link.innerHTML += "href=product.html";

    popUp.querySelector(".close").addEventListener("click", () => {
      popUp.remove();
    });
  });
};

let c = createKarusell(store);

// <!-- <div class="itemcard">
//   <img src="static/brödrost.png" class="product-image" />
//   <div class="product-name">Brödrost 1</div>
//   <div class="product-price">99.00 kr</div>
// </div>
// <div class="itemcard">
//   <img src="static/brödrost.png" class="product-image" />
//   <div class="product-name">Brödrost 2</div>
//   <div class="product-price">149.00 kr</div>
// </div>
// <div class="itemcard">
//   <img src="static/brödrost.png" class="product-image" />
//   <div class="product-name">Brödrost 3</div>
//   <div class="product-price">199.00 kr</div>
// </div> -->
