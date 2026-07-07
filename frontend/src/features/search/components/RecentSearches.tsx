"use client";

import { History } from "lucide-react";

import SearchResultItem from "./SearchResultItem";

interface RecentSearchesProps {
  searches: string[];
  onSelect?: (value: string) => void;
}

export default function RecentSearches({
  searches,
  onSelect,
}: RecentSearchesProps) {
  if (!searches.length) return null;

  return (
    <section>
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Recent Searches
        </h3>
      </div>

      {searches.map((item) => (
        <SearchResultItem
          key={item}
          title={item}
          leftIcon={<History className="text-gray-500" size={20} />}
          onClick={() => onSelect?.(item)}
        />
      ))}
    </section>
  );
}