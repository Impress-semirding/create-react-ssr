const process = require('process');

const root = process.cwd();
const appPath = `${root}/app.config.js`;
const routerPath = `${root}/router.config.js`;
const entry = `${root}/template/index.ejs`;
const entryOut = `${root}/template/index.js`;
const defaultAppConfig = {
  pagePath: `${root}/client/pages`,
};

module.exports = {
  entry,
  entryOut,
  appPath,
  routerPath,
  defaultAppConfig
}