"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactiveEnergy = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.reactiveEnergy = utils_1.default({
    metric: {
        baseUnit: 'VARh',
        transform: val => val * RATIO,
        units: {
            VARh: {
                name: {
                    singular: 'Volt-Ampere Reactive Hour',
                    plural: 'Volt-Amperes Reactive Hour'
                },
                to_anchor: 1
            },
            mVARh: {
                name: {
                    singular: 'Millivolt-Ampere Reactive Hour',
                    plural: 'Millivolt-Amperes Reactive Hour'
                },
                to_anchor: 0.001
            },
            kVARh: {
                name: {
                    singular: 'Kilovolt-Ampere Reactive Hour',
                    plural: 'Kilovolt-Amperes Reactive Hour'
                },
                to_anchor: 1000
            },
            MVARh: {
                name: {
                    singular: 'Megavolt-Ampere Reactive Hour',
                    plural: 'Megavolt-Amperes Reactive Hour'
                },
                to_anchor: 1000000
            },
            GVARh: {
                name: {
                    singular: 'Gigavolt-Ampere Reactive Hour',
                    plural: 'Gigavolt-Amperes Reactive Hour'
                },
                to_anchor: 1000000000
            }
        }
    }
});
exports.default = exports.reactiveEnergy;
