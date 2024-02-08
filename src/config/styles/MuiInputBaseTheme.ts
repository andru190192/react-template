import { Components } from '@mui/material';
import { justfundColors, opacityColors } from './colors';

const defaultBorder = `0.063rem solid ${justfundColors.grey[500]}`;
const defaultHoverBorder = `0.063rem solid ${justfundColors.blue[200]}`;
const defaultFocusedBorder = `0.125rem solid ${justfundColors.blue[500]}`;

const placeholder = {
  opacity: 'unset',
  color: opacityColors.black[30],
};

export const MuiInputBaseTheme: Components['MuiInputBase'] = {
  styleOverrides: {
    root: {
      '&.MuiOutlinedInput-root': {
        height: '3rem',
        borderRadius: '62.5rem',
        border: defaultBorder,

        '&:hover': { border: defaultHoverBorder },
        '&.Mui-focused': { border: defaultFocusedBorder },

        input: {
          padding: 0,
          paddingLeft: '1.5rem',
          height: '100%',
          color: opacityColors.black[90],

          '&::placeholder': placeholder,
        },

        '&.Mui-error': {
          borderColor: justfundColors.tomato[500],

          input: {
            color: justfundColors.tomato[500],
          },
        },

        fieldset: {
          display: 'none',
        },

        // Multiline
        '&.MuiInputBase-multiline': {
          width: '100%',
          padding: '0.75rem 1rem 0.75rem 1.5rem',
          border: defaultBorder,
          borderRadius: '0.75rem',
          minHeight: '15.625rem',
          maxWidth: '42rem',
          alignItems: 'start',

          '&:hover': {
            border: defaultHoverBorder,
          },
          '&.Mui-focused': {
            border: defaultFocusedBorder,
          },

          textarea: {
            '&::placeholder': placeholder,
          },

          '&.Mui-error': {
            borderColor: justfundColors.tomato[500],
            color: justfundColors.tomato[500],
          },
        },

        // Auto complete
        '&.MuiAutocomplete-inputRoot': {
          padding: '0.75rem 1rem 0.75rem 1.5rem',

          input: {
            padding: 0,
            paddingLeft: '1.5rem',
            height: '100%',
            color: opacityColors.black[90],
          },

          '&.Mui-error': {
            input: {
              color: justfundColors.tomato[500],
            },

            '.MuiAutocomplete-endAdornment': {
              button: {
                svg: {
                  color: justfundColors.tomato[500],
                },
              },
            },
          },
        },
      },
    },
  },
};
