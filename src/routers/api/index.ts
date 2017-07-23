import * as Router from 'koa-router';
import { getHtmlOfTokyuBus } from '../../lib/get-html-of-tokyu-bus';
import { parseHtmlOfTokyuBus } from '../../lib/parse-html-of-tokyu-bus';
import { devLogger } from '../../lib/logger/dev-logger';
import { getMessageFromInformation } from '../../lib/get-message-from-information';
import { makeApiAiWebhookResult } from '../../lib/make-api-ai-webhook-result';
import { makeWebApiResultObject } from '../../lib/make-web-api-result-object';
import { makeWebApiErrorResultObject } from '../../lib/make-web-api-error-result-object';
import { timetableRouter } from './timetable/index';


const apiRouter = new Router();

apiRouter.use('/timetable', timetableRouter.routes());


const busInfoArray = Symbol('busInfoArray');


/**
 * Error handling for this api router
 * it's better move this error handling to global router
 */
apiRouter.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = makeWebApiErrorResultObject(e.message);
  }
});


/**
 * middleware to fetch and set tokyu-bus information
 */
apiRouter.use(async (ctx, next) => {
  // validate queries (from and to)
  const departure = ctx.query['departure'];
  const arrival = ctx.query['arrival'];
  if (typeof departure !== 'string' || typeof arrival !== 'string' || departure === '' || arrival === '') {
    // TODO: update error handling
    ctx.throw(500, 'query error. departure and arrival is required');
  }

  devLogger.debug('requested departure', {departure: departure});
  devLogger.debug('requested arrival', {arrival: arrival});


  const result = await getHtmlOfTokyuBus(departure, arrival);
  const infoArray =  parseHtmlOfTokyuBus(result.contents);
  ctx.state[busInfoArray] = infoArray;
  devLogger.debug('fetched bus info', {infoArray: infoArray});

  await next();
});


/**
 * return all information array json.
 */
apiRouter.get('/', async (ctx) => {
  ctx.body = makeWebApiResultObject(ctx.state[busInfoArray]);
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
  devLogger.info('request from api.ai', { body: ctx.request.body });

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
