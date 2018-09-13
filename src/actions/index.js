import { getData } from "../api/dashboard";
// import { receiveZones } from "./zones";
import {receiveTurtles} from "./turtles";
import {receiveParams} from "./params";

export function handleData(endPoint) {
  return (dispatch) => {
    return getData(endPoint)
      .then(({params, turtles}) => {
        dispatch(receiveParams(params));
        dispatch(receiveTurtles(turtles));
      })
  }
}