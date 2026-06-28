import axios from "axios";

import { API } from "@/constants/api";

import { tokenManager } from "./token-manager";
import { refreshAccessToken } from "./refresh-token";

export const api = axios.create({
  
  baseURL: API.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * Request Interceptor
 */

api.interceptors.request.use((config) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
console.log(API.BASE_URL);
  const token = tokenManager.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Response Interceptor
 */

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const accessToken =
          await refreshAccessToken();

        originalRequest.headers.Authorization =
          `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        tokenManager.clear();

        localStorage.removeItem("refresh");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);