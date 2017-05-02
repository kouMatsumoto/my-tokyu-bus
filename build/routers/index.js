"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const api_1 = require("./api");
const rootRouter = new Router();
exports.rootRouter = rootRouter;
rootRouter.use('/api', api_1.apiRouter.routes());
