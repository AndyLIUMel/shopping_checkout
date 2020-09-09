import discountedPrice from "../rule/discountedPrice.js";
import discountedQuantity from "../rule/discountedQuantity.js";
import gift from "../rule/gift.js";
import {
  mbpGiftVgaConfig,
  IpdDiscountedPriceConfig,
  AtvDiscountedQuantutyConfig,
} from "../ruleConfig/index.js";

const pricingRules = [
  discountedPrice(IpdDiscountedPriceConfig),
  discountedQuantity(AtvDiscountedQuantutyConfig),
  gift(mbpGiftVgaConfig),
];

export default pricingRules;
