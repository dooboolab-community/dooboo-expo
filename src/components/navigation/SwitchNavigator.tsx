import React, { useContext } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AppContext } from '../../contexts';
import { DefaultTheme } from 'styled-components';
import RootNavigator from './RootStackNavigator';
import { ThemeProvider } from 'styled-components/native';
import { createTheme } from '../../theme';

const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export interface ScreenProps {
  theme: DefaultTheme;
}

export default function Navigator() {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer screenProps={{ theme: createTheme(theme) }} />
    </ThemeProvider>
  );
}
