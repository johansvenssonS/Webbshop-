class Basket {
  constructor() {
    this.cart = [];
  }

  addToBasket = (item) => {
    this.cart.push(item);
  };

  basketLength = () => {
    return this.cart.length();
  };

  getBasket = () => {
    return this.cart;
  };

  getTotPrice = () => {
    let tot = 0;
    for (let p in this.basket) {
      tot += p.price;
    }
    return tot;
  };

  removeItem = (item) => {};
}
