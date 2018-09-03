import {_getZones, _getPoints, _getParams} from "../utils/_DATA";

export function getInitialData() {
  return Promise.all([
    _getZones(),
    _getPoints(),
    _getParams()
  ]).then(([zones, points, params]) => ({zones, points, params}))
}