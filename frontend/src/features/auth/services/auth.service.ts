import { AuthAPI } from "../api/auth.api";
import type { RegisterRequest } from "../types/auth.types";

export class AuthService {
  static async login(data: {
    email: string;
    password: string;
  }) {
    const response = await AuthAPI.login(data);
    

    return response.data;
  }

  static async register(
    data: RegisterRequest
){
    const response =
        await AuthAPI.register(data);

    return response.data;
}

// email verification setup

static async verifyEmail(token: string) {
  const response =
    await AuthAPI.verifyEmail(token);

  return response.data;
}

static async resendVerification(email: string) {
  const response =
    await AuthAPI.resendVerification(email);

  return response.data;
}
}
