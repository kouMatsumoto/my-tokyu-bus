import { fetchSJISHtml } from '../../fetch-http/fetch-html';
import { HttpResult } from '../../../types/index';
import { TOKYU_BUS_TIMETABLE_URL } from '../../../config/constants';


/**
 * fetch next page of name-search page.
 */
export function fetchBusRoutesSelectHTML(queryString: string): Promise<HttpResult> {
  return fetchSJISHtml(`${TOKYU_BUS_TIMETABLE_URL}?${queryString}`);
}
