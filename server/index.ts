import * as Koa from 'koa';
import { logger } from './lib/logger';
import { rootRouter } from './routers';


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


app.use(rootRouter.routes());

app.listen(3000);
