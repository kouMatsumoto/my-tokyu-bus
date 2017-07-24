import { fetchBusStopNameSearchHTML } from '../bus-stop-name-search-html/fetch-bus-stop-name-search-html';
import { parseHTMLByAnchor } from '../parse-html-by-anchor/parse-html-by-anchor';
import { fetchPrerequisiteOptions } from '../fetch-prerequisite-options/fetch-prerequisite-options';


export async function searchBusstopByWord(word: string) {
  const prerequisiteOptions = await fetchPrerequisiteOptions();
  const httpResult = await fetchBusStopNameSearchHTML(word, prerequisiteOptions);
  // when busstop not found, result is an empty array [].
  return parseHTMLByAnchor(httpResult.contents);
}
