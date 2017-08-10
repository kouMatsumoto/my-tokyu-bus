import { fetchBusLocationHTML } from './fetch-bus-location-html/fetch-bus-location-html';
import { parseBusLocationHTML } from './parse-bus-location-html/parse-bus-location-html';
import { BusLocationData } from '../../../types/bus-location-data';

export async function fetchBusLocation(departureId: string, arrivalId: string): Promise<BusLocationData[]> {
  const html = await fetchBusLocationHTML(departureId, arrivalId);
  return parseBusLocationHTML(html);
}
