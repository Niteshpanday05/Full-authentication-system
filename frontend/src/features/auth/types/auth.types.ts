export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  access: string;
  refresh: string;
  user: User;
}