"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.volume = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 33.8140226;
exports.volume = utils_1.default({
    metric: {
        baseUnit: 'l',
        transform: val => RATIO * val,
        units: {
            mm3: {
                name: {
                    singular: 'Cubic Millimeter',
                    plural: 'Cubic Millimeters'
                },
                to_anchor: 1 / 1000000
            },
            cm3: {
                name: {
                    singular: 'Cubic Centimeter',
                    plural: 'Cubic Centimeters'
                },
                to_anchor: 1 / 1000
            },
            ml: {
                name: {
                    singular: 'Millilitre',
                    plural: 'Millilitres'
                },
                to_anchor: 1 / 1000
            },
            cl: {
                name: {
                    singular: 'Centilitre',
                    plural: 'Centilitres'
                },
                to_anchor: 1 / 100
            },
            dl: {
                name: {
                    singular: 'Decilitre',
                    plural: 'Decilitres'
                },
                to_anchor: 1 / 10
            },
            l: {
                name: {
                    singular: 'Litre',
                    plural: 'Litres'
                },
                to_anchor: 1
            },
            kl: {
                name: {
                    singular: 'Kilolitre',
                    plural: 'Kilolitres'
                },
                to_anchor: 1000
            },
            m3: {
                name: {
                    singular: 'Cubic meter',
                    plural: 'Cubic meters'
                },
                to_anchor: 1000
            },
            km3: {
                name: {
                    singular: 'Cubic kilometer',
                    plural: 'Cubic kilometers'
                },
                to_anchor: 1000000000000
            },
            // Swedish units
            krm: {
                name: {
                    singular: 'Matsked',
                    plural: 'Matskedar'
                },
                to_anchor: 1 / 1000
            },
            tsk: {
                name: {
                    singular: 'Tesked',
                    plural: 'Teskedar'
                },
                to_anchor: 5 / 1000
            },
            msk: {
                name: {
                    singular: 'Matsked',
                    plural: 'Matskedar'
                },
                to_anchor: 15 / 1000
            },
            kkp: {
                name: {
                    singular: 'Kaffekopp',
                    plural: 'Kaffekoppar'
                },
                to_anchor: 150 / 1000
            },
            glas: {
                name: {
                    singular: 'Glas',
                    plural: 'Glas'
                },
                to_anchor: 200 / 1000
            },
            kanna: {
                name: {
                    singular: 'Kanna',
                    plural: 'Kannor'
                },
                to_anchor: 2.617
            }
        }
    },
    imperial: {
        baseUnit: 'fl-oz',
        transform: val => val * 1 / RATIO,
        units: {
            tsp: {
                name: {
                    singular: 'Teaspoon',
                    plural: 'Teaspoons'
                },
                to_anchor: 1 / 6
            },
            Tbs: {
                name: {
                    singular: 'Tablespoon',
                    plural: 'Tablespoons'
                },
                to_anchor: 1 / 2
            },
            in3: {
                name: {
                    singular: 'Cubic inch',
                    plural: 'Cubic inches'
                },
                to_anchor: 0.55411
            },
            'fl-oz': {
                name: {
                    singular: 'Fluid Ounce',
                    plural: 'Fluid Ounces'
                },
                to_anchor: 1
            },
            cup: {
                name: {
                    singular: 'Cup',
                    plural: 'Cups'
                },
                to_anchor: 8
            },
            pnt: {
                name: {
                    singular: 'Pint',
                    plural: 'Pints'
                },
                to_anchor: 16
            },
            qt: {
                name: {
                    singular: 'Quart',
                    plural: 'Quarts'
                },
                to_anchor: 32
            },
            gal: {
                name: {
                    singular: 'Gallon',
                    plural: 'Gallons'
                },
                to_anchor: 128
            },
            ft3: {
                name: {
                    singular: 'Cubic foot',
                    plural: 'Cubic feet'
                },
                to_anchor: 957.506
            },
            yd3: {
                name: {
                    singular: 'Cubic yard',
                    plural: 'Cubic yards'
                },
                to_anchor: 25852.7
            }
        }
    }
});
exports.default = exports.volume;
