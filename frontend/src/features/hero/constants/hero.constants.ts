import { HeroData } from "../types/hero.types";

export const HERO_DATA: HeroData = {
  badge: "🔥 New Summer Collection 2026",

  title: "Discover Premium Fashion For Every Occasion",

  subtitle:
    "Explore thousands of premium products with fast delivery and secure payment.",

  image: "/images/hero/hero-banner.png",

  buttons: [
    {
      label: "Shop Now",
      href: "/products",
      variant: "primary",
    },
    {
      label: "Explore",
      href: "/categories",
      variant: "secondary",
    },
  ],

  stats: [
    {
      id: 1,
      value: "20K+",
      label: "Customers",
    },
    {
      id: 2,
      value: "10K+",
      label: "Products",
    },
    {
      id: 3,
      value: "99%",
      label: "Reviews",
    },
  ],

  floatingCard: {
    title: "Premium Sneakers",
    price: "$199",
    image: "/images/products/shoe.png",
  },
};