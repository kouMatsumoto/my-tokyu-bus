import * as expect from 'expect';
import { fetchFolderAndDispValueHTML } from './fetch-folder-and-disp-value-html';
import { useAsync } from '../../../../../spec/helpers/use-async';
import { folderNumberHTMLMock } from './folder-and-disp-value-html.mock';


describe('fetchFolderAndDispValueHTML', () => {
  it('should fetch same length html with mock', useAsync(async () => {
    const httpResult = await fetchFolderAndDispValueHTML();
    const fetchedHTML = httpResult.contents;

    expect(fetchedHTML.length).toBe(folderNumberHTMLMock.length);
  }));
});
