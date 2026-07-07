import axios from "@/lib/axios";

import { SEARCH_ENDPOINTS } from "./endpoints";

import type { SearchResponse } from "../types/search.types";

export interface SearchParams {
  query: string;
  limit?: number;
}

export const searchApi = {
  async search({
    query,
    limit = 10,
  }: SearchParams): Promise<SearchResponse> {
    const { data } = await axios.get<SearchResponse>(
      SEARCH_ENDPOINTS.SEARCH,
      {
        params: {
          q: query,
          limit,
        },
      }
    );

    return data;
  },
};