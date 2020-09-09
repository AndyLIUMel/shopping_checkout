import Checkout from "./index.js";
import pricingRules from "../strategy/current.js";
const items = [
  { sku: "ipd", price: 549.99 },
  { sku: "mbp", price: 1399.99 },
  { sku: "atv", price: 109.5 },
  { sku: "vga", price: 30.0 },
];

test('"atv", "atv", "atv", "vga" without discount', () => {
  const co = new Checkout([]);

  co.scan(items[2]);
  co.scan(items[2]);
  co.scan(items[2]);
  co.scan(items[3]);

  let total = co.total();

  expect(total).toBe(358.5);
});

test('"atv", "atv", "atv", "vga" with discount', () => {
  const co = new Checkout(pricingRules);

  co.scan(items[2]);
  co.scan(items[2]);
  co.scan(items[2]);
  co.scan(items[3]);

  let total = co.total();

  expect(total).toBe(249);
});

test('"atv", "ipd", "ipd", "atv", "ipd", "ipd", "ipd" with discount', () => {
  const co = new Checkout(pricingRules);

  co.scan(items[2]);
  co.scan(items[0]);
  co.scan(items[0]);
  co.scan(items[2]);
  co.scan(items[0]);
  co.scan(items[0]);
  co.scan(items[0]);

  let total = co.total();

  expect(total).toBe(2718.95);
});

test('"mbp", "vga", "ipd" with discount', () => {
  const co = new Checkout(pricingRules);

  co.scan(items[1]);
  co.scan(items[3]);
  co.scan(items[0]);

  let total = co.total();

  expect(total).toBe(1949.98);
});
