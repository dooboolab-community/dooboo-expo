import React, { useContext } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { AppContext } from '../../contexts';
import RootNavigator from './RootStackNavigator';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';

const switchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
  },
);

const AppContainer = createAppContainer(switchNavigator);

const SwitchNavigator = () => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer screenProps={{ theme: createTheme(theme) }} />
    </ThemeProvider>
  );
};

export default SwitchNavigator;
