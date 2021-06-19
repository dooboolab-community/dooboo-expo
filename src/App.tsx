import {Asset, useAssets} from 'expo-asset';
import React, {useEffect} from 'react';

import AppLoading from 'expo-app-loading';
import Icons from './utils/Icons';
import {Image} from 'react-native';
import RootNavigator from './components/navigations/RootStackNavigator';
import RootProvider from './providers';

function cacheImages(images: (number | string)[]): any[] {
  return images.map((image) => {
    if (typeof image === 'string') return Image.prefetch(image);
    else return Asset.fromModule(image as number).downloadAsync();
  });
}

function App(): React.ReactElement {
  const [assets] = useAssets(Icons);

  const loadAssetsAsync = async (): Promise<void> => {
    const imageAssets = cacheImages(Icons);

    await Promise.all([...imageAssets]);
  };

  useEffect(() => {
    loadAssetsAsync();
  });

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
