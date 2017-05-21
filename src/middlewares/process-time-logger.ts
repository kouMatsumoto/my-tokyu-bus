import { Middleware } from 'koa';
import { logger } from '../lib/logger';


export const processTimeLogger: Middleware = async (ctx, next) => {
  if (process.env['NODE_ENV'] === 'development') {
    const start = Date.now();
    await next();
    const ms: number = Date.now() - start;
    logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);

  } else {
    next();
  }
};
