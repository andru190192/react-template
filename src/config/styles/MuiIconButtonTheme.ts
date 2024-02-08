import { justfundColors } from './colors';

export const MuiIconButtonThemeVariants = [
  {
    props: { color: 'primary' },
    style: {
      '&:hover': {
        backgroundColor: justfundColors.blue[50],
      },
    },
  },
  {
    props: { color: 'secondary' },
    style: {
      color: justfundColors.navy[500],
      '&:hover': {
        backgroundColor: justfundColors.navy[50],
      },
    },
  },
  {
    props: { color: 'error' },
    style: {
      color: justfundColors.tomato[500],
      '&:hover': {
        backgroundColor: justfundColors.tomato[100],
      },
    },
  },
  {
    props: { color: 'success' },
    style: {
      color: justfundColors.green[500],
      '&:hover': {
        backgroundColor: justfundColors.green[50],
      },
    },
  },
  {
    props: { color: 'default' },
    style: {
      color: justfundColors.grey[700],
      '&:hover': {
        backgroundColor: justfundColors.grey[100],
      },
      '&:focus': {
        backgroundColor: justfundColors.grey[300],
      },
    },
  },
  {
    props: { color: 'iconMirrorPrimary' },
    style: {
      backgroundColor: justfundColors.blue[500],
      '&:hover': {
        backgroundColor: justfundColors.blue[700],
      },
    },
  },
];

export const MuiIconButtonTheme = {
  styleOverrides: {
    root: {
      borderRadius: 100,
      '&.Mui-disabled': {
        '.MuiSvgIcon-root': {
          color: justfundColors.grey[500],
        },
      },
      '&:focus': {
        outline: 'none',
      },
    },
  },
  variants: MuiIconButtonThemeVariants,
};
