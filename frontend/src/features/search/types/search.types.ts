export interface SearchProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
}

export interface SearchCategory {
  id: number;
  name: string;
  slug: string;
}

export interface SearchBrand {
  id: number;
  name: string;
  slug: string;
  logo?: string;
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

  products: SearchProduct[];
  categories: SearchCategory[];
  brands: SearchBrand[];

  recent: string[];
  trending: string[];

  isOpen: boolean;
  selectedIndex: number;
}