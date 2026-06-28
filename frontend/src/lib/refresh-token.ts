import axios from "axios";

import { API } from "@/constants/api";
import { tokenManager } from "./token-manager";

interface RefreshResponse {
  access: string;
  refresh?: string;
}

export async function refreshAccessToken(): Promise<string> {
  /**
   * NOTE:
   * In the current backend the refresh token is returned
   * in the login response.
   *
   * Later we'll move it to an HttpOnly Cookie.
   */

  const refreshToken = localStorage.getItem("refresh");

  if (!refreshToken) {
    throw new Error("Refresh token not found.");
  }

  const response = await axios.post<RefreshResponse>(
    `${API.BASE_URL}${API.AUTH.REFRESH}`,
    {
      refresh: refreshToken,
    },
    {
      withCredentials: true,
    }
  );

  const { access, refresh } = response.data;

  tokenManager.setToken(access);

  if (refresh) {
    localStorage.setItem("refresh", refresh);
  }

  return access;
}