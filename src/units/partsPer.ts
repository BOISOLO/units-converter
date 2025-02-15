import utils from '../utils'

const RATIO = 0.000001

export const partsPer = utils({
  metric: {
    baseUnit: 'ppm',
    transform: val => val * RATIO,
    units: {
      ppm: {
        name: {
          singular: 'Part-per Million',
          plural: 'Parts-per Million'
        },
        to_anchor: 1
      },
      ppb: {
        name: {
          singular: 'Part-per Billion',
          plural: 'Parts-per Billion'
        },
        to_anchor: 0.001
      },
      ppt: {
        name: {
          singular: 'Part-per Trillion',
          plural: 'Parts-per Trillion'
        },
        to_anchor: 0.000001
      },
      ppq: {
        name: {
          singular: 'Part-per Quadrillion',
          plural: 'Parts-per Quadrillion'
        },
        to_anchor: 0.000000001
      }
    }
  }
})

export default partsPer
