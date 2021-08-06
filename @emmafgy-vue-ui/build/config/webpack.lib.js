var path = require('path')
var webpack = require('webpack');
const {
  merge
} = require('webpack-merge');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const commonConfig = require("./webpack.common.js");

const prodConfig = {
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  entry: './src/lib/index.js',
  output: {
    path: path.resolve('./lib'),
    // publicPath: './',
    filename: '@emmafgy-vue.js',
    library: '@emmafgy-vue', // library指定的就是你使用require时的模块名，这里便是require("PayKeyboard")
    libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
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
