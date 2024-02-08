import axiosInstance from 'config/axios';
import {
  IForgotPasswordParams,
  ILoginParams,
  ILoginResponse,
  IHandlePasswordParams,
  ICreatePasswordResponse,
  ICheckTokenParams,
  ICheckTokenResponse,
} from './types';
import environment from 'config/environment';
import BaseApi from 'services/baseApi';

class AuthApi extends BaseApi {
  constructor() {
    super(environment.VITE_API_VERSION, axiosInstance);
  }

  login = async (params: ILoginParams) => {
    const response = await this.client.post<ILoginResponse>(
      `${this.apiVersion}/auth/login`,
      params,
    );

    return response?.data;
  };

  logout = async () => {
    const response = await this.client.delete<null>(
      `${this.apiVersion}/auth/logout`,
    );

    return response?.data;
  };

  forgotPassword = async (params: IForgotPasswordParams) => {
    const response = await this.client.post<unknown>(
      `${this.apiVersion}/auth/forgot-password`,
      params,
    );

    return response?.data;
  };

  resetPassword = async (params: IHandlePasswordParams) => {
    const response = await this.client.post<unknown>(
      `${this.apiVersion}/auth/reset-password`,
      params,
    );

    return response?.data;
  };

  checkToken = async (params: ICheckTokenParams) => {
    const response = await this.client.get<{ data: ICheckTokenResponse }>(
      `${this.apiVersion}/auth/check-token`,
      { params },
    );

    return response?.data;
  };

  createPassword = async (params: IHandlePasswordParams) => {
    const response = await this.client.post<ICreatePasswordResponse>(
      `${this.apiVersion}/auth/initial-password`,
      params,
    );

    return response?.data;
  };
}

export default new AuthApi();
