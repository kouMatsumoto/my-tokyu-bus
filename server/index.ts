import * as Koa from 'koa';
import { getHtmlOfTokyuBus } from './lib/get-html-of-tokyu-bus';
import { parseHtmlOfTokyuBus } from './lib/parse-html-of-tokyu-bus';
import { logger } from './lib/logger';


const app = new Koa();

/**
 * logging path and time for development
 */
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();

  const ms: number = Date.now() - start;
  logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


app.use(async (ctx) => {
  const result = await getHtmlOfTokyuBus();
  const parsed = parseHtmlOfTokyuBus(result.contents);

  ctx.body = parsed;
});

app.listen(3000);
