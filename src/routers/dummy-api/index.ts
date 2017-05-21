import * as Router from 'koa-router';
import { makeWebApiResultObject } from '../../lib/make-web-api-result-object';


const dummyApiRouter = new Router();

/**
 * This is for Android app test
 */
dummyApiRouter.get('/', async (ctx) => {
  const dummyInfo = [
    {
      coming: true,
      gone: false,
      waitingTime: 1
    },
    {
      coming: true,
      gone: false,
      waitingTime: 4
    },
  ];

  ctx.body = makeWebApiResultObject(dummyInfo);
});


export {
  dummyApiRouter
};
