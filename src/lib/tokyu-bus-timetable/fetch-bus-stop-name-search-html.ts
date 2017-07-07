import * as moment from 'moment';
import { fetchSJISHtml } from '../fetch-http/fetch-html';
import { sjisURLEncode } from '../sjis-url-encode/sjis-url-encode';
import { TOKYU_BUS_TIMETABLE_URL } from '../../config/constants';

// endpoint
const url = TOKYU_BUS_TIMETABLE_URL;
// version-number of timetable. (latest from 2017-07-06)
const disp_history = '111213';
// unknown query but may be valid if '7'.
const folder = '7';
// 'start-with' or 'contain' or 'end-with' (1 or 2 or 3).
const search_type = '2';
/**
 * to search bus-stop information by a word.
 */
export function fetchBusStopNameSearchHTML(search: string) {
  const mmdd = moment().format('MM/DD');
  const search_str = sjisURLEncode(search);

  const options = {
    disp_history,
    mmdd,
    folder,
    search_type,
    search_str
  };

  return fetchSJISHtml(url, options);
}
