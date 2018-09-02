import { createSwitchNavigator } from 'react-navigation';
import RootNavigator from '@navigation/RootStackNavigator';
export default createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
    headerMode: 'none',
  },
);
