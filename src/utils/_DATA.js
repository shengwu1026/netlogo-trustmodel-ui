let zones = {
  shockZone1: {
    id: 'shock_zone_1',
    startPosition: 40 * 2,
    endPosition: 50 * 2
  },
  shockZone2: {
    id: 'shock_zone_2',
    startPosition: 250 * 2,
    endPosition: 280 * 2
  },
  reliefZone1: {
    id: 'relief_zone_1',
    startPosition: 20 * 2,
    endPosition: 30 * 2
  },
  reliefZone2: {
    id: 'relief_zone_2',
    startPosition: 100 * 2,
    endPosition: 110 * 2
  }
};

let points = {
  point1: {
    x: 500,
    y: 200
  },
  point2: {
    x: 200,
    y: 100
  },
  point3: {
    x: 1000,
    y: 5
  },
  point4: {
    x: 1000,
    y: 380
  }
};

let params = {
  clientNumber: 20,
  roadSafetyEffectiveness: 5,
  injuryRecovery: 85,
  randomVariation: 0.171,
  recalculateDrift: true,
  driftModifier: 1.01,

  // Recovery Risk Modifiers
  injurySeverity: 0,
  atFaultStatus: 0,
  healthStatus: 0,
  previousInjury: 0,
  employment: 0,
  vulnerableStatus: 0,
  gender: 0,
  age: 0,
  claimDuration: 0,
  injuryClassification: 0,
  education: 0,
  solicitors: 50
};

export function _getZones() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...zones}), 1000)
  })
}

export function _getPoints() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...points}), 1000)
  })
}

export function _getParams() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...params}), 1000)
  })
}

// export function _updateParams(params) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(params)
//     }, 1000)
//   })
// }