import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import Button from 'components/molecules/Button';
import AuthHeader from 'pages/AuthLogin/components/AuthHeader';
import { ControlledInput } from 'components/molecules/ControlledInput';
import useCustomNavigate from 'hooks/useCustomNavigate';
import { useAuth } from 'hooks/useAuth';
import { LoginError } from 'services/auth/types';
import { routesPaths } from 'config/router/routes';
import { PasswordInput } from 'components/molecules/PasswordInput';

import { AuthLoginKeys } from './types';
import { AuthLoginValidationSchema } from './validations';
import { EAuthErrorMessages } from 'pages/Auth/types';
import './styles.scss';

const AuthLogin = () => {
  const { navigate } = useCustomNavigate();
  const [attemptsLeft, setAttemptsLeft] = useState<number>();

  const {
    login: { authenticate, error, isPending },
  } = useAuth();

  const initialValues: AuthLoginKeys = {
    email: '',
    password: '',
  };

  const { control, handleSubmit, setError } = useForm<AuthLoginKeys>({
    resolver: yupResolver(AuthLoginValidationSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<AuthLoginKeys> = (formData) => {
    authenticate(formData);
  };

  const onLoginError = useCallback(
    (loginError: AxiosError) => {
      const error = loginError?.response?.data as LoginError;

      if (error?.errors) {
        const { password, email, attempts_left } = error.errors;

        if (attempts_left >= 1) setAttemptsLeft(attempts_left);
        else {
          navigate(routesPaths.publicChildren.AUTH_LOCKED);
        }

        if (password) {
          setError('password', {
            type: 'Invalid',
            message: password[0],
          });
        }

        if (email) {
          setError('email', {
            type: 'Invalid',
            message: EAuthErrorMessages.NOT_EXIST_EMAIL,
          });
        }
      }
    },
    [setError],
  );

  useEffect(() => {
    if (error) onLoginError(error);
  }, [error, onLoginError]);

  return (
    <Box className='b4b-login-container'>
      <AuthHeader
        title='Log in to Justfund'
        subTitle='Please enter your username and password.'
        attemptsLeft={attemptsLeft}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(onSubmit)(e);
        }}
      >
        <Grid container className='form'>
          <Grid item xs={12}>
            <ControlledInput
              control={control}
              name='email'
              label='Email address'
              variant='outlined'
              placeholder='Enter email address'
            />
          </Grid>

          <Grid item xs={12}>
            <PasswordInput variant='outlined' control={control} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} className='footer-buttons'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              loading={isPending}
            >
              Log in
            </Button>

            <Button
              variant='text'
              color='primary'
              onClick={() =>
                navigate(routesPaths.publicChildren.AUTH_PASSWORD_SETUP)
              }
            >
              Forgot password?
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AuthLogin;
