import { AxiosError } from 'axios';

import useCustomMutation from 'hooks/useCustomMutation';
import authApi from './api';
import {
  IForgotPasswordParams,
  ILoginParams,
  ILoginResponse,
  IMutationParams,
  IHandlePasswordParams,
  ICreatePasswordResponse,
} from './types';

export const useLogin = () =>
  useCustomMutation<ILoginResponse, AxiosError, ILoginParams, unknown>({
    mutationFn: (params: ILoginParams) => authApi.login(params),
  });

export const useLogout = () =>
  useCustomMutation<unknown, AxiosError, void, unknown>({
    mutationFn: () => authApi.logout(),
  });

export const useForgotPassword = ({ onSuccess, onError }: IMutationParams) =>
  useCustomMutation<unknown, AxiosError, IForgotPasswordParams, unknown>({
    mutationFn: (params: IForgotPasswordParams) =>
      authApi.forgotPassword(params),
    onSuccess,
    onError,
  });

export const useResetPassword = ({ onSuccess, onError }: IMutationParams) =>
  useCustomMutation<unknown, AxiosError, IHandlePasswordParams, unknown>({
    mutationFn: (params: IHandlePasswordParams) =>
      authApi.resetPassword(params),
    onSuccess,
    onError,
  });

export const useCreatePassword = ({ onSuccess, onError }: IMutationParams) =>
  useCustomMutation<
    ICreatePasswordResponse,
    AxiosError,
    IHandlePasswordParams,
    unknown
  >({
    mutationFn: (params: IHandlePasswordParams) =>
      authApi.createPassword(params),
    onSuccess,
    onError,
  });
