import * as moment from 'moment';
import { fetchSJISHtml } from '../../fetch-http/fetch-html';
import { TOKYU_BUS_TIMETABLE_URL } from '../../../config/constants';


/**
 * fetch html to get folder number which is used as the tokyu-bus-timetable option.
 *
 * folder number (maybe)
 *   - weekday:  '7'
 *   - saturday: '8'
 *   - sunday and holiday: '9'
 */
export function fetchFolderNumberHTML() {
  const mmdd = moment().format('MM/DD');

  const options = {
    mmdd,
    disp_history: '1112'
  };

  return fetchSJISHtml(TOKYU_BUS_TIMETABLE_URL, options);
}
