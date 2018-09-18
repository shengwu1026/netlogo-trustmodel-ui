import {getData} from "../utils/api";
import {receivePlots} from "./plots";
import {receiveView} from "./view";
import {receiveReports} from "./reports";

export function handleData() {
  return (dispatch) => {
    return getData()
      .then(({reports, view, plots}) => {
        dispatch(receiveReports(reports));
        dispatch(receiveView(view));
        dispatch(receivePlots(plots));
      })
  }
}