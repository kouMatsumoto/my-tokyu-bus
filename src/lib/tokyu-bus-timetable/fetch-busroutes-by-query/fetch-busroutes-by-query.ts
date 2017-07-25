import { parseHTMLByAnchor } from '../parse-html-by-anchor/parse-html-by-anchor';
import { fetchBusRoutesSelectHTML } from './bus-routes-select-html/fetch-bus-routes-select-html';
import { getDestinationFromBusroute } from './get-destination-from-busroute/get-destination-from-busroute';


interface FetchedBusrouteData {
  name: string;
  queryString: string;
  destination: string;
}


export async function fetchBusroutesByQuery(queryString: string): Promise<FetchedBusrouteData[]> {
  const httpResult = await fetchBusRoutesSelectHTML(queryString);
  // when bus-routes not found, result is an empty array [].
  const busroutesData = parseHTMLByAnchor(httpResult.contents);

  return busroutesData.map((data) => {
    return {
      ...data,
      destination: getDestinationFromBusroute(data.name)
    };
  });
}
