"use client";

import { forwardRef } from "react";
import { Loader2, Search, X } from "lucide-react";
import clsx from "clsx";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;

  placeholder?: string;

  loading?: boolean;

  disabled?: boolean;

  autoFocus?: boolean;

  shortcut?: string;

  className?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value,
      onChange,
      onFocus,
      onKeyDown,
      placeholder = "Search products...",
      loading = false,
      disabled = false,
      autoFocus = false,
      shortcut = "Ctrl K",
      className,
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          "relative flex h-12 w-full items-center rounded-xl border border-gray-300 bg-white transition-all",
          "focus-within:border-blue-500",
          "focus-within:ring-2",
          "focus-within:ring-blue-500/20",
          "dark:border-neutral-700",
          "dark:bg-neutral-900",
          className
        )}
      >
        {/* Search Icon */}
        <Search
          className="ml-4 h-5 w-5 shrink-0 text-gray-400"
          aria-hidden="true"
        />

        {/* Input */}
        <input
          ref={ref}
          type="text"
          value={value}
          disabled={disabled}
          autoFocus={autoFocus}
          autoComplete="off"
          spellCheck={false}
          placeholder={placeholder}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onChange={(e) => onChange(e.target.value)}
          className="h-full flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-gray-400 dark:text-white"
          aria-label="Search"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded="false"
        />

        {/* Loading */}
        {loading && (
          <Loader2 className="mr-3 h-4 w-4 animate-spin text-gray-400" />
        )}

        {/* Clear */}
        {!loading && value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="mr-2 rounded-md p-1 transition hover:bg-gray-100 dark:hover:bg-neutral-800"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}

        {/* Shortcut */}
        {!value && !loading && (
          <kbd
            className="mr-3 hidden rounded-md border bg-gray-50 px-2 py-1 text-xs text-gray-500 lg:flex dark:border-neutral-700 dark:bg-neutral-800"
          >
            {shortcut}
          </kbd>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
