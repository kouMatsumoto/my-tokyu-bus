import * as expect from 'expect';
import { searchBusstopByWord } from './search-busstops-by-word';
import { useAsync } from '../../../spec/helpers/use-async';


describe('searchBusstopByWord', () => {
  it('should fetch value properly', useAsync(async () => {
    const searchWord = '下馬';
    const actual = await searchBusstopByWord(searchWord);
    expect(actual[0].name).toBe('下馬一丁目');
  }));
});
