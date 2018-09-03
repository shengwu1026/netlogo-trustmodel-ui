import { RECEIVE_POINTS } from "../actions/points";

export default function points (state = {}, action) {
  switch (action.type) {
    case RECEIVE_POINTS:
      return {
        ...state,
        ...action.points
      };

    default:
      return state
  }
}