import moaProductImage from "../assets/images/products/moa.jpg";
import renewProductImage from "../assets/images/products/renew-kiwi-berry.png";
import dropsProductImage from "../assets/images/products/drops.jpg";

/** Shared Partner.Co storefront (Elevate 180 Fitness). */
export const partnerStoreUrl = "https://partner.co/elevate180fitness";

/** Direct Partner.Co link for Nutrifii Moa™. */
export const partnerMoaUrl = "https://partner.co/s/MWI5YWIxNjkw";

/** Direct Partner.Co link for Slenderiix™ & Xceler8™. */
export const partnerDropsUrl = "https://partner.co/s/OTIwODFkMjc3";

/** Direct Partner.Co link for Nutrifii Renew™ (Kiwi Berry). */
export const partnerRenewUrl = "https://partner.co/s/ODk4Y2JmNDlm";

/**
 * Partner.Co product cards — each product uses its share link; storefront for general use.
 * Full product detail lives on Partner.Co.
 */
export const partnerProductLinks = [
  {
    id: "nutrifii-moa",
    title: "Nutrifii Moa™",
    partnerUrl: partnerMoaUrl,
    imageSrc: moaProductImage,
    imageAlt: "Nutrifii Moa superfood supplement pouch",
    blurb:
      "Liquid superfood blend in the Nutrifii line. Full ingredients, pricing, and purchase options live on Partner.Co.",
  },
  {
    id: "nutrifii-renew-kiwi-berry",
    title: "Nutrifii Renew™ — Kiwi Berry",
    partnerUrl: partnerRenewUrl,
    imageSrc: renewProductImage,
    imageAlt: "Nutrifii Renew Kiwi Berry single-serve stick pack",
    blurb:
      "Single-serve drink mix in the Nutrifii line. Flavor, nutrition facts, and checkout are on Partner.Co.",
  },
  {
    id: "slenderiix-xceler8",
    title: "Slenderiix™ & Xceler8™",
    partnerUrl: partnerDropsUrl,
    imageSrc: dropsProductImage,
    imageAlt: "Slenderiix and Xceler8 dropper bottles",
    blurb:
      "Companion drops in the Partner.Co shop. See Partner.Co for how the products are used together and current availability.",
  },
];
