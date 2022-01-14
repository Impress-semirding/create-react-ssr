const Webpack = require('webpack');
const chalk = require('chalk');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.dev.fronted.config');
const { SVRBUILDCOMPLETE, FRONTEDCOMPLIRE } = require('./constant');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
  console.log(FRONTEDCOMPLIRE);
};

runServer();

console.log(1111)