function discount(order) {
  if (order["atv"] && order["atv"].quantity >= 3) {
    order["atv"].discountedQuantity =
      order["atv"].quantity - (order["atv"].quantity % 3);
    order["atv"].freeQuantity = order["atv"].discountedQuantity / 3;
  }
  return order;
}

export default discount;
