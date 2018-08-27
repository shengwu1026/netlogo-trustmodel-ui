import { getInitialData } from "../api/dashboard";
import { receiveZones } from "./zones";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then((zones) => {
        dispatch(receiveZones(zones))
      })
  }
}