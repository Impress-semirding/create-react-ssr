const path = require("path");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { entry, outputPath } = require('./config');


process.env.BABEL_NODE='node';
process.env.BABEL_ENV = 'node';//设置 babel 的运行环境
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  target: 'node',
  output: {
    filename: "[name].js",
    path: outputPath,
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.(css|less)$/,
        // exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: "less-loader", // compiles Less to CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: "url-loader",
            options: {
              name: devMode
                ? "assets/[name]-[hash:4].[ext]"
                : "assets/[name]-[hash].[ext]",
              esModule: false,
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(svg|otf)$/i,
        exclude: [/node_modules/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: devMode
                ? "assets/[name]-[hash:4].[ext]"
                : "assets/[name]-[hash].[ext]",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    symlinks: false,
    // cacheWithContext: false,
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../../src"),
      "api": path.resolve(__dirname, "../../src/service"),
    },
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: "./assets/[name].[hash].css",
      chunkFilename: "./assets/[id].[hash].css",
    }),
  ],
};
