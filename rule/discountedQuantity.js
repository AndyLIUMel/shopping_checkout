function discount(config) {
  return (order) => {
    if (order[config.sku] && order[config.sku].quantity >= config.x) {
      order[config.sku].discountedQuantity =
        order[config.sku].quantity - (order[config.sku].quantity % config.x);
      order[config.sku].freeQuantity =
        (order[config.sku].discountedQuantity / config.x) *
        (config.x - config.y);
    }
    return order;
  };
}

export default discount;
