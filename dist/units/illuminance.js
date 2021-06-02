"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.illuminance = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 10.76391;
exports.illuminance = utils_1.default({
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
exports.default = exports.illuminance;
