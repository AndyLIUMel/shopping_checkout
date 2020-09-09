import pricingRules from "./strategy/current.js";
import Checkout from "./checkout/index.js";
import { getItemBySku } from "./item/index.js";

function main() {
  //   const itemsSKU = ["atv", "atv", "atv", "vga"];
  const itemsSKU = ["atv", "ipd", "ipd", "atv", "ipd", "ipd", "ipd"];
  //   const itemsSKU = ["mbp", "vga", "ipd"];
  const co = new Checkout(pricingRules);

  for (const sku of itemsSKU) {
    co.scan(getItemBySku(sku));
  }

  let total = co.total();

  console.log(`$${parseFloat(total).toFixed(2)}`);
}

main();
