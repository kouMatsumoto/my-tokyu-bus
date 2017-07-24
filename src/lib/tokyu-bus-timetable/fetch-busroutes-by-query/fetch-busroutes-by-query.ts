import { parseHTMLByAnchor } from '../parse-html-by-anchor/parse-html-by-anchor';
import { fetchBusRoutesSelectHTML } from './bus-routes-select-html/fetch-bus-routes-select-html';


export async function fetchBusroutesByQuery(queryString: string) {
  const httpResult = await fetchBusRoutesSelectHTML(queryString);
// when bus-routes not found, result is an empty array [].
  return parseHTMLByAnchor(httpResult.contents);
}
