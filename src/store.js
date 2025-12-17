import { Product } from "./product.js";

class Store {
  constructor() {
    this.store = [];
  }

  getProducts = async () => {
    const response = await fetch("./static/product.json");
    const data = await response.json();
    return data;
  };

  createProducts = (data) => {
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
  };
  addToStore = (product) => {
    this.store.push(product);
  };

  getStore = () => {
    return this.store;
  };

  ///filtrera
  filterProducts = (filter) => {
    // console.log(this.store);
    //hämta objektet
    if(filter === "Alla"){
      return this.store;
    }
    let products = this.store;
    /// bygg en array med produkter product.category som är lika med filter
    const resultArr = products.filter((product) => product.category === filter);
    return resultArr;
  };
}

export { Store };
