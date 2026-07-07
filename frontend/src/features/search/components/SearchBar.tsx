"use client";

import { useCallback, useRef, useState } from "react";

import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";

import { SEARCH } from "../constants";

import {
  useClickOutside,
  useDebounce,
  useKeyboardNavigation,
  useRecentSearch,
} from "../hooks";

export default function SearchBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const debouncedQuery = useDebounce(
    query,
    SEARCH.DEBOUNCE_DELAY
  );

  const {
    recent,
    addRecent,
    clearRecent,
  } = useRecentSearch();

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  const {
    selectedIndex,
    setSelectedIndex,
    onKeyDown,
  } = useKeyboardNavigation({
    itemCount: 0, // Will come from API results later
    onEscape: () => setIsOpen(false),
  });

  const handleChange = useCallback((value: string) => {
    setQuery(value);

    if (!isOpen) {
      setIsOpen(true);
    }
  }, [isOpen]);

  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSearchSelect = useCallback(
    (value: string) => {
      setQuery(value);

      addRecent(value);

      setIsOpen(false);

      inputRef.current?.blur();

      /**
       * Later
       * router.push(`/search?q=${encodeURIComponent(value)}`)
       */
    },
    [addRecent]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl"
    >
      <SearchInput
        ref={inputRef}
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onKeyDown={onKeyDown}
        placeholder={SEARCH.PLACEHOLDER}
        shortcut={SEARCH.SHORTCUT}
        loading={false}
      />

      <SearchDropdown
        open={isOpen}
        query={debouncedQuery}
        recentSearches={recent}
        trendingSearches={[
          "iPhone",
          "Nike Shoes",
          "MacBook",
          "Samsung",
        ]}
        products={[]}
        categories={[]}
        brands={[]}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        onSearchSelect={handleSearchSelect}
        onClearRecent={clearRecent}
        loading={false}
        error={null}
      />
    </div>
  );
}