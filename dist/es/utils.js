const languageStrings = {
    en: require('./lang/en.json'),
    es: require('./lang/es.json')
};
class Converter {
    constructor(val, definitions, lang = 'en') {
        this.val = val;
        this.definitions = definitions;
        this.lang = lang;
    }
    from(from) {
        if (this.destination) {
            throw new Error('.from must be called before .to');
        }
        this.origin = this.getUnit(from);
        if (!this.origin) {
            throw new Error(`Unsupported unit ${from}`);
        }
        return this;
    }
    to(to) {
        if (!this.origin) {
            throw new Error('.to must be called after .from');
        }
        this.destination = this.getUnit(to);
        if (!this.destination) {
            throw new Error(`Unsupported unit ${to}`);
        }
        let result;
        if (this.origin.abbr === this.destination.abbr) {
            return Object.assign({ value: this.val }, this.describe(this.destination.abbr));
        }
        result = this.val * this.origin.unit.to_anchor;
        if (typeof this.origin.unit.anchor_shift === 'number'
            && !Number.isNaN(this.origin.unit.anchor_shift)) {
            result -= this.origin.unit.anchor_shift;
        }
        if (this.origin.system !== this.destination.system) {
            result = this.definitions[this.origin.system].transform(result);
        }
        if (typeof this.destination.unit.anchor_shift === 'number'
            && !Number.isNaN(this.destination.unit.anchor_shift)) {
            result += this.destination.unit.anchor_shift;
        }
        return Object.assign({ value: result / this.destination.unit.to_anchor }, this.describe(this.destination.abbr));
    }
    toBest(options) {
        if (!this.origin) {
            throw new Error('.toBest must be called after .from');
        }
        const opts = Object.assign({
            exclude: [],
            cutOffNumber: 1
        }, options);
        const origin = this.origin;
        return this.list()
            .filter(item => !opts.exclude.includes(item.unit)
            && this.describe(item.unit).system === origin.system)
            .reduce((acc, item) => {
            const result = this.to(item.unit);
            if (!acc || (result.value >= opts.cutOffNumber && result.value < acc.value)) {
                return result;
            }
            return acc;
        }, undefined);
    }
    getUnit(abbr) {
        const systemNames = Object.keys(this.definitions);
        const found = systemNames.reduce((prev, systemName) => {
            if (abbr in this.definitions[systemName].units) {
                prev.push({
                    abbr: abbr,
                    system: systemName,
                    unit: this.definitions[systemName].units[abbr]
                });
            }
            return prev;
        }, []);
        return found.length ? found[0] : undefined;
    }
    list() {
        return this.possibilities().map(abbr => this.describe(abbr));
    }
    describe(abbr) {
        if (!abbr || typeof abbr !== 'string') {
            throw new Error('You must select a unit');
        }
        const unit = this.getUnit(abbr);
        if (!unit) {
            throw new Error(`Unit "${abbr}" not found`);
        }
        return {
            unit: unit.abbr,
            system: unit.system,
            singular: languageStrings[this.lang][unit.unit.name.singular],
            plural: languageStrings[this.lang][unit.unit.name.plural],
        };
    }
    possibilities() {
        return Array.prototype.concat(...Object.keys(this.definitions).map(systemName => Object.keys(this.definitions[systemName].units)));
    }
}
export function converter(definitions) {
    return (val, lang) => {
        return new Converter(val, definitions, lang);
    };
}
export default converter;
