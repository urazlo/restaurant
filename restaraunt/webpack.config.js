const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const config = dotenv.config({path: './.env'}).parsed;

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './js/app.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: config.DEV_PORT || 9001,
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          miniCss.loader,
          {loader: 'css-loader', options: {sourceMap: true}},
          {
            loader: 'postcss-loader',
          },
          {loader: 'sass-loader', options: {sourceMap: true}},
        ]
      },
      {
        test: /\.html$/,
        loader: 'mustache-loader'
      }
    ],
  },
  plugins: [
    new miniCss({filename: 'css/app.css'}),
    new copyPlugin({
      patterns: [
        {from: './assets/imgs', to: './assets/imgs', noErrorOnMissing: true,},
        {from: './assets/icons', to: './assets/icons', noErrorOnMissing: true,},
        {from: './assets/fonts', to: './assets/fonts', noErrorOnMissing: true,},
      ]
    }),

    new HtmlWebpackPlugin({
      template: './html/index.html',
    }),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.bundle.js',
  },

  mode: 'development',
};
