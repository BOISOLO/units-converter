"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = void 0;
const utils_1 = __importDefault(require("../utils"));
exports.production = utils_1.default({
    metric: {
        baseUnit: 'un',
        transform: val => val,
        units: {
            un: {
                name: {
                    singular: 'Unit',
                    plural: 'Units'
                },
                to_anchor: 1
            }
        }
    },
    cycle: {
        baseUnit: 'min/un',
        transform: (val) => { return 1 / val; },
        units: {
            'sec/un': {
                name: {
                    singular: 'Second per unit',
                    plural: 'Seconds per unit'
                },
                to_anchor: 1 / 60
            },
            'min/un': {
                name: {
                    singular: 'Minute per unit',
                    plural: 'Minutes per unit'
                },
                to_anchor: 1
            },
            'hour/un': {
                name: {
                    singular: 'Hour per unit',
                    plural: 'Hours per unit'
                },
                to_anchor: 60
            }
        }
    },
    capacity: {
        baseUnit: 'un/min',
        transform: (val) => { return 1 / val; },
        units: {
            'un/sec': {
                name: {
                    singular: 'Unit per Second',
                    plural: 'Units per Second'
                },
                to_anchor: 60
            },
            'un/min': {
                name: {
                    singular: 'Unit per Minute',
                    plural: 'Units per Minute'
                },
                to_anchor: 1
            },
            'un/hour': {
                name: {
                    singular: 'Unit per Hour',
                    plural: 'Units per Hour'
                },
                to_anchor: 1 / 60
            }
        }
    }
});
exports.default = exports.production;
