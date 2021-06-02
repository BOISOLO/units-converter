"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.energy = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.energy = utils_1.default({
    metric: {
        baseUnit: 'J',
        transform: val => RATIO * val,
        units: {
            Wh: {
                name: {
                    singular: 'Watt-hour',
                    plural: 'Watt-hours'
                },
                to_anchor: 3600
            },
            mWh: {
                name: {
                    singular: 'Milliwatt-hour',
                    plural: 'Milliwatt-hours'
                },
                to_anchor: 3.6
            },
            kWh: {
                name: {
                    singular: 'Kilowatt-hour',
                    plural: 'Kilowatt-hours'
                },
                to_anchor: 3600000
            },
            MWh: {
                name: {
                    singular: 'Megawatt-hour',
                    plural: 'Megawatt-hours'
                },
                to_anchor: 3600000000
            },
            GWh: {
                name: {
                    singular: 'Gigawatt-hour',
                    plural: 'Gigawatt-hours'
                },
                to_anchor: 3600000000000
            },
            J: {
                name: {
                    singular: 'Joule',
                    plural: 'Joules'
                },
                to_anchor: 1
            },
            kJ: {
                name: {
                    singular: 'Kilojoule',
                    plural: 'Kilojoules'
                },
                to_anchor: 1000
            }
        }
    }
});
exports.default = exports.energy;
