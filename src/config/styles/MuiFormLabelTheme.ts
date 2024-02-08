import { Components } from '@mui/material';
import { justfundColors, opacityColors } from './colors';

export const MuiFormLabelTheme: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      '&.MuiInputLabel-root': {
        height: '1.25rem',
        transform: 'translate(0px, -1.7rem) scale(1)',

        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '1.25rem',
        letterSpacing: '0.006rem',
        color: opacityColors.black[90],

        '&.Mui-error': {
          color: justfundColors.tomato[500],
        },

        '&.Mui-disabled': {
          color: opacityColors.black[30],
        },
      },
    },
  },
};
