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
}
