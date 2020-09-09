import pricingRules from "./strategy/current.js";
import Checkout from "./checkout/index.js";
import { getItemBySku } from "./item/index.js";

function main() {
  const itemsSKU = ["atv", "atv", "atv", "vga"];
  const co = new Checkout(pricingRules);

  for (const sku of itemsSKU) {
    co.scan(getItemBySku(sku));
  }

  console.log(co.total());
}

main();
