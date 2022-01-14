const path = require('path');
const process = require('process');

const root = process.cwd();
const entry = [
  path.resolve(root, './server/index.js')
];

const outputPath = path.resolve(root, './dist/server');

module.exports = {
  entry
}