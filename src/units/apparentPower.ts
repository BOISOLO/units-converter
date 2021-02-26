
import utils from '../utils';

export const apparentPower = utils( {
  metric: {
    baseUnit: 'VA',
    transform: val => val * 1,
    units: {
      VA: {
        name: {
          singular: 'Volt-Ampere',
          plural: 'Volt-Amperes'
        },
        to_anchor: 1
      },
      mVA: {
        name: {
          singular: 'Millivolt-Ampere',
          plural: 'Millivolt-Amperes'
        },
        to_anchor: 0.001
      },
      kVA: {
        name: {
          singular: 'Kilovolt-Ampere',
          plural: 'Kilovolt-Amperes'
        },
        to_anchor: 1000
      },
      MVA: {
        name: {
          singular: 'Megavolt-Ampere',
          plural: 'Megavolt-Amperes'
        },
        to_anchor: 1000000
      },
      GVA: {
        name: {
          singular: 'Gigavolt-Ampere',
          plural: 'Gigavolt-Amperes'
        },
        to_anchor: 1000000000
      }
    }
  }
} );

export default apparentPower;
