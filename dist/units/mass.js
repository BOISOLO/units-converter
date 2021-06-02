"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mass = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 453.592;
exports.mass = utils_1.default({
    metric: {
        baseUnit: 'g',
        transform: val => val * 1 / RATIO,
        units: {
            mcg: {
                name: {
                    singular: 'Microgram',
                    plural: 'Micrograms'
                },
                to_anchor: 1 / 1000000
            },
            mg: {
                name: {
                    singular: 'Milligram',
                    plural: 'Milligrams'
                },
                to_anchor: 1 / 1000
            },
            g: {
                name: {
                    singular: 'Gram',
                    plural: 'Grams'
                },
                to_anchor: 1
            },
            kg: {
                name: {
                    singular: 'Kilogram',
                    plural: 'Kilograms'
                },
                to_anchor: 1000
            },
            mt: {
                name: {
                    singular: 'Metric Tonne',
                    plural: 'Metric Tonnes'
                },
                to_anchor: 1000000
            }
        }
    },
    imperial: {
        baseUnit: 'lb',
        transform: val => val * RATIO,
        units: {
            oz: {
                name: {
                    singular: 'Ounce',
                    plural: 'Ounces'
                },
                to_anchor: 1 / 16
            },
            lb: {
                name: {
                    singular: 'Pound',
                    plural: 'Pounds'
                },
                to_anchor: 1
            },
            t: {
                name: {
                    singular: 'Ton',
                    plural: 'Tons'
                },
                to_anchor: 2000
            }
        }
    }
});
exports.default = exports.mass;
