import { parseTimetableHtml } from './parse-timetable-html';
import { timetableHTMLMock } from './timetable.html.mock';
import { timetableNoPrevHTMLMock } from './timetable-no-prev.html.mock';


const expected =  ['21:13', '21:14', '21:20', '21:28', '21:36', '21:45', '21:53', '22:02', '22:10 三', '22:19', '22:26', '22:34', '22:42 三', '22:51', '23:00', '23:09 三', '23:18', '23:28', '23:39 三', '23:51 深' ];
const expectedOfNoPrev = ['06:29', '06:40', '06:50', '07:00', '07:10', '07:19', '07:27', '07:37', '07:42', '07:47', '07:55', '08:03', '08:11', '08:12', '08:19', '08:27', '08:37', '08:45', '08:46', '08:53'];

describe('parseTimetableHtml', () => {
  it('should be return expected data', () => {
    const actual = parseTimetableHtml(timetableHTMLMock);
    expect(actual).toEqual(expected);
  });

  it('should parse properly even if no prev page html', () => {
    const actual = parseTimetableHtml(timetableNoPrevHTMLMock);
    expect(actual).toEqual(expectedOfNoPrev);
  });
});
