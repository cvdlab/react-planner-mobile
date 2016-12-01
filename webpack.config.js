var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/renderer.jsx'),
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ]
};
