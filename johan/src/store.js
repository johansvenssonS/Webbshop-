class Store {
  constructor() {
    this.store = [];
  }

  getProducts = async () => {
    const response = await fetch("./static/product.json");
    const data = await response.json();
    return data;
  }

  addToStore = (product) => {
    this.store.push(product);
  };

  getStore = () => {
    return this.store;
  };
}

export { Store };
