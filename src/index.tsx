// import { observer } from 'mobx-react/native';
import { Constants } from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import RootStackNavigator from '@navigation/RootStackNavigator';
// import appStore from '@stores/appStore';
// import { ratio } from '@utils/Styles';
// import { ICONS } from '@utils/Icons';

// @observer
class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <RootStackNavigator />
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? Constants.statusBarHeight : 0, // false to get height of android too.
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
