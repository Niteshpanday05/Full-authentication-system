"use client";

import RecentSearches from "./RecentSearches";
import TrendingSearches from "./TrendingSearches";
import ProductSuggestion from "./ProductSuggestion";
import CategorySuggestion from "./CategorySuggestion";
import BrandSuggestion from "./BrandSuggestion";
import EmptyState from "./EmptyState";

interface SearchDropdownProps {
  open: boolean;
  query: string;
}

export default function SearchDropdown({
  open,
  query,
}: SearchDropdownProps) {
  if (!open) return null;

  const hasQuery = query.trim().length > 0;

  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        z-50
        mt-2
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-xl
        dark:border-neutral-700
        dark:bg-neutral-900
      "
    >
      <div className="max-h-[420px] overflow-y-auto">
        {!hasQuery ? (
          <>
            <RecentSearches />
            <TrendingSearches />
          </>
        ) : (
          <>
            <ProductSuggestion />
            <CategorySuggestion />
            <BrandSuggestion />
          </>
        )}

        {/* Replace later with API response */}
        {false && <EmptyState />}
      </div>

      <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500 dark:border-neutral-700">
        ↑ ↓ Navigate • Enter Select • Esc Close
      </div>
    </div>
  );
}