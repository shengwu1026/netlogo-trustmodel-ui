export const RECEIVE_REPORTS = 'RECEIVE_REPORTS';
export const UPDATE_REPORTS = 'UPDATE_REPORTS';

export function receiveReports(reports) {
  return {
    type: RECEIVE_REPORTS,
    reports
  }
}

function updateReports(reports) {
  return {
    type: UPDATE_REPORTS,
    reports
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