const path = require('path');

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
        exclude: /node_module/,
        loader: 'babel-loader'
      }
    ]
  }
};
