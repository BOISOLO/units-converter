"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.digital = void 0;
const utils_1 = __importDefault(require("../utils"));
const RATIO = 8;
exports.digital = utils_1.default({
    bits: {
        baseUnit: 'b',
        transform: val => val * 1 / RATIO,
        units: {
            b: {
                name: {
                    singular: 'Bit',
                    plural: 'Bits'
                },
                to_anchor: 1
            },
            Kb: {
                name: {
                    singular: 'Kilobit',
                    plural: 'Kilobits'
                },
                to_anchor: 1024
            },
            Mb: {
                name: {
                    singular: 'Megabit',
                    plural: 'Megabits'
                },
                to_anchor: 1048576
            },
            Gb: {
                name: {
                    singular: 'Gigabit',
                    plural: 'Gigabits'
                },
                to_anchor: 1073741824
            },
            Tb: {
                name: {
                    singular: 'Terabit',
                    plural: 'Terabits'
                },
                to_anchor: 1099511627776
            }
        }
    },
    bytes: {
        baseUnit: 'B',
        transform: val => val * RATIO,
        units: {
            B: {
                name: {
                    singular: 'Byte',
                    plural: 'Bytes'
                },
                to_anchor: 1
            },
            KB: {
                name: {
                    singular: 'Kilobyte',
                    plural: 'Kilobytes'
                },
                to_anchor: 1024
            },
            MB: {
                name: {
                    singular: 'Megabyte',
                    plural: 'Megabytes'
                },
                to_anchor: 1048576
            },
            GB: {
                name: {
                    singular: 'Gigabyte',
                    plural: 'Gigabytes'
                },
                to_anchor: 1073741824
            },
            TB: {
                name: {
                    singular: 'Terabyte',
                    plural: 'Terabytes'
                },
                to_anchor: 1099511627776
            }
        }
    }
});
exports.default = exports.digital;
