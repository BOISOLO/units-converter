import utils from '../utils.js';

export const acceleration = utils( {
  metric: {
    baseUnit: 'g-force',
    transform: val => val * 1,
    units: {
      'g-force': {
        name: {
          singular: 'g-force',
          plural: 'g-forces'
        },
        to_anchor: 9.80665
      },
      'm/s2': {
        name: {
          singular: 'Metre per second squared',
          plural: 'Metres per second squared'
        },
        to_anchor: 1
      }
    }
  }
} );

export default acceleration;
