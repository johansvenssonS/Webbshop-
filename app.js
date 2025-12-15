//// hej hej hej
import { Store } from "./src/store.js";
import { createProductView, filterEvents } from "./components/productView.js";
import { Basket } from "./src/basket.js";
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

// Cart data
let cart = new Basket();

// DOM-element
const openCartBtn = document.getElementById("openCartBtn");
const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartCountElem = document.getElementById("cartCount");
const cartTotalElem = document.getElementById("cartTotal");

// Öppna/stäng modal
openCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("hidden");
    renderCart();
});
closeCartBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden");
});

// Lägg till produkt i cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
}

// Ta bort produkt
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCount();
}

// Räkna totalpris
function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

// Uppdatera antal i cart-knappen
function updateCartCount() {
    cartCountElem.textContent = cart.length;
}

// Rendera cart-listan
function renderCart() {
    cartItemsList.innerHTML = "";
    cart.forEach((item, i) => {
        const li = document.createElement("li");
        li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name} — ${item.price} kr</span>
      <span class="remove-btn" onclick="removeFromCart(${i})">✖</span>
    `;
        cartItemsList.appendChild(li);
    });

    cartTotalElem.textContent = getCartTotal();
}
