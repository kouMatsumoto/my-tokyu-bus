import { ApiAiWebhookResult } from '../types/index';


export function makeApiAiWebhookResult(message: string): ApiAiWebhookResult {
  return {
    speech: message,
    displayText: message,
    source: 'my-tokyu-bus-webhook-result'
  };
}
