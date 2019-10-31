import { AppLoading, Asset } from 'expo';
import React, { useState } from 'react';

import AllProviders from './providers';
import Icons from './utils/Icons';
import { Image } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';

function cacheImages(images: Image[]): Image[] {
  return images.map((image: Image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const loadAssetsAsync = async (): Promise<void> => {
  const imageAssets = cacheImages(Icons);
  await Promise.all([...imageAssets]);
};

const App = (): React.ReactElement => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={(): void => setLoading(true)}
        // onError={console.warn}
      />
    );
  }
  return (
    <AllProviders>
      <SwitchNavigator />
    </AllProviders>
  );
};

export default App;
