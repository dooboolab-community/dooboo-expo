import React, {useEffect, useState} from 'react';

import Icons from './utils/Icons';
import {Image, View} from 'react-native';
import RootNavigator from './components/navigations/RootStackNavigator';
import RootProvider from './providers';
import {Asset} from 'expo-asset';

function cacheImages(images: (number | string)[]): any[] {
  return images.map((image) => {
    if (typeof image === 'string') return Image.prefetch(image);
    else return Asset.fromModule(image as number).downloadAsync();
  });
}

function App(): React.ReactElement {
  const [loading, setLoading] = useState(false);

  const loadAssetsAsync = async (): Promise<void> => {
    const imageAssets = cacheImages(Icons);

    await Promise.all([...imageAssets]);

    setLoading(false);
  };

  useEffect(() => {
    if (!loading) loadAssetsAsync();
  }, [loading]);

  if (loading)
    return (
      // Loading View
      <View />
    );

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
