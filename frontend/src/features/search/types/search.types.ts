/* ===========================================
   Search Feature Types
=========================================== */

export interface SearchProduct {
  id: number;
  name: string;
  slug: string;

  image: string;

  price: number;

  sale_price?: number;

  rating: number;

  review_count: number;

  brand: string;

  category: string;

  in_stock: boolean;
}

export interface SearchCategory {
  id: number;

  name: string;

  slug: string;

  product_count: number;
}

export interface SearchBrand {
  id: number;

  name: string;

  slug: string;

  logo?: string;

  product_count: number;
}

export interface SearchResponse {
  products: SearchProduct[];

  categories: SearchCategory[];

  brands: SearchBrand[];

  trending: string[];
}

export interface SearchState {
  query: string;

  loading: boolean;

  error: string | null;

  isOpen: boolean;

  selectedIndex: number;

  products: SearchProduct[];

  categories: SearchCategory[];

  brands: SearchBrand[];

  recent: string[];

  trending: string[];
}