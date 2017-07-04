import { fetchTimetableHTML } from './fetch-timetable-html';
import { parseTokyuBusTimetableHtml } from '../parse-tokyu-bus-timetable-html/parse-tokyu-bus-timetable-html';


describe('queryParser', () => {
  fit('should be debug http result', (done) => {
    const actual = '';
    const expected = '';
    expect(actual).toEqual(expected);

    fetchTimetableHTML().then((data) => {
      console.log('data', data.contents);
      const parsed = parseTokyuBusTimetableHtml(data.contents);
      console.log('parsed', parsed);
      done();
    });
  });
});
