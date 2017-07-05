import { fetchTimetableHTML } from './fetch-timetable-html';


describe('fetchTimetableHTML', () => {
  fit('should be debug http result', (done) => {
    const actual = '';
    const expected = '';
    expect(actual).toEqual(expected);

    fetchTimetableHTML().then((data) => {
      const html = data.contents;
      console.log(html);
      done();
    });
  });
});
