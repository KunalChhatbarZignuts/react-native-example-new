/** @type {import('react-native-worklets/plugin').PluginOptions} */
const workletsPluginOptions = {
  // your custom options (optional)
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],

    ['react-native-worklets/plugin', workletsPluginOptions],
  ],
};
