"use client";

import { useCallback, useState } from "react";

interface Options {
  itemCount: number;
  onEnter?: (index: number) => void;
  onEscape?: () => void;
}

export function useKeyboardNavigation({
  itemCount,
  onEnter,
  onEscape,
}: Options) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();

          setSelectedIndex((prev) =>
            prev >= itemCount - 1 ? 0 : prev + 1
          );

          break;

        case "ArrowUp":
          event.preventDefault();

          setSelectedIndex((prev) =>
            prev <= 0 ? itemCount - 1 : prev - 1
          );

          break;

        case "Enter":
          if (selectedIndex >= 0) {
            onEnter?.(selectedIndex);
          }

          break;

        case "Escape":
          onEscape?.();

          break;
      }
    },
    [itemCount, onEnter, onEscape, selectedIndex]
  );

  return {
    selectedIndex,
    setSelectedIndex,
    onKeyDown,
  };
}