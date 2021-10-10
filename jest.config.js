const expoPreset = require('jest-expo/jest-preset');

process.env.TZ = 'Asia/Seoul';

module.exports = {
  automock: false,
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'svg', 'png', 'json'],
  globals: {
    'ts-jest': {tsconfig: 'tsconfig.spec.json'},
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.history/'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '.+\\.(css|style|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'ts-jest',
    '@react-navigation': '<rootDir>/__mocks__/@react-navigation.js',
  },
  setupFiles: [...expoPreset.setupFiles, '<rootDir>/test/jestSetup.js'],
  setupFilesAfterEnv: ['./test/setupTest.ts'],
  transformIgnorePatterns: [
    // eslint-disable-next-line max-len
    /* prettier-ignore */
    'node_modules\/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation\/.*|@unimodules\/.*|dooboo-ui|@dooboo-ui\/.*|expo(nent)?|@expo(nent)?\/.*|sentry-expo|native-base|@sentry\/.*)',
  ],
  cacheDirectory: '.jest/cache',
  haste: {
    defaultPlatform: 'ios',
    platforms: ['android', 'ios', 'native'],
  },
};
