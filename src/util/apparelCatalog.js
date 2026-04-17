import charcoalBrownHoodieImage from "../assets/images/apparel/charcoal-brown.png";

/**
 * Apparel shown on /apparel — checkout happens on the main 180 Fitness store.
 * Add images: import from ../assets/images/apparel/ and set imageSrc on each row.
 */
export const fitnessStoreUrl = "https://180fitness.com/180-fitness-store";

export const apparelCatalog = [
  {
    id: "hat",
    title: "180 Fitness Hat",
    price: 20,
    blurb: "Classic cap with 180 Fitness branding.",
    imageSrc: null,
  },
  {
    id: "hoodie-charcoal",
    title: "Charcoal Brown Hoodie",
    price: 40,
    blurb: "Warm heathered hoodie with 180 Fitness chest print.",
    imageSrc: charcoalBrownHoodieImage,
  },
  {
    id: "hoodie-lilac",
    title: "Lilac Hoodie",
    price: 40,
    blurb: "Soft hoodie in lilac.",
    imageSrc: null,
  },
  {
    id: "strong-mama",
    title: "Strong Mama Boot Camp",
    price: 275,
    blurb: "Program offering — see store for dates and details.",
    imageSrc: null,
  },
  {
    id: "longsleeve-white",
    title: "White Long Sleeve Graphic",
    price: 30,
    blurb: "Long sleeve tee with graphic print.",
    imageSrc: null,
  },
];
