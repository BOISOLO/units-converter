"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.current = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.current = utils_1.default({
    metric: {
        baseUnit: 'a',
        transform: val => RATIO * val,
        units: {
            A: {
                name: {
                    singular: 'Ampere',
                    plural: 'Amperes'
                },
                to_anchor: 1
            },
            mA: {
                name: {
                    singular: 'Milliampere',
                    plural: 'Milliamperes'
                },
                to_anchor: 0.001
            },
            kA: {
                name: {
                    singular: 'Kiloampere',
                    plural: 'Kiloamperes'
                },
                to_anchor: 1000
            }
        }
    }
});
exports.default = exports.current;
