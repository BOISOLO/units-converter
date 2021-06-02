import utils from '../utils';
const RATIO = 1;
export const power = utils({
    metric: {
        baseUnit: 'W',
        transform: val => val * RATIO,
        units: {
            W: {
                name: {
                    singular: 'Watt',
                    plural: 'Watts'
                },
                to_anchor: 1
            },
            mW: {
                name: {
                    singular: 'Milliwatt',
                    plural: 'Milliwatts'
                },
                to_anchor: 0.001
            },
            kW: {
                name: {
                    singular: 'Kilowatt',
                    plural: 'Kilowatts'
                },
                to_anchor: 1000
            },
            MW: {
                name: {
                    singular: 'Megawatt',
                    plural: 'Megawatts'
                },
                to_anchor: 1000000
            },
            GW: {
                name: {
                    singular: 'Gigawatt',
                    plural: 'Gigawatts'
                },
                to_anchor: 1000000000
            }
        }
    }
});
export default power;
