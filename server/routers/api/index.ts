import * as Router from 'koa-router';
import { getHtmlOfTokyuBus } from '../../lib/get-html-of-tokyu-bus';
import { parseHtmlOfTokyuBus } from '../../lib/parse-html-of-tokyu-bus';
import { logger } from '../../lib/logger';
import { getMessageFromInformation } from '../../lib/get-message-from-information';
import { makeApiAiWebhookResult } from '../../lib/make-api-ai-webhook-result';


const apiRouter = new Router();

const busInfoArray = Symbol('busInfoArray');


/**
 * middleware to fetch and set tokyu-bus information
 */
apiRouter.use(async (ctx, next) => {
  const from = '2598';
  const to = '2336';

  const result = await getHtmlOfTokyuBus(from, to);
  const infoArray =  parseHtmlOfTokyuBus(result.contents);
  ctx.state[busInfoArray] = infoArray;
  logger.debug('fetched bus info', {infoArray: infoArray});

  await next();
});


/**
 * return all information array json.
 */
apiRouter.get('/', async (ctx) => {
  ctx.body = ctx.state[busInfoArray];
});


/**
 * return first information json.
 */
apiRouter.get('/next', async (ctx) => {
  let message = '';
  const nextInformation = ctx.state[busInfoArray][0];

  // there is no coming bus
  if (!nextInformation) {
    message = 'There is no coming bus';
  } else {
    message = getMessageFromInformation(nextInformation);
  }

  ctx.body = message;
});


/**
 * webhook for api.ai
 */
apiRouter.post('/webhook', async (ctx) => {
  logger.info('request from api.ai', { body: ctx.request.body });

  let message = '';
  const nextInformation = ctx.state[busInfoArray][0];

  // there is no coming bus
  if (!nextInformation) {
    message = 'There is no coming bus';
  } else {
    message = getMessageFromInformation(nextInformation);
  }

  ctx.body = makeApiAiWebhookResult(message);
});


export {
  apiRouter
};
