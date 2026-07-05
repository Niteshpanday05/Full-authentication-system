"use client";

import { useCallback, useEffect, useState } from "react";
import { storage } from "../utils/storage";

export function useRecentSearch() {
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(storage.getRecent());
  }, []);

  const addRecent = useCallback((query: string) => {
    if (!query.trim()) return;

    storage.saveRecent(query);

    setRecent(storage.getRecent());
  }, []);

  const clearRecent = useCallback(() => {
    storage.clearRecent();

    setRecent([]);
  }, []);

  return {
    recent,
    addRecent,
    clearRecent,
  };
}