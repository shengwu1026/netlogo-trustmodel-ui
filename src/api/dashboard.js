import {_getZones, _getPoints, _getParams, _updateParams} from "../utils/_DATA";
import {isObject} from "../utils/helpers";

export function getInitialData() {
  return Promise.all([
    _getZones(),
    _getPoints(),
    _getParams()
  ]).then(([zones, points, params]) => ({zones, points, params}))
}

// export function updateParams(params) {
//   return _updateParams(params)
//     .then((p) => flattenPoll(p))
// }