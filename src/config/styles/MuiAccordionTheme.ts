import { Components } from '@mui/material';
import { solidColors } from './colors';

export const MuiAccordionTheme: Components['MuiAccordion'] = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: '0.5rem',
      border: `0.0625rem solid ${solidColors?.borderGray}`,
      boxShadow: 'none',
    },
  },
};
