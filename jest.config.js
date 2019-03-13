const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo(nent)?/.*|@expo(nent)?/.*|react-navigation))",
    "\\.snap$",
  ],
  "setupFiles": [
    "./test/jestSetup.ts"
  ],
  "globals": {
    "window": {},
    "ts-jest": {
      "babelConfig": false,
      "tsConfig": "tsconfig.jest.json"
    }
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  "testPathIgnorePatterns": [		
    "\\.snap$",
    "<rootDir>/node_modules/"
  ],
  // "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "cacheDirectory": ".jest/cache",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "ios.ts",
    "ios.tsx",
    "android.ts",
    "android.tsx"
  ],
  "modulePathIgnorePatterns": [
    "node_modules/expo-constants/",
  ],
  "unmockedModulePathPatterns": [
    "node_modules/expo-constants/",
  ],
  // "moduleNameMapper": {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/assetsTransformer.js"
  // },
};
