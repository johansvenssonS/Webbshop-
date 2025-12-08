//// hej hej hej
import { Store } from "./src/store.js";


let store = new Store();

let productData = await store.getProducts();
store.createProducts(productData);

console.log(store)


const createKarusell = (fullStore) => {
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
  }

/* <h2>Kategori Titel</h2>
            <div id="productGrid">
                <div class="product">
                    <img
                        src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800"
                        alt=""
                    />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>

                <div class="product">
                    <img src="https://picsum.photos/id/1040/300/200" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">1 990 kr</div>
                </div>
                <div class="product">
                    <img src="https://picsum.photos/id/1040/400/300" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>
                <div class="product">
                    <img src="https://picsum.photos/id/1040/400/300" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>
                <div class="product">
                    <img src="https://picsum.photos/id/1040/400/300" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>
                <div class="product">
                    <img src="https://picsum.photos/id/1040/400/300" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>
                <div class="product">
                    <img src="https://picsum.photos/id/1040/400/300" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>
                <div class="product">
                    <img src="https://picsum.photos/id/1040/400/300" alt="" />
                    <h4>Namn på produkt</h4>
                    <div class="price">4 290 kr</div>
                </div>
            </div> */
