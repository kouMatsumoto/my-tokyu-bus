import { Middleware } from 'koa';
import { devLogger } from '../lib/logger/dev-logger';


export const processTimeLogger: Middleware = async (ctx, next) => {
  if (process.env['NODE_ENV'] === 'development') {
    const start = Date.now();
    await next();
    const ms: number = Date.now() - start;
    devLogger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);

  } else {
    await next();
  }
};
