"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.speed = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 1.609344;
exports.speed = utils_1.default({
    metric: {
        baseUnit: 'N',
        transform: val => val * 1 / RATIO,
        units: {
            'm/s': {
                name: {
                    singular: 'Metre per second',
                    plural: 'Metres per second'
                },
                to_anchor: 3.6
            },
            'km/h': {
                name: {
                    singular: 'Kilometre per hour',
                    plural: 'Kilometres per hour'
                },
                to_anchor: 1
            }
        }
    },
    imperial: {
        baseUnit: 'm/h',
        transform: val => val * RATIO,
        units: {
            'm/h': {
                name: {
                    singular: 'Mile per hour',
                    plural: 'Miles per hour'
                },
                to_anchor: 1
            },
            knot: {
                name: {
                    singular: 'Knot',
                    plural: 'Knots'
                },
                to_anchor: 1.150779
            },
            'ft/s': {
                name: {
                    singular: 'Foot per second',
                    plural: 'Feet per second'
                },
                to_anchor: 0.681818
            }
        }
    }
});
exports.default = exports.speed;
