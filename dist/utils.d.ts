declare type UnitDefSytem = 'metric' | string;
interface Unit {
    readonly name: {
        singular: string;
        plural: string;
    };
    readonly to_anchor: number;
    readonly anchor_shift?: number;
}
export interface UnitFinderOptions {
    readonly exclude: Array<any>;
    readonly cutOffNumber: number;
}
interface DefinitionUnits {
    readonly [unit: string]: Unit;
}
export interface Definition {
    readonly baseUnit: string;
    readonly transform: (val: number) => number;
    readonly units: DefinitionUnits;
}
export declare type Definitions = {
    readonly [definitionSystem in UnitDefSytem]: Definition;
};
interface UnitTransformationDef {
    readonly abbr: string;
    readonly system: UnitDefSytem;
    readonly unit: Unit;
}
interface Described {
    readonly unit: string;
    readonly system: UnitDefSytem;
    readonly singular: string;
    readonly plural: string;
}
export interface Value extends Described {
    readonly value: number;
}
export declare class Converter {
    private val;
    private definitions;
    private lang;
    private DEFAULT_LANGUAGE;
    private origin;
    private destination;
    constructor(val: number, definitions: Definitions, lang: string);
    from(from: string): this;
    to(to: string): Value;
    toBest(options: Partial<UnitFinderOptions>): Value | undefined;
    getUnit(abbr: string): UnitTransformationDef | undefined;
    list(): Array<Described>;
    describe(abbr: string): Described;
    possibilities(): Array<string>;
}
export declare function converter(definitions: Definitions): (val: number, lang: string) => Converter;
export default converter;
