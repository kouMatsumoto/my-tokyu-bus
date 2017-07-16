import * as expect from 'expect';
import { parseHTMLByInputHidden } from './parse-html-by-input-hidden';
import { sampleHTMLMock } from './sample-html.mock';


describe('parseHTMLByInputHidden', () => {
  it('should parse html properly', () => {
    const actual = parseHTMLByInputHidden(sampleHTMLMock);
    expect(actual).toEqual(expected);
  });
});


const expected = {
  disp_history: '111213030405',
  search_type: '2',
  search_str: '%89%ba%94n',
  page: '1',
  // kasira1: '',
  // kasira2: '',
  // kasira3: '',
  // line_type: '',
  // station_cd: '',
  busstop_cd: '1710409',
  keito_cd: '612101',
  updown_cd: '2',
  pole_cd: '01',
  mmdd: '07/07',
  folder: '7'
};
