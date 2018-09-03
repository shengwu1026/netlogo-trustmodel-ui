import { getInitialData } from "../api/dashboard";
import { receiveZones } from "./zones";
import {receivePoints} from "./points";
import {receiveParams} from "./params";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({zones, points, params}) => {
        dispatch(receiveZones(zones));
        dispatch(receivePoints(points));
        dispatch(receiveParams(params))
      })
  }
}