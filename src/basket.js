class Basket {
  constructor() {
    this.cart = [];
  }

  addToBasket = (product) => {
    this.cart.push(product);
  };

  getTotPrice = () => {
    let tot = 0;
    for (let p of this.cart) {
      tot += p.price;
    }
    return tot;
  };

  getLength = () => {
    return this.cart.length;
  };
  getBasket = () => {
    return this.cart;
  };
  removeItem = (item) => {
    for (let p of this.cart) {
      if (p.name === item) {
        let pIndex = this.cart.indexOf(p);
        this.cart.splice(pIndex, 1);
      }
    }
  };
}

// saveBasket = () => {
//   localStorage.setItem("cart", JSON.stringify(this.cart));
// }

export { Basket };
