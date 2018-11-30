import { v4 } from 'uuid';

class Keg {
  constructor(name, brand, price, alcoholContent) {
    this.id = v4();
    this.pints = 124;
    this.priceText = '';
    this.discount = 1;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.alcoholContent = alcoholContent;
  }
}

export default Keg;