import { solidColors, justfundColors } from './colors';

export const MuiButtonThemeVariants = [
  {
    props: { size: 'large' },
    style: {
      fontFamily: 'Montserrat',
      height: 42,
      minWidth: 106,
      paddingBottom: 10,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 8,
      // -- button text props --
      fontWeight: '600',
      fontSize: 16,
    },
  },
  {
    props: { size: 'medium' },
    style: {
      fontFamily: 'Montserrat',
      height: 37,
      minWidth: 85,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 6,
      // -- button text props --
      fontWeight: '600',
      fontSize: 15,
      letterSpacing: -0.24,
    },
  },
  {
    props: { size: 'small' },
    style: {
      fontFamily: 'Montserrat',
      height: 30,
      minWidth: 75,
      paddingBottom: 4,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 2,
      // -- button text props --
      fontWeight: '600',
      fontSize: 14,
    },
  },
  {
    props: { variant: 'contained', color: 'error' },
    style: {
      '&:hover': {
        color: solidColors.white,
      },
    },
  },
  {
    props: { variant: 'contained', color: 'success' },
    style: {
      '&:hover': {
        color: solidColors.white,
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'primary' },
    style: {
      borderColor: justfundColors.blue[500],
      color: justfundColors.blue[500],
      '&:hover': {
        backgroundColor: justfundColors.blue[50],
        borderColor: justfundColors.blue[600],
        color: justfundColors.blue[600],
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'buy' },
    style: {
      borderColor: justfundColors.yellow[700],
      color: justfundColors.yellow[700],
      '&:hover': {
        backgroundColor: justfundColors.yellow[50],
        borderColor: justfundColors.yellow[800],
        color: justfundColors.yellow[800],
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'secondary' },
    style: {
      borderColor: justfundColors.navy[500],
      color: justfundColors.navy[500],
      '&:hover': {
        backgroundColor: justfundColors.navy[50],
        borderColor: justfundColors.navy[600],
        color: justfundColors.navy[600],
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'error' },
    style: {
      borderColor: justfundColors.tomato[500],
      color: justfundColors.tomato[500],
      '&:hover': {
        backgroundColor: justfundColors.tomato[100],
        borderColor: justfundColors.tomato[600],
        color: justfundColors.tomato[600],
      },
    },
  },
  {
    props: { variant: 'outlined', color: 'success' },
    style: {
      borderColor: justfundColors.green[500],
      color: justfundColors.green[500],
      '&:hover': {
        backgroundColor: justfundColors.green[50],
        borderColor: justfundColors.green[600],
        color: justfundColors.green[600],
      },
    },
  },
  {
    props: { variant: 'text', color: 'primary' },
    style: {
      '&:hover': {
        backgroundColor: justfundColors.blue[50],
      },
    },
  },
  {
    props: { variant: 'text', color: 'buy' },
    style: {
      color: justfundColors.yellow[700],
      '&:hover': {
        backgroundColor: justfundColors.yellow[50],
        color: justfundColors.yellow[800],
      },
    },
  },
  {
    props: { variant: 'text', color: 'secondary' },
    style: {
      color: justfundColors.navy[500],
      '&:hover': {
        backgroundColor: justfundColors.navy[50],
        color: justfundColors.navy[600],
      },
    },
  },
  {
    props: { variant: 'text', color: 'error' },
    style: {
      color: justfundColors.tomato[500],
      '&:hover': {
        backgroundColor: justfundColors.tomato[100],
        color: justfundColors.tomato[600],
      },
    },
  },
  {
    props: { variant: 'text', color: 'success' },
    style: {
      color: justfundColors.green[500],
      '&:hover': {
        backgroundColor: justfundColors.green[50],
        color: justfundColors.green[600],
      },
    },
  },
];

export const MuiButtonTheme = {
  styleOverrides: {
    root: {
      boxShadow: 'none',
      borderRadius: 1000,
      textTransform: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      '&:focus': {
        outline: 'none',
      },
      '&.MuiButton-contained.Mui-disabled': {
        backgroundColor: justfundColors.grey[300],
        color: justfundColors.grey[600],
      },
      '&.MuiButton-outlined.Mui-disabled': {
        backgroundColor: 'transparent',
        borderColor: justfundColors.grey[300],
        color: justfundColors.grey[600],
      },
      '&.MuiButton-text.Mui-disabled': {
        backgroundColor: 'transparent',
        color: justfundColors.grey[600],
      },
      '.MuiButton-startIcon': {
        marginRight: 4,
      },
      '.MuiButton-endIcon': {
        marginLeft: 4,
      },
      '.MuiButton-iconSizeLarge': {
        '.MuiSvgIcon-root': {
          fontSize: 24,
        },
      },
      '.MuiButton-iconSizeMedium': {
        '.MuiSvgIcon-root': {
          fontSize: 24,
        },
      },
      '.MuiButton-iconSizeSmall': {
        '.MuiSvgIcon-root': {
          fontSize: 16,
        },
      },
    },
  },
  variants: MuiButtonThemeVariants,
};
