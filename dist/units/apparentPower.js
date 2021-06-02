"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apparentPower = void 0;
const utils_1 = __importDefault(require("../utils"));
exports.apparentPower = utils_1.default({
    metric: {
        baseUnit: 'VA',
        transform: val => val * 1,
        units: {
            VA: {
                name: {
                    singular: 'Volt-Ampere',
                    plural: 'Volt-Amperes'
                },
                to_anchor: 1
            },
            mVA: {
                name: {
                    singular: 'Millivolt-Ampere',
                    plural: 'Millivolt-Amperes'
                },
                to_anchor: 0.001
            },
            kVA: {
                name: {
                    singular: 'Kilovolt-Ampere',
                    plural: 'Kilovolt-Amperes'
                },
                to_anchor: 1000
            },
            MVA: {
                name: {
                    singular: 'Megavolt-Ampere',
                    plural: 'Megavolt-Amperes'
                },
                to_anchor: 1000000
            },
            GVA: {
                name: {
                    singular: 'Gigavolt-Ampere',
                    plural: 'Gigavolt-Amperes'
                },
                to_anchor: 1000000000
            }
        }
    }
});
exports.default = exports.apparentPower;
