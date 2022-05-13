const expoPreset = require('jest-expo/jest-preset');

import type {Config} from '@jest/types';

process.env.TZ = 'Asia/Seoul';

export default async (): Promise<Config.InitialOptions> => {
  return {
    automock: false,
    clearMocks: true,
    preset: 'jest-expo',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    modulePaths: ['<rootDir>'],
    moduleDirectories: ['node_modules'],
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'svg', 'png', 'json'],
    globals: {
      'ts-jest': {tsconfig: 'tsconfig.spec.json'},
    },
    modulePathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/.history/',
    ],
    moduleNameMapper: {
      '\\.svg': '<rootDir>/__mocks__/svgMock.js',
      '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'ts-jest',
    },
    setupFiles: [
      ...expoPreset.setupFiles,
      '<rootDir>/test/jestSetup.js',
      './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    setupFilesAfterEnv: ['./test/setupTest.ts'],
    transformIgnorePatterns: [
      // eslint-disable-next-line max-len
      'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|dooboo-ui|@dooboo-ui)',
    ],
    cacheDirectory: '.jest/cache',
    haste: {
      defaultPlatform: 'ios',
      platforms: ['android', 'ios', 'native'],
    },
  };
};
