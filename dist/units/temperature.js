"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.temperature = void 0;
const utils_1 = __importDefault(require("../utils"));
exports.temperature = utils_1.default({
    metric: {
        baseUnit: 'C',
        transform: val => val / (5 / 9) + 32,
        units: {
            C: {
                name: {
                    singular: 'degree Celsius',
                    plural: 'degrees Celsius'
                },
                to_anchor: 1,
                anchor_shift: 0
            },
            K: {
                name: {
                    singular: 'degree Kelvin',
                    plural: 'degrees Kelvin'
                },
                to_anchor: 1,
                anchor_shift: 273.15
            }
        }
    },
    imperial: {
        baseUnit: 'F',
        transform: val => (val - 32) * (5 / 9),
        units: {
            F: {
                name: {
                    singular: 'degree Fahrenheit',
                    plural: 'degrees Fahrenheit'
                },
                to_anchor: 1
            },
            R: {
                name: {
                    singular: 'degree Rankine',
                    plural: 'degrees Rankine'
                },
                to_anchor: 1,
                anchor_shift: 459.67
            }
        }
    }
});
exports.default = exports.temperature;
