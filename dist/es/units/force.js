import utils from '../utils';
const RATIO = 4.44822;
export const force = utils({
    metric: {
        baseUnit: 'N',
        transform: val => val * 1 / RATIO,
        units: {
            N: {
                name: {
                    singular: 'Newton',
                    plural: 'Newtons'
                },
                to_anchor: 1
            },
            kN: {
                name: {
                    singular: 'Kilonewton',
                    plural: 'Kilonewtons'
                },
                to_anchor: 1000
            }
        }
    },
    imperial: {
        baseUnit: 'lbf',
        transform: val => RATIO * val,
        units: {
            lbf: {
                name: {
                    singular: 'Pound-force',
                    plural: 'Pound-forces'
                },
                to_anchor: 1
            }
        }
    }
});
export default force;
