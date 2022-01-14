const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: [
      // 'react-hot-loader/patch',
      path.resolve(__dirname, '../../client/index.js')
    ],
  },
  output: {
    filename: 'js/[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
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
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '香港身份证识别',
      template: path.resolve(__dirname, '../../client/template/index.html'),
      chunks: ['index'],
    })
  ]
};
