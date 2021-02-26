import { join } from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default [

  // ---------------------------------------------------------------------------
  // CommonJS

  {
    name: 'cjs',
    entry: './src/index.ts',
    output: {
      path: join( process.cwd(), 'dist/cjs' ),
      libraryTarget: 'commonjs2'
    },
    target: 'web',
    mode: 'production',
    devtool: false,
    resolve: {
      extensions: [ '.ts', '.js' ],
      modules: [ 'node_modules' ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            compilerOptions: {
              target: 'ES5'
            },
            configFile: 'tsconfig.json'
          }
        },
      ],
    }
  },

  // ---------------------------------------------------------------------------
  // ES Module

  {
    name: 'esm',
    entry: './src/index.ts',
    output: {
      path: join( process.cwd(), 'dist/es' ),
      libraryTarget: 'module'
    },
    target: 'web',
    mode: 'production',
    devtool: false,
    optimization: {
      minimizer: [
        new TerserPlugin( {
          test: /\.js(\?.*)?$/i,
          extractComments: false,
          terserOptions: { mangle: true, sourceMap: false }
        } )
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
      modules: [ 'node_modules' ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            compilerOptions: {
              target: 'ES5'
            },
            configFile: 'tsconfig.json'
          }
        },
      ],
    }
  },

  // ---------------------------------------------------------------------------
  // UMD

  {
    name: 'umd',
    entry: './src/index.ts',
    output: {
      filename: 'index.min.js',
      path: join( process.cwd(), 'dist/umd' ),
      libraryTarget: 'umd'
    },
    target: 'web',
    mode: 'production',
    devtool: false,
    optimization: {
      minimizer: [
        new TerserPlugin( {
          test: /\.js(\?.*)?$/i,
          extractComments: false,
          terserOptions: { mangle: true, sourceMap: false }
        } )
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ],
      modules: [ 'node_modules' ],
    },
    module: {
      rules: [
        {
          test: /\.ts$/i,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            compilerOptions: {
              target: 'ES5'
            },
            configFile: 'tsconfig.json'
          }
        },
      ],
    }
  }
];