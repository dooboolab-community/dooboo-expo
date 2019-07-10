module.exports = {
  "preset": "jest-expo",
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "**/__tests__/**/*.ts?(x)",
    "**/?(*.)+(spec|test).ts?(x)"
  ],
  "moduleFileExtensions": [
    "js",
    "ts",
    "tsx"
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": {
        "jsx": "react"
      },
      "diagnostics": false,
    }
  },
};
