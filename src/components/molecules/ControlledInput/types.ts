import { OutlinedTextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';

export interface ControlledInputProps extends OutlinedTextFieldProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
}
