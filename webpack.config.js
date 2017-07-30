const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './source/client.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 4000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader'])
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
