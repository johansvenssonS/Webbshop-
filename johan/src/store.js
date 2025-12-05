class Store {
  constructor() {
    this.store = [];
  }

  addToStore = (product) => {
    this.store.push(product);
  };

  getStore = () => {
    return this.store;
  };
}

export { Store };
