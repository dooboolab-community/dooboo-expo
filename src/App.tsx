import * as SplashScreen from 'expo-splash-screen';

import React, {useEffect} from 'react';

import AppLoading from 'expo-app-loading';
import Icons from './utils/Icons';
import RootNavigator from './components/navigations/RootStack';
import RootProvider from './providers';
import {useAssets} from 'expo-asset';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync();

function App(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('dooboo-ui/Icon/doobooui.ttf'),
  });

  const [assets] = useAssets(Icons);

  useEffect(() => {
    if (assets && fontsLoaded) SplashScreen.hideAsync();
  }, [assets, fontsLoaded]);

  if (!assets) return <AppLoading />;

  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
