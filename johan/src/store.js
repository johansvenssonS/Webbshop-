import { Product } from "./product.js";

class Store {
  constructor() {
    this.store = [];
  }

  getProducts = async () => {
    const response = await fetch("./static/product.json");
    const data = await response.json();
    return data;
  }

  createProducts = (data) =>{
    data.forEach((item) => {
      let p = new Product(
        item.name,
        item.price,
        item.image,
        item.description,
        item.category
      );
      this.addToStore(p);
    });
  }
  addToStore = (product) => {
    this.store.push(product);
  };

  getStore = () => {
    return this.store;
  };
}

export { Store };
