const path = require('path');
const { override } = require('customize-cra');

module.exports = override(
  // Modify the publicPath to generate relative paths
  (config) => {
    config.output.publicPath = './';
    return config;
  }
);
