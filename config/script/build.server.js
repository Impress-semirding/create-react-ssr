const webpack = require('webpack');
const chalk = require('chalk');
const config = require('../webpack/webpack.dev.server.config');
const { SVRBUILDCOMPLETE } = require('./constant');

const compile = webpack(config);
compile.watch({
  aggregateTimeout: 300,
}, (err, stats) => {
  let json = stats.toJson("minimal");
  if(json.errors){
      json.errors.forEach(item => {
          console.log(item);
      });
  }
  if (json.warnings) {
      json.warnings.forEach(item => {
          console.log(item);
      });
  }

  //编译完成后 通知主进程来重启node 服务
  console.log(SVRBUILDCOMPLETE);
})


process.stdin.on('data', (data) => {
  if (data.toString() === 'exit') {
    process.exit();
  }
})

