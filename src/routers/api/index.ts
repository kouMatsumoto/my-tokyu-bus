import * as Router from 'koa-router';
import { timetableRouter } from './timetable/index';
import { locationRouter } from './location/index';


const apiRouter = new Router();

apiRouter.use('/location', locationRouter.routes());
apiRouter.use('/timetable', timetableRouter.routes());

export {
  apiRouter
};
