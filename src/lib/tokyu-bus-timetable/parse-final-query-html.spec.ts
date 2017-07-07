import { parseFinalQueryHTML } from './parse-final-query-html';
import { finalQueryHTMLMock } from './final-query-html.mock';


describe('parseFinalQueryHTML', () => {
  it('should parse html properly', () => {
    const actual = parseFinalQueryHTML(finalQueryHTMLMock);
    expect(actual).toEqual(expected);
  });
});


const expected = {
  disp_history: '111213030405',
  search_type: '2',
  search_str: '%89%ba%94n',
  page: '1',
  kasira1: '',
  kasira2: '',
  kasira3: '',
  line_type: '',
  station_cd: '',
  busstop_cd: '1710409',
  keito_cd: '612101',
  updown_cd: '2',
  pole_cd: '01',
  mmdd: '07/07',
  folder: '7'
};
