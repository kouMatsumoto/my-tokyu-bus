"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeApiAiWebhookResult(message) {
    return {
        speech: message,
        displayText: message,
        source: 'my-tokyu-bus-webhook-result'
    };
}
exports.makeApiAiWebhookResult = makeApiAiWebhookResult;
