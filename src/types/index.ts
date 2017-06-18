/**
 * types of my server application
 */


/**
 * type of result of HTML fetch function of mine
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
 * - waitTimes: minutes to arrives.
 * - remainingStops: how many bus-stops exists to user's bus-stop..
 */
export interface TokyuBusInformation {
  waitTimes: number;
  remainingStops?: number; // not implemented
}


/**
 * default interface of result JSON of web api.
 */
export interface WebApiResult {
  data: TokyuBusInformation[];
}


/**
 * default interface of error result JSON of web api.
 */
export interface WebApiErrorResult {
  message: string;
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
