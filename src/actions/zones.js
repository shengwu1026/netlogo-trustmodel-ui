export const RECEIVE_ZONES = 'RECEIVE_ZONES';

export function receiveZones ( zones) {
  return {
    type: RECEIVE_ZONES,
    zones
  }
}