import utils from '../utils'

const RATIO = 1
const PI = 3.141592653589793

export const frequency = utils({
  metric: {
    baseUnit: 'Hz',
    transform: val => RATIO * val,
    units: {
      mHz: {
        name: {
          singular: 'millihertz',
          plural: 'millihertz'
        },
        to_anchor: 1 / 1000
      },
      Hz: {
        name: {
          singular: 'hertz',
          plural: 'hertz'
        },
        to_anchor: 1
      },
      kHz: {
        name: {
          singular: 'kilohertz',
          plural: 'kilohertz'
        },
        to_anchor: 1000
      },
      MHz: {
        name: {
          singular: 'megahertz',
          plural: 'megahertz'
        },
        to_anchor: 1000 * 1000
      },
      GHz: {
        name: {
          singular: 'gigahertz',
          plural: 'gigahertz'
        },
        to_anchor: 1000 * 1000 * 1000
      },
      THz: {
        name: {
          singular: 'terahertz',
          plural: 'terahertz'
        },
        to_anchor: 1000 * 1000 * 1000 * 1000
      },
      rpm: {
        name: {
          singular: 'rotation per minute',
          plural: 'rotations per minute'
        },
        to_anchor: 1 / 60
      },
      'deg/s': {
        name: {
          singular: 'degree per second',
          plural: 'degrees per second'
        },
        to_anchor: 1 / 360
      },
      'rad/s': {
        name: {
          singular: 'radian per second',
          plural: 'radians per second'
        },
        to_anchor: 1 / (PI * 2)
      }
    }
  }
})

export default frequency
