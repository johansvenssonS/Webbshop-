/* class Basket {
  constructor() {
    this.cart = [];
  }

  addToBasket = () => {};

  getTotPrice = () => {
    let tot = 0;
    for (let p in this.basket) {
      tot += p.price;
    }
  };
}
 */

/* class shoppingBasket {
    constructor() {
        this.cart = [];
    }

    init() {
        this.renderCart;
    }

    addToBasket = product => {
        const basketItem = this.basket.find(item => item.name === product.name);
        this.cart.push(item);
    };

    renderCart() {
        this.cartElement.innerHTML = `
    <h2 class="basket-title">Cart</h2>
    <ul class="basket-list">
        ${this.cart
            .map(
                item => `
            <li class="cart-item">
                <h3>${item.name}</h3>
                <div class="cart-item-info">
                    <p><span>${this.formatPrice(item.price)}</span> </span><p>
                    <button class="cart-btn-remove" data-product-id="${
                        item.id
                    }">x</button>
                </div>
            </li>
        `
            )
            .join("")}
    </ul>
    <div class="cart-total">
        <h3>Total: ${this.formatPrice(this.getTotal())}</h3>
        <button class="basket-close">Stäng</button>
    </div>
    `;
    }
} */

class Basket {
    constructor() {
        this.items = [];
    }

    add(product) {
        this.items.push(product);
    }

    remove(index) {
        this.items.splice(index, 1);
    }

    getItems() {
        return this.items;
    }

    count() {
        return this.items.length;
    }

    total() {
        return this.items.reduce((sum, p) => sum + p.price, 0);
    }
}

export { Basket };
