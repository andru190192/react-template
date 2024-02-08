import { Components } from '@mui/material';
import { solidColors } from './colors';

export const MuiCardActionAreaTheme: Components['MuiCardActionArea'] = {
  styleOverrides: {
    focusHighlight: {
      backgroundColor: solidColors.white,
    },
  },
};
