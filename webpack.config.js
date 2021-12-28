const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      process: 'process/browser',
    },
  },

  plugins: [new NodePolyfillPlugin()],
};
