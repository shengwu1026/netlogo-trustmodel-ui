import { _getZones } from "../utils/_DATA";

// function formatZones ( zones ) {
//   console.log(zones);
//   return Object.keys( zones )
//     .reduce( ( formattedZones, id ) => {
//       const zone = zones[id];
//       formattedZones[id] = {
//         ...zone
//       };
//       console.log(formattedZones);
//       return formattedZones
//     }, {})
// }

export function getInitialData () {
  return Promise.resolve(
    _getZones()
  ).then((zones) => (zones))
}