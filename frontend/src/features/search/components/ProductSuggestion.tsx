"use client";

import SearchResultItem from "./SearchResultItem";
import type { SearchProduct } from "../types/search.types";

interface ProductSuggestionProps {
  products: SearchProduct[];

  selectedIndex?: number;

  onSelect?: (product: SearchProduct) => void;
}

export default function ProductSuggestion({
  products,
  selectedIndex = -1,
  onSelect,
}: ProductSuggestionProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section>
      {/* Section Title */}

      <div className="px-4 pt-4 pb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Products
        </h3>
      </div>

      {/* Product List */}

      <div>
        {products.map((product, index) => (
          <SearchResultItem
            key={product.id}
            href={`/products/${product.slug}`}
            title={product.name}
            subtitle={`${product.brand} • ${product.category}`}
            image={product.image}
            active={selectedIndex === index}
            rightContent={
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  ${product.sale_price ?? product.price}
                </p>

                {!product.in_stock && (
                  <p className="text-xs text-red-500">
                    Out of stock
                  </p>
                )}
              </div>
            }
            onClick={() => onSelect?.(product)}
          />
        ))}
      </div>
    </section>
  );
}