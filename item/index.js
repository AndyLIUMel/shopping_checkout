const items = [
  { sku: "ipd", price: 549.99 },
  { sku: "mbp", price: 1399.99 },
  { sku: "atv", price: 109.5 },
  { sku: "vga", price: 30.0 },
];
let skuMapIndex = {};

function getItemBySku(sku) {
  const index = getSkuByIndex(sku);
  return items[index];
}

function getSkuByIndex(sku) {
  if (!Object.keys(skuMapIndex).length) {
    let sku = "";
    for (let i = 0; i < items.length; i++) {
      sku = items[i].sku;
      skuMapIndex[sku] = i;
    }
  }
  return skuMapIndex[sku];
}

export { getItemBySku };
