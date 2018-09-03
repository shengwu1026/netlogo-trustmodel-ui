import {_getZones, _getPoints} from "../utils/_DATA";

export function getInitialData() {
  return Promise.all([
    _getZones(),
    _getPoints()
  ]).then(([zones, points]) => ({zones, points}))
}