class Product {
  constructor(name, price, image, description) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
  }
  getName = () => {
    return this.name;
  };
  getPrice = () => {
    return this.price;
  };
  getImage = () => {
    return this.image;
  };
  getDescription = () => {
    return this.description;
  };
}

export { Product };
