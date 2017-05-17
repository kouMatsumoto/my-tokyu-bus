/**
 * types of my server application
 */


/**
 * type of result of fetchHtml
 */
export interface HttpResult {
  status: number;
  header: any;
  contents: string;
  error?: any;
}


/**
 * type of parseHtmlOfTokyuBus return value
 *
 * - coming: is bus coming now ?
 * - gone: had bus gone already ?
 * - waitingTime: minutes to arrives, this is set when `coming` is true
 */
export interface TokyuBusInformation {
  coming: boolean;
  gone: boolean;
  waitingTime: number;
}


/**
 * see https://docs.api.ai/docs/webhook
 */
export interface ApiAiWebhookResult {
  speech: string;
  displayText: string;
  data?: any;
  contextOut?: any;
  source: string;
  followupEvent?: any;
}
