
// 2017-05-18: old url, this is url of '路線別バス位置情報'
// const urlOfTokyuBus = 'http://tokyu.bus-location.jp/blsys/navi?VID=rsl&EID=nt&PRM=&SCT=1&DSMK=2598&DSN=%E4%B8%8B%E9%A6%AC%E4%B8%80%E4%B8%81%E7%9B%AE&ASMK=2336&ASN=%E6%B8%8B%E8%B0%B7%E9%A7%85&FDSN=0&FASN=0&RAMK=6';  // eslint-disable-max-line-length

// 2017-05-18: new url, this is url of '停留所別バス接近情報'
import { HttpResult } from '../../types/index';
import { fetchSJISHtml } from '../fetch-http/fetch-html';
const urlOfTokyuBusTimetable = 'http://www.tokyubus.co.jp/keitai/i/index.cgi';


/**
 *   *disp_history - to identify file to refer (2122232425030405)
 *   *busstop_cd - departure bus-stop number (e.g. 1710409)
 *   *keito_cd - bus-route type number (e.g. 616101)
 *   *updown_cd - direction to go. (1 or 2)
 *   *pole_cd - specify a bus-stop to get-on among same name (e.g. 01, 24)
 */
export function fetchTimetableHTML(): Promise<HttpResult> {
  const options = {
    disp_history: '111213030405',
    busstop_cd: '1710409',
    keito_cd: '612101',
    updown_cd: '2',
    pole_cd: '01',
    mmdd: '07/05',
    hh: '21',
    mm: '50'
  };

  return fetchSJISHtml(urlOfTokyuBusTimetable, options);
}
