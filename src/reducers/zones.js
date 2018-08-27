import { RECEIVE_ZONES } from "../actions/zones";

export default function zones (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ZONES:
      return {
        ...state,
        ...action.zones
      };
      
    default:
      return state
  }
}