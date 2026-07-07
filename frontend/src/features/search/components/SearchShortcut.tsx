"use client";

interface SearchShortcutProps {
  shortcut?: string;
}

export default function SearchShortcut({
  shortcut = "Ctrl + K",
}: SearchShortcutProps) {
  return (
    <kbd className="hidden rounded-md border bg-gray-100 px-2 py-1 text-xs text-gray-500 lg:inline-flex dark:border-neutral-700 dark:bg-neutral-800">
      {shortcut}
    </kbd>
  );
}