import type {ConfigContext, ExpoConfig} from '@expo/config';

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'dooboo',
  slug: 'dooboo-expo',
  privacy: 'public',
  platforms: ['ios', 'android', 'web'],
  version: '1.0.0',
  orientation: 'default',
  icon: './assets/icon.png',
  plugins: ['sentry-expo', 'expo-localization'],
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  userInterfaceStyle: 'automatic',
  ios: {
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
  },
  android: {
    userInterfaceStyle: 'automatic',
  },
  description: 'Starter project from dooboo-cli.',
});
