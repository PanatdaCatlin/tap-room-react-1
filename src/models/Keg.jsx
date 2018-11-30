import { v4 } from 'uuid';
import React from 'react';

class Keg {
  constructor(name, brand, price, alcoholContent) {
    this.id = v4();
    this.pints = 124;
    this.priceText = Keg.findPriceText(price);
    this.discount = 1;
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.alcoholContent = alcoholContent;
  }

  static findPriceText(price) {
    if (price <= 6) {
      return (<span className="badge badge-info">$</span>);
    }
    else if (price <= 9) {
      return (<span className="badge badge-warning">$$</span>);
    }
    else {
      return (<span className="badge badge-danger">$$$</span>);
    }
  }
}

export default Keg;