"use client";

import { X } from "lucide-react";

import SearchBar from "./SearchBar";

interface MobileSearchProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSearch({
  open,
  onClose,
}: MobileSearchProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-neutral-950 lg:hidden">
      <div className="flex items-center gap-3 border-b p-4 dark:border-neutral-800">
        <button
          onClick={onClose}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
        >
          <X size={22} />
        </button>

        <div className="flex-1">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}