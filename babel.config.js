module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    sourceMaps: "inline",
    plugins: [
      '@babel/transform-react-jsx-source',
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-transform-runtime",
        {
          "helpers": true,
          "regenerator": false
        }
      ],
      "@babel/proposal-object-rest-spread"
    ]
  };
};
