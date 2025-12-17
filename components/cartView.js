import { getCart } from "../app.js";

export const basketHandler = (cart) => {
  const checkoutbtn = document.querySelector(".checkout");

  const createPopup = () => {
    let cartContent = cart.cart;
    let popUp = document.createElement("div");
    console.log(cart);
    popUp.classList.add("modal");
    popUp.innerHTML = `
      <div class="modal-content">
        <button class="close" aria-label="Stäng">&times;</button>
        <h2 class="korg-title">Varukorg</h2>
        <ul class="korg-list">
          ${cartContent
            .map(
              (product) => `
              <li class="korg-item">
                <img src="${product.image}" class="modal-image" />
                <h3>${product.name}</h3>
                <div class="product-info">
                  <p><span>${product.price}</span> x <span>antal</span></p>
                </div>
              </li>
              `
            )
            .join("")}
        </ul>
        <h3> Totalt Pris:${cart.getTotPrice()}kr </h3>
      </div>
    `;

    // let nrOfitems = document.createElement("div");
    // nrOfitems.classList.add("cart-badge");
    // nrOfitems.innerHTML = `<span>${cart.getLength()}</span>`;
    // checkoutbtn.appendChild(nrOfitems);

    document.body.appendChild(popUp);
    popUp.style.display = "block";
    let x = popUp.querySelector(".close");
    x.addEventListener("click", (event) => {
      popUp.remove();
    });
  };

  if (checkoutbtn) {
    checkoutbtn.addEventListener("click", () => {
      createPopup();
    });
  }

};
export const updateCartBadge = (cart) => {
    let badge = document.querySelector(".cart-badge");
    if (badge) {
      badge.textContent = cart.getLength();
    }
  }


// `
//     <div class="modal-content">
//     <span class="close">&times;</span>
//     <img src="${p.image}" class="modal-image" />
//       <div class="modal-text">
//         <a class="modal-name">${p.name}</a>
//         <div class="modal-price">Pris:${p.price}</div>
//         <p>${p.description}</p>
//         <button class="btnCart">Lägg till</button>
//       </div>
//       </div>
//     `;
