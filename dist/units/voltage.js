"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voltage = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.voltage = utils_1.default({
    metric: {
        baseUnit: 'V',
        transform: val => val * RATIO,
        units: {
            V: {
                name: {
                    singular: 'Volt',
                    plural: 'Volts'
                },
                to_anchor: 1
            },
            mV: {
                name: {
                    singular: 'Millivolt',
                    plural: 'Millivolts'
                },
                to_anchor: 0.001
            },
            kV: {
                name: {
                    singular: 'Kilovolt',
                    plural: 'Kilovolts'
                },
                to_anchor: 1000
            }
        }
    }
});
exports.default = exports.voltage;
