import { Components } from '@mui/material';
import { justfundColors, solidColors } from './colors';

export const MuiCardTheme: Components['MuiCard'] = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '3rem 1rem',
      justifyContent: 'center',
      borderRadius: '1rem',
      border: `0.125rem solid ${justfundColors.grey['100']}`,
      backgroundColor: solidColors.white,
      zIndex: '10',
    },
  },
};
