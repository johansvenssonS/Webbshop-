class SingleProductView {
  constructor(product, varukorg) {
    this.product = product;
    this.varukorg = varukorg
  }

  renderView = (p) => {
    //töm main
    console.log("hej");
    let main = document.querySelector("main");
    main.innerHTML = "";

    let c = document.createElement("div");

    c.innerHTML = `
    <div class="single-product">
    <img src="${p.image}" class="single-product-image" />
      <div class="single-product-text">
        <a class="single-name">${p.name}</a>
        <div class="singleP-price">Pris:${p.price}</div>
        <p>${p.description}</p>
      </div>
    `;

    main.appendChild(c);
  };
}

export { SingleProductView };
