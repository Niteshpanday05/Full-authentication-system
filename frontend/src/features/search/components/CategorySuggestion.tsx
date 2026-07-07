"use client";

import { FolderOpen } from "lucide-react";

import SearchResultItem from "./SearchResultItem";
import type { SearchCategory } from "../types/search.types";

interface CategorySuggestionProps {
  categories: SearchCategory[];
  selectedIndex?: number;
  onSelect?: (category: SearchCategory) => void;
}

export default function CategorySuggestion({
  categories,
  selectedIndex = -1,
  onSelect,
}: CategorySuggestionProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-gray-100 py-2 dark:border-neutral-800">
      {/* Section Header */}
      <div className="px-4 pb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Categories
        </h3>
      </div>

      {/* Category List */}
      <div>
        {categories.map((category, index) => (
          <SearchResultItem
            key={category.id}
            href={`/category/${category.slug}`}
            title={category.name}
            subtitle={`${category.product_count} Products`}
            leftIcon={
              <FolderOpen
                size={22}
                className="text-blue-600 dark:text-blue-400"
              />
            }
            active={selectedIndex === index}
            onClick={() => onSelect?.(category)}
          />
        ))}
      </div>
    </section>
  );
}