import { fetchHtml } from '../../common/http/fetch-html';
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
  'SCT': '2'
};

export async function fetchBusstopIds(departure: string, destination: string) {
  // departure and destination must have more than 2 characters.
  if (typeof departure !== 'string' || departure.length < 2) {
    throw new Error('departure must have more than 2 characters.');
  }
  if (typeof destination !== 'string' || destination.length < 2) {
    throw new Error('departure must have more than 2 characters.');
  }

  const options = {
    ...prerequisiteOptions,
    'DSN': departure,
    'ASN': destination,
  };
  const fetched = await fetchHtml(url, options);
  return fetched;
}
