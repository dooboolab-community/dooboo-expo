import React, { useContext } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../../contexts';
import { createTheme } from '../../theme';
import RootNavigator from './RootStackNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default () => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer
        screenProps={{ theme: createTheme(theme) }}
      />
    </ThemeProvider>
  );
};
