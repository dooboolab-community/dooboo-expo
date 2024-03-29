import type {DoobooThemeParams} from '@dooboo-ui/theme';

export const colors = {
  success: '#00BA90',
  darkGray: '#00000070',
  mediumGray: '#00000030',
  lightGray: '#CFCED0',
};

export type Colors = typeof colors;

export const light = {
  bg: {
    default: '#FFFFFF',
  },
};

export type CustomAppTheme = typeof light & DoobooThemeParams;

export const dark = {
  bg: {
    default: '#232323',
  },
};

export const theme = {
  light,
  dark,
};
