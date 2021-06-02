"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.power = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.power = utils_1.default({
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
exports.default = exports.power;
