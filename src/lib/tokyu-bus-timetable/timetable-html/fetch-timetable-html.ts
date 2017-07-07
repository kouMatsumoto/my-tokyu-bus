import * as moment from 'moment';
import { fetchSJISHtml } from '../../fetch-http/fetch-html';
import { TOKYU_BUS_TIMETABLE_URL } from '../../../config/constants';

// endpoint
const url = TOKYU_BUS_TIMETABLE_URL;


/**
 * to search bus-stop information by a word.
 */
export function fetchTimetableHTML(queryObject: {}) {
  const currentMoment = moment();
  const hh = currentMoment.format('HH');
  const mm = currentMoment.format('mm');
  const options = {
    ...queryObject,
    hh,
    mm
  };

  return fetchSJISHtml(url, options);
}
