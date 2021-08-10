var path = require('path')
var webpack = require('webpack');
const {
  merge
} = require('webpack-merge');
const commonConfig = require("./webpack.common.js");

const devConifg = {
  entry: './src/main.js',
  output: {
    path: path.resolve('./dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    open: true,
    hot: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

module.exports = merge(commonConfig, devConifg);
