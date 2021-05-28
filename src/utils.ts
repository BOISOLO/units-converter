import langEs from './lang/es';

type UnitDefSytem = 'metric' | string;

interface Unit {
  readonly name: { singular: string; plural: string; };
  readonly to_anchor: number;
  readonly anchor_shift?: number;
}

export interface UnitFinderOptions {
  readonly exclude: Array<any>;
  readonly cutOffNumber: number;
}

interface DefinitionUnits {
  readonly [ unit: string ]: Unit;
}

export interface Definition {
  readonly baseUnit: string;
  readonly transform: ( val: number ) => number;
  readonly units: DefinitionUnits;
}

export type Definitions = {
  readonly [ definitionSystem in UnitDefSytem ]: Definition;
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

interface translateMap {
  [translateKey: string]: string;
}

interface languageMap {
  [langKey: string]: translateMap;
}

const languageStrings: languageMap = {
  es: langEs
}

export class Converter {
  const DEFAULT_LANGUAGE = 'en';

  private origin: UnitTransformationDef | undefined;
  private destination: UnitTransformationDef | undefined;

  constructor( private val: number, private definitions: Definitions, private lang: string) {
    this.lang = this.lang || this.DEFAULT_LANGUAGE;
  }

  public from( from: string ): this {
    if ( this.destination ) { throw new Error( '.from must be called before .to' ); }

    this.origin = this.getUnit( from );

    if ( !this.origin ) {
      throw new Error( `Unsupported unit ${from}` );
    }

    return this;
  }

  public to( to: string ): Value {
    if ( !this.origin ) { throw new Error( '.to must be called after .from' ); }

    this.destination = this.getUnit( to );
    if ( !this.destination ) {
      throw new Error( `Unsupported unit ${to}` );
    }

    let result: number;

    if ( this.origin.abbr === this.destination.abbr ) {
      return Object.assign<Value, Described>(
        { value: this.val } as Value,
        this.describe( this.destination.abbr )
      );
    }

    result = this.val * this.origin.unit.to_anchor;

    if (
      typeof this.origin.unit.anchor_shift === 'number'
      && !Number.isNaN( this.origin.unit.anchor_shift )
    ) {
      result -= this.origin.unit.anchor_shift;
    }

    if ( this.origin.system !== this.destination.system ) {
      result = this.definitions[ this.origin.system ].transform( result );
    }

    if (
      typeof this.destination.unit.anchor_shift === 'number'
      && !Number.isNaN( this.destination.unit.anchor_shift )
    ) {
      result += this.destination.unit.anchor_shift;
    }

    return Object.assign<Value, Described>(
      { value: result / this.destination.unit.to_anchor } as Value,
      this.describe( this.destination.abbr )
    );
  }

  public toBest( options: Partial<UnitFinderOptions> ): Value | undefined {
    if ( !this.origin ) {
      throw new Error( '.toBest must be called after .from' );
    }

    const opts: UnitFinderOptions = Object.assign(
      {
        exclude: [],
        cutOffNumber: 1
      },
      options
    );
    const origin = this.origin;

    return this.list()
      .filter(
        item => !opts.exclude.includes( item.unit )
          && this.describe( item.unit ).system === origin.system
      )
      .reduce(
        ( acc: Value | undefined, item ) => {
          const result = this.to( item.unit );
          if ( !acc || ( result.value >= opts.cutOffNumber && result.value < acc.value ) ) {
            return result;
          }
          return acc;
        },
        undefined
      );
  }

  public getUnit( abbr: string ): UnitTransformationDef | undefined {
    const systemNames = Object.keys( this.definitions );

    const found = systemNames.reduce(
      ( prev: Array<UnitTransformationDef>, systemName ) => {
        if ( abbr in this.definitions[ systemName ].units ) {
          prev.push( {
            abbr: abbr,
            system: systemName,
            unit: this.definitions[ systemName ].units[ abbr ]
          } );
        }
        return prev;
      },
      []
    );
    return found.length ? found[ 0 ] : undefined;
  }

  public list() : Array<Described> {
    return this.possibilities().map( abbr => this.describe( abbr ) );
  }

  public describe( abbr: string ): Described {
    let singular: string;
    let plural: string;

    if ( !abbr || typeof abbr !== 'string' ) {
      throw new Error( 'You must select a unit' );
    }

    const unit = this.getUnit( abbr );

    if ( !unit ) {
      throw new Error( `Unit "${abbr}" not found` );
    }

    if (this.lang == this.DEFAULT_LANGUAGE) {
      singular = unit.unit.name.singular;
      plural = unit.unit.name.plural;
    } else {
      singular = languageStrings[this.lang][unit.unit.name.singular];
      plural = languageStrings[this.lang][unit.unit.name.plural];
    }

    return {
      unit: unit.abbr,
      system: unit.system,
      singular: singular,
      plural: plural,
    };
  }

  public possibilities(): Array<string> {
    return Array.prototype.concat(
      ...Object.keys( this.definitions ).map(
        systemName => Object.keys( this.definitions[ systemName ].units )
      )
    );
  }
}

export function converter( definitions: Definitions ) {
  return ( val: number, lang: string ) : Converter => {
    return new Converter( val, definitions, lang );
  };
}

export default converter;