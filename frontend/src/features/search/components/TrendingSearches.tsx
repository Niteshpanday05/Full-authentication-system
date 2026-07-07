"use client";

import { Flame } from "lucide-react";

import SearchResultItem from "./SearchResultItem";

interface TrendingSearchesProps {
  searches: string[];
  onSelect?: (value: string) => void;
}

export default function TrendingSearches({
  searches,
  onSelect,
}: TrendingSearchesProps) {
  if (!searches.length) return null;

  return (
    <section>
      <div className="px-4 pt-4 pb-2">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Trending
        </h3>
      </div>

      {searches.map((item) => (
        <SearchResultItem
          key={item}
          title={item}
          leftIcon={<Flame className="text-orange-500" size={20} />}
          onClick={() => onSelect?.(item)}
        />
      ))}
    </section>
  );
}