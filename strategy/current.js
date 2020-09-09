import discountedPrice from "../rule/discountedPrice.js";
import discountedQuantity from "../rule/discountedQuantity.js";
import gift from "../rule/gift.js";
const pricingRules = [discountedPrice, discountedQuantity, gift];

export default pricingRules;
