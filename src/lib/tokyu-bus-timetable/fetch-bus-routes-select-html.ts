import { fetchSJISHtml } from '../fetch-http/fetch-html';
import { HttpResult } from '../../types/index';

// endpoint
const url = 'http://www.tokyubus.co.jp/keitai/i/index.cgi';

/**
 * fetch next page of name-search page.
 */
export function fetchBusRoutesSelectHTML(queryString: string): Promise<HttpResult> {
  return fetchSJISHtml(`${url}?${queryString}`);
}
