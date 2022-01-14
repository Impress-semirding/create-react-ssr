import Koa from 'koa';
import process from 'process';
import cookie from 'koa-cookie';
import bodyParser from 'koa-bodyparser';
import proxy from 'koa2-proxy-middleware';
import catchError from './middleware/exception';


const timeout = 1000 * 100;

const proxyOption = {
  targets: {
    '/ws': {
      target: 'ws://localhost:9000',
      changeOrigin: true,
      proxyTimeout: timeout,
    },
    '/': {
      target: 'http://localhost:9000',
      changeOrigin: true,
      proxyTimeout: timeout,
    },
    '/(.*)': {
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

app.listen(8080, () => {
  console.log('server listen in 8080')
});