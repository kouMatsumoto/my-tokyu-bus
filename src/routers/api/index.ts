import * as Router from 'koa-router';
import { timetableRouter } from './timetable/index';


const apiRouter = new Router();

apiRouter.use('/timetable', timetableRouter.routes());

export {
  apiRouter
};
