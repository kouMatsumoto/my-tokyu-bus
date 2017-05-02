import * as Koa from 'koa';
import { getHtmlOfTokyuBus } from './lib/get-html-of-tokyu-bus';


const app = new Koa();

app.use(async (ctx) => {
  const result = await getHtmlOfTokyuBus();
  ctx.body = result.contents;
});

app.listen(3000);
