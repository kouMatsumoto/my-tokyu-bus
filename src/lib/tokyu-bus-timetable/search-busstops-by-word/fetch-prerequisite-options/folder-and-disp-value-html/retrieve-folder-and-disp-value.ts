import { fetchFolderAndDispValueHTML } from './fetch-folder-and-disp-value-html';
import { parseHTMLByInputHidden } from '../../../parse-html-by-input-hidden/parse-html-by-input-hidden';


interface FolderAndDispValue {
  folder: string;
  disp_history: string;
}


/**
 * retrieve folder and disp_history values by fetching html and parsing it.
 */
export async function retrieveFolderAndDispValue(): Promise<FolderAndDispValue> {
  const httpResult = await fetchFolderAndDispValueHTML();
  return <FolderAndDispValue><any>parseHTMLByInputHidden(httpResult.contents);
}
