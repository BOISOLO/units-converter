import utils from '../utils'

export const traceAndTracking = utils({
  metric: {
    baseUnit: 'code',
    transform: val => 1,
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
