import utils from '../utils';
const RATIO = 10.76391;
export const illuminance = utils({
    metric: {
        baseUnit: 'lx',
        transform: val => val * 1 / RATIO,
        units: {
            lx: {
                name: {
                    singular: 'Lux',
                    plural: 'Lux'
                },
                to_anchor: 1
            }
        }
    },
    imperial: {
        baseUnit: 'ft-cd',
        transform: val => RATIO * val,
        units: {
            'ft-cd': {
                name: {
                    singular: 'Foot-candle',
                    plural: 'Foot-candles'
                },
                to_anchor: 1
            }
        }
    }
});
export default illuminance;
