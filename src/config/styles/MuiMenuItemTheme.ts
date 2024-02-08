import { Components } from '@mui/material';
import { justfundColors } from './colors';

export const MuiMenuItemTheme: Components['MuiMenuItem'] = {
  styleOverrides: {
    root: {
      fontSize: '0.9375rem',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
      color: justfundColors.grey['80']!,
      textTransform: 'none',
      padding: '0.75rem 1rem',
      width: '15rem',
    },
  },
};
