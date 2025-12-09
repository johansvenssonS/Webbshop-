///Skapa ProduktVyn alltså manipulera productGrid
/// Byggs av listan av produkter inte Store klassen
export const createProductView = (store) => {
  ///Om productGrid finns så töm den
  /// När sidan startar så laddas allt in,
  // så den finns vid klick på kategori
  if (document.querySelector(".productGrid")) {
    let productGrid = document.querySelector(".productGrid");
    productGrid.innerHTML = "";
  } else {
    /// Annars skapa den och lägg in den under main
    let productGrid = document.createElement("div");
    productGrid.classList.add("productGrid");
    const main = document.querySelector("main");
    main.appendChild(productGrid);
  }
  ///Skapa korten
  let productGrid = document.querySelector(".productGrid");
  for (let p of store) {
    let div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
    <img src="${p.image}"/>
      <div class="product-text">
        <h4 class="product-name">${p.name}</h4>
        <div class="product-price">Pris:${p.price}</div>
        <p>${p.description}</p>
          
    `;
    productGrid.appendChild(div);
  }
};

///replacechild ? istället för att tömma ?
/// createDocumentFragment annan container "off dom"

/// Event för kategori eventsen
export const filterEvents = (store) => {
  let buttons = document.querySelectorAll(".menuButton");

  for (let btn of buttons) {
    btn.addEventListener("click", (event) => {
      /// Skicka vad knappen innehåller till filtrering
      let filtredStore = store.filterProducts(btn.textContent);
      /// Kasta upp det filtrerade upp till createProductView
      let filtredView = createProductView(filtredStore);
      console.log(filtredStore);
    });
  }
};
