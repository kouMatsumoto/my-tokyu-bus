import { fetchBusstopIds } from '../fetch-busstop-ids/fetch-busstop-ids';
import { fetchBusLocation } from '../fetch-bus-location/fetch-bus-location';
import { BusLocationData } from '../../../types/bus-location-data';

export async function fetchBusLocationByBusstopNames(departure: string, arrival: string): Promise<BusLocationData[]> {
  const data = await fetchBusstopIds(departure, arrival);

  // validate fetched data
  if (data.departures.length === 0) {
    throw new Error('departure busstop is not found');
  }
  if (data.arrivals.length === 0) {
    throw new Error('arrival busstop is not found');
  }

  const departureId = data.departures[0].value;
  const arrivalId = data.arrivals[0].value;

  return await fetchBusLocation(departureId, arrivalId);
}
