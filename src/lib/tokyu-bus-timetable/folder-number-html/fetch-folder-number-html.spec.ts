import { fetchFolderNumberHTML } from './fetch-folder-number-html';
import { useAsync } from '../../../../spec/support/helpers/use-async';
import { folderNumberHTMLMock } from './folder-number-html.mock';


describe('getFolderNumber', () => {
  it('should fetch same length html with mock', useAsync(async () => {
    const httpResult = await fetchFolderNumberHTML();
    const fetchedHTML = httpResult.contents;

    expect(fetchedHTML.length).toBe(folderNumberHTMLMock.length);
  }));
});
