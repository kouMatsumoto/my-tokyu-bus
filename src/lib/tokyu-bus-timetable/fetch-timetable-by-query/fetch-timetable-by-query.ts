import { fetchFinalQueryHTML } from './final-query-html/fetch-final-query-html';
import { parseFinalQueryHTML } from './final-query-html/parse-final-query-html';
import { fetchTimetableHTML } from './timetable-html/fetch-timetable-html';
import { parseTimetableHtml } from './timetable-html/parse-timetable-html';


export async function fetchTimetableByQuery(queryString: string) {
  const httpResultOfFinalQuery = await fetchFinalQueryHTML(queryString);
  // will throw an error when the fetched html is unexpected.
  const queryObj = parseFinalQueryHTML(httpResultOfFinalQuery.contents);

  const httpResultOfTimetable = await fetchTimetableHTML(queryObj);
  // such as above, will throw an error when the fetched html is unexpected.
  return parseTimetableHtml(httpResultOfTimetable.contents);
}
