import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser';
import * as koaStatic from 'koa-static';
import { logger } from './lib/logger';
import { rootRouter } from './routers';
import { PUBLIC_ROOT } from './config/index';

const app = new Koa();

app.use(koaStatic(PUBLIC_ROOT));
app.use(koaBodyparser());


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
