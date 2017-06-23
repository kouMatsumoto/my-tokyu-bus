import { parseTokyuBusTimetableHtml } from './parse-tokyu-bus-timetable-html';
import { BUS_TIMETABLE_RESULT_HTML_TEXT } from '../../mocks/bus-timetable-result.html';


const expected =  ['21:13', '21:14', '21:20', '21:28', '21:36', '21:45', '21:53', '22:02', '22:10 三', '22:19', '22:26', '22:34', '22:42 三', '22:51', '23:00', '23:09 三', '23:18', '23:28', '23:39 三', '23:51 深' ];

describe('parseTokyuBusTimetableHtml', () => {
  it('should be return expected data', () => {
    const actual = parseTokyuBusTimetableHtml(BUS_TIMETABLE_RESULT_HTML_TEXT);
    expect(actual).toEqual(expected);
  });
});
