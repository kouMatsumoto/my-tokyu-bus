import { fetchHtml } from '../../common/http/fetch-html';
import { parseBusstopIdsHTML } from './parse-busstop-ids-html/parse-busstop-ids-html';
const url = 'http://tokyu.bus-location.jp/blsys/navi';

/**
 * required to fetch page.
 *   - VID: page type.
 *   - EID: session control?
 *   - SCT: menu type.
 */
const prerequisiteOptions = {
  'VID': 'ssp',
  'EID': 'nt',
  'SCT': '2',
};

export async function fetchBusstopIds(departure: string, destination: string) {
  // departure and destination must have more than 2 characters.
  if (typeof departure !== 'string' || departure.length < 2) {
    throw new Error('departure must have more than 2 characters.');
  }
  if (typeof destination !== 'string' || destination.length < 2) {
    throw new Error('departure must have more than 2 characters.');
  }

  // departure and destination have to be URLEncoded. (or error occurs)
  const options = {
    ...prerequisiteOptions,
    'DSN': encodeURIComponent(departure),
    'ASN': encodeURIComponent(destination),
  };
  const httpResult = await fetchHtml(url, options);
  return parseBusstopIdsHTML(httpResult.contents);
}
