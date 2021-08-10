var path = require('path')
var webpack = require('webpack');
const {
  merge
} = require('webpack-merge');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const commonConfig = require("./webpack.common.js");
const Components = require('../../components.json');

const prodConfig = {
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  entry: Components,
  output: {
    path: path.resolve('./lib'),
    // publicPath: './',
    filename: '[name].js',
    libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
  },
  // devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // new CleanWebpackPlugin()
  ]
}

module.exports = merge(commonConfig,prodConfig);
