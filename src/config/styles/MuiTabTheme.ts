import {
  CSSInterpolation,
  Components,
  ComponentsVariants,
} from '@mui/material';
import { justfundColors, textColors } from 'config/styles/colors';

const primaryFontStyle: CSSInterpolation = {
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  color: justfundColors.grey['80']!,
  textTransform: 'none',
};

const baseFontStyle: CSSInterpolation = {
  fontSize: '0.9375rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '150%',
  color: justfundColors.grey['80']!,
  letterSpacing: '-0.015rem',
  outline: '0',
  outlineStyle: 'none',
  ':focus': {
    outline: 'none',
  },
};

const primaryStyle: CSSInterpolation = {
  display: 'flex',
  flexDirection: 'column',
  padding: '0rem 1rem',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'padding-bottom 0.2s ease-out',
};

const selectedStyle: CSSInterpolation = {
  backgroundColor: justfundColors.blue['50'],
  color: justfundColors.blue['500'],
};

const baseHoveredStyle: CSSInterpolation = {
  backgroundColor: justfundColors.blue['50']!,
  color: justfundColors.grey['700']!,
};

const iconHoveredStyle: CSSInterpolation = {
  backgroundColor: justfundColors.grey['50']!,
  color: justfundColors.blue['300'],
  padding: '0rem 1rem 0.25rem 1rem',
};

const MuiTabVariants: ComponentsVariants['MuiTab'] = [
  {
    props: { className: 'navbar-tab' },
    style: {
      ...primaryFontStyle,
      '&.Mui-selected': {
        ...selectedStyle,
        '>.MuiTab-iconWrapper': {
          '> g > path': {
            fill: justfundColors.blue['500'],
          },
        },
        '&:hover': {
          ...selectedStyle,
          color: justfundColors.blue['300'],
          '>.MuiTab-iconWrapper': {
            '> g > path': {
              fill: justfundColors.blue['300'],
            },
          },
        },
      },
      '>.MuiTab-iconWrapper': {
        marginBottom: '0px',
      },
      '&:hover': {
        ...iconHoveredStyle,
        '>.MuiTab-iconWrapper': {
          '> g > path': {
            fill: justfundColors.blue['300'],
          },
        },
      },
    },
  },
  {
    props: { className: 'navbar-tab-disabled' },
    style: {
      ...primaryFontStyle,
      cursor: 'auto',
      color: textColors.disabled,
      '>.MuiTab-iconWrapper': {
        marginBottom: '0px',
      },
    },
  },
  {
    props: { className: 'menu-tab' },
    style: {
      fontFamily: 'Montserrat',
      textTransform: 'none',
      ...baseFontStyle,
      '&:hover': {
        ...baseHoveredStyle,
      },
    },
  },
];

export const MuiTabTheme: Components['MuiTab'] = {
  styleOverrides: {
    root: { ...primaryStyle },
  },
  variants: MuiTabVariants,
};
