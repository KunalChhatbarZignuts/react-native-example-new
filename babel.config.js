/** @type {import('react-native-worklets/plugin').PluginOptions} */
const workletsPluginOptions = {};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: false,
      },
    ],

    // 🚨 MUST be last
    ['react-native-worklets/plugin', workletsPluginOptions],
  ],
};
