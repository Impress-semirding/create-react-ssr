const path = require('path');
const process = require('process');
const { spawn } = require('child_process');
const { PREPARECOMPLETE, SVRBUILDCOMPLETE, FRONTEDCOMPLIRE } = require('./constant');

const root = process.cwd();
let buildFrontedProcess = null;
const prepareProcess = spawn('node', [path.resolve(root, './config/script/prepare')], { shell: process.platform === 'win32' });
const buildServerProcess = spawn('npm', ['run', 'svr:watch'], { shell: process.platform === 'win32' });
const runServerProcess = () => spawn('node', [path.resolve(root, './dist/main')], { stdio: 'inherit', shell: process.platform === 'win32' });

let frontedReady = false;
prepareProcess.stdout.on('data', data => {
  const str = data.toString();
  if (str.includes(PREPARECOMPLETE)) {
    buildFrontedProcess = spawn('npm', ['run', 'client:dev'], { shell: process.platform === 'win32' });
    buildFrontedProcess.stdout.on('data', (data) => {
      if (data.toString().includes(FRONTEDCOMPLIRE)) {
        frontedReady = true;
      }
    })
  }
})

buildServerProcess.stdout.on('data', data => {
  const str = data.toString();
  if (str.includes(SVRBUILDCOMPLETE)) {
    runServer();
  } else {
    console.log(str);
  }
})


let serverProcess = null;
function runServer() {
  if (!frontedReady) {
    console.log('wait client build...')
    return setTimeout(runServer, [1000]);
  }
  if (serverProcess) {
    serverProcess.kill();
  }
  serverProcess = runServerProcess();
}

const killAllProcess = () => {
  buildServerProcess && buildServerProcess.kill();
  serverProcess && serverProcess.kill();
  buildFrontedProcess && buildFrontedProcess.kill();
}

process.on('close', (code) => {
  console.log('close all process');
  killAllProcess();
})

process.on('SIGINT', () => {
  buildServerProcess.stdin.write('exit', error => {
    console.log('svr code watcher process exit!');
  })

  console.log('close all process');
  killAllProcess();
})