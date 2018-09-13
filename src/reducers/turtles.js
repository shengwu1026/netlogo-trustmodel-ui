import {RECEIVE_TURTLES} from "../actions/turtles";

export default function points(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TURTLES:
      return {
        ...state,
        ...action.turtles
      };

    default:
      return state
  }
}