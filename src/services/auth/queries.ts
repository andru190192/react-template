import { AxiosError } from 'axios';
import { ICheckTokenParams, ICheckTokenResponse } from './types';
import { EAuthKeys } from './keys';
import authApi from './api';
import useCustomQuery from 'hooks/useCustomQuery';

export const useCheckToken = (params: ICheckTokenParams, enabled = true) =>
  useCustomQuery<
    unknown,
    AxiosError,
    ICheckTokenResponse,
    [EAuthKeys, ICheckTokenParams]
  >({
    queryKey: [EAuthKeys.checkToken, params],
    queryFn: ({ queryKey }) => authApi.checkToken(queryKey[1]),
    enabled,
  });
