import * as Koa from 'koa';
import { getHtmlOfTokyuBus } from './lib/get-html-of-tokyu-bus';
import { parseHtmlOfTokyuBus } from './lib/parse-html-of-tokyu-bus';


const app = new Koa();

app.use(async (ctx) => {
  const result = await getHtmlOfTokyuBus();
  const parsed = parseHtmlOfTokyuBus(result.contents);

  ctx.body = parsed;
});

app.listen(3000);
