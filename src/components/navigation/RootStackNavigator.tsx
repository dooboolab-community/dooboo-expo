import {
  NavigationRouteConfig,
  StackNavigatorConfig,
  createStackNavigator,
} from 'react-navigation';

import Intro from '../screen/Intro';
import React from 'react';
import Temp from '../screen/Temp';
import { Text } from 'react-native';

const routeConfig: NavigationRouteConfig = {
  Intro: {
    screen: Intro,
    navigationOptions: ({
      navigation,
      screenProps,
    }: {
      navigation: any;
      screenProps: any;
    }) => {
      const { theme } = screenProps;
      return {
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      };
    },
    path: 'intro',
  },
  Temp: {
    screen: Temp,
    navigationOptions: ({
      navigation,
      screenProps,
    }: {
      navigation: any;
      screenProps: any;
    }) => {
      const { theme } = screenProps;
      return {
        headerTitle: (
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {navigation.state.routeName}
          </Text>
        ),
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      };
    },
    path: 'temp',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Intro',
  mode: 'card',
  headerMode: 'screen',
  // headerMode: 'none',
};

const RootStackNavigator = createStackNavigator(routeConfig, navigatorConfig);

export default RootStackNavigator;
