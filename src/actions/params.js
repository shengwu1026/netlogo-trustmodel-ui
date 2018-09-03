export const RECEIVE_PARAMS = 'RECEIVE_PARAMS';

export function receiveParams (params) {
  return {
    type: RECEIVE_PARAMS,
    params
  }
}