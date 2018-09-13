export const RECEIVE_TURTLES = 'RECEIVE_TURTLES';

export function receiveTurtles (turtles) {
  return {
    type: RECEIVE_TURTLES,
    turtles
  }
}