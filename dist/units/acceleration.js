"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceleration = void 0;
const utils_1 = __importDefault(require("../utils"));
exports.acceleration = utils_1.default({
    metric: {
        baseUnit: 'g-force',
        transform: val => val * 1,
        units: {
            'g-force': {
                name: {
                    singular: 'g-force',
                    plural: 'g-forces'
                },
                to_anchor: 9.80665
            },
            'm/s2': {
                name: {
                    singular: 'Metre per second squared',
                    plural: 'Metres per second squared'
                },
                to_anchor: 1
            }
        }
    }
});
exports.default = exports.acceleration;
