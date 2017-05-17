import { TokyuBusInformation } from '../types/index';


export function getMessageFromInformation(information: TokyuBusInformation): string {
  return `Next bus is ${information.waitingTime} minutes away`;
}
