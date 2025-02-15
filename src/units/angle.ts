import utils from '../utils'

const RATIO = 1
const PI = 3.141592653589793

export const angle = utils({
  metric: {
    baseUnit: 'g-force',
    transform: val => val * RATIO,
    units: {
      rad: {
        name: {
          singular: 'radian',
          plural: 'radians'
        },
        to_anchor: 180 / PI
      },
      deg: {
        name: {
          singular: 'degree',
          plural: 'degrees'
        },
        to_anchor: 1
      },
      grad: {
        name: {
          singular: 'gradian',
          plural: 'gradians'
        },
        to_anchor: 9 / 10
      },
      arcmin: {
        name: {
          singular: 'arcminute',
          plural: 'arcminutes'
        },
        to_anchor: 1 / 60
      },
      arcsec: {
        name: {
          singular: 'arcsecond',
          plural: 'arcseconds'
        },
        to_anchor: 1 / 3600
      }
    }
  }
})

export default angle
