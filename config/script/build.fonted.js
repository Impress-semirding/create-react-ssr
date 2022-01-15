const chalk = require('chalk');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { SVRBUILDCOMPLETE, FRONTEDCOMPLIRE } = require('./constant');
const webpackConfig = require('../webpack/webpack.dev.fronted.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
  console.log(FRONTEDCOMPLIRE);
};

runServer();
