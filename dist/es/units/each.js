import utils from '../utils';
const RATIO = 1;
export const each = utils({
    metric: {
        baseUnit: 'ea',
        transform: val => RATIO * val,
        units: {
            ea: {
                name: {
                    singular: 'Each',
                    plural: 'Each'
                },
                to_anchor: 1
            },
            dz: {
                name: {
                    singular: 'Dozen',
                    plural: 'Dozens'
                },
                to_anchor: 12
            }
        }
    }
});
export default each;
