"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
const daysInYear = 365.25;
exports.time = utils_1.default({
    metric: {
        baseUnit: 's',
        transform: val => val * RATIO,
        units: {
            ns: {
                name: {
                    singular: 'Nanosecond',
                    plural: 'Nanoseconds'
                },
                to_anchor: 1 / 1000000000
            },
            mu: {
                name: {
                    singular: 'Microsecond',
                    plural: 'Microseconds'
                },
                to_anchor: 1 / 1000000
            },
            ms: {
                name: {
                    singular: 'Millisecond',
                    plural: 'Milliseconds'
                },
                to_anchor: 1 / 1000
            },
            s: {
                name: {
                    singular: 'Second',
                    plural: 'Seconds'
                },
                to_anchor: 1
            },
            min: {
                name: {
                    singular: 'Minute',
                    plural: 'Minutes'
                },
                to_anchor: 60
            },
            h: {
                name: {
                    singular: 'Hour',
                    plural: 'Hours'
                },
                to_anchor: 60 * 60
            },
            d: {
                name: {
                    singular: 'Day',
                    plural: 'Days'
                },
                to_anchor: 60 * 60 * 24
            },
            week: {
                name: {
                    singular: 'Week',
                    plural: 'Weeks'
                },
                to_anchor: 60 * 60 * 24 * 7
            },
            month: {
                name: {
                    singular: 'Month',
                    plural: 'Months'
                },
                to_anchor: 60 * 60 * 24 * daysInYear / 12
            },
            year: {
                name: {
                    singular: 'Year',
                    plural: 'Years'
                },
                to_anchor: 60 * 60 * 24 * daysInYear
            }
        }
    }
});
exports.default = exports.time;
