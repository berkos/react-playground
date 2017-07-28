const path = require('path');

module.exports = {
  entry: './source/client.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 4000
  }
};
