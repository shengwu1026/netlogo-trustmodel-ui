import { getInitialData } from "../api/dashboard";
import { receiveZones } from "./zones";
import {receivePoints} from "./points";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({zones, points}) => {
        dispatch(receiveZones(zones));
        dispatch(receivePoints(points))
      })
  }
}