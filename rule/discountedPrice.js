function discount(config) {
  return (order) => {
    if (order[config.sku] && order[config.sku].quantity > config.quantity) {
      order[config.sku].discountedPrice = config.price;
      order[config.sku].discountedQuantity = order[config.sku].quantity;
    }
    return order;
  };
}

export default discount;
