import { OutlinedTextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';

export interface PasswordInputProps extends OutlinedTextFieldProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
}
