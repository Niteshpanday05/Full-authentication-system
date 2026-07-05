import { SEARCH } from "../constants";

export const storage = {
  getRecent(): string[] {
    if (typeof window === "undefined") return [];

    try {
      const data = localStorage.getItem(SEARCH.STORAGE_KEY);

      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveRecent(search: string) {
    if (typeof window === "undefined") return;

    let items = this.getRecent();

    items = items.filter(
      item => item.toLowerCase() !== search.toLowerCase()
    );

    items.unshift(search);

    items = items.slice(0, SEARCH.MAX_RECENT_SEARCHES);

    localStorage.setItem(
      SEARCH.STORAGE_KEY,
      JSON.stringify(items)
    );
  },

  clearRecent() {
    if (typeof window === "undefined") return;

    localStorage.removeItem(SEARCH.STORAGE_KEY);
  },
};