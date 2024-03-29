import { IOpacityColors, TColors } from './interface';

export const textColors = {
  primary: 'rgba(17, 19, 24, 0.9)',
  secondary: 'rgba(17, 19, 24, 0.6)',
  tertiary: 'rgba(17, 19, 24, 0.4)',
  disabled: 'rgba(17, 19, 24, 0.3)',
};

export const solidColors: Record<string, string> = {
  white: '#FFFFFF',
  black: '#000000',
  borderGray: '#BDBDBD',
};

export const opacityColors: Record<string, IOpacityColors | string> = {
  black: {
    30: '#1113184D',
    90: '#111318E5',
  },
};

export const justfundColors: Record<string, TColors | string> = {
  blue: {
    50: '#E6ECFF',
    100: '#CEDAFC',
    200: '#9EB8FF',
    300: '#7197FE',
    400: '#4375FE',
    500: '#1352FE',
    600: '#013BDA',
    700: '#012CA3',
    800: '#001D6B',
    900: '#001D6B',
  },
  navy: {
    50: '#E9EDF1',
    100: '#CFD9E2',
    200: '#9FB3C6',
    300: '#718CA9',
    400: '#4D6680',
    500: '#304050',
    600: '#263340',
    700: '#1D2630',
    800: '#121A20',
    900: '#0B0D10',
  },
  grey: {
    50: '#F9F9FB',
    80: '#A6A6A6',
    100: '#F3F4F6',
    200: '#E7E9ED',
    300: '#DCDEE5',
    400: '#D1D3DD',
    500: '#C4C8D4',
    600: '#959CB2',
    700: '#67718E',
    800: '#454B5E',
    900: '#22262F',
  },
  yellow: {
    50: '#FFFAEA',
    100: '#FFF7DC',
    200: '#FDF0B8',
    300: '#FEE795',
    400: '#FDDF72',
    500: '#FED64D',
    600: '#FCC80A',
    700: '#C49B04',
    800: '#836700',
    900: '#423401',
    950: '#1E1800',
  },
  orange: {
    50: '#FFF7EB',
    100: '#FEF1DB',
    200: '#FFE1B8',
    300: '#FFD294',
    400: '#FFC370',
    500: '#FFB44D',
    600: '#FF9908',
    700: '#C77400',
    800: '#854D00',
    900: '#422700',
  },
  green: {
    50: '#DBFFEA',
    100: '#BDFFD7',
    200: '#7AFFAF',
    300: '#37FF88',
    400: '#02F562',
    500: '#00B246',
    600: '#008F39',
    700: '#016B2C',
    800: '#00471D',
    900: '#00240E',
  },
  tomato: {
    50: '#FFFFFF',
    100: '#FFE1DB',
    200: '#FFC1B8',
    300: '#FFA08F',
    400: '#FF816C',
    500: '#FF6348',
    600: '#FF2A05',
    700: '#C21D01',
    800: '#851400',
    900: '#420A00',
  },
};
