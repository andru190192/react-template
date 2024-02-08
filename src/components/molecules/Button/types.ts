import { ButtonProps, IconButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {
  children: ButtonProps['children'];
  loading?: boolean;
}

export interface IIconButtonProps extends IconButtonProps {
  loading?: boolean;
  icon: IconButtonProps['children'];
}
