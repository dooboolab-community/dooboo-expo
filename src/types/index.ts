import { StyleProp, TextStyle } from 'react-native';

import { DefaultTheme } from 'styled-components';
import { SFC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export interface ScreenProps {
  theme: DefaultTheme;
  changeThemeType: Function;
}

type StackParamList = {
  Intro: { userId: string };
  Temp: undefined;
};

export type DefaultNavigationProps<
  T extends keyof StackParamList
> = StackNavigationProp<StackParamList, T>;

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
