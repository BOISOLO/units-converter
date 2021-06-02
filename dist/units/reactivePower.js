"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactivePower = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.reactivePower = utils_1.default({
    metric: {
        baseUnit: 'VAR',
        transform: val => val * RATIO,
        units: {
            VAR: {
                name: {
                    singular: 'Volt-Ampere Reactive',
                    plural: 'Volt-Amperes Reactive'
                },
                to_anchor: 1
            },
            mVAR: {
                name: {
                    singular: 'Millivolt-Ampere Reactive',
                    plural: 'Millivolt-Amperes Reactive'
                },
                to_anchor: 0.001
            },
            kVAR: {
                name: {
                    singular: 'Kilovolt-Ampere Reactive',
                    plural: 'Kilovolt-Amperes Reactive'
                },
                to_anchor: 1000
            },
            MVAR: {
                name: {
                    singular: 'Megavolt-Ampere Reactive',
                    plural: 'Megavolt-Amperes Reactive'
                },
                to_anchor: 1000000
            },
            GVAR: {
                name: {
                    singular: 'Gigavolt-Ampere Reactive',
                    plural: 'Gigavolt-Amperes Reactive'
                },
                to_anchor: 1000000000
            }
        }
    }
});
exports.default = exports.reactivePower;
