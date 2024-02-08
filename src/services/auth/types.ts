import { AxiosError } from 'axios';
import { User } from 'hooks/useUser/interface';

export interface ILoginParams {
  email: string;
  password: string;
}

export interface _ILoginResponse {
  distributor: boolean;
  id: string;
  initial_password_set_at: string;
  token: string;
  permissions: string[];
}

export interface ILoginResponse {
  data: _ILoginResponse;
}

export interface IForgotPasswordParams {
  email: string;
}

export interface ICheckTokenParams {
  token: string;
  email: string;
}

export interface ICheckTokenResponse {
  expired: boolean;
}
export interface IHandlePasswordParams {
  token: string | undefined;
  email: string;
  password: string;
  password_confirmation: string;
  agree_to_terms?: boolean;
}

export interface IMutationParams {
  onSuccess?: (data: unknown) => void;
  onError?: (err: AxiosError) => void;
}

export interface ICreatePasswordResponse {
  data: User;
}
export interface LoginError {
  message: string;
  // may need to create type of errors
  errors: {
    email: string;
    password: string;
    attempts_left: number;
  };
}
