function discount(config) {
  return (order) => {
    if (order[config.sku]) {
      order[config.freeSKU].freeQuantity = Math.max(
        order[config.freeSKU].quantity,
        order[config.freeSKU].freeQuantity +
          order[config.sku].quantity * config.freeQuantityPerSku
      );
    }
    return order;
  };
}

export default discount;
