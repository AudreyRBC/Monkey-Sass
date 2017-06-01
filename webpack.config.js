const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// require('es6-promise').polyfill();

module.exports = {
  entry : [
    './src/js/app.js',
    './src/sass/app.scss'
  ],
  output : {
    //
    // JAVSCRIPT OUTPUT
    //
    filename : 'dist/js/app.js'
  },
  module : {
    rules : [
      //
      // JAVASCRIPT
      //
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      //
      // SASS
      //
      {
        test : /\.(sass|scss)$/,
        loader : ExtractTextPlugin.extract([
          'css-loader?url=false', //?url=false => prevent url to be verified
          'autoprefixer-loader?browsers=last 2 versions',
          'resolve-url-loader',
          'sass-loader'
        ])
      }
    ]
  },

  plugins : [
    //
    // CSS OUTPUT
    //
    new ExtractTextPlugin({
      filename : 'dist/css/app.css',
      allChunks : true
    })
  ],

  devtool: 'source-map'
}
