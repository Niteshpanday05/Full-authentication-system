"use client";

import { SearchX } from "lucide-react";

interface EmptyStateProps {
  query?: string;
}

export default function EmptyState({
  query,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <SearchX
        size={48}
        className="mb-4 text-gray-400"
      />

      <h3 className="text-lg font-semibold">
        No results found
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {query
          ? `No results found for "${query}".`
          : "Start typing to search."}
      </p>
    </div>
  );
}