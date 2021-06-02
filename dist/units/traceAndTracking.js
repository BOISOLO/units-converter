"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceAndTracking = void 0;
const utils_1 = __importDefault(require("../utils"));
exports.traceAndTracking = utils_1.default({
    metric: {
        baseUnit: 'code',
        transform: val => val,
        units: {
            code: {
                name: {
                    singular: 'Code',
                    plural: 'Codes'
                },
                to_anchor: 1 / 1
            }
        }
    }
});
exports.default = exports.traceAndTracking;
