"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.each = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1;
exports.each = utils_1.default({
    metric: {
        baseUnit: 'ea',
        transform: val => RATIO * val,
        units: {
            ea: {
                name: {
                    singular: 'Each',
                    plural: 'Each'
                },
                to_anchor: 1
            },
            dz: {
                name: {
                    singular: 'Dozen',
                    plural: 'Dozens'
                },
                to_anchor: 12
            }
        }
    }
});
exports.default = exports.each;
