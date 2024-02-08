import { OutlinedTextFieldProps } from '@mui/material';

export interface IInputComponentProps extends OutlinedTextFieldProps {
  helperText?: string;
  keepHelperTextSpace?: boolean;
}
