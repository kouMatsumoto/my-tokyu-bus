import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser';
import * as koaStatic from 'koa-static';
import * as kcors from 'kcors';
import { rootRouter } from './routers';
import { PUBLIC_ROOT } from './config/index';
import { processTimeLogger } from './middlewares/process-time-logger';
import { logger } from './lib/logger';

const app = new Koa();

/**
 * Update header for Cross-Origin Resource Sharing
 */
app.use(kcors());

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


app.listen(3000, () => logger.info('server has started', process.env));
