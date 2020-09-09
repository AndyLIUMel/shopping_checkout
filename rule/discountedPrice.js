function discount(order) {
  if (order["ipd"] && order["ipd"].quantity > 4) {
    order["ipd"].discountedPrice = 499.99;
    order["ipd"].discountedQuantity = order["ipd"].quantity;
  }
  return order;
}

export default discount;
