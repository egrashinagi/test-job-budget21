'use strict';

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');


const pluginsCommon = [
  new HtmlWebpackPlugin({
    title: 'My App',
    template: './src/index.html'
  }),
  new ExtractTextPlugin('style.css', {allChunks: true}),
  new CopyWebpackPlugin([ { from: './src/assets', to: './assets' }])
];
const pluginsProd = [
  ...pluginsCommon,
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })];
const pluginsDev = [
  ...pluginsCommon,
  new webpack.HotModuleReplacementPlugin()
];

module.exports = {
  watch: isDevelopment,
  devtool: isDevelopment ? 'source-map' : null,

  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },

  plugins: isDevelopment ? pluginsDev : pluginsProd,
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract(['css','postcss', 'sass?sourceMap'])}
    ]
  },
  postcss: [autoprefixer({ browsers: ['ie >= 10','opera >= 12'] })]
};
