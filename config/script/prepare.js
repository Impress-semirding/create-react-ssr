const fs = require('fs');
const glob = require('glob');
const process = require('process');
const { entry, entryOut, appPath, routerPath, defaultAppConfig } = require('./config');
const { PREPARECOMPLETE } = require('./constant');


function prepare() {
  const config = fs.readFileSync(appPath, 'utf-8');
  process.env.config = config;
  const entryCode = fs.readFileSync(entry, 'utf-8');
  fs.writeFileSync(entryOut, entryCode.replace('<%= routerPath %>', routerPath));
}

module.exports = prepare;








