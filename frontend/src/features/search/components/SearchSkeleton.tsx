"use client";

export default function SearchSkeleton() {
  return (
    <div className="space-y-3 p-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse items-center gap-3"
        >
          <div className="h-12 w-12 rounded-lg bg-gray-200 dark:bg-neutral-700" />

          <div className="flex-1 space-y-2">
            <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-neutral-700" />
            <div className="h-3 w-1/3 rounded bg-gray-200 dark:bg-neutral-700" />
          </div>
        </div>
      ))}
    </div>
  );
}