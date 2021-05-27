import utils from '../utils'

export const traceAndTracking = utils({
  metric: {
    baseUnit: 'code',
    transform: val => val,
    units: {
      code: {
        name: {
          singular: 'Code',
          plural: 'Codes'
        },
        to_anchor: 1 / 1
      }
    }
  }
})

export default traceAndTracking
