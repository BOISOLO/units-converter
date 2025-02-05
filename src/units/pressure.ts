import utils from '../utils'

const RATIO = 0.00014503768078

export const pressure = utils({
  metric: {
    baseUnit: 'kPa',
    transform: val => val * RATIO,
    units: {
      Pa: {
        name: {
          singular: 'pascal',
          plural: 'pascals'
        },
        to_anchor: 1 / 1000
      },
      kPa: {
        name: {
          singular: 'kilopascal',
          plural: 'kilopascals'
        },
        to_anchor: 1
      },
      MPa: {
        name: {
          singular: 'megapascal',
          plural: 'megapascals'
        },
        to_anchor: 1000
      },
      hPa: {
        name: {
          singular: 'hectopascal',
          plural: 'hectopascals'
        },
        to_anchor: 1 / 10
      },
      bar: {
        name: {
          singular: 'bar',
          plural: 'bar'
        },
        to_anchor: 100
      },
      torr: {
        name: {
          singular: 'torr',
          plural: 'torr'
        },
        to_anchor: 101325 / 760000
      }
    }
  },

  imperial: {
    baseUnit: 'psi',
    transform: val => val * 1 / RATIO,
    units: {
      psi: {
        name: {
          singular: 'pound per square inch',
          plural: 'pounds per square inch'
        },
        to_anchor: 1 / 1000
      },
      ksi: {
        name: {
          singular: 'kilopound per square inch',
          plural: 'kilopound per square inch'
        },
        to_anchor: 1
      }
    }
  }
})

export default pressure
