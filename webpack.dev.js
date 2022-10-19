const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true,
    hot: true
  }
});
