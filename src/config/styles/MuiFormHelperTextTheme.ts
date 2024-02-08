import { Components } from '@mui/material';
import { justfundColors } from './colors';

export const MuiFormHelperTextTheme: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      marginLeft: '0.5rem',
      marginTop: '0.5rem',
      minHeight: '1.25rem',
      color: 'rgba(17, 19, 24, 0.30)',

      '&.Mui-error': {
        color: justfundColors.tomato[500],
      },
    },
  },
};
