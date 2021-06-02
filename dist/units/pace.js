"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pace = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 0.3048;
exports.pace = utils_1.default({
    metric: {
        baseUnit: 's/m',
        transform: val => val * RATIO,
        units: {
            'min/km': {
                name: {
                    singular: 'Minute per kilometre',
                    plural: 'Minutes per kilometre'
                },
                to_anchor: 0.06
            },
            's/m': {
                name: {
                    singular: 'Second per metre',
                    plural: 'Seconds per metre'
                },
                to_anchor: 1
            }
        }
    },
    imperial: {
        baseUnit: 's/ft',
        transform: val => val * 1 / RATIO,
        units: {
            'min/mi': {
                name: {
                    singular: 'Minute per mile',
                    plural: 'Minutes per mile'
                },
                to_anchor: 0.0113636
            },
            's/ft': {
                name: {
                    singular: 'Second per foot',
                    plural: 'Seconds per foot'
                },
                to_anchor: 1
            }
        }
    }
});
exports.default = exports.pace;
