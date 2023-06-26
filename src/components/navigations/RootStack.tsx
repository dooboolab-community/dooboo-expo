import type {ReactElement} from 'react';
import React from 'react';

import Intro from '../pages/Intro';
import {NavigationContainer} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import Temp from '../pages/Temp';
import {createStackNavigator} from '@react-navigation/stack';
import {useDooboo} from 'dooboo-ui';

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Temp: {param: string};
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default',
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootStack(): ReactElement {
  const {theme, themeType} = useDooboo();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerMode: themeType === 'dark' ? 'screen' : 'float',
          headerStyle: {
            backgroundColor: theme.bg.basic,
          },
          headerTitleStyle: {color: theme.text.basic},
          headerTintColor: theme.role.primary,
        }}
      >
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
