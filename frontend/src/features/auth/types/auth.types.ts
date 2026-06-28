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

export interface RegisterRequest {

  email: string;

  first_name: string;

  last_name: string;

  password: string;

  confirm_password: string;

}

export interface AuthState {

  user: User | null;

  loading: boolean;

  isAuthenticated: boolean;

}