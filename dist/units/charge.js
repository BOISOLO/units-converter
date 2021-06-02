"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.charge = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.charge = utils_1.default({
    metric: {
        baseUnit: 'c',
        transform: val => RATIO * val,
        units: {
            c: {
                name: {
                    singular: 'Coulomb',
                    plural: 'Coulombs'
                },
                to_anchor: 1
            },
            mC: {
                name: {
                    singular: 'Millicoulomb',
                    plural: 'Millicoulombs'
                },
                to_anchor: 1 / 1000
            },
            μC: {
                name: {
                    singular: 'Microcoulomb',
                    plural: 'Microcoulombs'
                },
                to_anchor: 1 / 1000000
            },
            nC: {
                name: {
                    singular: 'Nanocoulomb',
                    plural: 'Nanocoulombs'
                },
                to_anchor: 1e-9
            },
            pC: {
                name: {
                    singular: 'Picocoulomb',
                    plural: 'Picocoulombs'
                },
                to_anchor: 1e-12
            }
        }
    }
});
exports.default = exports.charge;
