import { Components } from '@mui/material';

export const MuiTableCellTheme: Components['MuiTableCell'] = {
  styleOverrides: {
    body: {
      padding: '0.5rem 1rem',
      borderBottom: 'none',
    },
    head: {
      padding: '1rem',
    },
  },
};
