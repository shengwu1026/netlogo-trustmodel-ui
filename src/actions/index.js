import { getInitialData } from "../api/dashboard";

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
  }
}