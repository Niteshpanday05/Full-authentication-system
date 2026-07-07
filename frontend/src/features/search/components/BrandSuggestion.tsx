"use client";

import { BadgeCheck } from "lucide-react";

import SearchResultItem from "./SearchResultItem";

import type { SearchBrand } from "../types/search.types";

interface BrandSuggestionProps {
  brands: SearchBrand[];
  selectedIndex?: number;
  onSelect?: (brand: SearchBrand) => void;
}

export default function BrandSuggestion({
  brands,
  selectedIndex = -1,
  onSelect,
}: BrandSuggestionProps) {
  if (!brands.length) return null;

  return (
    <section>
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Brands
        </h3>
      </div>

      {brands.map((brand, index) => (
        <SearchResultItem
          key={brand.id}
          href={`/brand/${brand.slug}`}
          title={brand.name}
          subtitle={`${brand.product_count} Products`}
          image={brand.logo}
          leftIcon={<BadgeCheck className="text-indigo-600" size={20} />}
          active={selectedIndex === index}
          onClick={() => onSelect?.(brand)}
        />
      ))}
    </section>
  );
}