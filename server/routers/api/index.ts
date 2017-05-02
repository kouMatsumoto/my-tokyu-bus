import * as Router from 'koa-router';
import { getHtmlOfTokyuBus } from '../../lib/get-html-of-tokyu-bus';
import { parseHtmlOfTokyuBus } from '../../lib/parse-html-of-tokyu-bus';
import { logger } from '../../lib/logger';


const apiRouter = new Router();

/**
 * middleware to fetch and set tokyu-bus information
 */
apiRouter.use(async (ctx, next) => {
  const result = await getHtmlOfTokyuBus();
  const infoArray =  parseHtmlOfTokyuBus(result.contents);
  ctx.state['busInfoArray'] = infoArray;
  logger.debug('fetched bus info', {infoArray: infoArray});

  await next();
});


/**
 * return all information array json.
 */
apiRouter.get('/', async (ctx) => {
  ctx.body = ctx.state['busInfoArray'];
});


/**
 * return first information json.
 */
apiRouter.get('/next', async (ctx) => {
  ctx.body = ctx.state['busInfoArray'];
});


export {
  apiRouter
};
