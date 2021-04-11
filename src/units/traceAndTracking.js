import utils from '../utils.js'

const traceAndTracking = {
  metric: {
    baseUnit: 'code',
    transform: (val) => { return null },
    'code': {
      name: {
        singular: 'Code',
        plural: 'Codes'
      },
      to_anchor: 1 / 1
    }
  }
}

export default utils(traceAndTracking)
