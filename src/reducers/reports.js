import {RECEIVE_REPORTS} from "../actions/reports";

export default function reports(state = {}, action) {
  switch (action.type) {
    case RECEIVE_REPORTS:
      return {
        ...state,
        ...action.reports
      };

    default:
      return state
  }
}