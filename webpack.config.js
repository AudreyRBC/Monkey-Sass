'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var styleLintPlugin = require('stylelint-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {
  entry: './src/assets/js/app.js',

  output: {
    path: __dirname,
    filename: 'dist/js/app.min.js'
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('./dist/css/app.css'),

    // Stylelint plugin
    new styleLintPlugin({
      configFile: '.stylelintrc',
      context: '',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss!sass-loader?outputStyle=expanded'
        )
      }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
