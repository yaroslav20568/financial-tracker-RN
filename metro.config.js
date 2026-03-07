const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withRozenite } = require('@rozenite/metro');
require('dotenv').config();

const defaultConfig = getDefaultConfig(__dirname);

const config = {};

module.exports = withRozenite(mergeConfig(defaultConfig, config), {
  enabled: process.env.WITH_ROZENITE === 'true',
  include: [
    '@rozenite/tanstack-query-plugin',
    '@rozenite/react-navigation-plugin',
    '@rozenite/network-activity-plugin'
  ]
});
