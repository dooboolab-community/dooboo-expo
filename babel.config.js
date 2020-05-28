module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
      'module:metro-react-native-babel-preset',
    ],
    plugins: [
      'babel-plugin-fbt', 'babel-plugin-fbt-runtime',
    ],
  };
};
