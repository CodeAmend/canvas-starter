const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',


  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  mode: 'development',

  resolve: {
    extensions: ['ts', 'js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3131,
      server: {
        baseDir: ['dist'],
      },
    }),
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
