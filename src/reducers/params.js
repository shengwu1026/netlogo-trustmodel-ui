import { RECEIVE_PARAMS } from "../actions/params";

export default function params (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PARAMS:
      return {
        ...state,
        ...action.params
      };

    default:
      return state
  }
}