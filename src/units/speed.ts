import utils from '../utils'

const RATIO = 1.609344

export const speed = utils({
  metric: {
    baseUnit: 'N',
    transform: val => val * 1 / RATIO,
    units: {
      'm/s': {
        name: {
          singular: 'Metre per second',
          plural: 'Metres per second'
        },
        to_anchor: 3.6
      },
      'km/h': {
        name: {
          singular: 'Kilometre per hour',
          plural: 'Kilometres per hour'
        },
        to_anchor: 1
      }
    }
  },

  imperial: {
    baseUnit: 'm/h',
    transform: val => val * RATIO,
    units: {
      'm/h': {
        name: {
          singular: 'Mile per hour',
          plural: 'Miles per hour'
        },
        to_anchor: 1
      },
      knot: {
        name: {
          singular: 'Knot',
          plural: 'Knots'
        },
        to_anchor: 1.150779
      },
      'ft/s': {
        name: {
          singular: 'Foot per second',
          plural: 'Feet per second'
        },
        to_anchor: 0.681818
      }
    }
  }
})

export default speed
