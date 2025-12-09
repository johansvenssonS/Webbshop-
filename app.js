//// hej hej hej
import { Store } from "./src/store.js";
import { createProductView, filterEvents } from "./components/productView.js";

///VID UPPSTART HÄMTA ALLA PRODUKTER

/// Skapa nytt Store objekt
let store = new Store();
/// Hämta alla produkter i Json
let productData = await store.getProducts();
/// Skapa produkt objekt ifrån Json Data I store objekt createProducts()
store.createProducts(productData);

let productsSortiment = store.getStore();
/// I samma funktion createProducts() läggs även de till i Store Objekt
///___________________________________________________
/// Skapa produktVyn med store objektet
let view = createProductView(productsSortiment);
console.log(store);

///Filtrera store, returnerar en kopia på matchande objekt i store arr[]
let filtered = store.filterProducts("Kök");
filterEvents(store);
console.log("Filtrerat", filtered);

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
