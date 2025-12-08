class Product {
  constructor(name, price, image, description) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.description = description;
    this.quantity = 0;
    this.category 
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



class kundkorg {
  constructor(){
    this.varukorg = []
  }

  addToKorg = (item) => {
    this.varukorg.push(item)
  }
}

   
export { Product };

