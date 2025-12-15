//// hej hej hej
import { Store } from "./src/store.js";
import { createProductView, filterEvents } from "./components/productView.js";
import { Basket } from "./src/basket.js";
import { basketHandler } from "./components/cartView.js";
///VID UPPSTART HÄMTA ALLA PRODUKTER

/// Skapa nytt Store objekt
let store = new Store();
let cart = new Basket();

/// Hämta alla produkter i Json
let productData = await store.getProducts();
/// Skapa produkt objekt ifrån Json Data I store objekt createProducts()
store.createProducts(productData);
basketHandler(cart);

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

export function getCart() {
  return cart;
}
