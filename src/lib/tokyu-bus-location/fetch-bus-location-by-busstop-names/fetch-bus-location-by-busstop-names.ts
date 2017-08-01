import { fetchBusstopIds } from '../fetch-busstop-ids/fetch-busstop-ids';

export async function fetchBusLocationByBusstopNames(departure: string, arrival: string) {
  const data = await fetchBusstopIds(departure, arrival);
  return data;
}
