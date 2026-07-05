import {
  SearchBrand,
  SearchCategory,
  SearchProduct,
} from "../types/search.types";

export function hasResults(
  products: SearchProduct[],
  categories: SearchCategory[],
  brands: SearchBrand[]
) {
  return (
    products.length > 0 ||
    categories.length > 0 ||
    brands.length > 0
  );
}

export function normalizeQuery(query: string) {
  return query.trim().toLowerCase();
}