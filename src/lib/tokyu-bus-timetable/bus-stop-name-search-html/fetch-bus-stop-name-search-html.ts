import { fetchSJISHtml } from '../../common/http/fetch-sjis-html';
import { sjisURLEncode } from '../../common/encode/sjis-url-encode';
import { TOKYU_BUS_TIMETABLE_URL } from '../../../config/constants';


// 'start-with' or 'contain' or 'end-with' (1 or 2 or 3).
const search_type = '2';

interface FetchBusStopNameSearchHTMLOptions {
  folder: string;
  disp_history: string;
  mmdd: string;
}

/**
 * to search bus-stop information by a word.
 */
export function fetchBusStopNameSearchHTML(search: string, options: FetchBusStopNameSearchHTMLOptions) {
  const search_str = sjisURLEncode(search);

  const extendedOptions = {
    ...options,
    search_type,
    search_str
  };

  return fetchSJISHtml(TOKYU_BUS_TIMETABLE_URL, extendedOptions);
}
