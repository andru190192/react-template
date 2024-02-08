import { useState } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import { ControlledInput } from 'components/molecules/ControlledInput';
import { PasswordInputProps } from './types';

export const PasswordInput = ({ control, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <ControlledInput
      control={control}
      name='password'
      label='Password'
      type={showPassword ? 'text' : 'password'}
      placeholder='Enter password'
      helperText={
        'Must be at least 8 characters and contain 1 number, 1 uppercase and one lowercase character.'
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
            >
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
