"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 10.7639;
exports.area = utils_1.default({
    metric: {
        baseUnit: 'm2',
        transform: val => val * RATIO,
        units: {
            mm2: {
                name: {
                    singular: 'Square Millimeter',
                    plural: 'Square Millimeters'
                },
                to_anchor: 1 / 1000000
            },
            cm2: {
                name: {
                    singular: 'Square Centimeter',
                    plural: 'Square Centimeters'
                },
                to_anchor: 1 / 10000
            },
            m2: {
                name: {
                    singular: 'Square Meter',
                    plural: 'Square Meters'
                },
                to_anchor: 1
            },
            ha: {
                name: {
                    singular: 'Hectare',
                    plural: 'Hectares'
                },
                to_anchor: 10000
            },
            km2: {
                name: {
                    singular: 'Square Kilometer',
                    plural: 'Square Kilometers'
                },
                to_anchor: 1000000
            }
        }
    },
    imperial: {
        baseUnit: 'ft2',
        transform: val => val * 1 / RATIO,
        units: {
            in2: {
                name: {
                    singular: 'Square Inch',
                    plural: 'Square Inches'
                },
                to_anchor: 1 / 144
            },
            yd2: {
                name: {
                    singular: 'Square Yard',
                    plural: 'Square Yards'
                },
                to_anchor: 9
            },
            ft2: {
                name: {
                    singular: 'Square Foot',
                    plural: 'Square Feet'
                },
                to_anchor: 1
            },
            ac: {
                name: {
                    singular: 'Acre',
                    plural: 'Acres'
                },
                to_anchor: 43560
            },
            mi2: {
                name: {
                    singular: 'Square Mile',
                    plural: 'Square Miles'
                },
                to_anchor: 27878400
            }
        }
    }
});
exports.default = exports.area;
