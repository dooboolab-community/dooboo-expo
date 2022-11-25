import Intro from '../pages/Intro';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {StackNavigationProp} from '@react-navigation/stack';
import Temp from '../pages/Temp';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'dooboo-ui';

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Temp: {param: string};
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default',
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootStack(): React.ReactElement {
  const {theme, themeType} = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerMode: themeType === 'dark' ? 'screen' : 'float',
          headerStyle: {
            backgroundColor: theme.bg.default,
          },
          headerTitleStyle: {color: theme.text.default},
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
