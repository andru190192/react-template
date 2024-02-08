import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { MuiTabTheme } from './MuiTabTheme';
import { MuiCardTheme } from './MuiCardTheme';
import { MuiButtonTheme } from './MuiButtonTheme';
import { MuiIconButtonTheme } from './MuiIconButtonTheme';
import { MuiFormHelperTextTheme } from './MuiFormHelperTextTheme';
import { MuiPopperTheme } from './MuiPopperTheme';
import { MuiFormLabelTheme } from './MuiFormLabelTheme';
import { MuiInputBaseTheme } from './MuiInputBaseTheme';
import { MuiCardActionAreaTheme } from './MuiCardActionAreaTheme';
import { justfundColors, solidColors } from './colors';
import { MuiTypographyTheme } from './MuiTyphographyTheme';
import { MuiMenuItemTheme } from './MuiMenuItemTheme';
import { MuiAccordionTheme } from './MuiAccordionTheme';
import { MuiAccordionSummaryTheme } from './MuiAccordionSummaryTheme';
import { MuiTableContainerTheme } from './MuiTableContainerTheme';
import { MuiTableCellTheme } from './MuiTableCellTheme';

const themePalette = createTheme({
  palette: {
    // key: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },
    primary: {
      // light: '',
      main: justfundColors.blue[500],
      dark: justfundColors.blue[700],
      contrastText: solidColors.white,
    },
    secondary: {
      main: justfundColors.blue[50],
      dark: justfundColors.blue[100],
      contrastText: justfundColors.blue[500],
    },
    success: {
      main: justfundColors.green[50],
      dark: justfundColors.green[600],
      contrastText: justfundColors.green[600],
    },
    warning: {
      main: '#FF8765',
    },
    background: {
      paper: solidColors.white,
      default: solidColors.white,
    },
    error: {
      main: justfundColors.tomato[100],
      dark: justfundColors.tomato[600],
      contrastText: justfundColors.tomato[600],
    },
    buy: {
      main: justfundColors.yellow[500],
      dark: justfundColors.yellow[600],
      contrastText: justfundColors.yellow[950],
    },
    default: {
      main: solidColors.white,
      contrastText: justfundColors.grey[700],
    },
    iconMirrorPrimary: {
      main: solidColors.white,
    },
  },
});

const theme = createTheme(themePalette, {
  components: {
    MuiTab: MuiTabTheme,
    MuiCard: MuiCardTheme,
    MuiButton: MuiButtonTheme,
    MuiIconButton: MuiIconButtonTheme,
    MuiFormLabel: MuiFormLabelTheme,
    MuiInputBase: MuiInputBaseTheme,
    MuiPopper: MuiPopperTheme,
    MuiFormHelperText: MuiFormHelperTextTheme,
    MuiCardActionArea: MuiCardActionAreaTheme,
    MuiTypography: MuiTypographyTheme,
    MuiMenuItem: MuiMenuItemTheme,
    MuiAccordion: MuiAccordionTheme,
    MuiAccordionSummary: MuiAccordionSummaryTheme,
    MuiTableContainer: MuiTableContainerTheme,
    MuiTableCell: MuiTableCellTheme,
  },
});

export default responsiveFontSizes(theme);

declare module '@mui/material/styles' {
  interface Palette {
    buy: Palette['primary'];
    default: Palette['primary'];
    iconMirrorPrimary: Palette['primary'];
  }

  interface PaletteOptions {
    buy?: PaletteOptions['primary'];
    default?: PaletteOptions['primary'];
    iconMirrorPrimary?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    buy: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    default: true;
    iconMirrorPrimary: true;
  }
}
