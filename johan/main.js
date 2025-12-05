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
let p2 = new Product("Begagnad brödrost", 99, "static/brödrost.png", mockText);
let p3 = new Product("Ny fräschbrödrost", 99, "static/brödrost.png", mockText);

let store = new Store();

store.addToStore(p1);
store.addToStore(p2);
store.addToStore(p3);

// console.log(`Hela sortimentet:${store}`);
console.log("Hela sortimentet", store);
console.log("Produkt1", p1.name);
console.log("Produkt2", p2.name);
