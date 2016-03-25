var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var timestamp = +new Date();

var config = {
  entry: {
    app: [APP_DIR + '/index.js']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle_' + timestamp + '.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;