function discount(order) {
  if (order["mbp"]) {
    order["vga"].freeQuantity = Math.max(
      order["vga"].quantity,
      order["vga"].freeQuantity + order["mbp"].quantity
    );
  }
  return order;
}

export default discount;
