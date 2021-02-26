import utils from '../utils';

const RATIO = 0.3048;

export const pace = utils( {
  metric: {
    baseUnit: 's/m',
    transform: val => val * RATIO,
    units: {
      'min/km': {
        name: {
          singular: 'Minute per kilometre',
          plural: 'Minutes per kilometre'
        },
        to_anchor: 0.06
      },
      's/m': {
        name: {
          singular: 'Second per metre',
          plural: 'Seconds per metre'
        },
        to_anchor: 1
      }
    }
  },

  imperial: {
    baseUnit: 's/ft',
    transform: val => val * 1 / RATIO,
    units: {
      'min/mi': {
        name: {
          singular: 'Minute per mile',
          plural: 'Minutes per mile'
        },
        to_anchor: 0.0113636
      },
      's/ft': {
        name: {
          singular: 'Second per foot',
          plural: 'Seconds per foot'
        },
        to_anchor: 1
      }
    }
  }
} );

export default pace;
