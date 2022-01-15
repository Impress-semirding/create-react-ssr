import fs from 'fs';
import path from 'path';
import React from "react";
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';

import App from "/Users/dingxue/codes/create-react-ssr/router.config.js";

const template = fs.readFileSync(path.resolve(__dirname, '../template/html/index.html'));

const context = {};

function ssrRender(extractor) {
  return (ctx, next) => {
    if (['/', '/about', '/dashboard/messages'].includes(ctx.url)) {
      const jsx = extractor.collectChunks(
        <StaticRouter location={ctx.url}>
          <App></App>
        </StaticRouter>
      )

      console.log('jsx', jsx, JSON.stringify(jsx))
      const html = renderToString(jsx);
      ctx.body = 1;

      // console.log('html', html)

      // ctx.status = 200;
      // ctx.set('Content-Type', 'text/html');
      // ctx.body = template.replace('<!-- style -->', extractor.getStyleTags())
      //   .replace('<!-- content -->', html)
      //   .replace('<!-- script -->', extractor.getScriptTags());
    }
  }
}

export default ssrRender;
