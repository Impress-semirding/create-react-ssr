const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../../client/index.js'),
  },
  output: {
    filename: 'js/[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, '../src'),
    // },
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  externals: {},
  module: {
    rules: [{
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    },
    ],
  },
  plugins: [
    // new webpack.ProgressPlugin(handler),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new HtmlWebpackPlugin({
      title: '香港身份证识别',
      template: path.resolve(__dirname, '../../client/template/index.html'),
      chunks: ['index'],
    })
  ]
};
