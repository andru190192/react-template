import * as Yup from 'yup';

import { AuthLoginKeys } from '../types';
import { EAuthErrorMessages } from 'pages/Auth/types';

export const AuthLoginValidationSchema = Yup.object<
  Record<keyof AuthLoginKeys, Yup.AnySchema>
>().shape({
  password: Yup.string().required(EAuthErrorMessages.REQUIRED_FIELD),
  email: Yup.string()
    .email(EAuthErrorMessages.INVALID_EMAIL)
    .required(EAuthErrorMessages.REQUIRED_FIELD)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, EAuthErrorMessages.INVALID_EMAIL),
});
