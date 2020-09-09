class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.order = {};
    this.defaultItemCheckout = {
      quantity: 1,
      freeQuantity: 0,
      discountedQuantity: 0,
    };
  }

  scan = (item) => {
    this.addItemToOrder(item);
  };

  total = () => {
    this.applyDiscount(this.pricingRules);
    const total = this.getTotal(this.order);
    return total;
  };

  applyDiscount = (pricingRules) => {
    for (const rule of pricingRules) {
      this.order = rule(this.order);
    }
  };

  getTotal = (order) => {
    let total = 0;
    for (const key in order) {
      total += order[key].discountedQuantity * order[key].discountedPrice;
      total +=
        (order[key].quantity -
          order[key].discountedQuantity -
          order[key].freeQuantity) *
        order[key].price;
    }
    return total;
  };

  addItemToOrder = (item) => {
    if (this.order[item.sku]) {
      this.order[item.sku].quantity += 1;
    } else {
      this.order[item.sku] = {
        ...this.defaultItemCheckout,
        price: item.price,
        discountedPrice: item.price,
      };
    }
  };
}

export default Checkout;
