import { fetchHtml } from '../../../common/http/fetch-html';

const url = 'http://tokyu.bus-location.jp/blsys/navi';
const essentialParams = {
  'VID': 'lsc',
  'EID': 'nt',
  'SCT': '2',
};


export async function fetchBusLocationHTML(departureId: string, arrivalId: string): Promise<string> {
  const params = {
    ...essentialParams,
    DSMK: departureId,
    ASMK: arrivalId,
  };
  const httpResult = await fetchHtml(url, params);

  // Todo: implement error handling.

  return httpResult.contents;
}
