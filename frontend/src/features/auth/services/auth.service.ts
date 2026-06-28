import { AuthAPI } from "../api/auth.api";

export class AuthService {
  static async login(data: {
    email: string;
    password: string;
  }) {
    const response = await AuthAPI.login(data);

    return response.data;
  }
}