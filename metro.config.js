const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro'); 

// metro.config.js
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');


const config = getDefaultConfig(__dirname);

module.exports = withUniwindConfig(wrapWithReanimatedMetroConfig(config), {
  cssEntryFile: './app/global.css',
  dtsFile: './uniwind-types.d.ts',
});