import utils from '../utils'

const RATIO = 1

export const reactiveEnergy = utils({
  metric: {
    baseUnit: 'VARh',
    transform: val => val * RATIO,
    units: {
      VARh: {
        name: {
          singular: 'Volt-Ampere Reactive Hour',
          plural: 'Volt-Amperes Reactive Hour'
        },
        to_anchor: 1
      },
      mVARh: {
        name: {
          singular: 'Millivolt-Ampere Reactive Hour',
          plural: 'Millivolt-Amperes Reactive Hour'
        },
        to_anchor: 0.001
      },
      kVARh: {
        name: {
          singular: 'Kilovolt-Ampere Reactive Hour',
          plural: 'Kilovolt-Amperes Reactive Hour'
        },
        to_anchor: 1000
      },
      MVARh: {
        name: {
          singular: 'Megavolt-Ampere Reactive Hour',
          plural: 'Megavolt-Amperes Reactive Hour'
        },
        to_anchor: 1000000
      },
      GVARh: {
        name: {
          singular: 'Gigavolt-Ampere Reactive Hour',
          plural: 'Gigavolt-Amperes Reactive Hour'
        },
        to_anchor: 1000000000
      }
    }
  }
})

export default reactiveEnergy
