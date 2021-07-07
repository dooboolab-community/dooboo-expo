const expoPreset = require('jest-expo/jest-preset');

process.env.TZ = 'Asia/Seoul';

module.exports = {
  preset: 'react-native',
  automock: false,
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'svg', 'png'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react',
      },
      diagnostics: false,
    },
  },
  modulePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/.history/',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'ts-jest',
  },
  setupFiles: [...expoPreset.setupFiles, '<rootDir>/test/jestSetup.js'],
  setupFilesAfterEnv: ['./test/setupTest.ts'],
  transformIgnorePatterns: [
    // eslint-disable-next-line max-len
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|dooboo-ui|@dooboo-ui|sentry-expo|native-base|@sentry/.*)',
  ],
  cacheDirectory: '.jest/cache',
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
  },
};
