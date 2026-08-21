
  import { UserModel } from './user.model';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  data: UserModel;
}

export interface RegisterResponse {
  success: boolean;
  data: {
    id: string;
    name: string;
    email: string;
  };
}

