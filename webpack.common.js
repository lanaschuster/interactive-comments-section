const path = require('path');
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    chunkFilename: 'js/[name].bundle.js',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json', '.vue', '.scss']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          esModule: false
        }
      }, {
        loader: 'sass-loader'
      }]
    }]
  },
  externals: {
    vue: 'Vue'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new Dotenv(),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: 'false'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
