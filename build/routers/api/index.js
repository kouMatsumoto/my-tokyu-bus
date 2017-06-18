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
const Router = require("koa-router");
const get_html_of_tokyu_bus_1 = require("../../lib/get-html-of-tokyu-bus");
const parse_html_of_tokyu_bus_1 = require("../../lib/parse-html-of-tokyu-bus");
const logger_1 = require("../../lib/logger");
const get_message_from_information_1 = require("../../lib/get-message-from-information");
const make_api_ai_webhook_result_1 = require("../../lib/make-api-ai-webhook-result");
const make_web_api_result_object_1 = require("../../lib/make-web-api-result-object");
const make_web_api_error_result_object_1 = require("../../lib/make-web-api-error-result-object");
const apiRouter = new Router();
exports.apiRouter = apiRouter;
const busInfoArray = Symbol('busInfoArray');
apiRouter.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield next();
    }
    catch (e) {
        ctx.status = e.status || 500;
        ctx.body = make_web_api_error_result_object_1.makeWebApiErrorResultObject(e.message);
    }
}));
apiRouter.use((ctx, next) => __awaiter(this, void 0, void 0, function* () {
    const departure = ctx.query['departure'];
    const arrival = ctx.query['arrival'];
    if (typeof departure !== 'string' || typeof arrival !== 'string' || departure === '' || arrival === '') {
        ctx.throw(500, 'query error. departure and arrival is required');
    }
    logger_1.logger.debug('requested departure', { departure: departure });
    logger_1.logger.debug('requested arrival', { arrival: arrival });
    const result = yield get_html_of_tokyu_bus_1.getHtmlOfTokyuBus(departure, arrival);
    const infoArray = parse_html_of_tokyu_bus_1.parseHtmlOfTokyuBus(result.contents);
    ctx.state[busInfoArray] = infoArray;
    logger_1.logger.debug('fetched bus info', { infoArray: infoArray });
    yield next();
}));
apiRouter.get('/', (ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = make_web_api_result_object_1.makeWebApiResultObject(ctx.state[busInfoArray]);
}));
apiRouter.get('/next', (ctx) => __awaiter(this, void 0, void 0, function* () {
    let message = '';
    const nextInformation = ctx.state[busInfoArray][0];
    if (!nextInformation) {
        message = 'There is no coming bus';
    }
    else {
        message = get_message_from_information_1.getMessageFromInformation(nextInformation);
    }
    ctx.body = message;
}));
apiRouter.post('/webhook', (ctx) => __awaiter(this, void 0, void 0, function* () {
    logger_1.logger.info('request from api.ai', { body: ctx.request.body });
    let message = '';
    const nextInformation = ctx.state[busInfoArray][0];
    if (!nextInformation) {
        message = 'There is no coming bus';
    }
    else {
        message = get_message_from_information_1.getMessageFromInformation(nextInformation);
    }
    ctx.body = make_api_ai_webhook_result_1.makeApiAiWebhookResult(message);
}));
