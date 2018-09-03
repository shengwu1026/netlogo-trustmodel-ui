export const RECEIVE_POINTS = 'RECEIVE_POINTS';

export function receivePoints (points) {
  return {
    type: RECEIVE_POINTS,
    points
  }
}