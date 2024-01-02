const { override } = require('customize-cra');

module.exports = function(config, env) {
  if (env === 'production') {
    
    config.output.publicPath = './';
    
  }
  
  return config;
};