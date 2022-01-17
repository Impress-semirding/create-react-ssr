import fs from 'fs';
import path from 'path';
import React from "react";
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';

import App from "/Users/dingxue/Downloads/github/my-cli/my-react-template/router.config.js";

const template = fs.readFileSync(path.resolve(__dirname, '../template/html/index.html'), 'utf-8');

const context = {};

function ssrRender(extractor) {
  return async (ctx, next) => {
    if (['/','/about', '/dashboard/messages'].includes(ctx.url)) {
      const jsx = extractor.collectChunks(
        <StaticRouter location={ctx.url}>
          <App></App>
        </StaticRouter>
      )
      
      const html = renderToString(jsx);
      ctx.status = 200;
      console.log(extractor.getScriptTags());
      ctx.set('Content-Type', 'text/html');
      console.log(template.replace('<!-- style -->', extractor.getStyleTags())
      .replace('<!-- content -->', html)
      .replace('<!-- script -->', extractor.getScriptTags()))
      ctx.body = template.replace('<!-- style -->', extractor.getStyleTags())
      .replace('<!-- content -->', html)
      .replace('<!-- script -->', extractor.getScriptTags());
    } 
    await next();
  }
}

export default ssrRender;
