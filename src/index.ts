import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser';
import * as koaStatic from 'koa-static';
import { rootRouter } from './routers';
import { PUBLIC_ROOT } from './config/index';
import { processTimeLogger } from './middlewares/process-time-logger';

const app = new Koa();

app.use(koaStatic(PUBLIC_ROOT));
app.use(koaBodyparser());


/**
 * Log process time when development
 */
app.use(processTimeLogger);

/**
 * Main Router
 */
app.use(rootRouter.routes());

app.listen(3000, () => {
  console.log('server starts');
});
