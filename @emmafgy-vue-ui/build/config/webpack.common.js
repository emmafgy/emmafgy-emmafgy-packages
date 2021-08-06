var path = require('path')
var webpack = require('webpack')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const resolve = dir => path.resolve(dir);

module.exports = {
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets/',
          limit: 1024 * 8
        }
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'fonts/',
        }
      },
      // {

      //     test: /\.(png|jpg|gif|svg|eot|svg)$/,
      //     loader: 'file-loader',
      //     options: {
      //       // name: '[name].[ext]?[hash]',
      //       // outputPath: 'static'
      //       outputPath: 'assets/',
      //       // publicPath: './assets',
      //       name: '[name][hash:8].[ext]'
      //     }

      // }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src') // 这样配置后 @ 可以指向 src 目录
    },
    extensions: ['*', '.js', '.vue', '.json']
  }


}
