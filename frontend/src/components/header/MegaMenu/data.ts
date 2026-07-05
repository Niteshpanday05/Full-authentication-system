// src/components/header/MegaMenu/data.ts

import { MegaMenuCategory } from "./types";

export const megaMenuData: MegaMenuCategory[] = [
  {
    id: 1,
    title: "Men",
    items: [
      { id: 1, name: "T-Shirts", href: "/men/t-shirts" },
      { id: 2, name: "Jeans", href: "/men/jeans" },
      { id: 3, name: "Shoes", href: "/men/shoes" },
      { id: 4, name: "Accessories", href: "/men/accessories" },
    ],
  },
  {
    id: 2,
    title: "Women",
    items: [
      { id: 1, name: "Dresses", href: "/women/dresses" },
      { id: 2, name: "Handbags", href: "/women/handbags" },
      { id: 3, name: "Heels", href: "/women/heels" },
      { id: 4, name: "Jewelry", href: "/women/jewelry" },
    ],
  },
  {
    id: 3,
    title: "Electronics",
    items: [
      { id: 1, name: "Laptops", href: "/electronics/laptops" },
      { id: 2, name: "Phones", href: "/electronics/phones" },
      { id: 3, name: "Headphones", href: "/electronics/headphones" },
      { id: 4, name: "Smart Watches", href: "/electronics/smartwatches" },
    ],
  },
];