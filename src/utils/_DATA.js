let zones = {
  shockZone1: {
    id: 'shock_zone_1',
    startPosition: 40,
    endPosition: 50
  },
  shockZone2: {
    id: 'shock_zone_2',
    startPosition: 250,
    endPosition: 280
  },
  reliefZone1: {
    id: 'relief_zone_1',
    startPosition: 20,
    endPosition: 30
  },
  reliefZone2: {
    id: 'relief_zone_2',
    startPosition: 100,
    endPosition: 110
  }
};

export function _getZones () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...zones}), 1000)
  })
}