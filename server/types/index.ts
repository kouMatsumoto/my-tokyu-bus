/**
 * types of my server application
 */


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
