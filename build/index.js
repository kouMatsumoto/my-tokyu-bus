"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koaBodyparser = require("koa-bodyparser");
const logger_1 = require("./lib/logger");
const routers_1 = require("./routers");
const app = new Koa();
app.use(koaBodyparser());
app.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const start = Date.now();
    yield next();
    const ms = Date.now() - start;
    logger_1.logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));
app.use(routers_1.rootRouter.routes());
app.listen(3000);
