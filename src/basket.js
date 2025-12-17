class Basket {
    constructor() {
        this.cart = [];
    }

    addToBasket = product => {
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
}

// saveBasket = () => {
//   localStorage.setItem("cart", JSON.stringify(this.cart));
// }

export { Basket };
