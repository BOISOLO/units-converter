import utils from '../utils';
const RATIO = 1;
export const current = utils({
    metric: {
        baseUnit: 'a',
        transform: val => RATIO * val,
        units: {
            A: {
                name: {
                    singular: 'Ampere',
                    plural: 'Amperes'
                },
                to_anchor: 1
            },
            mA: {
                name: {
                    singular: 'Milliampere',
                    plural: 'Milliamperes'
                },
                to_anchor: 0.001
            },
            kA: {
                name: {
                    singular: 'Kiloampere',
                    plural: 'Kiloamperes'
                },
                to_anchor: 1000
            }
        }
    }
});
export default current;
