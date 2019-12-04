module.exports = {
  preset: 'jest-expo',
  setupFiles: ['./test/jestSetup.ts'],
  transformIgnorePatterns: [
    /* eslint-disable */
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|@dooboo-ui/native)',
    /* eslint-enable */
  ],
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  globals: {
    'ts-jest': {
      tsConfig: {
        jsx: 'react',
      },
      diagnostics: false,
    },
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '\\.(ts|tsx)$': 'ts-jest',
  },
  // 'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'ios.ts',
    'ios.tsx',
    'android.ts',
    'android.tsx',
  ],
  // 'moduleNameMapper': {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|
  // woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':'<rootDir>/test/assetsTransformer.js'
  // },
};
