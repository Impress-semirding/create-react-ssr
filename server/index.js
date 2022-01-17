import fs from 'fs';
import Koa from 'koa';
import process from 'process';
import cookie from 'koa-cookie';
import bodyParser from 'koa-bodyparser';
import proxy from 'koa2-proxy-middleware';
import { ChunkExtractor } from '@loadable/server';

import request from './utils/request';
import catchError from './middleware/exception';
import ssrRender from '../template/index.server';
import path, { resolve } from 'path';


let extractor = null;
async function createExtractor() {
  const { body } = await request('http://localhost:9000/static/loadable-stats.json');
  fs.writeFileSync(path.resolve(__dirname, '../loadable-client-stats.json'), JSON.stringify(body));
  extractor = new ChunkExtractor({
    statsFile: path.resolve(__dirname, '../loadable-client-stats.json'),
    entrypoints: ['index']
  });
  resolve()
}

createExtractor()
  .then(() => {
    const timeout = 1000 * 100;

    const proxyOption = {
      targets: {
        '/ws': {
          target: 'ws://localhost:9000',
          changeOrigin: true,
          proxyTimeout: timeout,
        },
        '/static/(.*)': {
          target: 'http://localhost:9000',
          changeOrigin: true,
          proxyTimeout: timeout,
        },
      }
    };

    process.on('uncaughtException', (err, origin) => {
      console.log(err, 'process error');
    });


    const app = new Koa();
    app.use(catchError);
    app.use(cookie());
    app.use(proxy(proxyOption));
    app.use(bodyParser(['json', 'form']));
    app.use(ssrRender(extractor));

    app.listen(8080, () => {
      console.log('server listen in 8080')
    });

  })
