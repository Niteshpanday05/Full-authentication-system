import { api } from "@/lib/axios";
import { AUTH_ENDPOINTS } from "./endpoints";

import {
  LoginRequest,
  RegisterRequest,
   RegisterResponse,
} from "../types/auth.types";

export const AuthAPI = {
 register(data: RegisterRequest) {
    return api.post<RegisterResponse>(
        AUTH_ENDPOINTS.REGISTER,
        data
    );
},

  login(data: LoginRequest) {
  console.log("Base URL:", api.defaults.baseURL);
  console.log("Endpoint:", AUTH_ENDPOINTS.LOGIN);
  console.log("Final URL:", api.getUri({ url: AUTH_ENDPOINTS.LOGIN }));

  return api.post(AUTH_ENDPOINTS.LOGIN, data);
},

  logout(refresh: string) {
    return api.post(AUTH_ENDPOINTS.LOGOUT, {
      refresh,
    });
  },

  refresh(refresh: string) {
    return api.post(AUTH_ENDPOINTS.REFRESH, {
      refresh,
    });
  },

  profile() {
    return api.get(AUTH_ENDPOINTS.PROFILE);
  },
};