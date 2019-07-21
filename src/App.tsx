import { AppLoading, Asset } from 'expo';
import React, { useState } from 'react';
import { Image } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';

import { AppProvider as Provider } from './providers';
import Icons from './utils/Icons';

function cacheImages(images: Image[]) {
  return images.map((image: Image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const _loadAssetsAsync = async() => {
  const imageAssets = cacheImages(Icons);
  await Promise.all([...imageAssets]);
};

const App = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => setLoading(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider>
      <SwitchNavigator />
    </Provider>
  );
};

export default App;
