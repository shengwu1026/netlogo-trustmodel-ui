export const RECEIVE_PARAMS = 'RECEIVE_PARAMS';
export const UPDATE_PARAMS = 'UPDATE_PARAMS';

export function receiveParams (params) {
  return {
    type: RECEIVE_PARAMS,
    params
  }
}

function updateParams(params) {
  return {
    type: UPDATE_PARAMS,
    params
  }
}

// export function handleUpdateparams (params) {
//   return (dispatch, getState) => {
//     const { authedUser } = getState()
//
//     return savePoll({
//       ...poll,
//       author: authedUser
//     })
//       .then((poll) => dispatch(addPoll(poll)))
//   }
// }