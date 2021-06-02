"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.force = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 4.44822;
exports.force = utils_1.default({
    metric: {
        baseUnit: 'N',
        transform: val => val * 1 / RATIO,
        units: {
            N: {
                name: {
                    singular: 'Newton',
                    plural: 'Newtons'
                },
                to_anchor: 1
            },
            kN: {
                name: {
                    singular: 'Kilonewton',
                    plural: 'Kilonewtons'
                },
                to_anchor: 1000
            }
        }
    },
    imperial: {
        baseUnit: 'lbf',
        transform: val => RATIO * val,
        units: {
            lbf: {
                name: {
                    singular: 'Pound-force',
                    plural: 'Pound-forces'
                },
                to_anchor: 1
            }
        }
    }
});
exports.default = exports.force;
