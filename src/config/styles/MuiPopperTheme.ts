import { Components } from '@mui/material';
import { justfundColors, opacityColors } from './colors';

export const MuiPopperTheme: Components['MuiPopper'] = {
  styleOverrides: {
    root: {
      '.MuiPaper-root': {
        '.MuiAutocomplete-listbox': {
          '.MuiAutocomplete-option': {
            padding: '0.75rem 1rem 0.75rem 1.5rem',

            color: opacityColors.black[90],
            fontSize: '1rem',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',

            '&:hover': {
              backgroundColor: justfundColors.grey[100],
            },

            '&.MuiAutocomplete-option[aria-selected="true"]': {
              backgroundColor: justfundColors.blue[50],
              color: justfundColors.blue[500],
            },
          },
        },
      },
    },
  },
};
