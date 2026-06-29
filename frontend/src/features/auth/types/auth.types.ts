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

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface RegisterResponse {
  message: string;
}